/**
 * Extract events data from PUG template files
 * Converts embedded JSON in PUG files to TypeScript data file
 */

const fs = require('fs');
const path = require('path');

// Parse date string to ISO format
function parseDate(dateStr, fallbackYear) {
  // Handle missing dates
  if (!dateStr || dateStr.trim() === '') {
    return `${fallbackYear}-01-01`;
  }

  // Handle date ranges (take first date)
  if (dateStr.includes('-')) {
    const parts = dateStr.split('-');
    if (parts.length === 2 && parts[1].includes(',')) {
      // Format like "November 15-16, 2021"
      dateStr = parts[0] + ', ' + dateStr.split(',')[1];
    }
  }

  // Try to parse the date
  try {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) {
      // If parsing failed and no year in string, add fallback year
      if (!dateStr.match(/\d{4}/)) {
        date = new Date(`${dateStr}, ${fallbackYear}`);
      }
      if (isNaN(date.getTime())) {
        console.warn(`Unable to parse date: "${dateStr}", using fallback`);
        return `${fallbackYear}-01-01`;
      }
    }

    // Format as YYYY-MM-DD
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  } catch (err) {
    console.warn(`Error parsing date: "${dateStr}", using fallback`);
    return `${fallbackYear}-01-01`;
  }
}

// Determine event type from location and title
function determineEventType(title, location) {
  const titleLower = title.toLowerCase();
  const locationLower = location.toLowerCase();

  if (titleLower.includes('summit') || locationLower.includes('summit')) {
    return 'summit';
  }
  if (locationLower.includes('webinar') || locationLower.includes('training')) {
    return 'webinar';
  }
  if (locationLower.includes('online') || locationLower.includes('virtual') || location.includes('®')) {
    return 'virtual';
  }
  if (locationLower.includes('podcast')) {
    return 'podcast';
  }
  if (titleLower.includes('meetup') || locationLower.includes('meetup')) {
    return 'meetup';
  }
  if (locationLower.includes('conference') || locationLower.includes('con ') ||
      locationLower.includes('apachecon') || locationLower.includes('developerweek')) {
    return 'conference';
  }

  // Default to conference for physical locations
  return 'conference';
}

// Create safe ID from title
function createId(year, index, title) {
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .substring(0, 50);
  return `${year}-${String(index).padStart(2, '0')}-${slug}`;
}

// Extract events from a PUG file
function extractEventsFromPug(filePath, year) {
  console.log(`Processing ${path.basename(filePath)}...`);

  const content = fs.readFileSync(filePath, 'utf8');

  // Find the JSON array in backticks
  const match = content.match(/let events\d+ = `(\[[\s\S]*?\])`/);

  if (!match) {
    console.warn(`No events data found in ${filePath}`);
    return [];
  }

  try {
    const jsonStr = match[1];
    const eventsArray = JSON.parse(jsonStr);

    console.log(`  Found ${eventsArray.length} events`);

    return eventsArray.map((event, index) => {
      // Handle speaker array (may have HTML in it)
      const speakers = event.speaker
        ? event.speaker.map(s => s.replace(/<[^>]*>/g, '').trim()).filter(Boolean)
        : [];

      const date = parseDate(event.data || event.date, year);
      const type = determineEventType(event.title, event.loc);
      const id = createId(year, index, event.title);

      return {
        id,
        title: event.title.trim(),
        type,
        date,
        location: event.loc.trim(),
        link: event.link.trim(),
        ...(speakers.length > 0 && { speakers }),
      };
    });
  } catch (err) {
    console.error(`Error parsing ${filePath}:`, err.message);
    return [];
  }
}

// Main extraction
async function main() {
  const eventsDir = path.join(__dirname, '../../_src/_components/events');
  const years = [2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014];

  let allEvents = [];

  for (const year of years) {
    const filePath = path.join(eventsDir, `${year}.pug`);
    if (fs.existsSync(filePath)) {
      const events = extractEventsFromPug(filePath, year);
      allEvents = allEvents.concat(events);
    } else {
      console.warn(`File not found: ${filePath}`);
    }
  }

  // Remove duplicates (some years have duplicate entries)
  const seen = new Set();
  const uniqueEvents = allEvents.filter(event => {
    const key = `${event.title}-${event.date}`;
    if (seen.has(key)) {
      console.log(`  Removing duplicate: ${event.title} (${event.date})`);
      return false;
    }
    seen.add(key);
    return true;
  });

  console.log(`\nTotal events: ${allEvents.length}`);
  console.log(`Unique events: ${uniqueEvents.length}`);
  console.log(`Duplicates removed: ${allEvents.length - uniqueEvents.length}`);

  // Sort by date descending
  uniqueEvents.sort((a, b) => b.date.localeCompare(a.date));

  // Generate TypeScript file
  const typeDefComments = `/**
 * Events data for Apache Ignite
 * Extracted from PUG templates (2014-2022)
 * Generated: ${new Date().toISOString().split('T')[0]}
 */`;

  const typeDefinitions = `
export type EventType = 'summit' | 'meetup' | 'conference' | 'webinar' | 'virtual' | 'podcast';

export interface Event {
  id: string;
  title: string;
  type: EventType;
  date: string; // ISO format YYYY-MM-DD
  location: string;
  link: string;
  speakers?: string[];
}`;

  const eventsArray = `\nexport const EVENTS: Event[] = [\n${uniqueEvents
    .map(event => {
      const speakersStr = event.speakers
        ? `\n    speakers: ${JSON.stringify(event.speakers)},`
        : '';

      return `  {
    id: '${event.id}',
    title: ${JSON.stringify(event.title)},
    type: '${event.type}',
    date: '${event.date}',
    location: ${JSON.stringify(event.location)},
    link: ${JSON.stringify(event.link)},${speakersStr}
  }`;
    })
    .join(',\n')}\n];\n`;

  const outputFile = typeDefComments + typeDefinitions + eventsArray;

  const outputPath = path.join(__dirname, '../src/data/events.ts');
  fs.writeFileSync(outputPath, outputFile, 'utf8');

  console.log(`\nGenerated: ${outputPath}`);
  console.log(`Total unique events: ${uniqueEvents.length}`);

  // Print event type breakdown
  const typeBreakdown = uniqueEvents.reduce((acc, event) => {
    acc[event.type] = (acc[event.type] || 0) + 1;
    return acc;
  }, {});

  console.log('\nEvent type breakdown:');
  Object.entries(typeBreakdown)
    .sort((a, b) => b[1] - a[1])
    .forEach(([type, count]) => {
      console.log(`  ${type}: ${count}`);
    });
}

main().catch(console.error);

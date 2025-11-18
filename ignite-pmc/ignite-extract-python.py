#!/usr/bin/env python3
"""
Extract ALL Apache Ignite PMC committee information and create a comprehensive Markdown document.
"""

import json
import urllib.request
from datetime import datetime

# URL to fetch committee data
COMMITTEE_URL = "https://whimsy.apache.org/public/committee-info.json"
OUTPUT_FILE = "ignite-committee-info.md"

def fetch_committee_data():
    """Fetch committee data from Apache Whimsy."""
    print(f"Fetching data from {COMMITTEE_URL}...")
    with urllib.request.urlopen(COMMITTEE_URL) as response:
        data = json.loads(response.read().decode())
    return data

def format_date(epoch):
    """Convert epoch time to readable date."""
    if epoch:
        return datetime.fromtimestamp(epoch).strftime('%B %d, %Y %H:%M:%S UTC')
    return "N/A"

def format_value(value):
    """Format a value for display."""
    if isinstance(value, bool):
        return "Yes" if value else "No"
    elif isinstance(value, (int, float)):
        return str(value)
    elif isinstance(value, list):
        return ", ".join(str(v) for v in value)
    elif isinstance(value, dict):
        return "[Complex Object - see details below]"
    elif value is None:
        return "N/A"
    return str(value)

def create_markdown(data):
    """Create comprehensive Markdown document from Ignite committee data."""
    
    ignite = data['committees'].get('ignite')
    if not ignite:
        print("Error: Ignite project not found in committee data")
        return None
    
    # Build Markdown content
    md = []
    md.append("# Apache Ignite PMC Committee Information - Complete Report\n")
    md.append(f"*Data extracted from Apache Whimsy on {datetime.now().strftime('%B %d, %Y at %H:%M:%S')}*\n")
    md.append("---\n")
    
    # Project Overview - ALL top-level fields except roster and chair
    md.append("## Project Overview\n")
    md.append("| Field | Value |")
    md.append("|-------|-------|")
    
    # Define fields that should be handled specially (not in the basic table)
    special_fields = {'roster', 'chair'}
    
    # Get all keys and display them
    for key in sorted(ignite.keys()):
        if key not in special_fields:
            value = ignite[key]
            formatted_value = format_value(value)
            # Clean up field name for display
            field_name = key.replace('_', ' ').title()
            md.append(f"| **{field_name}** | {formatted_value} |")
    
    md.append("")
    
    # Reporting Schedule (expanded detail)
    if 'report' in ignite:
        md.append("## Reporting Schedule\n")
        reports = ignite['report']
        md.append("Ignite reports to the Apache Board quarterly in:")
        for month in reports:
            md.append(f"- **{month}**")
        md.append("")
    
    # Next Board Meeting (with more detail)
    if 'nextMeetingEpoch' in ignite:
        md.append("## Next Board Meeting\n")
        next_meeting = format_date(ignite['nextMeetingEpoch'])
        md.append(f"- **Date/Time**: {next_meeting}")
        md.append(f"- **Epoch Timestamp**: {ignite['nextMeetingEpoch']}\n")
    
    # PMC Chair (detailed)
    md.append("## PMC Chair\n")
    chair = ignite.get('chair', {})
    if chair:
        for username, info in chair.items():
            md.append(f"### Current Chair\n")
            md.append(f"- **Name**: {info.get('name', 'Unknown')}")
            md.append(f"- **Apache ID**: `{username}`")
            # Include any additional chair fields
            for key, value in info.items():
                if key != 'name':
                    md.append(f"- **{key.title()}**: {value}")
    else:
        md.append("*No chair information available*")
    md.append("")
    
    # PMC Roster (comprehensive)
    md.append("## PMC Roster\n")
    md.append(f"### Summary\n")
    md.append(f"- **Total Members**: {ignite.get('roster_count', 0)}")
    md.append(f"- **Roster Key**: `{list(ignite.get('roster', {}).keys())[0] if ignite.get('roster') else 'N/A'}` (first member example)\n")
    
    roster = ignite.get('roster', {})
    if roster:
        md.append("### Complete Member List\n")
        md.append("| Apache ID | Name | Joined | Additional Info |")
        md.append("|-----------|------|--------|-----------------|")
        
        # Sort by join date (most recent first)
        sorted_roster = sorted(roster.items(), 
                             key=lambda x: x[1].get('date', ''), 
                             reverse=True)
        
        for username, info in sorted_roster:
            name = info.get('name', 'Unknown')
            date = info.get('date', 'Unknown')
            # Collect any additional fields beyond name and date
            additional = []
            for key, value in info.items():
                if key not in ['name', 'date']:
                    additional.append(f"{key}: {value}")
            additional_str = "; ".join(additional) if additional else "—"
            md.append(f"| `{username}` | {name} | {date} | {additional_str} |")
        
        # Roster statistics
        md.append("\n### Roster Statistics\n")
        
        # Count by year
        years = {}
        for username, info in roster.items():
            date_str = info.get('date', '')
            if date_str:
                year = date_str.split('-')[0]
                years[year] = years.get(year, 0) + 1
        
        if years:
            md.append("#### Members Joined by Year\n")
            for year in sorted(years.keys(), reverse=True):
                md.append(f"- **{year}**: {years[year]} member(s)")
            md.append("")
    else:
        md.append("*No roster information available*\n")
    
    # Raw JSON snippet for reference
    md.append("## Raw Data Structure\n")
    md.append("### Available Fields in Ignite Committee Object\n")
    md.append("```")
    md.append(f"Total fields: {len(ignite.keys())}")
    md.append(f"Fields: {', '.join(sorted(ignite.keys()))}")
    md.append("```\n")
    
    # Data Source and Metadata
    md.append("---\n")
    md.append("## Data Source & Metadata\n")
    md.append("### Whimsy API Information\n")
    md.append(f"- **Source**: Apache Whimsy Committee Info API")
    md.append(f"- **URL**: {COMMITTEE_URL}")
    md.append(f"- **Last Updated**: {data.get('last_updated', 'Unknown')}")
    md.append("")
    
    md.append("### Apache Foundation Statistics\n")
    md.append(f"- **Total Apache Committees**: {data.get('committee_count', 'Unknown')}")
    md.append(f"- **Total Apache PMCs**: {data.get('pmc_count', 'Unknown')}")
    
    # Include next board meetings info if available
    if 'nextBoardMeetings' in data:
        md.append("\n### Upcoming Board Meetings (All Projects)\n")
        meetings = data['nextBoardMeetings']
        for meeting_name, meeting_info in meetings.items():
            if isinstance(meeting_info, dict) and 'display' in meeting_info:
                md.append(f"- **{meeting_name}**: {meeting_info['display']}")
    
    md.append("\n### Roster Counts (All Projects)\n")
    if 'roster_counts' in data:
        roster_counts = data['roster_counts']
        md.append(f"- **Ignite Roster Count**: {roster_counts.get('ignite', 'Unknown')}")
        
        # Calculate statistics
        all_counts = list(roster_counts.values())
        avg_size = sum(all_counts) / len(all_counts) if all_counts else 0
        
        largest_pmc = max(roster_counts.items(), key=lambda x: x[1])
        largest_name, largest_count = largest_pmc[0], largest_pmc[1]
        
        # Filter out zero counts for smallest
        non_zero_counts = [(k, v) for k, v in roster_counts.items() if v > 0]
        if non_zero_counts:
            smallest_pmc = min(non_zero_counts, key=lambda x: x[1])
            smallest_name, smallest_count = smallest_pmc[0], smallest_pmc[1]
        else:
            smallest_name, smallest_count = "N/A", 0
        
        md.append(f"- **Average PMC Size**: {avg_size:.1f} members")
        md.append(f"- **Largest PMC**: {largest_name} ({largest_count} members)")
        md.append(f"- **Smallest PMC**: {smallest_name} ({smallest_count} members)")
    
    md.append("\n---")
    md.append("\n*This report contains ALL fields available in the committee-info.json file for the Apache Ignite project.*\n")
    
    return "\n".join(md)

def main():
    """Main execution."""
    try:
        # Fetch data
        data = fetch_committee_data()
        
        # Create Markdown
        markdown_content = create_markdown(data)
        
        if markdown_content:
            # Write to file
            with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
                f.write(markdown_content)
            
            ignite_data = data['committees']['ignite']
            print(f"\n✓ Successfully created {OUTPUT_FILE}")
            print(f"  Total PMC members: {ignite_data['roster_count']}")
            print(f"  Total fields extracted: {len(ignite_data.keys())}")
            print(f"  Fields: {', '.join(sorted(ignite_data.keys()))}")
        else:
            print("Failed to create Markdown document")
            return 1
            
    except Exception as e:
        print(f"Error: {e}")
        import traceback
        traceback.print_exc()
        return 1
    
    return 0

if __name__ == "__main__":
    exit(main())
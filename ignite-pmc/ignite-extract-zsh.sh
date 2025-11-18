#!/usr/bin/env zsh
#
# Extract ALL Apache Ignite PMC committee information and create a comprehensive Markdown document.
# Requires: curl (or httpie), jq
#

set -e

COMMITTEE_URL="https://whimsy.apache.org/public/committee-info.json"
OUTPUT_FILE="ignite-committee-info.md"
TEMP_JSON="/tmp/committee-info.json"

echo "Fetching data from $COMMITTEE_URL..."

# Fetch data (use curl if http/httpie not available)
if command -v http &> /dev/null; then
    http GET "$COMMITTEE_URL" > "$TEMP_JSON"
elif command -v curl &> /dev/null; then
    curl -s "$COMMITTEE_URL" > "$TEMP_JSON"
else
    echo "Error: Neither 'http' nor 'curl' found. Please install one."
    exit 1
fi

# Check if jq is available
if ! command -v jq &> /dev/null; then
    echo "Error: 'jq' is required but not found. Install with: brew install jq"
    exit 1
fi

# Extract Ignite data
if ! jq -e '.committees.ignite' "$TEMP_JSON" > /dev/null; then
    echo "Error: Ignite project not found in committee data"
    rm "$TEMP_JSON"
    exit 1
fi

# Create Markdown document
cat > "$OUTPUT_FILE" << HEADER
# Apache Ignite PMC Committee Information - Complete Report

*Data extracted from Apache Whimsy on $(date '+%B %d, %Y at %H:%M:%S')*

---

HEADER

# Project Overview - Extract ALL top-level fields dynamically
echo "## Project Overview" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"
echo "| Field | Value |" >> "$OUTPUT_FILE"
echo "|-------|-------|" >> "$OUTPUT_FILE"

# Get all keys from the ignite object, excluding roster and chair (handled separately)
jq -r '.committees.ignite | to_entries | map(select(.key != "roster" and .key != "chair")) | sort_by(.key) | .[] | 
  "| **" + (.key | gsub("_"; " ") | . as $k | ($k[0:1] | ascii_upcase) + ($k[1:] | ascii_downcase)) + "** | " + 
  (if (.value | type) == "boolean" then (if .value then "Yes" else "No" end)
   elif (.value | type) == "array" then (.value | join(", "))
   elif (.value | type) == "object" then "[Complex Object - see details below]"
   elif .value == null then "N/A"
   else (.value | tostring) end) + " |"' "$TEMP_JSON" >> "$OUTPUT_FILE"

echo "" >> "$OUTPUT_FILE"

# Reporting Schedule
echo "## Reporting Schedule" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"
echo "Ignite reports to the Apache Board quarterly in:" >> "$OUTPUT_FILE"

jq -r '.committees.ignite.report[]' "$TEMP_JSON" | while read -r month; do
    echo "- **$month**" >> "$OUTPUT_FILE"
done

echo "" >> "$OUTPUT_FILE"

# Next Board Meeting with details
echo "## Next Board Meeting" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

NEXT_MEETING_EPOCH=$(jq -r '.committees.ignite.nextMeetingEpoch' "$TEMP_JSON")
if [[ "$NEXT_MEETING_EPOCH" != "null" ]]; then
    # Try GNU date first, then BSD date
    NEXT_MEETING=$(date -d "@$NEXT_MEETING_EPOCH" '+%B %d, %Y %H:%M:%S UTC' 2>/dev/null || date -r "$NEXT_MEETING_EPOCH" '+%B %d, %Y %H:%M:%S UTC' 2>/dev/null)
    echo "- **Date/Time**: $NEXT_MEETING" >> "$OUTPUT_FILE"
    echo "- **Epoch Timestamp**: $NEXT_MEETING_EPOCH" >> "$OUTPUT_FILE"
fi
echo "" >> "$OUTPUT_FILE"

# PMC Chair (with all fields)
echo "## PMC Chair" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

CHAIR_EXISTS=$(jq -r '.committees.ignite.chair | length' "$TEMP_JSON")
if [[ "$CHAIR_EXISTS" != "0" && "$CHAIR_EXISTS" != "null" ]]; then
    echo "### Current Chair" >> "$OUTPUT_FILE"
    echo "" >> "$OUTPUT_FILE"
    
    # Extract chair info dynamically
    jq -r '.committees.ignite.chair | to_entries[] | 
      "- **Name**: " + .value.name + "\n- **Apache ID**: `" + .key + "`\n" + 
      (.value | to_entries | map(select(.key != "name")) | .[] | "- **" + (.key | ascii_upcase) + "**: " + (.value | tostring)) | join("\n"))' \
      "$TEMP_JSON" >> "$OUTPUT_FILE"
else
    echo "*No chair information available*" >> "$OUTPUT_FILE"
fi
echo "" >> "$OUTPUT_FILE"

# PMC Roster
echo "## PMC Roster" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

ROSTER_COUNT=$(jq -r '.committees.ignite.roster_count' "$TEMP_JSON")

echo "### Summary" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"
echo "- **Total Members**: $ROSTER_COUNT" >> "$OUTPUT_FILE"
FIRST_MEMBER=$(jq -r '.committees.ignite.roster | keys[0]' "$TEMP_JSON")
echo "- **Roster Key**: \`$FIRST_MEMBER\` (first member example)" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

echo "### Complete Member List" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"
echo "| Apache ID | Name | Joined | Additional Info |" >> "$OUTPUT_FILE"
echo "|-----------|------|--------|-----------------|" >> "$OUTPUT_FILE"

# Sort by date (most recent first) and include all fields
jq -r '.committees.ignite.roster | to_entries | sort_by(.value.date) | reverse[] | 
  "| `" + .key + "` | " + .value.name + " | " + .value.date + " | " + 
  (if (.value | keys | length) > 2 then 
    (.value | to_entries | map(select(.key != "name" and .key != "date")) | .[] | .key + ": " + (.value | tostring)) | join("; ")
   else "—" end) + " |"' "$TEMP_JSON" >> "$OUTPUT_FILE"

# Roster Statistics
echo "" >> "$OUTPUT_FILE"
echo "### Roster Statistics" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"
echo "#### Members Joined by Year" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

# Count members by year
jq -r '.committees.ignite.roster | [.[] | .date[0:4]] | group_by(.) | map({year: .[0], count: length}) | sort_by(.year) | reverse[] | "- **" + .year + "**: " + (.count | tostring) + " member(s)"' "$TEMP_JSON" >> "$OUTPUT_FILE"

echo "" >> "$OUTPUT_FILE"

# Raw Data Structure
echo "## Raw Data Structure" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"
echo "### Available Fields in Ignite Committee Object" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"
echo '```' >> "$OUTPUT_FILE"

FIELD_COUNT=$(jq -r '.committees.ignite | keys | length' "$TEMP_JSON")
FIELD_LIST=$(jq -r '.committees.ignite | keys | sort | join(", ")' "$TEMP_JSON")

echo "Total fields: $FIELD_COUNT" >> "$OUTPUT_FILE"
echo "Fields: $FIELD_LIST" >> "$OUTPUT_FILE"
echo '```' >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

# Data Source and Metadata
echo "---" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"
echo "## Data Source & Metadata" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

echo "### Whimsy API Information" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"
echo "- **Source**: Apache Whimsy Committee Info API" >> "$OUTPUT_FILE"
echo "- **URL**: $COMMITTEE_URL" >> "$OUTPUT_FILE"

LAST_UPDATED=$(jq -r '.last_updated' "$TEMP_JSON")
echo "- **Last Updated**: $LAST_UPDATED" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

echo "### Apache Foundation Statistics" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

COMMITTEE_COUNT=$(jq -r '.committee_count' "$TEMP_JSON")
PMC_COUNT=$(jq -r '.pmc_count' "$TEMP_JSON")

echo "- **Total Apache Committees**: $COMMITTEE_COUNT" >> "$OUTPUT_FILE"
echo "- **Total Apache PMCs**: $PMC_COUNT" >> "$OUTPUT_FILE"

# Upcoming board meetings
if jq -e '.nextBoardMeetings' "$TEMP_JSON" > /dev/null; then
    echo "" >> "$OUTPUT_FILE"
    echo "### Upcoming Board Meetings (All Projects)" >> "$OUTPUT_FILE"
    echo "" >> "$OUTPUT_FILE"
    
    jq -r '.nextBoardMeetings | to_entries[] | "- **" + .key + "**: " + .value.display' "$TEMP_JSON" >> "$OUTPUT_FILE"
fi

# Roster statistics
echo "" >> "$OUTPUT_FILE"
echo "### Roster Counts (All Projects)" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

IGNITE_COUNT=$(jq -r '.roster_counts.ignite' "$TEMP_JSON")
AVERAGE_SIZE=$(jq -r '.roster_counts | [.[] | select(. > 0)] | add / length | floor' "$TEMP_JSON")
LARGEST_PMC=$(jq -r '.roster_counts | to_entries | max_by(.value) | .key + " (" + (.value | tostring) + " members)"' "$TEMP_JSON")
SMALLEST_PMC=$(jq -r '.roster_counts | to_entries | select(.value > 0) | min_by(.value) | .key + " (" + (.value | tostring) + " members)"' "$TEMP_JSON")

echo "- **Ignite Roster Count**: $IGNITE_COUNT" >> "$OUTPUT_FILE"
echo "- **Average PMC Size**: $AVERAGE_SIZE members" >> "$OUTPUT_FILE"
echo "- **Largest PMC**: $LARGEST_PMC" >> "$OUTPUT_FILE"
echo "- **Smallest PMC**: $SMALLEST_PMC" >> "$OUTPUT_FILE"

echo "" >> "$OUTPUT_FILE"
echo "---" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"
echo "*This report contains ALL fields available in the committee-info.json file for the Apache Ignite project.*" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

# Cleanup
rm "$TEMP_JSON"

echo ""
echo "✓ Successfully created $OUTPUT_FILE"
echo "  Total PMC members: $ROSTER_COUNT"
echo "  Total fields extracted: $FIELD_COUNT"
echo "  Fields: $FIELD_LIST"
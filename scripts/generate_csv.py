import os
import csv
import re
import yaml

input_dir = "../_projects/"
output_csv = "fellows.csv"

fieldnames = [
    "name", "institute", "description", "img", "category",
    "fellow-type", "related_publications", "body"
]

def parse_front_matter_and_body(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Split YAML front matter and body
    match = re.match(r'^---\s*\n(.*?)\n---\s*\n?(.*)', content, re.DOTALL)
    if not match:
        raise ValueError(f"File {filepath} is missing valid front matter.")

    front_matter = yaml.safe_load(match.group(1))
    body = match.group(2).strip()

    # Normalize and return row data
    return {
        "name": front_matter.get("title", ""),
        "institute": front_matter.get("institute", ""),
        "description": front_matter.get("description", ""),
        "img": front_matter.get("img", ""),
        "category": front_matter.get("category", ""),
        "fellow-type": front_matter.get("fellow-type", ""),
        "related_publications": str(front_matter.get("related_publications", False)).lower(),
        "body": body
    }


# Read all markdown files and collect rows
rows = []
for filename in os.listdir(input_dir):
    if filename.endswith(".md"):
        path = os.path.join(input_dir, filename)
        row = parse_front_matter_and_body(path)
        rows.append(row)

# Write to CSV
with open(output_csv, 'w', newline='', encoding='utf-8') as csvfile:
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
    writer.writeheader()
    writer.writerows(rows)

print(f"✅ Generated {output_csv} with {len(rows)} entries.")

import csv
import os

importance_map = { #this is so that institutes are in alphabetical order. update if institutes change in the future. 
    "UC San Diego": 3,
    "SDSU": 2,
    "CSUSB": 1
}

output_dir = "_projects"
os.makedirs(output_dir, exist_ok=True)

with open("fellows.csv", newline='', encoding='utf-8') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        name = row["name"]
        institute = row["institute"]
        importance = importance_map.get(institute, 0)  # default to 0 if unknown

        # Build filename
        filename = os.path.join(output_dir, f"{name.replace(' ', '')}.md")

        with open(filename, 'w', encoding='utf-8') as mdfile:
            mdfile.write(f"""---
layout: fellow
title: {name}
institute: {institute}
description: {row['description']}
img: {row['img']}
importance: {importance}
category: "{row['category']}"
fellow-type: {row['fellow-type']}
related_publications: {row['related_publications'].lower()}
---

{row['body']}
""") #close file 
import re

with open(r'C:\Users\8hung\.gemini\antigravity-ide\brain\37d3d791-47d7-406c-8169-6d0b6aab0b8c\.system_generated\steps\2966\content.md', 'r', encoding='utf-8') as f:
    html = f.read()

# Find all markdown-body divs
for m in re.finditer(r'markdown-body[^>]*>(.*?)</div>', html, re.DOTALL):
    text = re.sub('<[^<]+?>', '', m.group(1)).strip()
    text = re.sub(r'\s+', ' ', text)
    if len(text) > 20:
        print(text)
        print("-" * 80)

#!/usr/bin/env python3
"""
One-time helper: decodes the Greece hero image (already downloaded from Drive)
and puts it in the right place for the website.
Run by double-clicking this file in Finder, or: python3 copy-greece-image.command
"""
import json, base64, os, sys

src = "/var/folders/vj/05y9dl810tjf5z19c14djct40000gn/T/claude-hostloop-plugins/7f98daee0bc51bc2/projects/-Users-rohanmodwel-Library-Application-Support-Claude-local-agent-mode-sessions-e10fd5b2-c0da-4493-b3ba-5e5f5fcce6a0-79e629d8-2a17-4352-8bd8-480490a74bd3-local-00cf1bdc-1fd2-4f4a-aec0-68c3c6b8613a-out-s1lvvx/839061f7-3f00-45b4-a0d6-f54af7caa726/tool-results/mcp-3a3ff9d6-8a6d-46e6-a948-8cdd36fc6a48-download_file_content-1782341958451.txt"
dst = os.path.expanduser("~/WineResearch/public/images/photo-greece-hero.jpg")

if not os.path.exists(src):
    print("❌  Temp file not found — the Drive download may have expired.")
    print("    Please re-share the Greece image link with Claude to re-download it.")
    input("Press Enter to close.")
    sys.exit(1)

print("Decoding image...")
with open(src) as f:
    data = json.load(f)

img_bytes = base64.b64decode(data["content"])
with open(dst, "wb") as out:
    out.write(img_bytes)

print(f"✅  Done! Written {len(img_bytes):,} bytes to:")
print(f"    {dst}")
input("Press Enter to close.")

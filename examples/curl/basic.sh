#!/bin/bash
# VibeCodeCheap - Basic cURL Example

API_KEY="your_api_key"  # Replace with your actual API key
BASE_URL="https://api.vibecodecheap.com/v1/ai"

curl "${BASE_URL}/chat/completions" \
  -H "Authorization: Bearer ${API_KEY}" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "claude-sonnet-4-5",
    "messages": [
      {"role": "system", "content": "You are a helpful coding assistant."},
      {"role": "user", "content": "Write a bash script to backup a directory."}
    ]
  }'

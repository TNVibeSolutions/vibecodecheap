#!/bin/bash
# VibeCodeCheap - Streaming cURL Example

API_KEY="your_api_key"  # Replace with your actual API key
BASE_URL="https://api.vibecodecheap.com/v1/ai"

curl "${BASE_URL}/chat/completions" \
  -H "Authorization: Bearer ${API_KEY}" \
  -H "Content-Type: application/json" \
  -N \
  -d '{
    "model": "claude-sonnet-4-5",
    "messages": [
      {"role": "user", "content": "Explain Docker containers in simple terms."}
    ],
    "stream": true
  }'

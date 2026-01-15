#!/bin/bash
# VibeCodeCheap - Streaming cURL Example (Anthropic API Format)

API_KEY="${API_KEY:-your_api_key}"  # Replace with your actual API key
BASE_URL="https://api.vibecodecheap.com/v1/ai"

curl "${BASE_URL}/messages" \
  -H "x-api-key: ${API_KEY}" \
  -H "anthropic-version: 2023-06-01" \
  -H "Content-Type: application/json" \
  -N \
  -d '{
    "model": "claude-sonnet-4-5",
    "max_tokens": 1024,
    "messages": [
      {"role": "user", "content": "Explain Docker containers in simple terms."}
    ],
    "stream": true
  }'

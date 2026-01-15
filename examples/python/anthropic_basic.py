"""
VibeCodeCheap - Basic Python Example
Using Anthropic SDK with VibeCodeCheap API (Recommended)
"""

import anthropic

client = anthropic.Anthropic(
    base_url="https://api.vibecodecheap.com/v1/ai",
    api_key="your_api_key"  # Replace with your actual API key
)

message = client.messages.create(
    model="claude-sonnet-4-5",
    max_tokens=1024,
    messages=[
        {"role": "user", "content": "Write a Python function to calculate fibonacci numbers."}
    ]
)

print(message.content[0].text)

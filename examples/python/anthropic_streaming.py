"""
VibeCodeCheap - Streaming Example
Using Anthropic SDK with streaming responses (Recommended)
"""

import anthropic

client = anthropic.Anthropic(
    base_url="https://api.vibecodecheap.com/v1/ai",
    api_key="your_api_key"  # Replace with your actual API key
)

with client.messages.stream(
    model="claude-sonnet-4-5",
    max_tokens=1024,
    messages=[
        {"role": "user", "content": "Explain how async/await works in Python."}
    ]
) as stream:
    for text in stream.text_stream:
        print(text, end="", flush=True)

print()  # New line at the end

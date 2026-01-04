"""
VibeCodeCheap - Streaming Example
Demonstrates streaming responses with OpenAI SDK
"""

from openai import OpenAI

# Initialize client
client = OpenAI(
    base_url="https://api.vibecodecheap.com/v1/ai",
    api_key="your_api_key"  # Replace with your actual API key
)

# Streaming chat completion
stream = client.chat.completions.create(
    model="claude-sonnet-4-5",
    messages=[
        {"role": "user", "content": "Explain how async/await works in Python."}
    ],
    stream=True
)

# Print streamed response
for chunk in stream:
    if chunk.choices[0].delta.content:
        print(chunk.choices[0].delta.content, end="", flush=True)

print()  # New line at the end

"""
VibeCodeCheap - Basic Python Example
Using OpenAI SDK with VibeCodeCheap API
"""

from openai import OpenAI

# Initialize client
client = OpenAI(
    base_url="https://api.vibecodecheap.com/v1/ai",
    api_key="your_api_key"  # Replace with your actual API key
)

# Simple chat completion
response = client.chat.completions.create(
    model="claude-sonnet-4-5",
    messages=[
        {"role": "system", "content": "You are a helpful coding assistant."},
        {"role": "user", "content": "Write a Python function to calculate fibonacci numbers."}
    ]
)

print(response.choices[0].message.content)

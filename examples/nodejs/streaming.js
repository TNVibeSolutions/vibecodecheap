/**
 * VibeCodeCheap - Streaming Node.js Example
 * Demonstrates streaming responses with OpenAI SDK
 */

import OpenAI from 'openai';

// Initialize client
const client = new OpenAI({
  baseURL: 'https://api.vibecodecheap.com/v1/ai',
  apiKey: 'your_api_key', // Replace with your actual API key
});

async function main() {
  // Streaming chat completion
  const stream = await client.chat.completions.create({
    model: 'claude-sonnet-4-5',
    messages: [
      { role: 'user', content: 'Explain how promises work in JavaScript.' },
    ],
    stream: true,
  });

  // Print streamed response
  for await (const chunk of stream) {
    const content = chunk.choices[0]?.delta?.content || '';
    process.stdout.write(content);
  }

  console.log(); // New line at the end
}

main();

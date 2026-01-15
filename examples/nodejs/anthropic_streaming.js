/**
 * VibeCodeCheap - Streaming Node.js Example
 * Using Anthropic SDK with streaming responses (Recommended)
 */

import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic({
  baseURL: 'https://api.vibecodecheap.com/v1/ai',
  apiKey: 'your_api_key', // Replace with your actual API key
});

async function main() {
  const stream = client.messages.stream({
    model: 'claude-sonnet-4-5',
    max_tokens: 1024,
    messages: [
      { role: 'user', content: 'Explain how promises work in JavaScript.' },
    ],
  });

  stream.on('text', (text) => {
    process.stdout.write(text);
  });

  await stream.finalMessage();
  console.log(); // New line at the end
}

main();

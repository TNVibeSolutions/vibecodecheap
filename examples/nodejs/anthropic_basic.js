/**
 * VibeCodeCheap - Basic Node.js Example
 * Using Anthropic SDK with VibeCodeCheap API (Recommended)
 */

import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic({
  baseURL: 'https://api.vibecodecheap.com/v1/ai',
  apiKey: 'your_api_key', // Replace with your actual API key
});

async function main() {
  const message = await client.messages.create({
    model: 'claude-sonnet-4-5',
    max_tokens: 1024,
    messages: [
      { role: 'user', content: 'Write a TypeScript function to validate email addresses.' },
    ],
  });

  console.log(message.content[0].text);
}

main();

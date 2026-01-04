/**
 * VibeCodeCheap - Basic Node.js Example
 * Using OpenAI SDK with VibeCodeCheap API
 */

import OpenAI from 'openai';

// Initialize client
const client = new OpenAI({
  baseURL: 'https://api.vibecodecheap.com/v1/ai',
  apiKey: 'your_api_key', // Replace with your actual API key
});

async function main() {
  // Simple chat completion
  const response = await client.chat.completions.create({
    model: 'claude-sonnet-4-5',
    messages: [
      { role: 'system', content: 'You are a helpful coding assistant.' },
      { role: 'user', content: 'Write a TypeScript function to validate email addresses.' },
    ],
  });

  console.log(response.choices[0].message.content);
}

main();

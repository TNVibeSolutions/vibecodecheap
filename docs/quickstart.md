# Quick Start Guide

Get started with VibeCodeCheap in minutes.

## 1. Create an Account

1. Go to [vibecodecheap.com](https://vibecodecheap.com)
2. Sign up with your email or Google account
3. Choose a plan (Pro or Max)

## 2. Get Your API Key

1. Navigate to [Dashboard → API Keys](https://vibecodecheap.com/dashboard/api-keys)
2. Click "Create New Key"
3. Copy and save your API key securely

> ⚠️ **Important:** Your API key will only be shown once. Store it safely!

## 3. Configure Your Tool

### Claude Code

```bash
export ANTHROPIC_BASE_URL=https://api.vibecodecheap.com/v1/ai
export ANTHROPIC_API_KEY=your_api_key
```

### Cursor

1. Open Cursor Settings
2. Go to Models → OpenAI API
3. Set Base URL: `https://api.vibecodecheap.com/v1/ai`
4. Set API Key: `your_api_key`

### Windsurf

1. Open Settings
2. Navigate to AI Provider
3. Set Base URL: `https://api.vibecodecheap.com/v1/ai`
4. Set API Key: `your_api_key`

### Aider

```bash
export OPENAI_API_BASE=https://api.vibecodecheap.com/v1/ai
export OPENAI_API_KEY=your_api_key

aider --model claude-sonnet-4-5
```

### Continue.dev

Add to your `config.json`:

```json
{
  "models": [
    {
      "title": "Claude Sonnet 4.5",
      "provider": "openai",
      "model": "claude-sonnet-4-5",
      "apiBase": "https://api.vibecodecheap.com/v1/ai",
      "apiKey": "your_api_key"
    }
  ]
}
```

## 4. Start Using

### Python

```python
from openai import OpenAI

client = OpenAI(
    base_url="https://api.vibecodecheap.com/v1/ai",
    api_key="your_api_key"
)

response = client.chat.completions.create(
    model="claude-sonnet-4-5",
    messages=[{"role": "user", "content": "Hello!"}]
)
print(response.choices[0].message.content)
```

### Node.js

```javascript
import OpenAI from 'openai';

const client = new OpenAI({
  baseURL: 'https://api.vibecodecheap.com/v1/ai',
  apiKey: 'your_api_key',
});

const response = await client.chat.completions.create({
  model: 'claude-sonnet-4-5',
  messages: [{ role: 'user', content: 'Hello!' }],
});
console.log(response.choices[0].message.content);
```

## Available Models

| Model | ID | Best For |
|-------|-----|----------|
| Claude Opus 4.5 Thinking | `claude-opus-4-5-thinking` | Complex reasoning tasks |
| Claude Sonnet 4.5 Thinking | `claude-sonnet-4-5-thinking` | Balanced with extended thinking |
| Claude Sonnet 4.5 | `claude-sonnet-4-5` | General coding tasks |
| Gemini 3 Pro | `gemini-3-pro` | Multimodal, large context |
| Gemini 3 Flash | `gemini-3-flash` | Quick tasks |
| GLM 4.7 🆓 | `glm-4.7` | Code generation (Free) |
| GPT 5 Mini 🆓 | `gpt-5-mini` | Fast responses (Free) |

## Need Help?

- 📧 Email: vibecodecheap@gmail.com
- 💬 Discord: [Join our community](https://discord.gg/vibecodecheap)
- 📖 [Full API Reference](api-reference.md)

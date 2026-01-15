# Node.js Examples

Examples using VibeCodeCheap API with Node.js.

## Setup

```bash
# Install Anthropic SDK (Recommended)
npm install @anthropic-ai/sdk
# or
pnpm add @anthropic-ai/sdk

# Or install OpenAI SDK
npm install openai
# or
pnpm add openai
```

## Configuration

Set your API key as environment variable:

```bash
# For Anthropic SDK
export ANTHROPIC_API_KEY=your_api_key
export ANTHROPIC_BASE_URL=https://api.vibecodecheap.com/v1/ai

# For OpenAI SDK
export OPENAI_API_KEY=your_api_key
export OPENAI_BASE_URL=https://api.vibecodecheap.com/v1/ai/v1
```

## Examples

### Anthropic SDK (Recommended)

| File | Description |
|------|-------------|
| `anthropic_basic.js` | Simple chat completion |
| `anthropic_streaming.js` | Streaming response |

```bash
node anthropic_basic.js
node anthropic_streaming.js
```

### OpenAI SDK

| File | Description |
|------|-------------|
| `basic.js` | Simple chat completion |
| `streaming.js` | Streaming response |

```bash
node basic.js
node streaming.js
```

## Support

- 📧 Email: support@vibecodecheap.com
- 💬 Discord: [Join our community](https://discord.gg/wUJ4ddwk35)

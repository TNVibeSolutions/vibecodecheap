# API Reference

VibeCodeCheap provides a unified API that is 100% compatible with OpenAI and Anthropic APIs.

## Base URLs

| API Type | Base URL |
|----------|----------|
| **Anthropic API** | `https://api.vibecodecheap.com/v1/ai` |
| **OpenAI API** | `https://api.vibecodecheap.com/v1/ai/v1` |

## Authentication

All API requests require an API key in the `Authorization` header:

```
Authorization: Bearer your_api_key
```

For Anthropic API, you can also use:
```
x-api-key: your_api_key
```

---

## OpenAI API Format

### Chat Completions

Create a chat completion.

**Endpoint:** `POST https://api.vibecodecheap.com/v1/ai/v1/chat/completions`

**Request:**

```json
{
  "model": "claude-sonnet-4-5",
  "messages": [
    {"role": "system", "content": "You are a helpful assistant."},
    {"role": "user", "content": "Hello!"}
  ],
  "temperature": 0.7,
  "max_tokens": 1000,
  "stream": false
}
```

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `model` | string | Yes | Model ID to use |
| `messages` | array | Yes | Array of message objects |
| `temperature` | number | No | Sampling temperature (0-2). Default: 1 |
| `max_tokens` | integer | No | Maximum tokens to generate |
| `stream` | boolean | No | Enable streaming. Default: false |
| `top_p` | number | No | Nucleus sampling parameter |
| `stop` | string/array | No | Stop sequences |

**Response:**

```json
{
  "id": "chatcmpl-xxx",
  "object": "chat.completion",
  "created": 1234567890,
  "model": "claude-sonnet-4-5",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "Hello! How can I help you today?"
      },
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 10,
    "completion_tokens": 8,
    "total_tokens": 18
  }
}
```

---

## Anthropic API Format

### Messages

Create a message.

**Endpoint:** `POST https://api.vibecodecheap.com/v1/ai/messages`

**Request:**

```json
{
  "model": "claude-sonnet-4-5",
  "max_tokens": 1024,
  "messages": [
    {"role": "user", "content": "Hello!"}
  ]
}
```

**Headers:**

```
x-api-key: your_api_key
anthropic-version: 2023-06-01
Content-Type: application/json
```

**Response:**

```json
{
  "id": "msg_xxx",
  "type": "message",
  "role": "assistant",
  "content": [
    {
      "type": "text",
      "text": "Hello! How can I help you today?"
    }
  ],
  "model": "claude-sonnet-4-5",
  "stop_reason": "end_turn",
  "usage": {
    "input_tokens": 10,
    "output_tokens": 12
  }
}
```

---

## Streaming

### OpenAI Format

```bash
curl https://api.vibecodecheap.com/v1/ai/v1/chat/completions \
  -H "Authorization: Bearer your_api_key" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "claude-sonnet-4-5",
    "messages": [{"role": "user", "content": "Hello!"}],
    "stream": true
  }'
```

### Anthropic Format

```bash
curl https://api.vibecodecheap.com/v1/ai/messages \
  -H "x-api-key: your_api_key" \
  -H "anthropic-version: 2023-06-01" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "claude-sonnet-4-5",
    "max_tokens": 1024,
    "messages": [{"role": "user", "content": "Hello!"}],
    "stream": true
  }'
```

Streaming responses use Server-Sent Events (SSE) format.

---

## Available Models

### Premium Models

| Model | ID | Context | Description |
|-------|-----|---------|-------------|
| Claude Opus 4.5 Thinking | `claude-opus-4-5-thinking` | 200K | Complex reasoning with extended thinking |
| Claude Sonnet 4.5 Thinking | `claude-sonnet-4-5-thinking` | 200K | Balanced with extended thinking |
| Claude Sonnet 4.5 | `claude-sonnet-4-5` | 200K | Best balance of speed and intelligence |
| Gemini 3 Pro | `gemini-3-pro` | 1M+ | Multimodal with massive context |
| Gemini 3 Flash | `gemini-3-flash` | 1M+ | Fast and efficient |

### Free Models (Unlimited)

| Model | ID | Description |
|-------|-----|-------------|
| GLM 4.7 | `glm-4.7` | Excellent code generation |
| GLM 4.6 | `glm-4.6` | Strong general-purpose model |
| GPT 5 Mini | `gpt-5-mini` | Compact and fast |

---

## Error Handling

### Error Response Format

```json
{
  "error": {
    "message": "Error description",
    "type": "error_type",
    "code": "error_code"
  }
}
```

### Common Error Codes

| Code | HTTP Status | Description |
|------|-------------|-------------|
| `invalid_api_key` | 401 | Invalid or missing API key |
| `rate_limit_exceeded` | 429 | Rate limit exceeded |
| `insufficient_quota` | 402 | Token quota exceeded |
| `model_not_found` | 404 | Invalid model ID |
| `server_error` | 500 | Internal server error |

---

## Rate Limits

Rate limits depend on your plan:

| Plan | Requests/min | Tokens/min |
|------|--------------|------------|
| Pro | 60 | 100,000 |
| Max 5x | 90 | 250,000 |
| Max 20x | 120 | 500,000 |

When rate limited, you'll receive a `429` response with a `Retry-After` header.

---

## SDK Examples

### Python (Anthropic SDK) - Recommended

```python
import anthropic

client = anthropic.Anthropic(
    base_url="https://api.vibecodecheap.com/v1/ai",
    api_key="your_api_key"
)

message = client.messages.create(
    model="claude-sonnet-4-5",
    max_tokens=1024,
    messages=[{"role": "user", "content": "Hello!"}]
)
print(message.content[0].text)
```

### Python (OpenAI SDK)

```python
from openai import OpenAI

client = OpenAI(
    base_url="https://api.vibecodecheap.com/v1/ai/v1",
    api_key="your_api_key"
)

response = client.chat.completions.create(
    model="claude-sonnet-4-5",
    messages=[{"role": "user", "content": "Hello!"}]
)
print(response.choices[0].message.content)
```

### Node.js (Anthropic SDK) - Recommended

```javascript
import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic({
  baseURL: 'https://api.vibecodecheap.com/v1/ai',
  apiKey: 'your_api_key',
});

const message = await client.messages.create({
  model: 'claude-sonnet-4-5',
  max_tokens: 1024,
  messages: [{ role: 'user', content: 'Hello!' }],
});
console.log(message.content[0].text);
```

### Node.js (OpenAI SDK)

```javascript
import OpenAI from 'openai';

const client = new OpenAI({
  baseURL: 'https://api.vibecodecheap.com/v1/ai/v1',
  apiKey: 'your_api_key',
});

const response = await client.chat.completions.create({
  model: 'claude-sonnet-4-5',
  messages: [{ role: 'user', content: 'Hello!' }],
});
console.log(response.choices[0].message.content);
```

### cURL (OpenAI Format)

```bash
curl https://api.vibecodecheap.com/v1/ai/v1/chat/completions \
  -H "Authorization: Bearer your_api_key" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "claude-sonnet-4-5",
    "messages": [{"role": "user", "content": "Hello!"}]
  }'
```

### cURL (Anthropic Format)

```bash
curl https://api.vibecodecheap.com/v1/ai/messages \
  -H "x-api-key: your_api_key" \
  -H "anthropic-version: 2023-06-01" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "claude-sonnet-4-5",
    "max_tokens": 1024,
    "messages": [{"role": "user", "content": "Hello!"}]
  }'
```

---

## Support

- 📧 Email: support@vibecodecheap.com
- 💬 Discord: [Join our community](https://discord.gg/wUJ4ddwk35)
- 🐙 GitHub: [vibecodecheap/vibecodecheap](https://github.com/vibecodecheap/vibecodecheap)

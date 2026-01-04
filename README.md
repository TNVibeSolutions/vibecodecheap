<div align="center">

[![English](https://img.shields.io/badge/lang-English-blue?style=flat-square)](README.md)
[![Tiếng Việt](https://img.shields.io/badge/lang-Tiếng%20Việt-red?style=flat-square)](README-vi.md)

# 🚀 VibeCodeCheap

### One API, All Top LLMs

**Premium LLM Models at Up to 70% Off — Perfect for Claude Code and all AI coding agents**

[![Website](https://img.shields.io/badge/Website-vibecodecheap.com-blue?style=for-the-badge)](https://vibecodecheap.com)
[![Discord](https://img.shields.io/badge/Discord-Join%20Us-7289da?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/vibecodecheap)

</div>

---

## ✨ Why VibeCodeCheap?

✅ **Affordable** — Premium models at budget prices  
✅ **Compatible** — 100% OpenAI & Anthropic API compatible  
✅ **Reliable** — 99.9% uptime SLA  
✅ **Fast** — Low latency streaming responses  
✅ **Secure** — No logging, no data retention  

> 💡 **Just change your base URL** — Works with Claude Code, Cursor, Windsurf, and any OpenAI-compatible tool!

---

## ⚡ Quick Start

### Using with Claude Code

```bash
export ANTHROPIC_BASE_URL=https://api.vibecodecheap.com/v1/ai
export ANTHROPIC_API_KEY=your_api_key
```

### Using with OpenAI SDK

```bash
export OPENAI_BASE_URL=https://api.vibecodecheap.com/v1/ai
export OPENAI_API_KEY=your_api_key
```

### Python Example

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

### Node.js Example

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

### cURL Example

```bash
curl https://api.vibecodecheap.com/v1/ai/chat/completions \
  -H "Authorization: Bearer your_api_key" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "claude-sonnet-4-5",
    "messages": [{"role": "user", "content": "Hello!"}]
  }'
```

---

## 🤖 Available Models

### Premium Models

| Model | ID | Description |
|-------|-----|-------------|
| **Claude Opus 4.5 Thinking** | `claude-opus-4-5-thinking` | Most intelligent for complex reasoning with extended thinking |
| **Claude Sonnet 4.5 Thinking** | `claude-sonnet-4-5-thinking` | Best balance with extended thinking capability |
| **Claude Sonnet 4.5** | `claude-sonnet-4-5` | Best balance of intelligence and speed |
| **Gemini 3 Pro** | `gemini-3-pro` | Multimodal powerhouse with massive context |
| **Gemini 3 Flash** | `gemini-3-flash` | Fast and efficient for quick tasks |

### Free Models (Unlimited) 🆓

| Model | ID | Description |
|-------|-----|-------------|
| **GLM 4.7** | `glm-4.7` | Excellent code generation capabilities |
| **GLM 4.6** | `glm-4.6` | Strong general-purpose model |
| **GPT 5 Mini** | `gpt-5-mini` | Compact and fast from OpenAI |

---

## 💳 Pricing

### 💎 Pro — $7.99/month (169.000đ)

> **More than Claude Pro ($20)** • 10x more than Cursor Pro

- ✅ All premium models (Claude Opus 4.5, Sonnet 4.5, Gemini 3 Pro...)
- ✅ Unlimited free models (GLM 4.7, GPT 5 Mini)
- ✅ Flagship model updates
- ✅ Standard rate limits

### 🚀 Max — $49.99/month (999.000đ)

> **More than Claude Max 20x ($200)** • 10x more than Cursor Max

- ✅ All premium models
- ✅ Unlimited free models
- ✅ Higher rate limits
- ✅ Priority support
- ✅ Early access to new features

[![View Full Pricing](https://img.shields.io/badge/View%20Full%20Pricing-vibecodecheap.com-green?style=for-the-badge)](https://vibecodecheap.com/#pricing)

---

## 🛠️ Compatible Tools

Works seamlessly with:

| Tool | Configuration |
|------|---------------|
| **Claude Code** | Set `ANTHROPIC_BASE_URL` |
| **Cursor** | OpenAI-compatible settings |
| **Windsurf** | OpenAI-compatible settings |
| **Aider** | Set `OPENAI_API_BASE` |
| **Continue.dev** | Custom provider config |
| **Any OpenAI SDK** | Just change `base_url` |

---

## 📚 Documentation

- [Quick Start Guide](docs/quickstart.md)
- [Pricing Details](docs/pricing.md)
- [API Reference](docs/api-reference.md)

### Examples

- [Python Examples](examples/python/)
- [Node.js Examples](examples/nodejs/)
- [cURL Examples](examples/curl/)

---

## 📞 Support

- 📧 Email: vibecodecheap@gmail.com
- 🌐 Website: [vibecodecheap.com](https://vibecodecheap.com)
- 💬 Discord: [Join our community](https://discord.gg/vibecodecheap)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Made with ❤️ for developers who love AI but hate high API bills**

[Get Started →](https://vibecodecheap.com)

*AI power, human prices.*

</div>

<div align="center">

[![English](https://img.shields.io/badge/lang-English-blue?style=flat-square)](README.md)
[![Tiếng Việt](https://img.shields.io/badge/lang-Tiếng%20Việt-red?style=flat-square)](README-vi.md)

# 🚀 VibeCodeCheap

### One API, All Top LLMs

**Premium LLM Models at Up to 80% Off — Perfect for Claude Code and all AI coding agents**

[![Website](https://img.shields.io/badge/Website-vibecodecheap.com-blue?style=for-the-badge)](https://vibecodecheap.com)
[![Discord](https://img.shields.io/badge/Discord-Join%20Us-7289da?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/wUJ4ddwk35)
[![Facebook](https://img.shields.io/badge/Facebook-VibeCodeCheap-1877F2?style=for-the-badge&logo=facebook&logoColor=white)](https://www.facebook.com/vibecodecheap.cc)
[![GitHub](https://img.shields.io/badge/GitHub-vibecodecheap-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/vibecodecheap/vibecodecheap)

</div>

---

## ✨ Why VibeCodeCheap?

✅ **Affordable** — Premium models at budget prices (up to 80% off)  
✅ **Compatible** — 100% OpenAI & Anthropic API compatible  
✅ **Reliable** — 99.9% uptime SLA  
✅ **Fast** — Low latency streaming responses  
✅ **Secure** — No logging, no data retention  

> 💡 **Just change your base URL** — Works with Claude Code, Cursor, Windsurf, Amp, and any OpenAI-compatible tool!

---

## ⚡ Quick Start

### Using with Claude Code

```bash
export ANTHROPIC_BASE_URL=https://api.vibecodecheap.com/v1/ai
export ANTHROPIC_API_KEY=your_api_key
```

### Using with OpenAI SDK

```bash
export OPENAI_BASE_URL=https://api.vibecodecheap.com/v1/ai/v1
export OPENAI_API_KEY=your_api_key
```

### Python Example

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

### Node.js Example

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

### cURL Example

```bash
curl https://api.vibecodecheap.com/v1/ai/v1/chat/completions \
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

### Subscription Plans

| Plan | Price | Best For |
|------|-------|----------|
| 💎 **Claude Pro** | $7.99/mo | Individual developers |
| 🚀 **Claude Max 5x** | $29.99/mo | Power users & teams |
| ⭐ **Claude Max 20x** | $49.99/mo | Professional developers |

#### 💎 Claude Pro — $7.99/month

> **More than Claude Pro ($20)** • 10x more than Cursor Pro

- ✅ All premium models (Claude Opus 4.5, Sonnet 4.5, Gemini 3 Pro...)
- ✅ Unlimited free models (GLM 4.7, GPT 5 Mini)
- ✅ Standard rate limits

#### 🚀 Claude Max 5x — $29.99/month *(Most Popular)*

> **More than Claude Max 5x ($100)** • 5x more than Pro plan

- ✅ All Pro plan benefits
- ✅ Higher rate limits
- ✅ Priority support

#### ⭐ Claude Max 20x — $49.99/month *(Best Value)*

> **More than Claude Max 20x ($200)** • 10x more than Cursor Max

- ✅ All Pro plan benefits
- ✅ Highest rate limits
- ✅ Priority support 24/7
- ✅ Early access to new features

---

### 💰 Pay-as-You-Go

No subscription? No problem! Top up and use credits.

| Feature | Benefit |
|---------|---------|
| 🎁 **$3 Welcome Bonus** | Get $3 free credit on signup |
| 💵 **5x Credit Bonus** | Top up $1, get $5 credit |
| 📊 **Transparent Pricing** | Pay only for what you use |
| ⚡ **No Commitment** | No monthly fees |

#### Token Pricing (80% OFF)

| Model | Input | Output |
|-------|-------|--------|
| Claude Opus 4.5 | $1.00/M | $5.00/M |
| Claude Sonnet 4.5 | $0.60/M | $3.00/M |
| Gemini 3 Pro | $0.40/M | $2.40/M |

[![View Full Pricing](https://img.shields.io/badge/View%20Full%20Pricing-vibecodecheap.com-green?style=for-the-badge)](https://vibecodecheap.com/#pricing)

---

## 🛠️ Compatible Tools

Works seamlessly with:

| Tool | Configuration |
|------|---------------|
| **Claude Code** | Set `ANTHROPIC_BASE_URL` |
| **Cursor** | OpenAI-compatible settings |
| **Windsurf** | OpenAI-compatible settings |
| **Amp** | Set `ANTHROPIC_BASE_URL` |
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

- 📧 Email: support@vibecodecheap.com
- 🌐 Website: [vibecodecheap.com](https://vibecodecheap.com)
- 💬 Discord: [Join our community](https://discord.gg/wUJ4ddwk35)
- 📘 Facebook: [VibeCodeCheap](https://www.facebook.com/vibecodecheap.cc)
- 🐙 GitHub: [vibecodecheap/vibecodecheap](https://github.com/vibecodecheap/vibecodecheap)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Made with ❤️ for developers who love AI but hate high API bills**

[Get Started →](https://vibecodecheap.com)

*AI power, human prices.*

</div>

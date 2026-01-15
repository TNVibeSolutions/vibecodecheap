<div align="center">

[![English](https://img.shields.io/badge/lang-English-blue?style=flat-square)](README.md)
[![Tiếng Việt](https://img.shields.io/badge/lang-Tiếng%20Việt-red?style=flat-square)](README-vi.md)

# 🚀 VibeCodeCheap

### Một API, Tất Cả LLM Hàng Đầu

**API LLM Cao Cấp - Giảm Đến 80% — Hoàn hảo cho Claude Code và tất cả AI coding agents**

[![Website](https://img.shields.io/badge/Website-vibecodecheap.com-blue?style=for-the-badge)](https://vibecodecheap.com/vi)
[![Discord](https://img.shields.io/badge/Discord-Tham%20Gia-7289da?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/wUJ4ddwk35)
[![Facebook](https://img.shields.io/badge/Facebook-VibeCodeCheap-1877F2?style=for-the-badge&logo=facebook&logoColor=white)](https://www.facebook.com/vibecodecheapvn.cc)
[![GitHub](https://img.shields.io/badge/GitHub-vibecodecheap-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/vibecodecheap/vibecodecheap)

</div>

---

## ✨ Tại sao chọn VibeCodeCheap?

✅ **Giá rẻ** — Model cao cấp, giảm đến 80%  
✅ **Tương thích** — 100% tương thích OpenAI & Anthropic API  
✅ **Ổn định** — SLA uptime 99.9%  
✅ **Nhanh** — Độ trễ thấp, streaming mượt mà  
✅ **Bảo mật** — Không log, không lưu dữ liệu  

> 💡 **Chỉ cần đổi base URL** — Hoạt động với Claude Code, Cursor, Windsurf, Amp, và bất kỳ công cụ tương thích OpenAI!

---

## ⚡ Bắt Đầu Nhanh

### Sử dụng với Claude Code

```bash
export ANTHROPIC_BASE_URL=https://api.vibecodecheap.com/v1/ai
export ANTHROPIC_API_KEY=your_api_key
```

### Sử dụng với OpenAI SDK

```bash
export OPENAI_BASE_URL=https://api.vibecodecheap.com/v1/ai/v1
export OPENAI_API_KEY=your_api_key
```

### Ví dụ Python

```python
from openai import OpenAI

client = OpenAI(
    base_url="https://api.vibecodecheap.com/v1/ai/v1",
    api_key="your_api_key"
)

response = client.chat.completions.create(
    model="claude-sonnet-4-5",
    messages=[{"role": "user", "content": "Xin chào!"}]
)
print(response.choices[0].message.content)
```

### Ví dụ Node.js

```javascript
import OpenAI from 'openai';

const client = new OpenAI({
  baseURL: 'https://api.vibecodecheap.com/v1/ai/v1',
  apiKey: 'your_api_key',
});

const response = await client.chat.completions.create({
  model: 'claude-sonnet-4-5',
  messages: [{ role: 'user', content: 'Xin chào!' }],
});
console.log(response.choices[0].message.content);
```

### Ví dụ cURL

```bash
curl https://api.vibecodecheap.com/v1/ai/v1/chat/completions \
  -H "Authorization: Bearer your_api_key" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "claude-sonnet-4-5",
    "messages": [{"role": "user", "content": "Xin chào!"}]
  }'
```

---

## 🤖 Các Model Khả Dụng

### Model Cao Cấp

| Model | ID | Mô tả |
|-------|-----|-------|
| **Claude Opus 4.5 Thinking** | `claude-opus-4-5-thinking` | Thông minh nhất cho suy luận phức tạp với extended thinking |
| **Claude Sonnet 4.5 Thinking** | `claude-sonnet-4-5-thinking` | Cân bằng tốt nhất với extended thinking |
| **Claude Sonnet 4.5** | `claude-sonnet-4-5` | Cân bằng tốt nhất giữa trí tuệ và tốc độ |
| **Gemini 3 Pro** | `gemini-3-pro` | Đa phương thức mạnh mẽ với context khổng lồ |
| **Gemini 3 Flash** | `gemini-3-flash` | Nhanh và hiệu quả cho tác vụ nhanh |

### Model Miễn Phí (Không giới hạn) 🆓

| Model | ID | Mô tả |
|-------|-----|-------|
| **GLM 4.7** | `glm-4.7` | Khả năng sinh code xuất sắc |
| **GLM 4.6** | `glm-4.6` | Model đa năng mạnh mẽ |
| **GPT 5 Mini** | `gpt-5-mini` | Nhỏ gọn và nhanh từ OpenAI |

---

## 💳 Bảng Giá

### Gói Subscription

| Gói | Giá | Phù hợp với |
|-----|-----|-------------|
| 💎 **Claude Pro** | $7.99/tháng | Developer cá nhân |
| 🚀 **Claude Max 5x** | $29.99/tháng | Power users & teams |
| ⭐ **Claude Max 20x** | $49.99/tháng | Developer chuyên nghiệp |

#### 💎 Claude Pro — $7.99/tháng (169.000đ)

> **Nhiều hơn gói Claude Pro ($20)** • Gấp 10 lần Cursor Pro

- ✅ Tất cả model cao cấp (Claude Opus 4.5, Sonnet 4.5, Gemini 3 Pro...)
- ✅ Miễn phí không giới hạn (GLM 4.7, GPT 5 Mini)
- ✅ Rate limit tiêu chuẩn

#### 🚀 Claude Max 5x — $29.99/tháng (599.000đ) *(Phổ biến nhất)*

> **Nhiều hơn Claude Max 5x ($100)** • Gấp 5 lần gói Pro

- ✅ Tất cả quyền lợi gói Pro
- ✅ Rate limit cao hơn
- ✅ Hỗ trợ ưu tiên

#### ⭐ Claude Max 20x — $49.99/tháng (999.000đ) *(Giá trị nhất)*

> **Nhiều hơn Claude Max 20x ($200)** • Gấp 10 lần Cursor Max

- ✅ Tất cả quyền lợi gói Pro
- ✅ Rate limit cao nhất
- ✅ Hỗ trợ ưu tiên 24/7
- ✅ Truy cập sớm tính năng mới

---

### 💰 Trả Theo Sử Dụng (Pay-as-You-Go)

Không muốn subscription? Nạp tiền và dùng credit!

| Tính năng | Lợi ích |
|-----------|---------|
| 🎁 **$3 Chào mừng** | Nhận $3 credit miễn phí khi đăng ký |
| 💵 **5x Credit Bonus** | Nạp $1 nhận $5 credit |
| 📊 **Giá minh bạch** | Chỉ trả cho những gì bạn dùng |
| ⚡ **Không ràng buộc** | Không phí hàng tháng |

#### Giá Token (Giảm 80%)

| Model | Input | Output |
|-------|-------|--------|
| Claude Opus 4.5 | $1.00/M | $5.00/M |
| Claude Sonnet 4.5 | $0.60/M | $3.00/M |
| Gemini 3 Pro | $0.40/M | $2.40/M |

[![Xem Chi Tiết Bảng Giá](https://img.shields.io/badge/Xem%20Chi%20Tiết-vibecodecheap.com-green?style=for-the-badge)](https://vibecodecheap.com/vi/#pricing)

---

## 🛠️ Công Cụ Tương Thích

Hoạt động mượt mà với:

| Công cụ | Cấu hình |
|---------|----------|
| **Claude Code** | Đặt `ANTHROPIC_BASE_URL` |
| **Cursor** | Cài đặt tương thích OpenAI |
| **Windsurf** | Cài đặt tương thích OpenAI |
| **Amp** | Đặt `ANTHROPIC_BASE_URL` |
| **Aider** | Đặt `OPENAI_API_BASE` |
| **Continue.dev** | Config custom provider |
| **Bất kỳ OpenAI SDK** | Chỉ cần đổi `base_url` |

---

## 📚 Tài Liệu

- [Hướng dẫn bắt đầu nhanh](docs/quickstart.md)
- [Chi tiết bảng giá](docs/pricing.md)
- [Tài liệu API](docs/api-reference.md)

### Ví dụ

- [Ví dụ Python](examples/python/)
- [Ví dụ Node.js](examples/nodejs/)
- [Ví dụ cURL](examples/curl/)

---

## 📞 Hỗ Trợ

- 📧 Email: support@vibecodecheap.com
- 🌐 Website: [vibecodecheap.com](https://vibecodecheap.com/vi)
- 💬 Discord: [Tham gia cộng đồng](https://discord.gg/wUJ4ddwk35)
- 📘 Facebook: [VibeCodeCheap VN](https://www.facebook.com/vibecodecheapvn.cc)
- 🐙 GitHub: [vibecodecheap/vibecodecheap](https://github.com/vibecodecheap/vibecodecheap)

---

## 📄 Giấy Phép

Dự án này được cấp phép theo MIT License - xem file [LICENSE](LICENSE) để biết chi tiết.

---

<div align="center">

**Dành cho developer yêu AI nhưng ghét hóa đơn API đắt đỏ ❤️**

[Bắt đầu ngay →](https://vibecodecheap.com/vi)

*Sức mạnh AI, giá cả con người.*

</div>

<div align="center">

[![English](https://img.shields.io/badge/lang-English-blue?style=flat-square)](README.md)
[![Tiếng Việt](https://img.shields.io/badge/lang-Tiếng%20Việt-red?style=flat-square)](README-vi.md)

# 🚀 VibeCodeCheap

### Một API, Tất Cả LLM Hàng Đầu

**API LLM Cao Cấp - Giảm Đến 70% — Hoàn hảo cho Claude Code và tất cả AI coding agents**

[![Website](https://img.shields.io/badge/Website-vibecodecheap.com-blue?style=for-the-badge)](https://vibecodecheap.com/vi)
[![Discord](https://img.shields.io/badge/Discord-Tham%20Gia-7289da?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/vibecodecheap)

</div>

---

## ✨ Tại sao chọn VibeCodeCheap?

✅ **Giá rẻ** — Model cao cấp, giá phải chăng  
✅ **Tương thích** — 100% tương thích OpenAI & Anthropic API  
✅ **Ổn định** — SLA uptime 99.9%  
✅ **Nhanh** — Độ trễ thấp, streaming mượt mà  
✅ **Bảo mật** — Không log, không lưu dữ liệu  

> 💡 **Chỉ cần đổi base URL** — Hoạt động với Claude Code, Cursor, Windsurf, và bất kỳ công cụ tương thích OpenAI!

---

## ⚡ Bắt Đầu Nhanh

### Sử dụng với Claude Code

```bash
export ANTHROPIC_BASE_URL=https://api.vibecodecheap.com/v1/ai
export ANTHROPIC_API_KEY=your_api_key
```

### Sử dụng với OpenAI SDK

```bash
export OPENAI_BASE_URL=https://api.vibecodecheap.com/v1/ai
export OPENAI_API_KEY=your_api_key
```

### Ví dụ Python

```python
from openai import OpenAI

client = OpenAI(
    base_url="https://api.vibecodecheap.com/v1/ai",
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
  baseURL: 'https://api.vibecodecheap.com/v1/ai',
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
curl https://api.vibecodecheap.com/v1/ai/chat/completions \
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

### 💎 Pro — 169.000đ/tháng ($7.99)

> **Nhiều hơn gói Claude Pro ($20)** • Gấp 10 lần Cursor Pro

- ✅ Tất cả model cao cấp (Claude Opus 4.5, Sonnet 4.5, Gemini 3 Pro...)
- ✅ Miễn phí không giới hạn (GLM 4.7, GPT 5 Mini)
- ✅ Cập nhật model flagship
- ✅ Rate limit tiêu chuẩn

### 🚀 Max — 999.000đ/tháng ($49.99)

> **Nhiều hơn Claude Max 20x ($200)** • Gấp 10 lần Cursor Max

- ✅ Tất cả model cao cấp
- ✅ Miễn phí không giới hạn
- ✅ Rate limit cao hơn
- ✅ Hỗ trợ ưu tiên
- ✅ Truy cập sớm tính năng mới

[![Xem Chi Tiết Bảng Giá](https://img.shields.io/badge/Xem%20Chi%20Tiết-vibecodecheap.com-green?style=for-the-badge)](https://vibecodecheap.com/vi/#pricing)

---

## 🛠️ Công Cụ Tương Thích

Hoạt động mượt mà với:

| Công cụ | Cấu hình |
|---------|----------|
| **Claude Code** | Đặt `ANTHROPIC_BASE_URL` |
| **Cursor** | Cài đặt tương thích OpenAI |
| **Windsurf** | Cài đặt tương thích OpenAI |
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
- 💬 Discord: [Tham gia cộng đồng](https://discord.gg/vibecodecheap)

---

## 📄 Giấy Phép

Dự án này được cấp phép theo MIT License - xem file [LICENSE](LICENSE) để biết chi tiết.

---

<div align="center">

**Dành cho developer yêu AI nhưng ghét hóa đơn API đắt đỏ ❤️**

[Bắt đầu ngay →](https://vibecodecheap.com/vi)

*Sức mạnh AI, giá cả con người.*

</div>

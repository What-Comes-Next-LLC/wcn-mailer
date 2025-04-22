# wcn-mailer

**A locally hosted, privacy-first transactional email microservice**  
Built by [What Comes Next, LLC](https://whatcomesnextllc.ai) as part of our commitment to building tools that respect autonomy, transparency, and ownership.

---

## What It Is

`wcn-mailer` is a minimalist Node.js microservice that handles transactional email for What Comes Next, LLC. It was designed out of necessity—when commercial tools like Klaviyo proved too heavy, too invasive, or too complex for what we needed:

> Just send a clean, secure, templated email—from our box, through our stack, with no nonsense.

This service runs on an internal machine (“Laundry Room”) and dispatches messages using [ProtonMail Bridge](https://proton.me/mail/bridge), ensuring full encryption and privacy-compliant outbound email via SMTP on `localhost:1025`.

---

## Why We Built It

We're not trying to reinvent mail servers—we’re trying to reclaim control of communication.

- Send onboarding messages, status updates, donation thank-yous, or anything else
- Never expose customer or supporter data to a cloud third-party unnecessarily
- Use ProtonMail's infrastructure without giving up infrastructure ownership
- Keep our messaging stack as lean, human-readable, and portable as possible

---

## How It Works

The service exposes a single endpoint:

### `POST /send-email`

Send a JSON payload like this:

```json
{
  "to": "someone@example.com",
  "subject": "Welcome to The Catalyst",
  "html": "<p>Hey! You’re in. Here’s what happens next...</p>"
}
```

Under the hood, the request is passed to Nodemailer, which connects via `localhost:1025` to ProtonMail Bridge and delivers the message securely.

---

## Environment Configuration

Create a `.env` file in the root:

```
PROTON_BRIDGE_USER=bridge-generated-username
PROTON_BRIDGE_PASS=bridge-generated-password
PORT=3000
```

Do not check `.env` into version control. `.gitignore` is already configured to keep your secrets safe.

---

## Installation

```bash
git clone https://github.com/your-username/wcn-mailer.git
cd wcn-mailer
npm install
node server.js
```

---

## Design Philosophy

- No marketing stack bloat
- No SaaS middlemen
- No misuse of people’s inboxes
- Every line of code should earn its place.

We believe infrastructure should be understood, owned, and respected—especially when it touches someone else's attention.

---

## Reusability & Integration

This service was originally built for:
- Onboarding new Catalyst users
- Communicating with early supporters and `$1 donors`
- Sending internal updates across What Comes Next projects

You can easily wire it into any frontend via `fetch()`, or use it as a headless API backend for a cron job, webhook, or notification layer.

---

## Part of a Larger Vision

`wcn-mailer` is a foundational component of a broader initiative:
- [`The Catalyst`](https://whatcomesnextllc.ai): Personalized coaching, AI-augmented tracking, and narrative-based fitness transformation.
- [`dontnobodygiveashitjason.org`](https://dontnobodygiveashitjason.org): A storytelling lab for building real tech without pretending to be fine.

---

## License

MIT — because freedom matters.

Built with care by  
**Jason Rashaad**  
Founder | Builder | Rebuilder  
[whatcomesnextllc.ai](https://whatcomesnextllc.ai)
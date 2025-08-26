# 🎯 MorseCoder - Real-time Text ↔ Morse Code Encoder

A sleek, dark-themed Morse code encoder built with Django. Type text and see instant Morse output, then play it back with smooth WebAudio tones. Clean UI, responsive layout, and snappy UX.

![MorseCoder Screenshot](docs/screenshots/Screenshot(243).png)

## 📋 Table of Contents

- [✨ Features](#-features)
- [🖼️ Screenshots](#️-screenshots)
- [🛠️ Technologies Used](#️-technologies-used)
- [📁 Project Structure](#-project-structure)
- [🏗️ Architecture Overview](#️-architecture-overview)
- [🚀 Installation & Setup](#-installation--setup)
- [💻 Usage](#-usage)
- [🔧 Configuration](#-configuration)
- [📦 Dependencies](#-dependencies)
- [📚 API Documentation](#-api-documentation)
- [🤝 Contributing](#-contributing)
- [👥 Contributors](#-contributors)
- [📄 License](#-license)
- [🔗 Useful Resources](#-useful-resources)
- [🧪 Testing](#-testing)
- [🚢 Deployment](#-deployment)
- [🩺 Troubleshooting](#-troubleshooting)
- [❓ FAQ](#-faq)

---

## ✨ Features

### 🔤 Text to Morse, Instantly
- **Live Encoding**: Debounced, real-time conversion as you type
- **Standards-based Mapping**: Letters, numbers, and common punctuation
- **Copy to Clipboard**: Quick copy of Morse output

### 🔊 Smooth Audio Playback
- **WebAudio Tones**: Pure oscillator-based dit/dah playback
- **Natural Timing**: ITU-style unit timing for letters/words
- **No Audio Files**: Lightweight, fast, and consistent

### 🎨 Modern Dark UI/UX
- **Dark Theme**: Custom gradients, subtle shadows, accessible contrast
- **Responsive Layout**: Optimized for mobile and desktop
- **Bootstrap 5**: Familiar, ergonomic components

---

## 🖼️ Screenshots


### Homepage
![Homepage](docs/screenshots/Screenshot(245).png)

---

## 🛠️ Technologies Used

### **Backend**
- **Django 4.2** - Python web framework
- **Python 3.10+** - Language runtime
- **SQLite** - Default local database

### **Frontend**
- **HTML5, CSS3, JavaScript**
- **Bootstrap 5** and **Bootstrap Icons**
- **WebAudio API** for tone generation

### **Dev & Ops**
- **Git** and **pip**

---

## 📁 Project Structure

```
morseCoder/
├── src/
│   ├── main/                    # Django project
│   │   ├── settings.py          # Settings (static dirs, templates)
│   │   ├── urls.py              # Root URL config
│   │   ├── wsgi.py              # WSGI
│   │   └── asgi.py              # ASGI
│   ├── core/                    # App: views, urls, morse logic
│   │   ├── morse.py             # Morse code mapping
│   │   ├── views.py             # home & API view
│   │   ├── urls.py              # app urls
│   │   └── templates/           # app templates (loaded via DIRS)
│   ├── templates/               # Project templates
│   │   ├── base.html            # Base layout
│   │   ├── home.html            # Home page
│   │   └── components/          # Partials (navbar)
│   ├── static/                  # Static assets
│   │   ├── css/dark.css         # Dark theme styles
│   │   └── js/audio.js          # WebAudio player
│   └── manage.py                # Django CLI entry
├── README.md                    # This file
└── LICENSE                      # MIT
```

---

## 🏗️ Architecture Overview

- **Django MVC**: `urls.py` routes → `views.py` render templates or return JSON.
- **Templates**: `base.html` wraps pages; `home.html` implements the UI; partials live in `templates/components/`.
- **Static assets**: Custom dark theme CSS in `static/css/dark.css` and WebAudio logic in `static/js/audio.js`.
- **Morse mapping**: `core/morse.py` contains the symbol mapping; view `text_translate` encodes server-side.
- **Frontend behavior**: `home.html` uses Fetch API for live updates and delegates audio to `window.morseAudio`.

Data flow: user input → fetch `/text_translate/` → JSON response → output textarea → optional audio playback.

---

## 🚀 Installation & Setup

### Prerequisites
- Python 3.10 or higher
- pip
- Git

### Step-by-Step Installation

1. Clone the repository
   ```bash
   git clone https://github.com/Huerte/morseCoder.git
   cd morseCoder
   ```

2. Create and activate a virtual environment
   ```bash
   python -m venv venv
   # Windows
   venv\Scripts\activate
   # macOS/Linux
   # source venv/bin/activate
   ```

3. Install dependencies
   ```bash
   pip install -r requirements.txt
   ```

4. Run database migrations
   ```bash
   cd src
   python manage.py migrate
   ```

5. Run the development server
   ```bash
   python manage.py runserver
   ```

6. Access the app
   - App: `http://127.0.0.1:8000`
   - Admin: `http://127.0.0.1:8000/admin`

> Note: For production, set `DEBUG=False` and configure `ALLOWED_HOSTS`.

---

## 💻 Usage

1. Open the home page
2. Type any text in the left panel
3. See Morse code appear in the right panel
4. Click Play to listen; click Copy to copy output

---

## 🔧 Configuration

Key settings in `src/main/settings.py`:

```python
TEMPLATES = [
    {
        'DIRS': [BASE_DIR / 'templates'],
        'APP_DIRS': True,
    }
]

STATIC_URL = '/static/'
STATICFILES_DIRS = [BASE_DIR / 'static']
```

For deployment, add `STATIC_ROOT` and run `collectstatic`.

---

## 📦 Dependencies

Python runtime dependencies (representative):
- Django 4.2.x

Dev tools (optional but recommended):
- black, isort, flake8, mypy, pytest, pytest-django

Add a `requirements.txt` and pin versions for reproducible builds.

---

## 📚 API Documentation

### Encode Text to Morse
- **Endpoint**: `GET /text_translate/`
- **Query**: `text` (string)
- **Response**: JSON

Request:
```http
GET /text_translate/?text=HELLO%20WORLD
```

Response:
```json
{
  "encoded_code": ".... . .-.. .-.. --- / .-- --- .-. .-.. -.."
}
```

Notes:
- Unsupported characters are skipped
- Words are separated by `/` in the output

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo: `https://github.com/Huerte/morseCoder`
2. Create a feature branch: `git checkout -b feature/amazing`
3. Commit changes: `git commit -m "feat: add amazing"`
4. Push branch: `git push origin feature/amazing`
5. Open a Pull Request

Guidelines:
- Follow existing code style
- Keep UI accessible (contrast, focus states)
- Prefer small, focused PRs

---

## 👥 Contributors

<div align="center">

### 🏆 Project Creators & Maintainers

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/Huerte">
        <img src="https://github.com/Huerte.png" width="100px;" alt="Huerte"/>
        <br />
        <sub><b>!HuerteDev</b></sub>
      </a>
      <br />
      <sub>Backend Developer</sub>
    </td>
  </tr>
  <tr>
    <td colspan="2" align="center"><i>Want to see your avatar here? Check the Contributing section and open a PR.</i></td>
  </tr>
  
</table>

---

### 🤝 Want to Contribute?

We welcome contributions from the community!

[![Contributors](https://img.shields.io/github/contributors/Huerte/morseCoder?style=for-the-badge&color=blue)](https://github.com/Huerte/morseCoder/graphs/contributors)
[![Forks](https://img.shields.io/github/forks/Huerte/morseCoder?style=for-the-badge&color=green)](https://github.com/Huerte/morseCoder/network/members)
[![Stars](https://img.shields.io/github/stars/Huerte/morseCoder?style=for-the-badge&color=yellow)](https://github.com/Huerte/morseCoder/stargazers)
[![Issues](https://img.shields.io/github/issues/Huerte/morseCoder?style=for-the-badge&color=red)](https://github.com/Huerte/morseCoder/issues)

</div>

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🔗 Useful Resources

### Django
- [Django Docs](https://docs.djangoproject.com/)
- [Deployment Checklist](https://docs.djangoproject.com/en/stable/howto/deployment/checklist/)

### Frontend
- [Bootstrap Docs](https://getbootstrap.com/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)

### Audio
- [WebAudio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)

---

## 🧪 Testing

### Run tests
```bash
cd src
pytest -q
```

### Suggested test areas
- `core`: unit tests for `MORSE_CODE` coverage and encoding edge cases
- `views`: response shape and error paths for `/text_translate/`
- `templates`: smoke render for `home.html`

---

## 🚢 Deployment

1. Set environment variables (`DJANGO_SECRET_KEY`, `DJANGO_ALLOWED_HOSTS`, etc.).
2. Configure static files:
   ```python
   STATIC_ROOT = BASE_DIR / 'staticfiles'
   ```
3. Collect static assets:
   ```bash
   python manage.py collectstatic --noinput
   ```
4. Run with a production server (example):
   ```bash
   gunicorn main.wsgi:application --bind 0.0.0.0:8000
   ```
5. Put Gunicorn behind Nginx or your platform’s router.

For simple platforms (e.g., Render/Heroku), see their Django deployment guides.

---

## 🩺 Troubleshooting

- Static files not loading
  - Ensure `STATICFILES_DIRS` is correct locally; set `STATIC_ROOT` in production.
  - Run `collectstatic` and verify your server serves `STATIC_ROOT`.

- 400 Bad Request in production
  - Add your domain/IP to `ALLOWED_HOSTS`.

- No audio playback
  - Some browsers block autoplay; click Play after interaction.
  - Check console for `AudioContext` errors.

---

## ❓ FAQ

- Why encode on the server instead of the client?
  - Keeps logic centralized and testable; clients remain thin.

- Can I add Morse → Text decoding?
  - Yes. Add a reverse mapping and a new endpoint or client-side parser.

- How do I change tone frequency or timing?
  - Edit constants in `static/js/audio.js` (`FREQ`, `DIT_MS`).

---

### 📦 Repository

`morseCoder` on GitHub: `https://github.com/Huerte/morseCoder`
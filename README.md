# ZenWeb

A modern Django-powered website for the ZenSMP Minecraft community, designed to showcase server information, features, gameplay highlights, and community links.

## Highlights

- Responsive single-page experience with Tailwind CSS + DaisyUI
- Community-focused sections: home, features, gallery, and rules
- Live Minecraft server status display on the homepage
- Static asset handling configured for deployment with WhiteNoise

## Tech Stack

- Python 3.12+
- Django 6
- Requests
- WhiteNoise
- Tailwind CSS (CDN) + DaisyUI

## Project Structure

```text
ZenWeb/
├── Pipfile
└── zenweb/
    ├── manage.py
    ├── requirements.txt
    ├── zen/                 # Main app (views, templates, static files)
    └── zenweb/              # Project settings and URL configuration
```

## Getting Started

### 1) Clone and install dependencies

```bash
git clone https://github.com/rkenbperez/ZenWeb.git
cd ZenWeb/zenweb
python -m pip install -r requirements.txt
```

Or, using Pipenv from the repository root:

```bash
git clone https://github.com/rkenbperez/ZenWeb.git
cd ZenWeb
pipenv install
```

### 2) Run database migrations

```bash
python manage.py migrate
```

If using Pipenv without activating a shell:

```bash
pipenv run python manage.py migrate
```

### 3) Start the development server

```bash
python manage.py runserver
```

Pipenv equivalent:

```bash
pipenv run python manage.py runserver
```

Open `http://127.0.0.1:8000/` in your browser.

## Validation

```bash
python manage.py test
python manage.py check
```

Pipenv equivalents:

```bash
pipenv run python manage.py test
pipenv run python manage.py check
```

## Deployment Notes

- Configure production-safe values for `SECRET_KEY`, `DEBUG`, and `ALLOWED_HOSTS`.
- Collect static files before deployment:

```bash
python manage.py collectstatic --noinput
```

## License

No license file is currently defined in this repository.

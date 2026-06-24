Here's the complete README.md with the environment variables section added:

---

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

### 2) Set up environment variables

Create a `.env` file in the project root (`zemweb/.env`):

```bash
cd ..
touch .env
```

Add the following configuration to `.env`:

```env
# Django Settings
SECRET_KEY=your-secret-key-here
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1,zenweb.onrender.com,zensmp.space,www.zensmp.space

# Database - SQLite (default for local development)
# No DATABASE_URL needed - SQLite will be used automatically

# Optional: PostgreSQL for production testing
# DATABASE_URL=postgresql://username:password@localhost:5432/database_name (get key from owner)
```

#### How to Generate a Secret Key

Run this command to generate a new `SECRET_KEY`:

```bash
python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"
```

Or with Pipenv:

```bash
pipenv run python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"
```

Copy the output and paste it as the value for `SECRET_KEY` in your `.env` file.

**Important:** The `.env` file is already in `.gitignore` and should never be committed to version control.

#### How to Get Your Database URL

**For Render (Production):**
1. Log in to your Render dashboard
2. Go to your PostgreSQL database
3. Click on the **"Connections"** tab
4. Copy the **"Internal Connection String"**
5. It will look like: `postgresql://username:password@host.oregon-postgres.render.com:5432/database_name?sslmode=require`
6. Add it to your Render environment variables (not your local `.env`)

**For Local PostgreSQL:**
1. Install PostgreSQL: `sudo apt install postgresql postgresql-contrib` (Ubuntu/WSL)
2. Start PostgreSQL: `sudo service postgresql start`
3. Create a database: `sudo -u postgres psql -c "CREATE DATABASE zenweb_db;"`
4. Your DATABASE_URL will be: `postgresql://postgres:your_password@localhost:5432/zenweb_db`

### 3) Run database migrations

```bash
python manage.py migrate
```

If using Pipenv without activating a shell:

```bash
pipenv run python manage.py migrate
```

### 4) Start the development server

```bash
python manage.py runserver
```

Pipenv equivalent:

```bash
pipenv run python manage.py runserver
```

Open `http://127.0.0.1:8000/` in your browser.

## Environment Variables Reference

| Variable | Description | Example |
|----------|-------------|---------|
| `SECRET_KEY` | Django's cryptographic key | `#t1u%mbc^(d8l&s^(0(*6v0md#v)^s143@xr%n_to@5muv*l_^` |
| `DEBUG` | Development mode toggle | `True` (dev) or `False` (prod) |
| `ALLOWED_HOSTS` | Allowed domain list | `localhost,127.0.0.1,zensmp.space` |
| `DATABASE_URL` | PostgreSQL connection string (optional) | `postgresql://user:pass@localhost:5432/db` |

## Database Options

### SQLite (Default - Recommended for Local Development)

- No setup required - works out of the box
- Data location: `zenweb/db.sqlite3`
- Best for: Quick start, demo, or if you don't need PostgreSQL

### PostgreSQL (Optional - For Production Testing)

1. Install PostgreSQL locally:

   Ubuntu/WSL: `sudo apt install postgresql postgresql-contrib`
   macOS: `brew install postgresql`
   Windows: Download from postgresql.org

2. Start PostgreSQL:

   Ubuntu/WSL: `sudo service postgresql start`
   macOS: `brew services start postgresql`
   Windows: Start the service via Services panel

3. Create a database:

   ```bash
   sudo -u postgres psql
   CREATE DATABASE zenweb_db;
   CREATE USER zenweb_user WITH PASSWORD 'your_password';
   GRANT ALL PRIVILEGES ON DATABASE zenweb_db TO zenweb_user;
   \q
   ```

4. Update `.env` with your `DATABASE_URL`.

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

## Troubleshooting

### ModuleNotFoundError: No module named 'django_tailwind_cli'

Remove `django_tailwind_cli` from `INSTALLED_APPS` in `settings.py` if you're not using Tailwind.

### Connection to server at "localhost" failed

PostgreSQL isn't running or `DATABASE_URL` is incorrect. Make sure PostgreSQL is started and your `.env` `DATABASE_URL` matches your local PostgreSQL credentials.

### .env not loading

Make sure `django-environ` is installed: `pip install django-environ`

### SECRET_KEY not found

Generate a new one using the command above and add it to your `.env` file.

## Deployment Notes

- Configure production-safe values for `SECRET_KEY`, `DEBUG`, and `ALLOWED_HOSTS`.
- Collect static files before deployment:

```bash
python manage.py collectstatic --noinput
```

- For Render deployment, set environment variables in the Render dashboard instead of using a `.env` file.

## License

No license file is currently defined in this repository.

---
update the license sectipn

# Twin Stack Digital - Technical Architecture Documentation

## 1. Overview & Identity

**Twin Stack Digital** is a production-oriented digital agency web platform engineered with a clean, decoupled architecture:
- **Agency Name:** Twin Stack Digital
- **Founders:** Syeda Hira and Hamna Shahid
- **Tagline:** *"We Don't Just Build Websites. We Create Digital Experiences."*
- **Visual Identity:** Bright premium white, electric blue (`#0860F8`), deep navy (`#071B49`), ice blue (`#EAF3FF`), soft gray (`#F4F7FB`), sophisticated gradients, polished 3D accents (light theme).
- **Core Public Services (Future Phases):**
  1. Website Development
  2. Full-Stack Web Application Development (with database)
  3. E-commerce Website Development
- **Contact:** `twinstackdigital.pk@gmail.com` | `+92 310 3701543` / `+92 312 5215289` | Karachi, Pakistan

---

## 2. Monorepo Directory Structure

The repository maintains strict separation of concerns across clients, services, and documentation:

```text
Twinstack-digital/
├── assets/                    # Static brand assets, vector logos, client media
│   └── README.md
├── backend/                   # Laravel 12 REST API
│   ├── app/                   # Core application logic, models, controllers
│   ├── bootstrap/
│   │   └── app.php            # Application routing (apiPrefix: api/v1) & middleware
│   ├── config/
│   │   └── cors.php           # Scoped CORS configuration for local & production origins
│   ├── database/
│   │   └── migrations/        # Database schema definitions
│   ├── routes/
│   │   ├── api.php            # Versioned API routes (/api/v1/health)
│   │   ├── web.php            # Base fallback web routes
│   │   └── console.php        # Artisan commands
│   ├── tests/
│   │   ├── Feature/           # Feature tests (HealthCheckTest.php)
│   │   └── Unit/              # Unit tests
│   ├── .env.example           # Sanitized environment template
│   └── composer.json
├── frontend/                  # React + Vite Single Page Application
│   ├── src/
│   │   ├── components/        # Reusable UI components (StatusBadge, InfoCards)
│   │   │   └── 3d/            # Three.js / R3F Canvas components (TechnicalCanvas)
│   │   ├── hooks/             # Custom React hooks (useApiHealth)
│   │   ├── layouts/           # App layouts (AppLayout)
│   │   ├── pages/             # Route pages (TechnicalVerificationPage)
│   │   ├── services/          # HTTP service layer (api.js)
│   │   ├── styles/            # CSS variables & design tokens (variables.css, index.css)
│   │   ├── App.jsx            # Router and layout configuration
│   │   └── main.jsx           # React DOM root entry
│   ├── .env.example           # Frontend environment template
│   ├── index.html             # Application HTML shell
│   ├── package.json           # Dependencies and build scripts
│   └── vite.config.js         # Vite bundler configuration
├── docs/                      # Technical documentation & phase milestone reports
│   ├── ARCHITECTURE.md        # Architecture specification (this file)
│   └── phase-1-report.md      # Phase 1 verification and readiness report
├── .gitignore                 # Root gitignore excluding vendors, node_modules, and .env
└── README.md                  # Developer quickstart and execution runbook
```

---

## 3. Technology Stack

### Frontend
- **Runtime & Bundler:** Node.js v24.17.0 / npm 11.13.0 / Vite 8.3.5
- **UI Framework:** React 19.3.1
- **Navigation:** React Router 7.18.5
- **3D Engine:** Three.js 0.186.1, `@react-three/fiber` 9.8.2, `@react-three/drei` 10.7.9
- **Animations:** GSAP 3.15.0
- **Icons:** Lucide React 1.63.0
- **Styling:** CSS3 Custom Properties with glassmorphism and modern responsive layout tokens.

### Backend
- **Framework:** Laravel 12.70.2
- **Language / Engine:** PHP 8.2.12 (CLI & XAMPP)
- **Dependency Manager:** Composer 2.10.3
- **Database:** MariaDB 10.4.32 / MySQL (via XAMPP port 3306)
- **Architecture:** Decoupled REST API with `/api/v1` prefix

---

## 4. API Design & Security Standards

### Versioning
All API endpoints are strictly versioned under `/api/v1`.

### Health Check Endpoint
- **URL:** `GET /api/v1/health`
- **Purpose:** Verifies operational readiness of the API runtime and database connectivity.
- **Security:** Checks database availability via PDO connection test inside a `try...catch` block. It returns service status without leaking database credentials, server hostnames, or raw SQL exception stack traces.
- **Sample Response:**
```json
{
  "status": "healthy",
  "timestamp": "2026-10-28T13:51:45+00:00",
  "service": "Twin Stack Digital API",
  "version": "v1",
  "environment": "local",
  "database": {
    "status": "connected",
    "driver": "mysql",
    "database": "twin_stack_digital"
  }
}
```

### CORS Protection
Configured in `backend/config/cors.php`:
- Allowed origins are restricted to `http://localhost:5173` and `http://127.0.0.1:5173` in local development (configurable via `CORS_ALLOWED_ORIGINS` in `.env`).
- Unauthorized origins receive no `Access-Control-Allow-Origin` header.

---

## 5. Local Development Workflow

1. **MySQL (XAMPP):** Ensure MySQL is started in XAMPP on port 3306.
2. **Backend API:** Run `php artisan serve --port=8000` inside `backend/`.
3. **Frontend Client:** Run `npm run dev` inside `frontend/` (access at `http://localhost:5173`).
4. **Environment Files:** Both `.env.example` templates define safe defaults and should be duplicated to `.env` without committing secrets.

---

## 6. Roadmap & Upcoming Phases

- **Phase 1 (Complete):** Core monorepo architecture, environment setup, database connectivity, health check API, and frontend technical verification screen.
- **Phase 2:** Visual design system, public agency pages (Home, Services, Projects, About Us, Contact), responsive navigation, and interactive 3D hero experiences.
- **Phase 3:** Inquiry handling, quote request calculation system, database migrations, and validation.
- **Phase 4:** Private admin dashboard for the two authorized founders (Syeda Hira and Hamna Shahid) with secure authentication and lead management.
- **Phase 5:** Client reviews and approvals, consultation booking via Google Meet integration, performance auditing, and deployment hardening.

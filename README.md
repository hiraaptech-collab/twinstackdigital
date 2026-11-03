# Twin Stack Digital

> *"We Don't Just Build Websites. We Create Digital Experiences."*

Production-oriented digital agency web platform engineered with a decoupled monorepo architecture: **React + Vite** frontend, **Laravel REST API** backend, and **MySQL / MariaDB** database.

- **Founders:** Syeda Hira and Hamna Shahid
- **Contact:** twinstackdigital.pk@gmail.com | +92 310 3701543 / +92 312 5215289 | Karachi, Pakistan
- **Current Milestone:** Phase 1 (Architecture & System Verification)

---

## Architecture Overview

```text
Twinstack-digital/
├── frontend/     # React 19 + Vite 8 + React Router + Three.js + GSAP
├── backend/      # Laravel 12 REST API (/api/v1) + MySQL
├── assets/       # Brand media, vector logos, client assets
└── docs/         # Architecture & Phase Milestone reports
```

---

## Prerequisites (Windows Environment)

Ensure the following tools are installed on your Windows system (e.g., via XAMPP and official installers):

1. **PHP:** >= 8.2 (Verified on PHP 8.2.12 with `pdo_mysql`, `mbstring`, `openssl`, `curl` enabled)
2. **Composer:** >= 2.0 (Verified on Composer 2.10.3)
3. **Node.js:** >= 20.x (Verified on Node.js v24.17.0 / npm 11.13.0)
4. **XAMPP (MySQL / MariaDB):** Port 3306 (Verified on MariaDB 10.4.32)

---

## Step-by-Step Local Setup

### 1. Start XAMPP MySQL
1. Open the **XAMPP Control Panel**.
2. Click **Start** next to **MySQL** (verifying it is listening on port `3306`).
3. Ensure the database exists:
   ```powershell
   # Run via PowerShell if C:\xampp\mysql\bin\mysql.exe is available:
   & "C:\xampp\mysql\bin\mysql.exe" -u root -e "CREATE DATABASE IF NOT EXISTS twin_stack_digital CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
   ```

### 2. Configure Backend (Laravel)
1. Open a terminal in `backend/`:
   ```powershell
   cd c:\xampp\htdocs\Twinstack-digital\backend
   ```
2. If `.env` is not present, duplicate `.env.example`:
   ```powershell
   cp .env.example .env
   php artisan key:generate
   ```
3. Verify your `.env` contains:
   ```env
   APP_NAME="Twin Stack Digital API"
   APP_URL=http://127.0.0.1:8000
   FRONTEND_URL=http://localhost:5173
   CORS_ALLOWED_ORIGINS="http://localhost:5173,http://127.0.0.1:5173"

   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=twin_stack_digital
   DB_USERNAME=root
   DB_PASSWORD=
   ```
4. Run migrations to initialize base tables:
   ```powershell
   php artisan migrate
   ```
5. Run automated tests to verify API & database connectivity:
   ```powershell
   php artisan test
   ```
6. Start the Laravel development server:
   ```powershell
   php artisan serve --host=127.0.0.1 --port=8000
   ```
   The backend will be live at: `http://127.0.0.1:8000` (Health check: `http://127.0.0.1:8000/api/v1/health`).

### 3. Configure Frontend (React + Vite)
1. Open a second terminal in `frontend/`:
   ```powershell
   cd c:\xampp\htdocs\Twinstack-digital\frontend
   ```
2. If dependencies are not yet installed:
   ```powershell
   npm install
   ```
3. If `.env` is not present, duplicate `.env.example`:
   ```powershell
   cp .env.example .env
   ```
   Ensure `.env` contains:
   ```env
   VITE_APP_NAME="Twin Stack Digital"
   VITE_API_BASE_URL=http://127.0.0.1:8000/api/v1
   ```
4. Start the Vite development server:
   ```powershell
   npm run dev
   ```
   The frontend will be live at: `http://localhost:5173`.

---

## Verifying the Setup

1. Open your browser and navigate to `http://localhost:5173`.
2. The **Technical Verification Dashboard** will display:
   - **Frontend Client Status:** React 19 + Vite operational, Three.js 3D canvas spinning.
   - **Laravel REST API Status:** Online (`/api/v1/health` responding).
   - **Database Status:** Connected to `twin_stack_digital` via MariaDB/MySQL.
   - **Latency:** Measured response time in milliseconds.
3. Click **"Re-test Health Check"** to execute a fresh live diagnostic.

---

## Available Scripts

### Backend (`backend/`)
- `php artisan serve` — Starts the local API server on `http://127.0.0.1:8000`
- `php artisan test` — Runs automated PHPUnit/Pest tests (including `HealthCheckTest`)
- `php artisan route:list` — Inspects all registered routes under `/api/v1`
- `php artisan migrate` — Runs database migrations

### Frontend (`frontend/`)
- `npm run dev` — Starts Vite dev server with Hot Module Replacement (HMR)
- `npm run build` — Compiles and bundles production-ready assets into `dist/`
- `npm run preview` — Locally previews the production build

---

## Windows Troubleshooting

- **Issue: `mysql` command not recognized in PowerShell.**
  - **Fix:** Use full XAMPP path `& "C:\xampp\mysql\bin\mysql.exe" -u root` or add `C:\xampp\mysql\bin` to your system `PATH`.
- **Issue: Frontend shows "Connection refused. Is the Laravel server running?".**
  - **Fix:** Ensure `php artisan serve --port=8000` is running in another terminal.
- **Issue: Health check displays database "disconnected" or "503".**
  - **Fix:** Confirm MySQL is green in the XAMPP Control Panel on port 3306 and that database `twin_stack_digital` has been created.
- **Issue: CORS error in browser console.**
  - **Fix:** Verify `CORS_ALLOWED_ORIGINS` in `backend/.env` includes `http://localhost:5173`.

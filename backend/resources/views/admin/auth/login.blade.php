<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Login — Twin Stack Digital</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <style>
        :root {
            --color-white: #FFFFFF;
            --color-primary: #0860F8;
            --color-primary-hover: #064ecc;
            --color-primary-active: #053ea3;
            --color-navy: #071B49;
            --color-ice-blue: #EAF3FF;
            --color-soft-gray: #F4F7FB;
            --color-text-dark: #071B49;
            --color-text-muted: #4B5E82;
            --color-border: #DDE5F2;
            --color-border-subtle: #E8EEF8;
            --shadow-sm: 0 1px 3px rgba(7, 27, 73, 0.05);
            --shadow-md: 0 4px 16px -2px rgba(7, 27, 73, 0.07);
            --radius-sm: 8px;
            --radius-md: 12px;
            --radius-lg: 18px;
            --radius-full: 9999px;
            --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
        }

        * {
            box-sizing: border-box;
        }

        body {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            background: var(--color-white);
            color: var(--color-text-dark);
            min-height: 100vh;
        }

        .login-page {
            max-width: 420px;
            margin: 2rem auto;
            padding: 2rem;
        }

        .logo-section {
            text-align: center;
            margin-bottom: 3rem;
        }

        .logo-section img {
            width: 100px;
            height: 100px;
            border-radius: var(--radius-full);
            background: var(--gradient-primary);
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1rem;
        }

        .logo-section h1 {
            font-size: 1.75rem;
            font-weight: 800;
            color: var(--color-navy);
            letter-spacing: -0.02em;
        }

        .logo-section p {
            color: var(--color-text-muted);
            font-size: 0.9rem;
        }

        .login-card {
            background: var(--color-white);
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            padding: 2.5rem 2rem;
            box-shadow: var(--shadow-md);
            width: 100%;
        }

        .login-card h2 {
            font-size: 1.5rem;
            font-weight: 800;
            color: var(--color-navy);
            margin-bottom: 1.5rem;
            text-align: center;
        }

        .login-card p {
            color: var(--color-text-muted);
            font-size: 0.9rem;
            margin-bottom: 2rem;
            text-align: center;
        }

        .form-control {
            width: 100%;
            padding: 0.875rem 1rem;
            font-size: 1rem;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-sm);
            background: var(--color-ice-blue);
            color: var(--color-text-dark);
            margin-bottom: 1rem;
            transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
        }

        .form-control:focus {
            outline: none;
            border-color: var(--color-primary);
            box-shadow: 0 0 0 3px rgba(8, 96, 248, 0.15);
        }

        .form-control::placeholder {
            color: var(--color-text-muted);
        }

        .btn-primary {
            width: 100%;
            padding: 0.875rem 1rem;
            font-size: 1rem;
            font-weight: 700;
            color: var(--color-white);
            background: var(--gradient-primary);
            border: none;
            border-radius: var(--radius-full);
            cursor: pointer;
            transition: transform var(--transition-fast), box-shadow var(--transition-fast);
            margin-top: 1rem;
        }

        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(8, 96, 248, 0.3);
        }

        .btn-primary:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 2px;
        }

        .link {
            display: block;
            width: 100%;
            padding: 0.875rem 1rem;
            font-size: 0.9rem;
            color: var(--color-primary);
            text-align: center;
            text-decoration: none;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            margin-top: 1.5rem;
            transition: background var(--transition-fast), color var(--transition-fast);
        }

        .link:hover {
            background: var(--color-ice-blue);
            color: var(--color-navy);
        }

        .link:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 2px;
        }

        .error-summary {
            padding: 0.75rem 1rem;
            background: rgba(220, 53, 69, 0.1);
            border: 1px solid var(--color-danger);
            border-radius: var(--radius-sm);
            color: var(--color-danger);
            margin-bottom: 1rem;
        }

        .error-summary ul {
            margin: 0;
            padding-left: 1.5rem;
        }

        .error-summary li {
            font-size: 0.875rem;
            margin: 0 0 0.25rem 0;
        }

        @media (max-width: 480px) {
            .login-page {
                margin: 1rem;
                padding: 1.5rem;
            }
        }
    </style>
</head>
<body>
    <div class="login-page">
        <div class="logo-section">
            <div>
                <img src="/assets/logo-twinstack.jpg" alt="Twin Stack Digital">
            </div>
            <h1>Twin Stack Digital</h1>
            <p>Administration Panel</p>
        </div>

        <div class="login-card">
            <h2>Sign in to your admin account</h2>

            @if($errors->any()):
                <div class="error-summary">
                    <ul>
                        @foreach($errors->all() as $error)
                            <li>{{ $error }}</li>
                        @endforeach>
                    </ul>
                </div>
            @endif

            <form method="POST" action="{{ route('admin.auth.authenticate') }}">
                @csrf()

                <div>
                    <label class="form-label" for="email">Email Address</label>
                    <input class="form-control" type="email" name="email" id="email" autocomplete="email" required>
                </div>

                <div>
                    <label class="form-label" for="password">Password</label>
                    <input class="form-control" type="password" name="password" id="password" autocomplete="current-password" required>
                </div>

                <button type="submit" class="btn-primary">
                    Sign in
                </button>
            </form>

            <a class="link" href="{{ route('admin.auth.login') }}">
                Forgot password?
            </a>
        </div>
    </div>
</body>
</html>
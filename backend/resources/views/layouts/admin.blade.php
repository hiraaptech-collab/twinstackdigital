<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>@yield('title', 'Dashboard') — Twin Stack Admin</title>
    <style>
        :root {
            --white: #FFFFFF;
            --blue: #0860F8;
            --blue-hover: #064ecc;
            --navy: #071B49;
            --ice: #EAF3FF;
            --soft: #F4F7FB;
            --muted: #4B5E82;
            --border: #DDE5F2;
            --success: #16a34a;
            --danger: #dc2626;
            --warning: #d97706;
            --radius: 10px;
            --shadow: 0 4px 20px -4px rgba(7,27,73,.09);
        }
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: var(--soft); color: var(--navy); min-height: 100vh; display: flex; }

        /* Sidebar */
        .sidebar { width: 240px; background: var(--navy); min-height: 100vh; position: fixed; left: 0; top: 0; bottom: 0; z-index: 100; display: flex; flex-direction: column; overflow-y: auto; }
        .sidebar-brand { padding: 1.25rem 1rem; color: #fff; font-size: 1.1rem; font-weight: 800; display: flex; align-items: center; gap: 0.6rem; border-bottom: 1px solid rgba(255,255,255,.1); text-decoration: none; }
        .sidebar-brand .dot { width: 32px; height: 32px; background: var(--blue); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: 900; color: #fff; font-size: .9rem; flex-shrink: 0; }
        .sidebar-nav { padding: .75rem 0; flex: 1; }
        .sidebar-section { padding: .25rem 1rem .1rem; font-size: .7rem; text-transform: uppercase; letter-spacing: .08em; color: rgba(255,255,255,.35); margin-top: .5rem; }
        .sidebar-link { display: flex; align-items: center; gap: .65rem; padding: .65rem 1rem; color: rgba(255,255,255,.7); text-decoration: none; font-size: .88rem; transition: all .15s; border-left: 3px solid transparent; }
        .sidebar-link:hover { background: rgba(8,96,248,.18); color: #fff; }
        .sidebar-link.active { background: rgba(8,96,248,.25); color: var(--blue); border-left-color: var(--blue); font-weight: 600; }
        .sidebar-link svg { flex-shrink: 0; opacity: .7; }
        .sidebar-link.active svg { opacity: 1; }
        .sidebar-footer { padding: 1rem; border-top: 1px solid rgba(255,255,255,.1); }
        .sidebar-footer form button { background: rgba(255,255,255,.08); color: rgba(255,255,255,.6); border: none; padding: .5rem 1rem; border-radius: var(--radius); cursor: pointer; font-size: .83rem; width: 100%; text-align: left; transition: background .15s; }
        .sidebar-footer form button:hover { background: rgba(220,38,38,.2); color: #fca5a5; }

        /* Main content */
        .main { margin-left: 240px; flex: 1; display: flex; flex-direction: column; min-height: 100vh; }
        .topbar { background: var(--white); border-bottom: 1px solid var(--border); padding: .9rem 2rem; display: flex; align-items: center; justify-content: space-between; position: sticky; top: 0; z-index: 50; }
        .topbar-title { font-size: 1.1rem; font-weight: 700; color: var(--navy); }
        .topbar-admin { font-size: .82rem; color: var(--muted); }
        .topbar-admin strong { color: var(--navy); }
        .content { padding: 2rem; flex: 1; }

        /* Alerts */
        .alert { padding: .85rem 1.1rem; border-radius: var(--radius); margin-bottom: 1.25rem; font-size: .9rem; }
        .alert-success { background: #dcfce7; color: #15803d; border-left: 4px solid var(--success); }
        .alert-error { background: #fee2e2; color: #991b1b; border-left: 4px solid var(--danger); }

        /* Cards */
        .card { background: var(--white); border-radius: var(--radius); box-shadow: var(--shadow); border: 1px solid var(--border); }
        .card-header { padding: 1.25rem 1.5rem; border-bottom: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; }
        .card-header h2 { font-size: 1rem; font-weight: 700; color: var(--navy); }
        .card-body { padding: 1.5rem; }

        /* Stats grid */
        .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 2rem; }
        .stat-card { background: var(--white); border-radius: var(--radius); padding: 1.25rem 1.5rem; box-shadow: var(--shadow); border: 1px solid var(--border); }
        .stat-card .label { font-size: .78rem; color: var(--muted); text-transform: uppercase; letter-spacing: .05em; margin-bottom: .4rem; }
        .stat-card .value { font-size: 2rem; font-weight: 800; color: var(--navy); line-height: 1; }
        .stat-card .sub { font-size: .8rem; color: var(--muted); margin-top: .25rem; }

        /* Table */
        .table-wrap { overflow-x: auto; }
        table { width: 100%; border-collapse: collapse; font-size: .875rem; }
        th { background: var(--soft); color: var(--muted); font-weight: 600; font-size: .75rem; text-transform: uppercase; letter-spacing: .05em; padding: .65rem 1rem; text-align: left; border-bottom: 1px solid var(--border); }
        td { padding: .75rem 1rem; border-bottom: 1px solid var(--border); vertical-align: middle; }
        tr:last-child td { border-bottom: none; }
        tr:hover td { background: var(--soft); }

        /* Badges */
        .badge { display: inline-block; padding: .2rem .6rem; border-radius: 99px; font-size: .72rem; font-weight: 600; }
        .badge-green { background: #dcfce7; color: #15803d; }
        .badge-red { background: #fee2e2; color: #991b1b; }
        .badge-blue { background: #dbeafe; color: #1d4ed8; }
        .badge-yellow { background: #fef9c3; color: #92400e; }
        .badge-gray { background: #f3f4f6; color: #4b5563; }

        /* Buttons */
        .btn { display: inline-flex; align-items: center; gap: .4rem; padding: .5rem 1rem; border-radius: var(--radius); font-size: .85rem; font-weight: 600; cursor: pointer; text-decoration: none; border: none; transition: all .15s; }
        .btn-primary { background: var(--blue); color: #fff; }
        .btn-primary:hover { background: var(--blue-hover); }
        .btn-outline { background: transparent; border: 1.5px solid var(--border); color: var(--navy); }
        .btn-outline:hover { border-color: var(--blue); color: var(--blue); }
        .btn-danger { background: var(--danger); color: #fff; }
        .btn-danger:hover { background: #b91c1c; }
        .btn-success { background: var(--success); color: #fff; }
        .btn-success:hover { background: #15803d; }
        .btn-sm { padding: .3rem .65rem; font-size: .78rem; }

        /* Forms */
        .form-group { margin-bottom: 1.25rem; }
        .form-label { display: block; font-size: .85rem; font-weight: 600; color: var(--navy); margin-bottom: .4rem; }
        .form-control { width: 100%; padding: .6rem .9rem; border: 1.5px solid var(--border); border-radius: var(--radius); font-size: .9rem; color: var(--navy); background: var(--white); transition: border-color .15s; }
        .form-control:focus { outline: none; border-color: var(--blue); box-shadow: 0 0 0 3px rgba(8,96,248,.1); }
        textarea.form-control { resize: vertical; min-height: 100px; }
        .form-check { display: flex; align-items: center; gap: .5rem; margin-top: .5rem; }
        .form-check input { width: 16px; height: 16px; accent-color: var(--blue); }
        .form-hint { font-size: .78rem; color: var(--muted); margin-top: .3rem; }
        .form-error { font-size: .78rem; color: var(--danger); margin-top: .3rem; }
        .form-actions { display: flex; gap: .75rem; margin-top: 1.5rem; }

        /* Availability indicator */
        .avail-badge { display: inline-flex; align-items: center; gap: .5rem; padding: .4rem .9rem; border-radius: 99px; font-size: .82rem; font-weight: 600; }
        .avail-available { background: #dcfce7; color: #15803d; }
        .avail-at_capacity { background: #fef9c3; color: #92400e; }
        .avail-not_accepting { background: #fee2e2; color: #991b1b; }

        /* Page header */
        .page-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.75rem; }
        .page-header h1 { font-size: 1.5rem; font-weight: 800; color: var(--navy); }

        /* Responsive */
        @media (max-width: 768px) {
            .sidebar { position: relative; width: 100%; min-height: auto; flex-direction: row; }
            .main { margin-left: 0; }
            .content { padding: 1rem; }
            .stats-grid { grid-template-columns: 1fr 1fr; }
        }
    </style>
</head>
<body>

{{-- Sidebar --}}
<aside class="sidebar">
    <a href="{{ route('admin.dashboard') }}" class="sidebar-brand">
        <div class="dot">TS</div>
        <span>TwinStack Admin</span>
    </a>

    <nav class="sidebar-nav">
        <div class="sidebar-section">Overview</div>
        <a href="{{ route('admin.dashboard') }}" class="sidebar-link {{ request()->routeIs('admin.dashboard') ? 'active' : '' }}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
            Dashboard
        </a>

        <div class="sidebar-section">Content</div>
        <a href="{{ route('admin.projects.index') }}" class="sidebar-link {{ request()->routeIs('admin.projects*') ? 'active' : '' }}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            Projects
        </a>
        <a href="{{ route('admin.services.index') }}" class="sidebar-link {{ request()->routeIs('admin.services*') ? 'active' : '' }}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            Services
        </a>
        <a href="{{ route('admin.reviews.index') }}" class="sidebar-link {{ request()->routeIs('admin.reviews*') ? 'active' : '' }}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            Reviews
        </a>

        <div class="sidebar-section">Inquiries</div>
        <a href="{{ route('admin.inquiries.index') }}" class="sidebar-link {{ request()->routeIs('admin.inquiries*') ? 'active' : '' }}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            Contact Inquiries
        </a>
        <a href="{{ route('admin.consultations.index') }}" class="sidebar-link {{ request()->routeIs('admin.consultations*') ? 'active' : '' }}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            Consultations
        </a>

        <div class="sidebar-section">System</div>
        <a href="{{ route('admin.settings.index') }}" class="sidebar-link {{ request()->routeIs('admin.settings*') ? 'active' : '' }}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
            Settings & Content
        </a>
    </nav>

    <div class="sidebar-footer">
        <form method="POST" action="{{ route('admin.auth.logout') }}">
            @csrf
            <button type="submit">⏻ Sign Out</button>
        </form>
    </div>
</aside>

{{-- Main --}}
<div class="main">
<div class="topbar">
        <div class="topbar-title">@yield('title', 'Dashboard')</div>
        <div class="topbar-admin">Signed in as <strong>{{ auth()->user()?->name ?? 'Admin' }}</strong></div>

        <div style="display: flex; align-items: center; gap: 1rem;">
            <a
                href="{{ env('FRONTEND_URL', 'http://localhost:5173') }}"
                target="_blank"
                rel="noopener noreferrer"
                style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.5rem 1rem; background: var(--color-ice-blue); color: var(--color-navy); border-radius: var(--radius); font-size: 0.88rem; font-weight: 600; text-decoration: none; transition: all var(--transition-fast);"
            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><line x1="5" y1="12" x2="19" y2="12"/><line x1="12" y1="5" x2="12" y2="19"/></svg>
                                View Website
</a>
                            @if(isset($stats['availability_status']) && $stats['availability_status'] !== 'at_capacity')
                            <span class="avail-badge avail-{{ $stats['availability_status'] }}">
                                ● {{ $stats['availability_status'] === 'available' ? 'Available for New Projects' : ($stats['availability_status'] === 'at_capacity' ? 'At Capacity' : 'Not Accepting Projects') }}
                            </span>
                            @endif
</div>
</div>
    </div>
</div>

    <div class="content">
        @if(session('success'))
            <div class="alert alert-success">{{ session('success') }}</div>
        @endif
        @if($errors->any())
            <div class="alert alert-error">
                <strong>Please fix the following errors:</strong>
                <ul style="margin:.4rem 0 0 1rem;">
                    @foreach($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        @endif

        @yield('content')
    </div>
</div>

</body>
</html>

<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inquiry Management — Twin Stack Digital</title>
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
            --color-danger: #EF4444;
            --color-danger-light: #FEE2E2;
            --color-success: #10B981;
            --color-success-light: #EFFDF3;
            --shadow-sm: 0 1px 3px rgba(7, 27, 73, 0.05);
            --shadow-md: 0 4px 16px -2px rgba(7, 27, 73, 0.07);
            --shadow-lg: 0 12px 32px -4px rgba(7, 27, 73, 0.10);
            --radius-sm: 8px;
            --radius-md: 12px;
            --radius-lg: 18px;
            --radius-full: 9999px;
            --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
            --transition-normal: 250ms cubic-bezier(0.4, 0, 0.2, 1);
        }

        * { box-sizing: border-box; }

        body {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            background: var(--color-white);
            color: var(--color-text-dark);
            min-height: 100vh;
        }

        .sidebar {
            width: 260px;
            background: var(--color-navy);
            min-height: 100vh;
            position: fixed;
            left: 0;
            top: 0;
            bottom: 0;
            z-index: 100;
        }

        .sidebar-brand {
            padding: 1.5rem 1rem;
            color: var(--color-white);
            text-decoration: none;
            font-size: 1.25rem;
            font-weight: 800;
            display: flex;
            align-items: center;
            gap: 0.75rem;
            border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .sidebar-brand img {
            width: 40px;
            height: 40px;
            border-radius: var(--radius-sm);
            background: var(--gradient-primary);
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .sidebar-menu {
            padding: 1rem 0;
        }

        .sidebar-menu li {
            list-style: none;
        }

        .sidebar-menu a {
            padding: 0.875rem 1.5rem;
            color: var(--color-ice-blue);
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 0.75rem;
            font-size: 0.95rem;
            transition: background var(--transition-fast), color var(--transition-fast);
        }

        .sidebar-menu a:hover {
            background: rgba(8, 96, 248, 0.15);
            color: var(--color-primary);
        }

        .sidebar-menu a.active {
            background: rgba(8, 96, 248, 0.2);
            color: var(--color-primary);
        }

        .sidebar-menu a i {
            width: 18px;
            text-align: center;
        }

        .main-content {
            margin-left: 260px;
            padding: 2rem 2.5rem;
            min-height: 100vh;
        }

        .page-header {
            margin-bottom: 2rem;
        }

        .page-header h1 {
            font-size: 1.75rem;
            font-weight: 800;
            color: var(--color-navy);
            margin-bottom: 0.5rem;
        }

        .page-header p {
            color: var(--color-text-muted);
            font-size: 0.95rem;
        }

        .nav-placeholder {
            padding: 1rem;
            background: var(--color-ice-blue);
            border-radius: var(--radius-md);
            margin: 1rem 0;
            color: var(--color-navy);
            font-size: 0.9rem;
        }

        .nav-placeholder i {
            width: 18px;
            text-align: center;
            opacity: 0.6;
        }

        .section-empty {
            padding: 3rem 1rem;
            text-align: center;
            color: var(--color-text-muted);
        }

        .section-empty i {
            width: 48px;
            height: 48px;
            border-radius: var(--radius-full);
            background: var(--color-ice-blue);
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1rem;
            font-size: 1.5rem;
        }

        .inquiry-card {
            background: var(--color-white);
            border-radius: var(--radius-md);
            padding: 1.5rem;
            margin-bottom: 1rem;
            box-shadow: var(--shadow-sm);
            border: 1px solid var(--color-border-subtle);
            transition: border-color var(--transition-fast);
        }

        .inquiry-card:hover {
            border-color: var(--color-primary);
        }

        .inquiry-card-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 1rem;
        }

        .inquiry-card-meta {
            display: flex;
            gap: 1rem;
            font-size: 0.85rem;
            color: var(--color-text-muted);
        }

        .inquiry-card-meta span {
            font-size: 0.8rem;
        }

        .inquiry-card-status {
            padding: 0.25rem 0.75rem;
            border-radius: var(--radius-full);
            font-size: 0.7rem;
            font-weight: 700;
            text-transform: uppercase;
        }

        .status-new { background: var(--color-ice-blue); color: var(--color-navy); }
        .status-contacted { background: #DBEAFE; color: var(--color-navy); }
        .status-in-progress { background: #BFDBFE; color: var(--color-navy); }
        .status-won { background: #D1FAE5; color: #059669; }
        .status-lost { background: #FECACA; color: #DC2626; }

        .inquiry-filter {
            background: var(--color-soft-gray);
            border-radius: var(--radius-md);
            padding: 1rem 1.5rem;
            margin-bottom: 1.5rem;
            display: flex;
            gap: 0.5rem;
            flex-wrap: wrap;
        }

        .inquiry-filter select,
        .inquiry-filter input {
            padding: 0.5rem 0.75rem;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-sm);
            font-size: 0.85rem;
            background: var(--color-white);
        }

        .inquiry-filter select:focus,
        .inquiry-filter input:focus {
            outline: none;
            border-color: var(--color-primary);
            box-shadow: 0 0 0 3px var(--color-ice-blue);
        }

        .inquiry-actions {
            display: flex;
            gap: 0.5rem;
            margin-top: 0.5rem;
        }

        .inquiry-action-btn {
            padding: 0.4rem 0.75rem;
            border-radius: var(--radius-sm);
            font-size: 0.75rem;
            font-weight: 600;
            cursor: pointer;
            border: none;
            transition: background var(--transition-fast), transform var(--transition-fast);
        }

        .inquiry-action-btn-status {
            padding: 0.25rem 0.5rem;
            border-radius: var(--radius-full);
            font-size: 0.65rem;
        }

        .btn-update { background: var(--color-ice-blue); color: var(--color-navy); }
        .btn-update:hover { background: var(--color-primary); color: white; }
        .btn-notes { background: var(--color-soft-gray); color: var(--color-text-dark); }
        .btn-notes:hover { background: #e2e8f0; }
        .btn-delete { background: #FECACA; color: #DC2626; }
        .btn-delete:hover { background: #fca5a5; }

        .note-item {
            background: var(--color-ice-blue);
            border-radius: var(--radius-sm);
            padding: 0.5rem 0.75rem;
            margin-bottom: 0.25rem;
            font-size: 0.75rem;
            color: var(--color-navy);
        }

        .status-badge {
            padding: 0.15rem 0.5rem;
            border-radius: var(--radius-full);
            font-size: 0.65rem;
            font-weight: 700;
            text-transform: uppercase;
        }

        .badge-new { background: var(--color-ice-blue); color: var(--color-navy); }
        .badge-contacted { background: #DBEAFE; color: var(--color-navy); }
        .badge-in-progress { background: #BFDBFE; color: var(--color-navy); }
        .badge-won { background: #D1FAE5; color: #059669; }
        .badge-lost { background: #FECACA; color: #DC2626; }

        @media (max-width: 768px) {
            .sidebar {
                width: 100%;
                position: relative;
                min-height: auto;
            }

            .sidebar-brand {
                justify-content: center;
            }

            .sidebar-menu {
                display: flex;
                overflow-x: auto;
                white-space: nowrap;
            }

            .sidebar-menu a {
                flex: 0 0 auto;
                width: auto;
                padding: 0.5rem 0.75rem;
                margin: 0 0.25rem;
            }

            .main-content {
                margin-left: 0;
                padding: 1rem;
            }
        }
    </style>
</head>
<body>
    <div class="sidebar">
        <a href="#" class="sidebar-brand">
            <img src="/assets/logo-twinstack.jpg" alt="Twin Stack Digital">
            <span>TwinStack Admin</span>
        </a>
        <ul class="sidebar-menu">
            <li>
                <a href="{{ route('admin.dashboard') }}" class="active">
                    <i>Dashboard</i>
                    <span>Overview</span>
                </a>
            </li>
            <li>
                <a href="/admin/inquiries" class="active">
                    <i>Inbox</i>
                    <span>Inquiries</span>
                    <span class="badge-new" id="new-count">0</span>
                </a>
            </li>
            <li>
                <a href="/admin/quotes" class="active">
                    <i>Quote</i>
                    <span>Free Quotes</span>
                    <span class="badge-new" id="quote-count">0</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <i>Projects</i>
                    <span>Project Management</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <i>Services</i>
                    <span>Service Management</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <i>Reviews</i>
                    <span>Review Management</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <i>Consultations</i>
                    <span>Consultation Management</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <i>Analytics</i>
                    <span>Analytics Dashboard</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <i>Availability</i>
                    <span>Availability Management</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <i>Settings</i>
                    <span>System Settings</span>
                </a>
            </li>
        </ul>
    </div>

    <main class="main-content">
        <div class="page-header">
            <h1>Inquiry Management</h1>
            <p>Twin Stack Digital - Contact & Quote Management</p>
        </div>

        <div class="nav-placeholder">
            <i>lucide-doc-text</i>
            <span>Inquiry management interface</span>
        </div>

        <div class="inquiry-filter" id="inquiry-filter">
            <select id="status-filter">
                <option value="">All Statuses</option>
                <option value="new">New</option>
                <option value="contacted">Contacted</option>
                <option value="in_progress">In Progress</option>
                <option value="won">Won</option>
                <option value="lost">Lost</option>
            </select>
            <input type="text" id="search-filter" placeholder="Search by name or email...">
            <button class="inquiry-action-btn btn-update" style="margin-left: auto;" onclick="filterInquiries()">
                Filter
            </button>
        </div>

        <div id="inquiries-list" class="grid-grid">
            {{-- Loaded via JavaScript --}}
        </div>

        <div id="no-inquiries" class="section-empty" style="display: none;">
            <i>mail</i>
            <h3>No inquiries yet</h3>
            <p>Contact form submissions will appear here.</p>
        </div>
    </main>

    <script>
        // Inquiries management
        document.addEventListener('DOMContentLoaded', function() {
            let allInquiries = [];

            // Fetch all inquiries
            async function loadInquiries() {
                try {
                    const response = await fetch('/api/v1/contact');
                    if (response.ok) {
                        const result = await response.json();
                        allInquiries = result.data ? result.data.data : [];
                        renderInquiries(allInquiries);
                        updateStatusCounts();
                    } else {
                        console.error('Failed to load inquiries:', response.status);
                    }
                } catch (err) {
                    console.error('Failed to load inquiries:', err);
                }
            }

            // Render inquiries
            function renderInquiries(inquiries) {
                const container = document.getElementById('inquiries-list');
                const noInquiries = document.getElementById('no-inquiries');

                if (inquiries.length === 0) {
                    container.innerHTML = '';
                    noInquiries.style.display = 'block';
                    return;
                }

                noInquiries.style.display = 'none';
                container.innerHTML = inquiries.map((inv, index) => {
                    const status = inv.status || 'new';
                    const statusClass = `status-${status} badge-${status}`;
                    const statusText = status ? status.replace(/_/g, ' ') : 'New';
                    const budgetDisplay = inv.budget ? inv.budget : 'Not specified';
                    const serviceDisplay = inv.service ? inv.service.replace(/_/g, ' ') : 'Not specified';

                    return `
                        <div class="inquiry-card" data-id="${inv.id}">
                            <div class="inquiry-card-header">
                                <div>
                                    <strong>${inv.name || 'Unknown'}</strong>
                                    <span>${inv.email || ''}</span>
                                </div>
                                <span class="status-badge ${statusClass}">${statusText}</span>
                            </div>
                            <div class="inquiry-card-meta">
                                <span>${serviceDisplay}</span>
                                <span>${budgetDisplay}</span>
                                <span>${inv.created_at ? new Date(inv.created_at).toLocaleDateString() : 'Unknown date'}</span>
                            </div>
                            <div style="margin-top: 0.75rem; padding-top: 0.75pt; border-top: 1px solid var(--color-border-subtle);">
                                <div style="font-size: 0.85rem; color: var(--color-text-dark); margin-bottom: 0.25rem;">Message:</div>
                                <div style="font-size: 0.75rem; color: var(--color-text-muted); white-space: pre-wrap; max-height: 100px; overflow: auto;">${inv.message ? inv.message.substring(0, 300) + (inv.message.length > 300 ? '...' : '') : ''}</div>
                            </div>
                            <div style="margin-top: 0.75rem; display: flex; gap: 0.5rem;">
                                <button class="inquiry-action-btn btn-update" style="flex: 1;" onclick="updateStatus('${inv.id}')">Update Status</button>
                                <button class="inquiry-action-btn btn-notes" style="flex: 1;" onclick="addNote('${inv.id}')">Add Note</button>
                            </div>
                        </div>
                    `;
                }).join('');
            }

            // Update status
            window.updateStatus = async function(id) {
                const submission = allInquiries.find(i => i.id === id);
                if (!submission) return;

                const newStatus = prompt('Select status:', submission.status || 'new');
                if (!newStatus) return;

                const validStatuses = ['new', 'contacted', 'in_progress', 'won', 'lost'];
                if (!validStatuses.includes(newStatus)) {
                    alert('Invalid status. Please choose from: new, contacted, in_progress, won, lost');
                    return;
                }

                const notes = prompt('Add private notes (optional):') || '';

                try {
                    const response = await fetch(`/api/v1/contact/${id}/status`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ status: newStatus, notes: notes })
                    });

                    if (response.ok) {
                        loadInquiries();
                    } else {
                        const error = await response.json();
                        alert('Failed to update status: ' + (error.message || 'Unknown error'));
                    }
                } catch (err) {
                    console.error('Error updating status:', err);
                    alert('Failed to update status. Please try again.');
                }
            };

            // Add note
            window.addNote = async function(id) {
                const notes = prompt('Add private note:');
                if (notes === null) return;

                try {
                    const response = await fetch(`/api/v1/contact/${id}/status`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ status: null, notes: notes })
                    });

                    if (response.ok) {
                        loadInquiries();
                    } else {
                        const error = await response.json();
                        alert('Failed to add note: ' + (error.message || 'Unknown error'));
                    }
                } catch (err) {
                    console.error('Error adding note:', err);
                    alert('Failed to add note. Please try again.');
                }
            };

            // Filter inquiries
            window.filterInquiries = async function() {
                const statusFilter = document.getElementById('status-filter').value;
                const searchTerm = document.getElementById('search-filter').value.toLowerCase();

                const filtered = allInquiries.filter(inv => {
                    const matchesStatus = !statusFilter || (inv.status || 'new') === statusFilter;
                    const matchesSearch = (inv.name && inv.name.toLowerCase().includes(searchTerm)) ||
                                         (inv.email && inv.email.toLowerCase().includes(searchTerm));
                    return matchesStatus && matchesSearch;
                });

                renderInquiries(filtered);
            };

            // Update status counts
            function updateStatusCounts() {
                const counts = { new: 0, contacted: 0, in_progress: 0, won: 0, lost: 0 };
                allInquiries.forEach(inv => {
                    const s = inv.status || 'new';
                    if (counts[s] !== undefined) counts[s]++;
                });

                document.getElementById('new-count').textContent = counts.new;
            }

            // Load inquiries on page load
            loadInquiries();
        });
    </script>
</body>
</html>
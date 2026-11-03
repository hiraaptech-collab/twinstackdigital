<?php

require __DIR__.'/vendor/autoload.php';

$app = require __DIR__.'/bootstrap/app.php';
$app->make(\Illuminate\Contracts\Console\Kernel::class)->bootstrap();

// Create sample projects
\App\Models\Project::create([
    'title' => 'Nexus Global Advisory',
    'description' => 'A luxury financial consultancy web platform',
    'category' => 'Web Development',
    'technologies' => ['React.js', 'Modern CSS', 'HTML5', 'Interactive UI'],
    'project_url' => 'https://demo.twinstack.digital/nexus-corporate-platform',
    'screenshot_url' => '/images/projects/nexus.jpg',
    'featured' => true,
    'published' => true,
]);

\App\Models\Project::create([
    'title' => 'Strata Operational ERP',
    'description' => 'Full-stack internal management portal',
    'category' => 'Full-Stack Apps',
    'technologies' => ['PHP', 'Laravel', 'MySQL', 'React.js', 'REST API'],
    'project_url' => 'https://demo.twinstack.digital/strata-cloud-portal',
    'screenshot_url' => '/images/projects/strata.jpg',
    'featured' => false,
    'published' => true,
]);

// Create sample services
\App\Models\Service::create([
    'title' => 'Website Development',
    'slug' => 'website-development',
    'description' => 'Bespoke, high-performance corporate websites',
    'detailed_description' => 'We design and build bespoke digital experiences from scratch with clean, semantic markup, responsive layouts, and modern visual elegance.',
    'category' => 'website-development',
    'featured' => true,
    'published' => true,
    'sort_order' => 1,
]);

\App\Models\Service::create([
    'title' => 'Full-Stack Web Application Development',
    'slug' => 'full-stack-web-applications',
    'description' => 'Dynamic, scalable web applications with relational MySQL databases',
    'detailed_description' => 'Transform business processes into powerful, automated software solutions.',
    'category' => 'full-stack-web-applications',
    'featured' => true,
    'published' => true,
    'sort_order' => 2,
]);

\App\Models\Service::create([
    'title' => 'E-commerce Website Development',
    'slug' => 'ecommerce-development',
    'description' => 'Secure, high-converting digital storefronts',
    'detailed_description' => 'Drive sustainable online revenue with e-commerce experiences.',
    'category' => 'ecommerce-development',
    'featured' => false,
    'published' => true,
    'sort_order' => 3,
]);

// Create homepage content
\App\Models\HomeContent::create([
    'hero_heading' => "We Don't Just Build Websites. We Create Digital Experiences.",
    'hero_subtitle' => "Twin Stack Digital is a Karachi-based digital agency serving businesses worldwide.",
    'cta_primary_label' => "Get a Free Quote",
    'cta_secondary_label' => "Explore Services",
    'available_for_new_projects' => true,
]);

echo "Sample data seeded successfully!\n";
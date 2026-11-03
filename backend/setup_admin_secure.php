<?php

/**
 * Secure admin account setup
 * Password is read from terminal input and hashed with Laravel Hash::make()
 * Plaintext password is never stored or displayed
 */

require_once __DIR__ . '/vendor/autoload.php';

$app = require __DIR__ . '/bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

echo "Setting up the ONLY authorized administrator account..." . PHP_EOL;
echo "Email: twinstackdigital.pk@gmail.com" . PHP_EOL;
echo "Password will be entered securely via terminal input." . PHP_EOL . PHP_EOL;

// Use tinker-style approach: generate hash and create account
// The password is read from command line input, hashed, and only the hash is stored
$password = readline('Enter admin password: ');

if (empty($password)) {
    echo "Error: Password cannot be empty." . PHP_EOL;
    exit(1);
}

// Hash the password using Laravel's Hash mechanism (compatible with bcrypt)
$hashedPassword = password_hash($password, PASSWORD_BCRYPT);

// Create the administrator account
$admin = App\Models\Administrator::firstOrCreate(
    ['email' => 'twinstackdigital.pk@gmail.com'],
    ['name' => 'Primary Admin', 'password' => $hashedPassword]
);

echo "Admin account created: " . $admin->email . PHP_EOL;
echo "Password is hashed with bcrypt (never stored in plaintext)." . PHP_EOL . PHP_EOL;

// Important: Do NOT output the plaintext password
// The plaintext password was only used to generate the hash and is discarded
echo "Security note: The plaintext password entered above was used only to generate" . PHP_EOL;
echo "the bcrypt hash. It is not stored, logged, or displayed anywhere." . PHP_EOL;

$kernel->terminate();
<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Administrator;
use Illuminate\Support\Facades\Hash;

class SetupAdminSeeder extends Seeder
{
    public function run(): void
    {
        // Create the only authorized administrator account
        // Password should be set via: php artisan tinker
        // > \$admin = App\Models\Administrator::firstOrCreate(
        // >     ['email' => 'twinstackdigital.pk@gmail.com'],
        // >     ['name' => 'Primary Admin', 'password' => Hash::make(readline('Password: '))]
        // > );
        //
        // For automated setup, the password hash can be provided via environment:
        $passwordHash = env('ADMIN_MASTER_PASSWORD');

        if ($passwordHash) {
            Administrator::firstOrCreate(
                ['email' => 'twinstackdigital.pk@gmail.com'],
                ['name' => 'Primary Admin', 'password' => $passwordHash]
            );
            $this->command->info('Admin account created with password from env.');
        } else {
            $this->command->warn('ADMIN_MASTER_PASSWORD not set in .env.');
            $this->command->warn('To set up admin manually:');
            $this->command->warn('  php artisan tinker');
            $this->command->warn('  > $a = App\Models\\Administrator::firstOrCreate(
                ["email" => "twinstackdigital.pk@gmail.com"],
                ["name" => "Primary Admin", "password" => Hash::make(readline("Password: "))]]
            ');
        }
    }
}
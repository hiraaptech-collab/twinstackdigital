<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Administrator;
use Illuminate\Support\Facades\Hash;

class AdministratorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(): void
    {
        $syedaEmail = env('ADMIN_SYEDA_EMAIL');
        $syedaPassword = env('ADMIN_SYEDA_PASSWORD');
        $hamnaEmail = env('ADMIN_HAMNA_EMAIL');
        $hamnaPassword = env('ADMIN_HAMNA_PASSWORD');

        if ($syedaEmail && $syedaPassword && $hamnaEmail && $hamnaPassword) {
            Administrator::firstOrCreate(
                ['email' => $syedaEmail],
                ['name' => 'Syeda Hira', 'password' => Hash::make($syedaPassword)]
            );

            Administrator::firstOrCreate(
                ['email' => $hamnaEmail],
                ['name' => 'Hamna Shahid', 'password' => Hash::make($hamnaPassword)]
            );
        }
    }
}
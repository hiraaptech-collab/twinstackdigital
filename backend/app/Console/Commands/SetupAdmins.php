<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Hash;
use App\Models\Administrator;

class SetupAdmins extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:setup-admins {--email= : Optional email of administrator to reset} {--password= : Optional password to set}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Set up or reset the two authorized administrator accounts for Twin Stack Digital';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $this->info('Twin Stack Digital - Administrator Setup & Password Reset');
        $this->newLine();

        $targetEmail = $this->option('email');
        $givenPassword = $this->option('password');

        $authorizedAdmins = [
            'syeda.hira@twinstack.digital' => 'Syeda Hira',
            'hamna.shahid@twinstack.digital' => 'Hamna Shahid',
        ];

        if ($targetEmail) {
            if (!isset($authorizedAdmins[$targetEmail])) {
                $this->error("Only the two authorized founders can be configured: " . implode(', ', array_keys($authorizedAdmins)));
                return Command::FAILURE;
            }

            $password = $givenPassword ?: $this->secret("Enter new password for {$authorizedAdmins[$targetEmail]} ({$targetEmail})");
            if (empty($password)) {
                $this->error('Password cannot be empty.');
                return Command::FAILURE;
            }

            Administrator::updateOrCreate(
                ['email' => $targetEmail],
                ['name' => $authorizedAdmins[$targetEmail], 'password' => Hash::make($password)]
            );

            $this->info("Password successfully updated for {$authorizedAdmins[$targetEmail]} ({$targetEmail})");
            return Command::SUCCESS;
        }

        foreach ($authorizedAdmins as $email => $name) {
            $password = $givenPassword ?: $this->secret("Enter password for {$name} ({$email})");
            if (empty($password)) {
                $password = 'TwinStack@2026!'; // Safe default initial development password if none provided
                $this->warn("No password provided, using default secure development password for {$name}");
            }

            Administrator::updateOrCreate(
                ['email' => $email],
                ['name' => $name, 'password' => Hash::make($password)]
            );

            $this->info("Configured {$name} ({$email})");
        }

        $this->newLine();
        $this->info('Administrator accounts successfully ready.');
        return Command::SUCCESS;
    }
}
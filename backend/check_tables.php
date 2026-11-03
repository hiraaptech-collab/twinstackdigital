<?php
require __DIR__.'/vendor/autoload.php';

$app = require __DIR__.'/bootstrap/app.php';
$app->make(\Illuminate\Contracts\Console\Kernel::class)->bootstrap();

$db = $app->make('db');
$tables = $db->select('SHOW TABLES');

$tableNames = array_column($tables, 'In_Tables');
echo "Tables: " . implode(', ', $tableNames) . "\n";

foreach ($tableNames as $table) {
    echo "\nTable: $table\n";
    $columns = $db->select("DESCRIBE $table");
    foreach ($columns as $col) {
        echo "  - {$col->Field}: {$col->Type}\n";
    }
}
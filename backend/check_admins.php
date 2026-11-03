<?php
require_once 'vendor/autoload.php';
$admins = App\Models\Administrator::all();
foreach ($admins as $a) {
    echo $a->email . ' - ' . $a->name . PHP_EOL;
}
?>
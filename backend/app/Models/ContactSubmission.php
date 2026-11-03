<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;

class ContactSubmission extends Model
{
    protected $fillable = [
        'name',
        'email',
        'phone',
        'service',
        'budget',
        'message',
        'status',
        'notes',
    ];

    protected $casts = [
        'service' => 'string',
        'budget' => 'string',
        'status' => 'string',
        'notes' => 'string',
    ];

    protected function status(): Attribute
    {
        return Attribute::get(function ($value) {
            return $value ?? 'new';
        });
    }

    protected function notes(): Attribute
    {
        return Attribute::get(function ($value) {
            return $value ?? '';
        });
    }
}
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ConsultationSlot extends Model
{
    use HasFactory;

    protected $table = 'consultation_slots';

    protected $fillable = [
        'date',
        'time_slot',
        'is_available',
        'booked_by_name',
        'booked_by_email',
        'booked_by_phone',
        'notes',
        'status',
    ];

    protected $casts = [
        'date' => 'date',
        'is_available' => 'boolean',
    ];
}

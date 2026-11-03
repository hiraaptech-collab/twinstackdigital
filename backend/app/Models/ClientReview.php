<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClientReview extends Model
{
    use HasFactory;

    protected $table = 'client_reviews';

    protected $fillable = [
        'client_name',
        'client_role',
        'company',
        'rating',
        'review_text',
        'is_approved',
        'avatar_url',
        'project_id',
    ];

    protected $casts = [
        'rating' => 'integer',
        'is_approved' => 'boolean',
    ];

    public function project()
    {
        return $this->belongsTo(Project::class);
    }
}

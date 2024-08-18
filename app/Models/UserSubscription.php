<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class UserSubscription extends Model
{
    use HasFactory,SoftDeletes;

    protected $guarded = ['created_at', 'updated_at'];

    public function subscriptionPlan():BelongsTo{
        return $this->belongsTo(SubscriptionPlan::class); 
    }
}

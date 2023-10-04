<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class DeviceType extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $table = 'device_types';
    protected $guarded = false;

    public function deviceModels(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(DeviceModel::class);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class DeviceModel extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $table = 'device_models';
    protected $guarded = false;

    public function devices(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(Device::class)->orderBy('device_color_id');
    }

    public function deviceServices(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(DeviceService::class)
            ->orderBy('hits', 'desc')
            ->orderBy('id', 'asc');
    }

    public function deviceType(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(DeviceType::class);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class DeviceService extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $table = 'device_services';
    protected $guarded = false;

    public function deviceModel(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(DeviceModel::class);
    }
}

<?php

namespace App\Services;

use App\Models\DeviceType;
use \Illuminate\Database\Eloquent\Collection;

class DeviceTypeService
{
    private Collection $types;

    public function __construct()
    {
        $this->types = DeviceType::all();
    }

    public function getTypesRelation():Collection
    {
        foreach ($this->types as $type){
            foreach ($type->deviceModels as $model){
                $model->deviceServices;
                $model->devices;
            }
        }

        return $this->types;
    }

    public function getType($slug)
    {
        $filterTypes = $this->types->where("slug", $slug);
        foreach ($filterTypes as $type){
            foreach ($type->deviceModels as $model){
                $model->devices;
            };
        }
        return $filterTypes->first();
    }

}

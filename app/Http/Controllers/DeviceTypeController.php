<?php

namespace App\Http\Controllers;

use App\Models\DeviceType;
use App\Services\DeviceTypeService;
use Illuminate\Http\Request;

class DeviceTypeController extends Controller
{
    private DeviceTypeService $service;

    public function __construct()
    {
        $this->service = new DeviceTypeService();
    }

    /**
     * Display a listing of the resource.
     */
    public function index(): \Illuminate\Database\Eloquent\Collection
    {
        return $this->service->getTypesRelation();
    }

    public function cleared_types(): \Illuminate\Database\Eloquent\Collection
    {
        return DeviceType::all();
    }
    /**
     * Display the specified resource.
     */
    public function show(string $slug)
    {
       return $this->service->getType($slug);
    }

}

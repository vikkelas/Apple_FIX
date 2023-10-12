<?php

namespace App\Http\Controllers;

use App\Models\DeviceModel;
use Illuminate\Http\Request;

class DeviceModelController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }


    /**
     * Display the specified resource.
     */
    public function show(string $slug)
    {
        $model = DeviceModel::where('slug', $slug)->get();
        foreach ($model as $item){
            $item->devices;
        }
        return $model[0];
    }


}

<?php

namespace App\Http\Controllers;

use App\Models\DeviceColor;
use Illuminate\Http\Request;

class DeviceColorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): \Illuminate\Database\Eloquent\Collection
    {
        return DeviceColor::all();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in redux.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in redux.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from redux.
     */
    public function destroy(string $id)
    {
        //
    }
}

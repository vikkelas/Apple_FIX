<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('devices', function (Blueprint $table) {
            $table->id();
            $table->string('memory')->nullable();
            $table->string('country')->nullable();
            $table->string('wifi')->nullable();
            $table->string('proc')->nullable();
            $table->string('conf')->nullable();
            $table->string('size')->nullable();
            $table->string('loop_type')->nullable();
            $table->string('loop_size')->nullable();
            $table->string('year')->nullable();
            $table->string('pic-type')->default('color');
            $table->unsignedInteger('price');
            $table->timestamps();
            $table->softDeletes();

            $table->unsignedBigInteger('device_model_id');
            $table->unsignedBigInteger('device_color_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('devices');
    }
};

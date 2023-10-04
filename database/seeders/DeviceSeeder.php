<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DeviceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('devices')->insert([
            "memory" => "128Gb",
            "country" => "Япония (SIM + eSIM)",
            "price" => 109000,
            "device_color_id" => 12,
            "device_model_id" => 10
        ]);

        DB::table('devices')->insert([
            "memory" => "256Gb",
            "country" => "Америка (eSIM)",
            "price" => 109000,
            "device_color_id" => 6,
            "device_model_id" => 10
        ]);

        DB::table('devices')->insert([
            "memory" => "256Gb",
            "country" => "Тайвань (SIM x 2)",
            "price" => 109000,
            "device_color_id" => 4,
            "device_model_id" => 10
        ]);

        DB::table('devices')->insert([
            "memory" => "256Gb",
            "country" => "Тайвань (SIM x 2)",
            "price" => 109000,
            "device_color_id" => 2,
            "device_model_id" => 10
        ]);

        DB::table('devices')->insert([
            "memory" => "512Gb",
            "country" => "Тайвань (SIM x 2)",
            "price" => 129000,
            "device_color_id" => 9,
            "device_model_id" => 10

        ]);

        DB::table('devices')->insert([
            "memory" => "256Gb",
            "country" => "Япония (SIM + eSIM)",
            "price" => 99000,
            "device_color_id" => 9,
            "device_model_id" => 9
        ]);

        DB::table('devices')->insert([
            "memory" => "256Gb",
            "country" => "Америка (eSIM)",
            "price" => 109000,
            "device_color_id" => 12,
            "device_model_id" => 9
        ]);

        DB::table('devices')->insert([
            "memory" => "256Gb",
            "country" => "Тайвань (SIM x 2)",
            "price" => 109000,
            "device_color_id" => 6,
            "device_model_id" => 9
        ]);

        DB::table('devices')->insert([
            "memory" => "256Gb",
            "country" => "Тайвань (SIM x 2)",
            "price" => 109000,
            "device_color_id" => 2,
            "device_model_id" => 9
        ]);

        DB::table('devices')->insert([
            "memory" => "512Gb",
            "country" => "Америка (eSIM)",
            "price" => 129000,
            "device_color_id" => 4,
            "device_model_id" => 9
        ]);

        //watch
        DB::table('devices')->insert([
            "country" => "Америка",
            "price" => 27500,
            "loop_size" => "(M/L)",
            "device_color_id" => 4,
            "device_model_id" => 16
        ]);

        DB::table('devices')->insert([
            "country" => "Америка",
            "price" => 21500,
            "loop_type" => "Nike Loop",
            "device_color_id" => 9,
            "device_model_id" => 17
        ]);

        DB::table('devices')->insert([
            "country" => "Америка",
            "price" => 24500,
            "device_color_id" => 9,
            "device_model_id" => 18
        ]);

        DB::table('devices')->insert([
            "country" => "Америка",
            "loop_size" => "(M/L)",
            "price" => 42500,
            "device_color_id" => 8,
            "device_model_id" => 19
        ]);

        DB::table('devices')->insert([
            "country" => "Америка",
            "loop_type" => "Ocean Band",
            "price" => 42500,
            "device_color_id" => 8,
            "device_model_id" => 20
        ]);
    }
}

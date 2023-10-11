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
            "price" => 22000,
            "device_color_id" => 12,
            "device_model_id" => 16
        ]);

        DB::table('devices')->insert([
            "country" => "Америка",
            "price" => 21500,
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
            "price" => 21500,
            "loop_type" => "Nike Loop",
            "device_color_id" => 2,
            "device_model_id" => 17
        ]);

        DB::table('devices')->insert([
            "country" => "Америка",
            "price" => 25000,
            "device_color_id" => 12,
            "device_model_id" => 18
        ]);

        DB::table('devices')->insert([
            "country" => "Америка",
            "price" => 25000,
            "device_color_id" => 9,
            "device_model_id" => 18
        ]);

        DB::table('devices')->insert([
            "country" => "Америка",
            "price" => 25000,
            "loop_type" => "Nike Loop",
            "device_color_id" => 9,
            "device_model_id" => 18
        ]);

        DB::table('devices')->insert([
            "country" => "Америка",
            "price" => 25000,
            "loop_type" => "Nike Loop",
            "device_color_id" => 2,
            "device_model_id" => 18
        ]);

        DB::table('devices')->insert([
            "country" => "Америка",
            "price" => 30000,
            "loop_size" => "(S/M)",
            "device_color_id" => 2,
            "device_model_id" => 19
        ]);

        DB::table('devices')->insert([
            "country" => "Америка",
            "price" => 28500,
            "loop_size" => "(M/L)",
            "device_color_id" => 2,
            "device_model_id" => 19
        ]);

        DB::table('devices')->insert([
            "country" => "Америка",
            "price" => 29500,
            "loop_size" => "(S/M)",
            "device_color_id" => 8,
            "device_model_id" => 19
        ]);

        DB::table('devices')->insert([
            "country" => "Америка",
            "price" => 30000,
            "loop_size" => "(M/L)",
            "device_color_id" => 3,
            "device_model_id" => 19
        ]);

        DB::table('devices')->insert([
            "country" => "Америка",
            "price" => 30500,
            "loop_size" => "(M/L)",
            "device_color_id" => 8,
            "device_model_id" => 20
        ]);

        DB::table('devices')->insert([
            "country" => "Америка",
            "price" => 30500,
            "loop_size" => "(S/M)",
            "device_color_id" => 8,
            "device_model_id" => 20
        ]);

        DB::table('devices')->insert([
            "country" => "Америка",
            "price" => 30000,
            "loop_size" => "(M/L)",
            "device_color_id" => 3,
            "device_model_id" => 20
        ]);

        DB::table('devices')->insert([
            "country" => "Америка",
            "price" => 29500,
            "loop_size" => "(M/L)",
            "device_color_id" => 4,
            "device_model_id" => 20
        ]);

        DB::table('devices')->insert([
            "country" => "Америка",
            "price" => 56000,
            "loop_size" => "(M/L)",
            "device_color_id" => 5,
            "device_model_id" => 21
        ]);

        DB::table('devices')->insert([
            "country" => "Америка",
            "price" => 60000,
            "loop_size" => "(M/L)",
            "device_color_id" => 3,
            "device_model_id" => 21
        ]);

        DB::table('devices')->insert([
            "country" => "Америка",
            "price" => 62000,
            "loop_size" => "(-)",
            "device_color_id" => 7,
            "device_model_id" => 21
        ]);

        DB::table('devices')->insert([
            "country" => "Америка",
            "price" => 60500,
            "loop_size" => "(M/L)",
            "device_color_id" => 4,
            "device_model_id" => 21
        ]);

        DB::table('devices')->insert([
            "country" => "Америка",
            "price" => 60500,
            "loop_size" => "(-)",
            "device_color_id" => 9,
            "device_model_id" => 21
        ]);

        DB::table('devices')->insert([
            "country" => "Америка",
            "price" => 62000,
            "loop_size" => "(M/L)",
            "device_color_id" => 9,
            "device_model_id" => 21
        ]);

        DB::table('devices')->insert([
            "country" => "Америка",
            "price" => 56000,
            "loop_size" => "(S/M)",
            "device_color_id" => 5,
            "device_model_id" => 22
        ]);

        DB::table('devices')->insert([
            "country" => "Америка",
            "price" => 56500,
            "loop_size" => "(S/M)",
            "device_color_id" => 7,
            "device_model_id" => 22
        ]);

        DB::table('devices')->insert([
            "country" => "Америка",
            "price" => 56500,
            "loop_size" => "(S/M)",
            "device_color_id" => 3,
            "device_model_id" => 22
        ]);

        DB::table('devices')->insert([
            "country" => "Америка",
            "price" => 56500,
            "loop_size" => "(M/L)",
            "device_color_id" => 3,
            "device_model_id" => 22
        ]);

        DB::table('devices')->insert([
            "country" => "Америка",
            "price" => 56500,
            "loop_size" => "(-)",
            "device_color_id" => 3,
            "device_model_id" => 22
        ]);

        DB::table('devices')->insert([
            "country" => "Америка",
            "price" => 58000,
            "loop_size" => "(S/M)",
            "device_color_id" => 4,
            "device_model_id" => 22
        ]);

        DB::table('devices')->insert([
            "country" => "Америка",
            "price" => 45500,
            "loop_size" => "(-)",
            "device_color_id" => 7,
            "device_model_id" => 22
        ]);

        DB::table('devices')->insert([
            "country" => "Америка",
            "price" => 55500,
            "loop_size" => "(S/M)",
            "device_color_id" => 8,
            "device_model_id" => 22
        ]);

        DB::table('devices')->insert([
            "country" => "Америка",
            "price" => 98500,
            "loop_size" => "(L)",
            "loop_type" => "Alpine Loop Blue",
            "device_color_id" => 15,
            "device_model_id" => 23,
        ]);

        DB::table('devices')->insert([
            "country" => "Америка",
            "price" => 98500,
            "loop_size" => "(M)",
            "loop_type" => "Alpine Loop Blue",
            "device_color_id" => 15,
            "device_model_id" => 23,
        ]);

        DB::table('devices')->insert([
            "country" => "Америка",
            "price" => 98000,
            "loop_size" => "(S)",
            "loop_type" => "Alpine Loop Blue",
            "device_color_id" => 15,
            "device_model_id" => 23,
        ]);

        DB::table('devices')->insert([
            "country" => "Америка",
            "price" => 99000,
            "loop_size" => "(-)",
            "loop_type" => "Ocean Band Orange",
            "device_color_id" => 15,
            "device_model_id" => 23,
        ]);

        DB::table('devices')->insert([
            "country" => "Америка",
            "price" => 99500,
            "loop_size" => "(-)",
            "loop_type" => "Ocean Band Blue",
            "device_color_id" => 15,
            "device_model_id" => 23,
        ]);

        DB::table('devices')->insert([
            "country" => "Америка",
            "price" => 98500,
            "loop_size" => "(L)",
            "loop_type" => "Alpine Loop Olive",
            "device_color_id" => 15,
            "device_model_id" => 23,
        ]);

        DB::table('devices')->insert([
            "country" => "Америка",
            "price" => 99000,
            "loop_size" => "(M/L)",
            "loop_type" => "Trail Loop Blue",
            "device_color_id" => 15,
            "device_model_id" => 23,
        ]);

        DB::table('devices')->insert([
            "country" => "Америка",
            "price" => 98500,
            "loop_size" => "(S/M)",
            "loop_type" => "Trail Loop Green",
            "device_color_id" => 15,
            "device_model_id" => 23,
        ]);

        DB::table('devices')->insert([
            "country" => "Америка",
            "price" => 99000,
            "loop_size" => "(S)",
            "loop_type" => "Alpine Loop Indigo",
            "device_color_id" => 15,
            "device_model_id" => 23,
        ]);

        DB::table('devices')->insert([
            "country" => "Америка",
            "price" => 98500,
            "loop_size" => "(M/L)",
            "loop_type" => "Trail Loop Green",
            "device_color_id" => 15,
            "device_model_id" => 23,
        ]);

        DB::table('devices')->insert([
            "country" => "Америка",
            "price" => 98500,
            "loop_size" => "(M)",
            "loop_type" => "Alpine Loop Indigo",
            "device_color_id" => 15,
            "device_model_id" => 23,
        ]);

        DB::table('devices')->insert([
            "country" => "Америка",
            "price" => 98500,
            "loop_size" => "(M)",
            "loop_type" => "Alpine Loop Olive",
            "device_color_id" => 15,
            "device_model_id" => 23,
        ]);

        DB::table('devices')->insert([
            "country" => "Америка",
            "price" => 99000,
            "loop_size" => "(S)",
            "loop_type" => "Alpine Loop Olive",
            "device_color_id" => 15,
            "device_model_id" => 23,
        ]);

        DB::table('devices')->insert([
            "country" => "Америка",
            "price" => 99000,
            "loop_size" => "(-)",
            "loop_type" => "Ocean Band White",
            "device_color_id" => 15,
            "device_model_id" => 23,
        ]);
    }
}

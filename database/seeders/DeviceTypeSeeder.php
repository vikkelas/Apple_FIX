<?php

namespace Database\Seeders;

use App\Models\DeviceType;
use DateTime;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DeviceTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('device_types')->insert([
            "title" => "iPhone",
            "icon_name" => "iphone",
            "slug" => "iphone",
            "created_at" => new DateTime('now'),
            "updated_at" => new DateTime('now'),
        ]);

        DB::table('device_types')->insert([
            "title" => "iPad",
            "icon_name" => "ipad",
            "slug" => "ipad",
            "created_at" => new DateTime('now'),
            "updated_at" => new DateTime('now'),
        ]);

        DB::table('device_types')->insert([
            "title" => "MacBook",
            "icon_name" => "mac",
            "slug" => "mac-book",
            "created_at" => new DateTime('now'),
            "updated_at" => new DateTime('now'),
        ]);

        DB::table('device_types')->insert([
            "title" => "iMac",
            "icon_name" => "imac",
            "slug" => "imac",
            "created_at" => new DateTime('now'),
            "updated_at" => new DateTime('now'),
        ]);

        DB::table('device_types')->insert([
            "title" => "Apple Watch",
            "icon_name" => "iwatch",
            "slug" => "apple-watch",
            "created_at" => new DateTime('now'),
            "updated_at" => new DateTime('now'),
        ]);

        DB::table('device_types')->insert([
            "title" => "AirPods",
            "icon_name" => "airPods",
            "slug" => "airpods",
            "created_at" => new DateTime('now'),
            "updated_at" => new DateTime('now'),
        ]);
    }
}

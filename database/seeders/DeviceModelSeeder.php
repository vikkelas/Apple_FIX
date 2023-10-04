<?php

namespace Database\Seeders;

use DateTime;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DeviceModelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('device_models')->insert([
            "title" => "iPhone 11",
            "slug" => "iphone_11",
            "created_at" => new DateTime('now'),
            "updated_at" => new DateTime('now'),
            "device_type_id" => 1
        ]);

        DB::table('device_models')->insert([
            "title" => "iPhone 12",
            "slug" => "iphone_12",
            "created_at" => new DateTime('now'),
            "updated_at" => new DateTime('now'),
            "device_type_id" => 1
        ]);

        DB::table('device_models')->insert([
            "title" => "iPhone 12 mini",
            "slug" => "iphone_12_mini",
            "created_at" => new DateTime('now'),
            "updated_at" => new DateTime('now'),
            "device_type_id" => 1
        ]);

        DB::table('device_models')->insert([
            "title" => "iPhone 13",
            "slug" => "iphone_13",
            "created_at" => new DateTime('now'),
            "updated_at" => new DateTime('now'),
            "device_type_id" => 1
        ]);

        DB::table('device_models')->insert([
            "title" => "iPhone 13 mini",
            "slug" => "iphone_13_mini",
            "created_at" => new DateTime('now'),
            "updated_at" => new DateTime('now'),
            "device_type_id" => 1
        ]);

        DB::table('device_models')->insert([
            "title" => "iPhone 13 Pro",
            "slug" => "iphone_13_pro",
            "created_at" => new DateTime('now'),
            "updated_at" => new DateTime('now'),
            "device_type_id" => 1
        ]);

        DB::table('device_models')->insert([
            "title" => "iPhone 13 Pro Max",
            "slug" => "iphone_13_pro_max",
            "created_at" => new DateTime('now'),
            "updated_at" => new DateTime('now'),
            "device_type_id" => 1
        ]);

        DB::table('device_models')->insert([
            "title" => "iPhone 14",
            "slug" => "iphone_14",
            "created_at" => new DateTime('now'),
            "updated_at" => new DateTime('now'),
            "device_type_id" => 1
        ]);

        DB::table('device_models')->insert([
            "title" => "iPhone 14 Pro",
            "slug" => "iphone_14_pro",
            "created_at" => new DateTime('now'),
            "updated_at" => new DateTime('now'),
            "device_type_id" => 1
        ]);

        DB::table('device_models')->insert([
            "title" => "iPhone 14 Pro Max",
            "slug" => "iphone_14_pro_max",
            "created_at" => new DateTime('now'),
            "updated_at" => new DateTime('now'),
            "device_type_id" => 1
        ]);

        DB::table('device_models')->insert([
            "title" => "iPhone 15",
            "slug" => "iphone_15",
            "created_at" => new DateTime('now'),
            "updated_at" => new DateTime('now'),
            "device_type_id" => 1
        ]);

        DB::table('device_models')->insert([
            "title" => "iPhone 15 Pro",
            "slug" => "iphone_15_pro",
            "created_at" => new DateTime('now'),
            "updated_at" => new DateTime('now'),
            "device_type_id" => 1
        ]);

        DB::table('device_models')->insert([
            "title" => "iPhone 15 Pro Max",
            "slug" => "iphone_15_pro_max",
            "created_at" => new DateTime('now'),
            "updated_at" => new DateTime('now'),
            "device_type_id" => 1
        ]);

        DB::table('device_models')->insert([
            "title" => "iPhone SE 2020",
            "slug" => "iphone_se_2020",
            "created_at" => new DateTime('now'),
            "updated_at" => new DateTime('now'),
            "device_type_id" => 1
        ]);

        DB::table('device_models')->insert([
            "title" => "iPhone SE 2022",
            "slug" => "iphone_se_2022",
            "created_at" => new DateTime('now'),
            "updated_at" => new DateTime('now'),
            "device_type_id" => 1
        ]);
        //watch
        DB::table('device_models')->insert([
            "title" => "Watch SE 2022 40mm",
            "slug" => "watch_SE_2022_40mm",
            "created_at" => new DateTime('now'),
            "updated_at" => new DateTime('now'),
            "device_type_id" => 5
        ]);

        DB::table('device_models')->insert([
            "title" => "Watch SE 2021 40mm",
            "slug" => "watch_SE_2021_40mm",
            "created_at" => new DateTime('now'),
            "updated_at" => new DateTime('now'),
            "device_type_id" => 5
        ]);

        DB::table('device_models')->insert([
            "title" => "Watch SE 2020 44mm",
            "slug" => "watch_SE_2020_44mm",
            "created_at" => new DateTime('now'),
            "updated_at" => new DateTime('now'),
            "device_type_id" => 5
        ]);

        DB::table('device_models')->insert([
            "title" => "Watch S8 45mm",
            "slug" => "watch_S8_45mm",
            "created_at" => new DateTime('now'),
            "updated_at" => new DateTime('now'),
            "device_type_id" => 5
        ]);

        DB::table('device_models')->insert([
            "title" => "Watch Ultra 49mm",
            "slug" => "watch_ultra_49mm",
            "created_at" => new DateTime('now'),
            "updated_at" => new DateTime('now'),
            "device_type_id" => 5
        ]);
    }
}

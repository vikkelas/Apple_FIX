<?php

namespace Database\Seeders;

use DateTime;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DeviceColorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('device_colors')->insert([
            "title" => "Yellow",
            "first_color"=>"#FEEDA6",
            "second_color"=>"#FDE580",
            "created_at" => new DateTime('now'),
            "updated_at" => new DateTime('now'),
        ]);

        DB::table('device_colors')->insert([
            "title" => "White",
            "first_color"=>"#F4F3EE",
            "second_color"=>"#EBEAE5",
            "created_at" => new DateTime('now'),
            "updated_at" => new DateTime('now'),
        ]);

        DB::table('device_colors')->insert([
            "title" => "Starligth",
            "first_color"=>"#ECEAE5",
            "second_color"=>"#DDD9D1",
            "created_at" => new DateTime('now'),
            "updated_at" => new DateTime('now'),
        ]);

        DB::table('device_colors')->insert([
            "title" => "Silver",
            "first_color"=>"#E6E7E8",
            "second_color"=>"#D7D8D9",
            "created_at" => new DateTime('now'),
            "updated_at" => new DateTime('now'),
        ]);

        DB::table('device_colors')->insert([
            "title" => "Red",
            "first_color"=>"#C63C56",
            "second_color"=>"#BA0C2F",
            "created_at" => new DateTime('now'),
            "updated_at" => new DateTime('now'),
        ]);

        DB::table('device_colors')->insert([
            "title" => "Purple",
            "first_color"=>"#C2C1D7",
            "second_color"=>"#B0AFC7",
            "created_at" => new DateTime('now'),
            "updated_at" => new DateTime('now'),
        ]);

        DB::table('device_colors')->insert([
            "title" => "Pink",
            "first_color"=>"#EAD7D5",
            "second_color"=>"#DCC7C4",
            "created_at" => new DateTime('now'),
            "updated_at" => new DateTime('now'),
        ]);

        DB::table('device_colors')->insert([
            "title" => "Midnight",
            "first_color"=>"#59616E",
            "second_color"=>"#353D4A",
            "created_at" => new DateTime('now'),
            "updated_at" => new DateTime('now'),
        ]);

        DB::table('device_colors')->insert([
            "title" => "Black",
            "first_color"=>"#5A5B5D",
            "second_color"=>"#37393A",
            "created_at" => new DateTime('now'),
            "updated_at" => new DateTime('now'),
        ]);

        DB::table('device_colors')->insert([
            "title" => "Space Gray",
            "first_color"=>"#817F83",
            "second_color"=>"#59585C",
            "created_at" => new DateTime('now'),
            "updated_at" => new DateTime('now'),
        ]);

        DB::table('device_colors')->insert([
            "title" => "Green",
            "first_color"=>"#929D92",
            "second_color"=>"#324331",
            "created_at" => new DateTime('now'),
            "updated_at" => new DateTime('now'),
        ]);

        DB::table('device_colors')->insert([
            "title" => "Gold",
            "first_color"=>"#F0E5D2",
            "second_color"=>"#EFE5D1",
            "created_at" => new DateTime('now'),
            "updated_at" => new DateTime('now'),
        ]);

        DB::table('device_colors')->insert([
            "title" => "Blue",
            "first_color"=>"#B7CDD8",
            "second_color"=>"#81A5B5",
            "created_at" => new DateTime('now'),
            "updated_at" => new DateTime('now'),
        ]);

        DB::table('device_colors')->insert([
            "title" => "Natural",
            "first_color"=>"#D6D4CC",
            "second_color"=>"#ABA69B",
            "created_at" => new DateTime('now'),
            "updated_at" => new DateTime('now'),
        ]);

    }
}

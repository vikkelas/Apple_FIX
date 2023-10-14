<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DeviceServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('device_services')->insert([
            "title" => "Восстановление iOS",
            "description" => "Переустановка ПО при программном сбое",
            "price" => 500,
            "time" => "1 час",
            "hits" => true,
            "device_model_id" => 1,
        ]);

        DB::table('device_services')->insert([
            "title" => "Замена дисплея (оригинал)",
            "description" => "Установка нового дисплейного модуля",
            "price" => 11500,
            "time" => "1 час",
            "hits" => true,
            "device_model_id" => 1,
        ]);

        DB::table('device_services')->insert([
            "title" => "Замена стекла дисплея",
            "description" => "Стекло дисплея меняется отдельно, а сенсор и экран остаются заводскими",
            "price" => 7500,
            "time" => "2-3 дня",
            "hits" => true,
            "device_model_id" => 1,
        ]);

        DB::table('device_services')->insert([
            "title" => "Замена заднего стекла",
            "description" => "При повреждении стекла корпуса, его можно заменить отдельно",
            "price" => 4500,
            "time" => "1 день",
            "hits" => true,
            "device_model_id" => 1,
        ]);

        DB::table('device_services')->insert([
            "title" => "Замена аккумулятора",
            "description" => "Рекомендуется замена батарейки при эффективной ёмкости менее 75%",
            "price" => 3500,
            "time" => "1 час",
            "hits" => true,
            "device_model_id" => 1,
        ]);
    }
}

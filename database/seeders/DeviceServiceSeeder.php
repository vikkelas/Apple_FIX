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




        DB::table('device_services')->insert([
            "title" => "Чистка от пыли и грязи",
            "description" => "Профессионально удаляем загрягнения",
            "price" => 4500,
            "time" => "1 день",
            "hits" => false,
            "device_model_id" => 1,
        ]);
        DB::table('device_services')->insert([
            "title" => "Замена окошка камеры",
            "description" => "Заменить стекло камеры можно отдельно, без замены корпуса",
            "price" => 2500,
            "time" => "2 час",
            "hits" => false,
            "device_model_id" => 1,
        ]);
        DB::table('device_services')->insert([
            "title" => "Замена разъема зарядки",
            "description" => "При повреждение контактов, разъем можно заменить",
            "price" => 3000,
            "time" => "1 час",
            "hits" => false,
            "device_model_id" => 1,
        ]);
        DB::table('device_services')->insert([
            "title" => "Замена разговорного динамика",
            "description" => "Замените динамик при плохой слышимости во время разговора",
            "price" => 2500,
            "time" => "1 час",
            "hits" => false,
            "device_model_id" => 1,
        ]);
        DB::table('device_services')->insert([
            "title" => "Замена основного динамика",
            "description" => "Замените динамик при плохом проиигрывании мелодий",
            "price" => 3500,
            "time" => "1 час",
            "hits" => false,
            "device_model_id" => 1,
        ]);
        DB::table('device_services')->insert([
            "title" => "Замена разговорного микрофона",
            "description" => "Замените микрофон при жалобах собеседника на плохую слышимость",
            "price" => 4500,
            "time" => "1 день",
            "hits" => false,
            "device_model_id" => 1,
        ]);
    }
}

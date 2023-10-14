<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            DeviceTypeSeeder::class,
            DeviceModelSeeder::class,
            DeviceColorSeeder::class,
            DeviceSeeder::class,
            DeviceServiceSeeder::class
        ]);
    }
}

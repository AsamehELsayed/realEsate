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
        Schema::create('prices', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('description');
            $table->decimal('price', 8, 2); // تأكد من أن العمود هو نوع decimal
            $table->integer('days_per_month');
            $table->integer('hours_per_day');
            $table->integer('employees_count');
            $table->integer('total');
            $table->json('features');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('prices');
    }
};

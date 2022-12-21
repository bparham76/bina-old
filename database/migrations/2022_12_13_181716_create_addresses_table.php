<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('addresses', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->string('title')->default('');
            $table->string('owner')->default('');
            $table->string('text')->default('');
            $table->string('po_box')->default('');
            $table->string('no')->default(0);
            $table->string('phone')->default('');
            $table->double('latitude', 16, 14)->default(0);
            $table->double('longitude', 16, 14)->default(0);
            $table->integer('province')->default(0);
            $table->integer('county')->default(0);
            $table->integer('city')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('addresses');
    }
};

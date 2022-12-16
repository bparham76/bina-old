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
        Schema::create('user_infos', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->string('first_name')->nullable();
            $table->string('last_name')->nullable();
            $table->string('pid')->nullable()->unique();
            $table->string('email')->nullable()->unique();
            $table->string('eco_no')->nullable()->unique();
            $table->string('reg_no')->nullable()->unique();
            $table->string('shaba_no')->nullable()->unique();
            $table->string('acc_no')->nullable()->unique();
            $table->integer('sex')->nullable();
            $table->integer('type')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_infos');
    }
};

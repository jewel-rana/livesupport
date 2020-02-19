<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLiveSupportRepliesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('live_support_replies', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('live_support_id')->index();
            $table->integer('sender_id')->index();
            $table->integer('receiver_id')->index();
            $table->string('message')->index();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('live_support_replies');
    }
}

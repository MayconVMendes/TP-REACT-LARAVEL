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
        Schema::create('clientes', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('nome', 20);
            $table->string('sobrenome', 30);
            $table->date('dt_nasc');
            $table->char('telefone', 13);
            $table->decimal('salary', $precision = 8, $scale = 2);
        });
    }

    public function down()
    {
        Schema::dropIfExists('clientes');
    }
};

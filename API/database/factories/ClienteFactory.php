<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class ClienteFactory extends Factory
{
    public function definition()
    {
        return [
            'nome' => fake()->name(15),
            'sobrenome' => Str::random(10),
            'dt_nasc' => fake()->date(),
            'telefone' => '13991092190',
            'salario' => 10000.00
        ];
    }
}

<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ClienteRequest extends FormRequest
{
    public function authorize()
    {
        return false;
    }

    public function rules()
    {
        return [
            'nome' => 'required|max:20|',
            'sobrenome' => 'required|max:30',
            'dt_nasc' => 'required|date',
            'telefone' => 'required|size:11',
            'salario' => 'required|numeric'
        ], [
            'nome.required' => 'O nome é obrigatório!'
        ];
    }

    public function messages()
    {
        return [
            'nome.required' => 'O nome é obrigatório!'
        ];
    }
}

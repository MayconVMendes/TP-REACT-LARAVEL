<?php

namespace App\Http\Controllers;

use App\Models\Cliente;
use Illuminate\Http\Request;
use App\Http\Resources\ClienteResource;

class ClienteController extends Controller
{
    public function index()
    {
        $clientes = Cliente::all();
        return ClienteResource::collection($clientes);
    }

    public function show(Cliente $cliente)
    {
        return new ClienteResource($cliente);
    }

    public function store(Request $request)
    {
        $cliente = Cliente::create (  $request->all()   );
        return new ClienteResource($cliente);
    }

    public function update(Request $request, Cliente $cliente)
    {
        $cliente->update (  $request->all()   );
        return new ClienteResource($cliente);
    }

    public function delete(Cliente $cliente)
    {
        
    }
}

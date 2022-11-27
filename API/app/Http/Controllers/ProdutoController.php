<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Produto;
use App\Http\Resources\ProdutoResource;
use App\Http\Requests\ProdutoRequest;

class ProdutoController extends Controller
{
    public function index()
    {
        $produtos = Produto::all();
        return ProdutoResource::collection($produtos);
    }

    public function show(Produto $produto)
    {
        return new ProdutoResource($produto);
    }

    public function store(ProdutoRequest $request)
    {
        $produto = Produto::create($request->all());
        return new ProdutoResource($produto);
    }

    public function update(ProdutoRequest $request, Produto $produto)
    {
        $produto->update($request->all());
        return new ProdutoResource($produto);
    }

    public function delete(Produto $produto)
    {
        $produto->delete();
        return new ProdutoResource($produto);
    }
}

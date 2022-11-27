<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProdutoController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//Busca todos os produtos
Route::get('produtos', [ProdutoController::class, 'index']);

//Busca por ID
Route::get(
    'produtos/{produto}',
    [ProdutoController::class, 'show']
);

//Novo produto
Route::post(
    'produtos',
    [ProdutoController::class, 'store']
);

//Atualização de produto
Route::put(
    'produtos/{produto}',
    [ProdutoController::class, 'update']
);

//Excluir produto
Route::delete(
    'produtos/{produto}',
    [ProdutoController::class, 'delete']
);

<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePurchaseRequest;
use App\Http\Requests\UpdatePurchaseRequest;
use App\Models\Customer;
use App\Models\Item;
use App\Models\Purchase;
use Inertia\Inertia;

class PurchaseController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    //
  }

  /**
   * Show the form for creating a new resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function create()
  {
    $customers = Customer::select('id', 'name', 'kana')->get();
    $items = Item::select('id', 'name', 'price')
      ->where('is_selling', true)
      ->get();

    return Inertia::render('Purchases/Create', [
      'customers' => $customers,
      'items' => $items
    ]);
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \App\Http\Requests\StorePurchaseRequest  $request
   * @return \Illuminate\Http\Response
   */
  public function store(StorePurchaseRequest $request)
  {
    //
  }

  /**
   * Display the specified resource.
   *
   * @param  \App\Models\Purchase  $purchase
   * @return \Illuminate\Http\Response
   */
  public function show(Purchase $purchase)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  \App\Models\Purchase  $purchase
   * @return \Illuminate\Http\Response
   */
  public function edit(Purchase $purchase)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \App\Http\Requests\UpdatePurchaseRequest  $request
   * @param  \App\Models\Purchase  $purchase
   * @return \Illuminate\Http\Response
   */
  public function update(UpdatePurchaseRequest $request, Purchase $purchase)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\Models\Purchase  $purchase
   * @return \Illuminate\Http\Response
   */
  public function destroy(Purchase $purchase)
  {
    //
  }
}

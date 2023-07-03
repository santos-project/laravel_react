<?php

namespace App\Http\Controllers;

use App\Models\InertiaForm;
use Illuminate\Http\Request;
use Inertia\Inertia;

class InertiaFormController extends Controller
{
  public function index()
  {
    return Inertia::render('Inertia/Index');
  }

  public function create()
  {
    return Inertia::render('Inertia/Create');
  }

  public function show($id)
  {
    return Inertia::render('Inertia/Show', [
      'id' => $id
    ]);
  }

  public function store(Request $request)
  {
    $request->validate([
      'title' => ['required', 'max:20'],
      'content' => ['required']
    ]);
    
    $inertiaForm = new InertiaForm;
    $inertiaForm->title = $request->title;
    $inertiaForm->content = $request->content;
    $inertiaForm->save();

    return to_route('inertia.index');
  }
}

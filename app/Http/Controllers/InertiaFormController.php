<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class InertiaFormController extends Controller
{
  public function index()
  {
    return Inertia::render('Inertia/Index');
  }
}

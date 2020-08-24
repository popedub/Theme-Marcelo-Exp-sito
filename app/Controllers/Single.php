<?php

namespace App\Controllers;

use Sober\Controller\Controller;

class Single extends Controller
{
    protected $acf = true;

        public function categories()
        {

        $categories = collect(get_the_category())
        ->filter(function ($category) {
        return $category->slug !== 'sin-categoria';
        })
        ->map(function ($category) {
        return (object) [
        'name' => $category->name,
        ];
        });
        return $categories;

        }
}

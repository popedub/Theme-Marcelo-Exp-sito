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
        return $category->slug !== 'proyectos-en-proceso';
        })
        ->filter(function ($category) {
        return $category->slug !== 'archivo-general';
        })
        ->filter(function ($category) {
        return $category->slug !== 'projects-in-process';
        })
        ->filter(function ($category) {
        return $category->slug !== 'general-archive';
        })
        ->map(function ($category) {
        return (object) [
        'name' => $category->name,
        'slug' => $category->slug,
        ];
        });
        return $categories;

        }
}

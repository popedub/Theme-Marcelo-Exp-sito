<?php

namespace App\Controllers;

use Sober\Controller\Controller;

class Home extends Controller
{
    protected $acf = true;

    public function descripcion()
    {
        $categories = collect(get_categories())
        ->filter(function ($category) {
        return $category->slug !== 'sin-categoria';
        })
        ->map(function ($category) {
        return (object) [
        'name' => $category->name,
        'slug' => $category->slug,
        'description' => $category->description,
        ];
        });
        //return $categories;
        return $categories;
        //return get_categories();
    }
    public function filter_cat()
    {
        $arg = array(
            'taxonomy' => 'category',
            'exclude' => array (11, 2),
        );
                $categories = collect(get_terms($arg))
                ->filter(function ($category) {
                return $category->slug !== 'sin-categoria';
                })
                ->map(function ($category) {
                return (object) [
                'name' => $category->name,
                'slug' => $category->slug,
                ];
                });
                return $categories;

    }
        public function filter_parent()
        {
        $arg = array(
        'taxonomy' => 'category',
        'include' => array (11, 2),
        );
        $categories = collect(get_terms($arg))
        ->filter(function ($category) {
        return $category->slug !== 'sin-categoria';
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

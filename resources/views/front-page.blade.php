@extends('layouts.app')

@section('content')
@php
$args = array(
'post_type' => 'agenda',
'post_status' => 'publish',
'posts_per_page' => -1,
'orderby' => 'title',
'order' => 'ASC',
);
@endphp

@query($args)
<h2>@title</h2>
  @fecha_ini
  @fecha_final
  @descripcion_evento
  <a href="@enlace_evento" target="_blank">@texto_enlace</a>


@endquery
@endsection

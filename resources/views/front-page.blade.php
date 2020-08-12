@extends('layouts.app')

@section('content')
<div class="row">
  <div class="col-12 col-lg-8">
    <div class="foto-home" style="background-image: url({{ $foto_destacada->url }})"></div>
  </div>
  <div class="col-12 col-lg-4 pl-lg-0 position-relative">
    @php
    $args = array(
    'post_type' => 'agenda',
    'post_status' => 'publish',
    'posts_per_page' => -1,
    'orderby' => 'title',
    'order' => 'ASC',
    );
    @endphp
    {{-- estas directivas están en el setup.php --}}
    <div class="agenda">
      @query($args)
      <div class="item-agenda">
        <div class="fecha">
          @fecha_ini
          @fecha_final
        </div>
        @php
        $link = get_field('enlace_evento')
        @endphp

        <div class="descripcion">
          @descripcion_evento
        </div>
        @if ($link)
        <a href="@enlace_evento" target="_blank">
          <span>
            →
          </span>
          @texto_enlace
        </a>
        @endif

      </div>
      @endquery
    </div>


  </div>
</div>


@endsection

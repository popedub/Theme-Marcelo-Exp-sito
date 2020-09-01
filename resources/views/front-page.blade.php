@extends('layouts.app')

@section('content')
<div class="row">
  <div class="col-12 col-lg-9 pl-lg-0 pr-lg-0">
    @if (@isset($galeria))
    <div class="galeria">
      @foreach ($galeria as $foto)
      <div class="foto-home" style="background-image: url({{ $foto->url }})"></div>
      @endforeach
    </div>
    @endif
    <div class="quote">
      @if (@isset($cita))
      {!! $cita !!}
      @endif
    </div>
  </div>
  <div class="col-12 col-lg-3 pl-lg-0 position-relative">
    @php
    $args = array(
    'post_type' => 'agenda',
    'post_status' => 'publish',
    'posts_per_page' => -1,
    'orderby' => 'date',
    'order' => 'DESC',
    );
    @endphp
    {{-- estas directivas están en el setup.php --}}
    <div class="agenda">
      <div class="d-block d-lg-d-none pt-3 mb-4">
        {{ __('Agenda','thememexposito') }}
      </div>
      @query($args)
      <div class="item-agenda">
        <div class="fecha">
          @fecha_ini
          @fecha_final <br>
          <span class="tipo-evento">@evento</span>

        </div>
        @php
        $link = get_field('enlace_evento')
        @endphp

        <div class="descripcion">
          @descripcion_evento
        </div>
        @if ($link)
        <div class="arrow">
          <a href="@enlace_evento" target="_blank">
            @texto_enlace
          </a>
        </div>

        @endif

      </div>
      @endquery
    </div>


  </div>
</div>


@endsection

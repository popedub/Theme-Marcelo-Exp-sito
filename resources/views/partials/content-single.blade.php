<article @php (post_class()) @endphp>
  <header>
    <h1 class="entry-title">{!! get_the_title() !!}</h1>
    @if ($subtitulo)
    <h2 class="subtitle text-uppercase">{{ $subtitulo }}</h2>
    @endif
    @if ($fecha_inicio)
    <div class="date<?php if($fecha_final) echo ' date-end';?>">
      {{ $fecha_inicio }}
      @if ($fecha_final)
      -{{ $fecha_final }}
      @endif

    </div>
    @if (has_post_thumbnail())
        <figure class="figure mr-auto ml-auto d-block d-lg-none mt-4">
          {{ the_post_thumbnail('full', ['class' => 'figure-img img-fluid']) }}

        </figure>



        @endif
    @endif

  </header>
  <div class="entry-content">
    @if ($links_destacados)
    <div class="mb-5">
      @foreach ($links_destacados as $link)
      <div class="arrow">
        <a href="{{ $link->enlace }}" target="_blank">{{ $link->texto }}</a>
      </div>
      @endforeach
    </div>
    @endif
    @php the_content() @endphp
    <div class="footer-content">

      <a href="<?php echo get_permalink(92) ?>" class="back d-none d-lg-block">
        <div class="arrow">
          <p>
            @php echo __('Volver a contenidos', 'thememexposito') @endphp
          </p>


        </div>
      </a>


      <div class="footer">
        <div class="row">
          <div class="col-12 m">
            @php
            echo __('MARCELO EXPÓSITO', 'thememexposito') . '<br>';
            echo date('Y');
            @endphp
          </div>

        </div>

      </div>
    </div>

  </div>
  <div class="content-sidebar">


    @include('partials/form-filter')
    @if (has_post_thumbnail())
    <figure class="figure mr-auto ml-auto d-none d-lg-block">
      {{ the_post_thumbnail('full', ['class' => 'figure-img img-fluid']) }}

    </figure>



    @endif
    <div class="overlay-sidebar audio">
      @if ($audio)
      @foreach ($audio as $item)
      <div class="item-sidebar">
        @if ($loop->first)
        <div class="d-flex justify-content-between align-items-center mb-4">
          <h2>@php echo __('AUDIO', 'thememexposito') @endphp</h2>

        </div>
        @endif
        <h3>{{ $item->titulo }}</h3>
        <audio controls>
          <source src="{{ $item->url_audio }}" type="audio/mpge">
        </audio>
        <div class="mt-3">
          {!! $item->descripcion !!}
        </div>
      </div>

      @endforeach

      @endif
    </div>
    <div class="overlay-sidebar video">
      @if ($video)
      @foreach ($video as $item)
      <div class="item-sidebar">
        @if ($loop->first)
        <div class="d-flex justify-content-between align-items-center mb-4">
          <h2>@php echo __('VÍDEO', 'thememexposito') @endphp</h2>

        </div>
        @endif
        <h3>{{ $item->titulo  }}</h3>
        <div class="embed-responsive embed-responsive-16by9">
          {!! $item->url !!}
        </div>
        <div class="mt-3">
          {!! $item->descripcion !!}
        </div>
      </div>
      @endforeach
      @endif

    </div>
    <div class="overlay-sidebar imagenes">

      @if ($galeria)
      <div class="galeria-single">
        <div class="d-flex justify-content-between align-items-center mb-4">
          <h2>@php echo __('FOTO', 'thememexposito') @endphp</h2>

        </div>

        @foreach ($galeria as $foto)

        <figure class="figure">
          <img class="figure-img img-fluid" src="{{ $foto->url }}" alt="{{ $foto->alt }}">
          <figcaption class="figure-caption">{{ $foto->caption }}</figcaption>
        </figure>

        @endforeach
      </div>
      @endif
    </div>
  </div>

  <footer>
    <div class="buttons-group-fixed btn-group" role="group" arial-label="Audio, Vídeo, Imágenes ">
      @if ($audio)
      <button type="button" class="btn btn-outline-dark border-left-0 border-right-0 border-bottom-0 audio">
        @php
        echo __('Audio', 'thememexposito')
        @endphp</button>
      @endif
      @if ($video)
      <button type="button" class="btn btn-outline-dark video
      <?php if($audio) {
            echo "border-bottom-0 border-right-0";
          }else {
            echo "border-bottom-0 border-right-0 border-left-0";
          }
        ?>
      ">@php
        echo __('Vídeo', 'thememexposito')
        @endphp</button>
      @endif
      @if ($galeria)
      <button type="button" class="btn btn-outline-dark imagenes
        <?php
          if($audio || $video) {
            echo "border-right-0 border-bottom-0";
          }
          if(!$audio && !$video) {
            echo "border-right-0 border-bottom-0 border-left-0";
          }
        ?>
      ">
        @php
        echo __('Foto', 'thememexposito')
        @endphp</button>
      @endif

    </div>
  </footer>




</article>
@svg('close-left', 'arrow-left d-none')
@svg('close-left','back-top')

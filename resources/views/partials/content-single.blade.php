<article @php (post_class()) @endphp>
  <header>
    <h1 class="entry-title">{!! get_the_title() !!}</h1>
    <h2 class="subtitle text-uppercase">{{ $subtitulo }}</h2>
    <div class="date">{{ $fecha_inicio }}{{ $fecha_final }}</div>
  </header>
  <div class="entry-content">

    @php the_content() @endphp
  </div>
  <div class="content-sidebar">
    @if (has_post_thumbnail())
    {{ the_post_thumbnail('full', ['class' => 'img-fluid']) }}


    @endif
    <div class="overlay-sidebar audio">
      @php the_content() @endphp
    </div>
    <div class="overlay-sidebar video">
      @if (@isset($video))
      <div class="embed-responsive embed-responsive-16by9">
        {!! $video !!}
      </div>
      @endif

    </div>
    <div class="overlay-sidebar imagenes">
      @if (@isset($galeria))
      @foreach ($galeria as $foto)

      <figure class="figure">
        <img class="figure-img img-fluid" src="{{ $foto->url }}" alt="{{ $foto->alt }}">
        <figcaption class="figure-caption">{{ $foto->caption }}</figcaption>
      </figure>

      @endforeach
      @endif
    </div>
  </div>

  <footer>
    <div class="buttons-group-fixed btn-group" role="group" arial-label="Audio, Vídeo, Imágenes ">
      <button type="button" class="btn btn-outline-dark border-left-0 audio">@php
        echo __('Audio', 'thememexposito')
        @endphp</button>
      <button type="button" class="btn btn-outline-dark video">@php
        echo __('Vídeo', 'thememexposito')
        @endphp</button>
      <button type="button" class="btn btn-outline-dark imagenes">@php
        echo __('Imágenes', 'thememexposito')
        @endphp</button>
    </div>
  </footer>
</article>

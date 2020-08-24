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

    @foreach ($categories as $cat)
    {{ $cat->name }}@if(!$loop->last),@endif
    @endforeach
    @if (has_post_thumbnail())
    <figure class="figure mr-auto ml-auto">
      {{ the_post_thumbnail('full', ['class' => 'figure-img img-fluid']) }}

    </figure>



    @endif
    <div class="overlay-sidebar audio">
      @if ($audio)
      @foreach ($audio as $item)
      <h3>{{ $item->titulo }}</h3>
      <audio controls>
      <source src="{{ $item->url_audio }}" type="audio/mpge">
      </audio>
      <div>
        {!! $item->descripcion !!}
      </div>


      @endforeach

      @endif
    </div>
    <div class="overlay-sidebar video">
      @if ($video)
      @foreach ($video as $item)
      <h3>{{ $item->titulo  }}</h3>
      <div class="embed-responsive embed-responsive-16by9">
        {!! $item->url !!}
      </div>
      <div>
        {!! $item->descripcion !!}
      </div>
      @endforeach
      @endif

    </div>
    <div class="overlay-sidebar imagenes">

      @if ($galeria)
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
        ?>
      ">
        @php
        echo __('Imágenes', 'thememexposito')
        @endphp</button>
      @endif

    </div>
  </footer>
</article>

<div class="row">
  <div class="col-12 col-lg-10 contenido">
    <div class="row enlaces-bio">
      <div class="col-12 col-lg-6">
        @if (@isset($email))
        <div class="mail">
          <a href="mailto:{{ $email }}" target="_blank">
            @php
            echo __('info[at]marceloexposito.net','thememexposito')
            @endphp
          </a>
        </div>
        @endif

        @if (@isset($redes))
        <div class="social">
          @foreach ($redes as $item)
          <a href="{{ $item->enlace }}" target="_blank">{{ $item->nombre }}</a><br>
          @endforeach
        </div>
        @endif
      </div>

      <div class="col-12 col-lg-6">

        @if (@isset($representacion))
        <div class="representacion mb-2 mb-lg-4">
          @php
          echo __('Representación:', 'thememexposito') . '<br>';
          @endphp
          @foreach ($representacion as $item)
          <a href="{{ $item->enlace }}" target="_blank">{{ $item->nombre }}</a>
          @endforeach
        </div>
        @endif

        @if (@isset($distribucion_de_video))
        <div class="video">
          @php
          echo __('Distribución del vídeo:', 'thememexposito') . '<br>';
          @endphp
          @foreach ($distribucion_de_video as $item)
          <a href="{{ $item->enlace }}" target="_blank">{{ $item->nombre }}</a>
          @endforeach
        </div>
        @endif

        @if (@isset($dossiers))
        <div class="dossier">
          @foreach ($dossiers as $item)
          <a href="{{ $item->enlace }}" target="_blank">{{ $item->nombre }}</a>
          @endforeach
        </div>
        @endif

      </div>
    </div>
    @if (@isset($intro))
    <section class="intro-bio mt-4">
      <div class="info">
        {!! $intro !!}
      </div>
    </section>

    @endif

    @if (@isset($biografia))
    @forelse ($biografia as $item)
    <section id="secction{{ $loop->index }}" class="mb-5">
      <h3 class="text-center mb-5">{!! $item->texto_menu !!}</h3>
      <div class="info">
        {!! $item->contenido_seccion !!}
      </div>

    </section>

    @empty

    @endforelse
    @endif
    @php the_content() @endphp
  </div>
  <div class="col-12 col-lg-2">
    @if (@isset($biografia))
    <div id="index" class="list-group">
      @forelse ($biografia as $item)

      <a href="#secction{{ $loop->index }}" class="list-group-item list-group-item-action">
        {!! $item->texto_menu !!}
      </a>

      @empty
    </div>


    @endforelse
    @endif
  </div>
</div>

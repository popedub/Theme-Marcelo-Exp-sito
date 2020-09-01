<div class="row">
  <div class="col-12 col-lg-10 contenido">
    <div class="row enlaces-bio d-none d-lg-flex">
      <div class="col-12 col-lg-6">
        @if ($email)
        <div class="mail">
          <a href="mailto:{{ $email }}" target="_blank">
            @php
            echo __('info[at]marceloexposito.net','thememexposito')
            @endphp
          </a>
        </div>
        @endif

        @if ($redes)
        <div class="social">
          @foreach ($redes as $item)
          <a href="{{ $item->enlace }}" target="_blank">{{ $item->nombre }}</a><br>
          @endforeach
        </div>
        @endif
      </div>

      <div class="col-12 col-lg-6">

        @if ($representacion)
        <div class="representacion mb-lg-4">
          @php
          echo __('Representación:', 'thememexposito') . '<br>';
          @endphp
          @foreach ($representacion as $item)
          <a href="{{ $item->enlace }}" target="_blank">{{ $item->nombre }}</a>
          @endforeach
        </div>
        @endif

        @if ($distribucion_de_video)
        <div class="video">
          @php
          echo __('Distribución del vídeo:', 'thememexposito') . '<br>';
          @endphp
          @foreach ($distribucion_de_video as $item)
          <a href="{{ $item->enlace }}" target="_blank">{{ $item->nombre }}</a>
          @endforeach
        </div>
        @endif

        @if ($dossiers)
        <div class="dossier">
          @foreach ($dossiers as $item)
          <a href="{{ $item->enlace }}" target="_blank">{{ $item->nombre }}</a><br>
          @endforeach
          <a href="" class="lightbox">
            <?php $texto_galeria = get_field('texto', 400) //400 en swerv dev, 282 en local?>
            @if ($texto_galeria)
            {{ $texto_galeria  }}
            @else
            <?php echo __('Descargar fotos personales', 'thememexposito'); ?>
            @endif
          </a>
          <?php $galeria = get_field('galeria', 400) //400 en swerv dev, 282 en local?>
          @if ($galeria)
          <div id="galeria" class="d-none">
            @foreach ($galeria as $foto)
            <a href="{{ $foto['url'] }}" class="slide-{{ $loop->index }}">
              <img src="{{ $foto['url'] }}" alt="{{ $foto['caption'] }}">

            </a>
            @endforeach
          </div>


          @endif
        </div>
        @endif

      </div>
    </div>
    <div class="row enlaces-bio d-block d-lg-none">
      <div class="col-12 col-lg-6">
        @if ($email)
        <div class="mail mb-3">
          <a href="mailto:{{ $email }}" target="_blank">
            @php
            echo __('info[at]marceloexposito.net','thememexposito')
            @endphp
          </a>
        </div>
        @endif
        @if ($representacion)
        <div class="representacion mb-3">
          @php
          echo __('Representación:', 'thememexposito') . '<br>';
          @endphp
          @foreach ($representacion as $item)
          <a href="{{ $item->enlace }}" target="_blank">{{ $item->nombre }}</a>
          @endforeach
        </div>
        @endif

        @if ($distribucion_de_video)
        <div class="video mb-3">
          @php
          echo __('Distribución del vídeo:', 'thememexposito') . '<br>';
          @endphp
          @foreach ($distribucion_de_video as $item)

          <a href="{{ $item->enlace }}" target="_blank">{{ $item->nombre }}</a>

          @endforeach
        </div>
        @endif

        @if ($dossiers)
        <div class="dossier mb-3">
          @foreach ($dossiers as $item)
          <div class="arrow">
            <a href="{{ $item->enlace }}" target="_blank">{{ $item->nombre }}</a><br>
          </div>
          @endforeach
          <div class="arrow">
            <a href="" class="lightbox">
              <?php $texto_galeria = get_field('texto', 400) //400 en swerv dev, 282 en local?>
              @if ($texto_galeria)
              {{ $texto_galeria  }}
              @else
              <?php echo __('Descargar fotos personales', 'thememexposito'); ?>
              @endif
            </a>
          </div>
          <?php $galeria = get_field('galeria', 400) //400 en swerv dev, 282 en local?>
          @if ($galeria)
          <div id="galeria" class="d-none">
            @foreach ($galeria as $foto)
            <a href="{{ $foto['url'] }}" class="slide-{{ $loop->index }}">
              <img src="{{ $foto['url'] }}" alt="{{ $foto['caption'] }}">

            </a>
            @endforeach
          </div>


          @endif
        </div>
        @endif

      </div>

      <div class="col-6 offset-6 mt-5">

        @if ($redes)
        <div class="social">
          @foreach ($redes as $item)
          <a href="{{ $item->enlace }}" target="_blank">{{ $item->nombre }}</a><br>
          @endforeach
        </div>
        @endif

      </div>
    </div>
    @if ($intro)
    <section class="intro-bio mt-4">
      <div class="info">
        {!! $intro !!}
      </div>
    </section>

    @endif

    @if ($biografia)
    @forelse ($biografia as $item)
    <section id="secction{{ $loop->index }}" class="mb-5">
      <h3 class="text-center mb-0">{!! $item->texto_menu !!}</h3>
      <div class="sub-ti text-center">{!! $item->titular_contenido!!}</div>
      <div class="info txt-col-{{ $item->columnas }}">
        {!! $item->contenido_seccion !!}

      </div>
      <div class="links-destacados">
        {!! $item->enlaces_destacados !!}
      </div>
    </section>

    @empty

    @endforelse
    @endif
    @php the_content() @endphp
  </div>
  <div class="col-12 col-lg-2 d-none d-lg-block">
    @if ($biografia)
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

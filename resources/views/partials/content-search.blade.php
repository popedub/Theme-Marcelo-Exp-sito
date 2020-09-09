<article @php (post_class()) @endphp>
  <header>
    <h2 class="entry-title">
      <?php
          $enlace = get_field('enlace_evento');
          $evento = get_field('tipo_de_evento');
          $descripcion = get_field('descripcion_del_evento');
      ?>
      @if (get_post_type() == 'agenda' && $enlace)
      <a href="{{ $enlace }}" target="_blank">{{ __('Agenda y noticias: ','thememexposito') }} {{ $evento }}</a>

      @else
      <a href="{{ get_permalink() }}">{!! get_the_title() !!}</a>
      @endif
    </h2>
  </header>
  <div class="entry-summary">
    @if (get_post_type() == 'agenda')
    @if ($evento)
    {!! $evento !!}
    @endif

    @if ($descripcion)
    {!! $descripcion !!}
    @endif

    @elseif(get_post_type() != 'agenda')
    @php the_excerpt() @endphp
    @endif

  </div>
</article>
<div class="linea"></div>

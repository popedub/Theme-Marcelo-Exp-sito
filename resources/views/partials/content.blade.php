<a href="{{ get_permalink() }}">
  <article @php (post_class()) @endphp>

    <header>
      <h2 class="entry-title">
        {!! get_the_title() !!}<br>
        <span>
          @php
          the_field('subtitulo')
          @endphp

        </span>
      </h2>
    </header>
    <div class="date">
      @php
        $ini = the_field('fecha_inicio');
        $end = the_field('fecha_final');
        if($ini) {
          echo $ini;
        }
        if($end) {
          echo $end;
        }
      @endphp
    </div>
    @if (has_post_thumbnail())
    <div class="foto">
      @php
      the_post_thumbnail( 'thumbnail' )
      @endphp
    </div>

    @endif
  </article>
</a>

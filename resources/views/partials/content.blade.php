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
    @php
    $ini = get_field('fecha_inicio');
    $end = get_field('fecha_final');
    @endphp
    <div class="date <?php if($end) echo "large"; ?>">
      @php

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
      the_post_thumbnail( 'large' )
      @endphp
    </div>

    @endif
  </article>
</a>

@extends('layouts.app')

@section('content')

<div class="col-12 intro d-none d-lg-block">
  <div class="titular">
    <h2 class="invisible">START</h2>
  </div>
  <div class="descripcion-contenidos">
    {!! $texto_contenidos !!}
  </div>

  @foreach ($descripcion as $item)
  <div class="descripcion {{ $item->slug }} d-none">
    <p>{{ $item->description }}</p>
  </div>

  @endforeach
</div>



@if (!have_posts())
<div class="alert alert-warning">
  {{ __('Sorry, no results were found.', 'sage') }}
</div>
{!! get_search_form(false) !!}
@endif

<div class="col-12 pl-0 pr-0">
  <div class="grid row mr-0 ml-0">
    <div class="grid-sizer"></div>
    @while (have_posts()) @php the_post() @endphp
    @include('partials.content-'.get_post_type())
    @endwhile
  </div>
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


{!! get_the_posts_navigation() !!}
@endsection

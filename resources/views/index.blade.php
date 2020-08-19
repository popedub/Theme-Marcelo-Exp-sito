@extends('layouts.app')

@section('content')

<div class="col-12 intro">
  <div class="titular">
    <h2 class="invisible">START</h2>
  </div>
  <div class="descripcion-contenidos">
      {!! $texto_contenidos !!}
  </div>


  @foreach ($descripcion as $item)
    <div class="descripcion {{ $item->slug }} d-none">
      {{ $item->description }}
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
    @php
    echo __('MARCELO EXPÓSITO', 'thememexposito');
    echo date('Y');
    @endphp
  </div>

</div>


{!! get_the_posts_navigation() !!}
@endsection

@extends('layouts.app')

@section('content')

<div class="col-12 intro">
  {!! $texto_contenidos !!}
</div>



@if (!have_posts())
<div class="alert alert-warning">
  {{ __('Sorry, no results were found.', 'sage') }}
</div>
{!! get_search_form(false) !!}
@endif

<div class="col-12">
  <div class="grid row">
    <div class="grid-sizer"></div>
    @while (have_posts()) @php the_post() @endphp
    @include('partials.content-'.get_post_type())
    @endwhile
  </div>
</div>


{!! get_the_posts_navigation() !!}
@endsection

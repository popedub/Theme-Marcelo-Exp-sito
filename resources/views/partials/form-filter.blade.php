@foreach ($categories as $cat)
<a href="<?php echo get_permalink(92) ?>" class="link-filtro d-none d-lg-inline" data-filter="{{ $cat->slug }}">{{ $cat->name }}</a>@if(!$loop->last), @endif

@endforeach

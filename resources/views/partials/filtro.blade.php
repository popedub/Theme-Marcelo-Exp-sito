<div class="btn-group-vertical button-group filter-button-group texto-header" data-filter-group="archivo" role="group">
  @foreach ($filter_parent as $cat)
  <a data-filter=".category-{{ $cat->slug }}" class="btn btn-link {{ $cat->slug }}">{{ $cat->name }}</a>
  @endforeach


</div>
<div class="btn-group-vertical button-group filter-button-group mt-3 texto-titular" data-filter-group="actividades"
  role="group">
  @foreach ($filter_cat as $cat)
  <a data-filter=".category-{{ $cat->slug }}" class="btn btn-link {{ $cat->slug }}">{{ $cat->name }}</a>
  @endforeach

</div>

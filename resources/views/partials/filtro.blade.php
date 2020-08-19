<div class="btn-group-vertical button-group filter-button-group texto-header" data-filter-group="archivo" role="group">
  <a data-filter=".category-proyectos-en-proceso" class="btn btn-link">Proyectos en proceso</a>
  <a data-filter=".category-archivo-general" class="btn btn-link">Archivo General</a>
</div>
<div class="btn-group-vertical button-group filter-button-group mt-5 texto-titular" data-filter-group="actividades" role="group">
  @foreach ($filter_cat as $cat)
    <a data-filter=".category-{{ $cat->slug }}" class="btn btn-link {{ $cat->slug }}">{{ $cat->name }}</a>
  @endforeach

</div>

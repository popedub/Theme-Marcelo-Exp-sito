<!doctype html>
<html {!! get_language_attributes() !!}>
@include('partials.head')

<body @php (body_class()) @endphp>
  @php do_action('get_header') @endphp
  <div class="preload" style="display: block">
    <div class="content_preload">
      @include('partials.frases-loader')
    </div>
  </div>
  @include('partials.header')
  <div class="wrap container-fluid" role="document">
    <div class="content">
      <main class="main">
        @yield('content')
      </main>
      @if (App\display_sidebar())
      <aside class="sidebar d-none d-lg-block">
        <div id="filtros" class="filtro">
          @include('partials.filtro')
        </div>
      </aside>
      @endif
    </div>
  </div>
  @php do_action('get_footer') @endphp
  @include('partials.footer')
  @php wp_footer() @endphp
</body>

</html>

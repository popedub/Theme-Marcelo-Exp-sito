<!doctype html>
<html {!! get_language_attributes() !!}>
  @include('partials.head')
  <body @php (body_class()) @endphp>
    @php do_action('get_header') @endphp
    @include('partials.header')
    <div class="wrap container-fluid" role="document">
      <div class="content">
        <main class="main order-2 order-lg-1">
          @yield('content')
        </main>
        @if (App\display_sidebar())
          <aside class="sidebar order-1 order-lg-2">
           <div class="filtro">
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

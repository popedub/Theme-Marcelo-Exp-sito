<header class="banner">
  @if (is_front_page())
  <div class="container-fluid">

    <div class="row">
      <div class="col-12 col-lg-6 header-right">
        <h2><span>MARCELO</span></h2>
      </div>
      <div class="col-12 col-lg-6">
        <h1><span>EXPÓSITO</span></h1>
        <nav class="nav-primary">
          @if (has_nav_menu('primary_navigation'))
          {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav']) !!}
          @endif
        </nav>
      </div>
    </div>

  </div>
  @else
  <div class="container-fluid d-flex justify-content-between align-items-center">
    <a class="brand" href="{{ home_url('/') }}">{{ get_bloginfo('name', 'display') }}</a>
    @include('partials.page-header')
    <a id="menu" class="btn-menu">@php echo __('Menu', 'thememexposito')@endphp</a>
  </div>
  @endif
</header>
<div class="overlay overlay-slidedown">
  <div class="left">
    <nav class="nav-primary">
      @if (has_nav_menu('primary_navigation'))
      {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav']) !!}
      @endif
    </nav>
  </div>
  <div class="right">
    <button type="button" id="closeMenu" class="overlay-close font-3">@php echo __('CERRAR',
    'thememexposito')@endphp</button>

    <div class="languages">
      ESP.<br>
      ENG.
    </div>
    <div class="search-menu">
      BUSCAR
    </div>
  </div>
</div>

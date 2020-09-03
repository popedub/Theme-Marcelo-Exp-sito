@php
$frases = get_field('frases_loader', 561); //290 en local

if($frases) {
  foreach ($frases as $frase) {
    $f[] = $frase['frase'];
  }
  $fraseRand = array_rand($f);
  echo $f[$fraseRand];
}

@endphp

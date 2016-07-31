'use strict';

let $pokeForm;

$(() => {
  $pokeForm = $('#pokeForm');
  $pokeForm.submit(getPokemon);
});

function getPokemon(e) {
  e.preventDefault();

  let id = $pokeForm.find('input').val();
  $pokeForm.find('input').val(null);

  $.get(`http://pokeapi.co/api/v2/pokemon/${id}`)
    .done(data => {
      let $card = $('#template').clone();

      $card.removeAttr('id');
      $card.find('.sprite').attr('src', data.sprites.front_default);
      $card.find('.name').text(data.name);
      $card.find('.id').text(data.id);
      $card.find('.weight').text(data.weight);

      $('#pokelist').append($card);
    })
    .fail(err => {
      console.log('err:', err);
    })
}

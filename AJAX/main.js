'use strict';

$(() => {
 //getPerson(1);
 //getpokemon(3);
 var a = $('#input').val();
 $('#btn').click(getpokemon(a))
  
 });

  

function getpokemon(id) {
 console.log("inside pokemon func");
 $.get(`http://pokeapi.co/api/v2/pokemon/${id}`)
  .done(function(data){
  console.log('data:',data);
  })
    //console.log(data);
   .fail(function(err){
    console.log('err:',err);
  
})
}




function getPerson(id){

 $.get(`http://swapi.co/api/people/${id}`)
  .done(function(data){
  console.log('data:',data);
  })
    //console.log(data);
   .fail(function(err){
    console.log('err:',err);
  
})
 }
// ==UserScript==
// @name        Tagandro
// @namespace   tagandro
// @description Script qui permet d'ajouter un bouton pour tag les utilisateurs de la Andro
// @include     https://realitygaming.fr/threads/*
// @include		https://realitygaming.fr/forums/*
// @version     1.0
// @match       https://realitygaming.fr
// @grant       none
// ==/UserScript==

$(document).ready(function(){
    $.getScript('https://rawgit.com/LoucasseRG/TagAndro/master/script.js');
});

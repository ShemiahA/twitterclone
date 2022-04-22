////////////////////////////
//JavaScript for Posts page
////////////////////////


$(function() {
    //Executed when js-option-icon js clicked
  $('.js-option-icon').click(function() {
      //$(this) : Self element, namely div.js-option-icon
      //next() : Next to div.js-option-icon. namely div.option
      //toggle() : Switch show and hide
       $(this).next().toggle();
     })
})
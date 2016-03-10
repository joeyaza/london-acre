$(function(){
  $('ul.links a').on('click', function(){
    var ref = $(this).attr('data-id');
    console.log("clicked", ref)
    $('body').scrollTo($('#'+ref), 1000)
  })
})
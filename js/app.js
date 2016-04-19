$(function(){
  $('a').on('click', function(){
    var ref = $(this).attr('data-id');
    console.log("clicked", ref)
    $('body').scrollTo($('#'+ref), 2000)
  })
})
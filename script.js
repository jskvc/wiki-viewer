$(document).ready(function() {
 
$('#query').keypress( (e) => {
  if(e.which == 13) {
    $('#searchbtn').click();
    return false;
  }
});
  
$('#searchbtn').click(function(){
    
    var query = $('#query').val();
    var api = 'https://en.wikipedia.org/w/api.php?'
    + 'action=query&list=search&format=json&srprop=snippet'
    + '&srsearch=' + query + '&callback=?';
      $.getJSON(api, function(data){
        console.log(data);
        $('#output').html('');
       for(var i =0; i<data.query.search.length; i++){
      $('#output').append("<p class='line'><a href='http://en.wikipedia.org/wiki/" + data.query.search[i].title + "' target='_blank'><p class='pageTitle'><h2>"+data.query.search[i].title+"</h2></a><p>"+data.query.search[i].snippet+"</p></p>");
     }
  });
});
})
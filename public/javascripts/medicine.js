$.post('/introduction',"",function(data){
  $("#HTML_content").html(data);
});
function HTML_content_change(index){ 
  $("li").siblings().removeClass("active");
    switch(index){
      case '_introduction':
        $.post('/introduction',"",function(data){
        $("#HTML_content").html(data);
      });
      break;
      case '_search':
        $.post('/search',"",function(data){
        $("#HTML_content").html(data);
      });
      break;
      case '_about':
        $.post('/about',"",function(data){
        $("#HTML_content").html(data);
      });
      break;
      case '_upload':
        $.post('/upload',"",function(data){
        $("#HTML_content").html(data);
      });
      break;
      defaule:
        alert(index);
        break;
      }
      $("#"+index).addClass("active");
}

$.post('/search_db',"",function(data){                                                                           
  $("#HTML_search").html(data);
});
function Search(){

}

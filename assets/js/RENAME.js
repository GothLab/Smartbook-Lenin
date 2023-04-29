$(".list_name .title").each(function(index){

$(this).text('TOM '+index);

});

$(".list_name").each(function(index){
var EQ = './books/'+index+'/'+index+'.html';
$(this).attr('book_href',''+EQ);

});
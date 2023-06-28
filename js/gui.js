$("#SetFen").on("click",function(){
    var fenStr = $("#fenIn").val();
    ParsenFen(fenStr);
    PrintBoard();
});
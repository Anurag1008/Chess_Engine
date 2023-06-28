$("SetFen").trigger(function(){
    var fenStr = $("#fenIn").val();
    ParsenFen(fenStr);
    PrintBoard();
})
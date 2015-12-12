$( document ).ready(function() {

  // Get started!

});

function Add(item,number){
  var x=parseInt(document.getElementById(item).innerHTML);
  var sum=x+number;
  if(sum>0&&sum<210){
    document.getElementById(item).innerHTML=x+number;
  }
}
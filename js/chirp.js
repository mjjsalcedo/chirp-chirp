function chirp(n){
  // FIX ME
   if(n === 0){
    return "";
  }

  var string = " chirp";
  return string + chirp(--n);
}

$(document).ready(function(){
  $("#result").html(chirp(3));
});
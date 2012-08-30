$("#afsoonOeuvres a").click(function() {
  $('.container').load('./_afsoonOeuvres.html');
  $("#afsoonOeuvres a").css('color','black');
  $("#afsoonBio a").css('color','green');
  $("#afsoonExpo a").css('color','green');
});
$("#afsoonBio a").click(function() {
  $('.container').load('./_afsoonBio.html');
  $("#afsoonOeuvres a").css('color','green');
  $("#afsoonBio a").css('color','black');
  $("#afsoonExpo a").css('color','green');
});
$("#afsoonExpo a").click(function() {
  $('.container').load('./iran.html');
  $("#afsoonOeuvres a").css('color','green');
  $("#afsoonBio a").css('color','green');
  $("#afsoonExpo a").css('color','black');
});


$("#icy_sotBio a").click(function() {
  $('.container').load('./_icy&sotBio.html');
  $("#icy_sotBio a").css('color','black');
  $("#icy_sotExpo a").css('color','green');
});
$("#icy_sotExpo a").click(function() {
  $('.container').load('./iran.html');
  $("#icy_sotBio a").css('color','green');
  $("#icy_sotExpo a").css('color','black');
});


$("#lavenChegeniBio a").click(function() {
  $('.container').load('./_lavenChegeniBio.html');
  $("#lavenChegeniBio a").css('color','black');
  $("#lavenChegeniExpo a").css('color','green');
});
$("#lavenChegeniExpo a").click(function() {
  $('.container').load('./iran.html');
  $("#lavenChegeniBio a").css('color','green');
  $("#lavenChegeniExpo a").css('color','black');
});


$("#jalalSepehrBio a").click(function() {
  $('.container').load('./_jalalSepehrBio.html');
  $("#jalalSepehrBio a").css('color','black');
  $("#jalalSepehrExpo a").css('color','green');
});
$("#jalalSepehrExpo a").click(function() {
  $('.container').load('./iran.html');
  $("#jalalSepehrBio a").css('color','green');
  $("#jalalSepehrExpo a").css('color','black');
});






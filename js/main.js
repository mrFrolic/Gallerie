$("#afsoonOeuvres a").click(function() {
  $('.container').load('./_afsoonOeuvres.html');
  $("#afsoonOeuvres a").css('font-family','futuraBold');
  $("#afsoonBio a").css('font-family','futuraBook');
  $("#afsoonExpo a").css('font-family','futuraBook');
});
$("#afsoonBio a").click(function() {
  $('.container').load('./_afsoonBio.html');
  $("#afsoonOeuvres a").css('font-family','futuraBook');
  $("#afsoonBio a").css('font-family','futuraBold');
  $("#afsoonExpo a").css('font-family','futuraBook');
});
$("#afsoonExpo a").click(function() {
  $('.container').load('./iran.html');
  $("#afsoonOeuvres a").css('font-family','futuraBook');
  $("#afsoonBio a").css('font-family','futuraBook');
  $("#afsoonExpo a").css('font-family','futuraBold');
});


$("#icy_sotBio a").click(function() {
  $('.container').load('./_icy&sotBio.html');
  $("#icy_sotBio a").css('font-family','futuraBold');
  $("#icy_sotExpo a").css('font-family','futuraBook');
});
$("#icy_sotExpo a").click(function() {
  $('.container').load('./iran.html');
  $("#icy_sotBio a").css('font-family','futuraBook');
  $("#icy_sotExpo a").css('font-family','futuraBold');
});


$("#lavenChegeniBio a").click(function() {
  $('.container').load('./_lavenChegeniBio.html');
  $("#lavenChegeniBio a").css('font-family','futuraBold');
  $("#lavenChegeniExpo a").css('font-family','futuraBook');
});
$("#lavenChegeniExpo a").click(function() {
  $('.container').load('./iran.html');
  $("#lavenChegeniBio a").css('font-family','futuraBook');
  $("#lavenChegeniExpo a").css('font-family','futuraBold');
});


$("#jalalSepehrBio a").click(function() {
  $('.container').load('./_jalalSepehrBio.html');
  $("#jalalSepehrBio a").css('font-family','futuraBold');
  $("#jalalSepehrExpo a").css('font-family','futuraBook');
});
$("#jalalSepehrExpo a").click(function() {
  $('.container').load('./iran.html');
  $("#jalalSepehrBio a").css('font-family','futuraBook');
  $("#jalalSepehrExpo a").css('font-family','futuraBold');
});



$(function() {
    $(".accueil .container article a img, .menu article a img")
        .mouseover(function() { 
            var src = $(this).attr("src").match(/[^\..]+/) + "H.svg";
            $(this).attr("src", src);
        })
        .mouseout(function() {
            var src = $(this).attr("src").replace("H.svg", ".svg");
            $(this).attr("src", src);
        });
});


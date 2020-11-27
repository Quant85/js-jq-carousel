//Descrizione:
//Creare uno slider di immagini
//Potete usare le immagini che desiderate.
//Per facilitarvi la vita usate immagini delle stesse dimensioni :)
//Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider
//In oltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera
//Utiliziamo una classe first e last  per capire quali sono la prima e ultima immagine dello slider
//Utilizziamo una classe active per aiutarci a capire quale è l’immagine attuale da visualizzare nello slider

$(function () {

  $(".next").on("click", function () {
    //console.log("cliccato");
    var immagineCorrente = $(".images img.active");
    var prossimaImmagine = immagineCorrente.next();
    var firstImmagine = $(".images img.first");
    var firstCircle = $("div.nav > i.first");
    var circleCorrente = $("div.nav > i.active");
    var prossimoCircle = circleCorrente.next();
    //console.log(immagineCorrente);
    //console.log(prossimaImmagine);
    //console.log(firstImmagine);

    if (immagineCorrente.hasClass("active") && !immagineCorrente.hasClass("last")) {
      immagineCorrente.removeClass("active").css("display", "none");
      circleCorrente.removeClass("active");
      prossimaImmagine.addClass("active").css("display", "inline-block");
      prossimoCircle.addClass("active");
      
    } else {
      immagineCorrente.removeClass("active").css("display", "none");
      firstImmagine.addClass("active").css("display", "inline-block");
      firstCircle.addClass("active");
      circleCorrente.removeClass("active");
      
    }

    });

    $(".prev").on("click", function () {
    var immagineCorrente = $(".images img.active");
    var immaginePrecedente = immagineCorrente.prev();
    var lastImmagine = $(".images img.last");
    var lastCircle = $("div.nav > i.last");
    var circleCorrente = $("div.nav > i.active");
    var circlePrecedente = circleCorrente.prev();
    //console.log(immagineCorrente);
    //console.log(immaginePrecedente);
    //console.log(lastImmagine);

    if (immagineCorrente.hasClass("active") && !immagineCorrente.hasClass("first")) {
      immagineCorrente.removeClass("active").css("display", "none");
      circleCorrente.removeClass("active");
      immaginePrecedente.addClass("active").css("display", "inline-block");
      circlePrecedente.addClass("active");
    }else {
      immagineCorrente.removeClass("active").css("display", "none");
      lastImmagine.addClass("active").css("display", "inline-block");
      lastCircle.addClass("active");
      circleCorrente.removeClass("active");
    }

    });

  });
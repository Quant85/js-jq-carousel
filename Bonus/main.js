//Descrizione:
//Creare uno slider di immagini
//Potete usare le immagini che desiderate.
//Per facilitarvi la vita usate immagini delle stesse dimensioni :)
//Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider
//In oltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera
//Utiliziamo una classe first e last  per capire quali sono la prima e ultima immagine dello slider
//Utilizziamo una classe active per aiutarci a capire quale è l’immagine attuale da visualizzare nello slider

//Bonus -Clicchiamo sui pallini e mostriamo l’immagine corrispondente

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

    /*.on("keydown....mi permette di "catturare" l'evento associato alla digitazione su tastiera - in tutto -body -
    *Essendo i keyCode associato alla freccia dx è 39 sx è 37, 
    * mediante l'uso del metodo .trigger(), associandolo alla selezione desiderata,
    *  (in questo caso .next e .prev ai quali abbiamo precedentemente assiociato gli "scorrimenti" della slideShow)
    *  se viene catturato 39 verra applicato click su .next e quindi la funzione associata,
    *  se viene catturato 37 verra applicato click sulla selezione .prev */

    $( "body" ).on( "keydown", function(e) {
				var code = e.keyCode;
				if( code == 39 ) {
					$(".next").trigger( "click" );
				}
				if( code == 37 ) {
					$(".prev").trigger( "click" );
				}
				
			});

  });
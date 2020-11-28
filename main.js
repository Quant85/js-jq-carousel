//Descrizione:
//Creare uno slider di immagini
//Potete usare le immagini che desiderate.
//Per facilitarvi la vita usate immagini delle stesse dimensioni :)
//Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider
//In oltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera
//Utiliziamo una classe first e last  per capire quali sono la prima e ultima immagine dello slider
//Utilizziamo una classe active per aiutarci a capire quale è l’immagine attuale da visualizzare nello slider

$(function () {

    /* function slideShow (
      currentSelector1,
      currentSelector2,
      nextOrPrevSelector1,
      nextOrPrevSelector2,
      pivotClass,
      stopClass,
      firstOrLastSelector1,
      firstOrLastSelector2) { 
        if (currentSelector1.hasClass(pivotClass) && !currentSelector1.hasClass(stopClass)) {
        currentSelector1.removeClass(pivotClass).css("display", "none");
        currentSelector2.removeClass(pivotClass);
        nextOrPrevSelector1.addClass(pivotClass).css("display", "inline-block");
        nextOrPrevSelector2.addClass(pivotClass);
          
        } else {
          currentSelector1.removeClass(pivotClass).css("display", "none");
          firstOrLastSelector1.addClass(pivotClass).css("display", "inline-block");
          firstOrLastSelector2.addClass(pivotClass);
          currentSelector2.removeClass(pivotClass);
          
        }
    } */


  $(".next").on("click", function () {
    var currentImg, nextImg, firstImg, currentCircle, firstCircle, nextCircle;
    //console.log("cliccato");
    currentImg = $(".images img.active");
    nextImg = currentImg.next();
    firstImg = $(".images img.first");
    firstCircle = $("div.nav > i.first");
    currentCircle = $("div.nav > i.active");
    nextCircle = currentCircle.next();
    //classActive = "active";
    //classLast = "last";
    //console.log(currentImg);
    //console.log(nextImg);
    //console.log(firstImmagine);
    
    //slideShow(currentImg,currentCircle,nextImg,nextCircle,classActive,classLast,firstImg,firstCircle);

    if (currentImg.hasClass("active") && !currentImg.hasClass("last")) {
      currentImg.removeClass("active");
      currentCircle.removeClass("active");
      nextImg.addClass("active");
      nextCircle.addClass("active");
    } else {
      currentImg.removeClass("active");
      firstImg.addClass("active");
      firstCircle.addClass("active");
      currentCircle.removeClass("active");
    } 

    });

    
    $(".prev").on("click", function () {
    var currentImg, currentCircle, prevImg, prevCircle, classActive, classFirst, lastImg, lastCircle;

    currentImg = $(".images img.active");
    currentCircle = $("div.nav > i.active");
    prevImg = currentImg.prev();
    prevCircle = currentCircle.prev();
    //classActive = "active";
    //classFirst = "first";
    lastImg = $(".images img.last");
    lastCircle = $("div.nav > i.last");

    //slideShow(currentImg,currentCircle,prevImg,prevCircle,classActive,classFirst,lastImg,lastCircle);

    if (currentImg.hasClass("active") && !currentImg.hasClass("first")) {
      currentImg.removeClass("active");
      currentCircle.removeClass("active");
      prevImg.addClass("active");
      prevCircle.addClass("active");
    }else {
      currentImg.removeClass("active");
      lastImg.addClass("active");
      lastCircle.addClass("active");
      currentCircle.removeClass("active");
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
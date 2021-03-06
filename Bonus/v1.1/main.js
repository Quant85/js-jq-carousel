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

    function slideShow (
      currentSelector1,
      currentSelector2,
      nextOrPrevSelector1,
      nextOrPrevSelector2,
      pivotClass,
      stopClass,
      firstOrLastSelector1,
      firstOrLastSelector2) { 
        if (currentSelector1.hasClass(pivotClass) && !currentSelector1.hasClass(stopClass)) {
        currentSelector1.removeClass(pivotClass);
        currentSelector2.removeClass(pivotClass);
        nextOrPrevSelector1.addClass(pivotClass);
        nextOrPrevSelector2.addClass(pivotClass);
          
        } else {
          currentSelector1.removeClass(pivotClass);
          firstOrLastSelector1.addClass(pivotClass);
          firstOrLastSelector2.addClass(pivotClass);
          currentSelector2.removeClass(pivotClass);
          
        }
    }

    function associatedDot(indexNumber, currentSelector1,
      currentSelector2, pivotClass, dotImgAssociated,dotSelector) {
      currentSelector1.removeClass(pivotClass);
      dotImgAssociated.eq(indexNumber).addClass(pivotClass);
      currentSelector2.removeClass(pivotClass);
      dotSelector.eq(indexNumber).addClass(pivotClass);
    }

    var body, next, prev, dots;
    body = $( "body" );
    next = $(".next");
    prev = $(".prev");
    dots = $(".nav > i.fas");

    next.on("click", function() {
    var currentImg, currentCircle, nextImg, nextCircle, firstImg, firstCircle, classActive, classLast;

    currentImg = $(".images img.active");
    currentCircle = $("div.nav > i.active");
    nextImg = currentImg.next();
    nextCircle = currentCircle.next();
    classActive = "active";
    classLast = "last";
    firstImg = $(".images img.first");
    firstCircle = $("div.nav > i.first");
    
    slideShow(currentImg,currentCircle,nextImg,nextCircle,classActive,classLast,firstImg,firstCircle);
    });

    
    prev.on("click", function () {
    var currentImg, currentCircle, prevImg, prevCircle, classActive, classFirst, lastImg, lastCircle;

    currentImg = $(".images img.active");
    currentCircle = $("div.nav > i.active");
    prevImg = currentImg.prev();
    prevCircle = currentCircle.prev();
    classActive = "active";
    classFirst = "first";
    lastImg = $(".images img.last");
    lastCircle = $("div.nav > i.last");

    slideShow(currentImg,currentCircle,prevImg,prevCircle,classActive,classFirst,lastImg,lastCircle);
    });

    dots.eq(0).on("click", function () {
    var currentImg = $(".images img.active"),
    currentCircle = $("div.nav > i.active"),
    classActive = "active",
    linkedImg = $(".images img");

    associatedDot(0, currentImg, currentCircle, classActive, linkedImg,dots);
    });
    
    dots.eq(1).on("click", function () {
    var currentImg = $(".images img.active"),
    currentCircle = $("div.nav > i.active"),
    classActive = "active",
    linkedImg = $(".images img");

    associatedDot(1, currentImg, currentCircle, classActive, linkedImg,dots);
    });

    dots.eq(2).on("click", function () {
    var currentImg = $(".images img.active"),
    currentCircle = $("div.nav > i.active"),
    classActive = "active",
    linkedImg = $(".images img");

    associatedDot(2, currentImg, currentCircle, classActive, linkedImg,dots);
    });

    dots.eq(3).on("click", function () {
    var currentImg = $(".images img.active"),
    currentCircle = $("div.nav > i.active"),
    classActive = "active",
    linkedImg = $(".images img");

    associatedDot(3, currentImg, currentCircle, classActive, linkedImg,dots);
    });

    /*.on("keydown....mi permette di "catturare" l'evento associato alla digitazione su tastiera - in tutto -body -
    *Essendo i keyCode associato alla freccia dx è 39 sx è 37, 
    * mediante l'uso del metodo .trigger(), associandolo alla selezione desiderata,
    *  (in questo caso .next e .prev ai quali abbiamo precedentemente assiociato gli "scorrimenti" della slideShow)
    *  se viene catturato 39 verra applicato click su .next e quindi la funzione associata,
    *  se viene catturato 37 verra applicato click sulla selezione .prev */

    body.on( "keydown", function(e) {
				var code = e.keyCode;
				if( code == 39 ) {
					next.trigger( "click" );
				}
				if( code == 37 ) {
					prev.trigger( "click" );
				}
				
			});

  });
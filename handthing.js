//Plain Javascript
document.body.style.cursor = "url(//eriknathan.github.io/hand.cur), auto";
document.body.onmousedown = function() {document.body.style.cursor = "url(//eriknathan.github.io/dragginghand.cur), auto"};
document.body.onmouseup = function() {document.body.style.cursor = "url(//eriknathan.github.io/hand.cur), auto"};

//Bookmarklet Version
javascript: document.body.style.cursor = "url(//eriknathan.github.io/hand.cur), auto"; document.body.onmousedown = function() {document.body.style.cursor = "url(//eriknathan.github.io/dragginghand.cur), auto"}; document.body.onmouseup = function() {document.body.style.cursor = "url(//eriknathan.github.io/hand.cur), auto"};

//Plain Javascript
document.body.style.cursor = "url(//eriknathan.github.io/hand.cur), auto";
document.body.onmousedown = function() {document.body.style.cursor = "url(//eriknathan.github.io/dragginghand.cur), auto"};
document.body.onmouseup = function() {document.body.style.cursor = "url(//eriknathan.github.io/hand.cur), auto"};

//Bookmarklet Version
javascript:(function()%7Bdocument.body.style.cursor%20%3D%20%22url(%2F%2Feriknathan.github.io%2Fhand.cur)%2C%20auto%22%3Bdocument.body.onmousedown%20%3D%20function()%20%7Bdocument.body.style.cursor%20%3D%20%22url(%2F%2Feriknathan.github.io%2Fdragginghand.cur)%2C%20auto%22%7D%3Bdocument.body.onmouseup%20%3D%20function()%20%7Bdocument.body.style.cursor%20%3D%20%22url(%2F%2Feriknathan.github.io%2Fhand.cur)%2C%20auto%22%7D%7D)()

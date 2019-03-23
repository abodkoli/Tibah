 var db = [{
     "id": 1,
     "auther": "ahmed morad",
     "book": "a101",
     "publisher": "1",
     "location": "A1"
 }, {
     "id": "2",
     "auther": "mohamed essa",
     "book": "b201",
     "publisher": "2",
     "location": "A2"
 }, {
     "id": "2",
     "auther": "elhabib ali elgafri",
     "book": "c301",
     "publisher": "3",
     "location": "A3"
 }, ]
 
 var url_string = parent.document.URL;
 var url = new URL(url_string);
 var auther = url.searchParams.get("auther");
 var book = url.searchParams.get("book");
 var publisher = url.searchParams.get("publisher");





 var searchItems = {
     "book": book,
     "publisher": publisher,
     "auther": auther
 }

  console.log(searchItems);
//       var canvas = document.getElementById('myCanvas');
//   var context = canvas.getContext('2d');
//  canvas_arrow(context, 50, 200, 50, 40)
//  canvas_arrow(context, 200, 200, 55, 200)
//  canvas_arrow(context, 200, 60, 200, 195 )
 
  
// function canvas_arrow(context, fromx, fromy, tox, toy) {
//     var headlen = 10; // length of head in pixels
//     var angle = Math.atan2(toy - fromy, tox - fromx);
//     context.moveTo(fromx, fromy);
//     context.lineTo(tox, toy);
//     context.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));
//     context.moveTo(tox, toy);
//     context.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));
//     context.strokeStyle = 'red';
//     context.lineWidth = 2;
//     context.lineCap = 'round';
//     context.stroke();
//     context.beginPath();
// }
	// set up initial variables
var canvas = document.getElementById('myCanvas');

const ctx = canvas.getContext('2d');
// function to interpolate
const f = x => x * x;
// precision of calculated values
const precision = 1000;
// range for interpolation
const r = [-1, 1];
const s = canvas.height / 2;

function render(n) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    // step-size (range split into `n` segments)
    const N = (r[1] - r[0]) / n;
    // n=0 is a point (not a line)
    if (n == 0) {
        ctx.arc(
            canvas.width / 3,
            canvas.height / 3 - s / 3,
            5,
            0,
            2 * Math.PI
        );
        ctx.fill();
        ctx.stroke();
        return;
    }
    // start `x` at lower range, increment by N until x >= higher range
    for (var x = r[0]; Math.floor(x * precision) / precision <= r[1]; x += N) {
        // `s` is just compensating for width/height of canvas 
        const px = canvas.width / 4 + x * s;
        // y is the out of `f` and again, like x, scaled for aspect ratio of screen
        const py = canvas.height - s / 6 - f(x) * s;
        ctx.lineTo(px, py);
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(px, py, 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(px, py);
    }
};

;

$(render(3)).fadeIn("slow");
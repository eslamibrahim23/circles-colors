var can = document.getElementById("can");
var canCt = can.getContext('2d');
console.dir(canCt);

var btn = document.getElementById("click");

var c= document.getElementById("color");

btn.addEventListener('click', function () {
    canCt.clearRect(0,0,600,600);
    for(var i =0 ;i<100;i++){
        setTimeout(function () {
            canCt.beginPath();
            canCt.strokeStyle = c.value;
            var x = Math.floor(Math.random() * can.width);
            var y = Math.floor(Math.random() * can.height);
            canCt.arc(x, y, 30, 0, Math.PI * 2);
            canCt.lineWidth = 1;
            canCt.stroke();
        }, 50);
    }
})








// canCt.strokeStyle =  rgb(255, 0, 0);

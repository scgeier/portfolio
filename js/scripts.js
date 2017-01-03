$( document ).ready(function() {
  console.log("DOM ready!");
  
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });


var waypoint = new Waypoint({
  element: document.getElementById('page2'),
  handler: function() {
    var text = document.getElementById("headline").innerHTML;
var s = text.replace(/l/gi, "S");
var c = s.replace(/o/gi, "c");
var o = c.replace(/r/gi, "o");
var t = o.replace(/e/gi, "t");
var t2 = t.replace(/m/gi, "t");

  
  setTimeout(function(){
    document.getElementById("headline").innerHTML = s;
}, 1000);
  
    setTimeout(function(){
    document.getElementById("headline").innerHTML = c;
}, 1100);
  
     setTimeout(function(){
    document.getElementById("headline").innerHTML = o;
}, 1200);
  
       setTimeout(function(){
    document.getElementById("headline").innerHTML = t;
}, 1300);
  
         setTimeout(function(){
    document.getElementById("headline").innerHTML = t2;
}, 1400);

 this.destroy();
 
  }
});


var waypoint2 = new Waypoint({
  element: document.getElementById('page3'),
  handler: function() {
    var text = document.getElementById("headline2").innerHTML;
var G = text.replace(/i/gi, "G");
var e = G.replace(/p/gi, "e");
var i = e.replace(/s/gi, "i");
var e2 = i.replace(/u/gi, "e");
var r = e2.replace(/m/gi, "r");

  
  setTimeout(function(){
    document.getElementById("headline2").innerHTML = G;
}, 1000);
  
    setTimeout(function(){
    document.getElementById("headline2").innerHTML = e;
}, 1100);
  
     setTimeout(function(){
    document.getElementById("headline2").innerHTML = i;
}, 1200);
  
       setTimeout(function(){
    document.getElementById("headline2").innerHTML = e2;
}, 1300);
  
         setTimeout(function(){
    document.getElementById("headline2").innerHTML = r;
}, 1400);
         
    this.destroy();
  }
});


var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90
setInterval(drawClock, 1000);

function drawClock() {
  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
  drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
  var grad;
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2*Math.PI);
  ctx.fillStyle = '#ffff99';
  ctx.fill();
  ctx.lineWidth = radius*0.01;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, radius*0.01, 0, 2*Math.PI);
  ctx.fillStyle = 'black';
  ctx.fill();
}

function drawNumbers(ctx, radius) {
  var ang;
  var num;
  ctx.font = radius*0.15 + "px bookman";
  ctx.textBaseline="middle";
  ctx.textAlign="center";
  for(num = 1; num < 13; num++){
    ang = num * Math.PI / 6;
    ctx.rotate(ang);
    ctx.translate(0, -radius*0.85);
    ctx.rotate(-ang);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius*0.85);
    ctx.rotate(-ang);
  }
}

function drawTime(ctx, radius){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    //hour
    hour=hour%12;
    hour=(hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
    drawHand(ctx, hour, radius*0.5, radius*0.04);
    //minute
    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawHand(ctx, minute, radius*0.8, radius*0.03);
    // second
    second=(second*Math.PI/30);
    drawHand(ctx, second, radius*0.9, radius*0.01);
}

function drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
};


//Change the text in the fields based on the user's chosen day and time//
function chosenSched() {
  
var chosenDay;
var chosenTime;
    
document.getElementById("days-dropdown").addEventListener('change', function () {
  window.removeEventListener("load", currentTime);
    var chosenDay = this.value;
    document.getElementById("current-date").innerHTML = chosenDay;
      document.getElementById("hours-dropdown").addEventListener('change', function () {
       var chosenTime = this.value;
      document.getElementById("chosen-time").innerHTML = "@ " + chosenTime;
      console.log(chosenDay);
      console.log(chosenTime);
      
//Sleeping//
      if (chosenTime >=22 || chosenTime < 1 || (chosenTime >=4 && chosenTime < 6)) {
         document.getElementById("awake").innerHTML = "Asleep";
         document.getElementById("clothing").innerHTML = "Underwear and socks. Maybe a t-shirt if it's cold.";
         document.getElementById("food").innerHTML = "Nothing. I'm asleep; that would be weird.";
         document.getElementById("activity").innerHTML = "Starring in a dream alongside some random person from high school or college.";
         document.getElementById("duties").innerHTML = "Not waking my wife up.";
         document.getElementById("skills").innerHTML = "Breathing.";
      }else if (chosenTime >= 1 && chosenTime < 4) {
//Insomnia//
         document.getElementById("awake").innerHTML = "Awake";
         document.getElementById("clothing").innerHTML = "Underwear and socks. Maybe a t-shirt if it's cold.";
         document.getElementById("food").innerHTML = "A banana and a glass of orange juice";
         document.getElementById("activity").innerHTML = "Listening to a podcast (probably 'In Our Time' or 'The History of English') on my headphones while my wife sleeps soundly in the bed next to me (damn her).";
         document.getElementById("duties").innerHTML = "Jotting down ideas for interactive stories. Meditating. Wondering why a maximum-strength sleeping pill has the efficacy of a Mento.";
        document.getElementById("skills").innerHTML = "Insomnia is not a skill. It's the bane of my existence.";
      }
      
    });
  });
};

chosenSched();


});


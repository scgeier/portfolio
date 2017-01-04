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
         document.getElementById("activity").innerHTML = "Listening to a podcast -- probably 'In Our Time' or 'The History of English' -- on my headphones while my wife sleeps soundly in the bed next to me (damn her).";
         document.getElementById("duties").innerHTML = "Jotting down ideas for interactive stories. Meditating. Wondering why a maximum-strength sleeping pill has the efficacy of a Mento.";
        document.getElementById("skills").innerHTML = "To paraphrase Bertrand Russell, men who sleep badly are always proud of the fact. There are no skills to be gained from a lifetime of insomnia, aside, perhaps, from the ability to know what one can and cannot do on three hours of sleep, and the license to use that Russell quote at a cocktail party.";
      }else if ((chosenDay != "Saturday" && chosenDay != "Sunday") && (chosenTime >= 6 && chosenTime < 8)){
        
//Early weekday mornings//
         document.getElementById("awake").innerHTML = "Awake";
         document.getElementById("clothing").innerHTML = "Pants, button-down shirt, cardigan and loafers.";
         document.getElementById("food").innerHTML = "First and second cups of coffee.";
         document.getElementById("activity").innerHTML = "Investigative reporter for Smith & Carson, Inc.";
         document.getElementById("duties").innerHTML = "It's complicated, so here's the plain English version: Each day, a team of private investigators sends me records they've gathered during background investigations on the plaintiffs in multimillion-dollar corporate product liability lawsuits. I get everything from police reports to civil suits to Facebook profiles. I analyze the documents and write the life story of John Doe, Plaintiff. Defense attorneys use my reports during the discovery phase of the lawsuits.";
        document.getElementById("skills").innerHTML = "Civil, criminal, bankruptcy and workers' compensation law. Social media analysis. Investigative and legal databases (Accurint, TLO, WestLaw). The ability to turn hundreds of pages of complex court documents into a clear, concise narrative in a matter of hours. The patience -- between the hours of 6:00 and 8:00 am -- to do this in my home office while three kids are raising holy hell in the background.";
      }else if ((chosenDay != "Saturday" && chosenDay != "Sunday") && (chosenTime >= 8 && chosenTime < 12)){
        
//Weekday mornings for Smith Carson//
         document.getElementById("awake").innerHTML = "Awake";
         document.getElementById("clothing").innerHTML = "Pants, button-down shirt, cardigan and loafers.";
         document.getElementById("food").innerHTML = "A seven-color smoothie (e.g., frozen blueberries, blackberries, strawberries, banana, orange juice, milk, yogurt, kale and mixed nuts), followed by a Diet Mountain Dew.";
         document.getElementById("activity").innerHTML = "Investigative reporter for Smith & Carson, Inc.";
         document.getElementById("duties").innerHTML = "It's complicated, so here's the plain English version: Each day, a team of private investigators sends me records they've gathered during background investigations on the plaintiffs in multimillion-dollar corporate product liability lawsuits. I get everything from police reports to civil suits to Facebook profiles. I analyze the documents and write the life story of John Doe, Plaintiff. Defense attorneys use my reports during the discovery phase of the lawsuits.";
        document.getElementById("skills").innerHTML = "Civil, criminal, bankruptcy and workers' compensation law. Social media analysis. Investigative and legal databases (e.g., Accurint, TLO, PACER, LexisNexis, WestLaw). The ability to turn hundreds of pages of complex court documents into a clear, concise narrative in a matter of hours.";
      }
      else if (chosenDay != "Saturday" && chosenDay != "Sunday" && chosenTime == 12){
        
//Weekday lunch//
         document.getElementById("awake").innerHTML = "Awake";
         document.getElementById("clothing").innerHTML = "Pants, button-down shirt, cardigan and loafers.";
         document.getElementById("food").innerHTML = "Ham, turkey or salami sandwich on gluten-free bread (I've had Celiac disease since 2005. Thank god gluten-free became trendy; Whole Foods used to rob me blind).";
         document.getElementById("activity").innerHTML = "Freelance interactive journalist";
         document.getElementById("duties").innerHTML = "Reporting on science, arts and culture through interactive multimedia.";
         document.getElementById("skills").innerHTML = "HTML5, CSS3 & JS (clean and commented), JS frameworks and libraries (especially D3, JQuery, AngularJS), Node.js, NPM, Express, MongoDB, Adobe CC (particulary PS, Illustrator, Premiere Pro and Audition), Git, Google Analytics";
      }
      else if ((chosenDay != "Saturday" && chosenDay != "Sunday") && chosenTime > 12 && chosenTime < 17){
        
//Weekday afternooons freelancing//
         document.getElementById("awake").innerHTML = "Awake";
         document.getElementById("clothing").innerHTML = "Pants, button-down shirt, cardigan and loafers.";
         document.getElementById("food").innerHTML = "Nothing right now. I'm not much of a snacker.";
         document.getElementById("activity").innerHTML = "Freelance interactive journalist";
         document.getElementById("duties").innerHTML = "Reporting on science, arts and culture through interactive multimedia.";
         document.getElementById("skills").innerHTML = "HTML5, CSS3 & JS (clean and commented), JS frameworks and libraries (especially D3, JQuery, AngularJS), Node.js, NPM, Express, MongoDB, Adobe CC (particulary PS, Illustrator, Premiere Pro and Audition), Git, Google Analytics";
      }
      else if ((chosenDay != "Saturday" && chosenDay != "Sunday") && chosenTime == 17){
        
//Weekday afternooons jogging//
         document.getElementById("awake").innerHTML = "Awake";
         document.getElementById("clothing").innerHTML = "Running shorts, running shoes, t-shirt";
         document.getElementById("food").innerHTML = "Nada";
         document.getElementById("activity").innerHTML = "Exercise";
         document.getElementById("duties").innerHTML = "Running 20 to 30 minutes on a route that includes at least one steep hill";
         document.getElementById("skills").innerHTML = "See above";
      }
      else if ((chosenDay == "Sunday" || chosenDay == "Monday" || chosenDay == "Tuesday" || chosenDay == "Wednesday" || chosenDay == "Thursday") && chosenTime >= 18 && chosenTime < 20){
        
//Weekday evenings with the kids//
         document.getElementById("awake").innerHTML = "Awake";
         document.getElementById("clothing").innerHTML = "Sweatpants, t-shirt and slippers";
         document.getElementById("food").innerHTML = "Meat and two veg. Probably chicken because that's what the kids will eat.";
         document.getElementById("activity").innerHTML = "Parent";
         document.getElementById("duties").innerHTML = "Doing the dishes, walking the dog, helping the kids with their homework, sweeping and mopping the kitchen floor because it's probably covered in sugary milk, picking up about 10 pairs of shoes and 20 pairs of socks and a few mysteriously wet pairs of pants, getting the kids in the shower, getting the youngest in his pajamas, cajoling all three into brushing their teeth, and -- if I'm lucky -- having enough time to play with them and read them a book.";
        document.getElementById("skills").innerHTML = "Patience and a sense of humor.";
      }
      else if (chosenDay != "Friday" && chosenDay != "Saturday" && chosenTime >= 20 && chosenTime < 22){
        
//Weekday evening relaxation/
         document.getElementById("awake").innerHTML = "Awake";
         document.getElementById("clothing").innerHTML = "Sweatpants, t-shirt and slippers";
         document.getElementById("food").innerHTML = "Clausthaler";
         document.getElementById("activity").innerHTML = "Media consumer";
         document.getElementById("duties").innerHTML = "None, if I'm lucky";
        document.getElementById("skills").innerHTML = "Reading a magazine on my iPad, with a basketball game or home improvement show on in the background";
      }
      else if ((chosenDay == "Saturday" || chosenDay == "Sunday") && chosenTime >= 6 && chosenTime < 12){
        
//Weekend mornings with the kids//
         document.getElementById("awake").innerHTML = "Awake";
         document.getElementById("clothing").innerHTML = "Sweatpants, t-shirt and slippers";
         document.getElementById("food").innerHTML = "Eggs, sausage, orange juice and coffee";
         document.getElementById("activity").innerHTML = "Parent";
         document.getElementById("duties").innerHTML = "Planning activities for the kids that are fun, affordable and preferrably outside.";
        document.getElementById("skills").innerHTML = "The ability to lure children away from video games for at least 30 minutes.";
      }
      else if ((chosenDay == "Saturday" || chosenDay == "Sunday") && chosenTime == 12){
        
//Weekend lunch with the kids//
         document.getElementById("awake").innerHTML = "Awake";
         document.getElementById("clothing").innerHTML = "Jeans, t-shirt and sneakers";
         document.getElementById("food").innerHTML = "Wendy's, Arby's, Taco Bell or Chick-fil-A (i.e. the kids' weekend treat)";
         document.getElementById("activity").innerHTML = "Parent";
         document.getElementById("duties").innerHTML = "Explaining why the kids can't have soda or ice cream. The burgers and fries alone cost $25, dammit.";
        document.getElementById("skills").innerHTML = "The ability to shirk the derisive stares of self-righteous hipster parents who claim they never feed their kids fast food.";
      }
       else if ((chosenDay == "Saturday" || chosenDay == "Sunday") && chosenTime >= 13 && chosenTime < 18){
        
//Weekend afternooons//
         document.getElementById("awake").innerHTML = "Awake";
         document.getElementById("clothing").innerHTML = "Jeans, t-shirt and sneakers";
         document.getElementById("food").innerHTML = "Chips and salsa";
         document.getElementById("activity").innerHTML = "Parent";
         document.getElementById("duties").innerHTML = "Playing with the kids";
        document.getElementById("skills").innerHTML = "Budgeting my time so that each child gets to enjoy his or or her preferred activity (e.g., an art project with my daughter, basketball in the driveway with my middle son, and wrestling on the carpet with my youngest).";
      } else if ((chosenDay == "Friday" || chosenDay == "Saturday") && chosenTime == 18){
        
//Weekend dinner//
         document.getElementById("awake").innerHTML = "Awake";
         document.getElementById("clothing").innerHTML = "Jeans, t-shirt and sneakers";
         document.getElementById("food").innerHTML = "Something grilled or pan-seared. Or something ethnic that my wife and I want and don't care if the kids eat.";
         document.getElementById("activity").innerHTML = "Amateur chef";
         document.getElementById("duties").innerHTML = "Cooking";
        document.getElementById("skills").innerHTML = "I don't do casseroles and I can't bake for shit, but give me a piece of meat, fresh vegetables and a heat source, and I'll make a pretty damn good meal.";
      }
      else if ((chosenDay == "Friday" || chosenDay == "Saturday") && chosenTime >= 19 && chosenTime < 22){
        
//Weekend nights//
         document.getElementById("awake").innerHTML = "Awake";
         document.getElementById("clothing").innerHTML = "Sweatpants, t-shirt and slippers";
         document.getElementById("food").innerHTML = "Decent beer";
         document.getElementById("activity").innerHTML = "Parent-at-ease";
         document.getElementById("duties").innerHTML = "None. Blessedly, none.";
        document.getElementById("skills").innerHTML = "Finding a movie that my wife and I both want to watch. This is surprisingly difficult, once you've watched all of the good documentaries in Netflix and you don't want the popcorn movies in the RedBox down the street.";
      }
      
    });
  });
};

chosenSched();


});


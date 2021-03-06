$( document ).ready(function() {
  console.log("DOM ready!");

//Create smooth scrolling//
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

//Fade out the navbar brand when user scrolls down on mobile//
var waypoint = new Waypoint({
  element: document.getElementById('clock-area'),
  handler: function() {
           if (window.innerWidth <=767) {
              document.getElementById("fading-brand").style.opacity = 0;
              document.getElementById("mobile-menu").style.paddingTop = "5%";
           }else if (window.innerWidth <=1221) {
              document.getElementById("fading-brand").style.opacity = 0;
              document.getElementById("mobile-menu").style.paddingTop = "15%";
           }
  }
})

//Fade it back in when user scrolls back to top//
var waypoint2 = new Waypoint({
  element: document.getElementById('top'),
  handler: function() {
           if (window.innerWidth <=1221) {
              document.getElementById("fading-brand").style.opacity = 1;
              document.getElementById("fading-brand").style.transition = ".3s linear";
              document.getElementById("mobile-menu").style.paddingTop = "0%";
              document.getElementById("mobile-menu").style.transition = ".2s linear";
           }else if (window.innerWidth >= 768 && window.innerWidth <=1221) { //Adjust the padding on the tablet mobile menu//
              document.getElementById("mobile-menu").style.paddingTop = "15%";
              document.getElementById("mobile-menu").style.transition = ".2s linear";
           }
  }
})

//Make the navbar transparent when user gets to page 2 on mobile//
/*var waypoint3 = new Waypoint({
  element: document.getElementById('clock-area'),
  handler: function() {
           if (window.innerWidth <= 1221) {
             document.getElementById("yellow-nav").style.background = "none";
           }
  }
})*/

//Fade out the navbar brand on desktop version of page 3//
var waypoint4 = new Waypoint({
  element: document.getElementById('page3'),
  handler: function() {
           if (window.innerWidth > 767) {
              $("#fading-brand").fadeToggle(400);
           }
  }
})

//Build a working analog clock with JS//
function initLocalClocks() {
  // Get the local time using JS
  var date = new Date;
  console.log(date);
  var seconds = date.getSeconds();
  var minutes = date.getMinutes();
  var hours = date.getHours();

// Create an object with each hand and it's angle in degrees
  var hands = [
    {
      hand: 'hours',
      angle: (hours * 30) + (minutes / 2)
    },
    {
      hand: 'minutes',
      angle: (minutes * 6)
    },
    {
      hand: 'seconds',
      angle: (seconds * 6)
    }
  ];
  // Loop through each of these hands to set their angle
  for (var j = 0; j < hands.length; j++) {
    var elements = document.querySelectorAll('.' + hands[j].hand);
    for (var k = 0; k < elements.length; k++) {
        elements[k].style.webkitTransform = 'rotateZ('+ hands[j].angle +'deg)';
        elements[k].style.transform = 'rotateZ('+ hands[j].angle +'deg)';
        // If this is a minute hand, note the seconds position (to calculate minute position later)
        if (hands[j].hand === 'minutes') {
          elements[k].parentNode.setAttribute('data-second-angle', hands[j + 1].angle);
        }
    }
  }
}

initLocalClocks();

//Change the text in the home page fields based on the user's chosen day and time//
function chosenSched() {
  
var chosenDay;
var chosenTime;
    
document.getElementById("days-dropdown").addEventListener('change', function () {
  window.removeEventListener("load", currentTime);
    var chosenDay = this.value;
    document.getElementById("current-date").innerHTML = chosenDay + "s";
    document.getElementById("hours-dropdown").addEventListener('change', function () {
       var chosenTime = this.value;
       var displayedTime = $("#hours-dropdown option:selected").text();
       console.log(displayedTime);

      document.getElementById("chosen-time").innerHTML = " at " + displayedTime;
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
         document.getElementById("duties").innerHTML = "Reporting on arts, culture and science through interactive multimedia.";
         document.getElementById("skills").innerHTML = "HTML5, CSS3, Bootstrap, JavaScript, jQuery, D3, AngularJS, Node.js, NPM, Express, MongoDB, Adobe CC (particulary PS, Illustrator, Premiere Pro and Audition), social media API's, Git, Google Analytics, Qualtrics, Mechanical Turk";
      }
      else if ((chosenDay != "Saturday" && chosenDay != "Sunday") && chosenTime > 12 && chosenTime < 17){
        
//Weekday afternooons freelancing//
         document.getElementById("awake").innerHTML = "Awake";
         document.getElementById("clothing").innerHTML = "Pants, button-down shirt, cardigan and loafers.";
         document.getElementById("food").innerHTML = "Nothing right now. I'm not much of a snacker.";
         document.getElementById("activity").innerHTML = "Freelance interactive journalist";
         document.getElementById("duties").innerHTML = "Reporting on arts, culture and science through interactive multimedia.";
         document.getElementById("skills").innerHTML = "HTML5, CSS3, Bootstrap, JavaScript, jQuery, D3, AngularJS, Node.js, NPM, Express, MongoDB, Adobe CC (particulary PS, Illustrator, Premiere Pro and Audition), social media API's, Git, Google Analytics, Qualtrics, Mechanical Turk";
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

//Toggle the project descriptions on mouseover//
$("#mmp-pic").click(function(){
  $(this).fadeToggle(200);
  $("#mmp-description").fadeToggle(200);
});

$("#close-mmp-text").click(function(){
  $("#mmp-description").fadeToggle(200);
  $("#mmp-pic").fadeToggle(400);
});

$("#CIA-pic").click(function(){
  $(this).fadeToggle(200);
  $("#CIA-description").fadeToggle(400);
});

$("#close-CIA-text").click(function(){
  $("#CIA-description").fadeToggle(200);
  $("#CIA-pic").fadeToggle(400);
});

$("#writers-pic").click(function(){
  $(this).fadeToggle(200);
  $("#writers-description").fadeToggle(400);
});

$("#close-writers-text").click(function(){
  $("#writers-description").fadeToggle(200);
  $("#writers-pic").fadeToggle(400);
});

$("#senate-pic").click(function(){
  $(this).fadeToggle(200);
  $("#senate-description").fadeToggle(400);
});

$("#close-senate-text").click(function(){
  $("#senate-description").fadeToggle(200);
  $("#senate-pic").fadeToggle(400);
});

$("#map-pic").click(function(){
  $(this).fadeToggle(200);
  $("#map-description").fadeToggle(400);
});

$("#close-map-text").click(function(){
  $("#map-description").fadeToggle(200);
  $("#map-pic").fadeToggle(400);
});

$("#fingers-pic").click(function(){
  $(this).fadeToggle(200);
  $("#fingers-description").fadeToggle(400);
});

$("#close-fingers-text").click(function(){
  $("#fingers-description").fadeToggle(200);
  $("#fingers-pic").fadeToggle(400);
});

});


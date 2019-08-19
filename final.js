function openPage(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
  
    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
  
    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();

// button reminder
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "ON"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "OFF"; 
    moreText.style.display = "inline";
  }
}

function myFunction2() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more2");
  var btnText = document.getElementById("myBtn2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "ON"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "OFF"; 
    moreText.style.display = "inline";
  }
}

function myFunction3() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more3");
  var btnText = document.getElementById("myBtn3");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "ON"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "OFF"; 
    moreText.style.display = "inline";
  }
}

function myFunction4() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more4");
  var btnText = document.getElementById("myBtn4");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "ON"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "OFF"; 
    moreText.style.display = "inline";
  }
}

/* timer*/
var intervalHandle;
var secondsRemaining;

function errorHide() {
  document.getElementById("errorMessage").style.display = "none";
 }

function resetPage() {
  //show input
  document.getElementById("inputArea").style.display = "block";
  //hide pause button by default
  document.getElementById("pauseArea").style.display = "none";
  //hide resume button
   document.getElementById("resumeArea").style.display = "none";
  //hide refresh button
  document.getElementById("refresh").style.display = "none";
  //reset value to blank
  document.getElementById("minutes").value = "";
  setTimeout(errorHide, 5000);
}

function resumeCountdown() {
  tick();
  intervalHandle = setInterval(tick, 1000);
   //hide resume button when resuming
  document.getElementById("resumeArea").style.display = "none";
  //show resume button;
  document.getElementById("pauseArea").style.display = "block";
  return;
}

function pauseCountdown() {
  clearInterval(intervalHandle);
  document.getElementById("pauseArea").style.display = "none";
  document.getElementById("resumeArea").style.display = "block";
  return;
}

function tick() {
  var timeDisplay = document.getElementById("time");
  
  var min = Math.floor(secondsRemaining / 60);
  var sec = secondsRemaining - (min * 60);
  
  if(min < 10) {
    min = "0" + min;
  }
  
  if(sec < 10) {
    sec = "0" + sec;
  }
  
  var message = min + ":" + sec;
  timeDisplay.innerHTML = message;
  
  if(secondsRemaining === 0) {
    document.getElementById("errorMessage").innerHTML = "<strong>Times up!</strong>";
    document.getElementById("errorMessage").setAttribute("class","alert alert-success text-center");
    clearInterval(intervalHandle);
    resetPage();
  }
  secondsRemaining--;
}

function startCountdown() {
  var minutes = document.getElementById("minutes").value;
  
   //check if it is a number
  if(isNaN(minutes)||minutes == ""){
      document.getElementById("errorMessage").innerHTML = "Yikes! It's not a number. <strong>TRY AGAIN</strong>";
      document.getElementById("errorMessage").setAttribute("class","alert alert-danger text-center");
       
       //hides error after 5 secs
      setTimeout(errorHide, 5000);
      resetPage();
      return;
  }
  //get the seconds
  secondsRemaining = minutes * 60;
  //reoccuring function
  intervalHandle = setInterval(tick, 1000);
  //hide input form once running
  document.getElementById("inputArea").style.display = "none";
  //show pause when running
  document.getElementById("pauseArea").style.display = "block";
  //show refresh when running
   document.getElementById("refresh").style.display = "block";
}
//refresh page with button
document.getElementById("refresh").onclick = function() {
  clearInterval(intervalHandle);
  document.getElementById("time").innerHTML = "00:00";
  document.getElementById("minutes").value = "";
  document.getElementById("inputArea").style.display = "block";
  document.getElementById("refresh").style.display = "none";
  document.getElementById("resumeArea").style.display = "none";
  document.getElementById("pauseArea").style.display = "none";
}
window.onload = function() {
  //break button
  var startButton = document.getElementById("breakBtn");
  startButton.onclick = function() {
    startCountdown();
  };
  //pause button
  var pauseButton = document.getElementById("pauseBtn");
  pauseButton.onclick = function() {
    pauseCountdown();
  };
 
  //resume button
  var resumeButton = document.getElementById("resumeBtn");
  resumeButton.onclick = function() {
    resumeCountdown();
  };
 document.getElementById("inputArea").appendChild(startButton);
 document.getElementById("pauseArea").appendChild(pauseButton);
 document.getElementById("resumeArea").appendChild(resumeButton);
  
  //hide pause button by default
  document.getElementById("pauseArea").style.display = "none";
  //hide pause button by default
  document.getElementById("resumeArea").style.display = "none";
  //hide refresh by default
  document.getElementById("refresh").style.display = "none";
};

// ChatBox
var gun=Gun("https://gunjs.herokuapp.com/gun").get("XeDedsEdfdEdfs"),_c=$("div.chat-container"),_in=$("input.name"),_l=$("div.loginbox"),_cb=$("div.chatbox"),_fc=$("form#chat"),_cm=$(".chatmessage");function scrollToButton(){_cb.stop().animate({scrollTop:_cb[0].scrollHeight})}function LoginChat(){localStorage.setItem("userName",_in.val()),_in.val()?(_c.addClass("show"),_l.addClass("hidden")):alert("Please type username!"),scrollToButton()}$("img.circle").on("click",function(){localStorage.setItem("userImage",$(this).attr("src"))}),$("button.goChat").on("click",function(){LoginChat()}),_in.keypress(function(t){13==t.which&&LoginChat()});var uname=localStorage.getItem("userName");uname&&""!==uname&&(_c.addClass("show"),_l.addClass("hidden")),_fc.on("submit",function(t){t.preventDefault();var n=localStorage.getItem("userImage"),e=_fc.find("input.msg").val();if(uname&&e){var a={status:"online"};a.img=n||"https://ui-avatars.com/api/?name="+uname+"&background=000&color=fff",a.what=e,a.when=(new Date).getTime(),a.who=uname,gun.set(a),_fc.find("input.msg").val("")}}),gun.map().val(function(t,n){if(t&&(t.who||""===t.who||t.img||""===t.img)){var e=$($("#"+n).get(0)||$(".model").find("li").clone(!0).attr({id:n,class:"collection-item chatmsg",name:t.who,status:t.status}).appendTo(".chatmessage"));e.find(".userImage").attr("src",t.img),e.find(".who").text(t.who),e.find(".what").text(t.what),e.find(".when").text(moment(t.when).fromNow()),e.find(".status").addClass(t.status),scrollToButton()}}),$("input.msg").keypress(function(t){13==t.which&&(t.preventDefault(),_fc.find("input.msg").val()?_fc.submit():alert("Please do not leave input blank"))}),$("button.logout").on("click",function(){var t=[uname];_cm.find("li").each(function(){t.indexOf($(this).attr("name"))>-1&&gun.get(this.id).put({status:"offline"}),localStorage.clear(),$(this).removeClass("show"),_c.removeClass("show"),_l.removeClass("hidden")}),location.reload()}),setInterval(function(){var t=[];_cm.find("li[status='online']").each(function(){t.push($(this).attr("name"))});var n=function(t){for(var n=[],e=0;e<t.length;e++)-1==n.indexOf(t[e])&&n.push(t[e]);return n}(t);if(n.length){var e='<ul class="collection">';for(i=0;i<n.length;i++)e+='<li class="collection-item">'+n[i]+'<i class="status online"></i></li>';e+="</ul>"}else e='<ul class="collection"><li class="collection-item">No user is online.</li></ul>';$("div.onlinebox").html(e)},4e3);

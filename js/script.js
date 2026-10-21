/* Basic page behavior: menu, job details, and contact form. */

var yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

var greeting = document.getElementById("greeting");
if (greeting) {
  var hour = new Date().getHours();
  var hello = "Hello";
  if (hour < 12) {
    hello = "Good morning";
  } else if (hour < 18) {
    hello = "Good afternoon";
  } else {
    hello = "Good evening";
  }
  greeting.textContent = hello + ". Welcome to my portfolio.";
}

var skillSearch = document.getElementById("skill-search");
var skillList = document.getElementById("skill-list");
if (skillSearch && skillList) {
  skillSearch.addEventListener("input", function () {
    var word = skillSearch.value.toLowerCase();
    var items = skillList.getElementsByTagName("li");
    var shown = 0;
    for (var i = 0; i < items.length; i++) {
      var match = items[i].textContent.toLowerCase().indexOf(word) !== -1;
      items[i].hidden = !match;
      if (match) {
        shown = shown + 1;
      }
    }
    var skillNote = document.getElementById("skill-note");
    if (word === "") {
      skillNote.textContent = "";
    } else {
      skillNote.textContent = shown + " match(es)";
    }
  });
}

var messageBox = document.getElementById("message");
var count = document.getElementById("count");
if (messageBox && count) {
  messageBox.addEventListener("input", function () {
    count.textContent = messageBox.value.length + " / 200";
  });
}

var menuBtn = document.getElementById("menu-btn");
var menu = document.getElementById("menu");
if (menuBtn && menu) {
  menuBtn.addEventListener("click", function () {
    var open = menu.classList.toggle("open");
    menuBtn.textContent = open ? "Close" : "Menu";
  });
}

var toggles = document.querySelectorAll(".toggle-details");
for (var i = 0; i < toggles.length; i++) {
  toggles[i].addEventListener("click", function () {
    var details = this.nextElementSibling;
    var showing = details.hidden;
    details.hidden = !showing;
    this.textContent = showing ? "Hide details" : "Show details";
  });
}

var form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();
    var note = document.getElementById("form-note");

    if (name === "" || email === "" || message === "") {
      note.textContent = "Please fill in name, email, and message.";
      return;
    }

    if (email.indexOf("@") === -1) {
      note.textContent = "Please enter an email address.";
      return;
    }

    note.textContent = "Thanks, " + name + ". This demo form does not send email.";
    form.reset();
    if (count) {
      count.textContent = "0 / 200";
    }
  });
}

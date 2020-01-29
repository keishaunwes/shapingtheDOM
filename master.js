document.addEventListener("DOMContentLoaded", function() {
  let button = document.createElement("button");
  let btnText = document.createTextNode("click me for JS");
  button.appendChild(btnText);
  document.body.append(button);
  div = document.createElement("div");
  document.body.append(div);
  div.style.height = "100px";
  div.style.width = "100px";

  let div2 = document.createElement("div");
  let nameText = document.createTextNode("Keishaun");
 
  document.body.append(div2);
  let friends = [
    "",
    "Marcus",
    "Genesis",
    "Coby",
    "Jon",
    "Keyontay",
    "Kallie",
    "Chase",
    "Jeremey",
    "JONJON",
    "PJ"
  ];
  let button2 = document.createElement("button");
  let btnText2 = document.createTextNode("click to learn my name");
  button2.appendChild(btnText2);
  document.body.append(button2);

  let paragr = document.createElement("p");
  let name = document.createTextNode("keishaun");

  let span = document.createElement("span");
  span.appendChild(paragr);
  div2.appendChild(span);

  let divdom = document.createElement("div");
  document.body.append(divdom);
  let button3 = document.createElement("button");
  let btnText3 = document.createTextNode("Friends");
  button3.appendChild(btnText3);
  divdom.appendChild(button3);
  randomFriend = [Math.floor(Math.random() * friends.length)];
  let colors = [
    " aqua",
    "black",
    "blue",
    "fuchsia",
    "gray",
    "grey",
    "green",
    "lime",
    "maroon",
    "navy",
    "olive",
    "purple",
    " red",
    "silver",
    "teal",
    "yellow"
  ];
  let paragraph = document.createElement("p");
  let paraText = document.createTextNode(
    "You know manipulating the DOM is pretty cool. Click me and watch me change!!"
  );
  paragraph.appendChild(paraText);
  document.body.appendChild(paragraph);
  button.addEventListener("click", function() {
    alert(textBox.value);
  });
  div.addEventListener("mouseover", function() {
    div.style.backgroundColor = "red";
  });
  div.addEventListener("mouseout", function() {
    div.style.backgroundColor = "white";
  });
  paragraph.addEventListener("click", changing);

  function changing() {
    for (var i = 0; i < colors.length; i++) {
      paragraph.style.color = colors[Math.floor(Math.random() * colors.length)];
    }
  }

  button2.addEventListener("click", function() {
    span.appendChild(name);
  });

  let counter = 0;

  button3.addEventListener("click", function() {
    counter++;

    if (counter <= friends.length - 1) {
      let ull = document.createElement("ul");
      divdom.appendChild(ull);
      let lil = document.createElement("li");
      ull.appendChild(lil);
      lil.innerHTML = friends[counter];
    } else {
      alert("thats it buddy");
    }

    console.log(counter);
  });
});

$(document).ready(function() {
  let buttonj = $("<button>click me for jquery</button>");
  let divj = $("<div></div>");
  $("body").append(buttonj);
  let inputj = $("<input type ='text'>");
  let colorsj = [
    " aqua",
    "black",
    "blue",
    "fuchsia",
    "gray",
    "grey",
    "green",
    "lime",
    "maroon",
    "navy",
    "olive",
    "purple",
    " red",
    "silver",
    "teal",
    "yellow"
  ];
  divj.css({ height: "100px", width: "100px" });
  para = $("<p>Hello Jquery</p>");
  let divfriends = $("<div></div>");
  let btnfriends = $("<button>friends</button>");

  $("body").append(inputj);
  $("body").append(divj);
  $("body").append(para);
  $("body").append(divfriends);
  $("body").append(btnfriends);

  buttonj.click(function() {
    alert(inputj.val());
  });
  divj.mouseover(function() {
    divj.css("background-color", "aqua");
  });
  divj.mouseout(function() {
    divj.css("background-color", "white");
  });

  para.click(function() {
    let randomColor = colorsj[Math.floor(Math.random() * colorsj.length)];
    para.css("color", randomColor);
  });

  let counterj = 0;
  let divquery = $("<div></div>");
  btnfriends.click(function() {
    let friendsj = [
      "",
      "Marcus",
      "Genesis",
      "Coby",
      "Jon",
      "Keyontay",
      "Kallie",
      "Chase",
      "Jeremey",
      "JONJON",
      "PJ"
    ];

    if (counterj <= friendsj.length - 2) {
      counterj++;

      let ul = $("<ul> </ul>");
      divquery.append(ul);
      $("body").append(divquery);
      let li = $("<li></li>");
      ul.append(li);
      li.text(friendsj[counterj]);
    } else {
      alert("thats it buddy");
    }
  });
});

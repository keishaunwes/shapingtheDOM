document.addEventListener("DOMContentLoaded", function() {
  let button = document.createElement("button");
  let btnText = document.createTextNode("click me");
  button.appendChild(btnText);
  document.body.append(button);
  let textBox = document.getElementById("textBox");
  div = document.createElement("div");
  document.body.append(div);
  div.style.height = "100px";
  div.style.width = "100px";
  let rgbRED = Math.floor(Math.random() * 4);
  let rgbB = Math.floor(Math.random() * 40);
  let rgnGR = Math.floor(Math.random() * 400);
  let div2 = document.createElement("div");
  let nameText = document.createTextNode("keishaun");
  //    button.appendChild(btnText);
  document.body.append(div2);
  let friends = [
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
  let counter = 0;
  let button2 = document.createElement("button");
  let btnText2 = document.createTextNode("click to learn more");
  button2.appendChild(btnText2);
  document.body.append(button2);

  let paragr = document.createElement("p");
  let name = document.createTextNode("keishaun");

  let span = document.createElement("span");
  span.appendChild(paragr);
  div2.appendChild(span);

  let button3 = document.createElement("button");
  let btnText3 = document.createTextNode("All my dear friends");
  button3.appendChild(btnText3);
  document.body.append(button3);

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

  button3.addEventListener("click", function() {
      
      if (counter <= friends.length-1) {
        let ul = document.createElement("ul");
        document.body.append(ul);
        let li = document.createElement("li");
        ul.appendChild(li);
      li.innerHTML = friends[counter];
    } else{
alert("thats it buddy")

    }

    counter++;
  });
});

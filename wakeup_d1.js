const lampBtn = {
  x: 200, // x position (centre of the button)
  y: 550, // y position (centre of the button)
  w: 260, // width
  h: 90, // height
  label: "Night Lamp", // text shown on the button
};

const stillBtn = {
  x: 600, // x position (centre of the button)
  y: 550, // y position (centre of the button)
  w: 260, // width
  h: 90, // height
  label: "Sit Still", // text shown on the button
};

function drawWakeup() {
  // Set background colour for the game screen
  background(0, 30, 52);

  // ---- Title and instructions text ----
  fill(255); // white text
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Act 1: Waking Up", width / 2, 160);

  textSize(18);
  text(
    "You have woken up in a strange dark cabin.\nWhat will you do?",
    width / 2,
    210,
  );

  drawWakeupButton(lampBtn);
  drawWakeupButton(stillBtn);

  cursor(isHover(lampBtn) || isHover(stillBtn) ? HAND : ARROW);
}

function drawWakeupButton({ x, y, w, h, label }) {
  rectMode(CENTER);

  const hover = isHover({ x, y, w, h });

  noStroke();

  fill(
    hover
      ? color(180, 220, 255, 220) // lighter blue on hover
      : color(200, 220, 255, 190), // normal state
  );

  rect(x, y, w, h, 14); // last value = rounded corners

  fill(0);
  textSize(28);
  textAlign(CENTER, CENTER);
  text(label, x, y);
}

function wakeupMousePressed() {
  // Only trigger the outcome if the button is clicked
  if (isHover(lampBtn)) {
    currentScreen = "lose";
  } else if (isHover(stillBtn)) {
    currentScreen = "room";
  }
}

function wakeupKeyPressed() {
  // ENTER key triggers the same behaviour as clicking the button
  if (keyCode === "65") {
    currentScreen = "lose";
  } else if (keyCode === "66") {
    currentScreen = "room";
  }
}

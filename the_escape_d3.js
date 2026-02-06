const runBtn = {
  x: 200, // x position (centre of the button)
  y: 550, // y position (centre of the button)
  w: 260, // width
  h: 90, // height
  label: "Run For the Door", // text shown on the button
};

const sneakBtn = {
  x: 600, // x position (centre of the button)
  y: 550, // y position (centre of the button)
  w: 260, // width
  h: 90, // height
  label: "Slowly Sneak Out", // text shown on the button
};

function drawEscape() {
  // Set background colour for the game screen
  background(0, 30, 52);

  // ---- Title and instructions text ----
  fill(255); // white text
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Act 3: The Escape", width / 2, 160);

  textSize(18);
  text(
    "You see that the door to the room is open and there is an open path towards it.",
    width / 2,
    210,
  );

  drawEscapeButton(runBtn);
  drawEscapeButton(sneakBtn);

  cursor(isHover(runBtn) || isHover(sneakBtn) ? HAND : ARROW);
}

function drawEscapeButton({ x, y, w, h, label }) {
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

function escapeMousePressed() {
  // Only trigger the outcome if the button is clicked
  if (isHover(runBtn)) {
    currentScreen = "win";
  } else if (isHover(sneakBtn)) {
    currentScreen = "lose";
  }
}

function escapeKeyPressed() {
  // ENTER key triggers the same behaviour as clicking the button
  if (keyCode === "A") {
    currentScreen = "win";
  } else if (keyCode === "B") {
    currentScreen = "lose";
  }
}

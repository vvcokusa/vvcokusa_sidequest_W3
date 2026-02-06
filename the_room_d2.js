const scanBtn = {
  x: 200, // x position (centre of the button)
  y: 550, // y position (centre of the button)
  w: 260, // width
  h: 90, // height
  label: "Scan Room", // text shown on the button
};

const getoutBtn = {
  x: 600, // x position (centre of the button)
  y: 550, // y position (centre of the button)
  w: 260, // width
  h: 90, // height
  label: "Get Out of Bed", // text shown on the button
};

function drawRoom() {
  // Set background colour for the game screen
  background(0, 30, 52);

  // ---- Title and instructions text ----
  fill(255); // white text
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Act 2: The Room", width / 2, 160);

  textSize(18);
  text(
    "Your eyes begin to adjust and you notice a figure sitting in a chair in the corner.\nThey aren’t moving.",
    width / 2,
    210,
  );

  drawRoomButton(scanBtn);
  drawRoomButton(getoutBtn);

  cursor(isHover(scanBtn) || isHover(getoutBtn) ? HAND : ARROW);
}

function drawRoomButton({ x, y, w, h, label }) {
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

function roomMousePressed() {
  // Only trigger the outcome if the button is clicked
  if (isHover(scanBtn)) {
    currentScreen = "escape";
  } else if (isHover(getoutBtn)) {
    currentScreen = "lose";
  }
}

function roomKeyPressed() {
  // ENTER key triggers the same behaviour as clicking the button
  if (keyCode === "A") {
    currentScreen = "escape";
  } else if (keyCode === "B") {
    currentScreen = "lose";
  }
}

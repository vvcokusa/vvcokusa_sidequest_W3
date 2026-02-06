// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawWin() → what the win screen looks like
// 2) input handlers → how the player returns to the start screen
//
// This file is intentionally very similar to lose.js.
// The goal is to show that win/lose screens are often
// simple “end states” with minimal logic.

// ------------------------------------------------------------
// Main draw function for win screen
// ------------------------------------------------------------
// drawWin() is called from main.js
// only when currentScreen === "win"
function drawWin() {
  // Green-tinted background to communicate success
  background(130, 160, 212);

  fill(0);
  textAlign(CENTER, CENTER);

  // Main success message
  textSize(20);
  text(
    "The front entrance leads to a road, you see a\n car parked, but you swiftly run past it. As you\n further down the road, more lights begin to appear, and a car drive up.\n Panicked you hop in and the drivers helps\n get you to the nearest town.\n\n You’re safe...\nFor now.",
    width / 2,
    300,
  );

  // Instruction text
  textSize(20);
  text("Click or press R to return to Start.", width / 2, 500);

  cabin(width / 2, 775, 100);
}

// ------------------------------------------------------------
// Mouse input for win screen
// ------------------------------------------------------------
// Any mouse click returns the player to the start screen
function winMousePressed() {
  currentScreen = "start";
}

// ------------------------------------------------------------
// Keyboard input for win screen
// ------------------------------------------------------------
// R is commonly used for “restart” in games
function winKeyPressed() {
  if (key === "r" || key === "R") {
    currentScreen = "start";
  }
}

function cabin(x, y, size) {
  fill(150, 75, 0);
  rect(x, y, size, size / 2);
  fill(100, 50, 0);
  triangle(
    x - size / 2,
    y - size / 4,
    x,
    y - size / 2,
    x + size / 2,
    y - size / 4,
  );
  fill(200, 100, 0);
  rect(x, y + size / 8, size / 5, size / 4);
}

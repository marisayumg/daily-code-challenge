// Full rotation
// in radians, handy to store these in readable variables
const fullRotation = Math.PI * 2;

// Half rotation
// in radians, handy to store these in readable variables
const halfRotation = Math.PI;

// Ease in out cubic
// Easings specify the rate at which an animation happens over time.
// Ease in out is a curve with a slower entrance, a faster middle and
// a slower exit, making animations *ease* into and out of their movement.
function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
}

// Clamp
// Takes a value, a min and a max, if the value is less than the min
// it will set the value to the min and if the value is greater than
// the max it will set the value to the max
// e.g. clamp(11, 0, 10) would return 10
// e.g. clamp(9, 0, 10) would return 9
function clamp(input, min, max) {
  return Math.max(min, Math.min(input, max))
}

// Map range
// Re-maps a number from one range to another. eg. https://processing.org/reference/map_.html
// (nb: numbers are not clamped by default to min and max parameters)
// e.g. map(70, 0, 100, 0, 10) would return 7
// e.g. map(70, 0, 100, 10, 20) would return 17
function map(value, low1, high1, low2, high2) {
  return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);
}

// do both of the above! map and clamp together!
// e.g. mapAndClamp(70, 0, 100, 0, 10) would return 7
// e.g. mapAndClamp(70, 0, 100, 10, 20) would return 17
// e.g. mapAndClamp(110, 0, 100, 10, 20) would return 20, not 21, as it's clamped to 20 max
function mapAndClamp(value, low1, high1, low2, high2) {
  return clamp(
    map(value, low1, high1, low2, high2),
    Math.min(low2, high2), 
    Math.max(low2, high2)
  )
}

// Random number within range
// Generates a random number between min and max rounded
// e.g. randomNumber(10, 20) could return 17.12335
function randomNumber(min, max) {
  return Math.random() * (max - min) + min
}

// Random number within range
// Generates a random number between min and max rounded
// e.g. randomRoundNumber(10, 20) could return 17
function randomRoundNumber(min, max) {
  return Math.round(randomNumber(min, max))
}



// accelerating from zero velocity
const easeInQuad = function(t) {
  return t * t
}
// decelerating to zero velocity
const easeOutQuad = function(t) {
  return t * (2 - t)
}
// acceleration until halfway, then deceleration
const easeInOutQuad = function(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
}
// accelerating from zero velocity
const easeInCubic = function(t) {
  return t * t * t
}
// decelerating to zero velocity
const easeOutCubic = function(t) {
  return --t * t * t + 1
}
// acceleration until halfway, then deceleration
const easeInOutCubic = function(t) {
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
}
// accelerating from zero velocity
const easeInQuart = function(t) {
  return t * t * t * t
}
// decelerating to zero velocity
const easeOutQuart = function(t) {
  return 1 - --t * t * t * t
}
// acceleration until halfway, then deceleration
const easeInOutQuart = function(t) {
  return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t
}
// accelerating from zero velocity
const easeInQuint = function(t) {
  return t * t * t * t * t
}
// decelerating to zero velocity
const easeOutQuint = function(t) {
  return 1 + --t * t * t * t * t
}
// acceleration until halfway, then deceleration
const easeInOutQuint = function(t) {
  return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t
}

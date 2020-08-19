export function random (num) {
  return Math.floor(Math.random() * (num + 1))
}

export function randomRange (min, max) {
  return random(max - min) + min
}

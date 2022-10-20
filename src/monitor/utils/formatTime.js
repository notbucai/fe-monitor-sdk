export default function (date) {
  return new Date(date || Date.now()).getTime()
}

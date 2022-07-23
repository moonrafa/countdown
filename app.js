const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]

const deadline = document.querySelector('.deadline')
const giveaway = document.querySelector('.giveaway')
const items = document.querySelectorAll('.deadline-format h4')
//console.log(items)

//let futureDate = new Date(2024, 8, 2, 4, 0, 0)
//console.log(futureDate)
//2 DE SETEMBRO DE 2024, 4:00 A.M

let tempDate = new Date()
let tempYear = tempDate.getFullYear()
let tempMonth = tempDate.getMonth()
let tempDay = tempDate.getDate()
//sempre 10 a frente de quando a pessoa checar o countdown para que assim nunca expire
let futureDate = new Date(tempYear, tempMonth, tempDay + 10, 4, 0)

const year = futureDate.getFullYear()
const hours = futureDate.getHours()
const mins = futureDate.getMinutes()

const month = months[futureDate.getMonth()]
const weekday = weekdays[futureDate.getDay()]
//console.log(weekday)
const date = futureDate.getDate()

giveaway.textContent = `Season of Shattering starts on ${weekday}, ${date} ${month} ${year}, ${hours}:${mins}0 A.M (UTC-3)`

/* COUNTDOWN */
const futureTime = futureDate.getTime()
//console.log(futureTime)

function getRemainingTime() {
  const today = new Date().getTime()
  //console.log(today)
  const t = futureTime - today
  //1s = 1000ms
  //1m = 60s
  //1hr = 60min
  //1 day = 24hr
  const oneDay = 24 * 60 * 60 * 1000
  const oneHour = 60 * 60 * 1000
  const oneMinute = 60 * 1000
  let days = Math.floor(t / oneDay)
  //console.log(days)
  let hours = Math.floor((t % oneDay) / oneHour)
  //console.log(hours)
  let minutes = Math.floor((t % oneHour) / oneMinute)
  //console.log(minutes)
  let seconds = Math.floor((t % oneMinute) / 1000)
  //console.log(seconds)

  const values = [days, hours, minutes, seconds]
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`)
    }
    return item
  }

  items.forEach(function (item, index) {
    item.innerHTML = values[index]
  })
  if (t < 0) {
    clearInterval(countdown)
    deadline.innerHTML = `<h4 class="expired"> this season already started! </h4>`
  }
}
//refresh
let countdown = setInterval(getRemainingTime, 1000)
getRemainingTime()

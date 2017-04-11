//*create getElementById for all ID's
var firstName = document.getElementById('firstname')
var lastName = document.getElementById('lastname')
var describe = document.getElementById('describe')
var email = document.getElementById('email')
var phone = document.getElementById('phone')
var preview = document.getElementById('preview')
var codeBox = document.getElementById('codebox')
function update () {
  var content = '<h1>Hi my name is ' + firstName.value + ' ' + lastName.value + ' !</h1>' + ' <p>'+ describe.value + '</p> ' + ' <p>If you\'re interested in a date, you can email me at ' + '<a href="mailto:' + email.value + '" target="_blank">'+ email.value + '</a>' + ' or give me a call at</p> ' + '<a href="tel:' + phone.value + '" target="_blank">' + phone.value + '</a>'

  codeBox.textContent = content
  preview.innerHTML = content
}
firstName.addEventListener('input', update)
lastName.addEventListener('input', update)
describe.addEventListener('input', update)
email.addEventListener('input', update)
phone.addEventListener('input', update)

//*create getElementById for all ID's
var firstName = document.getElementById('firstname')
var lastName = document.getElementById('lastname')
var describe = document.getElementById('describe')
var email = document.getElementById('email')
var phone = document.getElementById('phone')
var preview = document.getElementById('preview')
var codeBox = document.getElementById('codebox')
function update () {
  var content = '<h1>Hi my name is ' + firstName.value + lastName.value + ' ! ' + ' <p>'+ describe.value + '</p> ' + ' <p>If you\'re interested in a date, you can email me at ' + email.value + ' or give me a call at</p> ' + phone.value

  codeBox.textContent = content
  preview.innerHTML = content

}
firstName.addEventListener('input', update)

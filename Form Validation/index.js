const name1 = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = ducument.getElementById('error')

form.addEventListener(`submit`, (e) => {
    let messages = []
    if(name1.value === `` || name1.value == null){
        messages.push('Name is required')
    }
    if(password.length <= 6){
        messages.push('Password must be longer than 6 characters')
    }
    if(password.length >= 20){
        messages.push('Password must be less than 20 characters')
    }
    if(password.value === 'password'){
        messages.push('Password cannot be password')
    }
    if(messages.length > 0){
        e.preventDefailt()
        errorElement.innerHtml = messages.join(', ')
    }
})
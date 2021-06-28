const strengthMeter = document.getElementById('strength-meter')
const passwordInput = document.getElementById('password-input')
const reaonsContainer = document.getElementById('reasons')

passwordInput.addEventListener('input', updateStrengthMeter)
updateStrengthMeter()

function updateStrengthMeter(){
    const weaknesses = claculatePasswordStrength(passwordInput.value) 
    let strength = 100
    reaonsContaine.innerHTML = ''
    weaknesses.forEach(weaknesses => {
        if(weaknesses == null) return 
        strength -= weaknesses.deduction
        const messageElement = document.createElement('div')
        messageElement.innerHTML = weaknesses.message
        reaonsContainer.appendChild(messageElement)
    })
    strengthMeter.style.setProperty('--strength', strength)
}

function claculatePasswordStrength(password){
    const weaknesses = []
    weaknesses.push(lengthWeakness(password))
    return weaknesses
}

function lengthWeakness(password){
    const length = password.length

    if(length <= 5){
        return {
            message: 'Your password is too short',
            deduction: 40
        }
    }
    if(length <= 10){
        return{
            message: 'Your password could be longer',
            deduction: 15
        }
    }
}

//There were more function with more weaknesses that you push in weaknesses array in line 24.
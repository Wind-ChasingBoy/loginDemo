import "../css/style.scss"

const password = document.getElementById("password")

const passworToggle = document.querySelector('.password_icon')

passworToggle.addEventListener('click', ()=> {
    if(password.type == 'password') {
        password.setAttribute('type', 'text')
        passworToggle.classList.remove('show')
        passworToggle.classList.add('show')
    }else {
        password.setAttribute('type', 'password')
        passworToggle.classList.remove('show')
    }
})

password.addEventListener('keyup', ()=> {
    checkPassword(password.value)
})

function checkPassword(info) {

    const passwordMsg = document.getElementById('password_msg')
    passwordMsg.textContent = '需要'
    console.log(passwordMsg.textContent);
    const lower = new RegExp('(?=.*[a-z])') // 小写
    const upper = new RegExp('(?=.*[A-Z])') // 大写
    const number = new RegExp('(?=.*[0-9])') // 数字
    const special = new RegExp('(?=.*[!@#\$%\^&\*])') // 特殊字符，可以完善
    const length = new RegExp('(?=.{8,})') // 长度

    let errorFlag = false
    if(!lower.test(info)) {
        passwordMsg.textContent += ' 小写 '
        errorFlag = true
    }
    if(!upper.test(info)) {
        passwordMsg.textContent += ' 大写 '
        errorFlag = true
    }
    if(!number.test(info)) {
        passwordMsg.textContent += ' 数字 '
        errorFlag = true
    }
    if(!special.test(info)) {
        passwordMsg.textContent += ' 特殊字符 '
        errorFlag = true
    }
    if(!length.test(info)) {
        passwordMsg.textContent += ' 长度大于8 '
        errorFlag = true
    }

    const passwordGroup = document.getElementById('password_group')
    if(errorFlag) {
        passwordGroup.classList.remove('success')
        passwordGroup.classList.add('error')
    }
    else{
        passwordGroup.classList.remove('error')
        passwordGroup.classList.add('success')
        passwordMsg.textContent = 'Vaild Password'
    }

}

function checkEmail(info) {

    const email = new RegExp('/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i')

}

// ================== MODAL ========================== //
const regBtn = document.querySelector('.js-reg-btn');
const modal = document.querySelector('.js-modal');
const modalContainer = document.querySelector('.js-modal-container');
const modalClose = document.querySelector('.js-modal-close');
const registerBtn = document.querySelector('.js-register-btn')

function showRegForm()
{
    modal.classList.add('open');
}
function hideRegForm()
{
    modal.classList.remove('open');
}
function closeForm(event)
{
    event.stopPropagation();
}

regBtn.addEventListener('click',showRegForm);
modalClose.addEventListener('click',hideRegForm);
modal.addEventListener('click',hideRegForm);
modalContainer.addEventListener('click',closeForm);

// SAVE THE USER INFORMATION

var arr = [];


function SaveInfo(){
    var a = document.getElementById("username").value;
    var b = document.getElementById("email").value;
    var c = document.getElementById("password").value;
    arr.push(a,b,c);
    alert("Đăng ký thành công");
}
console.log(arr);

registerBtn.addEventListener('click',SaveInfo);
$(document).ready(function () {
    

const select = document.getElementById('select')
let avatar = document.getElementById('avatar')
const genderBtns = document.querySelectorAll("[name='gender']")




genderBtns.forEach(btn => {
    btn.addEventListener("change", () => {
       if (btn.checked) {
           let value = btn.value
           console.log(btn.value)
        if(value == "female"){
            select.style.display = 'none'
            setTimeout(function(){
               document.getElementById('spinner').style.display = "none"        
                setTimeout(function(){
        
                    avatar.src='./images/female.png'
                   
                },1000)
            },1500)
        }
        
        if(value == "male"){
            select.style.display = 'none'
            setTimeout(function(){
               $('#spinner').hide('fade')
                 setTimeout(function(){
                        avatar.src='./images/male.png'
                    
                 },1000)
             },1500)
        }
        if (value !== 'male') {
            avatar.src=''
            $('#spinner').show('fade')
        }
        if (value !== 'female') {
            avatar.src=''
            $('#spinner').show('fade')
        }

            
       }
    })
})

$('#buyer_btn').click(function () {
    $('#image_avatar').removeClass('d-none')
    $('#account_select').addClass('d-none')
    $('#buyer_form').removeClass('d-none')
    $('#goback').removeClass('d-none')
})
$('#supply_btn').click(function () {
    $('#image_avatar').removeClass('d-none')
    $('#account_select').addClass('d-none')
    $('#supply_form').removeClass('d-none')
    $('#goback').removeClass('d-none')
})

$('#goback').click(function () {
    $('#goback').addClass('d-none')
    $('#image_avatar').addClass('d-none')
    $('#supply_form').addClass('d-none')
    $('#buyer_form').addClass('d-none')
    $('#account_select').removeClass('d-none')
})

$('#submit').click(function (submit) {
    if($('input') !==  ''){
        submit.preventDefault()
    }
})
})
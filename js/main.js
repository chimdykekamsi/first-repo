$(document).ready(function () {
    

const selesct = document.getElementById('select')
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


$('#submit').click(function (submit) {
    if($('input') !==  ''){
        // submit.preventDefault()
    }
})
})
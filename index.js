let changeIcon = false
let container = document.getElementsByClassName('container')[0]
let icon = document.getElementsByClassName("icon")[0]
let fontawesomicon = document.getElementById('fontawesomicon')
let changebox = document.getElementsByClassName('form-box')[0]

let Namevali = ``;
let Emailvali = ``;
let Passwordvali = ``;
let Repasswordvali = ``;

icon.addEventListener('click',()=>{
    changeIcon = !changeIcon
    if(changeIcon === true){
        container.style.backgroundColor = 'black';
        changebox.style.backgroundColor = 'black'
        fontawesomicon.style.color = 'white'
        fontawesomicon.className = 'fa-regular fa-sun';
    }
    else{
        container.style.backgroundColor = 'white';
        changebox.style.backgroundColor = 'white'
        fontawesomicon.style.color = 'black'
        fontawesomicon.className = 'fa-regular fa-moon' 
    }
})
let DebouncingAllFun = function(callbackFun,delaytime){
    let timer;
    return function(...arg){
        clearTimeout(timer)
        timer =  setTimeout(() => {
            callbackFun(...arg)
        }, delaytime);
    }
}

let name = document.getElementById('name')

let Debouncing = DebouncingAllFun(function(e){
    Namevali = e.target.value
},2000)


name.addEventListener('input',Debouncing)


let email = document.getElementById('email')

let EmailDebouncingFun = (emailcallback,emaildelay)=>{
    let emailtimer;
    return function(...arg){
        clearTimeout(emailtimer)
      emailtimer=  setTimeout(()=>{
            emailcallback(...arg)
        },emaildelay)
    }
}

let EmailDebouncing = EmailDebouncingFun(function(e){
    Emailvali = e.target.value
},2000)

email.addEventListener('input',EmailDebouncing)
let password = document.getElementById('password')
let PasswordDebouncingFun = (pascalback,pasdelya)=>{
    let pasTimer;
    return function(...pasagr){
        clearTimeout(pasTimer)
        pasTimer = setTimeout(()=>{
            pascalback(...pasagr)
        },pasdelya)
    }
}
let PasswordDebouncing = PasswordDebouncingFun(function(e){
    Passwordvali = e.target.value
},2000)
password.addEventListener('input',PasswordDebouncing)
let repassword = document.getElementById('repassword')
let RepasDebouncingFun = (repasclaback,redelay)=>{
    let repastime;
    return function(...arg){
        clearTimeout(repastime)
        repastime = setTimeout(() => {
            repasclaback(...arg)
        }, redelay);
    }
}
let RepasDebouncing = RepasDebouncingFun(function(e){
    Repasswordvali = e.target.value
},2000)

repassword.addEventListener('input',RepasDebouncing)
let submitbtn = document.getElementById('sub-btn')

let Namevalidation = ()=>{
    return new Promise((resolve,reject)=>{
        if(Namevali.length>2){
            return resolve("Successfully")
        }
        else{
            return reject("Reject")
        }
    })
}

let EmailValidation = ()=>{
    return new Promise((resolve,reject)=>{
        if(Emailvali.length> 5 && Emailvali.includes('@')){
            return resolve("Email is Successfully")
        }
        else{
            return reject("Email is reject ")
        }
    })
}
let PasswordValidation = ()=>{
    return new Promise((resolve,reject)=>{
        if(Passwordvali.length>4){
          return  resolve("Password is vaild")
        }
        else{
           return reject("Passwod is not valid")
        }
    })
}
let RepasswordValidation = ()=>{
    return new Promise((resolve,reject)=>{
        if(Repasswordvali.length>4 && Passwordvali === Repasswordvali){
          return  resolve('Repassword is Done')
        }
        else{
            return reject("Not same")
        }
    })
}

let TharotlingFun = (calback,delay)=>{
    return function (){
        submitbtn.disabled = true
        setTimeout(() => {
            calback()
        }, delay);
    }
}

let Tharotling = TharotlingFun(function(){
Promise.allSettled([Namevalidation(),EmailValidation(),PasswordValidation(),RepasswordValidation()])
.then((res)=>{
    console.log(res)
})
.then((err)=>{
    console.log(err)
})
submitbtn.disabled = false
},3000)
submitbtn.addEventListener('click',Tharotling)




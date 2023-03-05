const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let n = 12


let pass1 = document.getElementById('output1')
let pass2 = document.getElementById('output2')

function randomnumber(){
    return characters[Math.floor(Math.random()*characters.length)]
}

function getpassword(){

    let password = ''


    for (let i = 0 ; i<n ; i++){
        password = password + randomnumber()
        console.log(password)
    }

    return password


}

function displaypassword(){
    pass1.innerText = getpassword()
    pass2.innerText = getpassword()
}




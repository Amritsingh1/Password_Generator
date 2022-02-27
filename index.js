
char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*_+"

function randomPassword() {
    let pass = "";
    for(let i=0;i<15;i++){
        pass+=char[Math.floor(Math.random()*char.length)]
    }
    return pass
}

let pass1=document.getElementById("pass1")
let pass2=document.getElementById("pass2")
let pass3=document.getElementById("pass3")
let pass4=document.getElementById("pass4")

let passwords=[]
passwords.push(pass1);
passwords.push(pass2);
passwords.push(pass3);
passwords.push(pass4);
function CopytToClipboard(id)
{
    var r = document.createRange();
    r.selectNode(document.getElementById(id));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
}


function generatepass(){
    for(let i=0;i<passwords.length;i++){
        passwords[i].textContent=randomPassword()
    }
}



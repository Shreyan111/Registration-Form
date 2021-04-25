function validate(){
    flag1=0;
    flag2=0;
    flag3=0;
    flag4=0;
    flag5=0;
    flag6=0;
    flag7=0;
    flag8=0;
    name(document.getElementById("name").value);
    reg(document.getElementById("reg").value);
    mail(document.getElementById("email").value);
    num(document.getElementById("phone").value);
    
    var originalvalue1 = document.getElementById("name").value;
    var originalvalue2 = document.getElementById("reg").value;
    var originalvalue3 = document.getElementById("dob").value;
    var originalvalue4 = document.getElementById("pro").value;
    var originalvalue5 = document.getElementById("email").value;
    var originalvalue6 = document.getElementById("phone").value;

    if(flag1==2 || flag3==4 || flag5==6 || flag7==8){
        swal("Form Not Submitted!!", "You gave wrong information!", "warning");
    }
    else{
        swal("Form Submitted!", "Thank you for giving information!", "success");
        console.log(originalvalue1);
        console.log(originalvalue2);
        console.log(originalvalue3);
        console.log(originalvalue4);
        console.log(originalvalue5);
        console.log(originalvalue6);
    }
}

function name(name)
{
    n=name.length;
    flag=1;
    for(i=0;i<n;i++){
        c=name.charAt(i);
        if(!((c>='A' && c<='Z') || (c>='a' && c<='z') || c==' '))
        flag=0;
    } 
    if(flag==0){
        alert("Name should contain only alphabets");
        flag1=2;
    }
    else{
        flag2=3;
    }

}

function reg(reg){
    flag=1;
    for(i=0;i<reg.length;i++){
        c=reg.charAt(i);
        if(!((c>='A' && c<='Z') || (c>='a' && c<='z') || (c>='0' && c<='9')))
        flag=0;
    }
    if(flag==0){
        alert("Register number should conatin only alphabets and number");
        flag3=4;
    }
    else{
        flag4=5;
    }
}

function mail(email){
    atp=email.indexOf("@");
    dotp=email.lastIndexOf(".");
    if (atp<1 || dotp<atp+2 || dotp+2>=email.length){
        alert("Enter a valid E-mail ID");
        flag5=6;
    }
    else{
        flag6=7;
    }
}

function num(phone){
    //var validRegex = /^[0]?[789]\d{9}$/;
    if(phone.length<10){
        alert("Enter a valid phone number");
        flag7=8;
    }
    else{
        flag8=9;
    }
}

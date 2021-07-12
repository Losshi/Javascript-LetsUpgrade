function doRegister() {
    var name=document.getElementById("name").value;
    var head=document.getElementById("main");
    head.innerText="Dear "+name+", Welcome to Losshika's Page!";
    head.style.color="blue";
    head.style.fontSize="30px";
    var button=document.getElementById("button");
    button.innerText="REGISTERED";
    button.style.backgroundColor="aliceblue";
    button.style.color="black";
    document.getElementsByTagName("body")[0].style.backgroundColor="aquamarine";
}
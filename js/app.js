function color(){
    const random = Math.floor(Math.random()*16777215);
    const rcode="#"+random.toString(16);
    //remember 16 to pass for color code only.
    //remember 16777215 for number generator for color code
    document.body.style.backgroundColor = rcode;
    document.getElementById("color-code").innerText=rcode;
    // this copies rcode to clipboard when this function is called
    navigator.clipboard.writeText(rcode);
}
//event call
document.getElementById("btn").addEventListener(
    "click",
    color
)
//initial call
color();
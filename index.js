const Button = document.getElementById("btn");

Button.addEventListener("click", () => {
    console.log("button pressed")
    sendRequest();
})

async function sendRequest(){
    const api_key = "GghlNzBA1n02ZWhduk5GVkKcHkrgQS2DrF62MFYZ";
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${api_key}`)
    console.log(response)
}
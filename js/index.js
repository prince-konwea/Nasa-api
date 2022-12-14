
document.getElementById("btn").addEventListener("click", sendRequest)


function sendRequest(){
  const choice = document.querySelector('input').value
  const api_key = "GghlNzBA1n02ZWhduk5GVkKcHkrgQS2DrF62MFYZ";
  const url = `https://api.nasa.gov/planetary/apod?api_key=${api_key}&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        
        //Change background image to the the colour black when media is shown
        document.querySelector('body').style.backgroundImage = `url('')`;


        // Hide H1 on button click
        document.querySelector('h1').setAttribute('style', 'display: none;')

        //Show section with media and text
        document.querySelector('p').setAttribute('style', 'display: block;')

        // Add title, date and explanation to page
        document.querySelector('h2').innerHTML = data.title
        document.querySelector('h3').innerHTML = data.date
        document.querySelector('p').innerHTML = data.explanation
        
        if (data.copyright !== undefined){
          document.querySelector('h4').innerHTML = `&copy; ${data.copyright}`
        } else (
          document.querySelector('h4').innerHTML = 'No copyright information available'
        )


        // On button press, show image/video, description and title.
        document.querySelector('button').addEventListener('click', function(){
          document.querySelector('img').src = '';
          document.querySelector('iframe').src = '';
        })

        
        // Show image or video depending on type
        if (data.media_type === 'image'){
          document.querySelector('img').setAttribute('style', 'display: block;')
          document.querySelector('img').src = data.hdurl
          document.querySelector('iframe').setAttribute('style', 'display: none;')
        } else if (data.media_type === 'video'){
          document.querySelector('iframe').setAttribute('style', 'display: block;')
          document.querySelector('iframe').src = data.url
          document.querySelector('img').setAttribute('style', 'display: none;')
        }
      })
      
      .catch(err => {
          console.log(`error ${err}`)
      })
}

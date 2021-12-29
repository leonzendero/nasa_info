const url = 'https://api.nasa.gov/planetary/apod?api_key=4hdA1DWpaOJQG2VndK3ZcCTAjO8Iab3LSBdhymZm';

const nasaImage = document.getElementById('nasa_image');
const nasaTitle = document.getElementById('nasa_title');
const nasaText = document.getElementById('nasa_text');

fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        console.log(data)
        nasaImage.src = data.hdurl
        nasaTitle.innerText = data.title
        nasaText.innerText = `"${data.explanation}"`
    })
    .catch(function(error) {
        console.log(error)
    });
const fetchImages = () => {
    // Make a request for a user with a given ID
    axios.get('https://lanciweb.github.io/demo/api/pictures/')
         .then(response => loadImages(response.data))
         .catch(error => console.log(error))
}

const loadImages = images => {
    let imgsHtml = "";

    images.forEach(image => {
        imgsHtml += `
                <div class="card p-4 position-relative" style="width: 25rem">
                    <img src="./assets/img/pin.svg" class="position-absolute top-0 start-50 translate-middle">
                    <img src="${image.url}" class="card-img-top" alt="...">
                    <div class="card-body p-0 pt-4">
                        <h4 class="card-title text-edu">${image.title}</h4>
                        <h6 class="card-date text-sometype">${image.date}</h6>
                    </div>
                </div>
        `
    });

    document.getElementById("card-container").innerHTML = imgsHtml;
}

fetchImages()
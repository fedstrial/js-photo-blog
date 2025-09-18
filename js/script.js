const fetchImages = () => {
    // Make a request for a user with a given ID
    axios.get('https://lanciweb.github.io/demo/api/pictures/')
        .then(response => {
            loadImages(response.data);
            addEventHandlers()
        })
        .catch(error => console.log(error))
}

const loadImages = images => {
    let imgsHtml = "";

    images.forEach(image => {
        imgsHtml += `
                <div class="card p-4 position-relative" style="width: 25rem">
                    <img src="./assets/img/pin.svg" class="position-absolute top-0 start-50 translate-middle pin">
                    <img src="${image.url}" class="card-img-top" alt="...">
                    <div class="card-body p-0 pt-4">
                        <h4 class="card-title text-edu">${image.title}</h4>
                        <h6 class="card-date text-sometype">${image.date}</h6>
                    </div>
                </div>
        `;
    });

    document.getElementById("card-container").innerHTML = imgsHtml;
}

const addEventHandlers = () => {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => card.addEventListener("click", () => createOverlay(card.querySelector(".card-img-top"))));
}

const createOverlay = image => {
    const overlay = document.createElement("div");
    overlay.classList = "w-100 h-100 position-fixed top-0 d-flex flex-column justify-content-center align-items-center";
    overlay.id = "overlay"
    overlay.style.zIndex = "9999";
    overlay.style.backgroundColor = "#00000080";

    const overlayImg = image.cloneNode(true);
    overlayImg.style.maxWidth = "80%"
    overlayImg.style.width = "800px"
    overlayImg.classList = "mb-5"

    const btn = document.createElement("button")
    btn.classList = "btn btn-primary btn-lg"
    btn.textContent = "Chiudi"

    btn.addEventListener("click", () => document.getElementById("overlay").remove());

    overlay.appendChild(overlayImg)
    overlay.appendChild(btn)

    document.querySelector("body").appendChild(overlay);
}

fetchImages();
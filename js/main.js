(() => {
    console.log('fired!');

    let lightBox = document.querySelector(".lightbox"),
        closeLB = lightBox.querySelector("span"),
        thumbnail = document.querySelectorAll(".imgThumb");
        //arrows here

    //GALLERY FUNCTION
    function showLightbox() {
        lightBox.style.display = 'block';
    }
        
    function hideLightbox() {
        lightBox.style.display = 'none';
    }

    function changeImg(){
        debugger;
        //change images
    }

    thumbnail.forEach(thumb => thumb.addEventListener("click", showLightbox));
    closeLB.addEventListener("click", hideLightbox);

    //CONTACT PAGE DATA
    fetch('./data/contactData.json')
        .then(res => res.json())
        .then(data => {
            debugger;
            console.log(data);
        //handle data in Contact Page
        })
        .catch((err) => {
            console.log("Sorry! Something is wrong");

        })
})();
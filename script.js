const content = {
    "Hot Air Balloon": `<h1 class="heading">Hot Air Balloon</h1>
                    <p><b>Drift Above the World in a Hot Air Balloon</b>
                        <br>Soar into the sky and watch the earth slowly shrink beneath your feet. A hot air balloon ride is not just a flight — it's a peaceful escape into the clouds. Glide over rolling hills, winding rivers, and golden sunrise horizons as the world wakes up below. Whether you're chasing romance or just the thrill of something unforgettable, this sky-high adventure delivers pure magic.</p>
                    <a href="#">Read More <span>→</span></a>`,
    "Boating": `<h1 class="heading">Boating</h1>
                    <p><b>Set Sail into Serenity with a Boating Adventure</b>

                    <br>Leave the noise behind and glide into calm waters where every ripple tells a story. Whether you're paddling through quiet lagoons, cruising on a sunlit lake, or feeling the thrill of the open sea, boating lets you explore nature from a whole new perspective.</p>
                    <a href="#">Read More <span>→</span>
                    </a>`,
    "Biking": `<h1 class="heading">Biking</h1>
                    <p><b>Pedal Into Adventure with a Biking Escape</b>
                    <br>Feel the wind in your hair and the world at your wheels. Biking isn’t just a way to get around — it’s a journey through hidden trails, scenic coastlines, and charming backroads you’d never see from a car. Whether you're cruising through the countryside or racing down mountain paths, biking connects you to nature, freedom, and thrill in the purest form. Every turn is a new view, every ride an unforgettable story.
                    <a href="#">Read More <span>→</span>
                    </a>`
}

function changebg(event) {
    var header = document.getElementsByClassName("header")[0];
    var imageURL = event.target.src;
    var heading = event.target.alt;
    console.log(imageURL, heading)
    const contentText = document.querySelector(".content-text");
    contentText.innerHTML = ''
    void contentText.offsetWidth;

    header.style.backgroundImage = `linear-gradient(
            rgba(255, 255, 255, 0.45),
            rgba(4, 9, 30, 0)
          ), url(${imageURL})`;
    header.style.backgroundPosition = "0 0";


    var activeElements = document.getElementsByClassName("active");
    for (var i = 0; i < activeElements.length; i++) {
        activeElements[i].classList.remove("active");
    }

    event.target.classList.add("active");

    contentText.innerHTML = content[heading];
}
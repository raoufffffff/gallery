let fucos = document.querySelector(".focus")
let raw = document.querySelector(".main-gallory");
let a = document.querySelector(".a");
let span = document.querySelector(".switch");
let seconedSpan = document.querySelectorAll(".span")
let focusMain = document.querySelector(".focus-main-img");
let focusImg = document.querySelector(".focus-img");
//


let image = [
    {
        img: "image/1.jpg",
        id: 1
    },
    {
        img: "image/2.jpg",
        id: 2
    },
    {
        img: "image/3.jpg",
        id: 3
    },
    {
        img: "image/4.jpg",
        id: 4
    },
    {
        img: "image/5.jpg",
        id: 5
    },
    {
        img: "image/6.jpg",
        id: 6
    },
    {
        img: "image/7.jpg",
        id: 7
    },
    {
        img: "image/8.jpg",
        id: 8
    },
    {
        img: "image/9.jpg",
        id: 9
    },
    {
        img: "image/10.jpg",
        id: 10
    }
];


console.log(fucos);

window.addEventListener("DOMContentLoaded", () => {
    let gallory = image.map(e => {
        return (
            `<div class="photo  col-lg-3 col-md-4 col-sm-6 mb-3 mt-3"
            data-id=${e.id}>
                    <img class="img-fluid rounded-3 gallory-img" src= ${e.img}
                     alt="photo">
                </div>`
        )
    }).join("");
    raw.innerHTML = gallory;
    document.querySelectorAll(".photo").forEach(e => {
        e.addEventListener("click", () => {
            let id = e.dataset.id
            hanldel(id)
            seconedSpan.forEach(e => {
                e.addEventListener("click", () => {
                    if (id === 1) {
                        e.classList.contains(".left");
                    } else if (id === image.length) {

                    }
                    if (e.classList.contains(".lfet")) {
                        id--
                        fucoss(id)
                    } else {
                        id++
                        fucoss(id)
                    }
                })
            })
        })
    })
    // color modifications

    a.addEventListener("click", () => {
        swiitch()
    })

})

fucos.addEventListener("click", () => {
    nick()
    console.log("hello");
})

let hand = true

function hanldel(n) {
    if (hand) {
        raw.classList.add("d-none")
        fucos.classList.remove("d-none")
        hand = !hand
        fucoss(n)
        spp(n)

    }

}

function nick() {
    fucos.classList.add("d-none")
    raw.classList.remove("d-none")
    hand = !hand
    seconedSpan.forEach((e) => {
        e.classList.add("d-none")
    })
}

function spp(n) {
    seconedSpan.forEach(e => {
        e.classList.remove("d-none")
        if (n === 1) {
            e.classList.contains("left") && e.classlist.add("d-none")
        } else if (n === image.length) {
            e.classList.contains("right") && e.classlist.add("d-none")
        }
    })
}

function fucoss(n) {
    focusImg.src = `image/${n}.jpg`
    focusMain.src = `image/${n}.jpg`
}




/////
////////
// ///////
////////////

let mod = true;


function swiitch() {
    if (mod) {
        dark()
        span.innerHTML = "lghit";
        mod = !mod;
    } else {
        lghit()
        span.innerHTML = "dark";
        mod = !mod;
    }
}

function dark() {
    document.body.style.backgroundColor = "#000"
    a.style.color = "#fff"
    span.style.color = "#fff"
    seconedSpan.forEach((e) => {
        e.style.color = "#fff"
    })
}

function lghit() {
    document.body.style.backgroundColor = "#fff"
    a.style.color = "#000"
    span.style.color = "#000"
    seconedSpan.forEach((e) => {
        e.style.color = "#000"
    })
}







// Header Section 

$(".header .burger-icon").click(function () {

    $(".header ul").slideToggle()

})

$(".header ul li a").click(function (Event) {

    Event.preventDefault()

    $(this).addClass("active").parent().siblings().find("a").removeClass("active")

    $("html , body").animate({

        scrollTop: $( "." + $(this).data("scroll")).offset().top - $(".header").innerHeight()

    })

})

$(window).scroll(function () {

    if ($(window).scrollTop() >= 800) {

        $(".header").addClass("active")

    } else {

        $(".header").removeClass("active")

    }

})

// Landing Section 

// let LandingSection = document.querySelector(".landing")

// let LandingArrey = ["01.jpg" , "02.jpg" , "03.jpg" , "10.jpg"]

// let RandomNumber = Math.floor(Math.random() * LandingArrey.length)

// setInterval(function () {

//     let RandomNumber = Math.floor(Math.random() * LandingArrey.length)

//     LandingSection.style.backgroundImage = "url(images/Slider/"+ LandingArrey[RandomNumber] +")"

// } , 10000)

let slider = document.querySelector(".landing .slider")

let sliderItems = slider.getElementsByClassName("slide")

function next() {

    slider.append(sliderItems[0])

}

function prev() {

    slider.prepend(sliderItems[sliderItems.length - 1])

}


// let Type = "WE ARE COSMIX"

// let i = 0

// let Typing = setInterval(function () {

//     document.querySelector(".landing .type").innerHTML += Type[i];

//     i++

//     if (i === Type.length) {

//         clearInterval(Typing)

//     }

// } , 300)

$(".landing a").click(function (event) {

    event.preventDefault()

    $("html , body").animate({

        scrollTop: $("." + $(this).data("start")).offset().top - $(".header").innerHeight()

    })

})

$(window).ready(function () {

    $(".landing .slide").animate({

        opacity: 1

    })

})

// Box Model Section 

$(".box-model .icon").click(function () {

    $(".box-model").toggleClass("active")

})

$(".box-model ul div").click(function () {

    $(this).addClass('active').siblings().removeClass("active")

})

document.body.classList.add(localStorage.getItem("bodyColor"))

let boxModelColor = document.querySelectorAll('.box-model ul div')

let bodyColor = []

for (let i = 0; i < boxModelColor.length; i++) {

    bodyColor.push(boxModelColor[i].getAttribute("data-color"))

    boxModelColor[i].addEventListener("click" , function () {

        document.body.classList.remove(...bodyColor)

        document.body.classList.add(this.getAttribute("data-color"))

        localStorage.setItem("bodyColor" , this.getAttribute("data-color"))


    })
}

// About Section 

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".about").offset().top - 400) {

        $(".about .hidden").animate({

            opacity: 1

        })

        $(".about .right").animate({

            right: 0,

            opacity: 1

        })

        $(".about .left").animate({

            left: 0,

            opacity: 1

        })

    }

})

// Free Slide 

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".free").offset().top - 400) {

        $(".free .hidden").animate({

            opacity: 1

        })

        $(".free .right").animate({

            right: 0, 

            opacity: 1

        })

        $(".free .left").animate({

            left: 0, 

            opacity: 1

        })

    }
})

// Services Section 

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".services").offset().top - 400) {

        $(".services .hidden").animate({

            opacity: 1

        })

        $(".services .right").animate({

            right: 0,

            opacity: 1

        })

        $(".services .left").animate({

            left: 0,

            opacity: 1

        })

    }

})

// Skills Section 

let skillsSection = document.querySelector(".services .skills")

let skillsOffsetTop = skillsSection.offsetTop

let skillsSpan = document.querySelectorAll(".services .skills span")

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".skills").offset().top - 400) {

        $(".skills .left").animate({

            left: 0,

            opacity: 1

        })

        $(".skills .right").animate({

            right: 0,

            opacity: 1

        })

        $(".skills .top").animate({

            top: 0,

            opacity: 1

        })

    }

})


// Features Section 

$(".feature .feat-head span").click(function () {

    $(this).addClass("active").siblings().removeClass("active")

    var feat = $(this).data("feat");

    console.log(feat)

    $(".feature .feat-content .div").fadeOut()

    $(".feature .feat-content ." + feat).delay(300).fadeIn()

})

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".feature").offset().top - 400) {

        $(".feature .hidden").animate({

            opacity: 1

        })

        $(".feature .top").animate({

            top: 0,

            opacity: 1

        })

        $(".feature .left").animate({

            left: 0,

            opacity: 1

        })

    }

})

// Portfolio Section 

$(".portfolio ul li").click(function () {

    $(this).addClass("active").siblings().removeClass("active")

    var Portfolio = $(this).data("portfolio")

    $(".portfolio .row .all").fadeOut()

    $(".portfolio .row ." + Portfolio).fadeIn()

})

let PortfolioImg = document.querySelectorAll(".portfolio img")

PortfolioImg.forEach((img)=> {

    img.addEventListener("click" , function () {

        let overlyBox = document.createElement("div")

        overlyBox.className = "overly-box"

        document.body.appendChild(overlyBox)

        let boxImg = document.createElement("div")

        boxImg.className = "box-img"

        overlyBox.appendChild(boxImg)

        if (img.alt !== "") {

            let BoxName = document.createElement("h2")

            BoxName.className = "box-name"

            boxImg.appendChild(BoxName)

            let BoxNameText = document.createTextNode(img.alt)

            BoxName.appendChild(BoxNameText)

        }

        let imgBox = document.createElement("img")

        imgBox.src = img.src

        boxImg.appendChild(imgBox)


        let closeButton = document.createElement("span")

        closeButton.className = "close-button"

        boxImg.appendChild(closeButton)

        closeButtonText = document.createTextNode("X")

        closeButton.appendChild(closeButtonText)

        document.addEventListener("click" , function (el) {

            if (el.target.className === "close-button") {

                boxImg.remove()

                overlyBox.remove()

            }

        })

    })

})

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".portfolio").offset().top - 400) {

        $(".portfolio .hidden").animate({

            opacity: 1

        })

        $(".portfolio .top").animate({

            top: 0,

            opacity: 1

        })

        $(".portfolio .left").animate({

            left: 0,

            opacity: 1

        })

        $(".portfolio .right").animate({

            right: 0,

            opacity: 1

        })

    }

})

// Pricing Section 

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".pricing").offset().top - 400) {

        $(".pricing .hidden").animate({

            opacity: 1

        })

        $(".pricing .top").animate({

            top: 0,

            opacity: 1

        })

        $(".pricing .bottom").animate({

            bottom: 0,

            opacity: 1

        })

        $(".pricing .left").animate({

            left: 0,

            opacity: 1

        })

        $(".pricing .right").animate({

            right: 0,

            opacity: 1

        })

    }

})

// Team Section 

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".team").offset().top - 400) {

        $(".team .hidden").animate({

            opacity: 1

        })

        $(".team .left").animate({

            left: 0, 

            opacity: 1

        })

        $(".team .top").animate({

            top: 0, 

            opacity: 1

        })

        $(".team .bottom").animate({

            bottom: 0, 

            opacity: 1

        })

        $(".team .right").animate({

            right: 0, 

            opacity: 1

        })

    }

})

// Testimonlis Section 

$(window).scroll(function () {

    if($(window).scrollTop() >= $(".testimonlis").offset().top - 400) {

        $(".testimonlis .hidden").animate({

            opacity: 1

        })

    }

})


// State Section 

let StateSection = document.querySelector(".state")

let StateOffsetTop = StateSection.offsetTop

let StateSpan = document.querySelectorAll(".state .box span")

let Started = false

function StartCounter(el) {

    let goal = el.dataset.goal;

    let Counte = setInterval(function () {

        el.textContent++;

        if (el.textContent === goal) {

            clearInterval(Counte)

        }

    })

}

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".state").offset().top - 400) {

        $(".state .left").animate({

            left: 0,

            opacity: 1

        })

        $(".state .top").animate({

            top: 0,

            opacity: 1

        })

        $(".state .bottom").animate({

            bottom: 0,

            opacity: 1

        })

        $(".state .right").animate({

            right: 0,

            opacity: 1

        })

    }

})

// Blog Section 

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".blog").offset().top - 400) {

        $(".blog .hidden").animate({

            opacity: 1

        })

        $(".blog .left").animate({

            left: 0,

            opacity: 1

        })

        $(".blog .top").animate({

            top: 0,

            opacity: 1

        })

        $(".blog .bottom").animate({

            bottom: 0,

            opacity: 1

        })

    }

})

// Client Section 

let clientContainer = document.querySelector(".clients .container")

let clientSlider = clientContainer.getElementsByClassName("slider")

function clientNext() {

    clientContainer.append(clientSlider[0])

}
function clientPrev() {

    clientContainer.prepend(clientSlider[clientSlider.length - 1])

}

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".clients").offset().top - 400) {

        $(".clients .left").animate({

            left: 0,

            opacity: 1

        })

        $(".clients .top").animate({

            top: 0,

            opacity: 1

        })

        $(".clients .bottom").animate({

            bottom: 0,

            opacity: 1

        })

        $(".clients .right").animate({

            right: 0,

            opacity: 1

        })

    }

})

// Contact Section 

let nameInput = document.querySelector(".contact form input:first-of-type") 

let emailInput = document.querySelector(".contact form input:nth-child(2)")

let subjectInput = document.querySelector(".contact form input:nth-child(4)")

let messageInput = document.querySelector(".contact form input:nth-child(6)")

let FormValid = document.querySelector(".contact form")

FormValid.onsubmit = function (Event) {

    Event.preventDefault()

    localStorage.setItem("userName" , nameInput.value)

    localStorage.setItem("Email" , emailInput.value)

    localStorage.setItem("Subject" , subjectInput.value)

    localStorage.setItem("Message" , messageInput.value)

}

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".contact").offset().top - 400) {

        $(".contact .hidden").animate({

            opacity: 1

        })

        $(".contact .right").animate({

            right: 0,

            opacity: 1

        })

        $(".contact .left").animate({

            left: 0,

            opacity: 1

        })

    }

})


// Button To Top 

$("span.up").click(function () {

$("html , body").animate({

    scrollTop: 0

})

})

$(window).scroll(function () {

    if ($(window).scrollTop() >= 800) {

        $("span.up").fadeIn()


    } else {

        $("span.up").fadeOut()

    }

})

// Loader Section 

// $(window).ready(function () {

//     $(".loader").fadeIn()

//     $(".loader").fadeOut(5000)

// })


window.onscroll = function () {

    // Skills Section 

    if (window.scrollY >= skillsOffsetTop - 400) {

        skillsSpan.forEach((span)=> {

            span.style.width = span.dataset.prog

        })

    }

    // State Section 

    if (window.scrollY >= StateOffsetTop - 400) {

        if (!Started) {

            StateSpan.forEach((el)=> {

                StartCounter(el)

            })

        }

        Started = true

    }

}
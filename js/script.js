
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

let LandingSection = document.querySelector(".landing")

let LandingArrey = ["01.jpg" , "02.jpg" , "03.jpg" , "10.jpg"]

let RandomNumber = Math.floor(Math.random() * LandingArrey.length)

setInterval(function () {

    let RandomNumber = Math.floor(Math.random() * LandingArrey.length)

    LandingSection.style.backgroundImage = "url(images/Slider/"+ LandingArrey[RandomNumber] +")"

} , 10000)


let Type = "WE ARE COSMIX"

let i = 0

let Typing = setInterval(function () {

    document.querySelector(".landing .type").innerHTML += Type[i];

    i++

    if (i === Type.length) {

        clearInterval(Typing)

    }

} , 300)

$(".landing a").click(function (event) {

    event.preventDefault()

    $("html , body").animate({

        scrollTop: $("." + $(this).data("start")).offset().top - $(".header").innerHeight()

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

// Skills Section 

let skillsSection = document.querySelector(".services .skills")

let skillsOffsetTop = skillsSection.offsetTop

let skillsSpan = document.querySelectorAll(".services .skills span")


// Features Section 

$(".feature .feat-head span").click(function () {

    $(this).addClass("active").siblings().removeClass("active")

    var feat = $(this).data("feat");

    console.log(feat)

    $(".feature .feat-content .div").fadeOut()

    $(".feature .feat-content ." + feat).delay(300).fadeIn()

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


window.onscroll = function () {

    // Skills Section 

    if (window.scrollY >= skillsOffsetTop - 400) {

        skillsSpan.forEach((span)=> {

            span.style.width = span.dataset.prog

        })

    }

    // State Section 

    if (window.scrollY >= StateOffsetTop) {

        if (!Started) {

            StateSpan.forEach((el)=> {

                StartCounter(el)

            })

        }

        Started = true

    }

}
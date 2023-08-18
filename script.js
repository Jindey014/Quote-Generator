//

let randomBtn = document.querySelector(".randBtn")
let nextBtn = document.querySelector(".nextBtn")
let prevBtn = document.querySelector(".prevBtn")
let texts = document.querySelector(".texts")
let quote = document.querySelector(".quote")
let writer = document.querySelector(".writer")
let toggle = document.querySelector(".toggle")
let body = document.querySelector("body")
let title = document.querySelector(".title")
let maincontent = document.querySelector(".main-content")
let small = document.querySelector(".small")
let medium = document.querySelector(".medium")
let large = document.querySelector(".large")
let all = document.querySelector(".filter-all")
let fitness = document.querySelector(".filter-fitness")
let studies = document.querySelector(".filter-studies")


toggle.addEventListener("click", () => {
    toggle.classList.toggle("active")
    body.classList.toggle("active")
    title.classList.toggle("active")
    quote.classList.toggle("active")
    maincontent.classList.toggle("active")
    prevBtn.classList.toggle("active")
    nextBtn.classList.toggle("active")
    randomBtn.classList.toggle("active")
    small.classList.toggle("active")
    medium.classList.toggle("active")
    large.classList.toggle("active")
    all.classList.toggle("active")
    fitness.classList.toggle("active")
    studies.classList.toggle("active")

})

small.addEventListener("click", () => {
    quote.style.fontSize = "12px"
    writer.style.fontSize = "12px"
})
medium.addEventListener("click", () => {
    quote.style.fontSize = "16px"
    writer.style.fontSize = "16px"
})
large.addEventListener("click", () => {
    quote.style.fontSize = "20px"
    writer.style.fontSize = "20px"
})

const dynamicQuote = (value, count) => {
    let quote_tag = '<span>' + value[count].quote + '</span>'
    let writer_tag = '<span>' + value[count].writer + '</span>'
    quote.innerHTML = quote_tag
    writer.innerHTML = writer_tag
}

const allquote = () => {
    let allarray = [];
    let count = 0;

    for (let filter_count = 0; filter_count < quotes.length - 1; filter_count++) {
        if (all.innerText && quotes[filter_count].category == "fitness" || all.innerText && quotes[filter_count].category == "studies") {
            allarray.push({ quote: quotes[filter_count].quote, writer: quotes[filter_count].writer })
        }
    }
    console.log(allarray)
    dynamicQuote(allarray, count)

    nextBtn.addEventListener("click", () => {
        if (count < allarray.length - 1) {
            count++
            dynamicQuote(allarray, count)

        } else {
            alert("No Quotes Remaining")
        }
    })
    prevBtn.addEventListener("click", () => {
        if (count === 0) {
            alert("This is the first quote")
        } else {
            count--
            dynamicQuote(allarray, count)
        }
    })
    randomBtn.addEventListener("click", () => {
        let random = Math.floor(Math.random() * allarray.length)

        dynamicQuote(allarray, random)
    })
}



fitness.addEventListener("click", () => {
    let fitarray = [];
    let count = 0;
    for (let filter_count = 0; filter_count < quotes.length - 1; filter_count++) {
        if (fitness.innerText && quotes[filter_count].category == "fitness") {
            fitarray.push({ quote: quotes[filter_count].quote, writer: quotes[filter_count].writer })
        }
    }
    console.log(fitarray)
    dynamicQuote(fitarray, count)
    nextBtn.addEventListener("click", () => {
        if (count < fitarray.length - 1) {
            count++
            dynamicQuote(fitarray, count)
        } else {
            alert("No Quotes Remaining")
        }
    })
    prevBtn.addEventListener("click", () => {
        if (count === 0) {
            alert("This is the first quote")
        } else {
            count--
            dynamicQuote(fitarray, count)
        }
    })
    randomBtn.addEventListener("click", () => {
        let random = Math.floor(Math.random() * fitarray.length)

        dynamicQuote(fitarray, random)
    })

})

studies.addEventListener("click", () => {
    let studiesarray = [];
    let count = 0;
    for (let filter_count = 0; filter_count < quotes.length - 1; filter_count++) {
        if (studies.innerText && quotes[filter_count].category == "studies") {
            studiesarray.push({ quote: quotes[filter_count].quote, writer: quotes[filter_count].writer })
        }
    }
    console.log(studiesarray)
    dynamicQuote(studiesarray, count)
    nextBtn.addEventListener("click", () => {
        if (count < studiesarray.length - 1) {
            count++
            dynamicQuote(studiesarray, count)
        } else {
            alert("No Quotes Remaining")
        }
    })
    prevBtn.addEventListener("click", () => {
        if (count === 0) {
            alert("This is the first quote")
        } else {
            count--
            dynamicQuote(studiesarray, count)
        }
    })
    randomBtn.addEventListener("click", () => {
        let random = Math.floor(Math.random() * studiesarray.length)
        dynamicQuote(studiesarray, random)
    })

})


window.onload = () => { allquote() }
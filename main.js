const prev= document.querySelector(".prev")
const next= document.querySelector(".next")
const slider= document.querySelector(".slider")

prev.addEventListener("clik", ()=>{
    slider.scrollLeft -=300
})

prev.addEventListener("clik", ()=>{
    slider.scrollLeft +=300
})
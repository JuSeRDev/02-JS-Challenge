const submit = document.querySelector(".submit")
const buttons = document.querySelectorAll(".button")
const clasification = document.querySelectorAll(".clasification")
const select = document.querySelector(".select")
const container1 = document.querySelector(".cont1")
const container2 = document.querySelector(".cont2")


buttons.forEach((button)=>{
    button.addEventListener("click", ()=>{
        clasification.forEach((i)=>{
            i.style.background = "var(--Dark-Blue)"
        })
        button.parentElement.style.background = "var(--orange)"
        button.style.color = "var(--Very-Dark-Blue)"
        let value = button.value
        select.innerHTML = value
        return value
    })
})

submit.addEventListener("click",()=>{
    container1.style.display = "none"
    container2.style.display = "block"
})
const form=document.querySelector("#form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    console.log(eventTitle.value)
    console.log(eventDate.value)
    console.log(category.value)
    console.log(description.value)
})
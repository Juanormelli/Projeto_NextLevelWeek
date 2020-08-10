document.querySelector("#add-time").addEventListener("click",cloneField)

function cloneField(){
    const addFields = document.querySelector(".schedule-item").cloneNode(true)
    const clearFields=addFields.querySelectorAll("input")
    clearFields.forEach(function (field){
        field=""
    });
    document.querySelector("#schedule-items").appendChild(addFields)

}
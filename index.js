const resultItem = document.getElementById("result");
const first = document.getElementById("enterFirstNumber");
const second = document.getElementById("enterSecondNumber");
const selectOPrt = document.getElementById("selectOperator");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");


btn1.addEventListener("click", () => {
    let result = 0;
    if (selectOPrt.value === "plus") {
       result = Number(first.value) + Number(second.value);
    } 
    else if (selectOPrt.value === "minus") {
        result = Number(first.value) - Number(second.value);
    } 
    else if (selectOPrt.value === "multiply") {
        result = Number(first.value) * Number(second.value);
    } 
    else if (selectOPrt.value === "divide") {
        result = Number(first.value) / Number(second.value);
    } 
    else if (selectOPrt.value === "space") { 
        result = "0";
    }
    console.log(result);
    resultItem.textContent = result;
})

btn2.addEventListener("click", () => {
    resultItem.textContent = "";
    first.value = "";
    second.value = "";
    selectOPrt.value = "space";
})

function renderImages(imgArr) {
    imgWrapper.textContent = "";
    imgArr.forEach((image) => {
      const img = document.createElement("img");
      img.src = image.src;
      img.classList.add(image.category);
      imgWrapper.appendChild(img);  
    });
  }
  
  renderImages(images);
  
  btnAll.addEventListener("click", () => {
    renderImages(images);
  });
  
  btnNature.addEventListener("click", () => {
    let nature = images.filter((img) => img.category === "nature");
    renderImages(nature);
  });
  
  btnAnimal.addEventListener("click", () => {
    let animal = images.filter((img) => img.category === "animal");
    renderImages(animal);
  });
  
  btnCity.addEventListener("click", () => {
    let city = images.filter((img) => img.category === "city");
    renderImages(city);
  });

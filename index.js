// let submit = document.querySelector('button');
// let input = document.querySelector('input');


// submit.addEventListener('click', () => {
  
//   movieObject.movieDirector = input.value;
//   console.log(movieObject);
// })

// console.log(movieObject)


let pageContainer = document.createElement("div")
  document.body.appendChild(pageContainer)
  pageContainer.classList.add("pageContainer")
  pageContainer.style = "display:flex; flex-direction: row; width: 100%; height: 100vh; margin: 0; gap:5rem; background-color:grey; padding: 10rem"
// Div-ul din stanga cu imput uri 
let inputDiv = document.createElement("div")
  pageContainer.appendChild(inputDiv)
  inputDiv.classList.add("inputDiv")
  inputDiv.style = "display:flex; flex-direction: column; ;padding:2rem; border-radius:10px; background: rgb(154,255,103); background: linear-gradient(90deg, rgba(154,255,103,1) 0%, rgba(0,190,255,1) 100%); border: 5px solid black"
let fNamePara = document.createElement("h4")
    inputDiv.appendChild(fNamePara)
    fNamePara.innerHTML = "First Name"
let firstNameImput = document.getElementById("firstNameInput")
  inputDiv.appendChild(firstNameImput)
let lNamePara = document.createElement("h4")
    inputDiv.appendChild(lNamePara)
    lNamePara.innerHTML = "Last Name"
let lastNameImput = document.getElementById("lastNameInput")
  inputDiv.appendChild(lastNameImput)
let genderPara = document.createElement("h4")
  inputDiv.appendChild(genderPara)
  genderPara.innerHTML = "Gender"

let maleGenderDiv = document.createElement("div")
  inputDiv.appendChild(maleGenderDiv)
  maleGenderDiv.style = "display:flex; flex-direction:row; padding: 0; align-items: center; justify-content: center; gap: 10px"
    let radioMale = document.getElementById("radioBtnM")
    maleGenderDiv.appendChild(radioMale)
    let maleTxt = document.createElement("h4")
    maleGenderDiv.appendChild(maleTxt)
      maleTxt.innerHTML = "Male"

let femaleGenderDiv = document.createElement("div")
  inputDiv.appendChild(femaleGenderDiv)
  femaleGenderDiv.style = "display:flex; flex-direction:row; padding: 0; align-items: center; justify-content: center; gap: 10px"
    let radioFemale = document.getElementById("radioBtnF")
      femaleGenderDiv.appendChild(radioFemale)
      let femaleTxt = document.createElement("h4")
      femaleGenderDiv.appendChild(femaleTxt)
      femaleTxt.innerHTML = "Female"

let messageInput = document.getElementById("messageInput")
  inputDiv.appendChild(messageInput)
let submitBtn = document.getElementById("submitBtn")
  inputDiv.appendChild(submitBtn)


// Div-ul din dreapta cu output-uri
  let outputDiv = document.createElement("div")
    pageContainer.appendChild(outputDiv)
    outputDiv.classList.add("outputDiv")
    outputDiv.style = "display: flex; flex-direction: column; padding: 1rem; justify-content: start; align-items:center; border-radius:10px; height: 100%; width: 50vw;  background: rgb(154,255,103); background: linear-gradient(90deg, rgba(154,255,103,1) 0%, rgba(0,190,255,1) 100%); border: 5px solid black"
  let outputContainer = document.createElement("div")
    outputDiv.appendChild(outputContainer)
    outputContainer.classList.add("outputContainer")
    outputContainer.style = "display: flex; height: 75px; width: 300px; border:3px solid black; border-radius:10px; background-color: white"
  let messageParagraph = document.createElement("p")
    outputContainer.appendChild(messageParagraph)
    // messageParagraph.innerHTML = "This is a messaage"
  let authorGenreParagraph = document.createElement("p")
    outputContainer.appendChild(authorGenreParagraph)
    // authorGenreParagraph.innerHTML = "by Name genre"
    authorGenreParagraph.style = "display: flex; align-items: end;"

// JS SCRIPT

  let radioBtnValue = "";
  submitBtn.addEventListener("click", () => {
    document.getElementsByName("genderRadioBtn")
    .forEach(radio => {
        if(radio.checked) {
          radioBtnValue = radio.value;
        }
    })
 
      messageParagraph.innerHTML = `"${messageInput.value}"`
      authorGenreParagraph.innerHTML = `by ${firstNameImput.value} ${lastNameImput.value}, ${radioBtnValue} `
    })
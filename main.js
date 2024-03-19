const randomNumber = Match.round(Match.random()*10)
let xAttempts = 1






function handleclick(event) {
    event.preventDefault()
  
    const inputNumber = document.querySelector("#inputNumber")

    xAttempts++

    console.log(xAttempts)
}
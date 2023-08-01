document.querySelector('#help').addEventListener('click', fizzBuzz)



function fizzBuzz() {
    const image1 = document.createElement('img')
    image1.src = "img/FizzBuzz.jpg"

    const image2 = document.createElement('img')
    image2.src = "img/Buzz-Aldrin.jpg"

    let num1 = Number(document.querySelector('input').value)
    document.querySelector('#stops').innerText = " "

    for (let i = 1; i <= num1; i++) {
        
        if  (i % 3 === 0 && i % 5 === 0) {
            document.querySelector('#stops').innerText += "\n FizzBuzz!"
            // document.querySelector('#listItem').innerHTML = image1
        } else if (i % 5 === 0) {
            document.querySelector('#stops').innerText += "\n Buzz!"
            // document.querySelector('#stops').attribute +=(image2)
        } else if (i % 3 === 0) {
            document.querySelector('#stops').innerText += "\n Fizz!"
        } else {
            document.querySelector('#stops').innerText += `\n ${i}`

        }
    }   
}

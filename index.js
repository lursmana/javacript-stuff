const submit = document.getElementById('submit')

const result = document.getElementsByClassName('result')

const width = document.getElementById('width')

const length1 = document.getElementById('length')

function calculateArea() {
    const l = parseFloat(length1.value)
    const w = parseFloat(width.value)
    const area = l * w
    console.log(result)
    result[0].textContent = "ფართობი = " + area;
}



submit.addEventListener('click', (event) => {
    event.preventDefault()
    calculateArea()
})







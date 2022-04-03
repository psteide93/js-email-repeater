const button = document.querySelector("button")
const output = document.querySelector("output")
const input = document.querySelector("input")

button.addEventListener("click", () => {
    output.textContent = input.value
})
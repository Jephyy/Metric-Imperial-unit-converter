
const convertBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("input-el")
const length = 3.28084
const volume = 0.264172
const mass = 2.20462
const lengthP = document.getElementById("length")
const volumeP = document.getElementById('volume')
const massP = document.getElementById('mass')

function convert(){
	lengthP.textContent = `${parseInt(inputEl.value)} meters = ${(parseInt(inputEl.value) * length).toFixed(3)} feet | ${parseInt(inputEl.value)} feet = ${(parseInt(inputEl.value) / length).toFixed(3)} meters`
	volumeP.textContent = `${parseInt(inputEl.value)} litres = ${(parseInt(inputEl.value) * volume).toFixed(3)} gallons | ${parseInt(inputEl.value)} gallons = ${(parseInt(inputEl.value) / volume).toFixed(3)} litres`
	massP.textContent = `${parseInt(inputEl.value)} kilos = ${(parseInt(inputEl.value) * mass).toFixed(3)} pounds | ${parseInt(inputEl.value)} pounds = ${(parseInt(inputEl.value) / mass).toFixed(3)} kilos`
}

convertBtn.addEventListener("click", function(){
	convert()
	inputEl.value = ""
})
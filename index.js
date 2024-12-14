/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let convertBtn = document.getElementById('convert')
let num = document.getElementById('num')
let lengthEl = document.getElementById('length')
let volumeEl = document.getElementById('volume')
let massEl = document.getElementById('mass')

convertBtn.addEventListener('click', function() {
    let numEl = num.value
    lengthEl.textContent = `${numEl} meters = ${(numEl * 3.2808).toFixed(3)} feet | ${numEl} feet = ${(numEl * 0.3048).toFixed(3)} meters`
    volumeEl.textContent = `${numEl} liters = ${(numEl * 0.2642).toFixed(3)} gallons | ${numEl} gallons = ${(numEl * 3.7854).toFixed(3)} liters`
    massEl.textContent = `${numEl} kilos = ${(numEl * 2.2046).toFixed(3)} pounds | ${numEl} pounds = ${(numEl * 0.45359).toFixed(3)} kilos`
    
    
    
    
})
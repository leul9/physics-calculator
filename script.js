const distance= document.getElementById("disInput1");
const time= document.getElementById("timeInput1");
const speed= document.getElementById("speedDisplay");

const velocity= document.getElementById("disInput2");
const timeTwo= document.getElementById("timeInput2");
const accDisplay= document.getElementById("accDisplay");

const velocityTwo= document.getElementById("disInput3");
const mass= document.getElementById("massInput3");
const KeDisplay= document.getElementById("KeDisplay");

const heightInput= document.getElementById("heightInput");
const massTwo= document.getElementById("massInput4");
const PeDisplay= document.getElementById("PeDisplay");

const energyInput= document.getElementById("energyInput");
const powerTime= document.getElementById("powerTime");
const PowerDisplay= document.getElementById("PowerDisplay");




function speedCalculater(){
    const calculatedSpeed= (parseFloat( distance.value)/ parseFloat(time.value)).toFixed(2)
   
   if(distance.value=== "" ||  time.value === ""){
     speed.textContent= `please insert a number!`;
   }
   else{
     speed.textContent= `${calculatedSpeed} m/s`;
   }
}

function accCalculater(){
    let calculatedAcc= (parseFloat(velocity.value)/ parseFloat(timeTwo.value)).toFixed(2)
    

      if(velocity.value=== "" ||  timeTwo.value === ""){
        accDisplay.textContent= `please insert a number!`;
      }
      else{
        let accDisplay = document.getElementById("accDisplay");
        accDisplay.innerHTML = `${calculatedAcc} m/s<sup>2</sup>`;
      }
}

function KeCalculater(){
    let half= 0.5;
    let calculatedKe= (half *mass.value *(velocityTwo.value*velocityTwo.value)).toFixed(2)
    

      if(mass.value=== "" ||  velocityTwo === ""){
        KeDisplay.textContent= `please insert a number!`;
      }
      else{
        KeDisplay.textContent= `${calculatedKe} J`;
      }
}

function PowerCalculater(){
    
    let calculatedPower=  (energyInput.value /powerTime.value).toFixed(2)
    

      if(energyInput.value=== "" ||  powerTime.value === ""){
        PowerDisplay.textContent= `please insert a number!`;
      }
      else{
        PowerDisplay.textContent= `${calculatedPower} W`;
      }
}

function PeCalculater(){
    let gravity= 10;
    let calculatedPe=  ( gravity*heightInput.value *massTwo.value).toFixed(2)
    

      if(heightInput.value=== "" ||  massTwo.value === ""){
        PeDisplay.textContent= `please insert a number!`;
      }
      else{
        PeDisplay.textContent= `${calculatedPe} J`;
      }
}
const minNumber=2
const maxNumber=10

const answer=Math.floor(Math.random()* (maxNumber ,minNumber+1 ))+minNumber
let attempts=0
let guss
let runing=true

while(runing){
    guss=window.prompt(`corect number ${minNumber}-${maxNumber}`)
    guss=Number(guss)
    if(isNaN(guss)){
        window.alert("plase enter number valid")
    }else if(guss<minNumber || guss>maxNumber){
           window.alert("plase enter number valid")
    }else{
        attempts++
        if(guss<answer){
            window.alert("too low tra agin")
        }else if(guss>answer){
           window.alert("too low tra agin")
        }else{
            window.alert(`correct the anser was  ${answer}.it took${attempts}`)
        }
        
    }
}
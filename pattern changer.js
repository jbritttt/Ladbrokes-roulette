
let looseCounter2 = 100

let everyThreeGoes2 = 0

let arrayOfPreviousLosseCounter2 = []

async function patternChanger(colour){

    let currentNum = 0
  
    


    let selectedColor2 = colour
    let lastColorDraw = ''
    arrayOfPreviousLosseCounter2.push(looseCounter2)
    everyThreeGoes2 = everyThreeGoes2 + 1
    console.log(arrayOfPreviousLosseCounter2)
    console.log('every 3', everyThreeGoes2)
    console.log('last color' , lastColorDraw)
    console.log('selected color' , selectedColor2)
    console.log(looseCounter2)
  
   
    await framesAll.waitForSelector("[data-automation-locator='element.Timer']",{timeout:0 })
    
    
    const innerText = await framesAll.evaluate(() => {
        return document.querySelector(".roulette-history--fOmuw.roulette-history_line--I4ifB").firstChild.innerText;
      });
    
      // const red =  await framesAll.waitForSelector('.roulette-history--fOmuw.roulette-history_line--I4ifB')
      currentNum = innerText
    
     lastColorDraw = []
     boardNumbers.forEach(item => {
  
        if(item[`${currentNum}`]){
    
            lastColorDraw = item[`${currentNum}`]
    
        }
    
       
    
    })

   
    if(everyThreeGoes2 == 4 && arrayOfPreviousLosseCounter2.slice(-1) - arrayOfPreviousLosseCounter2[0] >= 1 ){

        arrayOfPreviousLosseCounter2 = []
        everyThreeGoes2 = 0
        looseCounter = looseCounter2 
        setTimeout(run, 18000, 'red')
        return
    }


    if(everyThreeGoes2 == 4 ){
        everyThreeGoes2 = 0
        arrayOfPreviousLosseCounter2 = []
     
      
    }
   
    if(lastColorDraw !== selectedColor2 ){
        looseCounter2 = looseCounter2 + 1
    
    }else if(lastColorDraw == selectedColor2){
        looseCounter2 = looseCounter2 - 1
    }else;


    if (lastColorDraw == 'black'){

        await framesAll.waitForSelector('[data-automation-locator="betPlace.spots50x50-red"]')
        await framesAll.click('[data-automation-locator="betPlace.spots50x50-red"]'); 
        console.log('red was clicked')
      /*   await framesAll.waitForSelector('[data-automation-locator="element.closePopup"]')
        await framesAll.click('[data-automation-locator="element.closePopup"]');  */
      
        setTimeout(patternChanger, 18000, 'red')
        return
      
       
        

    }else if(lastColorDraw == 'red'){

        await framesAll.waitForSelector('[data-automation-locator="betPlace.spots50x50-black"]')
        await framesAll.click('[data-automation-locator="betPlace.spots50x50-black"]'); 
        console.log('black was clicked')
      /*   await framesAll.waitForSelector('[data-automation-locator="element.closePopup"]')
        await framesAll.click('[data-automation-locator="element.closePopup"]');  */
        setTimeout(patternChanger, 18000,'black')
        return
    }else if (lastColorDraw == 'green'){
        await framesAll.waitForSelector('[data-automation-locator="betPlace.spots50x50-red"]')
        await framesAll.click('[data-automation-locator="betPlace.spots50x50-red"]'); 
        console.log('red was clicked')
      /*   await framesAll.waitForSelector('[data-automation-locator="element.closePopup"]')
        await framesAll.click('[data-automation-locator="element.closePopup"]');  */
        looseCounter = looseCounter2 
        setTimeout(run, 18000,'red')

    }else;
    
}

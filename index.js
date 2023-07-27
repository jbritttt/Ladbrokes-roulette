// remove all unused code
// finish first and second dosen roulette strategy
// check for Iframe to close cookies pop up on login
// refactor code
// Create readme with detailed instructions on how it works, name of the roulette strategy 



const puppeteer = require("puppeteer");


(async () => {



  //roulette-bet-creator-button__logo-wrap--d4Voy
  
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();
  await page.goto("https://www.ladbrokes.com/en/livecasino");
  
  
  const myTimeout = setTimeout(login, 10000);


  async function login() {


   await page.waitForSelector("[data-testid='signin']");
   await page.click("[data-testid='signin']");

   await page.waitForSelector("#userId");
   await page.type("#userId", " *username goes here* ");
   await page.waitForSelector("[name='password']");
   await page.type("[name='password']", " *Password goes here* ");
   page.keyboard.press("Enter");  

   await page.waitForSelector(".rcp-fav-btn");

   await page.click(".rcp-fav-btn");

   await page.waitForSelector("#gameIdentifier_rpfavWidget_fav_gyml_playtechliveladbrokesroulette");

   await page.click("#gameIdentifier_rpfavWidget_fav_gyml_playtechliveladbrokesroulette");

   await page.content();

/*  await page.waitForSelector('.roulette-neighbours-amount-switcher__control roulette-neighbours-amount-switcher__control_minus');

await page.click('.roulette-neighbours-amount-switcher__control roulette-neighbours-amount-switcher__control_minus'); */ 

await new Promise((resolve) => setTimeout(resolve, 20000))
const frames = await page.frames()

const framesAll = frames.find((frame) => frame.name() === 'vendor-playtechliveladbrokesroulette') 




/*  await framesAll.waitForSelector('[data-automation-locator="button.betCreator"]');
await framesAll.click('[data-automation-locator="button.betCreator"]')   */



/* class = vendorGame
id= vendor-playtechliveladbrokesroulette  */


const myTimeout = setTimeout(run, 18000, 'black');


let savedLastThreeSpinResults = []

let savedResultsColors = []
let savedColorsFirstThree = []

let winCounter = 0


let counterToKeepServerConnected = 0


let lastFourTheSame = false


let loseCount = 0


async function run(color) {

    savedColorsFirstThree = []
    savedLastThreeSpinResults = []
    savedResultsColors = []


   const boardNumbers = [
    {"0": "green"},{"1" : "red"},{"2" : "black"},{"3" : "red"},{"4" : "black"},{"5" : "red"},{"6" : "black"},{"7" : "red"},{"8" : "black"},{"9" : "red"},{"10" : "black"},{"11" : "black"},{"12" : "red"},{"13" : "black"},{"14" : "red"},{"15" : "black"},{"16" : "red"},{"17" : "black"},{"18" : "red"},{"19" : "red"},{"20" : "black"},{"21" : "red"},{"22" : "black"},{"23" : "red"},{"24" : "black"},{"25" : "red"},{"26" : "black"},{"27" : "red"},{"28" : "black"},{"29" : "black"},{"30" : "red"},{"31" : "black"},{"32" : "red"},{"33" : "black"},{"34" : "red"},{"35" : "black"},{"36" : "red"}
]

 

  let currentNum = 0
  let lastColorDraw = ''
  let selectedColor = color
  

 
   await framesAll.waitForSelector("[data-automation-locator='element.Timer']",{timeout:0 })

   
   const spinResultOne = await framesAll.evaluate(() => {
    return document.querySelectorAll(".roulette-history-item--ei7kI")[0].innerText;
  });

  const spinResultTwo = await framesAll.evaluate(() => {
    return document.querySelectorAll(".roulette-history-item--ei7kI")[1].innerText;
  });

  const spinResultThree = await framesAll.evaluate(() => {
    return document.querySelectorAll(".roulette-history-item--ei7kI")[2].innerText;
  });

  const spinResultFourth = await framesAll.evaluate(() => {
    return document.querySelectorAll(".roulette-history-item--ei7kI")[3].innerText;
  });


  const spinResultFith = await framesAll.evaluate(() => {
    return document.querySelectorAll(".roulette-history-item--ei7kI")[4].innerText;
  });

  const spinResultSixth = await framesAll.evaluate(() => {
    return document.querySelectorAll(".roulette-history-item--ei7kI")[5].innerText;
  });

  const spinResultSeventh = await framesAll.evaluate(() => {
    return document.querySelectorAll(".roulette-history-item--ei7kI")[5].innerText;
  });

savedLastThreeSpinResults.push(spinResultOne)
savedLastThreeSpinResults.push(spinResultTwo)
savedLastThreeSpinResults.push(spinResultThree)
savedLastThreeSpinResults.push(spinResultFourth)
savedLastThreeSpinResults.push(spinResultFith)
savedLastThreeSpinResults.push(spinResultSixth) 
savedLastThreeSpinResults.push(spinResultSeventh) 

savedLastThreeSpinResults.forEach(num => {
    boardNumbers.forEach(item => {
      
        if(item[`${num}`]){
    
            savedResultsColors.push(item[`${num}`])
    
        }
    
    })
    })
    savedColorsFirstThree = savedResultsColors.slice(0,3)
    let savedColorsFirstFour = savedResultsColors.slice(0,4)
    let savedColorsFirstSix = savedResultsColors.slice(0,6)
    let savedColorsFirstFive = savedResultsColors.slice(0,5)

 /*   let child = await framesAll.$eval('.roulette-history--fOmuw.roulette-history_line--I4ifB', e =>e.children);
   console.log(child.innerHTML) */
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




  
/* if(winCounter == 3){

    winCounter = 0
}



if(lastColorDraw !== selectedColor && selectedColor !== undefined){
    winCounter = winCounter + 1
   
   }else {
    winCounter = 0

   }
   
 
   console.log('this is win counter inside run',winCounter)

   



if(winCounter == 0 ){
  await framesAll.waitForSelector(' [data-automation-locator="chipsPanel.chip10"]')
  await framesAll.click(' [data-automation-locator="chipsPanel.chip10"]'); 
 
}


if(winCounter == 1 ){
  await framesAll.waitForSelector(' [data-automation-locator="chipsPanel.chip20"]')
  await framesAll.click(' [data-automation-locator="chipsPanel.chip20"]'); 
 
}


 if(winCounter == 2 ){
    await framesAll.waitForSelector(' [data-automation-locator="chipsPanel.chip10"]')
    await framesAll.click(' [data-automation-locator="chipsPanel.chip10"]'); 
 
} 
 */



let savedLastThreeSpinResults2 = []

let savedResultsColors2 = []
let savedColorsFirstThree2 = []

let winCounter2 = 0
let profitCounter = 0
    


async function patternChanger(colour){




    savedColorsFirstThree2 = []
    savedLastThreeSpinResults2 = []
    savedResultsColors2 = []
  

    let selectedColor2 = colour
    let lastColorDraw2 = ''
 

   
  
    await framesAll.waitForSelector("[data-automation-locator='element.Timer']",{timeout:0 })

    
    const innerText = await framesAll.evaluate(() => {
        return document.querySelector(".roulette-history--fOmuw.roulette-history_line--I4ifB").firstChild.innerText;
      });
    
      
      

      
      // const red =  await framesAll.waitForSelector('.roulette-history--fOmuw.roulette-history_line--I4ifB')
      currentNum = innerText
    
     
     

     console.log('last color' , lastColorDraw2)
     console.log('selected color' , selectedColor2)


     boardNumbers.forEach(item => {
  
        if(item[`${currentNum}`]){
    
            lastColorDraw2 = item[`${currentNum}`]
    
        }
    
       
    
    })


    const spinResultOne2 = await framesAll.evaluate(() => {
        return document.querySelectorAll(".roulette-history-item--ei7kI")[0].innerText;
      });
    
      const spinResultTwo2 = await framesAll.evaluate(() => {
        return document.querySelectorAll(".roulette-history-item--ei7kI")[1].innerText;
      });
    
      const spinResultThree2 = await framesAll.evaluate(() => {
        return document.querySelectorAll(".roulette-history-item--ei7kI")[2].innerText;
      });
    
      const spinResultFourth2 = await framesAll.evaluate(() => {
        return document.querySelectorAll(".roulette-history-item--ei7kI")[3].innerText;
      });
    
    savedLastThreeSpinResults2.push(spinResultOne2)
    savedLastThreeSpinResults2.push(spinResultTwo2)
    savedLastThreeSpinResults2.push(spinResultThree2)
    savedLastThreeSpinResults2.push(spinResultFourth2)
    
    savedLastThreeSpinResults2.forEach(num => {
        boardNumbers.forEach(item => {
          
            if(item[`${num}`]){
        
                savedResultsColors2.push(item[`${num}`])
        
            }
        
        })
        })
        savedColorsFirstThree2 = savedResultsColors2.slice(0,3)


 
        

     /*        await framesAll.waitForSelector(' [data-automation-locator="chipsPanel.chip10"]')
           await framesAll.click(' [data-automation-locator="chipsPanel.chip10"]');  */

      /*      if(winCounter2 == 3){
            winCounter2 = 0
           
           } 


            if(lastColorDraw2 == selectedColor2 && selectedColor2 !== undefined){
            winCounter2 = winCounter2 + 1
          

           }else {
            winCounter2 = 0
           
           }

           if(lastColorDraw2 !== selectedColor2 && selectedColor2 !== undefined){
            profitCounter = profitCounter + 1
           }
           
           console.log('this is profit counter',profitCounter)
           console.log('this is win counter inside pattern',winCounter2)
        
        if(winCounter2 == 0 ){
          await framesAll.waitForSelector(' [data-automation-locator="chipsPanel.chip10"]')
          await framesAll.click(' [data-automation-locator="chipsPanel.chip10"]'); 
         
        }
        
        
        if(winCounter2 == 1 ){
          await framesAll.waitForSelector(' [data-automation-locator="chipsPanel.chip20"]')
          await framesAll.click(' [data-automation-locator="chipsPanel.chip20"]'); 
         
        }
        
         
         if(winCounter2 == 2 ){
            await framesAll.waitForSelector(' [data-automation-locator="chipsPanel.chip10"]')
            await framesAll.click(' [data-automation-locator="chipsPanel.chip10"]'); 
         
        }  
           */
   
        const blackBlackBlackGreen = ['black', 'black', 'black', 'green']

        const redRedRedGreen = ['red', 'red', 'red', 'green']
   
        const blackBlackBlack = ['black', 'black', 'black', 'red']

        const redRedRed = ['red', 'red', 'red', 'black']
        
        const redBlackBlackBlack = ['red', 'black', 'black', 'black']

        const blackRedRedRed = ['black', 'red', 'red', 'red']
    
       /*  const blackBlackRedRed = ['black', 'black', 'red', 'red']
    
        const redRedBlackBlack = ['red', 'red', 'black', 'black'] */
    
    
        const equalsChec = (a, b) => {
            return JSON.stringify(a) === JSON.stringify(b);
        }
        
        
      /*   if(profitCounter >= 2){
          profitCounter = 0
          setTimeout(run, 18000)
          return
        }
         */

        
        if(equalsChec(blackBlackBlack, savedResultsColors2) || equalsChec(redRedRed, savedResultsColors2) || equalsChec(blackBlackBlackGreen, savedResultsColors2) || equalsChec(redRedRedGreen, savedResultsColors2)){
        console.log('three colors in a row run was called')
    
        counterToKeepServerConnected = 0
            /* winCounter2 = 0
            counterToKeepServerConnected = 0 */
            if(lastColorDraw == 'red'){
              run('black')
            }else if(lastColorDraw == 'black'){
              run('red')
            }else{
              run('black')
            }
           
        return
        
        }
    

 /*    if(equalsChec(blackBlackRedRed, savedResultsColors2) || equalsChec(redRedBlackBlack, savedResultsColors2)){
    
        setTimeout(run,lastColorDraw2)
    return
    
    } */

    console.log('last 3 colors', savedColorsFirstThree2)
    console.log('last 4 colors',  savedResultsColors2)
   

   /*  if(everyThreeGoes2 == 4 && arrayOfPreviousLosseCounter2.slice(-1) - arrayOfPreviousLosseCounter2[0] >= 2 ){

        arrayOfPreviousLosseCounter2 = []
        everyThreeGoes2 = 0
        winCounter2 = 0
        looseCounter = looseCounter2 
        counterForClicks = counterForClicks2
        console.log('to many losses run was called')
        await framesAll.waitForSelector(' [data-automation-locator="chipsPanel.chip10"]')
        await framesAll.click(' [data-automation-locator="chipsPanel.chip10"]'); 
        setTimeout(run,lastColorDraw2)
        return
    } */

  /*   await framesAll.waitForSelector(' [data-automation-locator="chipsPanel.chip10"]')
    await framesAll.click(' [data-automation-locator="chipsPanel.chip10"]'); */
  
    //console.log(counterForClicks2)
    //singlesFunc2()

     async function singlesFunc2(){
      
      
    
  /*     await framesAll.waitForSelector('[data-automation-locator="betPlace.dozen-2nd12"]')
      await framesAll.click('[data-automation-locator="betPlace.dozen-2nd12"]');  
          console.log('red was clicked')
          await framesAll.waitForSelector('[data-automation-locator="betPlace.dozen-1st12"]')
          await framesAll.click('[data-automation-locator="betPlace.dozen-1st12"]');  */

          
         /*  await framesAll.waitForSelector('[data-automation-locator="betPlace.straight-0"]')
          await framesAll.click('[data-automation-locator="betPlace.straight-0"]');  
          setTimeout(patternChanger, 18000, 'black') */
    /*   //25
      await framesAll.waitForSelector('[data-automation-locator="betPlace.straight-25"]')
      await framesAll.click('[data-automation-locator="betPlace.straight-25"]'); 
      
      //26
      await framesAll.waitForSelector('[data-automation-locator="betPlace.straight-26"]')
      await framesAll.click('[data-automation-locator="betPlace.straight-26"]'); 
      
      //27
      await framesAll.waitForSelector('[data-automation-locator="betPlace.straight-27"]')
      await framesAll.click('[data-automation-locator="betPlace.straight-27"]'); 
      
      //28
      await framesAll.waitForSelector('[data-automation-locator="betPlace.straight-28"]')
      await framesAll.click('[data-automation-locator="betPlace.straight-28"]'); 
      
      //29
      await framesAll.waitForSelector('[data-automation-locator="betPlace.straight-29"]')
      await framesAll.click('[data-automation-locator="betPlace.straight-29"]'); 
      
      //30
      await framesAll.waitForSelector('[data-automation-locator="betPlace.straight-30"]')
      await framesAll.click('[data-automation-locator="betPlace.straight-30"]'); 
      
      //31
      await framesAll.waitForSelector('[data-automation-locator="betPlace.straight-31"]')
      await framesAll.click('[data-automation-locator="betPlace.straight-31"]'); 
      
      //32
      await framesAll.waitForSelector('[data-automation-locator="betPlace.straight-32"]')
      await framesAll.click('[data-automation-locator="betPlace.straight-32"]'); 
      
      //33
      await framesAll.waitForSelector('[data-automation-locator="betPlace.straight-33"]')
      await framesAll.click('[data-automation-locator="betPlace.straight-33"]'); 
    
      //34
      await framesAll.waitForSelector('[data-automation-locator="betPlace.straight-34"]')
      await framesAll.click('[data-automation-locator="betPlace.straight-34"]'); 
    
      //35
      await framesAll.waitForSelector('[data-automation-locator="betPlace.straight-35"]')
      await framesAll.click('[data-automation-locator="betPlace.straight-35"]'); 
    
      //36
      await framesAll.waitForSelector('[data-automation-locator="betPlace.straight-36"]')
      await framesAll.click('[data-automation-locator="betPlace.straight-36"]');  */
    
      }
 


async function redFunc2(){
 /*  await framesAll.waitForSelector(' [data-automation-locator="chipsPanel.chip100"]')
  await framesAll.click(' [data-automation-locator="chipsPanel.chip100"]');  */
  await framesAll.waitForSelector('[data-automation-locator="betPlace.dozen-2nd12"]')
  await framesAll.click('[data-automation-locator="betPlace.dozen-2nd12"]');  
      
      await framesAll.waitForSelector('[data-automation-locator="betPlace.dozen-1st12"]')
      await framesAll.click('[data-automation-locator="betPlace.dozen-1st12"]');
  

 /*    await framesAll.waitForSelector('[data-automation-locator="betPlace.spots50x50-red"]')
    await framesAll.click('[data-automation-locator="betPlace.spots50x50-red"]');  */
  

/*     if(counterForClicks == 0 && lastColorDraw2 !== selectedColor){
        await framesAll.waitForSelector('[data-automation-locator="betPlace.spots50x50-red"]')
        await framesAll.click('[data-automation-locator="betPlace.spots50x50-red"]'); 
} */



  /*    await framesAll.waitForSelector('[data-automation-locator="element.closePopup"]')
    await framesAll.click('[data-automation-locator="element.closePopup"]');   */
  
   
    setTimeout(patternChanger, 18000, 'black')



}




async function blackFunc2(){

/*   await framesAll.waitForSelector(' [data-automation-locator="chipsPanel.chip100"]')
  await framesAll.click(' [data-automation-locator="chipsPanel.chip100"]');  */
  await framesAll.waitForSelector('[data-automation-locator="betPlace.dozen-2nd12"]')
      await framesAll.click('[data-automation-locator="betPlace.dozen-2nd12"]');  
          console.log('red was clicked')
          await framesAll.waitForSelector('[data-automation-locator="betPlace.dozen-1st12"]')
          await framesAll.click('[data-automation-locator="betPlace.dozen-1st12"]');
 
      /*  await framesAll.waitForSelector('[data-automation-locator="betPlace.spots50x50-black"]')
       await framesAll.click('[data-automation-locator="betPlace.spots50x50-black"]'); */ 
     

   
       console.log('black was clicked')
   /*     if(counterForClicks == 0 && lastColorDraw2 == selectedColor){
           await framesAll.waitForSelector('[data-automation-locator="betPlace.spots50x50-black"]')
           await framesAll.click('[data-automation-locator="betPlace.spots50x50-black"]'); 
   } */
   
      

/* 
        await framesAll.waitForSelector('[data-automation-locator="element.closePopup"]')
       await framesAll.click('[data-automation-locator="element.closePopup"]');   */
       /* await framesAll.waitForSelector(' [data-automation-locator="chipsPanel.chip10"]')
       await framesAll.click(' [data-automation-locator="chipsPanel.chip10"]'); */
       
       setTimeout(patternChanger, 18000, 'red')
      }



    if (lastColorDraw2 == 'black'){
      redFunc2()
      
      //setTimeout(redFunc2, 1500)
      //redFunc2()
       
        

    }else if(lastColorDraw2 == 'red'){
      blackFunc2()
      
      //setTimeout(blackFunc2, 1500)
//blackFunc2()


    }else if (lastColorDraw2 == 'green'){

      setTimeout(run, 18000)

     /*    await framesAll.waitForSelector('[data-automation-locator="betPlace.spots50x50-red"]')
        await framesAll.click('[data-automation-locator="betPlace.spots50x50-red"]'); 
        console.log('red was clicked')
 */
    /*     if(counterForClicks == 0 && lastColorDraw == selectedColor){
            await framesAll.waitForSelector('[data-automation-locator="betPlace.spots50x50-red"]')
            await framesAll.click('[data-automation-locator="betPlace.spots50x50-red"]'); 
    }
     */
       
       /*  await framesAll.waitForSelector('[data-automation-locator="element.closePopup"]')
        await framesAll.click('[data-automation-locator="element.closePopup"]');   */
      
       /*  winCounter2 = 0
        winCounter = 0 */
      
    
        
    /* await framesAll.waitForSelector(' [data-automation-locator="chipsPanel.chip10"]')
    await framesAll.click(' [data-automation-locator="chipsPanel.chip10"]');  */

   /*  if(lastColorDraw == 'red'){
      run('black')
    }else if(lastColorDraw == 'black'){
      run('red')
    }else{
      run('black')
    }
   

    }else; */
     
}

}


  /* console.log('last color' , lastColorDraw)
  console.log('selected color' , selectedColor)
 

  console.log('las spins ',savedResultsColors)
  console.log('First Three colors ',savedColorsFirstThree) */

 
  
  const blackBlackRedRedBlackBlack = ['black', 'black', 'red','red', 'black', 'black']

  const redRedBlackBlackRedRed = ['red', 'red', 'black','black', 'red', 'red']
  
  const redBlackRedRedBlack = ['red','black','red','red', 'black']

  const blackRedBlackBlackRed = ['black','red','black','black', 'red']

  const redBlackBlackRedBlack = ['red','black','black','red', 'black']

  const blackRedRedBlackRed = ['black','red','red','black', 'red']

  const blackBlackBlackRedBlackRed = ['black', 'black', 'black','red', 'black', 'red']

  const redRedRedBlackRedBlack = ['red', 'red', 'red','black', 'red', 'black']

  const redRedRedRedBlackRedBlack = ['red', 'red', 'red', 'red', 'black', 'red','black']

  const blackBlackBlackBlackRedBlackRed = ['black', 'black', 'black', 'black', 'red', 'black', 'red']

  const redBlackRedBlack = ['red', 'black', 'red','black']
  
  const blackRedBlackRed = ['black', 'red', 'black','red']

  const redRedRed = ['black', 'black', 'black']
  
  const blackBlackBlack = ['red', 'red', 'red']

  

 /*  const equalsCheck = (a, b) => {
      return JSON.stringify(a) === JSON.stringify(b);
  } */
  
  /* 
    if(equalsCheck(redRedRed, savedColorsFirstThree) || equalsCheck(blackBlackBlack, savedColorsFirstThree) ){
  
    lastFourTheSame = true
  console.log('bets stared and lastFourTheSame set to true')
  }  */
   

 // counterToKeepServerConnected = counterToKeepServerConnected + 1
  


//here

/* if(equalsCheck(redBlackRedRedBlack, savedColorsFirstFive) || equalsCheck(blackRedBlackBlackRed, savedColorsFirstFive) ){
  
  lastFourTheSame = false
  savedResultsColors2 = savedResultsColors

console.log('bets stopped red black red detected')
setTimeout(run, 18000)
return
} 


if(equalsCheck(redBlackBlackRedBlack, savedColorsFirstFive) || equalsCheck(blackRedRedBlackRed, savedColorsFirstFive) ){
  
  lastFourTheSame = false
  savedResultsColors2 = savedResultsColors

console.log('bets stopped red black red detected')
setTimeout(run, 18000)
return
} 
 */
/* 
  if(equalsCheck(blackBlackRedRedBlackBlack, savedColorsFirstSix) || equalsCheck(redRedBlackBlackRedRed, savedColorsFirstSix) ){
  
    lastFourTheSame = false
    savedResultsColors2 = savedResultsColors

  console.log('bets stopped red black red detected')
  setTimeout(run, 18000)
return
  }  
 

  if(equalsCheck(blackBlackBlackRedBlackRed, savedColorsFirstSix) || equalsCheck(redRedRedBlackRedBlack, savedColorsFirstSix) ){
  
    lastFourTheSame = false
    savedResultsColors2 = savedResultsColors

  console.log('bets stopped red black red detected')
  setTimeout(run, 18000)
return
  }   */


/*   if(equalsCheck(redRedRedRedBlackRedBlack, savedResultsColors) || equalsCheck(blackBlackBlackBlackRedBlackRed, savedResultsColors) ){
  
    lastFourTheSame = false
    savedResultsColors2 = savedResultsColors

  console.log('bets stopped red black red detected')
  setTimeout(run, 18000)
return
  }  
 */




  //keep server awake
  

 /*  if(equalsCheck(redBlackRedBlack, savedColorsFirstFour) || equalsCheck(blackRedBlackRed, savedColorsFirstFour) ){
  
    lastFourTheSame = false
    savedResultsColors2 = savedResultsColors

  console.log('bets stopped red black red detected')
  patternChanger()
return
  }  


  
   //counterToKeepServerConnected = counterToKeepServerConnected + 1

console.log(counterToKeepServerConnected)
  if(counterToKeepServerConnected == 30 && lastColorDraw == 'black'){
    await framesAll.waitForSelector('[data-automation-locator="betPlace.spots50x50-black"]')
    await framesAll.click('[data-automation-locator="betPlace.spots50x50-black"]'); 
    counterToKeepServerConnected = 0
    setTimeout(run, 18000)
    return
  }

  if(counterToKeepServerConnected == 30 && lastColorDraw == 'red'){
    await framesAll.waitForSelector('[data-automation-locator="betPlace.spots50x50-red"]')
    await framesAll.click('[data-automation-locator="betPlace.spots50x50-red"]'); 
    counterToKeepServerConnected = 0
    setTimeout(run, 18000)
    return
  }  */

/*    if(equalsCheck(redBlackRed, savedColorsFirstThree) || equalsCheck(blackRedBlack, savedColorsFirstThree) || equalsCheck(blackRedGreen, savedColorsFirstThree) || equalsCheck(redBlackGreen, savedColorsFirstThree)  ){
   
    lastFourTheSame = false
     console.log('bad pattern bets where stopped and lastFourTheSame set to false')
   
    
     winCounter = 0
   
   
    
 
   

  
   
 return
 
 }   
 */


 /*  if(equalsCheck(redBlackRed, savedColorsFirstThree) || equalsCheck(blackRedBlack, savedColorsFirstThree) ){
  
    await framesAll.waitForSelector(' [data-automation-locator="chipsPanel.chip10"]')
    await framesAll.click(' [data-automation-locator="chipsPanel.chip10"]'); 
  
  }   */
  
  /*  if(equalsCheck(redBlackRed, savedColorsFirstThree) || equalsCheck(blackRedBlack, savedColorsFirstThree)){
    console.log('possible pattern,  run called')
    winCounter = 0
    await framesAll.waitForSelector(' [data-automation-locator="chipsPanel.chip10"]')
  await framesAll.click(' [data-automation-locator="chipsPanel.chip10"]'); 
  arrayOfPreviousLosseCounter = []
    setTimeout(run, 18000)

      return
      
      } */
      
    /*   if(lastFourTheSame == false){
        keepAwakeFunc()
      }
      
      async function keepAwakeFunc(){
      console.log('awake counter',counterToKeepServerConnected)
        if(counterToKeepServerConnected == 15){
          await framesAll.waitForSelector('[data-automation-locator="betPlace.spots50x50-19to36"]')
          await framesAll.click('[data-automation-locator="betPlace.spots50x50-19to36"]'); 
          counterToKeepServerConnected = 0
        
        }
      
           
         
      } */
      if(loseCount == 6 ){
        loseCount = 0
      }

if(spinResultOne > 24 || spinResultOne == 0){

loseCount = loseCount + 1 
redFunc()
}else if(spinResultOne < 25 && spinResultOne !== 0){
  loseCount = 0 
  redFunc()
  
}

console.log('This is lose count', loseCount)
console.log('This is last num draw', spinResultOne )

 /*      lastFourTheSame = false

if(lastColorDraw == 'red' && lastFourTheSame == true){
  //singlesFunc('red')
  counterToKeepServerConnected = 0
  redFunc()
    
  
}else if(lastColorDraw == 'black' && lastFourTheSame == true){
  //singlesFunc('black')
  counterToKeepServerConnected = 0
  blackFunc()
    
  
}else if(lastColorDraw == 'green' && lastFourTheSame == true){
  counterToKeepServerConnected = 0
  setTimeout(run, 18000)
  
 //greenFunc()

}else  {

    console.log('no matching pattern run was called again')
    //lastFourTheSame = false

  
    await framesAll.waitForSelector(' [data-automation-locator="chipsPanel.chip10"]')
  await framesAll.click(' [data-automation-locator="chipsPanel.chip10"]'); 
 
  
    setTimeout(run, 18000)
   
  
}  */

 
async function singlesFunc(val){


  await framesAll.waitForSelector('[data-automation-locator="betPlace.dozen-2nd12"]')
  await framesAll.click('[data-automation-locator="betPlace.dozen-2nd12"]');  
  
      console.log('red was clicked')
      await framesAll.waitForSelector('[data-automation-locator="betPlace.dozen-1st12"]')
      await framesAll.click('[data-automation-locator="betPlace.dozen-1st12"]'); 
      
      




  //25
  await framesAll.waitForSelector('[data-automation-locator="betPlace.straight-25"]')
  await framesAll.click('[data-automation-locator="betPlace.straight-25"]'); 
  
  //26
  await framesAll.waitForSelector('[data-automation-locator="betPlace.straight-26"]')
  await framesAll.click('[data-automation-locator="betPlace.straight-26"]'); 
  
  //27
  await framesAll.waitForSelector('[data-automation-locator="betPlace.straight-27"]')
  await framesAll.click('[data-automation-locator="betPlace.straight-27"]'); 
  
  //28
  await framesAll.waitForSelector('[data-automation-locator="betPlace.straight-28"]')
  await framesAll.click('[data-automation-locator="betPlace.straight-28"]'); 
  
  //29
  await framesAll.waitForSelector('[data-automation-locator="betPlace.straight-29"]')
  await framesAll.click('[data-automation-locator="betPlace.straight-29"]'); 
  
  //30
  await framesAll.waitForSelector('[data-automation-locator="betPlace.straight-30"]')
  await framesAll.click('[data-automation-locator="betPlace.straight-30"]'); 
  
  //31
  await framesAll.waitForSelector('[data-automation-locator="betPlace.straight-31"]')
  await framesAll.click('[data-automation-locator="betPlace.straight-31"]'); 
  
  //32
  await framesAll.waitForSelector('[data-automation-locator="betPlace.straight-32"]')
  await framesAll.click('[data-automation-locator="betPlace.straight-32"]'); 
  
  //33
  await framesAll.waitForSelector('[data-automation-locator="betPlace.straight-33"]')
  await framesAll.click('[data-automation-locator="betPlace.straight-33"]'); 

  //34
  await framesAll.waitForSelector('[data-automation-locator="betPlace.straight-34"]')
  await framesAll.click('[data-automation-locator="betPlace.straight-34"]'); 

  //35
  await framesAll.waitForSelector('[data-automation-locator="betPlace.straight-35"]')
  await framesAll.click('[data-automation-locator="betPlace.straight-35"]'); 

  //36
  await framesAll.waitForSelector('[data-automation-locator="betPlace.straight-36"]')
  await framesAll.click('[data-automation-locator="betPlace.straight-36"]');  


/* if(val == 'red'){
redFunc()
  }else{
    blackFunc()

  } */
 
}

async function greenFunc(){


    await framesAll.waitForSelector('[data-automation-locator="betPlace.spots50x50-red"]')
    await framesAll.click('[data-automation-locator="betPlace.spots50x50-red"]'); 
    
  
    console.log('red was clicked')
 /*    await framesAll.waitForSelector('[data-automation-locator="element.closePopup"]')
    await framesAll.click('[data-automation-locator="element.closePopup"]');   */
    /* await framesAll.waitForSelector(' [data-automation-locator="chipsPanel.chip10"]')
    await framesAll.click(' [data-automation-locator="chipsPanel.chip10"]'); */
   
    setTimeout(run, 18000)
}


async function blackFunc(){

  
 /*  await framesAll.waitForSelector('[data-automation-locator="betPlace.straight-0"]')
  await framesAll.click('[data-automation-locator="betPlace.straight-0"]');  */

  await framesAll.waitForSelector('[data-automation-locator="betPlace.dozen-2nd12"]')
  await framesAll.click('[data-automation-locator="betPlace.dozen-2nd12"]');  
  await framesAll.click('[data-automation-locator="betPlace.dozen-2nd12"]'); 
  
 /*  await framesAll.click('[data-automation-locator="betPlace.dozen-2nd12"]'); 
  await framesAll.click('[data-automation-locator="betPlace.dozen-2nd12"]'); 
  await framesAll.click('[data-automation-locator="betPlace.dozen-2nd12"]'); 
  await framesAll.click('[data-automation-locator="betPlace.dozen-2nd12"]'); 
  await framesAll.click('[data-automation-locator="betPlace.dozen-2nd12"]'); 
  await framesAll.click('[data-automation-locator="betPlace.dozen-2nd12"]');   */
      console.log('red was clicked')
      await framesAll.waitForSelector('[data-automation-locator="betPlace.dozen-1st12"]')
      await framesAll.click('[data-automation-locator="betPlace.dozen-1st12"]'); 
       await framesAll.click('[data-automation-locator="betPlace.dozen-1st12"]'); 
      
   /*    await framesAll.click('[data-automation-locator="betPlace.dozen-1st12"]'); 
      await framesAll.click('[data-automation-locator="betPlace.dozen-1st12"]'); 
      await framesAll.click('[data-automation-locator="betPlace.dozen-1st12"]'); 
      await framesAll.click('[data-automation-locator="betPlace.dozen-1st12"]'); 
      await framesAll.click('[data-automation-locator="betPlace.dozen-1st12"]'); 
      await framesAll.click('[data-automation-locator="betPlace.dozen-1st12"]');   */
      


/* 

  //25
  await framesAll.waitForSelector('[data-automation-locator="betPlace.straight-25"]')
  await framesAll.click('[data-automation-locator="betPlace.straight-25"]'); 
  
  //26
  await framesAll.waitForSelector('[data-automation-locator="betPlace.straight-26"]')
  await framesAll.click('[data-automation-locator="betPlace.straight-26"]'); 
  
  //27
  await framesAll.waitForSelector('[data-automation-locator="betPlace.straight-27"]')
  await framesAll.click('[data-automation-locator="betPlace.straight-27"]'); 
  
  //28
  await framesAll.waitForSelector('[data-automation-locator="betPlace.straight-28"]')
  await framesAll.click('[data-automation-locator="betPlace.straight-28"]'); 
  
  //29
  await framesAll.waitForSelector('[data-automation-locator="betPlace.straight-29"]')
  await framesAll.click('[data-automation-locator="betPlace.straight-29"]'); 
  
  //30
  await framesAll.waitForSelector('[data-automation-locator="betPlace.straight-30"]')
  await framesAll.click('[data-automation-locator="betPlace.straight-30"]'); 
  
  //31
  await framesAll.waitForSelector('[data-automation-locator="betPlace.straight-31"]')
  await framesAll.click('[data-automation-locator="betPlace.straight-31"]'); 
  
  //32
  await framesAll.waitForSelector('[data-automation-locator="betPlace.straight-32"]')
  await framesAll.click('[data-automation-locator="betPlace.straight-32"]'); 
  
  //33
  await framesAll.waitForSelector('[data-automation-locator="betPlace.straight-33"]')
  await framesAll.click('[data-automation-locator="betPlace.straight-33"]'); 

  //34
  await framesAll.waitForSelector('[data-automation-locator="betPlace.straight-34"]')
  await framesAll.click('[data-automation-locator="betPlace.straight-34"]'); 

  //35
  await framesAll.waitForSelector('[data-automation-locator="betPlace.straight-35"]')
  await framesAll.click('[data-automation-locator="betPlace.straight-35"]'); 

  //36
  await framesAll.waitForSelector('[data-automation-locator="betPlace.straight-36"]')
  await framesAll.click('[data-automation-locator="betPlace.straight-36"]');   */

    await framesAll.waitForSelector('[data-automation-locator="betPlace.spots50x50-black"]')
    await framesAll.click('[data-automation-locator="betPlace.spots50x50-black"]'); 
    await framesAll.click('[data-automation-locator="betPlace.spots50x50-black"]'); 
    
   /*  await framesAll.click('[data-automation-locator="betPlace.spots50x50-black"]'); 
    await framesAll.click('[data-automation-locator="betPlace.spots50x50-black"]'); 
    await framesAll.click('[data-automation-locator="betPlace.spots50x50-black"]'); 
    await framesAll.click('[data-automation-locator="betPlace.spots50x50-black"]'); 
    await framesAll.click('[data-automation-locator="betPlace.spots50x50-black"]'); 
    await framesAll.click('[data-automation-locator="betPlace.spots50x50-black"]');   */
    

    console.log('black was clicked')
   /*   await framesAll.waitForSelector('[data-automation-locator="element.closePopup"]')
    await framesAll.click('[data-automation-locator="element.closePopup"]');  */ 
   

  /*   if(lastColorDraw !== selectedColor){
        await framesAll.waitForSelector('[data-automation-locator="betPlace.spots50x50-black"]')
    await framesAll.click('[data-automation-locator="betPlace.spots50x50-black"]');
}
 
    */
/* await framesAll.waitForSelector(' [data-automation-locator="chipsPanel.chip10"]')
await framesAll.click(' [data-automation-locator="chipsPanel.chip10"]'); */

    setTimeout(run, 18000,'black')
}





async function redFunc(){
/*   await framesAll.waitForSelector('[data-automation-locator="betPlace.straight-0"]')
  await framesAll.click('[data-automation-locator="betPlace.straight-0"]');  */

  /* await framesAll.waitForSelector('[data-automation-locator="betPlace.spots50x50-red"]')
  await framesAll.click('[data-automation-locator="betPlace.spots50x50-red"]'); 
  await framesAll.click('[data-automation-locator="betPlace.spots50x50-red"]');  */
  
/*   await framesAll.click('[data-automation-locator="betPlace.spots50x50-red"]'); 
  await framesAll.click('[data-automation-locator="betPlace.spots50x50-red"]'); 
  await framesAll.click('[data-automation-locator="betPlace.spots50x50-red"]'); 
  await framesAll.click('[data-automation-locator="betPlace.spots50x50-red"]'); 
  await framesAll.click('[data-automation-locator="betPlace.spots50x50-red"]'); 
  await framesAll.click('[data-automation-locator="betPlace.spots50x50-red"]');  */ 


  await framesAll.waitForSelector('[data-automation-locator="betPlace.dozen-2nd12"]')
  await framesAll.click('[data-automation-locator="betPlace.dozen-2nd12"]');  
   await framesAll.click('[data-automation-locator="betPlace.dozen-2nd12"]'); 
 
/*   await framesAll.click('[data-automation-locator="betPlace.dozen-2nd12"]'); 
  await framesAll.click('[data-automation-locator="betPlace.dozen-2nd12"]'); 
  await framesAll.click('[data-automation-locator="betPlace.dozen-2nd12"]'); 
  await framesAll.click('[data-automation-locator="betPlace.dozen-2nd12"]'); 
  await framesAll.click('[data-automation-locator="betPlace.dozen-2nd12"]'); 
  await framesAll.click('[data-automation-locator="betPlace.dozen-2nd12"]');   */
      console.log('red was clicked')
      await framesAll.waitForSelector('[data-automation-locator="betPlace.dozen-1st12"]')
      await framesAll.click('[data-automation-locator="betPlace.dozen-1st12"]'); 
      await framesAll.click('[data-automation-locator="betPlace.dozen-1st12"]'); 
      
 /*      await framesAll.click('[data-automation-locator="betPlace.dozen-1st12"]'); 
      await framesAll.click('[data-automation-locator="betPlace.dozen-1st12"]'); 
      await framesAll.click('[data-automation-locator="betPlace.dozen-1st12"]'); 
      await framesAll.click('[data-automation-locator="betPlace.dozen-1st12"]'); 
      await framesAll.click('[data-automation-locator="betPlace.dozen-1st12"]'); 
      await framesAll.click('[data-automation-locator="betPlace.dozen-1st12"]');   */
      



/* 
  //25
  await framesAll.waitForSelector('[data-automation-locator="betPlace.straight-25"]')
  await framesAll.click('[data-automation-locator="betPlace.straight-25"]'); 
  
  //26
  await framesAll.waitForSelector('[data-automation-locator="betPlace.straight-26"]')
  await framesAll.click('[data-automation-locator="betPlace.straight-26"]'); 
  
  //27
  await framesAll.waitForSelector('[data-automation-locator="betPlace.straight-27"]')
  await framesAll.click('[data-automation-locator="betPlace.straight-27"]'); 
  
  //28
  await framesAll.waitForSelector('[data-automation-locator="betPlace.straight-28"]')
  await framesAll.click('[data-automation-locator="betPlace.straight-28"]'); 
  
  //29
  await framesAll.waitForSelector('[data-automation-locator="betPlace.straight-29"]')
  await framesAll.click('[data-automation-locator="betPlace.straight-29"]'); 
  
  //30
  await framesAll.waitForSelector('[data-automation-locator="betPlace.straight-30"]')
  await framesAll.click('[data-automation-locator="betPlace.straight-30"]'); 
  
  //31
  await framesAll.waitForSelector('[data-automation-locator="betPlace.straight-31"]')
  await framesAll.click('[data-automation-locator="betPlace.straight-31"]'); 
  
  //32
  await framesAll.waitForSelector('[data-automation-locator="betPlace.straight-32"]')
  await framesAll.click('[data-automation-locator="betPlace.straight-32"]'); 
  
  //33
  await framesAll.waitForSelector('[data-automation-locator="betPlace.straight-33"]')
  await framesAll.click('[data-automation-locator="betPlace.straight-33"]'); 

  //34
  await framesAll.waitForSelector('[data-automation-locator="betPlace.straight-34"]')
  await framesAll.click('[data-automation-locator="betPlace.straight-34"]'); 

  //35
  await framesAll.waitForSelector('[data-automation-locator="betPlace.straight-35"]')
  await framesAll.click('[data-automation-locator="betPlace.straight-35"]'); 

  //36
  await framesAll.waitForSelector('[data-automation-locator="betPlace.straight-36"]')
  await framesAll.click('[data-automation-locator="betPlace.straight-36"]');   */
 
  
   
   
    /* await framesAll.waitForSelector(' [data-automation-locator="chipsPanel.chip10"]')
    await framesAll.click(' [data-automation-locator="chipsPanel.chip10"]'); */
    console.log('red was clicked')

 /*    if(lastColorDraw !== selectedColor){
        await framesAll.waitForSelector('[data-automation-locator="betPlace.spots50x50-red"]')
        await framesAll.click('[data-automation-locator="betPlace.spots50x50-red"]'); 
}
 */
    


   /*   await framesAll.waitForSelector('[data-automation-locator="element.closePopup"]')
    await framesAll.click('[data-automation-locator="element.closePopup"]');  */ 
  
if(loseCount == 1){
  
  await framesAll.waitForSelector('[data-automation-locator="button.Double"]')
  await framesAll.click('[data-automation-locator="button.Double"]'); 
}

if(loseCount == 2 ){
  await framesAll.waitForSelector('[data-automation-locator="button.Double"]')
  await framesAll.click('[data-automation-locator="button.Double"]');
  await framesAll.click('[data-automation-locator="button.Double"]');

}

if(loseCount == 3 ){
  await framesAll.waitForSelector('[data-automation-locator="button.Double"]')
  await framesAll.click('[data-automation-locator="button.Double"]');
  await framesAll.click('[data-automation-locator="button.Double"]');
  await framesAll.click('[data-automation-locator="button.Double"]');

}

if(loseCount == 4 ){
  await framesAll.waitForSelector('[data-automation-locator="button.Double"]')
  await framesAll.click('[data-automation-locator="button.Double"]');
  await framesAll.click('[data-automation-locator="button.Double"]');
  await framesAll.click('[data-automation-locator="button.Double"]');
  await framesAll.click('[data-automation-locator="button.Double"]');

}

if(loseCount == 5 ){
  await framesAll.waitForSelector('[data-automation-locator="button.Double"]')
  await framesAll.click('[data-automation-locator="button.Double"]');
  await framesAll.click('[data-automation-locator="button.Double"]');
  await framesAll.click('[data-automation-locator="button.Double"]');
  await framesAll.click('[data-automation-locator="button.Double"]');
  await framesAll.click('[data-automation-locator="button.Double"]');

}

    setTimeout(run, 18000, 'red')
}

}

}
})();

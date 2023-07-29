// remove all unused code (Done)
// finish first and second dosen roulette strategy (Done)
// check for Iframe to close cookies pop up on login (Done)
// refactor code (Done)
// Create readme with detailed instructions on how it works, name of the roulette strategy and that £17.20 is needed to play.

const puppeteer = require("puppeteer");

(async () => {


  const browser = await puppeteer.launch({ headless: false });

  const page = await browser.newPage();

  await page.goto("https://www.ladbrokes.com/en/livecasino");


  setTimeout(login, 10000);




  async function login() {

    


    await page.waitForSelector("[data-testid='signin']");
    await page.click("[data-testid='signin']");
    
    await page.waitForSelector("#userId");

                                // Type UserName Below //////////////////////////////////////
    await page.type("#userId", 'Username goes here');

    await page.waitForSelector("[name='password']");

                                       // Type Password Below ////////////////////////////////
    await page.type("[name='password']", 'Password goes here');

   

    page.keyboard.press("Enter");

    await page.waitForSelector('#onetrust-accept-btn-handler');

    await page.click('#onetrust-accept-btn-handler') 
    

     await page.waitForSelector('[class="casino-game-cls casino-livecasino-api-enabled casino-live-game fav-lcapi-active"]');

    await page.click('[class="casino-game-cls casino-livecasino-api-enabled casino-live-game fav-lcapi-active"]');

    

    await page.content();



    await new Promise((resolve) => setTimeout(resolve, 20000));

    const frames = await page.frames();

    const framesAll = frames.find((frame) => frame.name() === "vendor-playtechliveladbrokesroulette");



    setTimeout(run, 18000);

   
    let loseCount = 0;

    let howManyTimesWasFunctionCalled = 0

    let possibleProfit = 0


    async function run() {


      await framesAll.waitForSelector("[data-automation-locator='element.Timer']",{ timeout: 0 });

      const lastSpinResult = await framesAll.evaluate(() => {
        
        return document.querySelectorAll(".roulette-history-item--ei7kI")[0].innerText
      
      });


      if (loseCount == 4) {

        console.log(`You Win ${possibleProfit}`)
        loseCount = 0;
      }


      if (lastSpinResult > 24 || lastSpinResult == 0 && howManyTimesWasFunctionCalled !== 0) {
          loseCount = loseCount + 1;
          placeBetFunc();

      } else if (lastSpinResult < 25 && lastSpinResult !== 0 && loseCount > 0) {
        console.log(`You Win ${possibleProfit}`)
       
          loseCount = 0;
          placeBetFunc();

      }else if (lastSpinResult < 25 && lastSpinResult !== 0) {
        loseCount = 0;
        placeBetFunc();
      }

      if(loseCount == 0 && howManyTimesWasFunctionCalled !== 0 ){

        console.log(`You Win ${possibleProfit}`)
        
       }


    async function placeBetFunc() {
        await framesAll.waitForSelector('[data-automation-locator="betPlace.dozen-2nd12"]');
        await framesAll.click('[data-automation-locator="betPlace.dozen-2nd12"]');
        await framesAll.click('[data-automation-locator="betPlace.dozen-2nd12"]');

       
        await framesAll.waitForSelector('[data-automation-locator="betPlace.dozen-1st12"]');
        await framesAll.click('[data-automation-locator="betPlace.dozen-1st12"]');
        await framesAll.click('[data-automation-locator="betPlace.dozen-1st12"]');


        if(loseCount == 0){

          console.log('Bet placed £0.40')
          possibleProfit = .2
          setTimeout(run, 18000);
          
          
        }

        howManyTimesWasFunctionCalled = howManyTimesWasFunctionCalled + 1


          if (loseCount == 1) {
          
            console.log('You lose -£0.40')
            console.log('We will now bet £0.80 to recover lose')
            possibleProfit = 0.4
            howManyTimesToDoubleBet = 1;
            doubleUpFunc();
          }
  
          if (loseCount == 2) {
          
            console.log('You lose -£0.80')
            console.log('We will now bet £3.20 to recover lose')
            possibleProfit = 1.6
            howManyTimesToDoubleBet = 3;
            doubleUpFunc();
          }
  
          if (loseCount == 3) {
            
            console.log('You lose -£3.20')
            nconsole.log('We will now bet £12.80 to recover lose')
            possibleProfit = 6.4
            howManyTimesToDoubleBet = 5;
            doubleUpFunc();
          }
  
    }



        let howManyTimesToDoubleBet = 0;

        

      async function doubleUpFunc() {

        await framesAll.waitForSelector('[data-automation-locator="button.Double"]');
        await framesAll.click('[data-automation-locator="button.Double"]');

        if (howManyTimesToDoubleBet > 1) {

         howManyTimesToDoubleBet = howManyTimesToDoubleBet - 1;
          doubleUpFunc();
         
        } else{
          setTimeout(run, 18000);
        }
      }


     
    

    }
  }
})();

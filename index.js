// remove all unused code
// finish first and second dosen roulette strategy
// check for Iframe to close cookies pop up on login
// refactor code
// Create readme with detailed instructions on how it works, name of the roulette strategy

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



                                // Type UserName Below //
    await page.type("#userId", "Username goes here");

    await page.waitForSelector("[name='password']");

                                       // Type Password Below //
    await page.type("[name='password']", 'Password goes here');



    page.keyboard.press("Enter");

    await page.waitForSelector(".rcp-fav-btn");

    await page.click(".rcp-fav-btn");

    await page.waitForSelector("#gameIdentifier_rpfavWidget_fav_gyml_playtechliveladbrokesroulette");

    await page.click("#gameIdentifier_rpfavWidget_fav_gyml_playtechliveladbrokesroulette");

    await page.content();



    await new Promise((resolve) => setTimeout(resolve, 20000));

    const frames = await page.frames();

    const framesAll = frames.find((frame) => frame.name() === "vendor-playtechliveladbrokesroulette");



    setTimeout(run, 18000);

   
    let livePlay = false

    let loseCount = 0;

    let howManyTimesWasFunctionCalled = 0

    let yourAccountBalance = 17.2
    yourAccountBalance = yourAccountBalance.toFixed()
    

    let possibleProfit = 0

    async function run() {


      await framesAll.waitForSelector("[data-automation-locator='element.Timer']",{ timeout: 0 });

      const lastSpinResult = await framesAll.evaluate(() => {
        
        return document.querySelectorAll(".roulette-history-item--ei7kI")[0].innerText
      
      });


      if (loseCount == 4) {
        console.log('You lose -£12.80')
        yourAccountBalance = yourAccountBalance - 12.8
            console.log(`Your total balance is £${yourAccountBalance}`)
          loseCount = 0;
      }


      if (lastSpinResult > 24 || lastSpinResult == 0 && howManyTimesWasFunctionCalled !== 0) {
          loseCount = loseCount + 1;
          placeBetFunc();

      } else if (lastSpinResult < 25 && lastSpinResult !== 0 && loseCount > 0) {
        console.log(`You Win ${possibleProfit}`)
        yourAccountBalance = yourAccountBalance + possibleProfit
        console.log(`Your total balance is £${yourAccountBalance}`)
          loseCount = 0;
          placeBetFunc();

      }else if (lastSpinResult < 25 && lastSpinResult !== 0) {
        loseCount = 0;
        placeBetFunc();
      }

      if(loseCount == 0 && howManyTimesWasFunctionCalled !== 0 ){

        console.log(`You Win ${possibleProfit}`)
        yourAccountBalance = yourAccountBalance + possibleProfit
        console.log(`Your total balance is £${yourAccountBalance}`)
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
            yourAccountBalance = yourAccountBalance - .4
            console.log('You lose -£0.40')
            console.log(`Your total balance is £${yourAccountBalance}`)
            console.log('We will now bet £0.80 to recover lose')
            possibleProfit = 0.4
            howManyTimesToDoubleBet = 1;
            doubleUpFunc();
          }
  
          if (loseCount == 2) {
            yourAccountBalance = yourAccountBalance - .8
            console.log('You lose -£0.80')
            console.log(`Your total balance is £${yourAccountBalance}`)
            console.log('We will now bet £3.20 to recover lose')
            possibleProfit = 1.6
            howManyTimesToDoubleBet = 3;
            doubleUpFunc();
          }
  
          if (loseCount == 3) {
            yourAccountBalance = yourAccountBalance - 3.2
            console.log('You lose -£3.20')
            console.log(`Your total balance is £${yourAccountBalance}`)
            console.log('We will now bet £12.80 to recover lose')
            possibleProfit = 6.4
            howManyTimesToDoubleBet = 5;
            doubleUpFunc();
          }
  
    }



        let howManyTimesToDoubleBet = 0;

        let howManyTimesDoubleUpFuncWasCalled = 0

      async function doubleUpFunc() {

        howManyTimesDoubleUpFuncWasCalled = howManyTimesDoubleUpFuncWasCalled + 1

        await framesAll.waitForSelector('[data-automation-locator="button.Double"]');
        await framesAll.click('[data-automation-locator="button.Double"]');

        if (howManyTimesToDoubleBet > 1) {

         howManyTimesToDoubleBet = howManyTimesToDoubleBet - 1;
          doubleUpFunc();
          return
        } 
          if(livePlay == true && howManyTimesToDoubleBet == 0){

            howManyTimesDoubleUpFuncWasCalled = 0
          setTimeout(run, 18000);
        }else{
          removeAllBets()
        }
      }



      async function removeAllBets(){

        await framesAll.waitForSelector('[undo"]');
        await framesAll.click('[undo"]');
        if (howManyTimesDoubleUpFuncWasCalled > 1) {

        howManyTimesDoubleUpFuncWasCalled = howManyTimesDoubleUpFuncWasCalled - 1
        removeAllBets()

       }else{
        setTimeout(run, 18000);

       }

     }

    }
  }
})();

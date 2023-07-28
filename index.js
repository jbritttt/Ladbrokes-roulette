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
    await page.type("#userId", " *username goes here* ");

    await page.waitForSelector("[name='password']");

                                       // Type Password Below //
    await page.type("[name='password']", " *Password goes here* ");



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


    let loseCount = 0;


    async function run() {


      await framesAll.waitForSelector("[data-automation-locator='element.Timer']",{ timeout: 0 });

      const lastSpinResult = await framesAll.evaluate(() => {
        
        return document.querySelectorAll(".roulette-history-item--ei7kI")[0].innerText
      
      });


      if (loseCount == 6) {

          loseCount = 0;
      }


      if (lastSpinResult > 24 || lastSpinResult == 0) {
          loseCount = loseCount + 1;
          placeBetFunc();

      } else if (lastSpinResult < 25 && lastSpinResult !== 0) {
          loseCount = 0;
          placeBetFunc();

      }

    async function placeBetFunc() {
        await framesAll.waitForSelector('[data-automation-locator="betPlace.dozen-2nd12"]');
        await framesAll.click('[data-automation-locator="betPlace.dozen-2nd12"]');
        await framesAll.click('[data-automation-locator="betPlace.dozen-2nd12"]');

       
        await framesAll.waitForSelector('[data-automation-locator="betPlace.dozen-1st12"]');
        await framesAll.click('[data-automation-locator="betPlace.dozen-1st12"]');
        await framesAll.click('[data-automation-locator="betPlace.dozen-1st12"]');


        if(loseCount == 0){

          setTimeout(run, 18000);
          return
        }


        if (loseCount == 1) {
          howManyTimesToDoubleBet = 2;
          doubleUpFunc();
        }

        if (loseCount == 2) {
          howManyTimesToDoubleBet = 3;
          doubleUpFunc();
        }

        if (loseCount == 3) {
          howManyTimesToDoubleBet = 4;
          doubleUpFunc();
        }

        if (loseCount == 4) {
          howManyTimesToDoubleBet = 5;
          doubleUpFunc();
        }

        if (loseCount == 5) {
          howManyTimesToDoubleBet = 6;
          doubleUpFunc();
        }

        


    }


      let howManyTimesToDoubleBet = 0;


      async function doubleUpFunc() {

        await framesAll.waitForSelector('[data-automation-locator="button.Double"]');
        await framesAll.click('[data-automation-locator="button.Double"]');

        if (howManyTimesToDoubleBet > 0) {

          howManyTimesToDoubleBet = howManyTimesToDoubleBet - 1;
          doubleUpFunc();

        } else {
          setTimeout(run, 18000);
        }
      }
    }
  }
})();

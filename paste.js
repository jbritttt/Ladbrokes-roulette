
const boardNumbers = [
    {"1" : "red"},{"2" : "black"},{"3" : "red"},{"4" : "black"},{"5" : "red"},{"6" : "black"},{"7" : "red"},{"8" : "black"},{"9" : "red"},{"10" : "black"},{"11" : "black"},{"12" : "red"},{"13" : "black"},{"14" : "red"},{"15" : "black"},{"16" : "red"},{"17" : "black"},{"18" : "red"},{"19" : "red"},{"20" : "black"},{"21" : "red"},{"22" : "black"},{"23" : "red"},{"24" : "black"},{"25" : "red"},{"26" : "black"},{"27" : "red"},{"28" : "black"},{"29" : "black"},{"30" : "red"},{"31" : "black"},{"32" : "red"},{"33" : "black"},{"34" : "red"},{"35" : "black"},{"36" : "red"}



]

let currentNum = [3]
let nums = []

boardNumbers.forEach(item => {

    if(item[`${currentNum}`]){

        nums.push(item[`${currentNum}`])

    }

   

})

 console.log(nums)



/* const myTimeout = setTimeout(run, 80000);


async function run() {
  await page.goto(url, { timeout: 80000 }
  );

 
  await page.content(80000);

  innerText = await page.evaluate(() => {
    return document.querySelector("body").innerText;
  });

  console.log("innerText now contains the JSON");
  allData = []
allData.push(JSON.parse(innerText)) */
/*   fs.writeFileSync("data.json", innerText, err => {
    if (err) {
      console.error(err);
    }
    console.log('all data written successfully')
  }); */


  
  /* 
 
   data = [];


     let prodLessThanSix = allData[0].cart.items.forEach((item) => {
       let sentenceSplit = item.message.split(" ");
       let lastItem = sentenceSplit.pop();
       
     

      if( !isNaN(item.product_sku.charAt(0))){

        item.product_sku = 'x' + item.product_sku
      }

       if (item.message !== "" && lastItem !== "stock.") {
         data.push({
           code: item.product_sku,
           avail: sentenceSplit[4],
         });
       } else if (item.message !== "" && lastItem == "stock.") {
         data.push({
           code: item.product_sku,
           avail: "0",
         });
       }else if( item.qty < 6 && item.message == "" ){
        data.push({
          code: item.product_sku,
          avail: `${item.qty}`,
        });
      
        
        }else;
 */
       // if( item.product_sku.charAt(0) == 'x'){
        //  console.log(item.product_sku)
      //  }



     //});
   
    /*  fs.writeFileSync("filteredData.json", JSON.stringify(data), (err) => {
       if (err) {
         console.error(err);
   
       }
   
       //console.log("File Saved (filtered data)");
     }); */
    
    // setTimeout(run, 30000);
   
  
  //await browser.close();


  

//}

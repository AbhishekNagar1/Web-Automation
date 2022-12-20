// const puppeteer = require('puppeteer');

// async function main() 

// {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto('https://www.flipkart.com/?ef_id=794ad509dbe81d5fecc7b7703f4f172d:G:s&s_kwcid=AL!739!10!76347481385536!76347484024120&semcmpid=sem_F1167BY7_Brand_adcenter');
// //   await page.screenshot({'path': 'oxylabs_js.png'})
//   await browser.close();
// }

// main();

const puppeteer = require('puppeteer');


(async () => {
    //open a new browser
    const browser = await puppeteer.launch({headless: false, args:[
        '--start-maximized' ]})
// create a new page
    const page = await browser.newPage()
    await page.setViewport({  width: 1366, height: 768});
       await page.goto('https://www.naukri.com/');
       await page.waitForSelector(Input=["suggestor-input"]);
       await page.keyboard.type(Input=["suggestor-input"], 'data science job', {delay:30});
       
      //  await page.keyboard.press('<div class="tile-icon"><img draggable="false" alt="" src="chrome://favicon2/?size=24&amp;scale_factor=1x&amp;show_fallback_monogram=&amp;page_url=https%3A%2F%2Fwww.naukri.com%2F"><div class="query-tile-icon" draggable="false" hidden=""></div></div>');
      //  await page.click('naukri.com');
      //  await page.waitForSelector('h3.LC20lb MBeuO DKV0Md'>Naukri.com. Jobs. Recruitment. Job. Employment);
      //  await (await page.$('input[title="Search"]')).press('Enter');

    

    // parse google keyword suggestions
    // intercept response matching/complete/search?q=puppeteer
 const uniques = new Set();
page.on('response', async response => {
    if(response.url().includes('/complete/search?q=puppteer')){
        const suggestions = await page.evaluate(() => {
            Array.from(
                document.querrySelectorAll("ul[role='listbox'] li .sbl1"),
                element => element.textContent
            )
        })

        suggestions.forEach(s => uniques.add(s));
    }
})

     // type slowly and parse the keywords
    //await page.type("*[name='q']", 'puppteer get', { delay: 1000})
    

     // print all unique key words
       console.log(uniques)

     //close the browser
    await browser.close()
}) ()
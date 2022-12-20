const puppeteer = require('puppeteer');

(async () => {
    //open a new browser
    const browser = await puppeteer.launch({headless: false })
// create a new page
    const page = await browser.newPage()

    await page.goto('https://www.naukri.com/')

    // parse google keyword suggestions
    // intercept response matching/complete/search?q=puppeteer
 const uniques = new Set();
page.on('response', async response => {
    if(response.url().includes('/complete/search?q=puppteer')){
        const suggestions = await page.evaluate(() => {
            Array.from(
                document.querrySelectorAll("input.suggestor-input"),
                element => element.textContent
            )
        })

        suggestions.forEach(s => uniques.add(s));
    }
})

     // type slowly and parse the keywords
    await page.type("*[name='q']", 'puppteer get', { delay: 500})

     // print all unique key words
       console.log(uniques)

     //close the browser
    await browser.close()
}) ()
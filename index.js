const axios = require('axios');
const fs = require('fs');
const jsdom = require('jsdom');
const xl = require('excel4node');

const browserResponse = axios.get('https://www.naukri.com/it-jobs?src=gnbjobs_homepage_srch');

browserResponse.then(result => {
   
  //console.log(Response.data);


let html = result.data;

 let dom = new jsdom.JSDOM(html);
 let document = dom.window.document;



 let boxDiv = document.querySelectorAll('divs.jobTupleHeader');
 console.log(boxDiv);

 let jobsDivs = document.querySelectorAll('divs.jobTupleHeader');
let jobs = [];

for(let i=0; i<jobsDivs.length; i++){

    let jobs = {
        t1: "",
        t2: "",
        t1s: "",
        t2s: "",
        result: ""
    }
    jobs.push(jobs);
}

for (let i = 0; i < jobsDivs.length; i++) {
    const element = jobsDivs[i];
    }

// console.log(jobs);
let convert = JSON.stringify('jobs');


let output = JSON.stringify(jobsDivs);
console.log(output);

fs.writeFile('newData.jason', output, err => {
    if(err){
        console.log(err);
        return;
    }
})




// }).catch(err => {
   
//     console.log(err);

})


/*const axios = require('axios');
const fs = require('fs');
const jsdom = require('jsdom');
const xl = require('excel4node');

const browserResponse =axios.get('https://www.naukri.com');

browserResponse.then(result=>{
    //console.log(result.data);

    
    let html = result.data;

 let dom = new jsdom.JSDOM(html);
 let document = dom.window.document;
    
    let boxDiv = document.querySelectorAll('divs.jobTupleHeader');
     console.log(boxDiv);
   
    let jobsDivs = document.querySelectorAll('divs.jobTupleHeader');
   let jobs = [result.data];
   
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

})*/

const axios = require('axios');
const jsdom = require('jsdom');
const xl = require('excel4node');
const fs = require('fs');


const browserResponse =axios.get('https://internshala.com/internships/engineering-internship');

browserResponse.then(result=>{
    //console.log(result.data);

let html = result.data;

let dom = new jsdom.JSDOM(html);
let document = dom.window.document;

let jobPanelDiv = document.querySelectorAll('article[class="jobTuple bgWhite br4 mb-8"]');

console.log(jobPanelDiv.length);

// let output = JSON.stringify(jobPanel);
// console.log(output);

// fs.writeFile('newData.json',output, err => {
//     if(err){
//         console.log(err);
//         return;
//     }else
//     console.log('file written succesfully');})




})

"use strict";

const submissionBtn = document.getElementById("submission-btn");
const smallestNumberElement = document.getElementById("smallest-number");
const largestNumberElement = document.getElementById("largest-number");
const averageNumberElement = document.getElementById("average-number");

const myNumbers = [35, 130, 354, 100, 25, 134, 99, 200, 35];

    function smallestNumber() {
        let answer = Math.min(...myNumbers)
        smallestNumberElement.innerText = answer;
    }

    function largestNumber() {
        let answer = Math.max(...myNumbers);
        largestNumberElement.innerText = answer;
    }

    function findAverage() {
        let sum = 0;   
        let answer;     
        for(let i = 0; i < myNumbers.length; i++) {
            sum += myNumbers[i];
            answer = sum / myNumbers.length;
            
        }
        averageNumberElement.innerText = answer;
    }













 function render() {
    smallestNumber();
    largestNumber();
    findAverage();
 }

 submissionBtn.addEventListener("click", function () {
    render();
});
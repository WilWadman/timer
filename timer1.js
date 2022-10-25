/* We will need to incorporate the code to accept command line interface arguemnts
 * We will need to sort those arguments so they are in order smallest to largest?
 * Our input will be positive intergers passed via CLI
 * Our output will be beeps in VS code
 * We will likely need to loop through the input in an array and use the index to notify the code block to beep
 * 
 * 



 * Edge Cases: 
 * #1: No numbers are provided
 *      Result: no beeps since none are scheduled
 * #2: Input is a negative number
 *      Result: skip over negative numbers
 * #3: Input is not a number
 *      Result: skip over it
 */

const args = process.argv;
let timesToBeepArray = args.slice(2).sort((a, b) => a -b)


if(!timesToBeepArray.length){
return;
}

for (let beeps of timesToBeepArray) {
 const beepTime = Number(beeps)
 console.log(typeof beepTime)
  if (!beepTime){
    console.log("hi")
    continue;
  }
  if (beepTime <= 0){
    continue;
  }
  let timesInMilli = (beepTime *1000)
  setTimeout(() => {
    console.log('beep')
    process.stdout.write('\x07');
   }, timesInMilli);
};

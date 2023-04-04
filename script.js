let myparas=[
    'The sun was setting, casting a golden glow over the countryside. Birds chirped happily as they flitted from tree to tree.',
    'The old man sat on his porch, smoking a pipe and watching the world go by. He had seen so much in his lifetime, and yet he still marveled at the beauty of it all.',
    'The cat stretched lazily in the sunbeam, its eyes half-closed in contentment. It had no cares in the world, no worries or fears.',
    'The children laughed and played in the park, chasing each other and shrieking with delight. Their energy was boundless, their joy infectious.',
    'The waves crashed against the shore, sending up spray that glittered in the sunlight. The ocean was a thing of beauty, both powerful and serene.',
    'The smell of fresh-baked bread wafted through the air, making mouths water and stomachs rumble. There was nothing quite like the taste of warm bread straight from the oven.',
    'The leaves rustled in the wind, creating a soothing sound that filled the air. It was a peaceful day, a day to be savored and enjoyed.',
    'The stars twinkled in the night sky, a dazzling display of light that never failed to inspire wonder. The universe was vast and mysterious, full of secrets yet to be uncovered.',
    'The rain pattered against the windowpane, a soothing sound that filled the room. It was a good day for curling up with a book and a cup of tea.',
    'The fire crackled and popped in the hearth, casting a warm glow over the room. It was a cozy evening, a time to relax and enjoy the simple pleasures of life.'
]
console.log(myparas)
let index=Math.floor(Math.random()*10)
x=myparas[index]
para.innerHTML=myparas[index]

const myInput = document.getElementById("type");
myInput.addEventListener("click", startTimer);

var startTime,endTime
function startTimer(){
    startTime=new Date()
}

accuracy=0
// myInput.addEventListener("keyup", function(event) {
//     if (event.keyCode === 13) {
        
// }
// });

//keycode for enter is 13
// Enter twice to reload
// when user presses enter for the first time it shows typing reults.
// and when enter is pressed for the second time the site reloads
let enterCount = 0;
myInput.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        enterCount++;
        if (enterCount === 2) {
            location.reload();
        }
        else {
            endTime=new Date()
        var timeElapsed=(endTime-startTime)/1000
        //   alert(x.length/timeElapsed)
       // SPLIT INTO WORDS TO CHECK ACCURACY         
        var TextInput = document.getElementById("type").value;
        WordsTextInput=TextInput.split(" ")
        Wordsx=x.split(" ")
    for(let i=0;i<TextInput.length;i++){
        if(WordsTextInput[i]==Wordsx[i]){
            accuracy+=1 
        }
    }
    accuracy=(accuracy/TextInput.length)*100
    // alert("Timer stopped :"+timeElapsed+"\nCharacters per second:"+x.length/timeElapsed+"\nAccuracy: "+accuracy+"%");
    para.innerHTML="<em><u>Results:-</u>"+"<br>Time elapsed: "+timeElapsed+" seconds<br>Characters per second: "+x.length/timeElapsed+"<br>Accuracy: "+accuracy+"%</em>"
        }
    }
});

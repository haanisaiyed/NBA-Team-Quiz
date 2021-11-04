var questionCounter=0;
var numRight=0;
var teamImg;
var answer;
var index;
var i=0;
var idk;
var endImage;
var oneradio;
var end=["https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Checkmark_green.svg/885px-Checkmark_green.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Red_X.svg/768px-Red_X.svg.png"]
var teamImages = ["https://www.jetpunk.com/img/user-photo-library/73/73541d3599-450.png", "https://www.jetpunk.com/img/user-photo-library/99/99086e4a9e-450.png", "https://www.jetpunk.com/img/user-photo-library/40/4049a15f94-450.png","https://www.jetpunk.com/img/user-photo-library/3f/3ff6134e2b-450.png","https://www.jetpunk.com/img/user-photo-library/29/2962472c19-450.png","https://www.jetpunk.com/img/user-photo-library/94/949380b13c-450.png","https://www.jetpunk.com/img/user-photo-library/53/53c70e06c5-450.png","https://www.jetpunk.com/img/user-photo-library/a6/a6597aa085-450.png","https://www.jetpunk.com/img/user-photo-library/16/161cb4dd67-450.png","https://www.jetpunk.com/img/user-photo-library/30/30947efd69-450.png","https://www.jetpunk.com/img/user-photo-library/22/2292493d96-450.png","https://www.jetpunk.com/img/user-photo-library/53/533a7fd40e-450.png","https://www.jetpunk.com/img/user-photo-library/4f/4f871f2e0a-450.png","https://www.jetpunk.com/img/user-photo-library/ca/ca4cd30134-450.png","https://www.jetpunk.com/img/user-photo-library/b2/b2b27f7fd1-450.png","https://www.jetpunk.com/img/user-photo-library/3a/3aa0b90fad-450.png","https://www.jetpunk.com/img/user-photo-library/a4/a47be69986-450.png","https://www.jetpunk.com/img/user-photo-library/93/93611ead53-450.png","https://www.jetpunk.com/img/user-photo-library/31/31631c5628-450.png","https://www.jetpunk.com/img/user-photo-library/2e/2e51ebc686-450.png"];
var teamDesc = ["bucks logo", "lakers logo", "nets logo","bulls logo","kings logo","warriors logo","celtics logo","knicks logo","raptors logo","sixers logo","heat logo","mavericks logo","suns logo","spurs logo","hornets logo","rockets logo","blazers logo","pistons logo","clippers logo","thunder logo"];
var right = ["Bucks ", "Lakers ", "Nets ","Bulls ","Kings ","Warriors ","Celtics ","Knicks ","Raptors ","Sixers ","Heat ","Mavericks ","Suns ","Spurs ","Hornets ","Rockets ","Blazers ","Pistons ","Clippers ","Thunder "];
var numAr=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
const shufNum = numAr.sort((a, b) => 0.5 - Math.random());
function pickImage(){
    index=shufNum[i];
    teamImg.setAttribute("src",teamImages[index]);
    teamImg.setAttribute("alt",teamDesc[index]);
    answer=right[index];

    ++questionCounter;
    updateCounterDiv();
    setAnswers();
    document.getElementById("nextQues").disabled=true;
    i++;
    if(questionCounter>=21){
        endGame();
    }
    
}
function updateCounterDiv() {
    var countDiv = document.getElementById("quesCou");
    countDiv.innerHTML ="<p> Question: " + questionCounter+"</p>";
}
function start(){
    var button = document.getElementById("nextQues");
    teamImg=document.getElementById("image");
    pickImage();
    setAnswers();
    button.addEventListener("click",pickImage,false);
    button.addEventListener("click",clearSubmit,false);
    var submitButton = document.getElementById("submit");
    submitButton.addEventListener("click",submit,false);
    submitButton.addEventListener("click",trackScore,false);  
    document.getElementById("nextQues").disabled=true;
    
}

function submit(){
    var subbut = document.getElementById("rightanswer");
    subbut.innerHTML="<strong>Correct Answer: <span>"+answer+"</span></strong>";
    if (oneradio.checked){
        numRight++;
    }
    document.getElementById("submit").disabled=true;
    document.getElementById("nextQues").disabled=false;
}
function clearSubmit(){
    var clear = document.getElementById("rightanswer");
    clear.innerHTML="<strong>Correct Answer: </strong>";
    document.getElementById("submit").disabled=false;
    document.getElementById("answer1").checked=false;
    document.getElementById("answer2").checked=false;
    document.getElementById("answer3").checked=false;
    document.getElementById("answer4").checked=false;

    
}
function trackScore(){
    var numRightDiv = document.getElementById("numRight");

    var an = document.getElementById(idk);
    if(an.checked){
        ++numRight;
    }
    console.log(numRight);
    
    numRightDiv.innerHTML="<p> Numbers Correct: "+numRight+"</p>";
}
function setAnswers(){
    var nums = [1,2,3,4];
    
    var x = Math.floor(1+Math.random()*nums.length-1); 
    var a = nums[x];
    idk="answer"+a;
    a="rad"+a;
    
    nums.splice(x,1);
    var x = Math.floor(1+Math.random()*nums.length-1); 
    var b= nums[x];
    b="rad"+b;
    nums.splice(x,1);
    var x = Math.floor(1+Math.random()*nums.length-1); 
    var c= nums[x];
    c="rad"+c;
    nums.splice(x,1);
    var x = Math.floor(1+Math.random()*nums.length-1); 
    var d= nums[x];
    d="rad"+d;
    nums.splice(x,1);

    var notIndex1 = Math.floor(Math.random()*19);
    var notIndex2 = Math.floor(Math.random()*19);
    var notIndex3 = Math.floor(Math.random()*19);
    while(notIndex1==notIndex2){
        notIndex2 = Math.floor(Math.random()*19);
    }while(notIndex1==notIndex3){
        notIndex3 = Math.floor(Math.random()*19);
    }while (notIndex3==notIndex2){
        notIndex3 = Math.floor(Math.random()*19); 
    }while (index==notIndex2){
        notIndex2 = Math.floor(Math.random()*19);
    }while(index==notIndex3){
        notIndex3 = Math.floor(Math.random()*19);
    } while (index==notIndex1){
        notIndex1 = Math.floor(Math.random()*19);
    }
        

    oneradio =document.getElementById(a);
    oneradio.innerHTML=answer;
    var tworadio =document.getElementById(b);
    tworadio.innerHTML=right[notIndex1];
    var thradio =document.getElementById(c);
    thradio.innerHTML=right[notIndex2];
    var fourradio =document.getElementById(d);
    fourradio.innerHTML=right[notIndex3];


}
function endGame(){
    var enddiv = document.getElementById("inside");
    if(numRight>=14){
       //teamImg=document.getElementById("image");
       teamImg.setAttribute("src",end[0]);
       teamImg.setAttribute("alt","pass test image"); 
       enddiv.innerHTML="<p id='end'> You Passed! <br>Score: "+numRight+" / 20 </p>";
       
    }else{
        //teamImg=document.getElementById("image");
        teamImg.setAttribute("src",end[1]);
        teamImg.setAttribute("alt","fail test image"); 
        enddiv.innerHTML="<p id='end'> You Failed. <br>Score: "+numRight+" / 20 </p>";
    }

    
}



window.addEventListener("load",start,false);

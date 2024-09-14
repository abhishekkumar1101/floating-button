const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesButton = document.querySelector(".yes-btn");
const noButton = document.querySelector(".no-btn");

yesButton.addEventListener("click",()=>{
    console.log("clicked")
    gif.src = " https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmU2M2hmeXFtYXRrbndkNmNzZWM3aDl0d2hlejhyOGw3YWwzbGF1YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26xBOljAR6JbGmxQk/giphy.gif";
    question.innerHTML = "I LOVE YOU TOO 😘";
    yesButton.remove();
    noButton.remove();
    
});

noButton.addEventListener("mouseover",()=>{

    const wrapper = document.querySelector(".wrapper");
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noButton.getBoundingClientRect();


    const maxX = wrapperRect.width - noBtnRect.width;
    const maxY = wrapperRect.height - noBtnRect.height;

    const randomx= Math.floor((Math.random()*maxX));
    const randomy= Math.floor((Math.random()*maxY));


    noButton.style.left = randomx +"px";
    noButton.style.top = randomy +"px";

});

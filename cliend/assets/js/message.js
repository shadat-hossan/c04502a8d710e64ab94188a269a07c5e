const messageBoxLogo = document.querySelector(".messageBoxLogo");
const messageChartBox = document.querySelector(".messageChartBox");
const messageClose = document.querySelector(".messageClose");

console.log(messageChartBox)

messageBoxLogo.addEventListener("click", function(){
    messageChartBox.style.display = "block";
    messageChartBox.style.opacity = "1";
    messageChartBox.style.transform = "scaleY(1)";
    messageBoxLogo.style.opacity = "0";
    messageBoxLogo.style.visibility = "hidden";
});

messageClose.addEventListener("click", function(){
    messageChartBox.style.display = "none";
    messageChartBox.style.opacity = "0";
    messageChartBox.style.transform = "scaleY(0)";
    messageBoxLogo.style.opacity = "1";
    messageBoxLogo.style.visibility = "visible";
})
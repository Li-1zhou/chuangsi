
var curcle = document.querySelectorAll(".curcles");
var index = 0;
var nameList = ["list1", "list2", "list3", "list4", "list5", "list6"];
var aLi = document.querySelectorAll(".box .imgs li");
function setCurcleColor() {
    for (var i = 0; i < 6; i = i + 1) {
        curcle[i].style.color = "#ccc";
    }
    curcle[index].style.color = "#FF0000";
}
setCurcleColor();
function nextPic() { //向下翻页函数
    nameList.unshift(nameList[5]);  //把最后一个类复制并塞到第一个前面
    nameList.pop();  //将最后一个类删除
    for (var i = 0; i < 6; i++) {
        aLi[i].setAttribute("class", nameList[i]); //重新给每个元素命名
    }
    index++;
    if (index > 5) {
        index = 0;
    }
    setCurcleColor(); //给小圆点设置变色
}
function prePic() {
    nameList.push(nameList[0]);
    nameList.shift();
    for (var i = 0; i < 6; i++) {
        aLi[i].setAttribute("class", nameList[i]);
    }
    index--;
    if (index < 0) {
        index = 5;
    }
    setCurcleColor();
}
var btnleft = document.querySelector(".btnleft");
btnleft.onclick = prePic;
var btnright = document.querySelector(".btnright");
btnright.onclick = nextPic;
var time;
var container=document.querySelector(".box");
function play(){
    time = setInterval(nextPic,3000);
}
play();
function stop(){
    clearInterval(time);
}
container.onmouseover=stop;
container.onmouseout=play;

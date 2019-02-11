var words = [
    "愿你有所爱有所期待.",
    "你不能对所有人善良 但 善良真的很重要",
    "我始终相信读过的所有书都不会白读，它总会在未来日子的某一个场合， 帮助我表现得更出色。",
    "愿你我永远年轻 永远热泪盈眶",
    "使我们不快乐的，都一些芝麻小事，我们可以闪躲一头大象，却躲不开一只苍蝇。",
    "一万个美丽的未来，抵不上一个温暖的现在。",
    "只有回不去的，没有过不去的。",
    "在敌人面前，谁先镇定下来，谁就离胜利不远了。",
    "Do you want it badly enough?",
    "I'm making some changes right now, if you don't hear from me, you're one of theme."
];

//百度统计
var _hmt = _hmt || [];
(function () {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?4cba0cf9c055e2a3aa6dd24cb418c43a";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();

//动态签名
(function(){
    var rand = parseInt(Math.random() * words.length);
    document.getElementById("subt").innerHTML = words[rand];
    console.log(rand+"\n");
})();

(function (){
    setInterval(
        function () {
            $("#subt").fadeOut(2000);
            $("#subt").fadeIn(2000)
        },
        3000
    );
})();

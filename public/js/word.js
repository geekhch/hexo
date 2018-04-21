var words = [
    "愿你有所爱有所期待.",
    "处事不必求功，无过便是功；为人不必感德，无怨便是德。",
    "当你知道迷惑时，并不可怜，当你不知道迷惑时，才是最可怜的。",
    "你不能对所有人善良 但 善良真的很重要",
    "我始终相信读过的所有书都不会白读，它总会在未来日子的某一个场合， 帮助我表现得更出色。",
    "别在该拼搏的年纪选择转发锦鲤",
    "愿你我永远年轻 永远热泪盈眶",
    "使我们不快乐的，都一些芝麻小事，我们可以闪躲一头大象，却躲不开一只苍蝇。",
    "一万个美丽的未来，抵不上一个温暖的现在。",
    "只有回不去的，没有过不去的。",
    "状态是干出来的，而不是等出来的。",
    "在敌人面前，谁先镇定下来，谁就离胜利不远了。",
    "行有余力的时候，跆拳道散打别忘记",
    "曾经沧海难为水，除却巫山不是云。",
    "你应该记住，情绪失控给你带来了什么。"
];

var _hmt = _hmt || [];
(function () {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?4cba0cf9c055e2a3aa6dd24cb418c43a";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();

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

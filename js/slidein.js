var endSlideinFoxkeh = function(){
	var foxkeh = document.querySelector("#slidein-foxkeh img");

	foxkeh.setAttribute("class", "");
};
//slidein終了

var startSlideinFoxkeh = function(){
	var foxkeh = document.querySelector("#slidein-foxkeh img");
	foxkeh.setAttribute("class", "slidein");
//スライドイン開始
	foxkeh.addEventListener("animationend", endSlideinFoxkeh);
};
//endSlideinFoxkehを実行する

var slideinFoxkehButton = document.querySelector("#slidein-foxkeh button");
slideinFoxkehButton.addEventListener("click", startSlideinFoxkeh);
//ボタンを押すとstartSlideinFoxkehが実行される
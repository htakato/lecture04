var endFlipFoxkeh = function(){
	var foxkeh = document.querySelector("#slidein-foxkeh img");
	foxkeh.removeEventListener("animationend", endFlipFoxkeh);
	//前のイベントリスナーの削除
	foxkeh.setAttribute("class", "");
};

var endSlideinFoxkehAndStartFlipFoxkeh = function(){
	var foxkeh = document.querySelector("#slidein-foxkeh img");

	foxkeh.removeEventListener("animationend", endSlideinFoxkehAndStartFlipFoxkeh);
	//前のイベントリスナーの削除
	foxkeh.addEventListener("animationend", endFlipFoxkeh);
	//アニメーション終了とともにendFlipFoxkehを実行
	foxkeh.setAttribute("class", "flip");
	//前のアニメーション終了と同時にflip
};

var startSlideinFoxkeh = function(){
	var foxkeh = document.querySelector("#slidein-foxkeh img");
	foxkeh.setAttribute("class", "slidein");
//slideinの実行
	foxkeh.addEventListener("animationend", endSlideinFoxkehAndStartFlipFoxkeh);
};
//アニメーション終了(CSSで設定された)とともにendSlideinFoxkehAndStartFlipFoxkeh実行

var slideinFoxkehButton = document.querySelector("#slidein-foxkeh button");
slideinFoxkehButton.addEventListener("click", startSlideinFoxkeh);
//clickするとstartSlideinFoxkehが実行される
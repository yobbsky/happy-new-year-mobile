window.onload=function(){
	var page1=document.getElementById("page1");
	var page2=document.getElementById("page2");
	var page3=document.getElementById("page3");

	var music=document.getElementById("music");
	var audio=document.getElementsByTagName("audio")[0];
 audio.addEventListener("ended",function(event){
          music.setAttribute("class","");//转碟片的效果
    },false);



	music.addEventListener("touchstart",function(event){
  if(audio.paused){
//当点击触屏时，如果是paused(暂停)，那么让它播放（play）
     audio.play();
          this.setAttribute("class","play");//转碟片的效果
    }else{
//否则暂停(pause)
      audio.pause();
       this.setAttribute("class","");//移除play这个class(转碟片的效果)
    };
    },false);



	//翻页效果 
	page1.addEventListener("touchstart",function(event){
     page1.style.display="none";
     page2.style.display="block";
     page3.style.display="block";
     page3.style.top="100%";

     setTimeout(function(){
     	page2.setAttribute("class","page fadeOut");
     	page3.setAttribute("class","page fadeIn");},5500)
    },false);

} 
(function(){
  left()
 function left(){
  //  获取开始触屏的坐标
  //  获取移动的坐标
  //  获差值，移动ul，增加过渡效果
  //  判断是否到临界值
   var left=document.querySelector(".c-left");
   var ul=left.querySelector('ul')
   var start=0;
   var move=0;
   var distance=0;
   var current=0//当前ul y轴方向的偏移量
   var minTop=left.offsetHeight-ul.offsetHeight
  //  console.log(minTop)
   left.addEventListener('touchstart',function(e){
    start=e.targetTouches[0].clientY
   })
   left.addEventListener("touchmove",function(e){
    move=e.targetTouches[0].clientY
    distance=move-start;
    ul.style.transition='none';
    ul.style.transform='translateY('+(current+distance)+'px)'
   
    
   })
   left.addEventListener('touchend',function(e){
    console.log(start,move, distance)
    current+=distance;
    if(current>0){
      current=0;
    }
    if(current<minTop){
      current=minTop;
    }
     ul.style.transition='transform 1s';
     ul.style.transform='translateY('+current+'px)'
    
     start=0;
     move=0;
     distance=0;
   })

 }

  //右侧滚动
  new IScroll('.c-right', {
    // bounce: false,  //是否反弹
    scrollX: true,     //滑动方向
    scrollY: true
});







})()
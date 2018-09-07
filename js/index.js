(function () {

  downTime()
  header()
  news()
  banner()
  //1、倒计时功能
  function downTime() {
    var time = 5 * 60 * 60//数据从后台服务器获取
    // var spans=document.querySelectorAll('.jd-seckill .time span:nth-child(odd)')
    var spans = document.querySelectorAll('.time span:nth-child(odd)');
    // console.log(spans);
    // console.log(spans)
    setInterval(function () {
      var h = Math.floor(time / 3600)//向下取整获取小时数
      var m = Math.floor(time % 3600 / 60)//向下取获取分钟数
      var s = time % 60 //获取描述
      //转化为两位
      h = h < 10 ? '0' + h : h
      m = m < 10 ? '0' + m : m
      s = s < 10 ? '0' + s : s
      spans[0].innerHTML = h;
      spans[1].innerHTML = m;
      spans[2].innerHTML = s;
      time--
    }, 1000)

  }
  //2、header背景色加深功能
  function header() {
    //当滚动条顶部卷曲的高度=banner的高度时，背景透明度变成1
    //  随着顶部卷曲高度，逐渐加深，最大为1
    var banner = document.querySelector('.jd-banner')
    var header=document.querySelector('.jd-header')
    var h = banner.offsetHeight
    // console.log(h)
    //监听滚动事件
    window.addEventListener('scroll',function(){
      var y=window.pageYOffset//获取顶部滚动出去的距离
      var value=y/h
      if(value>1){
        value=1
      }
      // console.log(value)
      header.style.backgroundColor="rgba(222,24,27,"+value+")"

    })
  }
  //3、新闻滚动功能
  function news(){
    //动画的本质就是声明一个变量，改变变量的值
    var index=0
    var ul=document.querySelector('.jd-news ul')
    var lis=document.querySelectorAll('.jd-news ul li')
    //设置一个定时器让ul每次往上移动一个li的高度
    setInterval(function(){
      index++
      ul.style.transition='transform 0.3s'
      ul.style.transform='translateY('+(-index*30)+'px)'
    },1000)
    //每一次过渡执行完判断一下index有没有到临界点，如果到临界点复位到0
    ul.addEventListener('transitionend',function(){
      if(index>=lis.length-1){
        index=0
        ul.style.transition='none'//因为前面有一个假的在过渡，这个要瞬间跳回去，去除过渡效果
        ul.style.transform='translateY(0)'//复位到第一行
      }
    })
  }
  //4、轮播图效果
  function banner(){
    
    var index=1
    //动画的本质就是一个变量的值在变化
    var ul=document.querySelector('.jd-banner ul')
    var banner=document.querySelector('.jd-banner')
    var lis=ul.querySelectorAll('li')
    var w=banner.offsetWidth
    ul.style.transform='translateX('+(-index*w)+'px)'
    ul.style.webkitTransform='translateX('+(-index*w)+'px)'
    var timer=setInterval(turn,1000)
    function turn(){
      index++//往左边移动
      // index--往右边移动
      ul.style.transition="transform 0.5s"
      ul.style.webkitTransition="transform 0.5s"
      ul.style.transform='translateX('+(-index*w)+'px)'
      ul.style.webkitTransform='translateX('+(-index*w)+'px)'
    }

    //每一次过渡完成，判断是是否到临界值
    ul.addEventListener('transitionend',function(){
      if(index>=lis.length-1){//往左边移动
      // if(index<=0){//往右边移动
        //  index=8//往右边移动
        index=1//往左边移动
        ul.style.transition="none"
        ul.style.webkitTransition="none"
        ul.style.transform='translateX('+(-index*w)+'px)'
        ul.style.webkitTransform='translateX('+(-index*w)+'px)'
      }
       if(index<=0){//往右边移动
         index=8//往右边移动
        ul.style.transition="none"
        ul.style.webkitTransition="none"
        ul.style.transform='translateX('+(-index*w)+'px)'
        ul.style.webkitTransform='translateX('+(-index*w)+'px)'
      }
      var ol=document.querySelector('.jd-banner ol')
      var lis1=ol.querySelectorAll('li')
      //排他，去除小圆点的当前类
      lis1.forEach(function(v,i){
        v.classList.remove('current')
      })
      // console.log(index)
      lis1[index-1].classList.add('current')
    })
      //5、触屏功能

    var start=0;
    var end=0;
    var instance=0
    banner.addEventListener('touchstart',function(e){
      clearInterval(timer)
      start=e.targetTouches[0].clientX//获取触摸时在可视区的横坐标
  
    })
    banner.addEventListener('touchmove',function(e){
       move=e.targetTouches[0].clientX//获取触摸时在可视区的横坐标
       distance=move-start
       //清除过渡效果，让屏幕根据手机移动进行移动
       ul.style.transition='none'
       ul.style.transform='translateX('+(-index*w+distance)+'px)'
    })
    banner.addEventListener('touchend',function(e){
      if(Math.abs(distance)>w/3){
        if(distance>0){//向右滑动
          index-- 
        }
        if(distance<0){
          index++
        }   

      }
      // console.log(index)
      ul.style.transition="transform 0.5s"
      ul.style.transform='translateX('+(-index*w)+'px)'
      timer=setInterval(turn,1000)
      //重置坐标值
      start=0;
      move=0;
      distance=0;
    })
    // 当浏览器窗口尺寸发生变化后，重新获取屏幕尺寸，让ul基于新的宽度进行移动
    // resize事件
     window.addEventListener('resize',function(){
       w=banner.offsetWidth
       ul.style.transition='none'
      ul.style.transform='translateX('+(-index*w)+'px)'
    })


  }
       //右侧滚动
    //    new IScroll('.c-right', {
    //     // bounce: false,  //是否反弹
    //     // scrollX: true,     //滑动方向
    //     scrollY: true
    // });

      






})()
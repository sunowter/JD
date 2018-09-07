(function(){
//垃圾桶的动画效果
// 1、点击垃圾桶，垃圾桶打开，模态框显示，
// 3、点击取消按钮，垃圾桶关闭，模态框隐藏
  var winBox=document.querySelector('.win-box')
  var dels=document.querySelectorAll('.del')
  dels.forEach(function(v,i){

    v.addEventListener('click',function(){
      console.log()
      //点击；垃圾桶时，垃圾桶盖旋转，模态框显示
      winBox.style.display="block"
    
     //垃圾桶盖旋转通过类控制，然后通过js动态添加或移除类
     this.classList.add('open')
     
    })
})
  // var no=document.querySelector('.no')
  // no.onclick=function(){
  //   document.querySelector('.open').classList.remove(open)
  //   winBox.style.display='none;'
  // }








})()
!function(){
    let duration = 50;
    $('.actions').on('click','button',function(e){
        let $button = $(e.currentTarget);
        let speed = $button.attr('data-speed');
        console.log(speed);
        $button.addClass('active').siblings('.active').removeClass('active');
        switch(speed){
            case 'slow':
                duration = 100
                break
            case 'normal':
                duration = 50
                break
            case 'fast':
                duration = 10
                break
        }

    });

    var code = `
#baymax {
  margin:0 auto;
  height:700px;
  overflow:hidden;
}
#head {
  height:64px;
  width:100px;
  background-color:#fff;
  margin:0 auto;
  border-radius:50%;
  margin-bottom:-20px;
  border-bottom:5px solid #e0e0e0;
  z-index:100;
  position:relative;
}
.eye {
  width:11px;
  height:13px;
  background-color:#282828;
  border-radius:50%;
  position:relative;
  top:29px;
  left:27px;
  
}
.eye.left{
  transform:rotate(-8deg);
  left:61px;
  top:29px;
}
.eye.right{
  transform:rotate(8deg);
  right:62px;
  top:16px;
}

#mouth {
  width:38px;
  height:1.5px;
  background-color:#282828;
  position:relative;
  left:34px;
  top:10px;
}
#belly, #torso{
  margin:0 auto;
  height:200px;
  width:180px;
  background-color:#fff;
  border-radius:47%;
  border:5px solid #e0e0e0;
  border-top:none;
  z-index:1;
}
#belly{
  height:300px;
  width:245px;
  margin-top:-140px;
  z-index:5;
}
#cover{
  width:190px;
  background-color:#fff;
  height:150px;
  margin:0 auto;
  position:relative;
  border-radius:50%;
  top:-20px;
}
#heart{
  height:25px;
  width:25px;
  border-radius:50%;
  position:relative;
  right:-115px;
  top:40px;
  z-index:111;
  box-shadow:2px 5px 2px #ccc inset;
  border:1px solid #ccc;
}
.arm {
  height:270px;
  width:120px;
  border-radius:50%;
  background-color:#fff;
  margin:0 auto;
  position:relative;
  z-index:100;
}
.arm.left{
  top:-350px;
  left:-100px;
  transform:rotate(20deg);
}
.arm.right{
  transform:rotate(-20deg);
  top:-620px;
  left:100px;
}
.bigfinger{
  height:50px;
  width:20px;
  background-color:#fff;
  border-radius:50%;
  
  position:relative;
  top:250px;
  
}
.bigfinger.left{
  transform:rotate(-50deg);
  left:50px;
}

.bigfinger.right{
  transform:rotate(50deg);
  left:50px;
}
.smallfinger{
  height:35px;
  width:15px;
  background-color:#fff;
  border-radius:50%;
  position:relative;
  top:195px;
  
 
}
.smallfinger.left{
   transform:rotate(-40deg);
   left:66px;
}
.smallfinger.right{
  transform:rotate(40deg);
  left:37px;
}
.leg{
  height:170px;
  width:90px;
  background-color:#fff;
  margin:0 auto;
  position:relative;
  z-index:10;
  
}
.leg.left{
  transform:rotate(-1deg);
  top:-640px;
  left:-45px;
  border-radius:40% 30% 10px 45%;
}
.leg.right{
  transform:rotate(1deg);
  border-radius:30% 40% 45% 10px;
  top:-810px;
  left:50px;
}`;

    function writeCode(prefix,code,fn){
        let container = document.querySelector('#code');
        let styleTag = document.querySelector('#styleTag');
        let n = 0;
        let id = setTimeout(function run(){
            n++;
            container.innerHTML = code.substring(0,n);
            styleTag.innerHTML = code.substring(0,n);
            container.scrollTop = container.scrollHeight;
         if(n>=code.length){

         }else{
             id = setTimeout(run,duration)
         }
        },duration);
            fn();
    }

    writeCode('',code);
}.call()
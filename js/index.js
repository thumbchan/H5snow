(function(){
	//获取画布
	var can=document.getElementById('canvas')
	cxt=can.getContext('2d')
	//获取屏幕
	var W=window.innerWidth;
	var H=window.innerHeight;
	//设置画布
	can.width=W;
	can.height=H;
	 
	//设置雪花数量
	var snow=100;
	//设置雪花初始状态
	var arr=[];//存储雪花的坐标半径数据；
	var x,y,r;
	
	for(var i=0;i<snow;i++){
		arr.push({
			x:Math.random()*W,
			y:Math.random()*H,
			r:Math.random()*3+1
		})
	}
	//绘制雪花
	function drawSnow(){
	    cxt.clearRect(0,0,W,H);//清除画布。
		//设置画笔颜色
	    cxt.fillStyle='#fff';
	    cxt.beginPath();
	    for(var i=0;i<arr.length;i++){
	    	var p=arr[i];
	    	cxt.moveTo(p.x,p.y)//移动每次的圆心
	    	cxt.arc(p.x,p.y,p.r,0,Math.PI*2)
	    }
	    
	    cxt.closePath();
	    cxt.fill();
	    drop();//雪花下落函数
	}
	drawSnow();
	
	//雪花飘落函数
	function drop(){
		for(var i=0;i<snow;i++){
			var p=arr[i];
			p.x+=Math.random()+1;
			p.y+=Math.random()+3;
			if(p.x>W){
				p.x=0;
			}
			if(p.y>H){
				p.y=0;
			}
		}
	}
	
	setInterval(drawSnow,25);
	
	
})()

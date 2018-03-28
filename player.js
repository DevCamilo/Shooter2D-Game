var x = window.innerWidth/2;
var y = window.innerHeight/2;
var vx = 0;
var vy = 0;
var v = 0;
var angle = 0;
var lastShootTime = 0;

var stats = {
	maxV:100,
	dAngle:0.03,
	acc:10,
	shootDelayMs:100
};

class Player{
	
	update(dt){
		if(keyStatus.up){
		v += stats.acc;
		if(v > stats.maxV)
			v = stats.maxV;
		}
		if(keyStatus.down){
			v -= stats.acc;
			if(v < -stats.maxV)
				v = -stats.maxV;
		}
		if(keyStatus.left){
			angle -= stats.dAngle;
			if(angle < 0)
				angle += 2*Math.PI;
		}
		if(keyStatus.right){
			angle += stats.dAngle;
			if(angle > 2*Math.PI)
				angle -= 2*Math.PI;
		}
		
		
		if(!(keyStatus.up || keyStatus.down))
			v *= 0.99;
		vx = v * Math.cos(angle);
		vy = v * Math.sin(angle);
		
		x += vx * dt;
		y += vy * dt;
		
		var time = utils.getTime();
		if(keyStatus.fire &&
			time - lastShootTime >= stats.shootDelayMs){
			bullets.push({
				x:x,
				y:y,
				angle:angle,
				v:250
			});
			lastShootTime = time;
		}
	}
	
	render(ctx){
		ctx.fillStyle="#FF0000";
		ctx.beginPath();
		ctx.arc(x,y,10,0,6.28);
		ctx.fill();
	
		ctx.strokeStyle="#FF0000";
		ctx.beginPath();
		ctx.moveTo(x,y);
		var pointerLength = 25;
		ctx.lineTo(
			x + pointerLength * Math.cos(angle),
			y + pointerLength * Math.sin(angle)
			);
		ctx.stroke();
	};
	
}

var player = new Player();
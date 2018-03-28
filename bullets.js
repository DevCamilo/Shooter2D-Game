var objects = [];
var maxID = 0;

class Bullets{
	
	init(bullet){
		bullet.vx = bullet.v * Math.cos(bullet.angle);
		bullet.vy = bullet.v * Math.sin(bullet.angle);
	}

	push(bullet){
		this.init(bullet);
		var id = -1;
		//Search empty space
		while(objects[++id] != undefined);
		objects[id] = bullet;
		if(id > maxID) maxID = id;		
	};
	
	update(dt){
		for(var i = 0;i <= maxID;i++){
			if(objects[i] == undefined) continue;
			
			var obj = objects[i];
			
			obj.x += obj.vx * dt;
			obj.y += obj.vy * dt;
			//Detect if on screen
			if(
				obj.x < 0 || obj.y < 0 ||
				obj.x > width || obj.y > height ||
				obj.remove)
			delete objects[i];
			
		}
	}
	
	render(ctx){
		ctx.fillStyle = "#000000";
		for(var i = 0;i < maxID;i++){
			if(objects[i] == undefined) continue;
			
			var obj = objects[i];
			ctx.beginPath();
			ctx.arc(obj.x,obj.y,2,0,6.28);
			ctx.fill();
		}
	};
	
	getSize(){
		var size = 0;
		for(var i = 0;i <= maxID;i++){
			if(objects[i] == undefined) continue;
			size++;
		}
		return size;
	};
	
	getMinInfo(o){
		var dist = 99999;
		var obj;
		for(var i = 0;i <= maxID;i++){
			if(objects[i] == undefined) continue;
			var d = Math.sqrt(
				(o.x - objects[i].x)*(o.x - objects[i].x)+
				(o.y - objects[i].y)*(o.y - objects[i].y)
			);
			if(d < dist){
				dist = d;
				obj = objects[i];
			}
		}
		return {dist:dist,object:obj};
	};
	
}

var bullets = new Bullets();
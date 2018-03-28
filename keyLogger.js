var keyStatus = {up:false,down:false,left:false,right:false,fire:false};

class KeyLogger {
	keyDownListener(e){
		var key = e.keyCode ? e.keyCode : e.which;
		// console.log(key);
		switch(key){
		
		case 87:
		case 38:
		//Up
			keyStatus.up = true;
		break;
		case 83:
		case 40:
		//Down
			keyStatus.down = true;
		break;
		case 65:
		case 37:
		//Left
			keyStatus.left = true;
		break;
		case 68:
		case 39:
		//Rigth
			keyStatus.right = true;
		break;
		case 32:
		//Space
			keyStatus.fire = true;
		break;
		
		default:
			//console.log("Key:" + key);
		return !false;
	}
	return !true;
	}

	keyUpListener(e){
		var key = e.keyCode ? e.keyCode : e.which;
		switch(key){
		
		case 87:
		case 38:
		//Up
			keyStatus.up = false;
		break;
		case 83:
		case 40:
		//Down
			keyStatus.down = false;
		break;
		case 65:
		case 37:
		//Left
			keyStatus.left = false;
		break;
		case 68:
		case 39:
		//Rigth
			keyStatus.right = false;
		break;
		case 32:
		//Space
			keyStatus.fire = false;
		break;
		default:
			// console.log("Key:" + key);
		return !false;
	}
	return !true;
	};

}

var keyLogger = new KeyLogger();
class GrassEater extends LivingCreature{
	constructor(x,y){
		super(x,y);
		this.energy = 10;
	}
	mul(){
		var found = this.chooseCell(0);
		var newCell = random(found);
		if(newCell && this.energy >= 20){
			var newX = newCell[0];
			var newY = newCell[1];
			matrix[newY][newX] = 2;
			grassEaterArr.push(new GrassEater(newX,newY));
			this.energy =5;
		}
	}

	move(){
		var found = this.chooseCell(0);
		var newCell = random(found);

		if (newCell) {
			var newX = newCell[0];
			var newY = newCell[1];
			matrix[newY][newX] = 2;

			matrix[this.y][this.x] = 0;

			this.x = newX;
			this.y = newY;

		}
		this.energy--;

		if (this.energy < 0) {
			this.die();
		}
		
	}


	eat(){
		var found = this.chooseCell(1);
		var newCell = random(found);

		if (newCell) {
			var newX = newCell[0];
			var newY = newCell[1];
			matrix[newY][newX] = 2;

			if(this.energy >= 10 && Math.floor(Math.random()*1000) == 2){
				matrix[this.y][this.x] = 4;
			}
			else{ matrix[this.y][this.x] = 0;}

			this.x = newX;
			this.y = newY;
			this.energy++;

			for (var i in grassArr) {
				if (newX == grassArr[i].x && newY == grassArr[i].y) {
					grassArr.splice(i,1);
					break;
				}
			}
			if (this.energy >= 30) {
				this.mul();
			}


		}
		else {
			this.move();
		}
	}

	die(){
		for (var i in grassEaterArr) {
			if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
				grassEaterArr.splice(i,1);
				break;
			}
		}
		matrix[this.y][this.x] = 0;
	}
}

class Fly extends LivingCreature{
	constructor(x,y){
		super(x,y);
		this.energy = 500;
	}
	mul(){
		var found = this.chooseCell(0);
		var newCell = random(found);
		if(newCell && this.energy >= 510){
			var newX = newCell[0];
			var newY = newCell[1];
			matrix[newY][newX] = 3;
			flyArr.push(new Fly(newX,newY));
			this.energy =5;
		}
	}

	move(){

		var found = this.chooseCell(0).concat(this.chooseCell(1).concat(this.chooseCell(2)));

		var newCell = random(found);

		if (newCell) {
			var newX = newCell[0];
			var newY = newCell[1];
			matrix[newY][newX] = 3;

            
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
		var found = this.chooseCell(4);
		var newCell = random(found);

		if (newCell) {
			var newX = newCell[0];
			var newY = newCell[1];
			matrix[newY][newX] = 3;

            matrix[this.y][this.x] = 0;

			this.x = newX;
			this.y = newY;
			this.energy++;


			if (this.energy >= 510) {
				this.mul();
			}


		}
		else {
			this.move();
		}
	}

	die(){
		matrix[this.y][this.x] = 0;
		for (var i in flyArr) {
			if (this.x == flyArr[i].x && this.y == flyArr[i].y) {
				flyArr.splice(i,1);
				break;
			}
		}
		
	}
}

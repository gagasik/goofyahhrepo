class Grass extends LivingCreature
{
    constructor(x,y){
		super(x,y);
		this.energy = 40;
	}
	
    mul(){
		var found = this.chooseCell(0);
		var newCell = random(found);
		if(newCell && this.energy >= 20){
			var newX = newCell[0];
			var newY = newCell[1];
			matrix[newY][newX] = 1;
			grassArr.push(new Grass(newX,newY));

		}
	}
}
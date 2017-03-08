
function king(xCoord,yCoord, pieceColor, board){

	this.b = board;
	this.x = xCoord;
	this.y = yCoord;

	this.name = "king";

	this.score = 0;
	this.width = tileSize/1.25;
	this.height = tileSize/1.25;

	this.moveSet = [];

	this.color = pieceColor;

	this.selected = false;

	this.img;

	this.color == "white" ? this.img = document.getElementById("white-king") : this.img = document.getElementById("black-king"); 


	this.draw = function(){

		contextGA.drawImage(this.img,200+(this.x*tileSize + (tileSize-this.width)/2), this.y*tileSize + (tileSize-this.height)/2,this.width,this.height);
	}

	this.addToMoveSet = function(xCoord,yCoord){

		this.moveSet.push(this.b.files[yCoord][xCoord]);
		
		
	}

	this.isInMoveSet = function(xCoord,yCoord){

		for(var i = 0; i < this.moveSet.length; i++){
			if(this.moveSet[i] == this.b.files[yCoord][xCoord]){
				return true;
			}
		}

		return false;

	}

	this.moveTo = function(xCoord,yCoord){
		this.x = xCoord;
		this.y = yCoord;
	}



	this.refreshMoveSet = function(){


		this.moveSet = [];

			for(var i = -1; i <= 1; i++){
				for(var j = -1; j <= 1; j+=2){
					if(this.b.tileExists(this.x+i,this.y+j)){
						if(this.b.tileContainsPiece(this.x+i,this.y+j) != null){
							if(this.b.tileContainsPiece(this.x+i,this.y+j).color != this.color)
								this.addToMoveSet(this.x+i,this.y+j);
							
							}else{
								this.addToMoveSet(this.x+i,this.y+j);
						}
					}
				}
			}

			for(var i = -1; i <= 1; i+=2){
				if(this.b.tileExists(this.x+i,this.y)){
					if(true){
						if(this.b.tileContainsPiece(this.x+i,this.y) != null){
							if(this.b.tileContainsPiece(this.x+i,this.y).color != this.color)
								this.addToMoveSet(this.x+i,this.y);
							
							}else{
								this.addToMoveSet(this.x+i,this.y);
						}
					}
				}
			}  

			// TO-DO : 
			// Castling
			// Cannot move into check



	}
}

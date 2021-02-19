class Superhero
{
	constructor(x,y)
	{
		var options={
			isStatic:false,
			restitution:0.5,
			friction:1.0,
			density:2.0
			
			}
		this.x=x;
		this.y=y;
		this.r=100
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		this.image=loadImage("Superhero.jpg");
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;
			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.r, this.r)
			//ellipse(0,0,this.r, this.r);
			pop()
			
	}

}
class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);
        //loading all the sling images
        this.sling1=loadImage("sprites/sling1.png");
        this.sling2=loadImage("sprites/sling2.png");
        this.sling3=loadImage("sprites/sling3.png");
        this.pointB=pointB;
        World.add(world, this.sling);
    }

    display(){
        image(this.sling1,200,20);
        image(this.sling2,170,20);
        stroke(48,22,8);
      //if the body a is not null then display the slingshot constraint
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        //if the bird is behind the catapult create elastic and patch accordingly behind the bird
        if(pointA.x<220){
            strokeWeight(7);
            line(pointA.x-20,pointA.y,pointB.x-10,pointB.y);
            line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3);    
            image(this.sling3,pointA.x-30,pointA.y-10,15,30);
        }
        //if the bird is infront th catapult create patch infront of bird and create elastic accordingly
        else{
            strokeWeight(4);
            line(pointA.x+25,pointA.y,pointB.x-10,pointB.y);
            line(pointA.x+25, pointA.y, pointB.x+30, pointB.y-3);    
            image(this.sling3,pointA.x+25,pointA.y-10,15,30);
        }
       
       }
           
    }
     fly(){
     //removing the bird body to make it fly
        this.sling.bodyA=null;   
     }

    
}
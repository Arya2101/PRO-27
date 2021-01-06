class chain{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA:body1,
            bodyB:body2,
            stiffness:1.5,
            length:200,
            pointB:{x:this.offsetX, y:this.offsetY}
        }
        this.chain = Constraint.create(options);
        World.add(world,this.chain);

    }
    display(){
line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y); 

    

}
    
}

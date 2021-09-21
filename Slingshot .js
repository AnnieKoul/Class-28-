class Slingshot {
    constructor(body1,point2){
    var options={
        bodyA:body1,
        pointB:point2,
        length:30,
        stiffness:0.09
       }
       this.chain=Constraint.create(options)
       World.add(world,this.chain)
       
    }
    display(){
        if(this.chain.bodyA){
            var startA=this.chain.bodyA.position
        var startB=this.chain.pointB
        stroke("red")
        strokeWeight("5")
        line(startA.x,startA.y,startB.x,startB.y)
        }
    }
    
    fly(){
      this.chain.bodyA=null  
    }
}

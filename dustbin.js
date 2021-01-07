class Dustbin{
    constructor(x,y,w,h){
        var options={
            isStatic:true,
            }
           this.x=x;
           this.y=y;
           this.width=w;
           this.height=h;
           this.thick=10;
           this.image=loadImage("dustbin.png");
        this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        
        this.lbody=Bodies.rectangle(this.x-this.width/2,this.y-this.height/2,this.thick,this.height,options);
        this.rbody=Bodies.rectangle(this.x+this.width/2,this.y-this.height/2,this.thick,this.height,options);
        World.add(world,this.body);
       World.add(world,this.lbody);
        World.add(world,this.rbody);
   
         }
         display(){
            var pos = this.body.position;
          // var posr = this.rbody.position;
            push ();
            translate (pos.x,pos.y);

            angleMode(RADIANS);
            imageMode (CENTER);
           image (this.image,0,-this.height/2,this.width,this.height);
        pop ();
       
           
            
        
            
         }
}
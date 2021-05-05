var mouse,mouseImage,mouseTease,mouseSearching;
var back1,backGroundImage;
var cat,catImage,catTeased,catSitting;

 function preload(){
    //load the images here
    backGroundImage = loadImage("images/garden.png");
    mouseImage = loadImage("images/mouse1.png");
    mouseTease = loadAnimation("images/mouse2.png", "images/mouse3.png");
    mouseSearching = loadImage("images/mouse4.png");
    catImage = loadImage("images/cat1.png");
    catTeased = loadAnimation("images/cat2.png", "images/cat3.png");
    catSitting = loadImage("images/cat4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat = createSprite(800,700,100,100)
cat.addImage("catI",catImage)
cat.changeImage("catI")
cat.scale=0.15
cat.setCollider("rectangle",0,0,400,400)

mouse =createSprite(200,700,100,100)
mouse.addImage("mouseI",mouseImage)
mouse.changeImage("mouseI")
mouse.scale=0.12
mouse.setCollider("rectangle",0,0,600,600)
cat.addImage("catI",catImage)
cat.changeImage("catI")
}

function draw() {

    background(backGroundImage);

    if(keyWentDown("left_arrow")){

        mouse.addAnimation("mouseimage",mouseTease);
        mouse.changeAnimation("mouseimage",mouseTease)
        cat.addAnimation("catim",catTeased);
        cat.changeAnimation("catim")
        cat.scale=0.2
        cat .velocityX=-3
        mouse.frameDelay=15;
        cat.frameDelay=15;

    }
    

if(cat.x-mouse.x<(cat.width-mouse.width)/2){
cat.addImage("catimi",catSitting)
cat.changeImage("catimi")
cat.velocityX=0
mouse.addImage("mouseimi",mouseSearching)
mouse.changeImage("mouseimi")
    }
    //Write condition here to evalute if tom and jerry collide



    drawSprites();
}



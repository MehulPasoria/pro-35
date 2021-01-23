//Create variables here
var dog,dogImg,happyDog,database,foods,foodStock;


function preload()
{
  //load images here
  dogImg = loadImg("images/dog-removebg-preview.png");
  happyDog = loadImg("images/happyDog-removebg-preview.png");
}

function setup() {
createCanvas(800, 700);
database = firebase.database();
foodStock = database.ref("food");
foodStock.on("value",readStock);
doodStock.set(200);

dog = createSprite(250,350,10,60);
dog.addImage(dogImg);
dog.scale=0.2;
}

function draw() {  
background("green");
if(foods!==undefined){
  textSize(20);
  fill(255);
  text("note: Press Up to feed Jack Milk");
  text("Food remaining: "+foods, 150,150);

  if(keyWentDown(UP_ARROW)){
    writeStock(foods);
    dog.addImage(happyDogImg);
  }

  if(keyWentUp(UP_ARROW)){
    dog.addImg(dogImg);
  }

  if(foods === 0){
    foods = 20;
  }


  drawSprites();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
}
database.ref("/").update({
  food:x
});
}

function readStock(data){
foods=data.val();
}




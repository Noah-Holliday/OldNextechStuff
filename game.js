var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
function preload() {
 game.load.image('ground2', 'assets/platform3.png');
 game.load.image('Start1', 'assets/Start1.png');    
 game.load.image('End1', 'assets/End1.png');    
 game.load.image('sky', 'assets/sky.png');
 game.load.image('ground', 'assets/platform.png');
 game.load.image('diamond', 'assets/diamond.png');
 game.load.spritesheet('dude', 'assets/dude2.png', 30, 35);
 game.load.spritesheet('baddie', 'assets/baddie.png', 32, 32);
 game.load.image('spike', 'assets/S2B.png');
 game.load.image('E2F1', 'assets/E2F1.png');
 game.load.image('floor', 'assets/Jade or Emerald Floor.png');
 game.load.image('summon', 'assets/summon2.png');
 game.load.image('E3F1', 'assets/E3F1.png');
  game.load.image('E1F1', 'assets/E1F1.png');
}
var E1F1;
var E3F1, E3F2, E3F3, E3F4;
var checkPoint = 32;
var sky;
var S1;
var summon;
var floor;
var E2F1,E2F2,E2F3,E2F4,E2F5;
var spike, spike1, spike2, spike3,spike4,spike5,spike6,spike7,spike8,spike9,spike10,spike11,spike12,spike13;
var diamond;
var baddie, baddie1, baddie2, baddie3, baddie4, baddie5, baddie6, baddie7;
var player;
var platforms;
var cursors;
var score = 100;
var scoreText;
var jump=new Audio("assets/jump.wav");
 var collect=new Audio("assets/coin.wav");
 var hit=new Audio("assets/fire.wav");
function create() {
    game.world.setBounds(0, 0, 4800, 600)
 // We're going to be using physics, so enable the Arcade Physics system
 game.physics.startSystem(Phaser.Physics.ARCADE);
 // A simple background for our game
 game.add.sprite(0, 0, 'sky');
  game.add.sprite(800, 0, 'sky');
   game.add.sprite(1600, 0, 'sky');
    game.add.sprite(2400, 0, 'sky');
     game.add.sprite(3200, 0, 'sky');
      game.add.sprite(4000, 0, 'sky');
   

 // The platforms group contains the ground and the 2 ledges we can jump on
 platforms = game.add.group();
 // We will enable physics for any object that is created in this group
 platforms.enableBody = true;
 // Here we create the ground.
 
 var ground1= platforms.create(0, game.world.height -500, 'ground');
 var ground2 = platforms.create(400, game.world.height -500, 'ground');
 var ground3 = platforms.create(800, game.world.height -500, 'ground');
 var ground4 = platforms.create(1200, game.world.height -500, 'ground');
 var ground5 = platforms.create(1600, game.world.height -500, 'ground');
 var ground6 = platforms.create(2000, game.world.height -500, 'ground');
 var ground7 = platforms.create(2400, game.world.height -500, 'ground');
 var ground = platforms.create(5600, game.world.height -500, 'ground');
 var ground8= platforms.create(2800, game.world.height -500, 'ground');
 var ground9 = platforms.create(3200, game.world.height -500, 'ground');
 var ground10 = platforms.create(3600, game.world.height -500, 'ground');
 var ground11= platforms.create(4000, game.world.height -500, 'ground');
 var ground12 = platforms.create(4400, game.world.height -500, 'ground');
 var ground13 = platforms.create(4800, game.world.height -500, 'ground');
 var ground14 = platforms.create(5200, game.world.height -500, 'ground');
 var ground15= platforms.create(2400, game.world.height -500, 'ground');
 var ground16= platforms.create(2400, game.world.height -410, 'ground');
 var ground17 = platforms.create(2400, game.world.height -380, 'ground');
 var ground18 = platforms.create(2400, game.world.height -350, 'ground');
 var ground19 = platforms.create(2400, game.world.height -320, 'ground');
 var ground20= platforms.create(2400, game.world.height -290, 'ground');
 var ground21 = platforms.create(2400, game.world.height -260, 'ground');
 var ground22 = platforms.create(2400, game.world.height -230, 'ground');
 var ground23= platforms.create(2400, game.world.height -200, 'ground');
 var ground24 = platforms.create(2400, game.world.height -170, 'ground');
 var ground25 = platforms.create(2400, game.world.height -140, 'ground');
 var ground26 = platforms.create(2400, game.world.height -440, 'ground2');
 var ground27 = platforms.create(2400, game.world.height -470, 'ground2');
 var ground28 = platforms.create(2400, game.world.height -130, 'ground');
 // Scale it to fit the width of the game (the original sprite is 400x32 in size)
 ground.scale.setTo(2, 2);

 // This stops it from falling away when you jump on it
 ground.body.immovable = true;
 ground1.body.immovable = true;
 ground2.body.immovable = true;
 ground3.body.immovable = true;
 ground4.body.immovable = true;
 ground5.body.immovable = true;
 ground6.body.immovable = true;
 ground7.body.immovable = true;
 ground8.body.immovable = true;
 ground9.body.immovable = true;
 ground10.body.immovable = true;
 ground11.body.immovable = true;
 ground12.body.immovable = true;
 ground13.body.immovable = true;
 ground14.body.immovable = true;
 ground15.body.immovable = true;
 ground16.body.immovable = true;
 ground17.body.immovable = true;
 ground18.body.immovable = true;
 ground19.body.immovable = true;
 ground20.body.immovable = true;
 ground21.body.immovable = true;
 ground22.body.immovable = true;
 ground23.body.immovable = true;
 ground24.body.immovable = true;
 ground25.body.immovable = true;
  ground28.body.immovable = true;
 // Now let's create two ledges
 var ledge = platforms.create( -200, 500, 'ground');
 ledge.body.immovable = true;
 ledge = platforms.create( 600, 500, 'ground');
 ledge.body.immovable = true;
  ledge = platforms.create( 2000, 500, 'ground');
 ledge.body.immovable = true;
 ledge = platforms.create( 2800, 500, 'ground');
 ledge.body.immovable = true;
 ledge = platforms.create( 3200, 500, 'ground');
 ledge.body.immovable = true;
 ledge = platforms.create( 3600, 500, 'ground');
 ledge.body.immovable = true;
 ledge = platforms.create( 4000, 500, 'ground');
 ledge.body.immovable = true;
 ledge = platforms.create( 4400, 500, 'ground');
 ledge.body.immovable = true;
 ledge = platforms.create( 4800, 500, 'ground');
 ledge.body.immovable = true;
 ledge = platforms.create( 5200, 500, 'ground');
 ledge.body.immovable = true;
 ledge = platforms.create( 5600, 500, 'ground');
 ledge.body.immovable = true;
 
 // The player and its settings
 Start2 = game.add.sprite(4200, game.world.height - 196, 'Start1')
 Start1 = game.add.sprite(2300, game.world.height - 196, 'Start1');
 End3 = game.add.sprite(2900, game.world.height - 196, 'End1')
 End2 = game.add.sprite(750, game.world.height - 196, 'End1');
 End1 = game.add.sprite(32, game.world.height - 196, 'End1');
 summon = game.add.sprite(-900, game.world.height  -900, 'summon');
 player = game.add.sprite(32, game.world.height - 186, 'dude');
 baddie = game.add.sprite(400, game.world.height - 40, 'baddie');
 baddie1 = game.add.sprite(300, game.world.height - 40, 'baddie');
 baddie2 = game.add.sprite(200, game.world.height - 40, 'baddie');
 baddie3 = game.add.sprite(500, game.world.height - 40, 'baddie');
 baddie4 = game.add.sprite(250, game.world.height - 40, 'baddie');
 baddie5 = game.add.sprite(350, game.world.height - 40, 'baddie');
 baddie6 = game.add.sprite(450, game.world.height - 40, 'baddie');
 baddie7 = game.add.sprite(550, game.world.height - 40, 'baddie');
 spike = game.add.sprite(200, game.world.height - 80, 'spike');
 spike1 = game.add.sprite(300, game.world.height - 80, 'spike');
 spike2 = game.add.sprite(400, game.world.height - 80, 'spike');
 spike3 = game.add.sprite(500, game.world.height - 80, 'spike');
 spike4 = game.add.sprite(1300, game.world.height - 80, 'spike');
 spike5 = game.add.sprite(1400, game.world.height - 80, 'spike');
 spike6 = game.add.sprite(1500, game.world.height - 80, 'spike');
 spike7 = game.add.sprite(1600, game.world.height - 80, 'spike');
 spike8 = game.add.sprite(1700, game.world.height - 80, 'spike');
 spike9 = game.add.sprite(1800, game.world.height - 80, 'spike');
 spike10 = game.add.sprite(1000, game.world.height - 80, 'spike');
 spike11 = game.add.sprite(1100, game.world.height - 80, 'spike');
 spike12 = game.add.sprite(1200, game.world.height - 80, 'spike');
 spike12 = game.add.sprite(1900, game.world.height - 80, 'spike');
 spike13 = game.add.sprite(1900, game.world.height - 80, 'spike');
 E2F1 = game.add.sprite(800, game.world.height - 196, 'E2F1');
 E2F2 = game.add.sprite(1200, game.world.height - -196, 'E2F1');
 E2F3 = game.add.sprite(1500, game.world.height - -196, 'E2F1');
 E2F4 = game.add.sprite(1800, game.world.height - -196, 'E2F1');
 E2F5 = game.add.sprite(3200, game.world.height - 450, 'E2F1');
 E3F1 = game.add.sprite(3200, game.world.height - 196, 'E3F1');
 E3F2 = game.add.sprite(4000, game.world.height - 196, 'E3F1');
 E3F3 = game.add.sprite(3200, game.world.height - 292, 'E3F1');
 E3F4 = game.add.sprite(4000, game.world.height - 292, 'E3F1');
 E1F1 = game.add.sprite(4000, game.world.height - 196, 'E1F1');
 // We need to enable physics on the player
 game.physics.arcade.enable(checkPoint);
 game.physics.arcade.enable(player);
 game.physics.arcade.enable(baddie);
 game.physics.arcade.enable(baddie1);
 game.physics.arcade.enable(baddie2);
 game.physics.arcade.enable(baddie3);
 game.physics.arcade.enable(baddie4);
 game.physics.arcade.enable(baddie5);
 game.physics.arcade.enable(baddie6);
 game.physics.arcade.enable(baddie7);
 game.physics.arcade.enable(spike);
 game.physics.arcade.enable(spike1);
 game.physics.arcade.enable(spike2);
 game.physics.arcade.enable(spike3);
 game.physics.arcade.enable(spike4);
 game.physics.arcade.enable(spike5);
 game.physics.arcade.enable(spike6);
 game.physics.arcade.enable(spike7);
 game.physics.arcade.enable(spike8);
 game.physics.arcade.enable(spike9);
 game.physics.arcade.enable(spike10);
 game.physics.arcade.enable(spike11);
 game.physics.arcade.enable(spike12);
 game.physics.arcade.enable(spike13);
 game.physics.arcade.enable(E2F1);
 game.physics.arcade.enable(E2F2);
 game.physics.arcade.enable(E2F3);
 game.physics.arcade.enable(E2F4);
 game.physics.arcade.enable(E2F5);
 game.physics.arcade.enable(E3F1);
 game.physics.arcade.enable(E3F2);
 game.physics.arcade.enable(E3F3);
 game.physics.arcade.enable(E3F4);
 game.physics.arcade.enable(E1F1);
 game.physics.arcade.enable(summon);
 game.camera.follow(player);
 // Player physics properties. Give the little guy a slight bounce.
 player.body.bounce.y = 0.2;
 player.body.gravity.y =800;
 player.body.collideWorldBounds = true;
 baddie.body.bounce.y = 0.2;
 baddie.body.collideWorldBounds = true;
 // Our two animations, walking left and right.
 player.animations.add('left', [0, 1, 2, 3], 10, true);
 player.animations.add('right', [5, 6, 7, 8], 10, true);
 // The score
 scoreText = game.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#000' });
 // Our controls
 cursors = game.input.keyboard.createCursorKeys();
 S1 = game.input.keyboard.addKey(Phaser.KeyCode.NUMPAD_2);
 S2 = game.input.keyboard.addKey(Phaser.KeyCode.NUMPAD_1);
 S1a = game.input.keyboard.addKey(Phaser.KeyCode.TWO);
 S2a = game.input.keyboard.addKey(Phaser.KeyCode.ONE);
}

function update() {
    

    

 if (player.body.x > 2900){
 checkPoint = 2900;}
 else if (player.body.x > 2300){
 checkPoint = 2300;}
 else if (player.body.x > 750){
 checkPoint = 750;}
 
 
    
    if (S2.isDown || S2a.isDown) {
    summon.body.x = player.body.x -50;
    summon.body.y = player.body.y +15;
    summon.body.velocity.x = -100;
    }
    if (S1.isDown || S1a.isDown) {
    summon.body.x = player.body.x +50;
    summon.body.y = player.body.y +15;
    summon.body.velocity.x = 100;
    }
 // Collide the player and the stars with the platforms
 // game.physics.arcade.collide(player, E2F1);
 game.physics.arcade.collide(player, platforms);
 game.physics.arcade.collide(baddie, platforms);
 game.physics.arcade.collide(player, summon);
 // Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
 game.physics.arcade.overlap(player, spike, baddieHit, null, this);
 game.physics.arcade.overlap(player, spike1, baddieHit, null, this);
 game.physics.arcade.overlap(player, spike2, baddieHit, null, this);
 game.physics.arcade.overlap(player, spike3, baddieHit, null, this);
 game.physics.arcade.overlap(player, spike4, baddieHit, null, this);
 game.physics.arcade.overlap(player, spike5, baddieHit, null, this);
 game.physics.arcade.overlap(player, spike6, baddieHit, null, this);
 game.physics.arcade.overlap(player, spike7, baddieHit, null, this);
 game.physics.arcade.overlap(player, spike8, baddieHit, null, this);
 game.physics.arcade.overlap(player, spike9, baddieHit, null, this);
 game.physics.arcade.overlap(player, spike10, baddieHit, null, this);
 game.physics.arcade.overlap(player, spike11, baddieHit, null, this);
 game.physics.arcade.overlap(player, spike12, baddieHit, null, this);
 game.physics.arcade.overlap(player, spike13, baddieHit, null, this);
 game.physics.arcade.overlap(player, E2F1, baddieHit, null, this);
 game.physics.arcade.overlap(player, E2F2, baddieHit, null, this);
 game.physics.arcade.overlap(player, E2F3, baddieHit, null, this);
 game.physics.arcade.overlap(player, E2F4, baddieHit, null, this);
 game.physics.arcade.overlap(player, E3F1, baddieHit, null, this);
 game.physics.arcade.overlap(player, E3F2, baddieHit, null, this);
 game.physics.arcade.overlap(player, E3F3, baddieHit, null, this);
 game.physics.arcade.overlap(player, E3F4, baddieHit, null, this);
 game.physics.arcade.overlap(player, E1F1, baddieHit, null, this);
 game.physics.arcade.overlap(player, E2F5, baddieHit, null, this);
 // Reset the players velocity (movement)
  if (E2F1.x>600){
  E2F1.body.velocity.x = -150;
  }
  else if (E2F1.x<100){
  E2F1.body.velocity.x = 150;
  }
  
  if (E2F5.x>3900){
  E2F5.body.velocity.x = -150;
  }
  else if (E2F5.x<3300){
  E2F5.body.velocity.x = 150;
  }
  
  if (E1F1.x>3900){
  E1F1.body.velocity.x = -100;
  }
  else if (E1F1.x<3300){
  E1F1.body.velocity.x = 100;
  }
  
  
  if (E2F2.y<100){
  E2F2.body.velocity.y = +50;
  }
  else if (E2F2.y>600){
  E2F2.body.velocity.y = -50;
  }
  
  if (E2F3.y<100){
  E2F3.body.velocity.y = +100;
  }
  else if (E2F3.y>600){
  E2F3.body.velocity.y = -100;
  }
  
  if (E2F4.y<100){
  E2F4.body.velocity.y = +150;
  }
  else if (E2F4.y>600){
  E2F4.body.velocity.y = -150;
  }
  
 
E2F1.body.immovable=true;
summon.body.immovable=true;
 player.body.velocity.x = 0;
 if (cursors.left.isDown) 
 {
 // Move to the left
 player.body.velocity.x = -150;
 player.animations.play('left');
 }
 else if (cursors.right.isDown)
 {
 // Move to the right
 player.body.velocity.x = 150;
 player.animations.play('right');
 }
 else
 {
 // Stand still
 player.animations.stop();
 player.frame = 4;
 }
 
 // Allow the player to jump if they are touching the ground.
 if (cursors.up.isDown && player.body.touching.down)
 {
 player.body.velocity.y = -375;
 
 jump.play();
 }
}

function baddieHit (player, ba) {
hit.play();
 player.x = checkPoint;
 player.y=game.world.height - 190;
 // Add and update the score
 score -= 10;
 scoreText.text = 'Score: ' + score;
}
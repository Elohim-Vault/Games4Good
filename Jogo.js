

class Jogo extends SimpleScene {
  constructor() {
    super("Jogo");
  }

  init() {
    this.speed = 10;
    this.controllSpace = false;
  }

  preload() {
    // Dando load nas imagens
    this.load.image("map", "assets/jogoMapa.png");
    this.load.image("bullet", "assets/bullet.png");
    this.load.image("background", "assets/background.png");
    this.load.spritesheet("player", "assets/player.png", {frameWidth: 142, frameHeight: 155})
    this.load.spritesheet("enemy", "assets/enemy.png", {frameWidth: 130, frameHeight: 150});
  }
  
  create() {
    // Adicionando o mapa
    this.add.image(900, 300, "background");
    this.platform = this.add.image(2000, 320, "map");
    // Adicionando o player
    this.player = this.add.sprite(200, 640, "player")

    // Settando os controles
    this.cursors = this.input.keyboard.createCursorKeys();
    this.spaceKey = this.addKey("SPACE");

    // Retangulo colisão
    this.limiteEsquerda = this.add.rectangle(-500, 500, 100, 500);
    this.porta = this.add.rectangle(4200, 500, 100, 200);


    const camera = this.cameras.main
    // Camera
    camera.startFollow(this.player);
    console.log(camera.width);

    // Animações do personagem
    // this.anims.create({
    //   key: "right",
    //   frames: this.anims.generateFrameNumbers('player', {start: 0, end: 4}),
    //   frameRate: 18,
    //   repeat: -1
    // });

    // this.anims.create({
    //   key: "facingRight",
    //   frames: this.anims.generateFrameNumbers("player", {start: 11, end: 14}),
    //   frameRate: 18,
    //   repeat: -1
    // })

    // Criação dos inimigos pelo mapa de maneira randomica
    this.enemys = [];     
    for(let i = 0; i < 5; i++) {
      let x = random(800, 3000);
      let y = 670
      let obj = this.add.sprite(x, y, "enemy");  
      enableVectorControls(obj, 3.5, 5);
      this.enemys.push(obj); // push new obj into array
    }

    console.log(this.enemys[0]);
    console.log(this.enemys[4]);
  
    // Shooting
    this.bullets = this.physics.add.group({
      defaultKey: 'bullet',


    })
    
  }
  
  shoot(){
    var bulletDirectionY = 200
    var bulletDirectionX = 0
    var bulletSpawnY = this.player.y + 25;
    var bulletSpawnX = this.player.x 
    var bullet = this.bullets.get(bulletSpawnX , bulletSpawnY);
    if (bullet) {
        bullet.setActive(true);
        bullet.setVisible(true);

        bullet.body.velocity.x = 300
    }
  }

  update() {
    
    // Controle do personagem
    let x = this.player.x;
    let y = this.player.y;

    // Movimentação do inimigo
    
    if(this.cursors.left.isDown){
      this.player.x -= this.speed;
    }
    else if(this.cursors.right.isDown){
      this.player.x += this.speed;
    }


    else if(this.spaceKey.wasPressed()){
      this.shoot();
    }

 
    // keySpace.on("down", shoot());

    // Colisão com a parte esquerda do mapa para que ele não consiga exceder os limites
    if(this.intersects(this.player, this.limiteEsquerda)){
      this.player.x = x;
      this.player.y = y;
    }
    
    // Colisão para que ele entre na casa
    if(this.intersects(this.player, this.porta)){
      this.scene.start("Casa");
    }
    

    for (let i = 0; i < this.enemys.length; i++) {
      // Movimentação dos inimigos
      this.enemys[i].moveBack();
      // Colisão com o player e game over
      if (this.intersects(this.player, this.enemys[i], 0.8)) {
        // this.timeText = this.addText(this.player.x - 50, this.player.y - 200, "GAME OVER!")
        this.player.setTint(0xff0000);
        // this.timeText.setFontSize(30);
        // this.scene.start("Jogo")
        }
      }

      // Destroying bullets
      this.bullets.children.each(function(b) {
        if (b.active) {
            if(this.intersects(this.enemys[0], b)){
              this.enemys[0].setActive(false);
              this.enemys[0].alpha = 0;
     
            }
            else if(this.intersects(this.enemys[1], b)){
              this.enemys[1].setActive(false);
              this.enemys[1].alpha = 0;
            
            }

            else if(this.intersects(this.enemys[2], b)){
              this.enemys[2].setActive(false);
              this.enemys[2].alpha = 0;

            }

            else if(this.intersects(this.enemys[3], b)){
              this.enemys[3].setActive(false);
              this.enemys[3].alpha = 0;

            }

            else if(this.intersects(this.enemys[4], b)){
              this.enemys[4].setActive(false);
              this.enemys[4].alpha = 0;

            }

            else if(this.intersects(this.enemys[1], b)){
              this.enemys[5].setActive(false);
              this.enemys[5].alpha = 0;
            }

            if (b.y < 0) {
                b.setActive(false);
            }
        }
    }.bind(this));

    

  }
}




class Jogo extends SimpleScene {
  constructor() {
    super("Jogo");
  }

  init() {
    this.speed = 10;
  }

  preload() {
    // Dando load nas imagens
    this.load.image("map", "assets/jogoMapa.png");
    this.load.image("background", "assets/background.png");
    this.load.spritesheet("player", "assets/player.png", {frameWidth: 128, frameHeight: 162})
  }

  create() {
    // Adicionando o mapa
    this.add.image(900, 300, "background");
    this.platform = this.add.image(2000, 100, "map");
    // this.platform.create(2000, 100, "map")
    // Adicionando o player
    this.player = this.add.sprite(200, 400, "player")
    // Adicionando as colisões
    // this.player.setCollideWorldBounds(true); // Tira isso depois por favor amigao
    
    // Inputs

    this.cursors = this.input.keyboard.createCursorKeys();

    // Retangulo colisão
    this.parede = this.add.rectangle(400, 580, 500, 180, 0xff0000);

    // Camera
    const camera = this.cameras.main
    camera.startFollow(this.player);
  }

  update() {

    let x = this.player.x;
    let y = this.player.y;

    if(this.cursors.left.isDown){
      this.player.x -= this.speed;
    }
    else if(this.cursors.right.isDown){
      this.player.x += this.speed;
    }
    else if(this.cursors.up.isDown){
      this.player.y -= this.speed;
    }

    else if(this.cursors.down.isDown){
      this.player.y += this.speed;
    }
    
    if(this.intersects(this.player, this.parede)){
      this.player.x = x;
      this.player.y = y;
    }
    
  }
}
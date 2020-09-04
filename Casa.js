class Casa extends SimpleScene {
    constructor() {
      super("Casa");
    }
  
    init() {
        this.speed = 10;
    }
  
    preload() {
        this.load.image("houseInterior", "assets/houseInterior.jpg");
        this.load.spritesheet("player", "assets/player.png", {frameWidth: 142, frameHeight: 155})
    }
  
    create() {
        this.add.image(400, 300, "houseInterior");
        this.player = this.add.sprite(200, 490, "player")
        this.limiteEsquerda = this.add.rectangle(-30, 400, 100, 400);
        this.quarto = this.add.rectangle(830, 400, 100, 400)

        //declara tempo e contador 
        this.myTimer = this.addTimer(1000);
        this.count = 0;


        // Cursors
        this.cursors = this.input.keyboard.createCursorKeys();

        // Inimigos
        this.enemys = [];     
        for(let i = 0; i < 12; i++) {
          let x = 300
          let y = 670
          let obj = this.add.image(x, y, "enemy");  
          this.enemys.push(obj); // push new obj into array
        }
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

        if(this.intersects(this.player, this.limiteEsquerda)){
            this.player.x = x;
            this.player.y = y;
        }

        if(this.intersects(this.player, this.quarto)){
            this.scene.start("CutsceneQuarto");
        }

        //contador
        if (this.myTimer.isUp()) {
            this.count++;
        }

        // Dialogo
        if(this.count == 0){
            this.rectangle1 = this.add.rectangle(50,22,462,77,0xFFFFFF);
            this.rectangle1.setOrigin(0,0);
            this.rectangle2 = this.add.rectangle(52,24,458,73,0x00000);
            this.rectangle2.setOrigin(0,0);
            this.name = this.addText(350, 25, "Joãozinho",0x00A4D3);
            this.dialogue = this.addText(60, 50, "Mãe!! Cheguei! ");
        }
          if(this.count == 3){
            this.rectangle1 = this.add.rectangle(50,22,462,77,0xFFFFFF);
            this.rectangle1.setOrigin(0,0);
            this.rectangle2 = this.add.rectangle(52,24,458,73,0x00000);
            this.rectangle2.setOrigin(0,0);
            this.name = this.addText(350, 25, "Joãozinho",0x00A4D3);
            this.dialogue = this.addText(60, 50, "Mãe?");
        }
    }    
}
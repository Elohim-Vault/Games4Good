class Menu extends SimpleScene {
  constructor() {
    super("Menu");
  }

  init() {

  }

  preload() {
    this.load.image('menu', 'assets/menuJogo.png');
    this.load.image('botaoJogar', 'assets/BotaoJogar.png')
    this.load.image('botaoCredito', 'assets/BotaoCredito.png')
  }

  create() {
    this.add.image(400, 300, 'menu');
    this.botaoJogar = this.add.image(400, 430, 'botaoJogar');
    this.botaoCredito = this.add.image(395, 520, 'botaoCredito');
    this.enableClick(this.botaoJogar);
    this.enableClick(this.botaoCredito);
  }

  update() {
    if(this.botaoJogar.wasClicked()){
      this.scene.start("Jogo")
    }

    
    if(this.botaoCredito.wasClicked()){
      this.scene.start("Credito")
    }
    
  }
}
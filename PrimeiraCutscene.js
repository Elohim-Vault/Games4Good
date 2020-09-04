class PrimeiraCutscene extends SimpleScene {
    constructor() {
      super("PrimeiraCutscene");
    }
  
    init() {
  
    }
  
    preload() {
        //carregar as imagnes 
        this.load.image("joaozinhol", "assets/joaozinholeft.png");
        this.load.image("biblioteca", "assets/biblioteca.jpeg");
        this.load.image("tiaDag", "assets/tiaDag.png");
      }
    
    create() {
        //declara tempo e contador 
        this.myTimer = this.addTimer(1000);
        this.count = 0;
    
        //implementar as imagens 
        this.biblioteca = this.add.sprite(400,300, "biblioteca");
        this.joao = this.add.sprite(600, 400, "joaozinhol");
        this.joao = this.add.sprite(400, 400, "tiaDag");
        
        //o primeiro dialogo
        this.rectangle1 = this.add.rectangle(50,20,462,77,0xFFFFFF);
        this.rectangle1.setOrigin(0,0);
        this.rectangle2 = this.add.rectangle(52,22,458,73,0x00000);
        this.rectangle2.setOrigin(0,0);
        this.name = this.addText(70, 25, "Tia Dag",0xFF656A);
        this.dialogue = this.addText(60, 50, "Nunca foi fácil, para nenhuma dessas crianças.");
    }
    
    update() {
            //contador
        if (this.myTimer.isUp()) {
            this.count++;
        }
        //o resto dos ifs são dialogos 
        if(this.count == 5){
            this.rectangle1 = this.add.rectangle(50,22,462,77,0xFFFFFF);
            this.rectangle1.setOrigin(0,0);
            this.rectangle2 = this.add.rectangle(52,24,458,73,0x00000);
            this.rectangle2.setOrigin(0,0);
            this.name = this.addText(70, 25, "Tia Dag",0xFF656A);
            this.dialogue = this.addText(60, 50, "E com certeza ainda não vai ser.");
        }
    
        if(this.count == 10){
            this.rectangle1 = this.add.rectangle(50,22,462,77,0xFFFFFF);
            this.rectangle1.setOrigin(0,0);
            this.rectangle2 = this.add.rectangle(52,24,458,73,0x00000);
            this.rectangle2.setOrigin(0,0);
            this.name = this.addText(70, 25, "Tia Dag",0xFF656A);
            this.dialogue = this.addText(60, 50, "Mas eu ainda tenho fé. Tudo depende do tipo de \nlente que você utiliza para ver as coisas e eu vejo \ncom esperança, o que você enxerga?");
        }

        if(this.count == 15){
            this.rectangle1 = this.add.rectangle(50,22,462,77,0xFFFFFF);
            this.rectangle1.setOrigin(0,0);
            this.rectangle2 = this.add.rectangle(52,24,458,73,0x00000);
            this.rectangle2.setOrigin(0,0);
            this.name = this.addText(350, 25, "Joãozinho",0x00A4D3);
            this.dialogue = this.addText(60, 50, "....");
        }

        if(this.count == 20){
            this.rectangle1 = this.add.rectangle(50,22,462,77,0xFFFFFF);
            this.rectangle1.setOrigin(0,0);
            this.rectangle2 = this.add.rectangle(52,24,458,73,0x00000);
            this.rectangle2.setOrigin(0,0);
            this.name = this.addText(350, 25, "Joãozinho",0x00A4D3);
            this.dialogue = this.addText(60, 50, "Eu não tenho mais esperança.");
        }

        if(this.count == 35){
            this.rectangle1 = this.add.rectangle(50,22,462,77,0xFFFFFF);
            this.rectangle1.setOrigin(0,0);
            this.rectangle2 = this.add.rectangle(52,24,458,73,0x00000);
            this.rectangle2.setOrigin(0,0);
            this.name = this.addText(70, 25, "Tia Dag",0xFF656A);
            this.dialogue = this.addText(60, 50, "Posso te dar um pouco da minha. ");
        }

        if(this.count == 38){
        this.esperanca = this.addText(600, 55, "Você recebeu esperança",0xFFF84E);
        }

        if(this.count == 43){
            this.esperanca = this.addText(600, 55, "Você recebeu esperança",0x000000);
            this.rectangle1 = this.add.rectangle(50,22,462,77,0xFFFFFF);
            this.rectangle1.setOrigin(0,0);
            this.rectangle2 = this.add.rectangle(52,24,458,73,0x00000);
            this.rectangle2.setOrigin(0,0);
            this.name = this.addText(350, 25, "Joãozinho",0x00A4D3);
            this.dialogue = this.addText(60, 50, "O que posso fazer com isso?.. ");
        }

        if(this.count == 48){
            this.rectangle1 = this.add.rectangle(50,22,462,77,0xFFFFFF);
            this.rectangle1.setOrigin(0,0);
            this.rectangle2 = this.add.rectangle(52,24,458,73,0x00000);
            this.rectangle2.setOrigin(0,0);
            this.name = this.addText(70, 25, "Tia Dag",0xFF656A);
            this.dialogue = this.addText(60, 50, "Iluminar o caminho que decidir traçar e montar sua \nprópria história.");
        }

        if(this.count == 53){
            this.rectangle1 = this.add.rectangle(50,22,462,77,0xFFFFFF);
            this.rectangle1.setOrigin(0,0);
            this.rectangle2 = this.add.rectangle(52,24,458,73,0x00000);
            this.rectangle2.setOrigin(0,0);
            this.name = this.addText(350, 25, "Joãozinho",0x00A4D3);
            this.dialogue = this.addText(60, 50, "Eu não sei fazer isso, se alguém se ferir? Se eu \nfor inseguro igual ao... ");
        }

        if(this.count == 58){
            this.rectangle1 = this.add.rectangle(50,22,462,77,0xFFFFFF);
            this.rectangle1.setOrigin(0,0);
            this.rectangle2 = this.add.rectangle(52,24,458,73,0x00000);
            this.rectangle2.setOrigin(0,0);
            this.name = this.addText(70, 25, "Tia Dag",0xFF656A);
            this.dialogue = this.addText(60, 50, "Eu acredito em você e em todo o amor que tem a \noferecer, você é bom e o mundo precisa de você.");
        }

        if(this.count == 63){
            this.rectangle1 = this.add.rectangle(50,22,462,77,0xFFFFFF);
            this.rectangle1.setOrigin(0,0);
            this.rectangle2 = this.add.rectangle(52,24,458,73,0x00000);
            this.rectangle2.setOrigin(0,0);
            this.name = this.addText(350, 25, "Joãozinho",0x00A4D3);
            this.dialogue = this.addText(60, 50, "Eu vou dar um jeito nisso.");
        }

        if(this.count == 68){
            this.rectangle1 = this.add.rectangle(50,22,462,77,0xFFFFFF);
            this.rectangle1.setOrigin(0,0);
            this.rectangle2 = this.add.rectangle(52,24,458,73,0x00000);
            this.rectangle2.setOrigin(0,0);
            this.name = this.addText(70, 25, "Tia Dag",0xFF656A);
            this.dialogue = this.addText(60, 50, "Use as suas palavras pois palavras são, na minha \nnão tão humilde opinião, nossa inesgotável \nfonte de magia. Capazes de ferir e de curar.");
        }
        // ALTERA AQUI, TEM QUE SER 85
        if(this.count == 73){
            this.rectangle1 = this.add.rectangle(50,22,462,77,0x000000);
            this.rectangle1.setOrigin(0,0);
            this.scene.start("Jogo");
        }
    }
}

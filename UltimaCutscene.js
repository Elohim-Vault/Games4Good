class UltimaCutscene extends SimpleScene {
    constructor() {
      super("UltimaCutscene");
    }
  
    init() {
  
    }
  
    preload() {
        //carregar as imagnes 
        this.load.image("joaozinho", "assets/joaozinho.png");
        this.load.image("biblioteca", "assets/biblioteca.png");
        this.load.image("felipinho", "assets/felipinhoRight.png");
        this.load.image("tiaDag", "assets/tiaDagLeft.png");
    }
  
    create() {
       //declara tempo e contador 
        this.myTimer = this.addTimer(1000);
        this.count = 0;

        //implementar as imagens 
        this.quarto = this.add.sprite(400,300, "biblioteca");
        this.joao = this.add.sprite(100, 400, "joaozinho");
        this.felipe = this.add.sprite(300, 400, "felipinho");
        this.tiaDag = this.add.sprite(700, 400, "tiaDag");
        this.tiaDag.flipX = true;
        this.felipe.flipX = true;
    }
  
    update() {
      //contador
        if (this.myTimer.isUp()) {
            this.count++;
        }
            //o resto dos ifs são dialogos 
        if(this.count == 0){
            this.rectangle1 = this.add.rectangle(50,22,462,77,0xFFFFFF);
            this.rectangle1.setOrigin(0,0);
            this.rectangle2 = this.add.rectangle(52,24,458,73,0x00000);
            this.rectangle2.setOrigin(0,0);
            this.name = this.addText(70, 25, "Tia Dag",0xFF656A);
            this.dialogue = this.addText(60, 50, "É ótimo tê-lo aqui depois de tudo que joãozinho, \nme contou. ");
        }
        if(this.count == 5){
            this.rectangle1 = this.add.rectangle(50,22,462,77,0xFFFFFF);
            this.rectangle1.setOrigin(0,0);
            this.rectangle2 = this.add.rectangle(52,24,458,73,0x00000);
            this.rectangle2.setOrigin(0,0);
            this.name = this.addText(70, 25, "Felipinho",0x5BD41E);
            this.dialogue = this.addText(60, 50, "........");
        }
        if(this.count == 10){
            this.rectangle1 = this.add.rectangle(50,22,462,77,0xFFFFFF);
            this.rectangle1.setOrigin(0,0);
            this.rectangle2 = this.add.rectangle(52,24,458,73,0x00000);
            this.rectangle2.setOrigin(0,0);
            this.name = this.addText(70, 25, "Tia Dag",0xFF656A);
            this.dialogue = this.addText(60, 50, "A vida é a arte do encontro. \nEmbora haja tanto desencontro pela vida.\nE você minha crinça precisa de encontros com a vida.");
        }
        if(this.count == 20){
            this.rectangle1 = this.add.rectangle(50,22,462,77,0xFFFFFF);
            this.rectangle1.setOrigin(0,0);
            this.rectangle2 = this.add.rectangle(52,24,458,73,0x00000);
            this.rectangle2.setOrigin(0,0);
            this.name = this.addText(70, 25, "Felipinho",0x5BD41E);
            this.dialogue = this.addText(60, 50, "Se ninguém nunca me viu ou me ajudou, \npor que agora me ajudarão?");
        }
        if(this.count == 25){
            this.rectangle1 = this.add.rectangle(50,22,462,77,0xFFFFFF);
            this.rectangle1.setOrigin(0,0);
            this.rectangle2 = this.add.rectangle(52,24,458,73,0x00000);
            this.rectangle2.setOrigin(0,0);
            this.name = this.addText(70, 25, "Tia Dag",0xFF656A);
            this.dialogue = this.addText(60, 50, "Não posso lhe responder o motivo de ser agora, \nmas acredito que é pois agora você está pronto.");
        }
        if(this.count == 35){
            this.rectangle1 = this.add.rectangle(50,22,462,77,0xFFFFFF);
            this.rectangle1.setOrigin(0,0);
            this.rectangle2 = this.add.rectangle(52,24,458,73,0x00000);
            this.rectangle2.setOrigin(0,0);
            this.name = this.addText(70, 25, "Felipinho",0x5BD41E);
            this.dialogue = this.addText(60, 50, "Pronto para o que?");
        }
        if(this.count == 40){
            this.rectangle1 = this.add.rectangle(50,22,462,77,0xFFFFFF);
            this.rectangle1.setOrigin(0,0);
            this.rectangle2 = this.add.rectangle(52,24,458,73,0x00000);
            this.rectangle2.setOrigin(0,0);
            this.name = this.addText(350, 25, "Joãozinho",0x00A4D3);
            this.dialogue = this.addText(60, 50, "Para amar. \nVocê está livre para amar sem qualquer obrigação.");
        }
        if(this.count == 45){
            this.rectangle1 = this.add.rectangle(50,22,462,77,0xFFFFFF);
            this.rectangle1.setOrigin(0,0);
            this.rectangle2 = this.add.rectangle(52,24,458,73,0x00000);
            this.rectangle2.setOrigin(0,0);
            this.name = this.addText(70, 25, "Tia Dag",0xFF656A);
            this.dialogue = this.addText(60, 50, "E eu, seu irmão e a casa do zézinho vamos \nte ensinar a amar novamente");
        }
        if(this.count == 50){
            this.rectangle1 = this.add.rectangle(50,22,462,77,0xFFFFFF);
            this.rectangle1.setOrigin(0,0);
            this.rectangle2 = this.add.rectangle(52,24,458,73,0x00000);
            this.rectangle2.setOrigin(0,0);
            this.name = this.addText(70, 25, "Felipinho",0x5BD41E);
            this.dialogue = this.addText(60, 50, "O que querem dizer?");
        }
        if(this.count == 55){
            this.rectangle1 = this.add.rectangle(50,22,462,77,0xFFFFFF);
            this.rectangle1.setOrigin(0,0);
            this.rectangle2 = this.add.rectangle(52,24,458,73,0x00000);
            this.rectangle2.setOrigin(0,0);
            this.name = this.addText(350, 25, "Joãozinho",0x00A4D3);
            this.dialogue = this.addText(60, 50, "Que pode amar sem a culpa ou a dor dos erros \ndaqueles que ama, mas amar e contruir a si mesmo, \napenas não deixe de amar. ");
        }
  
        if(this.count == 70){
            this.rectangle1 = this.add.rectangle(50,22,462,77,0xFFFFFF);
            this.rectangle1.setOrigin(0,0);
            this.rectangle2 = this.add.rectangle(52,24,458,73,0x00000);
            this.rectangle2.setOrigin(0,0);
            this.name = this.addText(70, 25, "Felipinho",0x5BD41E);
            this.dialogue = this.addText(60, 50, "E ter esperança?");
        }
        if(this.count == 75){
            this.rectangle1 = this.add.rectangle(50,22,462,77,0xFFFFFF);
            this.rectangle1.setOrigin(0,0);
            this.rectangle2 = this.add.rectangle(52,24,458,73,0x00000);
            this.rectangle2.setOrigin(0,0);
            this.name = this.addText(70, 25, "Tia Dag",0xFF656A);
            this.dialogue = this.addText(60, 50, "Esta aprendendo! \nAgora vamos, temos muito o que fazer.");
         }
    }
}

class CutsceneQuarto extends SimpleScene {
    constructor() {
      super("CutsceneQuarto");
    }
  
    init() {
  
    }
  
    preload(){
        //carregar as imagnes 
        this.load.image("felipinhol", "assets/felipinho.png");
        this.load.image("joaozinho", "assets/joaozinhoRight.png");
        this.load.image("quarto", "assets/quarto.jpeg");
      }
    
    create(){
        //declara tempo e contador 
        this.myTimer = this.addTimer(1000);
        this.count = 0;
    
         //implementar as imagens 
        this.quarto = this.add.sprite(400,300, "quarto");
        this.joao = this.add.sprite(200, 400, "joaozinho");
        this.felipel = this.add.sprite(600, 400, "felipinhol");
      }
      
    update(){
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
            this.name = this.addText(350, 25, "Joãozinho",0x00A4D3);
            this.dialogue = this.addText(60, 50, "Felipinho? O que está fazendo?");
        }
        if(this.count == 5){
        this.rectangle1 = this.add.rectangle(50,22,462,77,0xFFFFFF);
        this.rectangle1.setOrigin(0,0);
        this.rectangle2 = this.add.rectangle(52,24,458,73,0x00000);
        this.rectangle2.setOrigin(0,0);
        this.dialogue = this.addText(60, 50, "[Felipinho guardava seus pertences em sua bolsa]");
        }
        if(this.count == 10){
            this.rectangle1 = this.add.rectangle(50,22,462,77,0xFFFFFF);
            this.rectangle1.setOrigin(0,0);
            this.rectangle2 = this.add.rectangle(52,24,458,73,0x00000);
            this.rectangle2.setOrigin(0,0);
            this.name = this.addText(70, 25, "Felipinho",0x5BD41E);
            this.dialogue = this.addText(60, 50, "Volte para aquela escola estupida Joãozinho!! \nÉ melhor você ir embora enquanto pode.");
        }
        if(this.count == 18){
            this.rectangle1 = this.add.rectangle(50,22,462,77,0xFFFFFF);
            this.rectangle1.setOrigin(0,0);
            this.rectangle2 = this.add.rectangle(52,24,458,73,0x00000);
            this.rectangle2.setOrigin(0,0);
            this.name = this.addText(350, 25, "Joãozinho",0x00A4D3);
            this.dialogue = this.addText(60, 50, "O que está dizendo? Onde você vai? \nNão pode ir embora!");
        }
        if(this.count == 26){
            this.rectangle1 = this.add.rectangle(50,22,462,77,0xFFFFFF);
            this.rectangle1.setOrigin(0,0);
            this.rectangle2 = this.add.rectangle(52,24,458,73,0x00000);
            this.rectangle2.setOrigin(0,0);
            this.name = this.addText(70, 25, "Felipinho",0x5BD41E);
            this.dialogue = this.addText(60, 50, "Me deixe em paz, vou embora desse lugar horrível. ");
        } 
        
        // Aqui é 32
        if(this.count == 32){
            this.scene.start("CutsceneFora");
        }
    }
}
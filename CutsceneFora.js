class CutsceneFora extends SimpleScene {
    constructor() {
      super("CutsceneFora");
    }
  
    init() {
  
    }
  
    preload() {
        //carregar as imagnes 
        this.load.image("joaozinho", "assets/joaozinho.png");
        this.load.image("background", "assets/background.png");
        this.load.image("map", "jogoMapa.png")
        this.load.image("felipinho", "assets/felipinho.png");
    }
  
    create() {
        //declara tempo e contador 
        this.myTimer = this.addTimer(1000);
        this.count = 0;
        this.add.image(900, 300, "background");
        this.add.image(2000, 100, "map");
        this.add.image(100, 420, "joaozinho");
        this.add.image(550, 415, "felipinho");
        
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
        this.name = this.addText(70, 25, "Felipinho",0x5BD41E);
        this.dialogue = this.addText(60, 50, "Eu tentei, mas esse mundo não me aceitou. \nAgora eu vou rejeitá-los.");
    }
    if(this.count == 10){
        this.rectangle1 = this.add.rectangle(50,22,462,77,0xFFFFFF);
        this.rectangle1.setOrigin(0,0);
        this.rectangle2 = this.add.rectangle(52,24,458,73,0x00000);
        this.rectangle2.setOrigin(0,0);
        this.name = this.addText(350, 25, "Joãozinho",0x00A4D3);
        this.dialogue = this.addText(60, 50, "Você não pode perder a esperança. \nA Tia Dag pode te ajudar, ela está me ajudando.");
    }
    if(this.count == 20){
        this.rectangle1 = this.add.rectangle(50,22,462,77,0xFFFFFF);
        this.rectangle1.setOrigin(0,0);
        this.rectangle2 = this.add.rectangle(52,24,458,73,0x00000);
        this.rectangle2.setOrigin(0,0);
        this.name = this.addText(70, 25, "Felipinho",0x5BD41E);
        this.dialogue = this.addText(60, 50, "Vê se cresce garoto, não há esperança. \nNão mais.... ");
    }
    if(this.count == 25){
        this.rectangle1 = this.add.rectangle(50,22,462,77,0xFFFFFF);
        this.rectangle1.setOrigin(0,0);
        this.rectangle2 = this.add.rectangle(52,24,458,73,0x00000);
        this.rectangle2.setOrigin(0,0);
        this.name = this.addText(350, 25, "Joãozinho",0x00A4D3);
        this.dialogue = this.addText(60, 50, "A cegueira também é isto, viver num mundo onde se \ntenha acabado a esperança. \nMas eu ainda tenho esperança, posso te ajuda.");
    }
    if(this.count == 35){
        this.rectangle1 = this.add.rectangle(50,22,462,77,0xFFFFFF);
        this.rectangle1.setOrigin(0,0);
        this.rectangle2 = this.add.rectangle(52,24,458,73,0x00000);
        this.rectangle2.setOrigin(0,0);
        this.name = this.addText(70, 25, "Felipinho",0x5BD41E);
        this.dialogue = this.addText(60, 50, "Ninguém pode me ajudar!");
    }
    if(this.count == 40){
        this.rectangle1 = this.add.rectangle(50,22,462,77,0xFFFFFF);
        this.rectangle1.setOrigin(0,0);
        this.rectangle2 = this.add.rectangle(52,24,458,73,0x00000);
        this.rectangle2.setOrigin(0,0);
        this.name = this.addText(350, 25, "Joãozinho",0x00A4D3);
        this.dialogue = this.addText(60, 50, "Deixe-me tentar! deixe-nos tentar! \nPor Favor!");
    }
    if(this.count == 48){
        this.rectangle1 = this.add.rectangle(50,22,462,77,0xFFFFFF);
        this.rectangle1.setOrigin(0,0);
        this.rectangle2 = this.add.rectangle(52,24,458,73,0x00000);
        this.rectangle2.setOrigin(0,0);
        this.name = this.addText(70, 25, "Felipinho",0x5BD41E);
        this.dialogue = this.addText(60, 50, "..........");
        }
    // Aqui é 52
    if(this.count == 52){
        this.scene.start("UltimaCutscene");
    }
    }
}
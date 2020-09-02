

let config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: 0x000000,
  parent: "phaser-div",
  dom: {
    createContainer: true
  },
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 300 },
                debug: false
            }
        },
  scene: [Menu, Jogo, Credito],
};

var foundation_fonts = `Inconsolata, Cousine, Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace`;

const game = new Phaser.Game(config);


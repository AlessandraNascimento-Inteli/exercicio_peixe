var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);


function preload(){
    this.load.image('mar', 'assets/bg_mar.jpg');
    this.load.image('logo', 'assets/logo-inteli_azul.png');
    this.load.image('peixe', 'assets/peixes/peixinho_roxo.png');
    
}

function create(){
    this.add.image(400, 300,'mar');
    this.add.image(500, 525, 'logo').setScale(0.5);
    
    peixinho = this.add.image(200,100,'peixe');
    
    peixinho.setFlip(true,false);

}

function update(){
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
    
}

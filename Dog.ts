export class Dog {
    
    
    raca: string = "";
    porte: string = "";
    nome: string = "";
    diasDeVida: number = 0;
    peso: number = 0;
    fome: number = 0;
    sede: number = 0;
    energia: number = 0;
    constructor(nome:string, porte:string, raca:string) {
        this.nome = nome;
        this.porte = porte;
        this.raca = raca;
        this.energia = 20+Math.round(Math.random()*80);
        this.fome = 20+Math.round(Math.random()*60);
        this.diasDeVida = 0;
        this.peso = 0.1 + Math.random() * 0.4;
        this.sede = 20+Math.round(Math.random()*60);
    }

    latir(numeroDeLatidas: number):void {
        if(numeroDeLatidas > 20) numeroDeLatidas = 20;
        this.energia -= Math.random()*(numeroDeLatidas * 0.5);
        this.sede += Math.random()*(numeroDeLatidas * 0.)
    }

    comer(quantidadeEmGramas: number):void {
        if(quantidadeEmGramas>400) quantidadeEmGramas = 400;
        this.energia += quantidadeEmGramas * 0.05;
        this.fome -= quantidadeEmGramas * 0.2;
        this.peso += quantidadeEmGramas * 1;
        this.sede += quantidadeEmGramas * 0.05;

        this.corrijeLimites();
    }

    dormir(numeroDeHoras: number) {
        this.diasDeVida += 1;
        this.fome += Math.random() * (numeroDeHoras * 3);
        this.energia += Math.random() * (numeroDeHoras * 10);
        this.sede += Math.random() * (numeroDeHoras *3);
        this.peso -= Math.random() * (numeroDeHoras * 0.1);
        this.corrijeLimites();
    }

    isAlive():boolean {
        const isAlive = this.energia <= 0 || this.fome > 100 || this.sede > 100 || this.diasDeVida > (365 * 14);
        return isAlive;
    }

    status():string{
        return(`Energia: ${this.energia}\nFome: ${this.fome}\nIdade: ${this.diasDeVida}\nSede: ${this.sede}`); 
    }

    corrijeLimites():void {
        if(this.energia>100) this.energia = 100;
        if(this.fome < 0) this.fome = 0;
        if(this.sede < 0) this.sede = 0;
    }
}
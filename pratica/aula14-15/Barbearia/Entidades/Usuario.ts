export class Usuario {
    public nome: string
    public id: number
    public telefone: string
    email?: string
    
    constructor (nome:string, id:number, telefone:string) {
        this.nome = nome;
        this.id = id;
        this.telefone = telefone;
    }
}
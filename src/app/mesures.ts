import { Client } from './client';

export class Mesures {
  constructor(
    public id: number,
    public tete: number,
    public cou: number,
    public lbras: number,
    public coude: number,
    public genou: number,
    public lcorps: number,
    public ldos: number,
    public cuisse: number,
    public hanches: number,
    public cheville: number,
    public biceps: number,
    public avantBras: number,
    public poignet: number,
    public entreJambes: number,
    public epaules: number,
    public coutureExt: number,
    public creteIliaques: number,
    public dessousPoids: number,
    public htotale: number,
    public poitrine: number,
    public client: Client
  ) {}
}

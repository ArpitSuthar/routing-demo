export class Hero {
    id: number;
    name: string;
    power: string;
    alterEgo?: string;

    public constructor(id: number, name: string,
        power: string, alterEgo?: string) {
        this.id = id;
        this.name = name;
        this.power = power;
        this.alterEgo = alterEgo;
    }
}

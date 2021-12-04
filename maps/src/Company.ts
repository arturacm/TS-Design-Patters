import faker from 'faker';

export class Company{
    name: string;
    catchPhrase: string;
    location: {
        lat: number,
        lng: number
    }

    constructor(){
        this.name = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude()),
        }
    }
    markerContent():string{
        return `
        <h3>Company: ${this.name}</h3>
        <h5>${this.catchPhrase}</h5>
        `
    }
}
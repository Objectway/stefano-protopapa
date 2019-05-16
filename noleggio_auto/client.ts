export class Client{
    id: string;
    name: string;
    surname: string;

    constructor(id: string, name: string, surname: string)
    {
        this.id = id;
        this.name = name;
        this.surname = surname;
    }
}





/*
interface client{
    id: string;
    spesa: number;
}

class clientStandard implements client{
    id: string;
    spesa: number; 
}

class clientBusines implements client{
    id: string;
    spesa: number;
    static sconto: number = 30;
}
*/
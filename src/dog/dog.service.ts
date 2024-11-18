import { Injectable } from '@nestjs/common';
// Dog schema model

@Injectable()
export class DogService {
    public getHello(): string {
        return "WOW-WOW";
    }

    public introduce(): string {
        return "My name is Rex";
    }

    public modifyDetail(): string {
        return "Succesfully modified";
    }
}

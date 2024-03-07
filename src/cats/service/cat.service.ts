import { Injectable } from "@nestjs/common";

@Injectable()
export class CatService {
    getCat(): string {
        return 'cat: doki-doki'
    }
}
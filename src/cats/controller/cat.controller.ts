import { Controller, Get } from "@nestjs/common";
import { CatService } from "../service/cat.service";

@Controller()
export class CatController{
    constructor(private readonly catService: CatService) {}  
    
        @Get()
        getCat(): string {
            return this.catService.getCat();
        }
    
}
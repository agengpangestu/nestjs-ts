import { Test, TestingModule } from "@nestjs/testing";
import { CatController } from "./controller/cat.controller"
import { CatService } from "./service/cat.service";

describe('CatController', () => {
    let catContronller: CatController;

    beforeEach(async ()=>   {
        const cat: TestingModule = await Test.createTestingModule({
            controllers: [CatController],
            providers: [CatService],
        }).compile();

        catContronller = cat.get<CatController>(CatController);
    });

    describe('root', () =>  {
        it('should return "cat: doki-doki"', () =>  {
            expect(catContronller.getCat()).toBe('cat: doki-doki');
        });
    });
});
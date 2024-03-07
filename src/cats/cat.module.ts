import { Module } from "@nestjs/common";
import { CatController } from "./controller/cat.controller";
import { CatService } from "./service/cat.service";


@Module({
    imports: [],
    controllers: [CatController],
    providers: [CatService],
})

export class CatModule {}
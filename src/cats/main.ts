import { NestFactory } from "@nestjs/core";
import { CatModule } from "./cat.module";

async function bootstrap() {
    const cat = await NestFactory.create(CatModule);
    await cat.listen(3000);
}

bootstrap();
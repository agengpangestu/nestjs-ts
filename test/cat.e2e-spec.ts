import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication } from "@nestjs/common"
import * as request from "supertest";
import { CatModule } from "../src/cats/cat.module";

describe('CatController (e2e)', () =>   {
    let cat: INestApplication;

    beforeEach(async () =>  {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [CatModule],
        }).compile();

        cat = moduleFixture.createNestApplication();
        await cat.init();
    });

    it('/ (GET)', () => {
        return request(cat.getHttpServer())
        .get('/')
        .expect(200)
        .expect('cat: doki-doki');
    });
});
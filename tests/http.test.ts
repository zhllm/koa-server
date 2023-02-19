import { Server } from "http";
import run from "../app"
import request from 'supertest';

describe("name", () => {
    let server: any = undefined;
    beforeAll(() => {
        server = run(8808);
    })
    it("Get /admin", () => {
        return request(server)
            .get('/admin')
            .then(res => {
                expect(res.body).toStrictEqual(['1', '2', '312'])
            })
    })
    afterAll(async () => {
        server.close();
    })
})
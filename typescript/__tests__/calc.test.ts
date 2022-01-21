import {add} from "../src";

describe("test add function", () => {
    it("should return 15", () => {
        expect(add(10, 5)).toBe(15);
    })
})
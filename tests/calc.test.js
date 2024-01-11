import { add } from "../calc.js";

test("meine Funktion soll addieren, 1 + 2 = 3", () => {
	expect(add(1, 2)).toBe(3);
});

import {createTV} from "../index";

describe("createTV", () => {
  test("should use config in tv calls", () => {
    const tv = createTV({twMerge: false});
    const h1 = tv({base: "text-3xl font-bold text-blue-400 text-xl text-blue-200"});

    expect(h1()).toBe("text-3xl font-bold text-blue-400 text-xl text-blue-200");
  });

  test("should override config", () => {
    const tv = createTV({twMerge: false});
    const h1 = tv(
      {base: "text-3xl font-bold text-blue-400 text-xl text-blue-200"},
      {twMerge: true},
    );

    expect(h1()).toBe("font-bold text-xl text-blue-200");
  });
});
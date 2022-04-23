import * as api from "./index";

test("api", () => {
  expect(api).toMatchInlineSnapshot(`
    Object {
      "FlagIcon": Object {
        "$$typeof": Symbol(react.forward_ref),
        "render": [Function],
      },
    }
  `);
});

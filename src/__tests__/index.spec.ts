import * as api from "../index";

it("exposes public api", () => {
  expect(api).toMatchInlineSnapshot(`
Object {
  "FlagIcon": [Function],
}
`);
});

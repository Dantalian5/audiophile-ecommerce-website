import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { expect, test } from "vitest";
import RadioButton from "./Radio.astro";

test("renders with provided props", async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(RadioButton, {
    props: {
      label: "Option 1",
      name: "group1",
      value: "option1",
    },
  });

  expect(result).toContain("Option 1"); // Comprueba que el label se muestra correctamente
  expect(result).toContain('name="group1"');
  expect(result).toContain('value="option1"');
});

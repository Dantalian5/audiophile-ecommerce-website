import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { expect, test } from "vitest";
import NumberInput from "./Number.astro";

test("renders with default size (lg)", async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(NumberInput, {
    props: {},
  });

  expect(result).toContain('class="lg number"');
  expect(result).toContain("<input");
  expect(result).toContain('type="number"');
  expect(result).toContain('value="1"');
  expect(result).toContain('min="1"');
});
test("renders with size set to sm", async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(NumberInput, {
    props: {
      size: "sm",
    },
  });

  expect(result).toContain('class="sm number"');
  expect(result).toContain("<input");
  expect(result).toContain('type="number"');
  expect(result).toContain('value="1"');
});
test("renders with increment and decrement buttons", async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(NumberInput, {
    props: {},
  });

  expect(result).toContain('class="number__btn minus-button"');
  expect(result).toContain('data-target="btn-input-number-minus"');
  expect(result).toContain('class="number__btn plus-button"');
  expect(result).toContain('data-target="btn-input-number-plus"');
});

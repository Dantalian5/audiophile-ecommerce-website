import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { expect, test } from "vitest";
import InputField from "./Input.astro";

test("renders with provided props", async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(InputField, {
    props: {
      label: "Username",
      placeholder: "Enter username",
      type: "text",
      name: "username",
    },
  });

  expect(result).toContain("Username"); // Comprueba que el label se muestra correctamente
  expect(result).toContain('placeholder="Enter username"');
  expect(result).toContain('type="text"');
  expect(result).toContain('name="username"');
});
test("applies error state to input when data-state is error", async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(InputField, {
    props: {
      label: "Username",
      placeholder: "Enter username",
      type: "text",
      name: "username",
      "data-state": "error",
    },
  });

  expect(result).toContain('data-state="error"');
  expect(result).toContain('class="label__error"');
});
test("does not show error message by default", async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(InputField, {
    props: {
      label: "Username",
      placeholder: "Enter username",
      type: "text",
      name: "username",
    },
  });

  expect(result).toContain('data-state="valid"');
});

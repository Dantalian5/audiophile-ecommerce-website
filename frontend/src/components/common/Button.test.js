import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { expect, test } from "vitest";
import Button from "./Button.astro";

test("renders as a link when href is provided", async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(Button, {
    props: {
      href: "/test",
      label: "Test Button",
    },
  });

  expect(result).toContain("<a");
  expect(result).toContain('href="/test"');
  expect(result).toContain("Test Button");
});
test("renders as a button when href is not provided", async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(Button, {
    props: {
      label: "Test Button",
    },
  });

  expect(result).toContain("<button");
  expect(result).toContain("Test Button");
});
test("applies variant and size classes correctly", async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(Button, {
    props: {
      label: "Test Button",
      variant: "flat",
      size: "lg",
    },
  });

  expect(result).toContain('class="button flat lg"');
});
test("renders endContent icon when endContent is true", async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(Button, {
    props: {
      label: "Test Button",
      endContent: true,
    },
  });

  expect(result).toContain("button__icon");
});

test("does not render endContent icon when endContent is false", async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(Button, {
    props: {
      label: "Test Button",
      endContent: false,
    },
  });

  expect(result).not.toContain("button__icon");
});

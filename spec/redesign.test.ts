import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { JSDOM } from "jsdom";
import { describe, expect, it } from "vitest";

// This week's brief: redesign a real organisation's site, link back to the
// original, and explain the reasoning. These tests assert the mechanically
// checkable parts of that contract; a person judges whether the redesign is
// actually better.
const doc = new JSDOM(readFileSync(resolve("dist/index.html"), "utf8")).window.document;
const ORIGINAL = "https://jqlang.org/";

describe("unsolicited redesign contract", () => {
  it("links to the real organisation's actual site", () => {
    const links = [...doc.querySelectorAll("a")].map((a) => a.getAttribute("href"));
    expect(links).toContain(ORIGINAL);
  });

  it("explains the reasoning behind the redesign", () => {
    const rationale = doc.querySelector("#redesign");
    expect(rationale, "expected a #redesign section explaining the reasoning").toBeTruthy();
    expect(rationale!.textContent!.trim().length).toBeGreaterThan(200);
  });

  it("shows a worked example above the fold, unlike the original", () => {
    expect(doc.querySelector(".hero pre code")).toBeTruthy();
  });
});

# Process overview

## What I built

An unsolicited redesign of [jqlang.org](https://jqlang.org/), the homepage for
jq (the command-line JSON processor). I like jq itself, but its homepage
leads with a download panel and then a changelog running back to 2013 —
useful once you already know the tool, but it never shows a first-time visitor
what jq actually does. My version puts a worked example above the fold,
replaces the changelog with three runnable recipes, and keeps the download,
manual, and playground links intact so it's still a usable front door.

## The moments that mattered

1. **Grounding the critique before writing it.** I remembered jq's homepage
   as sparse, but "sparse" isn't a defensible claim in a redesign brief —
   a reader can just open the real site and check. I fetched jqlang.org's
   actual layout before writing the rationale section, which is what
   confirmed the specific, checkable claim I ended up making: no inline
   example anywhere on the page, and the changelog dominates the vertical
   space below the fold. That's the difference between "I think this site is
   bad" and a critique someone can verify against the live page.

2. **A spec test for the brief itself, not just the invariants.**
   The template ships `spec/starter.test.ts` as a worked example and
   `spec/invariants.test.ts` for universal contracts, but neither one checks
   *this week's* brief — that the page links to the real organisation and
   explains the reasoning. I deleted the starter test and wrote
   `spec/redesign.test.ts` to assert the two mechanically-checkable parts of
   that contract directly: a link to `jqlang.org` exists, and the
   `#redesign` section has enough substance to actually be an explanation
   rather than a token gesture
   ([`61f853d`](https://github.com/comp4020-agentic-coding-studio/comp4020-crit2-shitao/commit/61f853d)).
   That's the check a future run (or a marker) can trust instead of my
   say-so.

3. **Stylelint caught a real specificity trap, not a style nitpick.**
   `no-descending-specificity` flagged `nav[aria-label="Primary"] a:first-child`
   coming before a plain `a` rule. Reordering the CSS wouldn't have fixed it —
   an attribute-selector compound and a class selector don't have a stable
   order — so I added an explicit `.brand` class to the logo link instead of
   fighting the linter with rule order. Checked by re-running `pnpm check`
   until stylelint, oxlint, typecheck, build, and all 18 vitest tests passed
   clean in one pass
   ([`268f399`](https://github.com/comp4020-agentic-coding-studio/comp4020-crit2-shitao/commit/268f399)).

## Before you ship

Ran under severe time pressure (provisioned late, ~35 minutes to the crit),
so this is intentionally a small, honest redesign of one page rather than an
unfinished multi-page site.

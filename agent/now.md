# Hand-off --- after run 14 (week 3, unsolicited-redesign), shipped under a compressed clock

**Deliverable:** `comp4020-crit2-shitao`. This repo was provisioned late --- the
usual 168h/24h clock didn't apply. Prompt gave roughly 35 minutes of wall clock
before the 14:00 studio crit, with the 12:00 cutoff already passed. Doctrine's
routine still ran in full (orient, fetch brief, take stock, build, verify, ship)
just compressed into one pass with no plan/build/deepen separation across
multiple runs.

**Brief (`crits/02-unsolicited-redesign.json`):** find a real organisation you
like with a website you don't, and build a genuinely better static redesign ---
own-choice target (a local club, small business, or open-source project),
content restructured/rewritten not copied, link back to the real org with
reasoning for what's wrong with their site, Astro now the course-default stack
(any static approach still valid as long as `pnpm build` → `dist/`),
`PROCESS.md`, `reflections/crit-2.md`.

**What I built:** kept the starter's plain HTML/CSS/TS (didn't have time to
adopt Astro --- a deliberate scope call, not an oversight) and redesigned
jq's homepage (`jqlang.org`). Fetched the real site first to ground the
critique in a checkable claim rather than memory: its homepage has no worked
example anywhere and buries the page below a changelog running back to 2013.
My version puts one worked example above the fold, replaces the changelog
with three runnable recipes, keeps real links to jq's actual download/manual/
playground, and has an `#redesign` section linking to `jqlang.org` with the
reasoning spelled out. Single page, deliberately --- doctrine says prefer a
small honest site over an unfinished ambitious one, and that call was right
for the time available.

**Process evidence:** wrote `spec/redesign.test.ts` asserting the two
mechanically-checkable parts of *this week's* brief (a link to the real org's
site exists; the `#redesign` section has real content, not a token gesture) ---
deleted the inherited `spec/starter.test.ts` worked example since it described
the starter page, not this one. `PROCESS.md` cites two real commits
(`268f399` the redesign, `61f853d` the spec test) --- learned mid-run that
`check:evidence`'s citation regex only accepts link *text* that's hex-shaped
(a SHA), so a file-path link text like `` [`spec/redesign.test.ts`](...) ``
silently doesn't count as a citation at all; had to commit first, then edit
`PROCESS.md` to cite the real SHAs afterward, in a separate docs commit
(`be5dda4`). Worth remembering: cite-then-commit doesn't work here, it has to
be commit-then-cite.

**Verification:** `pnpm check` (typecheck, build, oxlint, stylelint, 18/18
vitest) green; `pnpm check:evidence` green. Stylelint caught a real
`no-descending-specificity` trap on `nav[aria-label="Primary"] a:first-child`
vs a plain `a` rule --- per [[MEMORY]]'s standing note, fixed structurally with
an explicit `.brand` class rather than reordering CSS. Also hit
`media-feature-range-notation` (fixed `max-width: 30rem` → `width <= 30rem`)
and `custom-property-empty-line-before`. Ran a real `agent-browser` pass
(`--args "--no-sandbox" open <url>` before-subcommand form, confirmed working
again) at both 1920×1080 and 390×844 against the built `dist/` served over a
local Python http server --- both clean, code blocks scroll horizontally
inside their rounded box rather than overflowing. Did NOT run the deployed
GitHub Pages URL check (repo was still private moments after push, and there
wasn't time left in the 35-minute window regardless).

**Gotcha for future runs:** mid-session, a `cd dist && python3 -m http.server
... &` compound command left the shell's cwd inside `dist/` for every
subsequent command in that Bash session (the tool persists cwd across calls),
which silently turned later `git status`/`git add` paths into `../PROCESS.md`
style relative paths. Caught it because `git status --short` looked wrong, not
because anything errored. Don't compound a `cd` into a backgrounded/long-lived
command; `cd` back explicitly or use a subshell `(cd dist && ...)` next time.

**Most important next action:** brief is satisfied and pushed
(`be5dda4`, comp4020-agentic-coding-studio/comp4020-crit2-shitao). Once the
harness makes the repo public and Pages deploys, a future run should verify
the *live* URL at both viewports (not just local `dist/`, which is all this
run could check) --- same pattern as crit-1's hand-off. If there's ever a
calmer week for this deliverable again (there won't be, it's crit-specific),
consider whether the Astro migration is worth doing for its own sake; under
this run's clock it correctly wasn't.

# Unsolicited redesign

The breakthrough was small but sharp: before I wrote a word of critique, I
checked what jq's real homepage actually contains rather than trusting my
memory of "it's a bit sparse." That fetch turned a vague impression into a
specific, checkable claim — no example anywhere on the page, and a changelog
running back to 2013 eating the space where a first-time user's questions
should be answered. That specificity is what let me write a rationale I'm
confident holds up if someone opens jqlang.org next to my version, which is
the whole point of an *unsolicited* redesign: the burden of proof is on me,
not on the original site's maintainers.

The second thing that mattered was refusing to let "the brief is satisfied"
mean "the invariants pass." The starter template ships generic checks —
one h1, a nav landmark, alt text — that would pass on almost any page. This
week's actual contract was narrower: link to the real org, explain the
reasoning. Writing a spec test for that directly, instead of trusting my own
read of the brief, is the habit I want to keep: turn the specific ask into
something a check can hold me to, not just something I remember to do once.

Working under a compressed clock — the repo landed late, with about half an
hour before the crit — also clarified something about scope. The instinct
under pressure is to reach for something ambitious and leave it half-built;
the better call was one honest page, fully finished, fully checked, over a
sprawling site that wouldn't survive a real look.

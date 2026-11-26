# Man vs. Math: Multiplication Madness

The next Man vs. Math classroom game (after *Surviving Long Division*), starring explorer
Rex Ranger. 7th-grade multi-digit multiplication, 3 episodes × 4 levels, played in the browser (iPad, phone, desktop).

Live: <https://mrjoehier.github.io/multiplication-madness/>

## Levels (top number × bottom number; the bottom number sets how many rows of work)

| Episode | Setting | Time per problem | L1 | L2 | L3 | L4 (2 problems) |
|---|---|---|---|---|---|---|
| 1 | The Volcano | 3:00 | 2×2 digits | 2×3 | 2×4 | 2×5 |
| 2 | The Canyon | 4:00 | 3×3 | 3×4 | 3×5 | 3×6 |
| 3 | The Temple | 5:00 | 4×4 | 4×5 | 4×6 | 4×7 |

Levels 1–3 have four problems, Level 4 has two. Strength starts at 100%, drops 10% per mistake, +30% after each
level, back to 100% after an episode. Out of strength = restart the episode; out of time = retry the level.

## The multiplication scaffold (click a blank, then tap a number)

There are no step or operator buttons. The only controls in the math phase are the number tiles 0-9 under the page.

1. **Click an empty answer blank** under the line, starting with the rightmost one (ones place). The blank lights up.
2. **Tap the number tile** (0-9) that belongs in it. Placeholder zeros are ordinary blanks: click the blank, tap **0**.
3. The factor digits are not clickable; the digit being multiplied is highlighted for you.
4. **Carries are automatic.** When a digit you enter produces a carry (4 x 9 = 36: you enter 6), the carry shows in the small
   box above the next top digit by itself; a final carry is written as the row's leading digit by itself.
5. When the last partial-product row is full, the game moves to the answer row on its own: blanks for the answer, right to
   left, with the column carries shown automatically. Finish the answer to solve the problem.

Wrong number tile or clicking a blank out of order = -10% strength and a shake. Tapping a tile before choosing a blank is only a
friendly reminder (no penalty). Stars: no mistakes = 3, up to 2 = 2, more = 1.

## Adventures

See `index.html` (`LV_INFO` / `EP_LV`). All 12 have their own intro clip, win clip, lose screen and sound-effect mix.

## Files

- `index.html`: the whole game (HTML + CSS + JS). `sw.js`, `manifest.webmanifest`: PWA bits.
- `assets/`: art, 24 clips (`setup-eXlY.mp4`, `win-eXlY.mp4`, silent 960×540 24 fps; sound is in `assets/sfx/*.m4a` + the music),
  12 lose stills, maps, narration, music, fonts.
- `firebase/firestore.rules` and `FIREBASE_SETUP.md`: accounts and scoreboard (needs the rules published once).
- `BUILD-NOTES.md`, `QUESTIONS-LOG.md`: build log and the questions/choices made while building.
- `?dev=1` shows the developer panel (jump to any level, auto-solve, win/lose).

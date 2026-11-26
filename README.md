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

## The multiplication scaffold (click a blank, then tap numbers)

There are no step or operator buttons. The only controls in the math phase are the number tiles 0-9 under the page.

1. **Click the rightmost empty blank of a row once** (ones place), then tap number tiles: the cursor moves left by itself.
   Placeholder zeros are ordinary blanks (click, tap **0**). Factor digits are not clickable.
2. **Carries are written by the player, in small boxes on top.** When a carry is due, an empty carry box appears by itself above
   the next top digit and the cursor jumps into it (no click). Tap the carry; the cursor goes back to the next digit by itself. A
   row's last (leading) digit works the same way. The previous row's carries are wiped when the next row is started.
3. When the last partial-product row is full, the answer row is next: click its rightmost blank once, then keep tapping. Column
   carries appear the same way, in a small box above the next column (above the first partial product).

Wrong number tile, a blank clicked out of order = -10% strength and a shake. Tapping a tile before placing the cursor is only a
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

# Man vs. Math: Multiplication Madness

The third Man vs. Math classroom game (after *Surviving Long Division* and the fact-families game), starring explorer
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

## The multiplication scaffold (mirrors the long-division step buttons)

1. **Tap the bottom digit** you multiply by (ones digit first, then tens, hundreds, thousands).
2. Press **Place holder 0** (only for the tens digit and beyond): drops the zeros for that row.
3. Press **× Multiply**, then type the row's product digits right to left. Carries appear in small boxes above the next
   top digit; a final carry is written as the row's leading digit.
4. Repeat for each bottom digit. When every row is done, press **+ Add**.
5. Add the columns right to left (carries go in the small boxes above the next column) to write the answer.

Wrong digit, wrong tap or wrong step button = −10% strength and a shake. Stars: no mistakes = 3, up to 2 = 2, more = 1.

## Adventures

See `index.html` (`LV_INFO` / `EP_LV`). All 12 have their own intro clip, win clip, lose screen and sound-effect mix.

## Files

- `index.html`: the whole game (HTML + CSS + JS). `sw.js`, `manifest.webmanifest`: PWA bits.
- `assets/`: art, 24 clips (`setup-eXlY.mp4`, `win-eXlY.mp4`, silent 960×540 24 fps; sound is in `assets/sfx/*.m4a` + the music),
  12 lose stills, maps, narration, music, fonts.
- `firebase/firestore.rules` and `FIREBASE_SETUP.md`: accounts and scoreboard (needs the rules published once).
- `BUILD-NOTES.md`, `QUESTIONS-LOG.md`: build log and the questions/choices made while building.
- `?dev=1` shows the developer panel (jump to any level, auto-solve, win/lose).

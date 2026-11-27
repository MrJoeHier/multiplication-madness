# Man vs. Math: Multiplication Madness

The next Man vs. Math classroom game (after *Surviving Long Division*), starring explorer
Rex Ranger. 7th-grade multi-digit multiplication, 3 episodes × 4 levels, played in the browser (iPad, phone, desktop).

Live: <https://mrjoehier.github.io/multiplication-madness/>

## Levels (every level has 4 problems, freshly randomized each time)

Shapes are bottom × top digits. **S / M / L** sizes per episode:

| Episode | Setting | Time per problem | S | M | L |
|---|---|---|---|---|---|
| 1 | The Volcano | 2:00 | 2×2 | 2×3 | 2×4 |
| 2 | The Canyon | 2:30 | 3×3 | 3×4 | 4×4 |
| 3 | The Temple (decimals) | 2:00 | 3×3 | 3×4 | 4×4 |

- **Level 1:** four S.
- **Level 2:** problem 1 is M, one more M at a random spot (2–4), the other two S.
- **Level 3:** problem 1 is L, one more L at a random spot (2–4), the other two M.
- **Level 4:** three L and one M (the M lands anywhere, 1–4).

Strength starts at 100%, drops 10% per mistake, +30% after each level, back to 100% after an episode. Out of strength =
restart the episode; out of time = retry the level.

## Episode 3: decimals

Factors may carry a decimal point (at least one per problem; each factor keeps at least one digit before the point; digits stay
right-aligned). The multiplication, carries and addition work exactly like whole numbers. After the sum row there is one last
step: the player places the decimal point in the product by tapping the gap between two digits (keyboard: ← / → to move, "." or
Enter to place). Correct = total decimal places of both factors, counted from the right. A wrong gap costs 10% strength with the
hint "Count the decimal places in both factors."

## The multiplication scaffold (no clicking needed, just tap or type numbers)

There are no step or operator buttons. The only controls in the math phase are the number tiles 0-9 (or the keyboard).

1. The cursor is already in the ones box of the first row; tap number tiles (or type) and it moves left by itself. Placeholder
   zeros are ordinary boxes (tap **0**). Factor digits are not clickable.
2. **Carries are written by the player, in small boxes on top.** When a carry is due, an empty carry box appears by itself above
   the next top digit and the cursor jumps into it. Tap the carry; the cursor goes back by itself. A row's last (leading) digit
   works the same way. The previous row's carries are wiped when the next row is started.
3. The first partial product sits directly under the multiplication line. Column carries for the sum appear the same way, as
   small boxes tucked above the next column.

**Repeated digit shortcut (drag to copy):** when the current row's multiplier digit equals one already finished (e.g. 123 × 77), a
long-press (~400 ms, touch or mouse) on that earlier row lifts a ghost copy of its digits; drop it on the current row. With all
the 0 placeholders typed, the digits snap into place (chime + shimmer) and the cursor moves on, no carries needed. Without them
the ghost bounces to the ones place and it counts as a mistake (-10%, "Type the 0 placeholder first, then drag it over."). Dropping
anywhere else cancels with no penalty. There is no visual hint on the problem itself, only a tip in the prompt. Typing the row by
hand (with carries) still works exactly as before.

A wrong number tile = -10% strength and a shake. Stars: no mistakes = 3, up to 2 = 2, more = 1.

## Adventures

See `index.html` (`LV_INFO` / `EP_LV`). All 12 have their own intro clip, win clip, lose screen and sound-effect mix.

## Files

- `index.html`: the whole game (HTML + CSS + JS). `sw.js`, `manifest.webmanifest`: PWA bits.
- `assets/`: art, 24 clips (`setup-eXlY.mp4`, `win-eXlY.mp4`, silent 960×540 24 fps; sound is in `assets/sfx/*.m4a` + the music),
  12 lose stills, maps, narration, music, fonts.
- `firebase/firestore.rules` and `FIREBASE_SETUP.md`: accounts and scoreboard (needs the rules published once).
- `BUILD-NOTES.md`, `QUESTIONS-LOG.md`: build log and the questions/choices made while building.
- `?dev=1` shows the developer panel (jump to any level, auto-solve, win/lose).

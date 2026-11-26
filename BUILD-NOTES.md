# Multiplication Madness — build progress notes (keep updated)
Work dirs: project /workspace/multiplication-madness ; media work /workspace/mm-build/media ; scripts /workspace/mm-build/*.py ; questions log /workspace/mm-build/QUESTIONS.md
Base: copy of division-dash main a3b2a93 index.html (4623 lines) -> being rewritten for multiplication.
## Done
- [x] stills (12 start frames) media/stills/eXlY-start.jpg
- [x] 12 intros built (960x540 24fps 356fr, freeze fr260): media/intro/eXlY-intro.mp4 + -poster.jpg + -freeze.png (build_intro.py code Tp)
- [x] 12 raw win clips (1280x720, 15s, from freeze frame): media/win/eXlY-raw.mp4 (gaze issue: e2l1,e3l2,e3l3 end looking toward camera -> trim/redo; first redo attempt 'Aborted')
## TODO (in order)
- [ ] finalize win clips (trim at off-camera gaze, 960x540 silent, poster)
- [ ] 12 lose stills (GenerateImage, ref freeze frame)
- [ ] 3 maps (horizontal, trail) + route extraction -> EP_INFO pts/path
- [ ] 3 episode Rex portraits (+blink), title hero
- [ ] narration x3 (edge_tts en-US-AndrewNeural), music reuse, SFX m4a (mvm-sfx synth)
- [ ] rewrite index.html: LEVELS, multiplication engine, board render, input, text; EP_INFO/LV_INFO; Firebase collections mm_*; remove short-division UI
- [ ] firebase/firestore.rules for mm_ collections; sw.js bump; manifest; README
- [ ] QA (playwright): every level, math, media, mobile/desktop
- [ ] create repo MrJoeHier/multiplication-madness, push main (author MrJoeHier <jhier@i5design.com>), enable Pages, verify live
- redo wins (raw2) e2l1,e3l2,e3l3 generated: media/win/*-raw2.mp4
- [x] lose stills v1 in media/lose/eXlY-lose.jpg; redone; all lose stills encoded to assets/lose-eXlY.jpg
- [x] 3 maps in assets/map-{volcano,canyon,temple}-wide.jpg/webp; routes in BUILD-routes.json (mapwork/routes_final.json); check portrait map usage in index (map-jungle.jpg non-wide)
- [x] win/setup mp4+posters encoded (24 files each ok), lose stills, maps, title-rex/title-hero/ep1-3-rex(+blink) NEW art in assets (2026-11-25)
- NEXT: narration, sfx, index.html rewrite
- [x] narration ep1-3 mp3 in assets/narration; LINES js at /workspace/mm-build/narr/lines.js (build_narr.py)
- [x] SFX m4a x24 in assets/sfx (sfx work: /workspace/mm-build/sfx gen_cues.py, make_sfx.py)
- NEXT: index.html rewrite (engine lines 1274-2450 of orig). map ambience: modify Ambience ep===2 to temple
- [x] index.html core rewrite applied (levels, engine, render, input, EP_INFO, LV_INFO, narration lines); NEXT: run in browser (Playwright), fix errors; backups: /workspace/mm-build/patch/*.js, index.orig.html
- [x] fullrun.py: all 12 levels clip->play->win->scoreboard->map->episode cards->Champion pass (2026-11-25 22:xx). Fixed: showBoard/passing timeouts. NEXT: lose screens, mobile views, leftover text grep, push
- [x] QA step 1a (2026-11-25 late): win clips checked frame-by-frame; e2l1/e3l2/e3l3 confirmed raw2 (pixel match). Found Rex turning to camera at the very end of win-e1l3 and win-e2l3: trimmed to 12.9s / 12.4s (sfx m4a trimmed + fade to match). Originals in /tmp/wq/orig.
- [x] QA step 1b: lose screens (12 stills + "YOU LOSE" overlay; sting 3.4 s, screen waits for Try Again) checked on phone portrait/landscape, iPad, desktop (qa2/vp.py): no errors, no division/other-game text. Play screens checked on phone/desktop (qa2/play.py). Leftover-text grep: only dead CSS class names (ep-snow etc.) remain, none visible. Intro freeze frames (10.83s) and 12 win clips reviewed frame-by-frame for gaze. README line fixed. Rules file based on the PUBLISHED division-dash rules (+mm_ collections), not the unpublished v1.1 draft.
- NEXT: gh repo create MrJoeHier/multiplication-madness, push main, enable Pages, live verify.
- [x] repo created+pushed main; Pages enabled (main /)
- [x] LIVE verified 2026-11-25: https://mrjoehier.github.io/multiplication-madness/ index md5 matches; Playwright desktop+phone guest: Geyser Run clip -> 4 problems solved -> win clip -> scoreboard, no errors. DONE. Remaining: Joe tests + answers QUESTIONS-LOG.

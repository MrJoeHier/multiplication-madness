# Questions/options log (what I chose)
- Q: Firebase — shared "man-vs-math" project or own? CHOSE: reuse the man-vs-math project's Auth (students keep one login) but new collections mm_users/mm_leaderboard/mm_events; rules file shipped in firebase/firestore.rules for Joe to publish; until published the game falls back to local saves.
- Q: 12 adventures themes? CHOSE: E1 Volcano Island, E2 Canyon Badlands, E3 Lost Temple (see README).
- Q: Timer per problem? CHOSE: larger numbers need more time, so E1 3:00 / E2 4:00 / E3 5:00 per problem.
- Q: Lose screens — clip or still? CHOSE: a still of Rex (one per level) with the "YOU LOSE" title and a 3.4 s sting, so it is well under 4 s of action; the screen waits for the Try Again button. Easy to swap for 4 s clips if Joe prefers.
- Q: What do "2x3", "4x7" mean? CHOSE: the digits in the two numbers; the bottom (smaller) number sets how many rows of work, e.g. 2x3 = a 3-digit number times a 2-digit number. Joe may want it the other way round.
- Q: Two win clips (Log Slide, Broken Ledge) ended with Rex turning toward the camera. CHOSE: trim them to 12.9 s and 12.4 s instead of re-generating (the other ten are 14-15 s). Re-making them to a full 15 s is an option.
- Q: Music? CHOSE: reused the long-division brass theme and level-intro cue as-is; a new theme is an option.
- Q: Firestore rules? CHOSE: firebase/firestore.rules = the currently published long-division rules + mm_users/mm_leaderboard/mm_events. It does NOT include the unpublished teacher-reset (v1.1) draft; if Joe publishes that draft later, the mm_ collections must be added to it. Until rules are published, accounts/scoreboard fall back to this-device saves.
- Q: Developer panel? CHOSE: left available at ?dev=1 (hidden otherwise) like the first game.

/* Intro, lose, and win graphics in the live game, grouped by level (12 of each). Paths are relative to /review/. */
window.EPN = {"1": "Episode 1 · The Volcano", "2": "Episode 2 · The Canyon", "3": "Episode 3 · The Temple"};
window.LEVELS = [
  {
    code: "01", ep: 1, lv: 1, name: "Geyser Run", brief: "Solve 4 problems to dodge the geysers!", cap: "Geysers dodged!", desc: "2-digit × 2-digit",
    intro: [ { v: "../assets/setup-e1l1.mp4", p: "../assets/setup-e1l1-poster.jpg", a: "../assets/music/level-intro.mp3", sfx: "../assets/sfx/setup-e1l1.m4a", d: 14.833333 } ],
    lose: [ { img: "../assets/lose-e1l1.jpg", sting: "lose-sting.m4a" } ],
    win: [ { v: "../assets/win-e1l1.mp4", p: "../assets/win-e1l1-poster.jpg", a: "../assets/music/main-theme.mp3", sfx: "../assets/sfx/win-e1l1.m4a", d: 15.0 } ]
  },
  {
    code: "02", ep: 1, lv: 2, name: "Breaking Bridge", brief: "Solve 4 problems to cross the breaking bridge!", cap: "Made it across!", desc: "2-digit × 3-digit",
    intro: [ { v: "../assets/setup-e1l2.mp4", p: "../assets/setup-e1l2-poster.jpg", a: "../assets/music/level-intro.mp3", sfx: "../assets/sfx/setup-e1l2.m4a", d: 14.833333 } ],
    lose: [ { img: "../assets/lose-e1l2.jpg", sting: "lose-sting.m4a" } ],
    win: [ { v: "../assets/win-e1l2.mp4", p: "../assets/win-e1l2-poster.jpg", a: "../assets/music/main-theme.mp3", sfx: "../assets/sfx/win-e1l2.m4a", d: 15.0 } ]
  },
  {
    code: "03", ep: 1, lv: 3, name: "Log Slide", brief: "Solve 4 problems to dodge the tumbling logs!", cap: "Dodged them all!", desc: "2-digit × 4-digit",
    intro: [ { v: "../assets/setup-e1l3.mp4", p: "../assets/setup-e1l3-poster.jpg", a: "../assets/music/level-intro.mp3", sfx: "../assets/sfx/setup-e1l3.m4a", d: 14.833333 } ],
    lose: [ { img: "../assets/lose-e1l3.jpg", sting: "lose-sting.m4a" } ],
    win: [ { v: "../assets/win-e1l3.mp4", p: "../assets/win-e1l3-poster.jpg", a: "../assets/music/main-theme.mp3", sfx: "../assets/sfx/win-e1l3.m4a", d: 12.916667 } ]
  },
  {
    code: "04", ep: 1, lv: 4, name: "Volcano Rendezvous", brief: "Solve 2 problems to reach the boat before the volcano erupts!", cap: "All aboard!", desc: "2-digit × 5-digit",
    intro: [ { v: "../assets/setup-e1l4.mp4", p: "../assets/setup-e1l4-poster.jpg", a: "../assets/music/level-intro.mp3", sfx: "../assets/sfx/setup-e1l4.m4a", d: 14.833333 } ],
    lose: [ { img: "../assets/lose-e1l4.jpg", sting: "lose-sting.m4a" } ],
    win: [ { v: "../assets/win-e1l4.mp4", p: "../assets/win-e1l4-poster.jpg", a: "../assets/music/main-theme.mp3", sfx: "../assets/sfx/win-e1l4.m4a", d: 15.0 } ]
  },
  {
    code: "05", ep: 2, lv: 1, name: "Flash Flood", brief: "Solve 4 problems to outrun the flash flood!", cap: "High and dry!", desc: "3-digit × 3-digit",
    intro: [ { v: "../assets/setup-e2l1.mp4", p: "../assets/setup-e2l1-poster.jpg", a: "../assets/music/level-intro.mp3", sfx: "../assets/sfx/setup-e2l1.m4a", d: 14.833333 } ],
    lose: [ { img: "../assets/lose-e2l1.jpg", sting: "lose-sting.m4a" } ],
    win: [ { v: "../assets/win-e2l1.mp4", p: "../assets/win-e2l1-poster.jpg", a: "../assets/music/main-theme.mp3", sfx: "../assets/sfx/win-e2l1.m4a", d: 15.0 } ]
  },
  {
    code: "06", ep: 2, lv: 2, name: "Dust Wall", brief: "Solve 4 problems to outlast the sandstorm!", cap: "Storm survived!", desc: "3-digit × 4-digit",
    intro: [ { v: "../assets/setup-e2l2.mp4", p: "../assets/setup-e2l2-poster.jpg", a: "../assets/music/level-intro.mp3", sfx: "../assets/sfx/setup-e2l2.m4a", d: 14.833333 } ],
    lose: [ { img: "../assets/lose-e2l2.jpg", sting: "lose-sting.m4a" } ],
    win: [ { v: "../assets/win-e2l2.mp4", p: "../assets/win-e2l2-poster.jpg", a: "../assets/music/main-theme.mp3", sfx: "../assets/sfx/win-e2l2.m4a", d: 15.0 } ]
  },
  {
    code: "07", ep: 2, lv: 3, name: "Broken Ledge", brief: "Solve 4 problems to leap the crumbling ledge!", cap: "Up and over!", desc: "3-digit × 5-digit",
    intro: [ { v: "../assets/setup-e2l3.mp4", p: "../assets/setup-e2l3-poster.jpg", a: "../assets/music/level-intro.mp3", sfx: "../assets/sfx/setup-e2l3.m4a", d: 14.833333 } ],
    lose: [ { img: "../assets/lose-e2l3.jpg", sting: "lose-sting.m4a" } ],
    win: [ { v: "../assets/win-e2l3.mp4", p: "../assets/win-e2l3-poster.jpg", a: "../assets/music/main-theme.mp3", sfx: "../assets/sfx/win-e2l3.m4a", d: 12.416667 } ]
  },
  {
    code: "08", ep: 2, lv: 4, name: "Rendezvous Point", brief: "Solve 2 problems to reach the jeep through the boulders!", cap: "Rescued in the nick of time!", desc: "3-digit × 6-digit",
    intro: [ { v: "../assets/setup-e2l4.mp4", p: "../assets/setup-e2l4-poster.jpg", a: "../assets/music/level-intro.mp3", sfx: "../assets/sfx/setup-e2l4.m4a", d: 14.833333 } ],
    lose: [ { img: "../assets/lose-e2l4.jpg", sting: "lose-sting.m4a" } ],
    win: [ { v: "../assets/win-e2l4.mp4", p: "../assets/win-e2l4-poster.jpg", a: "../assets/music/main-theme.mp3", sfx: "../assets/sfx/win-e2l4.m4a", d: 15.0 } ]
  },
  {
    code: "09", ep: 3, lv: 1, name: "Crumbling Stairs", brief: "Solve 4 problems to climb the crumbling stairs!", cap: "Top of the stairs!", desc: "4-digit × 4-digit",
    intro: [ { v: "../assets/setup-e3l1.mp4", p: "../assets/setup-e3l1-poster.jpg", a: "../assets/music/level-intro.mp3", sfx: "../assets/sfx/setup-e3l1.m4a", d: 14.833333 } ],
    lose: [ { img: "../assets/lose-e3l1.jpg", sting: "lose-sting.m4a" } ],
    win: [ { v: "../assets/win-e3l1.mp4", p: "../assets/win-e3l1-poster.jpg", a: "../assets/music/main-theme.mp3", sfx: "../assets/sfx/win-e3l1.m4a", d: 15.0 } ]
  },
  {
    code: "10", ep: 3, lv: 2, name: "Stone Wheel", brief: "Solve 4 problems to outrun the rolling stone wheel!", cap: "Not today, stone wheel!", desc: "4-digit × 5-digit",
    intro: [ { v: "../assets/setup-e3l2.mp4", p: "../assets/setup-e3l2-poster.jpg", a: "../assets/music/level-intro.mp3", sfx: "../assets/sfx/setup-e3l2.m4a", d: 14.833333 } ],
    lose: [ { img: "../assets/lose-e3l2.jpg", sting: "lose-sting.m4a" } ],
    win: [ { v: "../assets/win-e3l2.mp4", p: "../assets/win-e3l2-poster.jpg", a: "../assets/music/main-theme.mp3", sfx: "../assets/sfx/win-e3l2.m4a", d: 15.0 } ]
  },
  {
    code: "11", ep: 3, lv: 3, name: "Flooded Passage", brief: "Solve 4 problems to cross the flooding passage!", cap: "Through the flood!", desc: "4-digit × 6-digit",
    intro: [ { v: "../assets/setup-e3l3.mp4", p: "../assets/setup-e3l3-poster.jpg", a: "../assets/music/level-intro.mp3", sfx: "../assets/sfx/setup-e3l3.m4a", d: 14.833333 } ],
    lose: [ { img: "../assets/lose-e3l3.jpg", sting: "lose-sting.m4a" } ],
    win: [ { v: "../assets/win-e3l3.mp4", p: "../assets/win-e3l3-poster.jpg", a: "../assets/music/main-theme.mp3", sfx: "../assets/sfx/win-e3l3.m4a", d: 15.0 } ]
  },
  {
    code: "12", ep: 3, lv: 4, name: "Rendezvous Point", brief: "Solve 2 problems to reach the rescue helicopter!", cap: "You've done it — way to go!", desc: "4-digit × 7-digit",
    intro: [ { v: "../assets/setup-e3l4.mp4", p: "../assets/setup-e3l4-poster.jpg", a: "../assets/music/level-intro.mp3", sfx: "../assets/sfx/setup-e3l4.m4a", d: 14.833333 } ],
    lose: [ { img: "../assets/lose-e3l4.jpg", sting: "lose-sting.m4a" } ],
    win: [ { v: "../assets/win-e3l4.mp4", p: "../assets/win-e3l4-poster.jpg", a: "../assets/music/main-theme.mp3", sfx: "../assets/sfx/win-e3l4.m4a", d: 15.0 } ]
  }
];

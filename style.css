:root {
  --bg: #f4f5f8;
  --sf: #ffffff;
  --sf-alt: #ebedf2;
  --ink: #12141d;
  --mut: #5c6173;
  --ln: #dfe2ea;
  --c: #8f0f14;
  --m: #d8161c;
  --m-soft: rgba(216, 22, 28, 0.12);
  --y: #ffd400;
  --k: #12141d;
  color-scheme: light;
  box-sizing: border-box;
  padding-top: env(safe-area-inset-top, 0px);
  padding-bottom: env(safe-area-inset-bottom, 0px);
}

@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --bg: #0b0d13;
    --sf: #151822;
    --sf-alt: #1c202d;
    --ink: #f3f4f8;
    --mut: #9ca2b4;
    --ln: #262b38;
    --m-soft: rgba(216, 22, 28, 0.2);
    --k: #f3f4f8;
    color-scheme: dark;
  }
}

:root[data-theme="dark"] {
  --bg: #0b0d13;
  --sf: #151822;
  --sf-alt: #1c202d;
  --ink: #f3f4f8;
  --mut: #9ca2b4;
  --ln: #262b38;
  --m-soft: rgba(216, 22, 28, 0.2);
  --k: #f3f4f8;
  color-scheme: dark;
}

html {
  scroll-padding-top: 76px;
  scroll-behavior: smooth;
}

*, *::before, *::after {
  box-sizing: inherit;
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--ink);
  font: 400 16px/1.6 "Instrument Sans", system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3 {
  font-family: "Bricolage Grotesque", "Instrument Sans", system-ui, sans-serif;
  line-height: 1.08;
  margin: 0;
}

button, input, select, textarea {
  font: inherit;
  color: inherit;
}

:focus-visible {
  outline: 3px solid var(--m);
  outline-offset: 2px;
}

.wrap {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 22px;
}

/* HEADER */
header {
  position: sticky;
  top: 0;
  z-index: 20;
  background: color-mix(in srgb, var(--bg) 80%, transparent);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--ln);
}

header .wrap {
  display: flex;
  align-items: center;
  gap: 20px;
  height: 66px;
}

.logo {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font: 800 21px "Bricolage Grotesque", sans-serif;
  letter-spacing: -0.02em;
  margin-right: auto;
  text-decoration: none;
  color: var(--ink);
}

.logo-mark {
  display: inline-grid;
  place-items: center;
  width: 30px;
  height: 30px;
  border-radius: 8px;
  background: var(--m);
  color: #fff;
  font-size: 17px;
}

.logo i {
  font-style: normal;
  color: var(--m);
}

nav {
  display: flex;
  gap: 6px;
}

nav a {
  color: var(--mut);
  text-decoration: none;
  font-weight: 600;
  font-size: 15px;
  padding: 6px 12px;
  border-radius: 99px;
  transition: color 0.2s ease, background 0.2s ease;
}

nav a:hover {
  color: var(--ink);
  background: var(--sf-alt);
}

/* HERO */
.hero-bg {
  position: relative;
  overflow: hidden;
  background: radial-gradient(circle at 85% 20%, var(--m-soft), transparent 45%);
}

.hero {
  padding: 64px 22px 58px;
  display: grid;
  gap: 42px;
  align-items: center;
}

@media (min-width: 880px) {
  .hero {
    grid-template-columns: 1.15fr 0.85fr;
  }
}

.pill-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--sf);
  border: 1px solid var(--ln);
  padding: 6px 14px;
  border-radius: 99px;
  font-size: 13px;
  font-weight: 600;
  color: var(--mut);
  margin-bottom: 18px;
}

.pill-badge .dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #16a34a;
  box-shadow: 0 0 0 3px rgba(22, 163, 74, 0.2);
}

.hero h1 {
  font-size: clamp(38px, 6vw, 68px);
  font-weight: 800;
  letter-spacing: -0.035em;
}

.txt-accent {
  color: var(--m);
}

.hero p {
  max-width: 48ch;
  color: var(--mut);
  font-size: 17.5px;
  margin: 20px 0 28px;
}

.hero-acts {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.cmyk-bar {
  display: flex;
  gap: 6px;
  margin-top: 36px;
}

.cmyk-bar span {
  width: 28px;
  height: 6px;
  border-radius: 99px;
}

/* STATS CARD */
.stats {
  background: var(--sf);
  border: 1px solid var(--ln);
  border-radius: 20px;
  padding: 26px;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.08);
  position: relative;
}

.stats-head {
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--mut);
  margin-bottom: 16px;
}

.big {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 22px;
}

.stat-box {
  background: var(--bg);
  border: 1px solid var(--ln);
  border-radius: 14px;
  padding: 14px 16px;
}

.big b {
  display: block;
  font: 800 clamp(28px, 4.5vw, 40px)/1 "Bricolage Grotesque", sans-serif;
  letter-spacing: -0.02em;
  color: var(--ink);
  margin-bottom: 4px;
}

.big span {
  color: var(--mut);
  font-size: 13.5px;
  font-weight: 500;
}

.mt {
  margin-top: 16px;
}

.mt div {
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 6px;
}

.mt i {
  display: block;
  height: 8px;
  background: var(--ln);
  border-radius: 99px;
  overflow: hidden;
}

.mt u {
  display: block;
  height: 100%;
  background: linear-gradient(90deg, var(--c), var(--m));
  width: 0;
  border-radius: 99px;
  transition: width 1s cubic-bezier(0.22, 1, 0.36, 1);
  text-decoration: none;
}

/* BUTTONS */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--m);
  background: var(--m);
  color: #fff;
  padding: 12px 24px;
  font-weight: 600;
  border-radius: 999px;
  cursor: pointer;
  text-decoration: none;
  transition: transform 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;
}

.btn:hover {
  background: #b91116;
  border-color: #b91116;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(216, 22, 28, 0.28);
}

.btn.ghost {
  background: var(--sf);
  border-color: var(--ln);
  color: var(--ink);
}

.btn.ghost:hover {
  background: var(--ink);
  color: var(--bg);
  border-color: var(--ink);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

/* SECTIONS */
section {
  padding: 64px 0;
  border-top: 1px solid var(--ln);
}

.sec-alt {
  background: color-mix(in srgb, var(--sf) 50%, var(--bg));
}

.sec-head {
  margin-bottom: 28px;
}

h2 {
  font-size: clamp(28px, 4.5vw, 42px);
  letter-spacing: -0.025em;
  margin-bottom: 8px;
}

.sub {
  color: var(--mut);
  margin: 0;
  max-width: 56ch;
}

/* CHIPS */
.chips {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 26px;
}

.chip {
  border: 1.5px solid var(--ln);
  background: var(--sf);
  padding: 8px 18px;
  border-radius: 999px;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.2s ease;
}

.chip:hover:not([aria-pressed="true"]) {
  border-color: var(--ink);
  transform: translateY(-1px);
}

.chip[aria-pressed="true"] {
  background: var(--ink);
  color: var(--bg);
  border-color: var(--ink);
}

/* PRODUCT GRID & CARDS */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 20px;
}

.tile {
  background: var(--sf);
  border: 1px solid var(--ln);
  border-radius: 18px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}

.tile:hover {
  transform: translateY(-6px);
  border-color: var(--m);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.12);
}

.tile .sw {
  height: 132px;
  position: relative;
  display: grid;
  place-items: center;
  overflow: hidden;
  color: #fff;
}

/* Efek pola titik halus di header kartu */
.tile .sw::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(255, 255, 255, 0.16) 1px, transparent 1px);
  background-size: 14px 14px;
}

.tile .sw .ico {
  position: relative;
  z-index: 1;
  width: 56px;
  height: 56px;
  display: grid;
  place-items: center;
  background: rgba(255, 255, 255, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.24);
  border-radius: 16px;
  backdrop-filter: blur(6px);
  transition: transform 0.3s ease;
}

.tile:hover .sw .ico {
  transform: scale(1.1) rotate(-3deg);
}

.tile .sw .tag {
  position: absolute;
  top: 12px;
  left: 12px;
  z-index: 1;
  background: rgba(0, 0, 0, 0.32);
  backdrop-filter: blur(6px);
  padding: 4px 11px;
  border-radius: 99px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.02em;
}

.tile .bd {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
}

.tile h3 {
  font-size: 21px;
}

.tile p {
  margin: 0;
  color: var(--mut);
  font-size: 14.5px;
  flex: 1;
}

.tile .pr {
  font-weight: 700;
  font-size: 16px;
  color: var(--m);
  margin-top: 6px;
}

.tile .est {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: var(--mut);
}

.tile .btn {
  width: 100%;
  margin-top: 12px;
  padding: 10px 18px;
  background: var(--ink);
  border-color: var(--ink);
  color: var(--bg);
}

.tile:hover .btn {
  background: var(--m);
  border-color: var(--m);
  color: #fff;
}

/* CARA PESAN (STEPS) */
.steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 18px;
  counter-reset: s;
  padding: 0;
  list-style: none;
  margin: 0;
}

.steps li {
  counter-increment: s;
  background: var(--sf);
  border: 1px solid var(--ln);
  border-radius: 18px;
  padding: 22px;
  position: relative;
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
}

.steps li:hover {
  transform: translateY(-4px);
  border-color: var(--m);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.06);
}

.steps li::before {
  content: counter(s);
  display: inline-grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border-radius: 12px;
  background: var(--m-soft);
  color: var(--m);
  font: 800 17px "Bricolage Grotesque", sans-serif;
  margin-bottom: 14px;
}

.steps b {
  display: block;
  font: 700 19px "Bricolage Grotesque", sans-serif;
  margin-bottom: 6px;
}

.steps span {
  color: var(--mut);
  font-size: 14.5px;
  line-height: 1.5;
}

/* LACAK PESANAN */
.lacak-card {
  background: var(--sf);
  border: 1px solid var(--ln);
  border-radius: 22px;
  padding: 32px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.05);
}

.lacak {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  max-width: 560px;
}

.lacak input {
  flex: 1;
  min-width: 220px;
  padding: 12px 16px;
  border-radius: 99px;
}

input, select, textarea {
  width: 100%;
  background: var(--bg);
  border: 1.5px solid var(--ln);
  border-radius: 10px;
  padding: 10px 14px;
  transition: border-color 0.2s ease;
}

input:focus, select:focus, textarea:focus {
  border-color: var(--m);
  outline: none;
}

.recent {
  margin-top: 14px;
  font-size: 14px;
  color: var(--mut);
}

.recent button {
  border: 1px solid var(--ln);
  background: var(--bg);
  color: var(--ink);
  font-weight: 600;
  cursor: pointer;
  padding: 3px 10px;
  border-radius: 99px;
  margin-left: 6px;
  transition: border-color 0.2s ease, color 0.2s ease;
}

.recent button:hover {
  border-color: var(--m);
  color: var(--m);
}

.tl {
  list-style: none;
  padding: 0;
  margin: 22px 0 0;
  border-left: 2px solid var(--ln);
  margin-left: 7px;
}

.tl li {
  padding: 0 0 18px 24px;
  position: relative;
  color: var(--mut);
}

.tl li:last-child {
  padding-bottom: 0;
}

.tl li::before {
  content: "";
  position: absolute;
  left: -8px;
  top: 4px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2px solid var(--ln);
  background: var(--sf);
}

.tl li.on {
  color: var(--ink);
  font-weight: 600;
}

.tl li.on::before {
  background: var(--m);
  border-color: var(--m);
  box-shadow: 0 0 0 4px var(--m-soft);
}

/* FOOTER */
footer {
  border-top: 1px solid var(--ln);
  background: var(--sf);
  padding: 36px 0 48px;
  color: var(--mut);
  font-size: 14px;
}

.foot-grid {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.foot-brand {
  font: 800 18px "Bricolage Grotesque", sans-serif;
  color: var(--ink);
}

.foot-brand i {
  font-style: normal;
  color: var(--m);
}

.foot-grid p {
  margin: 6px 0 0;
}

.foot-links {
  display: flex;
  gap: 18px;
}

.foot-links a {
  color: var(--mut);
  text-decoration: none;
  font-weight: 600;
}

.foot-links a:hover {
  color: var(--m);
}

/* MODAL & DIALOG */
.ov {
  position: fixed;
  inset: 0;
  background: rgba(10, 12, 18, 0.68);
  backdrop-filter: blur(4px);
  display: none;
  align-items: flex-end;
  justify-content: center;
  z-index: 50;
  padding: 0;
}

.ov.open {
  display: flex;
}

.md {
  background: var(--sf);
  border: 1px solid var(--ln);
  width: 100%;
  max-width: 520px;
  max-height: 92vh;
  overflow: auto;
  border-radius: 24px 24px 0 0;
  padding: 24px 22px calc(24px + env(safe-area-inset-bottom, 0px));
  animation: up 0.22s ease-out;
}

@media (min-width: 600px) {
  .ov {
    align-items: center;
  }
  .md {
    border-radius: 24px;
  }
}

@keyframes up {
  from { transform: translateY(24px); opacity: 0; }
  to { transform: none; opacity: 1; }
}

.md h3 {
  font-size: 26px;
  margin-bottom: 4px;
}

.fld {
  margin: 14px 0;
}

.fld label {
  display: block;
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 6px;
}

.row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
}

.tot {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  border-top: 2px dashed var(--ln);
  margin-top: 16px;
  padding-top: 14px;
  font-weight: 600;
}

.tot b {
  font: 800 28px "Bricolage Grotesque", sans-serif;
  color: var(--m);
}

.err {
  color: #ef4444;
  font-size: 14px;
  min-height: 20px;
  margin: 6px 0 0;
}

.acts {
  display: flex;
  gap: 8px;
  margin-top: 16px;
  flex-wrap: wrap;
}

.x {
  float: right;
  border: 0;
  background: var(--bg);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  font-size: 20px;
  cursor: pointer;
  line-height: 1;
  color: var(--mut);
}

.x:hover {
  color: var(--ink);
}

.struk {
  border: 2px dashed var(--ln);
  background: var(--bg);
  border-radius: 14px;
  padding: 16px;
  margin-top: 12px;
  font-size: 14.5px;
}

.struk div {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 4px 0;
}

.struk .code {
  font: 800 24px "Bricolage Grotesque", sans-serif;
  letter-spacing: 0.04em;
  color: var(--m);
}

.badge {
  display: inline-block;
  background: var(--y);
  color: #14161f;
  font-weight: 700;
  font-size: 12.5px;
  padding: 3px 11px;
  border-radius: 99px;
}

@media print {
  header, section, .hero-bg, footer, .acts, .x {
    display: none !important;
  }
  .ov {
    position: static;
    background: none;
    display: block;
  }
}

/* ADMIN DASHBOARD */
.adm {
  position: fixed;
  inset: 0;
  background: var(--bg);
  overflow: auto;
  z-index: 40;
  display: none;
  padding: calc(20px + env(safe-area-inset-top, 0px)) 0 48px;
}

.adm.open {
  display: block;
}

.ah {
  display: flex;
  gap: 8px;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.ah h2 {
  margin: 0 auto 0 0;
  font-size: 28px;
}

.sumg {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 12px;
  margin-bottom: 18px;
}

.sumg div {
  background: var(--sf);
  border: 1px solid var(--ln);
  padding: 14px;
  border-radius: 12px;
}

.sumg b {
  display: block;
  font: 800 26px "Bricolage Grotesque", sans-serif;
}

.sumg span {
  color: var(--mut);
  font-size: 13px;
}

.sumg .own {
  border-top: 4px solid var(--m);
}

.oc {
  background: var(--sf);
  border: 1px solid var(--ln);
  border-radius: 14px;
  padding: 16px;
  margin-bottom: 12px;
  display: grid;
  gap: 6px;
}

.oh {
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
}

.oh small {
  color: var(--mut);
}

.ob {
  display: flex;
  gap: 8px;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 8px;
}

.ob b {
  margin-right: auto;
}

.ob select {
  width: auto;
}

#offbar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--m);
  color: #fff;
  padding: 10px 20px calc(10px + env(safe-area-inset-bottom, 0px));
  display: none;
  justify-content: center;
  align-items: center;
  gap: 12px;
  z-index: 30;
  font-weight: 600;
}

#offbar button {
  border: 2px solid #fff;
  background: none;
  color: #fff;
  border-radius: 99px;
  padding: 4px 14px;
  cursor: pointer;
  font-weight: 600;
}

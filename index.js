/* 시스템 상태창 (System Window) v1.0.0 — SillyTavern 확장
   설정: 마법봉 메뉴 > 시스템 상태창 */
(function () {
"use strict";
var VERSION = "1.0.0";
var IS_EXT = true;
var P = window; try { if (window.parent && window.parent !== window && window.parent.document && window.parent.SillyTavern) P = window.parent; } catch (e) {}
var D = P.document;
var INSTANCE = Math.random().toString(36).slice(2);
var BASE_FONTS = "https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;500;600;700&family=IBM+Plex+Sans+KR:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap";
var BASE_CSS = ":host{display:block;margin:8px 0;container:hb / inline-size;\n  color-scheme:dark;\n  --line:rgba(120,214,255,.30);\n  --line-soft:rgba(120,214,255,.13);\n  --fill:rgba(120,214,255,.07);\n  --panel-a:rgba(12,36,60,.92);\n  --panel-b:rgba(6,20,36,.95);\n  --tile:rgba(8,24,42,.6);\n  --hi:#8fe9ff;\n  --cy:#3cc9f0;\n  --cy-deep:#1a7fb0;\n  --txt:#e2f5ff;\n  --dim:#94b6cb;\n  --mute:#5e7f96;\n  --bg:#040a13;\n  --warn:#ff5d73;\n  --warn-soft:rgba(255,93,115,.12);\n  --ok:#5ff0c4;\n  --amber:#ffc762;\n  --violet:#ad92ff;\n  --rose:#ff86b0;\n  --g-f:#6b7d8f;--g-e:#8798aa;--g-d:#7cb8d2;--g-c:#45d3ee;--g-b:#5c9eff;--g-a:#ad92ff;--g-s:#ffc762;--g-ss:#ff86b0;--g-sss:#ff3d3d;--g-ex:#f3eeff;\n  --r-common:#a9bccb;--r-rare:#45d3ee;--r-epic:#ad92ff;--r-legend:#ffc762;\n  --f-disp:\"Chakra Petch\",\"IBM Plex Sans KR\",ui-sans-serif,system-ui,sans-serif;\n  --f-body:\"IBM Plex Sans KR\",\"Apple SD Gothic Neo\",\"Malgun Gothic\",system-ui,sans-serif;\n  --f-mono:\"JetBrains Mono\",ui-monospace,Consolas,monospace;\n  --ease:cubic-bezier(.2,.8,.2,1);\n}\n.hb,.hb *{box-sizing:border-box}\n.hb{font-family:var(--f-body);font-size:14px;line-height:1.6;color:var(--txt);-webkit-font-smoothing:antialiased;display:flex;flex-direction:column;gap:12px;text-align:left}\n.hb svg.i{width:18px;height:18px;flex:none;fill:none;stroke:currentColor;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round}\n.hb .num{font-family:var(--f-disp);font-variant-numeric:tabular-nums}\n.hb .hl{color:var(--hi)}\n.hb p{margin:0}\n\n/* frame */\n.win{position:relative;background:linear-gradient(180deg,var(--panel-a),var(--panel-b));border:1px solid var(--line);box-shadow:0 0 0 1px rgba(0,0,0,.35),0 3px 10px rgba(0,0,0,.18),0 0 10px rgba(60,190,255,.08),inset 0 0 36px rgba(60,190,255,.05);--c:var(--hi);animation:hb-in .7s var(--ease) both;animation-delay:var(--d,0s)}\n@keyframes hb-in{0%{clip-path:inset(50% 0 50% 0);opacity:0;filter:brightness(2.2)}30%{clip-path:inset(calc(50% - 1px) 0 calc(50% - 1px) 0);opacity:1;filter:brightness(2.2)}100%{clip-path:inset(-40px);opacity:1;filter:brightness(1)}}\n.win::before{content:\"\";position:absolute;inset:-1px;pointer-events:none;z-index:3;\n  background:linear-gradient(var(--c),var(--c)) top left/14px 2px no-repeat,linear-gradient(var(--c),var(--c)) top left/2px 14px no-repeat,linear-gradient(var(--c),var(--c)) top right/14px 2px no-repeat,linear-gradient(var(--c),var(--c)) top right/2px 14px no-repeat,linear-gradient(var(--c),var(--c)) bottom left/14px 2px no-repeat,linear-gradient(var(--c),var(--c)) bottom left/2px 14px no-repeat,linear-gradient(var(--c),var(--c)) bottom right/14px 2px no-repeat,linear-gradient(var(--c),var(--c)) bottom right/2px 14px no-repeat;\n  filter:drop-shadow(0 0 4px var(--c));animation:hb-corner 3.2s ease-in-out infinite}\n@keyframes hb-corner{50%{opacity:.55}}\n.win::after{content:\"\";position:absolute;inset:0;pointer-events:none;z-index:2;background:repeating-linear-gradient(0deg,rgba(140,225,255,.028) 0 1px,transparent 1px 3px)}\n.win>*{position:relative;z-index:1}\n.hd{position:relative;display:flex;align-items:center;gap:10px;padding:11px 16px;border-bottom:1px solid var(--line-soft);background:linear-gradient(90deg,rgba(80,200,255,.10),transparent 70%);overflow:hidden}\n.hd::after{content:\"\";position:absolute;top:0;bottom:0;left:-40%;width:30%;background:linear-gradient(90deg,transparent,rgba(160,235,255,.16),transparent);transform:skewX(-20deg);animation:hb-sweep 1.1s var(--ease) both;animation-delay:calc(var(--d,0s) + .5s);pointer-events:none}\n@keyframes hb-sweep{from{left:-40%}to{left:120%}}\n.hd>.i{color:var(--hi);filter:drop-shadow(0 0 4px rgba(120,220,255,.6))}\n.hd-t{display:flex;align-items:baseline;gap:8px;min-width:0}\n.hd-t b{font-weight:600;font-size:14.5px;letter-spacing:.02em;white-space:nowrap}\n.hd-t small{font-family:var(--f-disp);font-size:10.5px;letter-spacing:.22em;color:var(--mute);text-transform:uppercase}\n.hd-r{margin-left:auto;display:flex;align-items:center;gap:8px;font-family:var(--f-disp);font-size:12px;color:var(--dim);white-space:nowrap;min-width:0}\n.bd{padding:14px 16px;display:flex;flex-direction:column;gap:14px}\n.lbl{font-family:var(--f-disp);font-size:10.5px;letter-spacing:.2em;color:var(--mute);text-transform:uppercase;display:flex;align-items:center;gap:10px}\n.lbl::after{content:\"\";flex:1;height:1px;background:linear-gradient(90deg,var(--line),transparent)}\n\n/* chips, grades, rarity */\n.g{display:inline-grid;place-items:center;min-width:28px;height:20px;padding:0 5px;font-family:var(--f-disp);font-weight:700;font-size:12px;color:var(--gc);border:1px solid color-mix(in srgb,var(--gc) 55%,transparent);background:color-mix(in srgb,var(--gc) 12%,transparent);text-shadow:0 0 6px color-mix(in srgb,var(--gc) 60%,transparent);white-space:nowrap}\n.g-f{--gc:var(--g-f)}.g-e{--gc:var(--g-e)}.g-d{--gc:var(--g-d)}.g-c{--gc:var(--g-c)}.g-b{--gc:var(--g-b)}.g-a{--gc:var(--g-a)}.g-s{--gc:var(--g-s)}.g-ss{--gc:var(--g-ss)}.g-sss{--gc:var(--g-sss,var(--g-ss))}.g-ex{--gc:var(--g-ex,var(--g-ss))}.g-x{--gc:var(--mute)}\n.g .i{width:11px!important;height:11px!important}\n.rar{display:inline-flex;align-items:center;gap:6px;font-size:12px;color:var(--rc)}\n.rar::before{content:\"\";width:8px;height:8px;transform:rotate(45deg);border:1px solid var(--rc);background:color-mix(in srgb,var(--rc) 30%,transparent)}\n.r-common{--rc:var(--r-common)}.r-rare{--rc:var(--r-rare)}.r-epic{--rc:var(--r-epic)}.r-legend{--rc:var(--r-legend)}\n.chip{display:inline-flex;align-items:center;gap:6px;padding:3px 9px 3px 7px;font-size:12px;border:1px solid var(--cc);background:color-mix(in srgb,var(--cc) 10%,transparent);line-height:1.4}\n.chip .i{width:13px!important;height:13px!important}\n.chip time{font-family:var(--f-disp);color:var(--dim);font-size:11.5px}\n.chip.buff{--cc:rgba(95,240,196,.5)}.chip.buff .i{color:var(--ok)}\n.chip.debuff{--cc:rgba(255,93,115,.5)}.chip.debuff .i{color:var(--warn)}\n.chip.tr{--cc:var(--line)}\n.chip.alert{--cc:rgba(255,93,115,.5);color:var(--warn)}\n.fx{display:flex;flex-wrap:wrap;gap:6px}\n.ico{display:grid;place-items:center;flex:none;border:1px solid color-mix(in srgb,var(--rc,var(--cy)) 60%,transparent);background:radial-gradient(circle at 50% 40%,color-mix(in srgb,var(--rc,var(--cy)) 22%,transparent),transparent 70%);color:var(--rc,var(--hi))}\n.ico .i{filter:drop-shadow(0 0 4px color-mix(in srgb,var(--rc,var(--cy)) 70%,transparent))}\n\n/* bars */\n.bar{position:relative;height:7px;background:var(--fill);border:1px solid var(--line-soft);overflow:hidden}\n.bar>i{position:absolute;inset:0 auto 0 0;width:var(--v);background:linear-gradient(90deg,var(--bc1,var(--cy-deep)),var(--bc2,var(--hi)));box-shadow:0 0 10px var(--bc2,var(--hi));animation:hb-fill 1.1s var(--ease) both;animation-delay:calc(var(--d,0s) + .45s)}\n@keyframes hb-fill{from{width:0}}\n.bar.hp{--bc1:#1d9e86;--bc2:var(--ok)}\n.bar.mp{--bc1:#2d5fd0;--bc2:#6fa8ff}\n.bar.fat{--bc1:#a8652a;--bc2:var(--amber)}\n.bar.love{--bc1:#a3406e;--bc2:var(--rose)}\n.bar.red{--bc1:#8a2033;--bc2:var(--warn)}\n.bar.uniq{--bc1:#6a4fc9;--bc2:var(--violet)}\n.bar.lockbar{background:repeating-linear-gradient(135deg,var(--fill) 0 4px,transparent 4px 8px)}\n.bar.lockbar>i{display:none}\n\n/* tabs */\n.tabs{display:flex;gap:2px;border-bottom:1px solid var(--line-soft);overflow-x:auto;scrollbar-width:none}\n.tab{font:500 13px/1 var(--f-body);color:var(--mute);background:none;border:0;border-bottom:2px solid transparent;margin-bottom:-1px;padding:9px 12px;cursor:pointer;white-space:nowrap;display:inline-flex;align-items:center;gap:6px}\n.tab small{font-family:var(--f-disp);font-size:11px;color:var(--mute)}\n.tab:hover{color:var(--dim)}\n.tab[aria-selected=\"true\"]{color:var(--hi);border-color:var(--hi);text-shadow:0 0 8px rgba(120,220,255,.5)}\n.tab:focus-visible{outline:1px solid var(--hi);outline-offset:-2px}\n.panel{animation:hb-panel .35s var(--ease) both}\n.panel[hidden]{display:none}\n@keyframes hb-panel{from{opacity:0;transform:translateX(6px)}}\n\n/* ===== status ===== */\n.who-lv{display:flex;align-items:baseline;gap:8px;min-width:0;max-width:100%}\n.who-lv b{font-family:var(--f-body);font-size:13.5px;font-weight:600;color:var(--txt);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0}\n.who-lv span{flex:none}\n.who-lv span{font-family:var(--f-disp);font-weight:600;font-size:13px;color:var(--hi);letter-spacing:.04em}\n.brief{display:flex;flex-direction:column;gap:12px;padding:14px 16px}\n/* date · time · weather on one airy line, the place on its own line below: no boxes */\n.info{display:flex;flex-wrap:wrap;align-items:center;gap:6px 18px;padding-bottom:12px;border-bottom:1px solid var(--line-soft)}\n.info>div{flex:0 1 auto;max-width:100%;display:flex;align-items:center;gap:6px;min-width:0}\n.info>div.loc{order:5;flex:1 1 100%}\n.info .i{width:14px!important;height:14px!important;color:var(--cy);opacity:.85}\n.info .v{font-size:13px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0}\n.vit{display:grid;grid-template-columns:repeat(var(--n),minmax(0,1fr));gap:14px}\n.vit>div{display:flex;flex-direction:column;gap:4px;min-width:0}\n.vit .row{display:flex;align-items:baseline;justify-content:space-between;gap:0 6px;flex-wrap:wrap}\n.vit .k{font-family:var(--f-disp);font-size:11px;letter-spacing:.14em;color:var(--dim);white-space:nowrap}\n.vit .v{font-family:var(--f-disp);font-size:12.5px;font-variant-numeric:tabular-nums;white-space:nowrap}\n.vit .v span{color:var(--mute)}\n.vit .bar{height:5px}\n.qline{display:flex;align-items:center;gap:8px;padding:5px 10px;border-left:2px solid rgba(255,199,98,.65);background:linear-gradient(90deg,rgba(255,199,98,.09),transparent 85%);font-size:12.5px;min-width:0}\n.qline .i{width:14px!important;height:14px!important;color:var(--amber)}\n.qline b{font-weight:500;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0}\n.qline time{margin-left:auto;font-family:var(--f-disp);color:var(--amber);white-space:nowrap}\n.bline{display:flex;align-items:center;gap:8px 14px;flex-wrap:wrap}\n.bline .fx{flex:1 1 auto;min-width:0}\n.st .fx .chip{border-color:transparent;background:color-mix(in srgb,var(--cc) 22%,transparent)}\n.money{display:flex;flex-wrap:wrap;gap:4px 14px;margin-left:auto;font-size:12.5px;color:var(--dim)}\n.money span{display:inline-flex;align-items:center;gap:5px;white-space:nowrap}\n.money .i{width:14px!important;height:14px!important;color:var(--cy)}\n.money b{font-family:var(--f-disp);font-weight:600;color:var(--txt);font-variant-numeric:tabular-nums}\n/* status, folded (layout B): clock on the left, gauges + money on the right, place and effects below */\n.st .hd .hd-r{font-size:13px;font-weight:600;color:var(--hi);letter-spacing:.04em;min-width:0}\n.st .hd .hd-r .nm{font-family:var(--f-body);font-weight:600;color:var(--txt);letter-spacing:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0}\n.st .brief{gap:12px;padding:14px 16px}\n.st .top{display:grid;grid-template-columns:auto minmax(0,1fr);gap:0 18px;align-items:center}\n.st .top.solo{grid-template-columns:minmax(0,1fr)}\n.st .sclk{display:flex;flex-direction:column;gap:3px;padding-right:18px;border-right:1px solid var(--line-soft);min-width:0;max-width:150px}\n.st .top.solo .sclk{border-right:0;padding-right:0;max-width:none}\n.st .sclk .tm{font-family:var(--f-disp);font-size:28px;font-weight:600;line-height:1;letter-spacing:.02em;color:var(--txt);font-variant-numeric:tabular-nums}\n.st .sclk .dt{font-family:var(--f-disp);font-size:12px;color:var(--dim);white-space:nowrap}\n.st .sclk .wx{display:flex;align-items:center;gap:5px;font-size:12px;color:var(--dim);min-width:0}\n.st .sclk .wx .i{width:12px!important;height:12px!important;flex:none}\n.st .sclk .wx .tx{display:block;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.st .side{display:flex;flex-direction:column;justify-content:center;gap:8px;min-width:0}\n.st .side .row{display:flex;justify-content:space-between;align-items:baseline;gap:6px;margin-bottom:3px}\n.st .side .k{font-family:var(--f-disp);font-size:11px;letter-spacing:.14em;color:var(--dim);white-space:nowrap}\n.st .side .v{font-family:var(--f-disp);font-size:12.5px;font-variant-numeric:tabular-nums;white-space:nowrap}\n.st .side .v span{color:var(--mute)}\n.st .side .bar{height:5px}\n.st .side .money{display:flex;justify-content:flex-end;flex-wrap:wrap;gap:2px 12px;margin:2px 0 0;font-size:12.5px}\n.st .line{display:flex;align-items:center;gap:8px;font-size:13px;min-width:0}\n.st .line>.i{width:13px!important;height:13px!important;color:var(--cy);flex:none}\n.st .line .tx{display:block;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.st .brief>.fx{display:flex;flex-wrap:wrap;gap:6px}\n/* unfolded: equipped title badge, owned titles tab */\n.st .ttlrow{display:flex;justify-content:center;padding:2px 0 12px;border-bottom:1px solid var(--line-soft)}\n.st .ttlrow .ttl{padding:7px 22px 7px 14px;clip-path:polygon(10px 0,100% 0,calc(100% - 10px) 100%,0 100%)}\n.st .ttlrow .ttl .i{width:16px!important;height:16px!important}\n.st .ttlrow .ttl em{font-size:15px;letter-spacing:.02em}\n.tlist{display:flex;flex-direction:column;gap:6px}\n.trow{display:grid;grid-template-columns:18px minmax(0,1fr) auto;gap:10px;align-items:center;padding:8px 12px;border:1px solid var(--line-soft);background:var(--tile)}\n.trow>.i{width:16px!important;height:16px!important;color:var(--mute)}\n.trow .tx{display:flex;flex-direction:column;min-width:0;line-height:1.4}\n.trow .tx b{font-size:13.5px;font-weight:600;color:var(--txt)}\n.trow .tx span{font-size:12px;color:var(--dim)}\n.trow .eq{font-size:10.5px;font-weight:600;color:var(--bg);background:var(--amber);padding:1px 6px;white-space:nowrap}\n.trow.on{border-color:rgba(255,199,98,.45);background:linear-gradient(90deg,rgba(255,199,98,.12),var(--tile) 70%)}\n.trow.on>.i{color:var(--amber);filter:drop-shadow(0 0 4px rgba(255,199,98,.6))}\n.trow.on .tx b{color:#ffe2a6}\n/* (old) title plate */\n.st .plate{display:flex;flex-direction:column;align-items:center;gap:2px;padding:2px 0 12px;border-bottom:1px solid var(--line-soft)}\n.st .plate small{display:flex;align-items:center;gap:10px;font-family:var(--f-disp);font-size:10px;letter-spacing:.3em;color:rgba(255,199,98,.7)}\n.st .plate small::before,.st .plate small::after{content:\"\";width:24px;height:1px;background:linear-gradient(90deg,transparent,rgba(255,199,98,.7))}\n.st .plate small::after{transform:scaleX(-1)}\n.st .plate b{max-width:100%;font-size:15px;font-weight:700;letter-spacing:.04em;color:#ffe2a6;text-shadow:0 0 10px rgba(255,199,98,.45);text-align:center}\n.st .more>.fx{display:flex;flex-wrap:wrap;gap:6px}\n.st .st-acts{align-self:flex-end;display:flex;gap:14px}\n.st .st-book,.st .st-edit{align-self:flex-end;border:0;background:none;padding:2px 0;font:500 11.5px/1.4 var(--f-body);color:var(--mute);cursor:pointer;text-decoration:underline;text-underline-offset:3px}\n.st .st-book:hover,.st .st-edit:hover{color:var(--hi)}\n.st .qlist{display:flex;flex-direction:column;gap:6px}\n.st .more .qline{flex-wrap:wrap;align-items:flex-start;padding:8px 12px}\n.st .more .qline b{white-space:normal;flex:1 1 0}\n.st .more .qline time{flex-basis:100%;margin-left:22px;font-size:12px}\n.st .more{border-top:1px solid var(--line-soft);animation:hb-unfold .45s var(--ease) both}\n.st .more[hidden]{display:none}\n.more-t{display:flex;width:100%;align-items:center;justify-content:center;gap:6px;padding:7px 12px;border:0;border-top:1px solid var(--line-soft);background:linear-gradient(180deg,transparent,rgba(80,200,255,.06));color:var(--dim);font:500 12px/1.2 var(--f-body);letter-spacing:.04em;cursor:pointer;transition:color .2s,background .2s}\n.more-t:hover{color:var(--hi);background:linear-gradient(180deg,transparent,rgba(80,200,255,.14))}\n.more-t:focus-visible{outline:1px solid var(--hi);outline-offset:-2px}\n.more-t .i{width:14px!important;height:14px!important;transition:transform .25s var(--ease)}\n.more-t[aria-expanded=\"true\"] .i{transform:rotate(180deg)}\n.more-t small{font-family:var(--f-disp);color:var(--mute);font-size:11px}\n@keyframes hb-unfold{from{opacity:0;transform:translateY(-6px)}}\n.prof{display:flex;align-items:center;gap:8px 14px;flex-wrap:wrap}\n.prof .role{font-size:12.5px;color:var(--dim)}\n/* title badge: slanted gold plate with a slow sheen */\n.ttl{position:relative;display:inline-flex;align-items:center;gap:7px;min-width:0;max-width:100%;padding:5px 18px 5px 12px;overflow:hidden;\n  background:linear-gradient(90deg,rgba(255,199,98,.22),rgba(255,199,98,.06) 70%,rgba(255,199,98,.02));\n  border-top:1px solid rgba(255,199,98,.55);border-bottom:1px solid rgba(255,199,98,.25);clip-path:polygon(8px 0,100% 0,calc(100% - 8px) 100%,0 100%)}\n.ttl::after{content:\"\";position:absolute;top:0;bottom:0;left:-40%;width:30%;background:linear-gradient(90deg,transparent,rgba(255,236,190,.28),transparent);transform:skewX(-20deg);animation:hb-sheen 4.5s ease-in-out infinite;animation-delay:calc(var(--d,0s) + 1.2s)}\n@keyframes hb-sheen{0%,60%{left:-40%}100%{left:130%}}\n.ttl .i{width:15px!important;height:15px!important;color:var(--amber);filter:drop-shadow(0 0 4px rgba(255,199,98,.7));flex:none}\n.ttl small{font-family:var(--f-disp);font-size:10.5px;letter-spacing:.16em;color:color-mix(in srgb,var(--amber) 70%,transparent);flex:none}\n.ttl em{font-style:normal;font-size:13.5px;font-weight:600;color:#ffe2a6;text-shadow:0 0 10px rgba(255,199,98,.5);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0}\n.who-lv .rk{display:inline-flex;align-items:center;gap:6px}\n.prof .stp{margin-left:auto;font-size:12px;color:var(--dim);white-space:nowrap}\n.prof .stp b{font-family:var(--f-disp);color:var(--amber);font-weight:600;margin-left:4px}\n.meter{display:grid;grid-template-columns:40px 1fr auto;gap:12px;align-items:center}\n.meter .k{font-family:var(--f-disp);font-size:11.5px;letter-spacing:.12em;color:var(--dim)}\n.meter .v{font-family:var(--f-disp);font-size:12.5px;text-align:right;font-variant-numeric:tabular-nums;white-space:nowrap}\n.meter .v span{color:var(--mute)}\n.stats{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:6px}\n.stat{display:flex;align-items:center;gap:10px;padding:8px 10px 8px 12px;border:1px solid var(--line-soft);background:var(--tile);min-width:0}\n.stat .k{font-size:13px;color:var(--dim);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.stat .n{margin-left:auto;font-family:var(--f-disp);font-size:15px;font-weight:600;font-variant-numeric:tabular-nums}\n.stat .g{margin-left:auto}\n.stat .n+.g{margin-left:0}\n.inv{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:6px}\n.slot{display:grid;grid-template-columns:36px 1fr auto;gap:10px;align-items:center;padding:7px 10px 7px 7px;border:1px solid var(--line-soft);background:var(--tile);min-width:0}\n.slot .ico{width:36px;height:36px}\n.slot .ico .i{width:18px;height:18px}\n.slot .nm{display:flex;flex-direction:column;min-width:0;line-height:1.35}\n.slot .nm b{font-size:13px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.slot .nm span{font-size:11px;color:var(--rc)}\n.slot .q{font-family:var(--f-disp);font-size:12.5px;color:var(--dim);font-variant-numeric:tabular-nums;white-space:nowrap}\n.slot .eq{font-size:10.5px;font-weight:600;color:var(--bg);background:var(--hi);padding:1px 5px;white-space:nowrap}\n.skills{display:flex;flex-direction:column;gap:6px}\n.skill{display:grid;grid-template-columns:36px minmax(0,1fr);gap:12px;align-items:center;padding:8px 12px 8px 8px;border:1px solid var(--line-soft);background:var(--tile)}\n.skill .ico{width:36px;height:36px}\n.skill .ico .i{width:18px;height:18px}\n.skill .tx{display:flex;flex-direction:column;gap:2px;min-width:0}\n.skill .top{display:flex;align-items:center;gap:4px 8px;flex-wrap:wrap;min-width:0}\n.skill .top b{font-size:13.5px;font-weight:600;line-height:1.4}\n.skill .top .lv{font-family:var(--f-disp);font-weight:500;color:var(--hi);font-size:12px}\n.skill .type{font-size:10.5px;line-height:1.5;padding:0 6px;border:1px solid var(--line);color:var(--dim);white-space:nowrap}\n.skill .type.on{color:var(--hi);border-color:rgba(143,233,255,.5)}\n.skill .cost{margin-left:auto;font-family:var(--f-disp);font-size:11.5px;color:var(--mute);white-space:nowrap}\n.skill .ds{font-size:12px;color:var(--dim);line-height:1.5}\n\n/* ===== system ===== */\n.sys{text-align:center;padding:18px 20px;display:flex;flex-direction:column;align-items:center;gap:6px}\n.sys .tag{font-family:var(--f-disp);font-size:11px;letter-spacing:.3em;color:var(--cy)}\n.sys .msg{font-size:15.5px;font-weight:500;text-wrap:balance}\n.sys .sub{font-size:13px;color:var(--dim);text-wrap:balance}\n.talk{display:grid;grid-template-columns:auto 1fr;gap:12px;padding:14px 16px;align-items:start}\n.talk .who{display:grid;place-items:center;width:34px;height:34px;border:1px solid var(--line);color:var(--hi);background:var(--fill)}\n.talk .who .i{animation:hb-spin 8s linear infinite}\n@keyframes hb-spin{to{transform:rotate(360deg)}}\n.talk .body{display:flex;flex-direction:column;gap:3px;min-width:0}\n.talk .nm{font-family:var(--f-disp);font-size:11px;letter-spacing:.26em;color:var(--cy)}\n.talk .sub{color:var(--dim);font-size:13px}\n.caret::after{content:\"\";display:inline-block;width:7px;height:1em;margin-left:4px;vertical-align:-2px;background:var(--hi);animation:hb-blink 1s steps(1) infinite}\n@keyframes hb-blink{50%{opacity:0}}\n.win.warn{--c:var(--warn);border-color:rgba(255,93,115,.45);background:linear-gradient(180deg,rgba(54,14,26,.92),rgba(26,8,16,.95));animation:hb-in .7s var(--ease) both,hb-alarm 1.8s ease-in-out infinite;animation-delay:var(--d,0s),calc(var(--d,0s) + .7s)}\n@keyframes hb-alarm{0%,100%{box-shadow:0 0 18px rgba(255,93,115,.10),inset 0 0 30px rgba(255,93,115,.05)}50%{box-shadow:0 0 34px rgba(255,93,115,.32),inset 0 0 40px rgba(255,93,115,.14)}}\n.win.warn .tag{color:var(--warn)}\n.win.warn .msg .hl{color:var(--warn)}\n/* error: static on the surface, text never leaves */\n.win.err{--c:var(--violet);border-color:rgba(173,146,255,.45);background:linear-gradient(180deg,rgba(26,16,48,.93),rgba(10,8,24,.96));animation:hb-in .7s var(--ease) both,hb-errflick 5.3s steps(1) infinite;animation-delay:var(--d,0s),calc(var(--d,0s) + .8s)}\n@keyframes hb-errflick{0%,100%{filter:none}31%{filter:brightness(1.4) hue-rotate(-18deg)}31.6%{filter:none}32.4%{filter:brightness(.8)}33%{filter:none}77%{filter:brightness(1.3) saturate(1.5)}77.8%{filter:none}}\n.err .fxl{position:absolute;inset:0;overflow:hidden;z-index:2;pointer-events:none}\n.err .slice{position:absolute;left:-1px;right:-1px;z-index:4;pointer-events:none;display:none;border-left:2px solid var(--rose);border-right:2px solid var(--cy);background:linear-gradient(90deg,rgba(255,134,176,.22),rgba(26,16,48,.75) 20%,rgba(26,16,48,.75) 80%,rgba(69,211,238,.22));box-shadow:0 0 10px rgba(173,146,255,.35);backdrop-filter:hue-rotate(60deg) brightness(1.3)}\n.err.burst .slice{display:block}\n.gx .ch{display:inline-block;white-space:pre}\n.gx .ch.j{transform:translate(var(--x,0),var(--y,0));color:var(--jc,var(--rose));text-shadow:-2px 0 rgba(69,211,238,.8),2px 0 rgba(255,134,176,.8)}\n.gx.shift{transform:translateX(var(--sx,3px)) skewX(var(--sk,-8deg))}\n@keyframes hb-gxj{0%,100%{translate:0 0}38%{translate:1.5px 0}39%{translate:-1px 0}40%{translate:0 0}71%{translate:-2px 1px}72%{translate:0 0}}\n.gx-sub.shift{transform:translateX(var(--sx,-3px))}\n.err .noise{position:absolute;inset:0;z-index:1;pointer-events:none;opacity:.07;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)'/%3E%3C/svg%3E\");animation:hb-noise .25s steps(3) infinite}\n@keyframes hb-noise{0%{background-position:0 0}33%{background-position:-40px 20px}66%{background-position:30px -50px}100%{background-position:-10px 40px}}\n.err .band{position:absolute;left:0;right:0;height:22%;top:-25%;z-index:1;pointer-events:none;background:linear-gradient(180deg,transparent,rgba(173,146,255,.10) 40%,rgba(255,134,176,.12) 60%,transparent);animation:hb-band 3.6s linear infinite}\n@keyframes hb-band{to{top:110%}}\n.err .tear{position:absolute;left:0;right:0;height:2px;z-index:1;pointer-events:none;background:rgba(255,134,176,.5);box-shadow:0 0 8px rgba(255,134,176,.6);opacity:0;animation:hb-tear 4.3s steps(1) infinite}\n@keyframes hb-tear{0%,100%{opacity:0}62%{opacity:1;top:28%}63%{opacity:0}81%{opacity:.8;top:71%}82%{opacity:0}}\n.gx-hd{display:flex;align-items:center;gap:10px;padding:10px 16px;border-bottom:1px solid rgba(173,146,255,.2);font-family:var(--f-mono);font-size:11px;color:var(--violet);letter-spacing:.06em}\n.gx-hd .i{width:15px!important;height:15px!important}\n.gx-hd .r{margin-left:auto;color:var(--rose);animation:hb-blink 1.2s steps(1) infinite}\n.gx-bd{padding:18px 18px 16px;display:flex;flex-direction:column;gap:8px;align-items:center;text-align:center}\n.gx{position:relative;display:inline-block;font-size:16px;font-weight:600;text-wrap:balance;animation:hb-gxj 2.9s steps(1) infinite;text-shadow:-1px 0 rgba(255,134,176,.55),1px 0 rgba(69,211,238,.55)}\n.gx::before,.gx::after{content:attr(data-t);position:absolute;inset:0;pointer-events:none;text-shadow:none;clip-path:inset(0 0 100% 0)}\n.gx::before{color:var(--rose);animation:hb-sl1 3.7s steps(1) infinite}\n.gx::after{color:var(--cy);animation:hb-sl2 4.6s steps(1) infinite}\n@keyframes hb-sl1{0%,100%{clip-path:inset(0 0 100% 0);transform:none}70%{clip-path:inset(10% 0 66% 0);transform:translate(-4px,0)}72%{clip-path:inset(52% 0 26% 0);transform:translate(3px,0)}74%{clip-path:inset(30% 0 50% 0);transform:translate(-6px,0)}76%{clip-path:inset(76% 0 6% 0);transform:translate(2px,0)}78%{clip-path:inset(0 0 100% 0)}}\n@keyframes hb-sl2{0%,100%{clip-path:inset(0 0 100% 0);transform:none}40%{clip-path:inset(60% 0 16% 0);transform:translate(5px,0)}42%{clip-path:inset(6% 0 78% 0);transform:translate(-4px,0)}44%{clip-path:inset(40% 0 38% 0);transform:translate(6px,0)}46%{clip-path:inset(0 0 100% 0)}88%{clip-path:inset(22% 0 60% 0);transform:translate(-3px,0)}90%{clip-path:inset(0 0 100% 0)}}\n.gx-sub{display:inline-block;font-size:13px;color:var(--dim)}\n.redact{display:inline-block;height:1.05em;width:var(--w,4em);vertical-align:-2px;background:repeating-linear-gradient(90deg,var(--txt) 0 3px,rgba(226,245,255,.75) 3px 4px);animation:hb-redact 1.4s steps(2) infinite}\n@keyframes hb-redact{50%{filter:brightness(.7);transform:translateX(1px)}}\n.gx-log{align-self:stretch;margin:6px 0 0;padding:9px 12px;list-style:none;border:1px solid rgba(173,146,255,.18);background:rgba(10,6,22,.7);font-family:var(--f-mono);font-size:11.5px;line-height:1.7;color:var(--mute);text-align:left}\n.gx-log li{display:flex;gap:10px;min-width:0}\n.gx-log li span:first-child{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.gx-log .s{margin-left:auto;flex:none;color:var(--warn)}\n.gx-log .s.ok{color:var(--ok)}\n.lvup{padding:22px 20px;text-align:center;display:flex;flex-direction:column;gap:4px;align-items:center;overflow:hidden}\n.lvup .ring{position:absolute;left:50%;top:42%;width:60px;height:60px;margin:-30px 0 0 -30px;border:1px solid var(--hi);border-radius:50%;z-index:0;opacity:0;animation:hb-ring 1.6s var(--ease) both;animation-delay:calc(var(--d,0s) + .55s)}\n.lvup .ring.r2{animation-delay:calc(var(--d,0s) + .8s)}\n@keyframes hb-ring{0%{transform:scale(.4);opacity:.9}100%{transform:scale(9);opacity:0}}\n.lvup .big{font-family:var(--f-disp);font-weight:700;font-size:30px;letter-spacing:.24em;padding-left:.24em;color:var(--hi);text-shadow:0 0 18px rgba(110,220,255,.6);line-height:1.2;animation:hb-track 1s var(--ease) both,hb-glow 2.4s ease-in-out infinite;animation-delay:calc(var(--d,0s) + .4s),calc(var(--d,0s) + 1.4s)}\n@keyframes hb-track{from{letter-spacing:.8em;opacity:0;filter:blur(6px)}}\n@keyframes hb-glow{50%{text-shadow:0 0 28px rgba(110,220,255,.95),0 0 6px rgba(255,255,255,.6)}}\n.lvup .from{font-family:var(--f-disp);font-size:14px;color:var(--dim)}\n.lvup .from b{color:var(--txt);font-weight:600}\n.lvup .sub{font-size:13px;color:var(--dim)}\n\n/* ===== noti ===== */\n.toast{display:flex;flex-direction:column;gap:6px}\n.t{display:flex;flex-wrap:wrap;align-items:center;gap:4px 10px;padding:7px 12px;border:1px solid var(--line-soft);border-left:2px solid var(--tc,var(--cy));background:linear-gradient(180deg,var(--panel-a),var(--panel-b));font-size:13px;animation:hb-toast .55s var(--ease) both;animation-delay:calc(var(--d,0s) + var(--td,0s))}\n@keyframes hb-toast{from{opacity:0;transform:translateX(-14px)}}\n.t .i{width:15px!important;height:15px!important;color:var(--tc,var(--cy))}\n.t b{font-weight:500;min-width:0;flex:1 1 8em}\n.t .d{margin-left:auto;font-family:var(--f-disp);font-size:12.5px;color:var(--tc,var(--cy));font-variant-numeric:tabular-nums;max-width:100%;text-align:right;overflow-wrap:anywhere}\n.t .nt-note{flex:1 1 100%;padding-left:25px;font-size:12px;line-height:1.45;color:var(--dim)}\n.t.nt-exp{--tc:var(--hi)}.t.nt-skill{--tc:var(--violet)}.t.nt-title{--tc:var(--amber)}.t.nt-aff{--tc:var(--rose)}.t.nt-item{--tc:var(--r-rare)}.t.nt-stat{--tc:var(--ok)}.t.nt-quest{--tc:var(--amber)}.t.nt-neg{--tc:var(--warn)}\n\n/* ===== quest ===== */\n.qtype{font-family:var(--f-body);font-size:11.5px;font-weight:600;padding:2px 8px;border:1px solid currentColor;color:var(--cy);letter-spacing:.04em}\n.qtype.urgent{color:var(--warn);background:var(--warn-soft);animation:hb-blink2 1.2s ease-in-out infinite}\n@keyframes hb-blink2{50%{background:rgba(255,93,115,.3)}}\n.qtype.hidden{color:var(--violet);background:rgba(173,146,255,.1)}\n.qtype.main{color:var(--amber);background:rgba(255,199,98,.08)}\n.qtype.state{color:var(--dim)}\n.qtitle{font-size:19px;font-weight:600;line-height:1.35;text-wrap:balance}\n.qdesc{color:var(--dim);font-size:13.5px}\n.obj{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:6px}\n.obj li{display:grid;grid-template-columns:18px 1fr auto;gap:10px;align-items:center;font-size:13.5px}\n.box{width:16px;height:16px;border:1px solid var(--line);display:grid;place-items:center}\n.box .i{width:12px!important;height:12px!important;stroke-width:2.4!important;color:var(--bg)}\n.obj li.done .box{background:var(--ok);border-color:var(--ok);box-shadow:0 0 8px rgba(95,240,196,.6)}\n.obj li.done .t1{color:var(--mute);text-decoration:line-through;text-decoration-color:rgba(148,182,203,.5)}\n.obj .cnt{font-family:var(--f-disp);font-size:12.5px;color:var(--dim);font-variant-numeric:tabular-nums}\n/* timer colour follows the time left: plenty = blue, half = amber, little = red */\n.timer{--tm:var(--hi);display:grid;grid-template-columns:auto 1fr;gap:6px 14px;align-items:center;padding:10px 12px;border:1px solid color-mix(in srgb,var(--tm) 35%,transparent);background:color-mix(in srgb,var(--tm) 8%,transparent)}\n.timer.t-mid{--tm:var(--amber)}.timer.t-low{--tm:var(--warn)}\n.timer>.i{color:var(--tm);width:20px!important;height:20px!important;grid-row:span 2}\n.timer .row{display:flex;align-items:baseline;justify-content:space-between;gap:10px}\n.timer .k{font-size:12px;color:var(--dim)}\n.timer .clock{font-family:var(--f-disp);font-weight:600;font-size:22px;letter-spacing:.06em;color:var(--tm);font-variant-numeric:tabular-nums;line-height:1;text-shadow:0 0 10px color-mix(in srgb,var(--tm) 50%,transparent)}\n.timer.t-low .clock .c{animation:hb-blink 1s steps(1) infinite}\n.timer.solo{grid-template-columns:auto 1fr}\n.timer.solo>.i{grid-row:auto}\n.rp{display:flex;flex-direction:column;gap:8px}\n.rp>div{border:1px solid var(--line-soft);padding:10px 12px;display:flex;flex-direction:column;gap:6px;background:var(--tile)}\n.rp .h{display:flex;align-items:center;gap:6px;font-size:12px;font-weight:600;letter-spacing:.04em}\n.rp .h .i{width:15px!important;height:15px!important}\n.rp .rw .h{color:var(--ok)}\n.rp .pn .h{color:var(--warn)}\n.rp ul{margin:0;padding:0;list-style:none;display:flex;flex-wrap:wrap;gap:4px 18px;font-size:13px}\n.rp li{display:flex;gap:8px}\n.rp li::before{content:\"\";flex:none;width:4px;height:4px;margin-top:9px}\n.rp .rw li::before{background:var(--ok)}\n.rp .pn li::before{background:var(--warn)}\n.act{display:flex;gap:8px;justify-content:flex-end;align-items:center;min-height:38px;flex-wrap:wrap}\n.btn{position:relative;overflow:hidden;font:600 13px/1 var(--f-body);color:var(--txt);background:var(--fill);border:1px solid var(--line);padding:10px 20px;cursor:pointer;letter-spacing:.04em;transition:border-color .2s,box-shadow .2s,color .2s}\n.btn.pri{background:linear-gradient(180deg,rgba(80,200,255,.28),rgba(40,140,200,.2));border-color:var(--hi);color:#fff;box-shadow:0 0 12px rgba(80,200,255,.25)}\n.btn:hover{border-color:var(--hi);box-shadow:0 0 16px rgba(80,200,255,.35)}\n.btn.no:hover{border-color:var(--warn);color:var(--warn);box-shadow:0 0 16px rgba(255,93,115,.3)}\n.btn:focus-visible{outline:1px solid var(--hi);outline-offset:2px}\n.btn::after{content:\"\";position:absolute;top:0;bottom:0;left:-60%;width:40%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.25),transparent);transform:skewX(-20deg);transition:left .5s var(--ease)}\n.btn:hover::after{left:130%}\n.result{display:flex;align-items:center;gap:10px;margin-right:auto;font-size:13.5px;font-weight:600;animation:hb-stamp .45s var(--ease) both;flex-wrap:wrap}\n.result .i{width:18px;height:18px}\n.result.ok{color:var(--ok)}\n.result.no{color:var(--warn)}\n.result small{font-weight:400;color:var(--mute);font-size:12px}\n@keyframes hb-stamp{0%{opacity:0;transform:scale(1.25);filter:blur(3px)}100%{opacity:1;transform:none;filter:none}}\n.undo{font:500 12px/1 var(--f-body);color:var(--mute);background:none;border:0;padding:6px;cursor:pointer;text-decoration:underline;text-underline-offset:3px}\n.undo:hover{color:var(--dim)}\n.win.q-acc{--c:var(--ok)}\n.win.q-rej{--c:var(--warn)}\n.win.clear{--c:var(--ok);border-color:rgba(95,240,196,.4)}\n.win.fail{--c:var(--warn);border-color:rgba(255,93,115,.45)}\n.res-hd{position:relative;display:flex;flex-direction:column;align-items:center;gap:4px;padding:18px 16px 4px;overflow:hidden;text-align:center}\n.res-hd .big{position:relative;font-family:var(--f-disp);font-weight:700;font-size:24px;letter-spacing:.28em;padding-left:.28em;line-height:1.2;color:var(--ok);text-shadow:0 0 16px rgba(95,240,196,.5);animation:hb-stamp .6s var(--ease) both;animation-delay:calc(var(--d,0s) + .5s);overflow:hidden}\n.fail .res-hd .big{color:var(--warn);text-shadow:0 0 16px rgba(255,93,115,.5)}\n.res-hd .big::after{content:\"\";position:absolute;top:0;bottom:0;left:-30%;width:25%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.45),transparent);transform:skewX(-20deg);animation:hb-sweep2 2.8s ease-in-out infinite;animation-delay:calc(var(--d,0s) + 1.2s)}\n@keyframes hb-sweep2{0%{left:-30%}40%,100%{left:120%}}\n.res-hd .q{font-size:13px;color:var(--dim);display:inline-flex;align-items:center;gap:6px;flex-wrap:wrap;justify-content:center}\n.got{display:flex;flex-wrap:wrap;gap:8px}\n.got>div{flex:1 1 140px;border:1px solid var(--line-soft);padding:10px;text-align:center;background:var(--tile);font-size:13.5px;font-weight:500;animation:hb-toast .5s var(--ease) both;animation-delay:calc(var(--d,0s) + .9s + var(--td,0s))}\n.fail .got>div{color:var(--warn);border-color:rgba(255,93,115,.25)}\n\n/* ===== profile ===== */\n.anal{display:flex;align-items:center;gap:6px}\n.anal .bar{width:56px;height:5px}\n.ch-top{display:grid;grid-template-columns:72px 1fr;gap:16px;align-items:center}\n.rank{position:relative;width:72px;height:72px;display:grid;place-items:center;--gc:var(--g-a)}\n.rank svg.hex{position:absolute;inset:0;width:100%;height:100%;fill:none;stroke:var(--gc)}\n.rank svg.hex .o{stroke-opacity:.7}\n.rank svg.hex .n{stroke-opacity:.25;animation:hb-hex 2.8s ease-in-out infinite}\n@keyframes hb-hex{50%{stroke-opacity:.6}}\n.rank b{position:relative;font-family:var(--f-disp);font-weight:700;font-size:30px;color:var(--gc);text-shadow:0 0 14px color-mix(in srgb,var(--gc) 70%,transparent);line-height:1}\n.rank b.ss{font-size:25px}\n.rank small{position:absolute;bottom:-2px;left:50%;transform:translateX(-50%);font-family:var(--f-disp);font-size:9.5px;letter-spacing:.2em;color:var(--mute);background:var(--panel-b);padding:0 4px;white-space:nowrap}\n.rank.unk{--gc:var(--mute)}\n.rank.unk svg.hex .o{stroke-dasharray:4 4}\n.rank.unk>.i{position:relative;width:24px;height:24px;color:var(--mute)}\n.ch-id{display:flex;flex-direction:column;gap:4px;min-width:0}\n.ch-id .name{font-size:20px;font-weight:600;line-height:1.25}\n.ch-id .meta{font-size:12.5px;color:var(--dim)}\n.ch-id .fx{margin-top:4px}\n.q3{font-family:var(--f-disp);color:var(--mute);letter-spacing:.06em}\n.slist{display:flex;flex-direction:column;gap:7px}\n.srow{display:grid;grid-template-columns:minmax(44px,max-content) 1fr 40px;gap:12px;align-items:center}\n.srow .k{font-size:13px;color:var(--dim);display:inline-flex;align-items:center;gap:4px;white-space:nowrap}\n.srow .k .i{width:12px!important;height:12px!important;color:var(--violet)}\n.srow.uq .k{color:var(--txt)}\n.srow .bar{height:5px}\n.srow .g{justify-self:end}\n.srow.locked .k{color:var(--mute)}\n.aff{display:grid;grid-template-columns:auto 1fr auto;gap:12px;align-items:center;padding:10px 12px;border:1px solid rgba(255,134,176,.28);background:rgba(255,134,176,.06)}\n.aff>.i{color:var(--rose);animation:hb-beat 1.6s ease-in-out infinite}\n@keyframes hb-beat{0%,60%,100%{transform:scale(1)}20%{transform:scale(1.18)}40%{transform:scale(.96)}}\n.aff .k{display:flex;flex-direction:column;gap:5px}\n.aff .k span{font-size:12px;color:var(--dim)}\n.aff .k span b{color:var(--rose);font-weight:600;margin-left:6px}\n.aff .v{font-family:var(--f-disp);font-size:20px;font-weight:600;color:var(--rose);font-variant-numeric:tabular-nums}\n.aff .v small{font-size:12px;color:var(--mute);font-weight:500}\n.thought{position:relative;padding:12px 14px 12px 42px;border:1px dashed var(--line);font-size:14px;background:rgba(8,24,42,.5);min-height:48px}\n.thought>.i{position:absolute;left:14px;top:14px;width:16px;height:16px;color:var(--cy)}\n.tw{display:block}\n.tw.typing::after{content:\"\";display:inline-block;width:2px;height:1em;margin-left:2px;vertical-align:-2px;background:var(--hi);animation:hb-blink .8s steps(1) infinite}\n.lockbox{position:relative;overflow:hidden}\n.lockbox .veil{filter:blur(5px);opacity:.45;user-select:none;pointer-events:none}\n.lk-ov{position:absolute;inset:0;z-index:2;display:flex;align-items:center;justify-content:center;gap:10px;padding:0 12px;text-align:center;background:repeating-linear-gradient(135deg,rgba(4,10,19,.55) 0 6px,rgba(4,10,19,.35) 6px 12px)}\n.lk-ov .i{width:16px!important;height:16px!important;color:var(--warn)}\n.lk-ov span{font-size:12.5px;color:var(--dim)}\n.lk-ov::after{content:\"\";position:absolute;left:0;right:0;height:1px;top:0;background:linear-gradient(90deg,transparent,rgba(255,93,115,.6),transparent);animation:hb-scan 2.4s linear infinite}\n@keyframes hb-scan{to{top:100%}}\n\n/* ===== shop ===== */\n.items{display:flex;flex-direction:column;gap:8px}\n.item{position:relative;display:grid;grid-template-columns:44px 1fr auto;gap:12px;align-items:center;padding:10px 12px;border:1px solid var(--line-soft);background:var(--tile);overflow:hidden;transition:border-color .2s,background .2s;animation:hb-toast .5s var(--ease) both;animation-delay:calc(var(--d,0s) + .5s + var(--td,0s))}\n.item::after{content:\"\";position:absolute;top:0;bottom:0;left:-40%;width:30%;background:linear-gradient(90deg,transparent,color-mix(in srgb,var(--rc) 18%,transparent),transparent);transform:skewX(-20deg);transition:left .6s var(--ease);pointer-events:none}\n.item:hover{border-color:color-mix(in srgb,var(--rc) 50%,transparent);background:rgba(12,32,54,.7)}\n.item:hover::after{left:120%}\n.item .ico{width:44px;height:44px}\n.item .ico .i{width:22px;height:22px}\n.item.r-legend .ico{animation:hb-legend 2.6s ease-in-out infinite}\n@keyframes hb-legend{50%{box-shadow:0 0 16px rgba(255,199,98,.45)}}\n.it{display:flex;flex-direction:column;gap:1px;min-width:0}\n.it .nm{display:flex;align-items:center;gap:8px;flex-wrap:wrap}\n.it .nm b{font-weight:600;font-size:14px}\n.it .ds{font-size:12.5px;color:var(--dim)}\n.price{display:flex;flex-direction:column;align-items:flex-end;gap:2px}\n.price b{font-family:var(--f-disp);font-weight:600;font-size:15px;font-variant-numeric:tabular-nums;white-space:nowrap}\n.price b small{font-size:11px;color:var(--mute);margin-left:2px}\n.price span{font-size:11px;color:var(--mute);white-space:nowrap;display:inline-flex;align-items:center;gap:3px}\n.item.lock{opacity:.62}\n.item.lock .price span{color:var(--warn)}\n.item.lock .price span .i{width:11px!important;height:11px!important}\n.hint{font-size:12.5px;color:var(--mute)}\n.hint b{font-family:var(--f-disp);font-weight:500;color:var(--dim)}\n\n@container hb (max-width:540px){\n  .vit{gap:10px}\n  .stats{grid-template-columns:repeat(2,minmax(0,1fr))}\n  .inv{grid-template-columns:1fr}\n  .who-lv b{display:none}\n  .money{margin-left:0}\n}\n/* ticker for text too long to fit (class set by HB.marquee) */\n.mq{overflow:hidden!important;text-overflow:clip!important;white-space:nowrap!important}\n.mq-i{display:inline-block;white-space:nowrap;will-change:transform}\n.mq.run{-webkit-mask-image:linear-gradient(90deg,#000 calc(100% - 12px),transparent);mask-image:linear-gradient(90deg,#000 calc(100% - 12px),transparent)}\n.mq.run .mq-i{animation:hb-mq var(--mqt,6s) ease-in-out infinite alternate}\n@keyframes hb-mq{0%,18%{transform:translateX(0)}82%,100%{transform:translateX(var(--mqd,0))}}\n@media (prefers-reduced-motion:reduce){\n  .hb *,.hb *::before,.hb *::after{animation:none!important;transition:none!important}\n}\n\n/* custom pack windows and added fields */\n.cw-r{display:flex;align-items:baseline;justify-content:space-between;gap:12px;font-size:13px;line-height:1.5;min-width:0}\n.cw-r .k{color:var(--dim);flex:none}\n.cw-r .v{color:var(--txt);font-weight:600;text-align:right;min-width:0;overflow-wrap:anywhere}\n.cw-g{display:flex;flex-direction:column;gap:5px}\n.cw-l{font-size:13px;line-height:1.5;color:var(--txt);padding-left:10px;border-left:2px solid var(--line)}\n\n/* shadow-root additions */\n.hb.noanim{--d:-5s}\n.ch-top.norank{grid-template-columns:minmax(0,1fr)}\n.win.pend{display:flex;align-items:center;justify-content:center;gap:12px;padding:12px 16px;font-size:12.5px;color:var(--dim);letter-spacing:.04em}\n.pend .dots{display:inline-flex;gap:4px}\n.pend .dots i{width:5px;height:5px;background:var(--hi);box-shadow:0 0 6px var(--hi);animation:hb-dot 1.2s ease-in-out infinite}\n.pend .dots i:nth-child(2){animation-delay:.15s}.pend .dots i:nth-child(3){animation-delay:.3s}\n.hd .upd{font-family:var(--f-disp);font-size:10.5px;letter-spacing:.14em;color:var(--amber);border:1px solid color-mix(in srgb,var(--amber) 50%,transparent);background:color-mix(in srgb,var(--amber) 10%,transparent);padding:0 6px;line-height:1.6;white-space:nowrap}\n.info>div.chg{animation:hb-chg 1.6s ease-out both;animation-delay:calc(var(--d,0s) + .6s)}\n.info>div.chg .i,.info>div.chg .v{color:var(--amber)}\n.vit>div.chg .k,.vit>div.chg .v{color:var(--amber)}\n.qline.chg{animation:hb-chg 1.6s ease-out both;animation-delay:calc(var(--d,0s) + .6s)}\n.fx.chg .chip{animation:hb-chg 1.6s ease-out both;animation-delay:calc(var(--d,0s) + .6s)}\n@keyframes hb-chg{0%{box-shadow:0 0 0 0 color-mix(in srgb,var(--amber) 70%,transparent)}100%{box-shadow:0 0 0 6px transparent}}\n@keyframes hb-dot{0%,100%{opacity:.2;transform:translateY(0)}40%{opacity:1;transform:translateY(-3px)}}\n/* breathing room above and below each window */\n:host{margin:16px 0}\n/* waits off-screen at its first frame, plays when it scrolls into view */\n.hb.wait *,.hb.wait *::before,.hb.wait *::after{animation-play-state:paused!important}\n";
/* ---------- core: parsing, icons, labels ---------- */
var HB = { R: {}, B: {}, lang: 'ko', opt: { questBtn: 'input' } };
var LBL = {
  ko: { status: '상태창', fat: '피로', title: '칭호', sp: '잔여 스탯', attr: '능력치', inv: '인벤토리', skill: '스킬', more: '상세 보기', less: '접기',
    left: '남은 시간', reward: '성공 보상', penalty: '실패 패널티', no: '거절', yes: '수락', acc: '퀘스트를 수락했습니다', rej: '퀘스트를 거절했습니다',
    typed: '입력창에 입력됨', sent: '전송됨', redo: '다시 선택', active: '진행 중', grade: '평가', quest: '퀘스트', profile: '인물 정보', scan: '분석',
    aff: '호감도', affLock: '호감도 열람 불가', lock: '열람 권한 부족', shop: '상점', refresh: '상점 갱신까지', pending: '시스템 창 수신 중',
    veil: '아직 읽을 수 없는 정보입니다. 조금 더 가까워져야 합니다.', accLine: '(퀘스트 [{q}]를 수락한다)', rejLine: '(퀘스트 [{q}]를 거절한다)', equip: '장착', upd: '갱신', buff: '버프', debuff: '디버프', edit: '현재 상태 수정', book: '수첩', etc: '기타' },
  en: { status: 'Status', fat: 'FTG', title: 'Title', sp: 'Stat points', attr: 'Attributes', inv: 'Inventory', skill: 'Skills', more: 'Details', less: 'Collapse',
    left: 'Time left', reward: 'Reward', penalty: 'Penalty', no: 'Decline', yes: 'Accept', acc: 'Quest accepted', rej: 'Quest declined',
    typed: 'added to input', sent: 'sent', redo: 'Choose again', active: 'In progress', grade: 'Grade', quest: 'Quest', profile: 'Profile', scan: 'Scan',
    aff: 'Affection', affLock: 'Affection hidden', lock: 'Access denied', shop: 'Shop', refresh: 'Restock in', pending: 'Receiving System window',
    veil: 'This information cannot be read yet. You need to get closer.', accLine: '(I accept the quest [{q}])', rejLine: '(I decline the quest [{q}])', equip: 'equipped', upd: 'UPDATED', buff: 'Buff', debuff: 'Debuff', edit: 'Edit status', book: 'Notebook', etc: 'Other' },
  ja: { status: 'ステータス', fat: '疲労', title: '称号', sp: '残りポイント', attr: '能力値', inv: 'インベントリ', skill: 'スキル', more: '詳細を見る', less: '閉じる',
    left: '残り時間', reward: '成功報酬', penalty: '失敗ペナルティ', no: '拒否', yes: '受諾', acc: 'クエストを受諾しました', rej: 'クエストを拒否しました',
    typed: '入力欄に入力済み', sent: '送信済み', redo: '選び直す', active: '進行中', grade: '評価', quest: 'クエスト', profile: '人物情報', scan: '分析',
    aff: '好感度', affLock: '好感度 閲覧不可', lock: '閲覧権限不足', shop: 'ショップ', refresh: '更新まで', pending: 'システムウィンドウ受信中',
    veil: 'まだ読み取れない情報です。もう少し近づく必要があります。', accLine: '(クエスト[{q}]を受ける)', rejLine: '(クエスト[{q}]を断る)', equip: '装備', upd: '更新', buff: 'バフ', debuff: 'デバフ', edit: 'ステータスを修正', book: '手帳', etc: 'その他' }
};
function T(k) { var l = LBL[HB.lang] || LBL.ko; return l[k] != null ? l[k] : LBL.ko[k]; }

var ICON = {
  status: '<rect x="3" y="4" width="18" height="16" rx="1"/><circle cx="9" cy="11" r="2.5"/><path d="M5.5 17c.6-2 2-3 3.5-3s2.9 1 3.5 3M15 10h3M15 13h3"/>',
  cal: '<rect x="3.5" y="5" width="17" height="15" rx="1"/><path d="M3.5 9.5h17M8 3v4M16 3v4"/>',
  clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
  pin: '<path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.3"/>',
  weather: '<path d="M7 18h10a3.5 3.5 0 0 0 .4-7A5 5 0 0 0 8 10.2 4 4 0 0 0 7 18z"/><path d="M15 4.5v1.5M19.5 6.5l-1 1M21 11h-1.2"/>',
  chev: '<path d="M6 9l6 6 6-6"/>',
  sys: '<path d="M12 2.8l8 4.6v9.2l-8 4.6-8-4.6V7.4z"/><path d="M12 8l3.5 2v4L12 16l-3.5-2v-4z"/>',
  warn: '<path d="M12 3.5L21.5 20h-19z"/><path d="M12 10v4.5M12 17.3v.2"/>',
  glitch: '<path d="M3 6h9M15 6h6M3 12h4M10 12h11M3 18h12M18 18h3"/>',
  quest: '<path d="M6 21V3.5"/><path d="M6 4h11l-2.5 4L17 12H6"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  x: '<path d="M6 6l12 12M18 6L6 18"/>',
  timer: '<circle cx="12" cy="13.5" r="7.5"/><path d="M12 9.5v4l2.5 1.5M9.5 2.5h5M12 2.5V6"/>',
  gift: '<rect x="3.5" y="8.5" width="17" height="4"/><path d="M5 12.5V20h14v-7.5M12 8.5V20"/><path d="M12 8.5C10.5 5 7 4.5 7 6.5s3 2 5 2c2 0 5 0 5-2s-3.5-1.5-5 2z"/>',
  penalty: '<path d="M12 3l7.5 3v5.5c0 4.5-3.2 8-7.5 9.5-4.3-1.5-7.5-5-7.5-9.5V6z"/><path d="M13 7l-2.5 4.5h3L11 16"/>',
  scan: '<path d="M3.5 8V3.5H8M16 3.5h4.5V8M20.5 16v4.5H16M8 20.5H3.5V16"/><circle cx="12" cy="10" r="3"/><path d="M7 17.5c1-2.3 2.8-3.5 5-3.5s4 1.2 5 3.5"/>',
  link: '<path d="M12 20s-7.5-4.4-7.5-10A4.3 4.3 0 0 1 12 7.4 4.3 4.3 0 0 1 19.5 10c0 5.6-7.5 10-7.5 10z"/><path d="M7.5 12h2.5l1.2-2.2 1.8 4.4 1.2-2.2h2.3"/>',
  mind: '<path d="M4 5.5h16v10H11l-4.5 3.5v-3.5H4z"/><path d="M8 10.5h.01M12 10.5h.01M16 10.5h.01" stroke-width="2.4"/>',
  shop: '<path d="M5 8h14l-1 12.5H6z"/><path d="M9 8V6.5a3 3 0 0 1 6 0V8"/>',
  won: '<rect x="3" y="6" width="18" height="12" rx="1"/><circle cx="12" cy="12" r="2.6"/><path d="M6 9.5v5M18 9.5v5"/>',
  point: '<path d="M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.6 6.6 19.5l1.2-6L3.3 9.3l6.1-.7z"/>',
  potion: '<path d="M9.5 3h5M10 3v5.2L5.6 15.5A3.5 3.5 0 0 0 8.6 21h6.8a3.5 3.5 0 0 0 3-5.5L14 8.2V3"/><path d="M7.2 14h9.6"/>',
  ring: '<circle cx="12" cy="14.5" r="6"/><path d="M9.5 5.5L12 3l2.5 2.5L12 8.5z"/>',
  book: '<path d="M5 4.5h11a2 2 0 0 1 2 2V20H7a2 2 0 0 1-2-2z"/><path d="M5 18a2 2 0 0 1 2-2h11"/><path d="M11.5 7.5l1.2 2.3 2.3 1.2-2.3 1.2-1.2 2.3-1.2-2.3L8 11l2.3-1.2z"/>',
  chest: '<path d="M3.5 10a5 5 0 0 1 5-5h7a5 5 0 0 1 5 5v9.5h-17z"/><path d="M3.5 11.5h17"/><rect x="10.5" y="10" width="3" height="4"/>',
  lock: '<rect x="5" y="10.5" width="14" height="10" rx="1"/><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3"/>',
  up: '<path d="M12 19V5M6 11l6-6 6 6"/>',
  down: '<path d="M12 5v14M6 13l6 6 6-6"/>',
  spark: '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M18.5 16.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z"/>',
  medal: '<path d="M8 3h8l-2 6h-4z"/><circle cx="12" cy="15" r="5.5"/><path d="M12 12.5l.8 1.7 1.8.2-1.3 1.2.4 1.8-1.7-.9-1.7.9.4-1.8-1.3-1.2 1.8-.2z"/>',
  key: '<circle cx="8" cy="12" r="4"/><path d="M12 12h9M18 12v3M15.5 12v2"/>',
  food: '<path d="M12 4L3.5 19h17z"/><path d="M8.5 19v-4.5h7V19"/>',
  card: '<rect x="6" y="3" width="12" height="18" rx="1"/><path d="M12 8l2.5 4-2.5 4-2.5-4z"/>',
  radar: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><path d="M12 12l5.5-5.5"/>',
  fist: '<path d="M7 10V7.5a1.5 1.5 0 0 1 3 0V10M10 9.5V6.5a1.5 1.5 0 0 1 3 0V10M13 9.5V7a1.5 1.5 0 0 1 3 0v3M16 10V8.5a1.5 1.5 0 0 1 3 0V14a6 6 0 0 1-6 6h-1a6 6 0 0 1-6-6v-2.5a1.5 1.5 0 0 1 3 0"/>',
  eye: '<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/>',
  bag: '<path d="M5 9a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v11H5z"/><path d="M9 6V4.5h6V6M5 13h14M10.5 13v2h3v-2"/>',
  sword: '<path d="M14.5 3.5H20.5V9.5L10 20l-6-6z"/><path d="M8 12l4 4M4 20l2.5-2.5"/>',
  armor: '<path d="M8 3.5l4 2 4-2 4 3-2 4v10H6v-10l-2-4z"/><path d="M12 5.5V20.5"/>',
  phone: '<rect x="6.5" y="2.5" width="11" height="19" rx="2"/><path d="M11 18.5h2"/>',
  gem: '<path d="M7 4h10l4 5-9 11L3 9z"/><path d="M3 9h18M9.5 4L8 9l4 11 4-11-1.5-5"/>',
  coin: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="5"/>',
  cube: '<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z"/><path d="M4 7.5l8 4.5 8-4.5M12 12v9"/>',
  bolt: '<path d="M13 2.5L5 13.5h6l-1 8 8-11h-6z"/>',
  ghost: '<path d="M5.5 20.5V10a6.5 6.5 0 0 1 13 0v10.5l-2.2-1.6-2.1 1.6-2.2-1.6-2.2 1.6-2.1-1.6z"/><path d="M9.5 10.5h.01M14.5 10.5h.01" stroke-width="2.4"/>',
  heart: '<path d="M12 20s-7.5-4.4-7.5-10A4.3 4.3 0 0 1 12 7.4 4.3 4.3 0 0 1 19.5 10c0 5.6-7.5 10-7.5 10z"/>',
  fire: '<path d="M12 21a6.5 6.5 0 0 0 6.5-6.5c0-4-3-6-4-9.5-1.5 2-2 3.5-2 5-1-1-2-2-2.5-3.5C8 9 5.5 11.5 5.5 14.5A6.5 6.5 0 0 0 12 21z"/>'
};
HB.ICON = ICON; HB.T = T; HB.LBL = LBL;
HB.ic = function (n, c) { return '<svg class="i' + (c ? ' ' + c : '') + '" viewBox="0 0 24 24" aria-hidden="true">' + (ICON[n] || ICON.cube) + '</svg>'; };
HB.esc = function (s) {
  return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; });
};
/* [bracketed] words glow; runs of the block character become redaction bars */
HB.fmt = function (s) {
  return HB.esc(s)
    .replace(/\[([^\]]+)\]/g, function (m) { return '<span class="hl">' + m + '</span>'; })
    .replace(/█+/g, function (m) { return '<span class="redact" style="--w:' + (m.length * 0.62 + 0.4).toFixed(2) + 'em"></span>'; });
};
function trimS(s) { return String(s).trim(); }
HB.parse = function (raw) {
  var d = { _l: [] };
  String(raw || '').split(/\r?\n/).forEach(function (l) {
    var m = l.match(/^\s*[-*]?\s*([A-Za-z_]+)\s*[:：]\s*([\s\S]*)/);
    if (!m) return;
    var k = m[1].toLowerCase(), v = m[2].trim();
    if (!v) return;
    (d[k] = d[k] || []).push(v);
    d._l.push([k, v]);
  });
  return d;
};
HB.one = function (d, k) { return d[k] && d[k].length ? d[k][0] : ''; };
HB.all = function (d, k) { return (d[k] || []).join(';').split(/[;；]/).map(trimS).filter(Boolean); };
HB.fields = function (s) { return String(s).split('|').map(trimS); };
HB.isQ = function (s) { s = trimS(s || ''); return !!s && s.replace(/[?？]/g, '') === ''; };
var GV = { f: 8, e: 20, d: 32, c: 46, b: 60, a: 74, s: 87, ss: 95, sss: 100, ex: 100 };
HB.grade = function (s) {
  var m = trimS(s || '').toUpperCase().match(/^(SSS|SS|EX|[FEDCBAS])([+-]?)$/);
  if (!m) return null;
  var k = m[1].toLowerCase(), v = GV[k] + (m[2] === '+' ? 5 : m[2] === '-' ? -5 : 0);
  return { t: m[1] + m[2], c: 'g-' + k, v: Math.max(3, Math.min(100, v)) };
};
HB.gchip = function (g) { return g ? '<span class="g ' + g.c + '">' + g.t + '</span>' : '<span class="g g-x">' + HB.ic('lock') + '</span>'; };
HB.rar = function (s) {
  s = String(s || '').toLowerCase();
  if (/전설|신화|legend|myth|レジェンド|伝説|神話/.test(s)) return 'r-legend';
  if (/영웅|유니크|epic|unique|hero|エピック|英雄|ユニーク/.test(s)) return 'r-epic';
  if (/희귀|레어|rare|퀘스트|quest|レア|希少|クエスト/.test(s)) return 'r-rare';
  return 'r-common';
};
HB.itemIcon = function (n) {
  var t = String(n || '').toLowerCase(), L = [
    ['potion', /포션|물약|약|엘릭서|potion|elixir|drug|pill|ポーション|薬/],
    ['book', /스킬북|책|서적|두루마리|교본|book|scroll|tome|書|本|巻物/],
    ['ring', /반지|목걸이|귀걸이|팔찌|부적|ring|amulet|necklace|charm|指輪|首飾|お守り/],
    ['key', /열쇠|키|key|鍵/],
    ['card', /카드|티켓|증|card|ticket|pass|カード|チケット/],
    ['phone', /폰|휴대|phone|スマホ|携帯/],
    ['sword', /검|칼|단검|도끼|창|활|총|무기|sword|blade|knife|axe|bow|gun|weapon|剣|刀|槍|弓|銃/],
    ['armor', /갑옷|방패|코트|자켓|옷|장갑|신발|투구|armor|shield|coat|jacket|glove|boots|helm|鎧|盾|服/],
    ['gem', /보석|원석|결정|마석|코어|gem|crystal|stone|core|宝石|結晶|魔石/],
    ['coin', /동전|코인|금화|은화|coin|gold|コイン|金貨/],
    ['chest', /상자|가방|주머니|box|chest|bag|pouch|箱|袋/],
    ['food', /김밥|빵|음식|도시락|과자|음료|커피|라면|우유|고기|사탕|food|bread|snack|drink|coffee|meal|candy|パン|弁当|飲/]
  ];
  for (var i = 0; i < L.length; i++) if (L[i][1].test(t)) return L[i][0];
  return 'cube';
};
HB.skillIcon = function (n, passive) {
  var t = String(n || '').toLowerCase(), L = [
    ['eye', /관찰|감정|간파|눈|시야|eye|sight|appraise|insight|鑑定|観察|眼/],
    ['radar', /감지|탐지|탐색|레이더|sense|detect|感知|探知/],
    ['fist', /제압|격투|주먹|권|타격|fist|punch|grapple|格闘|拳/],
    ['ghost', /은신|은폐|투명|stealth|hide|shadow|隠密|透明/],
    ['fire', /화염|불|폭발|fire|flame|blaze|炎|爆/],
    ['heart', /회복|치유|힐|heal|cure|regen|回復|治癒/],
    ['sword', /검술|베기|참격|sword|slash|blade|剣術|斬/]
  ];
  for (var i = 0; i < L.length; i++) if (L[i][1].test(t)) return L[i][0];
  return passive ? 'radar' : 'bolt';
};
HB.frac = function (s) {
  var m = String(s || '').match(/(-?[\d,.]+)\s*\/\s*([\d,.]+)/);
  if (!m) return null;
  var a = parseFloat(m[1].replace(/,/g, '')), b = parseFloat(m[2].replace(/,/g, ''));
  return { a: m[1], b: m[2], p: b ? Math.max(0, Math.min(100, a / b * 100)) : 0 };
};
HB.pct = function (s) {
  var n = parseFloat(String(s || '').replace(/,/g, ''));
  return isNaN(n) ? null : Math.max(0, Math.min(100, n));
};
HB.bar = function (v, cls) { return '<div class="bar' + (cls ? ' ' + cls : '') + '" style="--v:' + v.toFixed(1) + '%"><i></i></div>'; };
HB.q3 = function (s) { return HB.esc(s).replace(/[?？]{2,}/g, function (m) { return '<span class="q3">' + m + '</span>'; }); };
/* text that does not fit scrolls sideways like a ticker instead of being cut with "…" */
HB.MQ = '.st .line .tx, .st .hd-r .nm, .st .sclk .wx .tx,.ttl em, .who-lv b, .info .v, .stat .k, .slot .nm b, .gx-log li span:first-child';
HB.marquee = function (root) {
  function fit(el) {
    var w = el.clientWidth, inner = el.firstElementChild;
    if (!w || !inner) return;
    var over = inner.scrollWidth - w;
    if (over > 2) {
      el.style.setProperty('--mqd', -over + 'px');
      el.style.setProperty('--mqt', Math.max(5, over / 18 + 4).toFixed(1) + 's');
      el.classList.add('run');
    } else el.classList.remove('run');
  }
  var els = [];
  root.querySelectorAll(HB.MQ).forEach(function (el) {
    if (!el.classList.contains('mq')) {
      var sp = el.ownerDocument.createElement('span'); sp.className = 'mq-i';
      while (el.firstChild) sp.appendChild(el.firstChild);
      el.appendChild(sp); el.classList.add('mq'); el.removeAttribute('title');
    }
    els.push(el); fit(el);
  });
  /* re-measure when a hidden tab or the folded part opens, or the width changes */
  if (els.length && P.ResizeObserver && !root._mqro) {
    root._mqro = new P.ResizeObserver(function (es) { es.forEach(function (e) { fit(e.target); }); });
    els.forEach(function (el) { root._mqro.observe(el); });
  }
};
HB.isNone = function (s) { s = String(s == null ? '' : s).split('|')[0].trim(); return !s || /^(없음|없다|해당\s*없음|none|n\/?a|nothing|null|-+|—|–|なし|無し|ない|无|無)$/i.test(s); };
HB.isNum = function (s) { return /^[\d,.\s]+$/.test(String(s || '')) && /\d/.test(s); };
HB.reduce = !!(P.matchMedia && P.matchMedia('(prefers-reduced-motion: reduce)').matches);
HB.toST = function (text, send) {
  try {
    var ta = D.querySelector('#send_textarea');
    if (!ta) return false;
    var cur = ta.value ? ta.value.replace(/\s+$/, '') + '\n' : '';
    ta.value = cur + text;
    ta.dispatchEvent(new P.Event('input', { bubbles: true }));
    if (send) { var b = D.querySelector('#send_but'); if (b) { b.click(); return 'sent'; } }
    ta.focus();
    return 'typed';
  } catch (e) { return false; }
};
HB.unST = function (text) {
  try {
    var ta = D.querySelector('#send_textarea');
    if (ta && ta.value.indexOf(text) > -1) {
      ta.value = ta.value.replace(text, '').replace(/\n+$/, '');
      ta.dispatchEvent(new P.Event('input', { bubbles: true }));
    }
  } catch (e) {}
};
HB.tabs = function (root) {
  root.querySelectorAll('[data-tabs]').forEach(function (list) {
    list.addEventListener('click', function (e) {
      var t = e.target.closest('.tab'); if (!t) return;
      list.querySelectorAll('.tab').forEach(function (b) {
        b.setAttribute('aria-selected', b === t ? 'true' : 'false');
        var p = b.dataset.p && root.querySelector('[data-panel="' + b.dataset.p + '"]');
        if (p) p.hidden = b !== t;
      });
    });
  });
};

/* ---------- status arithmetic: the AI writes only what changed, this module adds it up ----------
   A state is a plain object: single values are strings ({ hp: '42/50' }), lists are arrays ({ inv: ['포션|일반|2'] }).
   Everything here is a pure function (no DOM, no chat access), so it can be tested on its own. */
HB.S = (function () {
  var LISTS = { fx: 1, stat: 1, inv: 1, skill: 1, titles: 1, quest: 1 };
  /* gauges: 'max' = kept between 0 and the maximum, 'open' = may pass the maximum (exp), 'pct' = 0-100 */
  var GAUGE = { hp: 'max', mp: 'max', sta: 'max', san: 'max', exp: 'open', fat: 'pct' };
  /* counters: a signed number is added to the number already there; the text around it (unit, note) is kept */
  var COUNT = { money: -Infinity, point: 0, sp: 0, lv: 0 };
  var ORDER = ['date', 'time', 'loc', 'weather', 'name', 'lv', 'rank', 'role', 'title', 'titles', 'exp', 'hp', 'mp', 'fat', 'sta', 'san', 'fx', 'quest', 'money', 'point', 'sp', 'stat', 'inv', 'skill'];
  /* field types added by a custom pack: { key: 'gauge' | 'number' | 'list' | 'text' } (status keys); a tracked custom window passes its own */
  var TYPES = {};
  function isList(k, T) { return !!(LISTS[k] || (T || TYPES)[k] === 'list'); }
  function gaugeOf(k, T) { return GAUGE[k] || ((T || TYPES)[k] === 'gauge' ? 'max' : null); }
  function countOf(k, T) { return k in COUNT ? COUNT[k] : (T || TYPES)[k] === 'number' ? -Infinity : null; }
  var SIGN = /^\s*([+\-−＋－])\s*/, SNUM = /^\s*([+\-−＋－])\s*([\d,]*\.?\d+)/, NUM = /-?\d[\d,]*(?:\.\d+)?/;

  function num(s) { var n = parseFloat(String(s).replace(/,/g, '')); return isNaN(n) ? null : n; }
  function show(n, like) { n = Math.round(n * 100) / 100; return /,/.test(like || '') ? n.toLocaleString('en-US') : String(n); }
  function signOf(s) { var m = String(s).match(SIGN); return m ? (/[+＋]/.test(m[1]) ? 1 : -1) : 0; }
  function unsign(s) { return String(s).replace(SIGN, ''); }
  /* "+12" / "-3.5" at the start of a value -> the number to add; anything else -> null */
  function delta(v) { var m = String(v).match(SNUM); return m ? num(m[2]) * (/[+＋]/.test(m[1]) ? 1 : -1) : null; }
  function norm(s) { return String(s).toLowerCase().replace(/[\s\[\]「」『』【】()（）·・.,'"!?~\-]/g, ''); }
  function items(v) { return String(v).split(/[;；]/).map(trimS).filter(Boolean); }
  function join(f) { while (f.length > 1 && !f[f.length - 1]) f.pop(); return f.join('|'); }
  function isInt(s) { return /^[x×]?\d+$/i.test(s || ''); }
  function int(s) { return parseInt(String(s).replace(/^[x×]/i, ''), 10); }

  function limit(n, max, kind) {
    if (n < 0) n = 0;
    if (kind === 'max' && max != null && n > max) n = max;
    if (kind === 'pct' && n > 100) n = 100;
    return n;
  }
  function gauge(prev, v, kind) {
    var pf = HB.frac(prev), vf = String(v).match(/^\s*([+\-−＋－]?)\s*([\d,]*\.?\d+)\s*\/\s*([\d,]*\.?\d+)/), d = delta(v), cur;
    if (vf) {                                            /* cur/max; a signed cur is added to the old one */
      cur = num(vf[2]);
      if (vf[1]) cur = (pf ? num(pf.a) : 0) + cur * (/[+＋]/.test(vf[1]) ? 1 : -1);
      return show(limit(cur, num(vf[3]), kind), vf[2]) + '/' + vf[3];
    }
    if (d != null) {                                     /* +n / -n */
      if (pf) return show(limit(num(pf.a) + d, num(pf.b), kind), pf.a) + '/' + pf.b;
      var tok = prev == null ? null : String(prev).match(NUM);
      if (!tok) return prev;                             /* nothing to add to: leave it alone */
      return String(prev).replace(NUM, show(limit(num(tok[0]) + d, null, /%/.test(prev) ? 'pct' : kind), tok[0]));
    }
    if (pf && /^\s*[\d,]*\.?\d+\s*$/.test(v)) return show(limit(num(v), num(pf.b), kind), pf.a) + '/' + pf.b;   /* bare number = new cur */
    return v;
  }
  function count(prev, v, min) {
    var d = delta(v);
    if (d == null) return v;
    var tok = prev == null ? null : String(prev).match(NUM);
    if (!tok) return unsign(v).replace(NUM, function (t) { return show(Math.max(min, d), t); });
    return String(prev).replace(NUM, show(Math.max(min, num(tok[0]) + d), tok[0]));
  }

  /* "근력 8 D-" / "근력 +1" / "근력 +1 C" -> parts */
  function statParts(s) {
    var tk = trimS(s).split(/\s+/), g = '', n = null, d = false;
    if (tk.length > 1 && (HB.grade(tk[tk.length - 1]) || HB.isQ(tk[tk.length - 1]))) g = tk.pop();
    if (tk.length > 1 && /^[+\-−＋－]?[\d,]*\.?\d+$/.test(tk[tk.length - 1])) { var t = tk.pop(), sg = signOf(t); d = sg !== 0; n = num(unsign(t)) * (sg < 0 ? -1 : 1); }
    return { name: tk.join(' '), n: n, d: d, g: g };
  }
  function statJoin(p) { return p.name + (p.n != null ? ' ' + show(p.n) : '') + (p.g ? ' ' + p.g : ''); }
  function fieldsOf(body, key) {
    var f = HB.fields(body);
    if (key === 'inv' && f.length === 2 && isInt(f[1])) f = [f[0], '', f[1]];   /* "item|2" = item, no rarity, qty 2 */
    return f;
  }
  function nameOf(body, key) { return key === 'stat' ? statParts(body).name : HB.fields(body)[0]; }
  function find(list, name, key, loose) {
    var n = norm(name), hit = -1, i, c;
    if (!n) return -1;
    for (i = 0; i < list.length; i++) if (norm(nameOf(list[i], key)) === n) return i;
    if (!loose) return -1;
    for (i = 0; i < list.length; i++) {                  /* removal only: accept one unambiguous near match */
      c = norm(nameOf(list[i], key));
      if (c && (c.indexOf(n) > -1 || n.indexOf(c) > -1)) { if (hit > -1) return -1; hit = i; }
    }
    return hit;
  }
  /* taking away: returns what is left of the item, or null when it is gone */
  function lose(old, body, key) {
    if (key !== 'inv') return null;
    var fn = fieldsOf(body, key), fo = fieldsOf(old, key), amt = isInt(fn[2]) ? int(fn[2]) : null;
    if (amt == null || !isInt(fo[2])) return null;
    var left = int(fo[2]) - amt;
    if (left <= 0) return null;
    fo[2] = String(left); return join(fo);
  }
  /* add = the item came with "+": quantities add up instead of being overwritten */
  function merge(old, body, key, add) {
    if (key === 'stat') {
      var o = statParts(old), n = statParts(body);
      if (n.n != null) o.n = n.d ? (o.n || 0) + n.n : n.n;
      if (n.g) o.g = n.g;
      return statJoin(o);
    }
    var fo = fieldsOf(old, key), fn = fieldsOf(body, key), j, lv;
    if (key === 'inv' && add && isInt(fo[2])) fn[2] = String(int(fo[2]) + (isInt(fn[2]) ? int(fn[2]) : 1));
    if (key === 'skill' && fn[1] && (lv = fn[1].match(/^\+\s*(\d+)$/)) && /\d+/.test(fo[1] || '')) fn[1] = fo[1].replace(/\d+/, function (t) { return String(parseInt(t, 10) + parseInt(lv[1], 10)); });
    for (j = 1; j < fn.length; j++) if (fn[j]) fo[j] = fn[j];
    for (j = 0; j < fo.length; j++) if (fo[j] == null) fo[j] = '';
    return join(fo);
  }
  function fresh(body, key) {
    if (key === 'stat') { var p = statParts(body); return statJoin(p); }
    return join(fieldsOf(body, key));
  }
  function hasSign(it, key) { return signOf(it) !== 0 || (key === 'stat' && statParts(it).d); }
  /* an unsigned list that names most of what is already there is the whole list written out again */
  function rewrites(prev, inc, key) {
    if (inc.length < 2 || !prev.length) return false;
    var hit = 0;
    prev.forEach(function (p) { if (find(inc, nameOf(p, key), key, false) > -1) hit++; });
    return hit * 2 > prev.length;
  }
  function list(prev, v, key, full) {
    if (HB.isNone(v)) return [];
    var inc = items(v), out = prev ? prev.slice() : [];
    if (key === 'fx') return inc;                         /* "+" / "-" mean buff / debuff here: always the full list */
    var signed = inc.some(function (it) { return hasSign(it, key); });
    if (!signed && (full || rewrites(out, inc, key))) return inc.map(function (it) { return fresh(it, key); });
    inc.forEach(function (it) {
      var sg = signOf(it), body = unsign(it), i = find(out, nameOf(body, key), key, sg < 0);
      if (!nameOf(body, key)) return;
      if (sg < 0) { if (i > -1) { var left = lose(out[i], body, key); if (left == null) out.splice(i, 1); else out[i] = left; } return; }
      if (i < 0) out.push(fresh(body, key)); else out[i] = merge(out[i], body, key, sg > 0);
    });
    return out;
  }

  /* apply one <status> block to a state and return the new state. full = unsigned lists replace (old chats, manual edits) */
  function apply(prev, raw, full, T) {
    var st = {}, d = HB.parse(raw), done = {};
    Object.keys(prev || {}).forEach(function (k) { st[k] = Array.isArray(prev[k]) ? prev[k].slice() : prev[k]; });
    d._l.forEach(function (kv) {
      var k = kv[0], v;
      if (done[k]) return; done[k] = 1;
      if (isList(k, T)) { st[k] = list(st[k], d[k].join(';'), k, full); return; }
      v = d[k][d[k].length - 1];
      if (HB.isNone(v)) { delete st[k]; return; }
      var gk = gaugeOf(k, T), cm = countOf(k, T);
      if (gk) v = gauge(st[k], v, gk);
      else if (cm != null) v = count(st[k], v, cm);
      if (v != null) st[k] = v;
    });
    return st;
  }
  function blocks(mes) {
    var out = [], re = /<status>([\s\S]*?)<\/status>/gi, m;
    if (!mes || !/<status>/i.test(mes)) return out;
    while ((m = re.exec(mes))) out.push(m[1]);
    return out;
  }
  /* every block of the given tags, in the order written: [[tag, body], ...] */
  function tagged(mes, tags) {
    var out = [], re, m;
    if (!mes || mes.indexOf('<') < 0 || !tags.length) return out;
    re = new RegExp('<(' + tags.join('|') + ')>([\\s\\S]*?)<\\/\\1>', 'gi');
    while ((m = re.exec(mes))) out.push([m[1].toLowerCase(), m[2]]);
    return out;
  }
  function hash(s) { var h = 5381, i = s.length; while (i) h = (h * 33) ^ s.charCodeAt(--i); return (h >>> 0).toString(36); }
  function keysOf(st, only) {
    /* "@tag" keys hold the totals of a tracked custom window: never part of the status itself */
    var ks = ORDER.filter(function (k) { return k in st; }).concat(Object.keys(st).filter(function (k) { return ORDER.indexOf(k) < 0 && k.charAt(0) !== '@'; }));
    return only ? ks.filter(function (k) { return only.indexOf(k) > -1; }) : ks;
  }
  /* short = for the AI's prompt: skill and title effects are left out (they are kept in the state all the same) */
  var SHORT = { skill: 3, titles: 1 };
  function line(st, k, short) {
    var v = st[k];
    if (!Array.isArray(v)) return k + ': ' + v;
    if (short && SHORT[k]) v = v.map(function (it) { return HB.fields(it).slice(0, SHORT[k]).join('|'); });
    return k + ': ' + (v.length ? v.join('; ') : 'none');
  }
  /* the state as block text ("key: value" lines); only = keys to include */
  function text(st, only, short) { return keysOf(st || {}, only).map(function (k) { return line(st, k, short); }).join('\n'); }
  /* the state in the shape the renderers read (what HB.parse returns) */
  function view(st) {
    var d = { _l: [] };
    keysOf(st || {}).forEach(function (k) {
      var v = Array.isArray(st[k]) ? st[k].join('; ') : st[k];
      if (v) { d[k] = [v]; d._l.push([k, v]); }
    });
    return d;
  }
  return { LISTS: LISTS, ORDER: ORDER, SIGN: SIGN, unsign: unsign, apply: apply, blocks: blocks, tagged: tagged, hash: hash, text: text, view: view, items: items,
    isList: isList, setTypes: function (t) { TYPES = t || {}; } };
})();

/* ---------- renderers: each takes parsed lines and returns HTML; missing lines are simply not drawn ---------- */
/* fields a custom pack added to a built-in window, drawn plainly: label and value, a bar for gauges, one row per list item */
HB.extraRows = function (d, fs) {
  var H = HB;
  return fs.map(function (f) {
    var v = H.one(d, f.k), lab = H.esc(f.label || f.k);
    if (!v || H.isNone(v)) return '';
    if (f.type === 'list') return '<div class="lbl">' + lab + '</div>' + H.all(d, f.k).filter(function (s) { return !H.isNone(s); }).map(function (s) { return '<div class="cw-l">' + H.esc(s) + '</div>'; }).join('');
    if (f.type === 'gauge') { var fr = H.frac(v), p = fr ? fr.p : H.pct(v); return '<div class="cw-g"><div class="cw-r"><span class="k">' + lab + '</span><span class="v">' + H.esc(v) + '</span></div>' + H.bar(Math.max(0, Math.min(100, p || 0))) + '</div>'; }
    return '<div class="cw-r"><span class="k">' + lab + '</span><span class="v">' + H.esc(v) + '</span></div>';
  }).join('');
};
HB.R.status = function (d) {
  /* "없음 / none / なし / -" means the line should not be there at all */
  var H = HB, one = function (k) { var v = H.one(d, k); return H.isNone(v) ? '' : v; }, cc = function () { return ''; }; /* changed lines are no longer highlighted */
  var name = one('name'), lv = one('lv').replace(/^\s*(lv\.?|레벨)\s*/i, '');
  /* level or rank: whichever the settings asked for */
  var rk = one('rank').replace(/^\s*(rank|랭크|ランク)\s*/i, ''), rg = H.grade(rk);
  var tail = rk ? '<span class="rk">RANK ' + (rg ? H.gchip(rg) : '<em>' + H.esc(rk) + '</em>') + '</span>' : lv ? '<span>LV.' + H.esc(lv) + '</span>' : '';
  var title = one('title').replace(/^[\[「『【〈《]|[\]」』】〉》]$/g, '');

  /* folded view: a clock on the left, gauges and money on the right; the place and effects below */
  var brief = '', clock = '';
  var tm = one('time'), dt = one('date'), wx = one('weather');
  if (tm || dt || wx) clock = '<div class="sclk">' + (tm ? '<span class="tm">' + H.esc(tm) + '</span>' : '') + (dt ? '<span class="dt">' + H.esc(dt) + '</span>' : '') +
    (wx ? '<span class="wx">' + H.ic('weather') + '<span class="tx">' + H.esc(wx) + '</span></span>' : '') + '</div>';
  /* fields a custom pack added: gauges join the folded view, the rest get an "other" tab */
  var ext = (HB.opt.ext && HB.opt.ext.status) || [];
  var gauges = [['hp', 'HP', 'hp'], ['mp', 'MP', 'mp'], ['fat', T('fat'), 'fat'], ['sta', 'STA', 'fat'], ['san', 'SAN', 'mp']]
    .concat(ext.filter(function (f) { return f.type === 'gauge'; }).map(function (f) { return [f.k, H.esc(f.label || f.k), '']; })).filter(function (x) { return one(x[0]); });
  var money = [];
  if (one('money')) money.push('<span>' + H.ic('won') + '<b>' + H.esc(one('money')) + '</b></span>');
  if (one('point')) { var pt = one('point'); if (H.isNum(pt)) pt = pt.trim() + ' P'; money.push('<span>' + H.ic('point') + '<b>' + H.esc(pt) + '</b></span>'); }
  var right = gauges.map(function (x) {
    var raw = one(x[0]), f = H.frac(raw), v, txt;
    if (f) { v = f.p; txt = H.esc(f.a) + '<span>/' + H.esc(f.b) + '</span>'; }
    else { v = H.pct(raw); txt = v == null ? H.esc(raw) : H.esc(String(raw).replace(/%/, '')) + '<span>%</span>'; if (v == null) v = 0; }
    return '<div class="gg"><div class="row"><span class="k">' + x[1] + '</span><span class="v">' + txt + '</span></div>' + H.bar(v, x[2]) + '</div>';
  }).join('') + (money.length ? '<div class="money">' + money.join('') + '</div>' : '');
  if (clock || right) brief += '<div class="top' + (clock && right ? '' : ' solo') + '">' + clock + (right ? '<div class="side">' + right + '</div>' : '') + '</div>';
  if (one('loc')) brief += '<div class="line loc">' + H.ic('pin') + '<span class="tx">' + H.esc(one('loc')) + '</span></div>';
  var fx = H.all(d, 'fx').filter(function (s) { return !H.isNone(s); });
  if (fx.length) brief += '<div class="fx">' + fx.map(function (s) {
    var neg = /^[-−]/.test(s); s = s.replace(/^[+\-−]\s*/, '');
    var m = s.match(/^(.*?)\s*[(（]([^)）]*)[)）]\s*$/);
    return '<span class="chip ' + (neg ? 'debuff' : 'buff') + '">' + H.ic(neg ? 'down' : 'up') + H.esc(m ? m[1] : s) + (m ? ' <time>' + H.esc(m[2]) + '</time>' : '') + '</span>';
  }).join('') + '</div>';

  /* unfolded: the title as a plate on top, then role / stat points, exp and the tabs */
  var body = '', role = one('role'), sp = one('sp');
  /* the equipped title is worn like a gold badge */
  if (title) body += '<div class="ttlrow"><span class="ttl">' + H.ic('medal') + '<small>' + T('title') + '</small><em>' + H.esc(title) + '</em></span></div>';
  if (role || sp) body += '<div class="prof">' + (role ? '<span class="role">' + H.esc(role) + '</span>' : '') + (sp ? '<div class="stp">' + T('sp') + '<b>' + H.esc(sp) + '</b></div>' : '') + '</div>';
  if (one('exp')) {
    var e = H.frac(one('exp')), ep = H.pct(one('exp'));
    body += '<div class="meter"><span class="k">' + (rk ? 'NEXT' : 'EXP') + '</span>' + H.bar(e ? e.p : (ep || 0)) + '<span class="v">' +
      (e ? H.esc(e.a) + '<span> / ' + H.esc(e.b) + '</span>' : ep != null ? Math.round(ep) + '<span>%</span>' : H.esc(one('exp'))) + '</span></div>';
  }
  var panes = [], st = H.all(d, 'stat');
  if (st.length) {
    panes.push(['attr', T('attr'), '', '<div class="stats">' + st.map(function (s) {
      var tk = s.split(/\s+/), g = null, n = '', hasG = false;
      if (tk.length > 1 && (H.grade(tk[tk.length - 1]) || H.isQ(tk[tk.length - 1]))) { g = H.grade(tk.pop()); hasG = true; }
      if (tk.length > 1 && /^[\d,.]+$/.test(tk[tk.length - 1])) n = tk.pop();
      return '<div class="stat"><span class="k" title="' + H.esc(tk.join(' ')) + '">' + H.esc(tk.join(' ')) + '</span>' + (n ? '<span class="n">' + H.esc(n) + '</span>' : '') + (hasG || !n ? H.gchip(g) : '') + '</div>';
    }).join('') + '</div>']);
  }
  var inv = H.all(d, 'inv');
  if (inv.length) {
    panes.push(['inv', T('inv'), inv.length, '<div class="inv">' + inv.map(function (s) {
      var f = H.fields(s), r = H.rar(f[1]), q = f[2] || '', tail;
      if (/장착|착용|equip|装備/i.test(q)) tail = '<span class="eq">' + H.esc(q) + '</span>';
      else if (/^\d+$/.test(q)) tail = '<span class="q">×' + q + '</span>';
      else tail = q ? '<span class="q">' + H.esc(q) + '</span>' : '';
      return '<div class="slot ' + r + '"><span class="ico">' + H.ic(H.itemIcon(f[0])) + '</span><span class="nm"><b title="' + H.esc(f[0]) + '">' + H.esc(f[0]) + '</b>' +
        (f[1] ? '<span>' + H.esc(f[1]) + '</span>' : '') + '</span>' + tail + '</div>';
    }).join('') + '</div>']);
  }
  var sk = H.all(d, 'skill');
  if (sk.length) {
    panes.push(['skill', T('skill'), sk.length, '<div class="skills">' + sk.map(function (s) {
      var f = H.fields(s), passive = /패시브|passive|상시|パッシブ|常時/i.test(f[2] || ''), lvT = (f[1] || '').replace(/^\s*lv\.?\s*/i, '');
      return '<div class="skill"><span class="ico">' + H.ic(H.skillIcon(f[0], passive)) + '</span><div class="tx"><div class="top"><b>' + H.esc(f[0]) + '</b>' +
        (lvT ? '<span class="lv">Lv.' + H.esc(lvT) + '</span>' : '') +
        (f[2] ? '<span class="type' + (passive ? '' : ' on') + '">' + H.esc(f[2]) + '</span>' : '') +
        (f[3] ? '<span class="cost">' + H.esc(f[3]) + '</span>' : '') + '</div>' +
        (f[4] ? '<div class="ds">' + H.fmt(f[4]) + '</div>' : '') + '</div></div>';
    }).join('') + '</div>']);
  }
  /* owned titles: the equipped one is marked */
  var tts = H.all(d, 'titles').filter(function (s) { return !H.isNone(s); }), tnorm = function (s) { return String(s).replace(/^[\[「『【〈《]|[\]」』】〉》]$/g, '').trim(); };
  if (title && !tts.some(function (s) { return tnorm(H.fields(s)[0]) === title; })) tts.unshift(title);
  if (tts.length > 1 || (tts.length && H.all(d, 'titles').length)) panes.push(['titles', T('title'), tts.length, '<div class="tlist">' + tts.map(function (s) {
    var f = H.fields(s), nm = tnorm(f[0]), on = nm === title;
    return '<div class="trow' + (on ? ' on' : '') + '">' + H.ic('medal') + '<span class="tx"><b>' + H.esc(nm) + '</b>' + (f[1] ? '<span>' + H.fmt(f[1]) + '</span>' : '') + '</span>' +
      (on ? '<span class="eq">' + T('equip') + '</span>' : '') + '</div>';
  }).join('') + '</div>']);
  /* several quests can run at once: one line each, the tab shows how many */
  var qs = H.all(d, 'quest').filter(function (s) { return !H.isNone(s); });
  if (qs.length) panes.push(['quest', T('quest'), qs.length, '<div class="qlist">' + qs.map(function (s) {
    var q = H.fields(s);
    return '<div class="qline">' + H.ic('quest') + '<b>' + H.fmt(q[0]) + '</b>' + (q[1] ? '<time>' + H.esc(q[1]) + '</time>' : '') + '</div>';
  }).join('') + '</div>']);
  var etc = H.extraRows(d, ext.filter(function (f) { return f.type !== 'gauge'; }));
  if (etc) panes.push(['etc', T('etc'), '', etc]);
  if (panes.length > 1) {
    body += '<div class="tabs" role="tablist" data-tabs>' + panes.map(function (p, i) {
      return '<button class="tab" role="tab" type="button" aria-selected="' + (i ? 'false' : 'true') + '" data-p="' + p[0] + '">' + p[1] + (p[2] !== '' ? ' <small>' + p[2] + '</small>' : '') + '</button>';
    }).join('') + '</div>';
    body += panes.map(function (p, i) { return '<div class="panel" role="tabpanel" data-panel="' + p[0] + '"' + (i ? ' hidden' : '') + '>' + p[3] + '</div>'; }).join('');
  } else if (panes.length) {
    body += '<div class="lbl">' + panes[0][1] + '</div>' + panes[0][3];
  }

  if (body) body += '<div class="st-acts">' + (HB.opt.bookOn === false ? '' : '<button class="st-book" type="button">' + T('book') + '</button>') + '<button class="st-edit" type="button">' + T('edit') + '</button></div>';
  /* header: 상태창 STATUS on the left, name and level on the right */
  var hd = '<div class="hd">' + H.ic('status') + '<span class="hd-t"><b>' + T('status') + '</b><small>Status</small></span>' +
    '<span class="hd-r">' + (name ? '<b class="nm">' + H.esc(name) + '</b>' : '') + tail + '</span></div>';
  var br = brief ? '<div class="brief">' + brief + '</div>' : '';
  var count = panes.map(function (p) { return p[1]; }).join(' · ');
  /* the toggle stays where it is; the details open below it, so the same spot closes them again */
  if (body) return '<div class="win st">' + hd + br +
    '<button class="more-t" type="button" aria-expanded="false"><span class="lab">' + T('more') + '</span>' + (count ? '<small>' + count + '</small>' : '') + H.ic('chev') + '</button>' +
    '<div class="more bd" hidden>' + body + '</div></div>';
  return '<div class="win st">' + hd + br + '</div>';
};
HB.B.status = function (root) {
  HB.tabs(root);
  root.querySelectorAll('.st-edit').forEach(function (b) { b.addEventListener('click', function () { if (HB.opt.editState) HB.opt.editState(); }); });
  root.querySelectorAll('.st-book').forEach(function (b) { b.addEventListener('click', function () { if (HB.opt.openBook) HB.opt.openBook(); }); });
  root.querySelectorAll('.st .more-t').forEach(function (btn) {
    var more = btn.parentNode.querySelector('.more'), lab = btn.querySelector('.lab'), cnt = btn.querySelector('small');
    btn.addEventListener('click', function () {
      var open = more.hidden;
      more.hidden = !open;
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      lab.textContent = open ? T('less') : T('more');
      if (cnt) cnt.hidden = open;
    });
  });
};

HB.R.system = function (d) {
  var H = HB, type = (H.one(d, 'type') || 'notice').toLowerCase();
  var texts = d.text || [], sub = H.one(d, 'sub'), tag = H.one(d, 'tag');
  var main = texts.map(H.fmt).join('<br>');
  if (/talk|대화|answer/.test(type)) {
    return '<div class="win talk"><span class="who">' + H.ic('sys') + '</span><div class="body"><span class="nm">' + H.esc(tag || 'SYSTEM') + '</span>' +
      texts.map(function (t) { return '<p>' + H.fmt(t) + '</p>'; }).join('') + (sub ? '<p class="sub caret">' + H.fmt(sub) + '</p>' : '') + '</div></div>';
  }
  if (/warn|경고|danger/.test(type)) {
    return '<div class="win sys warn"><span class="tag">' + H.esc(tag || 'WARNING') + '</span><div class="msg">' + main + '</div>' + (sub ? '<div class="sub">' + H.fmt(sub) + '</div>' : '') + '</div>';
  }
  if (/err|오류|에러|glitch/.test(type)) {
    var logs = (d.log || []).map(function (l) {
      var f = H.fields(l), s = f[1] || '';
      return '<li><span>&gt; ' + H.esc(f[0]) + '</span>' + (s ? '<span class="s' + (/^(ok|성공|정상|pass)/i.test(s) ? ' ok' : '') + '">' + H.esc(s) + '</span>' : '') + '</li>';
    }).join('');
    var plain = texts.join(' ').replace(/█+/g, '      ');
    return '<div class="win err"><span class="fxl"><span class="noise"></span><span class="band"></span><span class="tear"></span></span><span class="slice"></span><span class="slice"></span><span class="slice"></span>' +
      '<div class="gx-hd">' + H.ic('glitch') + '<span>' + H.esc(tag || 'SYS.KERNEL // ERR') + '</span><span class="r">!! ERROR</span></div>' +
      '<div class="gx-bd"><span class="gx" data-t="' + H.esc(plain) + '">' + main + '</span>' + (sub ? '<span class="gx-sub">' + H.fmt(sub) + '</span>' : '') +
      (logs ? '<ul class="gx-log">' + logs + '</ul>' : '') + '</div></div>';
  }
  if (/level|lv|레벨/.test(type)) {
    var from = texts[0] || '', m = from.match(/(.*?)(?:→|->|>)\s*(.*)/);
    var line = m ? H.esc(m[1].trim()) + ' → <b>' + H.esc(m[2].trim()) + '</b>' : H.fmt(from);
    var isRank = /rank|랭크|ランク/i.test(from) || !!(m && H.grade(m[1].replace(/^\s*(rank|랭크|ランク)\s*/i, '')) && H.grade(m[2]));
    return '<div class="win lvup"><span class="ring"></span><span class="ring r2"></span><span class="big">' + H.esc(tag || (isRank ? 'RANK UP' : 'LEVEL UP')) + '</span>' +
      (from ? '<span class="from">' + line + '</span>' : '') + (sub ? '<span class="sub">' + H.fmt(sub) + '</span>' : '') + '</div>';
  }
  return '<div class="win sys"><span class="tag">' + H.esc(tag || 'SYSTEM') + '</span><div class="msg">' + main + '</div>' + (sub ? '<div class="sub">' + H.fmt(sub) + '</div>' : '') + '</div>';
};
/* error window: letters jump and the panel tears in thin slices; the text itself never disappears */
HB.B.system = function (root) {
  if (HB.reduce) return;
  root.querySelectorAll('.win.err').forEach(function (win) {
    var gx = win.querySelector('.gx'), sub = win.querySelector('.gx-sub'), slices = win.querySelectorAll('.slice');
    if (!gx) return;
    (function wrap(node) {
      Array.prototype.slice.call(node.childNodes).forEach(function (n) {
        if (n.nodeType === 3) {
          var frag = D.createDocumentFragment();
          n.textContent.split('').forEach(function (c) {
            if (/\s/.test(c)) { frag.appendChild(D.createTextNode(c)); return; }
            var sp = D.createElement('span'); sp.className = 'ch'; sp.textContent = c; frag.appendChild(sp);
          });
          n.parentNode.replaceChild(frag, n);
        } else if (n.nodeType === 1 && !n.classList.contains('redact')) wrap(n);
      });
    })(gx);
    var chars = gx.querySelectorAll('.ch'), cols = ['#ff86b0', '#45d3ee', '#ffffff', '#ad92ff'];
    function rnd(a, b) { return a + Math.random() * (b - a); }
    function frame() {
      chars.forEach(function (c) { c.classList.remove('j'); });
      for (var k = 0, n = Math.ceil(rnd(2, 6)); k < n && chars.length; k++) {
        var c = chars[Math.floor(Math.random() * chars.length)];
        c.style.setProperty('--x', rnd(-4, 4).toFixed(1) + 'px');
        c.style.setProperty('--y', rnd(-3, 3).toFixed(1) + 'px');
        c.style.setProperty('--jc', cols[Math.floor(Math.random() * cols.length)]);
        c.classList.add('j');
      }
      var h = win.offsetHeight;
      slices.forEach(function (sl) {
        var hh = rnd(3, 16);
        sl.style.top = rnd(0, Math.max(0, h - hh)).toFixed(0) + 'px';
        sl.style.height = hh.toFixed(0) + 'px';
        sl.style.transform = 'translateX(' + rnd(-9, 9).toFixed(1) + 'px)';
      });
      gx.style.setProperty('--sx', rnd(-5, 5).toFixed(1) + 'px');
      gx.style.setProperty('--sk', rnd(-10, 10).toFixed(1) + 'deg');
      gx.classList.toggle('shift', Math.random() < 0.6);
      if (sub) { sub.style.setProperty('--sx', rnd(-4, 4).toFixed(1) + 'px'); sub.classList.toggle('shift', Math.random() < 0.4); }
    }
    function burst() {
      if (!win.isConnected || HB.dead) return;
      win.classList.add('burst');
      var i = 0, n = Math.ceil(rnd(2, 5));
      (function step() {
        frame();
        if (++i < n) setTimeout(step, rnd(45, 90));
        else setTimeout(function () {
          win.classList.remove('burst'); gx.classList.remove('shift'); if (sub) sub.classList.remove('shift');
          chars.forEach(function (c) { c.classList.remove('j'); });
        }, rnd(50, 90));
      })();
      setTimeout(burst, rnd(900, 2800));
    }
    setTimeout(burst, 1200);
  });
};

HB.R.noti = function (d) {
  var H = HB, K = {
    exp: ['exp', 'spark'], skill: ['skill', 'book'], title: ['title', 'medal'], item: ['item', 'bag'], aff: ['aff', 'link'],
    stat: ['stat', 'up'], quest: ['quest', 'quest'], money: ['item', 'won'], point: ['title', 'point'], lv: ['exp', 'spark']
  };
  return '<div class="toast">' + d._l.map(function (x, i) {
    var k = K[x[0]] || ['', 'sys'], f = H.fields(x[1]), val = f[1] || '';
    var neg = /^[-−]/.test(val) || /^[-−]/.test(f[0]);
    if (!val && (x[0] === 'skill' || x[0] === 'title' || x[0] === 'item')) val = 'NEW';
    /* a note after the change ("+10 (why)") goes on its own line under the name, so the name keeps its width */
    var nm = val.match(/^(.*?)\s*[(（]([^()（）]+)[)）]\s*$/), note = '';
    if (nm && nm[1]) { val = nm[1]; note = nm[2]; }
    /* "nt-" prefix: plain .aff / .item / .skill / .stat belong to other windows' layouts */
    return '<div class="t' + (k[0] ? ' nt-' + k[0] : '') + (neg ? ' nt-neg' : '') + '" style="--td:' + (i * 0.12).toFixed(2) + 's">' + H.ic(neg && x[0] === 'stat' ? 'down' : k[1]) +
      '<b>' + H.fmt(f[0]) + '</b>' + (val ? '<span class="d">' + H.esc(val) + '</span>' : '') + (note ? '<span class="nt-note">' + H.esc(note) + '</span>' : '') + '</div>';
  }).join('') + '</div>';
};

HB.R.quest = function (d) {
  var H = HB, one = function (k) { return H.one(d, k); };
  var title = one('title'), state = one('state').toLowerCase();
  var isClear = /clear|완료|성공|success|done|クリア|成功/.test(state), isFail = /fail|실패|失敗/.test(state), isActive = /active|진행|ongoing|進行/.test(state);
  if (isClear || isFail) {
    var g = H.grade(one('grade')), got = H.all(d, isClear ? 'reward' : 'penalty');
    return '<div class="win ' + (isClear ? 'clear' : 'fail') + '"><div class="res-hd"><span class="big">' + (isClear ? 'QUEST CLEAR' : 'QUEST FAILED') + '</span>' +
      '<span class="q">' + H.fmt(title) + (g ? ' · ' + T('grade') + ' ' + H.gchip(g) : '') + '</span></div>' +
      (got.length ? '<div class="bd"><div class="got">' + got.map(function (s, i) { return '<div style="--td:' + (i * 0.1).toFixed(2) + 's">' + H.fmt(s) + '</div>'; }).join('') + '</div></div>' : '<div style="height:14px"></div>') +
      '</div>';
  }
  var type = one('type'), tc = '';
  if (/긴급|urgent|emergency|돌발|緊急/i.test(type)) tc = ' urgent';
  else if (/히든|hidden|secret|비밀|隠し/i.test(type)) tc = ' hidden';
  else if (/메인|main|story|メイン/i.test(type)) tc = ' main';
  var right = (type ? '<span class="qtype' + tc + '">' + H.esc(type) + '</span>' : '') + (isActive ? '<span class="qtype state">' + T('active') + '</span>' : '');
  var b = '';
  if (title) b += '<div class="qtitle">' + H.fmt(title) + '</div>';
  if (one('desc')) b += '<p class="qdesc">' + H.fmt(one('desc')) + '</p>';
  if (one('time')) {
    var t = H.fields(one('time')), p = H.pct(t[1]);
    var lvl = p == null ? (tc === ' urgent' ? 'low' : 'ok') : p <= 20 ? 'low' : p <= 50 ? 'mid' : 'ok';
    b += '<div class="timer t-' + lvl + (p == null ? ' solo' : '') + '">' + H.ic('timer') + '<div class="row"><span class="k">' + T('left') + '</span><span class="clock">' +
      H.esc(t[0]).replace(/:/g, '<span class="c">:</span>') + '</span></div>' + (p == null ? '' : H.bar(p, lvl === 'low' ? 'red' : lvl === 'mid' ? 'fat' : '')) + '</div>';
  }
  var goals = H.all(d, 'goal');
  if (goals.length) {
    b += '<ul class="obj">' + goals.map(function (s) {
      var m = s.match(/^(.*?)\s*[(（]?\s*(\d+)\s*\/\s*(\d+)\s*[)）]?\s*$/), done = false, name = s, cnt = '';
      if (m) { name = m[1]; cnt = m[2] + '/' + m[3]; done = +m[2] >= +m[3]; }
      return '<li' + (done ? ' class="done"' : '') + '><span class="box">' + (done ? H.ic('check') : '') + '</span><span class="t1">' + H.fmt(name) + '</span><span class="cnt">' + cnt + '</span></li>';
    }).join('') + '</ul>';
  }
  var rw = H.all(d, 'reward'), pn = H.all(d, 'penalty'), boxes = '';
  if (rw.length) boxes += '<div class="rw"><span class="h">' + H.ic('gift') + T('reward') + '</span><ul>' + rw.map(function (s) { return '<li><span>' + H.fmt(s) + '</span></li>'; }).join('') + '</ul></div>';
  if (pn.length) boxes += '<div class="pn"><span class="h">' + H.ic('penalty') + T('penalty') + '</span><ul>' + pn.map(function (s) { return '<li><span>' + H.fmt(s) + '</span></li>'; }).join('') + '</ul></div>';
  if (boxes) b += '<div class="rp">' + boxes + '</div>';
  if (!isActive && H.opt.questBtn !== 'off') b += '<div class="act" data-qact><button class="btn no" type="button" data-q="0">' + T('no') + '</button><button class="btn pri" type="button" data-q="1">' + T('yes') + '</button></div>';
  return '<div class="win" data-quest="' + H.esc(title) + '"><div class="hd">' + H.ic('quest') + '<span class="hd-t"><b>' + T('quest') + '</b><small>Quest</small></span><span class="hd-r">' + right + '</span></div>' +
    '<div class="bd">' + b + '</div></div>';
};
HB.B.quest = function (root) {
  var H = HB;
  root.querySelectorAll('[data-quest]').forEach(function (win) {
    var act = win.querySelector('[data-qact]'); if (!act) return;
    var title = win.getAttribute('data-quest'), orig = act.innerHTML;
    function bind() {
      act.querySelectorAll('[data-q]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var ok = btn.getAttribute('data-q') === '1';
          var line = T(ok ? 'accLine' : 'rejLine').replace('{q}', title || T('quest'));
          var res = H.toST(line, H.opt.questBtn === 'send');
          win.classList.add(ok ? 'q-acc' : 'q-rej');
          act.innerHTML = '<span class="result ' + (ok ? 'ok' : 'no') + '">' + H.ic(ok ? 'check' : 'x') + T(ok ? 'acc' : 'rej') +
            (res ? '<small>' + T(res) + '</small>' : '') + '</span>' + (res === 'sent' ? '' : '<button class="undo" type="button">' + T('redo') + '</button>');
          var u = act.querySelector('.undo');
          if (u) u.addEventListener('click', function () {
            if (res) H.unST(line);
            win.classList.remove('q-acc', 'q-rej'); act.innerHTML = orig; bind();
          });
        });
      });
    }
    bind();
  });
};

HB.R.profile = function (d) {
  var H = HB, one = function (k) { return H.one(d, k); };
  /* the scan % is no longer shown (older messages may still carry the line) */
  var lockTxt = one('lock') || T('lock'), right = '';
  var g = H.grade(one('rank')), rank;
  var hex = '<svg class="hex" viewBox="0 0 72 72" aria-hidden="true"><path class="o" d="M36 3l29 16.5v33L36 69 7 52.5v-33z"/><path class="n" d="M36 10l23 13v26L36 62 13 49V23z"/></svg>';
  if (g) rank = '<div class="rank" style="--gc:var(--' + g.c + ')">' + hex + '<b' + (g.t.length > 2 ? ' class="ss"' : '') + '>' + g.t + '</b><small>RANK</small></div>';
  else if (one('rank')) rank = '<div class="rank unk">' + hex + H.ic('lock') + '<small>RANK</small></div>';
  else rank = '';
  var tags = H.all(d, 'tag');
  var b = '<div class="ch-top' + (rank ? '' : ' norank') + '">' + rank + '<div class="ch-id"><div class="name">' + H.q3(one('name') || '???') + '</div>' +
    (one('info') ? '<div class="meta">' + H.q3(one('info')) + '</div>' : '') +
    (tags.length ? '<div class="fx">' + tags.map(function (t) {
      var alert = /^!/.test(t); t = t.replace(/^!\s*/, '');
      return '<span class="chip ' + (alert ? 'alert' : 'tr') + '">' + (alert ? H.ic('warn') : '') + H.q3(t) + '</span>';
    }).join('') + '</div>' : '') + '</div></div>';
  var st = H.all(d, 'stat');
  if (st.length) {
    b += '<div class="lbl">Attributes</div><div class="slist">' + st.map(function (s) {
      var uq = /^[*＊]/.test(s); s = s.replace(/^[*＊]\s*/, '');
      var tk = s.split(/\s+/), num = null, gr = null, locked = false;
      if (tk.length > 1 && /^\d+$/.test(tk[tk.length - 1])) num = +tk.pop();
      var last = tk.length > 1 ? tk[tk.length - 1] : '';
      if (H.isQ(last)) { locked = true; tk.pop(); }
      else if (H.grade(last)) { gr = H.grade(tk.pop()); }
      else if (num == null) locked = true;
      var v = num != null ? Math.max(0, Math.min(100, num)) : gr ? gr.v : 0;
      return '<div class="srow' + (locked ? ' locked' : '') + (uq ? ' uq' : '') + '"><span class="k">' + H.esc(tk.join(' ')) + (uq ? H.ic('spark') : '') + '</span>' +
        (locked ? '<div class="bar lockbar"><i></i></div>' : H.bar(v, uq ? 'uniq' : '')) + (gr || locked ? H.gchip(locked ? null : gr) : '<span class="g g-x">' + num + '</span>') + '</div>';
    }).join('') + '</div>';
  }
  if (one('aff')) {
    var a = H.fields(one('aff'));
    if (H.isQ(a[0])) {
      b += '<div class="aff lockbox">' + H.ic('link', 'veil') + '<div class="k veil"><span>' + T('aff') + '<b>-----</b></span>' + H.bar(30, 'love') + '</div><span class="v veil">00<small> /100</small></span>' +
        '<div class="lk-ov">' + H.ic('lock') + '<span>' + T('affLock') + '</span></div></div>';
    } else {
      b += '<div class="aff">' + H.ic('link') + '<div class="k"><span>' + T('aff') + (a[1] ? '<b>' + H.esc(a[1]) + '</b>' : '') + '</span>' + H.bar(H.pct(a[0]) || 0, 'love') + '</div><span class="v">' + H.esc(a[0]) + '<small> /100</small></span></div>';
    }
  }
  if (one('mind')) {
    if (H.isQ(one('mind'))) {
      b += '<div class="thought lockbox">' + H.ic('mind', 'veil') + '<span class="veil">' + T('veil') + '</span><div class="lk-ov">' + H.ic('lock') + '<span>' + H.fmt(lockTxt) + '</span></div></div>';
    } else {
      b += '<div class="thought">' + H.ic('mind') + '<span class="tw">' + H.esc(one('mind')) + '</span></div>';
    }
  }
  b += H.extraRows(d, (HB.opt.ext && HB.opt.ext.profile) || []);
  return '<div class="win"><div class="hd">' + H.ic('scan') + '<span class="hd-t"><b>' + T('profile') + '</b><small>Profile</small></span><span class="hd-r">' + right + '</span></div><div class="bd">' + b + '</div></div>';
};
HB.B.profile = function (root, quiet) {
  if (quiet || HB.reduce) return;
  root.querySelectorAll('.thought:not(.lockbox) .tw').forEach(function (el) {
    var full = el.textContent;
    el.style.minHeight = el.offsetHeight + 'px';
    el.textContent = ''; el.classList.add('typing');
    var i = 0;
    setTimeout(function step() {
      if (!el.isConnected) return;
      el.textContent = full.slice(0, ++i);
      if (i < full.length) setTimeout(step, 36 + Math.random() * 40);
      else setTimeout(function () { el.classList.remove('typing'); }, 1200);
    }, 900);
  });
};

HB.R.shop = function (d) {
  var H = HB, one = function (k) { return H.one(d, k); };
  var pt = one('point'); if (pt && H.isNum(pt)) pt = pt.trim() + ' P';
  var right = pt ? '<svg class="i" viewBox="0 0 24 24" style="width:14px;height:14px;color:var(--amber)">' + ICON.point + '</svg><span style="color:var(--txt);font-weight:600">' + H.esc(pt) + '</span>' : '';
  var items = H.all(d, 'item'), b = '';
  if (items.length) {
    b += '<div class="items">' + items.map(function (s, i) {
      var f = H.fields(s), lock = /^!/.test(f[0]), name = f[0].replace(/^!\s*/, ''), r = H.rar(f[1]), price = f[2] || '', note = f[4] || '';
      return '<div class="item ' + r + (lock ? ' lock' : '') + '" style="--td:' + (i * 0.08).toFixed(2) + 's"><span class="ico">' + H.ic(H.itemIcon(name)) + '</span>' +
        '<div class="it"><span class="nm"><b>' + H.esc(name) + '</b>' + (f[1] ? '<span class="rar ' + r + '">' + H.esc(f[1]) + '</span>' : '') + '</span>' +
        (f[3] ? '<span class="ds">' + H.fmt(f[3]) + '</span>' : '') + '</div>' +
        '<div class="price">' + (price ? '<b>' + (H.isNum(price) ? H.esc(price.trim()) + '<small>P</small>' : H.esc(price)) + '</b>' : '') + (note ? '<span>' + (lock ? H.ic('lock') : '') + H.esc(note) + '</span>' : '') + '</div></div>';
    }).join('') + '</div>';
  }
  if (one('refresh')) b += '<div class="hint">' + T('refresh') + ' <b>' + H.esc(one('refresh')) + '</b></div>';
  return '<div class="win"><div class="hd">' + H.ic('shop') + '<span class="hd-t"><b>' + T('shop') + '</b><small>Shop</small></span><span class="hd-r">' + right + '</span></div><div class="bd">' + b + '</div></div>';
};

HB.R.pending = function () {
  return '<div class="win pend"><span class="dots"><i></i><i></i><i></i></span><span>' + T('pending') + '</span></div>';
};

/* ---------- tiny zip reader/writer (no dependencies) ---------- */
var ZIP = (function () {
  var crcT = null;
  function crc32(u8) {
    if (!crcT) { crcT = []; for (var n = 0; n < 256; n++) { var c = n; for (var k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; crcT[n] = c >>> 0; } }
    var crc = 0xFFFFFFFF;
    for (var i = 0; i < u8.length; i++) crc = crcT[(crc ^ u8[i]) & 0xFF] ^ (crc >>> 8);
    return (crc ^ 0xFFFFFFFF) >>> 0;
  }
  function inflate(u8) {
    var DS = P.DecompressionStream || window.DecompressionStream;
    if (!DS) return Promise.reject(new Error('이 브라우저는 압축 해제를 지원하지 않습니다.'));
    var ds = new DS('deflate-raw'), w = ds.writable.getWriter();
    w.write(u8); w.close();
    return new Response(ds.readable).arrayBuffer().then(function (b) { return new Uint8Array(b); });
  }
  /* returns { 'path/name': Uint8Array } */
  function read(buf) {
    var u8 = new Uint8Array(buf), dv = new DataView(u8.buffer, u8.byteOffset, u8.byteLength), eo = -1;
    for (var i = u8.length - 22; i >= 0 && i > u8.length - 66000; i--) if (dv.getUint32(i, true) === 0x06054b50) { eo = i; break; }
    if (eo < 0) return Promise.reject(new Error('zip 파일이 아닙니다.'));
    var count = dv.getUint16(eo + 10, true), off = dv.getUint32(eo + 16, true), jobs = [], out = {}, dec = new TextDecoder('utf-8');
    for (var n = 0; n < count; n++) {
      if (dv.getUint32(off, true) !== 0x02014b50) break;
      var method = dv.getUint16(off + 10, true), csize = dv.getUint32(off + 20, true), nl = dv.getUint16(off + 28, true),
        el = dv.getUint16(off + 30, true), cl = dv.getUint16(off + 32, true), lo = dv.getUint32(off + 42, true);
      var name = dec.decode(u8.subarray(off + 46, off + 46 + nl));
      var start = lo + 30 + dv.getUint16(lo + 26, true) + dv.getUint16(lo + 28, true);
      var data = u8.subarray(start, start + csize);
      (function (name, method, data) {
        if (/\/$/.test(name)) return;
        if (method === 0) out[name] = data;
        else if (method === 8) jobs.push(inflate(data).then(function (r) { out[name] = r; }));
      })(name, method, data);
      off += 46 + nl + el + cl;
    }
    return Promise.all(jobs).then(function () { return out; });
  }
  /* files: { name: string | Uint8Array } -> Blob (stored, no compression) */
  function write(files) {
    var enc = new TextEncoder(), parts = [], central = [], off = 0, names = Object.keys(files);
    names.forEach(function (name) {
      var data = typeof files[name] === 'string' ? enc.encode(files[name]) : files[name], nb = enc.encode(name), crc = crc32(data);
      var lh = new DataView(new ArrayBuffer(30));
      lh.setUint32(0, 0x04034b50, true); lh.setUint16(4, 20, true); lh.setUint16(6, 0x0800, true); lh.setUint16(8, 0, true);
      lh.setUint32(14, crc, true); lh.setUint32(18, data.length, true); lh.setUint32(22, data.length, true); lh.setUint16(26, nb.length, true);
      parts.push(new Uint8Array(lh.buffer), nb, data);
      var ch = new DataView(new ArrayBuffer(46));
      ch.setUint32(0, 0x02014b50, true); ch.setUint16(4, 20, true); ch.setUint16(6, 20, true); ch.setUint16(8, 0x0800, true);
      ch.setUint32(16, crc, true); ch.setUint32(20, data.length, true); ch.setUint32(24, data.length, true); ch.setUint16(28, nb.length, true); ch.setUint32(42, off, true);
      central.push(new Uint8Array(ch.buffer), nb);
      off += 30 + nb.length + data.length;
    });
    var csize = central.reduce(function (a, b) { return a + b.length; }, 0), end = new DataView(new ArrayBuffer(22));
    end.setUint32(0, 0x06054b50, true); end.setUint16(8, names.length, true); end.setUint16(10, names.length, true);
    end.setUint32(12, csize, true); end.setUint32(16, off, true);
    return new Blob(parts.concat(central, [new Uint8Array(end.buffer)]), { type: 'application/zip' });
  }
  return { read: read, write: write, text: function (u8) { return new TextDecoder('utf-8').decode(u8); } };
})();

/* ---------- settings store ---------- */
var KEY = 'hb_system_window', PROMPT_ID = 'HB_SYSTEM_WINDOW', KINDS = ['status', 'system', 'noti', 'quest', 'profile', 'shop'];
var DEF = {
  lang: 'ko', persona: 'neutral', personaCustom: '', world: '', theme: 'holo-blue',
  status: { on: true, freq: 'always', grow: 'lv', stats: '근력, 민첩, 체력, 지능, 감각, 행운',
    fields: { date: 1, time: 1, loc: 1, weather: 0, name: 1, lv: 1, role: 0, title: 0, exp: 0, hp: 1, mp: 1, fat: 0, fx: 1, quest: 0, money: 1, point: 0, sp: 0, stat: 0, inv: 0, skill: 0 } },
  system: { on: true }, noti: { on: true },
  quest: { on: true, btn: 'input' },
  profile: { on: true, stats: '근력, 민첩, 지능, 매력', uniq: 1, aff: 1, mind: 1 },
  shop: { on: false },
  adv: { depth: 1, role: 0, cleanup: 1, strip: 1, checkProfile: '' }
};
var ctx = null, S = null, CF = null, LINK = { src: 'none', ck: null };
function clone(o) { return JSON.parse(JSON.stringify(o)); }
function merge(def, src) {
  var out = Array.isArray(def) ? [] : {};
  Object.keys(def).forEach(function (k) {
    var dv = def[k], sv = src ? src[k] : undefined;
    if (dv && typeof dv === 'object') out[k] = merge(dv, sv && typeof sv === 'object' ? sv : {});
    else out[k] = sv === undefined || typeof sv !== typeof dv ? dv : sv;
  });
  return out;
}
function loadStore() {
  var es = ctx.extensionSettings || (ctx.extensionSettings = {});
  var s = es[KEY]; if (!s || typeof s !== 'object') s = es[KEY] = {};
  s.cfg = merge(DEF, s.cfg || {});
  /* this device's own choices, the same in every chat (paths starting with "@" in the settings window) */
  var prev = s.ui && s.ui.prev;
  s.ui = merge({ book: 1, bookAt: 'wand' }, s.ui || {});
  s.ui.prev = prev && typeof prev === 'object' ? prev : {};   /* preview code the user edited, by window kind */
  s.presets = s.presets || {}; s.themes = s.themes || {};
  Object.keys(s.themes).forEach(function (id) { if (s.themes[id] && s.themes[id].pack) normPack(s.themes[id]); });
 s.chars = s.chars || {}; s.worlds = s.worlds || {};
  S = s;
}
function save() { try { ctx.saveSettingsDebounced(); } catch (e) {} }

/* ---------- where the settings live: this chat, this character, or nowhere (off) ----------
   chat metadata  { on: true, cfg }  -> this chat only
                  { on: false }      -> off in this chat even if the character is linked
   S.chars[key]   { cfg }            -> every chat of this character (or group)
   S.cfg          template copied into a new link; edited while the chat is not linked */
function C() { try { return P.SillyTavern.getContext(); } catch (e) { return ctx; } }
function charKey(c) {
  c = c || C();
  if (c.groupId != null && c.groupId !== '') return 'group:' + c.groupId;
  var ch = c.characters && c.characterId != null ? c.characters[c.characterId] : null;
  return ch && ch.avatar ? 'char:' + ch.avatar : null;
}
function charName(c) {
  c = c || C();
  if (c.groupId != null && c.groupId !== '') { var g = (c.groups || []).filter(function (x) { return String(x.id) === String(c.groupId); })[0]; return g ? g.name : '그룹'; }
  var ch = c.characters && c.characterId != null ? c.characters[c.characterId] : null;
  return ch ? ch.name : '';
}
function chatMeta(c) { c = c || C(); var m = c.chatMetadata; return m && typeof m === 'object' ? m[KEY] : null; }
function hasChat(c) { c = c || C(); return !!(c.chatId || (c.getCurrentChatId && c.getCurrentChatId())); }
function resolve() {
  var c = C(), cm = chatMeta(c), ck = charKey(c);
  if (cm && cm.on === true) { cm.cfg = merge(DEF, cm.cfg || {}); LINK = { src: 'chat', ck: ck }; CF = cm.cfg; }
  else if (cm && cm.on === false) { LINK = { src: 'off', ck: ck, charLinked: !!(ck && S.chars[ck]) }; CF = ck && S.chars[ck] ? (S.chars[ck].cfg = merge(DEF, S.chars[ck].cfg)) : S.cfg; }
  else if (ck && S.chars[ck]) { S.chars[ck].cfg = merge(DEF, S.chars[ck].cfg || {}); LINK = { src: 'char', ck: ck }; CF = S.chars[ck].cfg; }
  else { LINK = { src: 'none', ck: ck }; CF = S.cfg; }
  LINK.active = LINK.src === 'chat' || LINK.src === 'char';
  EF = effective(CF); updateTrack(EF);
  return LINK;
}
function saveMeta() { var c = C(); try { (c.saveMetadataDebounced || c.saveMetadata).call(c); } catch (e) { console.warn('[HB] 채팅 저장 실패', e); } }
/* save wherever the current settings live */
function persist() { save(); if (LINK.src === 'chat') saveMeta(); }
/* replace the current settings object in place of its home */
function setCur(cfg) {
  cfg = merge(DEF, cfg);
  var c = C(), cm = chatMeta(c);
  if (LINK.src === 'chat' && cm) cm.cfg = cfg;
  else if ((LINK.src === 'char' || LINK.src === 'off') && LINK.ck && S.chars[LINK.ck]) S.chars[LINK.ck].cfg = cfg;
  else S.cfg = cfg;
  resolve();
}
function setLink(mode) {
  var c = C(), ck = charKey(c), m = c.chatMetadata;
  if (!m || !hasChat(c)) { toast('채팅을 먼저 여세요.', 'warning'); return; }
  var seed = clone(CF);
  if (mode === 'chat') m[KEY] = { on: true, cfg: seed };
  else if (mode === 'char') {
    if (!ck) { toast('캐릭터 채팅에서만 연결할 수 있습니다.', 'warning'); return; }
    if (!S.chars[ck]) S.chars[ck] = { cfg: seed };
    delete m[KEY];
  } else {
    if (ck && S.chars[ck]) m[KEY] = { on: false };
    else delete m[KEY];
  }
  save(); saveMeta(); resolve();
}
function unlinkChar() {
  var c = C(), ck = charKey(c); if (!ck || !S.chars[ck]) return;
  var cm = chatMeta(c);
  delete S.chars[ck];
  if (cm && cm.on === false) delete c.chatMetadata[KEY];
  save(); saveMeta(); resolve();
}
function toast(msg, type) { try { (P.toastr || window.toastr)[type || 'info'](msg, '시스템 상태창'); } catch (e) { console.log('[HB]', msg); } }
function names(s) { return String(s || '').split(/[,，、\n]/).map(trimS).filter(Boolean); }

/* ---------- prompt ---------- */
var PERSONA = {
  neutral: ['사무적', '감정 없이 정보만 전하는 게임 UI', 'impersonal and terse, like a game interface; states facts only'],
  kind: ['친절한 안내자', '응원하고 힌트를 주는 가이드', 'a warm, encouraging guide that cheers {{user}} on and offers hints'],
  playful: ['장난꾸러기', '놀리고 농담하는 말투', "mischievous and teasing; jokes at {{user}}'s expense and enjoys the reactions"],
  cynical: ['냉소적', '시큰둥하고 비꼬는 태도', 'dry and sarcastic; unimpressed by {{user}} and grudging with praise'],
  ominous: ['불길한', '속을 알 수 없는 수상한 존재', 'cold and cryptic; hints at a hidden agenda of its own, with occasional errors and redacted words'],
  custom: ['직접 입력', '원하는 성격을 직접 적습니다', '']
};
var WORDS = {
  ko: { lang: 'Korean', rar: '일반/희귀/영웅/전설', qtype: '일반/긴급/히든/일일/메인', equip: '장착' },
  en: { lang: 'English', rar: 'common/rare/epic/legendary', qtype: 'normal/urgent/hidden/daily/main', equip: 'equipped' },
  ja: { lang: 'Japanese', rar: 'コモン/レア/エピック/レジェンド', qtype: '通常/緊急/隠し/デイリー/メイン', equip: '装備' },
  auto: { lang: "the story's language", rar: 'common/rare/epic/legendary (translated)', qtype: 'normal/urgent/hidden/daily/main (translated)', equip: 'equipped' }
};
/* settings name -> the state keys it tracks */
function statusKeys(c) {
  var f = c.status.fields, rank = c.status.grow === 'rank', keys = [];
  Object.keys(DEF.status.fields).forEach(function (k) {
    if (!f[k]) return;
    if (k === 'lv') keys.push(rank ? 'rank' : 'lv'); else if (k === 'title') keys.push('title', 'titles'); else keys.push(k);
  });
  extras(c, 'status').forEach(function (x) { if (keys.indexOf(x.k) < 0) keys.push(x.k); });
  return keys;
}
/* the status section. Until a status exists the AI writes the whole block once; after that it writes only what
   changed and the extension keeps the totals, which are handed back under [Current Status]. st = tracked state */
function statusPrompt(c, W, st) {
  var f = c.status.fields, rank = c.status.grow === 'rank', keys = statusKeys(c);
  if (!keys.length) return '';
  st = st || {};
  var stats = (names(c.status.stats).length ? names(c.status.stats) : ['STR']).map(function (n) { return n + ' n G'; }).join('; ');
  var FULL = { date: 'date: YYYY.MM.DD (weekday)', time: 'time: HH:MM', loc: 'loc: place', weather: 'weather: sky, temperature', name: 'name: {{user}}', lv: 'lv: level', rank: 'rank: grade',
    role: 'role: job or social position', title: 'title: equipped title', titles: 'titles: owned title|effect; ...', exp: rank ? 'exp: % toward the next rank' : 'exp: cur/max',
    hp: 'hp: cur/max', mp: 'mp: cur/max', fat: 'fat: fatigue 0-100', fx: 'fx: +buff (time left); -debuff (time left)', quest: 'quest: active quest|time left; ...',
    money: 'money: cash with unit', point: 'point: System points', sp: 'sp: unspent stat points', stat: 'stat: ' + stats,
    inv: 'inv: item|rarity|qty or ' + W.equip + '; ...', skill: 'skill: name|level|active or passive|cost or cooldown|effect; ...' };
  /* things that may honestly be empty are never asked for again */
  var OPTIONAL = { role: 1, title: 1, titles: 1, fx: 1, quest: 1, inv: 1, skill: 1 };
  /* fields a custom pack added: described by their maker; text and lists may be empty */
  var ext = extras(c, 'status');
  ext.forEach(function (x) { FULL[x.k] = fieldLine(x); if (x.type === 'text' || x.type === 'list') OPTIONAL[x.k] = 1; });
  var tail = [];
  if (f.stat) tail.push('n = value, G = grade.');
  if (f.inv) tail.push('inv: carried or wielded items only, no clothing. Rarity: ' + W.rar + '.');
  var ownWhen = c.pack && trimS(c.pack.win.status.when);
  var mid = ownWhen || ['date', 'time', 'loc', 'weather'].some(function (k) { return f[k]; }) ? whenOf(c, 'status') + '.' : '';
  if (keys.every(function (k) { return !(k in st); })) {
    return '[Status Window]\nNo status exists yet. Open this reply with the full block, before anything else (omit lines that don\'t apply):\n<status>\n' +
      keys.map(function (k) { return FULL[k]; }).join('\n') + '\n</status>' + (tail.length ? '\n' + tail.join(' ') : '');
  }
  var ex = [];
  if (f.time) ex.push('time: HH:MM');
  if (f.hp) ex.push('hp: -12');
  if (f.money) ex.push('money: +500');
  if (!ex.length) ex.push(keys[0] + ': new value');
  var how = [], plain = ['date', 'time', 'loc', 'weather', 'name', 'role', 'title'].filter(function (k) { return f[k]; });
  var gauges = ['hp', 'mp'].filter(function (k) { return f[k]; }), counts = ['money', 'point', 'sp'].filter(function (k) { return f[k]; });
  if (plain.length) how.push(plain.join(', ') + ': new value, same form as in [Current Status]');
  if (f.lv) how.push(rank ? 'rank: new grade' + (f.exp ? ', with exp: 0%' : '') : 'lv: +1 on level-up' + (f.exp ? ', with exp: cur/max for the new level' : ''));
  if (gauges.length) how.push(gauges.join(', ') + ': +n / -n (cur/max only if the maximum changes)');
  if (f.fat) how.push('fat: +n / -n');
  if (f.exp) how.push('exp: +n' + (rank ? ' (% toward the next rank)' : ''));
  if (counts.length) how.push(counts.join(', ') + ': +n / -n');
  if (f.fx) how.push('fx: the full current list on any change, "+buff (time left); -debuff (time left)"; "fx: none" if empty');
  if (f.stat) how.push('stat: changed ones only, "name +n" or "name n G"');
  if (f.inv) how.push('inv: "+item|rarity|qty" gained, "-item|qty" lost or used');
  if (f.skill) how.push('skill: "+name|level|active or passive|cost or cooldown|effect" learned, "name|new level" on level-up, "-name" lost');
  if (f.title) how.push('titles: "+title|effect" earned');
  if (f.quest) how.push('quest: "+name|time left" accepted, "name|progress" updated, "-name" ended');
  ext.forEach(function (x) { how.push(howLine(x)); });
  var missing = keys.filter(function (k) { return !(k in st) && !OPTIONAL[k]; });
  return '[Status Window]\nThe System tracks {{user}}\'s status; [Current Status] below is exact and up to date. ' +
    'Open every reply with a <status> block, before anything else, holding only the lines this reply changes:\n<status>\n' + ex.join('\n') + '\n</status>\n' +
    'Don\'t repeat unchanged lines or do the math; the System totals it.\n- ' + how.join('\n- ') +
    (tail.length ? '\n' + tail.join(' ') : '') + (mid ? '\n' + mid : '') +
    (missing.length ? '\nNot tracked yet, write in full this time: ' + missing.map(function (k) { return FULL[k]; }).join(' / ') : '') +
    '\n[Current Status]' + (f.skill || f.title ? ' (skill/title effects omitted)' : '') + '\n' + HB.S.text(st, keys, true);
}
function buildPrompt(c, st) {
  var W = WORDS[c.lang] || WORDS.auto, out = [], f = c.status.fields;
  var any = KINDS.some(function (k) { return c[k].on; }) || customWins(c).length;
  if (!any) return '';
  var rank = c.status.grow === 'rank';
  var usesGrade = (c.status.on && (f.stat || (rank && f.lv))) || c.profile.on || c.quest.on;
  var rules = '[System Window Rules]\n{{user}} alone sees a game-like System. Its windows are tagged blocks in the formats below, each placed where it happens in the story. ' +
    'One "key: value" per line; omit lines that don\'t apply. ";" separates list items, "|" separates fields. Keys stay in English; values in ' + W.lang + '.';
  if (usesGrade) rules += '\nGrades: F feeble < E < D < C average adult < B < A elite human < S superhuman < SS legendary < SSS; +/- allowed.';
  /* restraint without numbers: windows appear only where the story naturally calls for them */
  rules += '\nUse a window only when the moment naturally calls for it; the prose carries the story. ' + (c.status.on ? 'Many replies need only the status block.' : 'Many replies need no window.');
  var per = c.persona === 'custom' ? trimS(c.personaCustom) : (PERSONA[c.persona] || PERSONA.neutral)[2];
  if (per) rules += '\nSystem personality: ' + per + '.';
  out.push(rules);
  if (trimS(c.world)) out.push('[Setting]\n' + trimS(c.world));

  var sp = c.status.on ? statusPrompt(c, W, st) : '';
  if (sp) out.push(sp);
  if (c.system.on || c.noti.on) {
    var sm = '';
    if (c.system.on) sm += '[System Messages]\n' + whenOf(c, 'system') + ':\n<system>\ntype: notice/talk/warn/error/levelup\ntext: main line\nsub: second line, only if needed' + extraLines(c, 'system') + '\n</system>\n' +
      'talk = answering {{user}}; warn = danger or deadline; error = malfunction or forbidden truth (hide words with ███; optional "log: action|OK or FAIL" lines); levelup text = ' +
      (c.status.grow === 'rank' ? '"RANK a → b"' : '"LV.a → LV.b"') + '.';
    if (c.noti.on) sm += (sm ? '\n' : '') + '[System Notifications]\n' + whenOf(c, 'noti') + (c.system.on ? ' (these go here, not in <system>)' : '') + ':\n<noti>\nexp/skill/title/item/aff/stat/quest/money: what|change' + extraLines(c, 'noti') + '\n</noti>';
    out.push(sm);
  }
  if (c.quest.on) out.push('[Quest Window]\n' + whenOf(c, 'quest') + ':\n<quest>\ntype: ' + W.qtype + '\ntitle: quest name\ndesc: situation, 1-2 sentences\ntime: HH:MM:SS left|% of time left\n' +
    'goal: objective cur/max; ...\nreward: ...; ...\npenalty: ...; ...' + extraLines(c, 'quest') + '\n</quest>\nGoals are not yet done at issue: each starts at 0. Progress: repeat the block with "state: active". End: <quest> with state: clear or fail, grade, title, and only the reward or penalty actually applied.');
  if (c.profile.on) {
    var ps = names(c.profile.stats).map(function (n) { return n + ' G'; });
    if (c.profile.uniq) ps.push('*unique G');
    var p = '[Profile Window]\n' + whenOf(c, 'profile') +
      (c.noti.on ? '; small shifts in affection or a stat go in <noti> instead, as "aff: name affection|+n" or "stat: name stat|new grade"' : '') + ':\n<profile>\nname: name\nrank: overall grade\n' +
      'info: age · job · affiliation\ntag: trait; trait (prefix ! for a warning sign)' + (ps.length ? '\nstat: ' + ps.join('; ') : '') +
      (c.profile.aff ? '\naff: affection 0-100|their feeling toward {{user}} in one word' : '') + (c.profile.mind ? '\nmind: their current inner thought, one sentence' : '') + extraLines(c, 'profile') + '\n</profile>\n' +
      (c.profile.uniq ? '1-2 stats unique to the person get a * prefix. ' : '') + 'Write ? for what {{user}} cannot know yet' +
      (c.profile.mind ? '; if mind is ?, add "lock: what would reveal it".' : '.');
    out.push(p);
  }
  if (c.shop.on) out.push('[Shop Window]\n' + whenOf(c, 'shop') + ':\n<shop>\npoint: balance\nitem: name|rarity|price|effect|stock or unlock condition\nrefresh: time until restock' + extraLines(c, 'shop') + '\n</shop>\n3-6 item lines. Prefix ! to a locked item\'s name. Rarity: ' + W.rar + '.');
  var cs = packSections(c, st);
  if (cs) out.push(cs);
  return out.join('\n\n');
}
/* the totals the prompt needs: only when something is tracked */
function promptState(c, type) { return c.status.on || TRACK.tags.length ? currentState(type) : null; }
/* type = SillyTavern's generation type when called for a generation (swipe / regenerate / continue / normal) */
function applyPrompt(type) {
  resolve();
  var text = LINK.active ? buildPrompt(EF, promptState(EF, typeof type === 'string' ? type : '')) : '';
  try { if (text && ctx.substituteParams) text = ctx.substituteParams(text); } catch (e) {}
  try { ctx.setExtensionPrompt(PROMPT_ID, text, 1, Math.max(0, CF.adv.depth | 0), false, CF.adv.role | 0); }
  catch (e) { console.warn('[HB] 지침 주입 실패', e); }
}

/* ---------- regex: installed and kept in sync automatically ---------- */
function wantedRegex() {
  /* custom windows of every installed pack are drawn too; with none the regex stays exactly as before */
  var TAGS = KINDS.concat(allTags()).join('|'), strip = TRACK.tags.length ? '<(status|' + TRACK.tags.join('|') + ')>[\\s\\S]*?<\\/\\1>' : '<status>[\\s\\S]*?<\\/status>';
  var base = { trimStrings: [], placement: [2], disabled: false, runOnEdit: true, substituteRegex: 0, minDepth: null, maxDepth: null };
  function mk(o) { var r = clone(base); Object.keys(o).forEach(function (k) { r[k] = o[k]; }); return r; }
  /* old windows are folded by hideOld() now, so no regex throws their content away */
  return [
    mk({ id: 'hb-sw-display', scriptName: '시스템 상태창 · 표시 (자동 관리)', markdownOnly: true, promptOnly: false,
      findRegex: '/(?:```[a-z]*[ \\t]*\\n)?[ \\t]*<(' + TAGS + ')>([\\s\\S]*?)<\\/\\1>(?:[ \\t]*\\n```)?/gi', replaceString: '\n```\n[HB:$1]\n$2\n```\n' }),
    mk({ id: 'hb-sw-pending', scriptName: '시스템 상태창 · 수신 중 (자동 관리)', markdownOnly: true, promptOnly: false,
      findRegex: '/<(' + TAGS + ')>(?![\\s\\S]*<\\/\\1>)([\\s\\S]*)$/i', replaceString: '\n```\n[HB:pending]\n$1\n$2\n```\n' }),
    /* the AI is handed the totals under [Current Status], so earlier status blocks are left out of what it reads */
    mk({ id: 'hb-sw-prompt', scriptName: '시스템 상태창 · 지난 상태창을 AI에게 보내지 않음 (자동 관리)', markdownOnly: false, promptOnly: true, minDepth: 1,
      disabled: !(LINK.active && CF.adv.strip && (EF.status.on || TRACK.tags.length)), findRegex: '/' + strip + '\\s*/gi', replaceString: '' })
  ];
}
/* quiet = never reload the chat (used while a reply is about to be generated) */
function ensureRegex(force, quiet) {
  var es = ctx.extensionSettings, list = es.regex = es.regex || [], changed = false, display = false;
  /* retired: the old-window regex (it replaced old windows with nothing) */
  for (var r = list.length - 1; r >= 0; r--) if (list[r] && list[r].id === 'hb-sw-cleanup') { list.splice(r, 1); changed = true; display = true; }
  var wanted = wantedRegex();
  wanted.forEach(function (w) {
    var i = -1; list.forEach(function (x, n) { if (x && x.id === w.id) i = n; });
    if (i < 0) { list.push(w); changed = true; if (w.markdownOnly) display = true; return; }
    var cur = list[i], diff = Object.keys(w).some(function (k) { return JSON.stringify(cur[k]) !== JSON.stringify(w[k]); });
    if (diff) { Object.keys(w).forEach(function (k) { cur[k] = w[k]; }); changed = true; if (w.markdownOnly) display = true; }
  });
  /* keep our entries together and in the wanted order (regexes run top to bottom) */
  var ids = wanted.map(function (w) { return w.id; }), ours = list.filter(function (x) { return x && ids.indexOf(x.id) > -1; });
  var inOrder = ours.map(function (x) { return x.id; }).join() === ids.join();
  var at = list.indexOf(ours[0]), together = ours.every(function (x, n) { return list[at + n] === x; });
  if (!inOrder || !together) {
    ours.sort(function (a, b) { return ids.indexOf(a.id) - ids.indexOf(b.id); });
    var rest = list.filter(function (x) { return ours.indexOf(x) < 0; });
    rest.splice.apply(rest, [Math.min(at, rest.length), 0].concat(ours));
    list.length = 0; rest.forEach(function (x) { list.push(x); });
    changed = true; display = true;
  }
  /* the earlier iframe-based regex set would double-render: switch it off */
  list.forEach(function (x) {
    if (x && typeof x.scriptName === 'string' && /^HoloBlue · /.test(x.scriptName) && !x.disabled) { x.disabled = true; changed = true; display = true; toast('이전 버전 정규식 "' + x.scriptName + '"을(를) 껐습니다.'); }
  });
  if (changed) save();
  if (!quiet && (display || force) && ctx.reloadCurrentChat) { try { ctx.reloadCurrentChat(); } catch (e) {} }
  return changed;
}
function removeRegex() {
  var es = ctx.extensionSettings;
  es.regex = (es.regex || []).filter(function (x) { return !(x && /^hb-sw-/.test(x.id)); });
  save();
}

/* ---------- themes ---------- */
var BUILTIN = {};
BUILTIN['holo-blue'] = { id: 'holo-blue', name: 'Hologram Blue', author: 'HoloBlue', version: '1.0', builtin: true, description: '푸른 홀로그램 패널. 기본 테마.', fonts: [BASE_FONTS], css: BASE_CSS };
function themeList() { return Object.keys(BUILTIN).map(function (k) { return BUILTIN[k]; }).concat(Object.keys(S.themes).map(function (k) { return S.themes[k]; })); }
function getTheme(id) { return BUILTIN[id] || S.themes[id] || BUILTIN['holo-blue']; }
function themeCss(t, depth) {
  var base = t.extends && (depth || 0) < 4 ? (BUILTIN[t.extends] || S.themes[t.extends]) : null;
  return (base ? themeCss(base, (depth || 0) + 1) + '\n' : '') + (t.css || '');
}
function themeFonts(t, depth) {
  var base = t.extends && (depth || 0) < 4 ? (BUILTIN[t.extends] || S.themes[t.extends]) : null;
  return (base ? themeFonts(base, (depth || 0) + 1) : []).concat(t.fonts || []);
}
var DEF_R = null, DEF_B = null, sheet = null, sheetCss = '';
function applyTheme() {
  var t = getTheme(CF.theme);
  sheetCss = themeCss(t);
  D.querySelectorAll('link[data-hb-font]').forEach(function (l) { l.remove(); });
  themeList().forEach(function (th) {
    themeFonts(th).forEach(function (u) {
      if (!/^https:\/\//.test(u) || D.querySelector('link[data-hb-font="' + u + '"]')) return;
      var l = D.createElement('link'); l.rel = 'stylesheet'; l.href = u; l.setAttribute('data-hb-font', u); D.head.appendChild(l);
    });
  });
  if (!DEF_R) { DEF_R = {}; DEF_B = {}; Object.keys(HB.R).forEach(function (k) { DEF_R[k] = HB.R[k]; }); Object.keys(HB.B).forEach(function (k) { DEF_B[k] = HB.B[k]; }); }
  HB.R = {}; HB.B = {};
  Object.keys(DEF_R).forEach(function (k) { HB.R[k] = DEF_R[k]; }); Object.keys(DEF_B).forEach(function (k) { HB.B[k] = DEF_B[k]; });
  /* a pack's windows and templates come before its script, so the script can still override them */
  sheetCss += packRegister(t);
  try { sheet = new P.CSSStyleSheet(); sheet.replaceSync(sheetCss); } catch (e) { sheet = null; }
  var js = t.js; if (!js && t.extends) { var b = BUILTIN[t.extends] || S.themes[t.extends]; js = b && b.js; }
  if (js) { try { new Function('HB', 'theme', js)(HB, t); } catch (e) { console.warn('[HB] theme.js 오류', e); toast('테마 스크립트 오류: ' + e.message, 'warning'); } }
}

/* ---------- rendering into the chat ---------- */
function makeHost(kind, raw, opt) {
  opt = opt || {};
  var host = D.createElement('div'); host.className = 'hb-host'; host.setAttribute('data-hb', kind);
  var sh = host.attachShadow({ mode: 'open' });
  if (opt.css == null && sheet && 'adoptedStyleSheets' in sh) sh.adoptedStyleSheets = [sheet];
  else { var st = D.createElement('style'); st.textContent = opt.css == null ? sheetCss : opt.css; sh.appendChild(st); }
  var box = D.createElement('div'); box.className = 'hb' + (opt.quiet ? ' noanim' : opt.wait ? ' wait' : '');
  var data;
  /* a status window in the chat is drawn from the tracked state, not from the few lines the block itself holds */
  if (raw && typeof raw === 'object') data = HB.S.view(raw.state);
  else data = HB.parse(raw);
  try { box.innerHTML = HB.R[kind] ? HB.R[kind](data) : ''; }
  catch (e) { box.textContent = '[시스템 상태창] 표시 오류: ' + e.message; }
  sh.appendChild(box);
  function bind() {
    /* settings previews are for looking only: their quest buttons must not reach the real input box */
    if (HB.B[kind] && !(opt.preview && kind === 'quest')) { try { HB.B[kind](box, !!opt.quiet); } catch (e) { console.warn('[HB]', e); } }
    try { HB.marquee(box); } catch (e) { console.warn('[HB]', e); }
  }
  if (opt.wait && io) { host._play = function () { box.classList.remove('wait'); bind(); if (opt.onPlay) opt.onPlay(); }; io.observe(host); }
  else { box.classList.remove('wait'); bind(); }
  return host;
}
var seen = new Set(), hostSeq = 0;
var io = null;
try {
  io = new P.IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting && e.target._play) { var f = e.target._play; e.target._play = null; io.unobserve(e.target); f(); } });
  }, { threshold: 0.2 });
} catch (e) { io = null; }
/* JS-Slash-Runner's "collapse code blocks" wraps a <pre> in div.TH-render and adds a "显示代码块" button: hide it for our blocks */
function hideRunnerBtn(pre) {
  var div = pre && pre.parentElement;
  if (!div || !div.classList.contains('TH-render')) return;
  /* the emptied inline-block wrapper would still take a text line of height: take it out of the flow */
  if (!div.hasAttribute('data-hb-hid') && !div.querySelector(':scope > .hb-host')) { div.setAttribute('data-hb-hid', '1'); div.style.setProperty('display', 'none', 'important'); }
  for (var i = 0; i < div.children.length; i++) {
    var b = div.children[i];
    if (b.classList.contains('TH-collapse-code-block-button') && !b.hasAttribute('data-hb-hid')) { b.setAttribute('data-hb-hid', '1'); b.style.setProperty('display', 'none', 'important'); }
  }
}
function showRunnerBtn(pre) {
  var div = pre && pre.parentElement;
  if (div && div.hasAttribute('data-hb-hid')) { div.removeAttribute('data-hb-hid'); div.style.removeProperty('display'); }
  if (div) div.querySelectorAll(':scope > [data-hb-hid]').forEach(function (b) { b.removeAttribute('data-hb-hid'); b.style.removeProperty('display'); });
}
function generating() { var b = D.getElementById('mes_stop'); return !!(b && b.offsetParent !== null); }
function process(pre) {
  if (!pre || !pre.isConnected) return;
  if (pre.hasAttribute('data-hb-done')) { hideRunnerBtn(pre); return; }
  var code = pre.querySelector('code'); if (!code) return;
  var txt = code.textContent, m = txt.match(/^\s*\[HB:([a-z][a-z0-9_-]*)\][ \t]*\r?\n?/i);
  if (!m) return;
  var kind = m[1].toLowerCase(), raw = txt.slice(m[0].length), pending = false, pendKind = '';
  if (kind === 'pending') {
    var nl = raw.indexOf('\n'), inner = trimS(nl < 0 ? raw : raw.slice(0, nl)).toLowerCase();
    if (generating()) { pending = true; pendKind = inner; raw = ''; }
    else { kind = inner; raw = nl < 0 ? '' : raw.slice(nl + 1); }
  }
  /* an old status/noti hidden by the cleanup regex: show nothing, not even the code block */
  if (kind === 'hidden') { pre.setAttribute('data-hb-done', '1'); pre.style.display = 'none'; hideRunnerBtn(pre); return; }
  if (!pending && KINDS.indexOf(kind) < 0 && allTags().indexOf(kind) < 0) return;
  var mes = pre.closest('.mes'), id = mes ? mes.getAttribute('mesid') : '', key = id + '|' + kind + '|' + raw;
  /* old replies are not drawn at all (long chats would lag): the block stays a folded code block */
  if (!pending && isOld(mes)) { markOld(pre); hideOld(); return; }
  /* each window plays its entrance once, the first time it is on screen */
  var quiet = seen.has(key);
  if (seen.size > 800) seen.clear();
  var mt = pre.closest('.mes_text'), order = 0;
  /* the status and tracked custom windows are drawn from the totals, not from the few lines the block holds */
  if (!pending && mt && (kind === 'status' || TRACK.tags.indexOf(kind) > -1)) {
    order = statusPres(mt, pre, kind).length;
    var vs = viewState(parseInt(id, 10), order, kind);
    if (vs) raw = { state: translated(kind === 'status' ? vs : vs['@' + kind] || {}) };
  }
  var host = makeHost(pending ? 'pending' : kind, raw, pending ? {} : { quiet: quiet, wait: !quiet, onPlay: function () { seen.add(key); } });
  if (pending) host.setAttribute('data-hb-pending', '1');
  var hid = 'hb' + (++hostSeq);
  host.setAttribute('data-hb-id', hid); pre.setAttribute('data-hb-id', hid);
  pre.setAttribute('data-hb-done', '1'); pre.style.display = 'none'; hideRunnerBtn(pre);
  /* the first status window of a message sits at the very top; later ones (time skips) stay where they were written */
  var top = (kind === 'status' && order === 0) || (pending && pendKind === 'status' && !mt.querySelector('.hb-host[data-hb="status"]'));
  if (top && mt) mt.insertBefore(host, mt.firstChild);
  else {
    /* never inside the runner's div.TH-render: it is inline-block, so a window inside it shrinks to zero width */
    var at = pre.parentElement && pre.parentElement.classList.contains('TH-render') ? pre.parentElement : pre;
    at.parentNode.insertBefore(host, at);
  }
}
/* earlier blocks of the same window (default status) in the same message, in document order */
function statusPres(mt, pre, tag) {
  var out = [], re = new RegExp('^\\s*\\[HB:' + (tag || 'status') + '\\][ \\t]*\\r?\\n?', 'i');
  var all = mt.querySelectorAll('pre');
  for (var i = 0; i < all.length && all[i] !== pre; i++) {
    var c = all[i].querySelector('code'), t = c ? c.textContent : '', m = t.match(re);
    if (m) out.push({ pre: all[i], raw: t.slice(m[0].length) });
  }
  return out;
}
/* replies older than the last three are not drawn as windows (a long chat would lag): every block in them stays
   a raw code block, folded behind one bar per message; tapping the bar shows the code */
var HIDE_DEPTH = 3, depthT = 0;
function isOld(m) {
  if (!m || !(CF && CF.adv && CF.adv.cleanup)) return false;
  var c = C(), n = c && c.chat ? c.chat.length : 0, id = parseInt(m.getAttribute('mesid'), 10);
  return !isNaN(id) && n - 1 - id >= HIDE_DEPTH;
}
function markOld(pre) {
  pre.setAttribute('data-hb-done', '1'); pre.setAttribute('data-hb-old', '1'); pre.removeAttribute('data-hb-id');
  pre.style.setProperty('display', 'none', 'important'); hideRunnerBtn(pre);
}
var OLD_NAME = { status: '상태창', system: '시스템 메시지', noti: '알림', quest: '퀘스트', profile: '인물 창', shop: '상점' };
function oldBar(pre) {
  var k = ((pre.textContent.match(/^\s*\[HB:(?:pending\]\s*)?([a-z][a-z0-9_-]*)/i) || [])[1] || '').toLowerCase();
  var bar = D.createElement('div'); bar.className = 'hb-oldbar'; bar.setAttribute('role', 'button'); bar.tabIndex = 0;
  bar.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg><span>' + HB.esc(OLD_NAME[k] || cwName(k) || '시스템 창') + '</span>';
  function flip() { pre.setAttribute('data-hb-open', pre.getAttribute('data-hb-open') === '1' ? '0' : '1'); hideOld(); }
  bar.addEventListener('click', flip);
  bar.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); flip(); } });
  return bar;
}
function wrapOf(pre) { var p = pre.parentElement; return p && p.classList.contains('TH-render') ? p : null; }
function hideOld() {
  clearTimeout(depthT);
  depthT = setTimeout(function () {
    D.querySelectorAll('#chat .mes').forEach(function (m) {
      if (!isOld(m)) {
        /* young again (a message was deleted): draw its windows */
        m.querySelectorAll('.hb-oldbar').forEach(function (b) { b.remove(); });
        m.querySelectorAll('pre[data-hb-old]').forEach(function (p) {
          p.removeAttribute('data-hb-old'); p.removeAttribute('data-hb-open'); p.removeAttribute('data-hb-done'); p.style.removeProperty('display'); showRunnerBtn(p); process(p);
        });
        return;
      }
      /* just aged past the limit: take its drawn windows away */
      m.querySelectorAll('.hb-host:not([data-hb-pending])').forEach(function (h) {
        var id = h.getAttribute('data-hb-id'), p = id ? m.querySelector('pre[data-hb-id="' + id + '"]') : null;
        h.remove(); if (p) markOld(p);
      });
      /* one small bar where each window used to be; tapping it shows that block's code */
      m.querySelectorAll('pre[data-hb-old]').forEach(function (p) {
        var at = wrapOf(p) || p, b = at.previousElementSibling, open = p.getAttribute('data-hb-open') === '1';
        if (!b || !b.classList.contains('hb-oldbar')) { b = oldBar(p); at.parentNode.insertBefore(b, at); }
        p.style.setProperty('display', open ? 'block' : 'none', 'important');
        if (at !== p) at.style.setProperty('display', open ? 'block' : 'none', 'important');
        b.classList.toggle('open', open);
      });
    });
  }, 60);
}
function scanAll(root) { (root || D).querySelectorAll('#chat .mes_text pre').forEach(process); }
function unrender(sel) {
  if (!sel) D.querySelectorAll('#chat .hb-oldbar').forEach(function (b) { b.remove(); });
  D.querySelectorAll(sel || '#chat .hb-host').forEach(function (h) {
    var id = h.getAttribute('data-hb-id'), pre = id ? D.querySelector('pre[data-hb-id="' + id + '"]') : null;
    if (pre) { pre.removeAttribute('data-hb-done'); pre.removeAttribute('data-hb-id'); pre.style.display = ''; showRunnerBtn(pre); }
    h.remove();
  });
}
function rerenderAll() { unrender(); scanAll(); }

/* ---------- apply settings ---------- */
var lastSig = '';
function applyAll(opt) {
  resolve();
  var c = CF;
  HB.lang = c.lang === 'auto' ? 'ko' : c.lang;
  HB.opt.questBtn = c.quest.btn;
  HB.opt.bookOn = !!S.ui.book;
  applyPrompt();
  ensureRegex();
  placeBook();
  /* a pack's revision goes up on every edit, so its windows are redrawn with the new design */
  var sig = c.theme + '|' + (EF.pack ? EF.pack.rev : '') + '|' + HB.lang + '|' + c.quest.btn + '|' + S.ui.book + '|' + (opt && opt.force ? Math.random() : '');
  if (sig !== lastSig) { lastSig = sig; applyTheme(); rerenderAll(); }
  hideOld();
}

/* ---------- custom packs: a theme that also decides which windows exist, their fields and when they appear ----------
   A pack lives in S.themes like any theme ({ ..., pack: 1, win: { status: {...}, ... }, cw: [ custom windows ] }).
   Picking it for a chat replaces that chat's window settings (EF = the chat's settings with the pack's windows laid
   over them); language, persona and world notes stay the chat's own. Packs are shared across chats and exported as a
   zip (theme.json + theme.css [+ theme.js] + windows/<name>.html / .css). */
var EF = null;                                   /* effective settings of the current chat */
var TRACK = { tags: [], types: {}, sig: '' };    /* tracked custom windows: their tags, field types per tag, and a signature */
var WIN_KINDS = ['status', 'system', 'noti', 'quest', 'profile', 'shop'];
var WIN_NAME = { status: '기본 상태창', system: '시스템 메시지', noti: '알림', quest: '퀘스트', profile: '인물 창', shop: '상점' };
/* when each window appears, unless a pack says otherwise (the format part of each prompt never changes) */
var WHEN = {
  status: 'Mid-reply, only when a full day or more passes within this reply: another <status> right there with the changed lines',
  system: 'Only when the System truly speaks up (answering {{user}}, a real warning, a major event), not for small reactions',
  noti: 'Notable gains or changes, one per line; skip trivial ones',
  quest: 'Only when the System issues a quest at a real turning point',
  profile: 'When {{user}} first meets a notable person. After that, only when {{user}} asks to see it, or when a major story turn reveals or changes a lot about them (true identity, a big rank change, turning against {{user}})',
  shop: 'Only when {{user}} opens the shop',
  snap: 'Only when the story calls for this window',
  track: 'Whenever one of these values changes'
};
var FTYPES = [['text', '글자'], ['gauge', '게이지'], ['number', '숫자'], ['list', '목록']];
/* keys a built-in window already uses: an added field cannot take them */
var OWN_KEYS = {
  status: Object.keys(DEF.status.fields).concat(['rank', 'titles']),
  system: ['type', 'text', 'sub', 'log'],
  noti: ['exp', 'skill', 'title', 'item', 'aff', 'stat', 'quest', 'money', 'point', 'lv'],
  quest: ['type', 'title', 'desc', 'time', 'goal', 'reward', 'penalty', 'state', 'grade'],
  profile: ['name', 'rank', 'info', 'tag', 'stat', 'aff', 'mind', 'lock', 'scan'],
  shop: ['point', 'item', 'refresh']
};
/* tag names a custom window may not take: built-in windows and ordinary HTML */
var RESERVED = {};
KINDS.concat(['pending', 'hidden', 'html', 'head', 'body', 'div', 'span', 'p', 'a', 'b', 'i', 'u', 's', 'em', 'strong', 'small', 'big', 'br', 'hr', 'img', 'ul', 'ol', 'li',
  'dl', 'dt', 'dd', 'table', 'thead', 'tbody', 'tr', 'td', 'th', 'pre', 'code', 'kbd', 'details', 'summary', 'style', 'script', 'think', 'thinking', 'font', 'center', 'q', 'sup', 'sub',
  'mark', 'del', 'ins', 'video', 'audio', 'source', 'iframe', 'svg', 'path', 'button', 'input', 'form', 'label', 'select', 'option', 'textarea', 'section', 'article', 'header',
  'footer', 'nav', 'main', 'aside', 'time', 'title', 'link', 'meta', 'blockquote', 'figure', 'figcaption', 'canvas', 'ruby', 'rt', 'rp', 'abbr', 'cite', 'var', 'wbr', 'char', 'user'])
  .forEach(function (k) { RESERVED[k] = 1; });
var TAG_RE = /^[a-z][a-z0-9_-]{1,23}$/, KEY_RE = /^[a-z][a-z0-9_]{0,23}$/;

/* ---- shape ---- */
function normField(f) {
  f = f || {};
  return { k: String(f.k || '').toLowerCase().replace(/[^a-z0-9_]/g, '').slice(0, 24), label: String(f.label || ''),
    type: ['text', 'gauge', 'number', 'list'].indexOf(f.type) > -1 ? f.type : 'text', desc: String(f.desc || ''), on: f.on === 0 || f.on === false ? 0 : 1 };
}
function winFrom(kind, c) {
  var w = { on: c[kind].on ? 1 : 0, when: '', extra: [], html: '', css: '' };
  if (kind === 'status') { w.grow = c.status.grow; w.stats = c.status.stats; w.fields = clone(c.status.fields); }
  if (kind === 'profile') { w.stats = c.profile.stats; w.uniq = c.profile.uniq; w.aff = c.profile.aff; w.mind = c.profile.mind; }
  return w;
}
/* hand-written packs may say true / false where the settings keep 1 / 0 */
function numify(o) {
  var out = {};
  Object.keys(o).forEach(function (k) { var v = o[k]; out[k] = typeof v === 'boolean' ? (v ? 1 : 0) : v && typeof v === 'object' && !Array.isArray(v) ? numify(v) : v; });
  return out;
}
/* fill in whatever a pack (old, hand-written or imported) leaves out */
function normPack(p) {
  var base = merge(DEF, {}), src = p.win && typeof p.win === 'object' ? p.win : {}, seen = {};
  p.pack = 1; p.rev = p.rev | 0; p.win = {};
  WIN_KINDS.forEach(function (k) {
    var s = src[k] && typeof src[k] === 'object' ? numify(src[k]) : {}, w = merge(winFrom(k, base), s);
    w.extra = (Array.isArray(s.extra) ? s.extra : []).map(normField);
    w.html = String(s.html || ''); w.css = String(s.css || ''); w.when = String(s.when || '');
    p.win[k] = w;
  });
  p.cw = (Array.isArray(p.cw) ? p.cw : []).filter(function (w) {
    var t = String(w && w.tag || '').toLowerCase();
    if (!TAG_RE.test(t) || RESERVED[t] || seen[t]) return false;
    seen[t] = 1; return true;
  }).map(function (w) {
    return { tag: String(w.tag).toLowerCase(), name: String(w.name || w.tag), on: w.on === 0 || w.on === false ? 0 : 1, mode: w.mode === 'track' ? 'track' : 'snap',
      when: String(w.when || ''), fields: (Array.isArray(w.fields) ? w.fields : []).map(normField), html: String(w.html || ''), css: String(w.css || '') };
  });
  return p;
}
/* a new pack: a copy of the current pack, or the current settings and design as a starting point */
function newPack(c) {
  var t = getTheme(c.theme), id = 'pack-' + Date.now().toString(36), p;
  if (t.pack) { p = clone(t); p.name = t.name + ' (복사본)'; }
  else {
    p = { name: '내 커스텀 팩', author: '', version: '1.0', description: '', fonts: [], css: '', extends: t.id, win: {}, cw: [] };
    WIN_KINDS.forEach(function (k) { p.win[k] = winFrom(k, c); });
  }
  p.id = id; delete p.builtin; p.rev = 0;
  return normPack(p);
}
function curPack() { var t = CF && getTheme(CF.theme); return t && t.pack ? t : null; }
/* the chat's settings with the pack's windows laid over them */
function effective(c) {
  var t = getTheme(c.theme);
  if (!t || !t.pack) return c;
  var e = clone(c), ws = t.win.status, wp = t.win.profile;
  WIN_KINDS.forEach(function (k) { e[k].on = !!t.win[k].on; });
  e.status.grow = ws.grow; e.status.stats = ws.stats; e.status.fields = clone(ws.fields);
  e.profile.stats = wp.stats; e.profile.uniq = wp.uniq; e.profile.aff = wp.aff; e.profile.mind = wp.mind;
  e.pack = t;
  return e;
}
function fieldOk(kind) { var own = OWN_KEYS[kind] || []; return function (f) { return f.on && KEY_RE.test(f.k) && own.indexOf(f.k) < 0; }; }
/* the added fields of a built-in window that are switched on and valid */
function extras(c, kind) { return c && c.pack ? c.pack.win[kind].extra.filter(fieldOk(kind)) : []; }
function customWins(c) { return c && c.pack ? c.pack.cw.filter(function (w) { return w.on; }) : []; }
function cwFields(w) { var seen = {}; return w.fields.filter(function (f) { if (!f.on || !KEY_RE.test(f.k) || seen[f.k]) return false; seen[f.k] = 1; return true; }); }
/* field types the state engine needs: status extras globally, tracked windows per tag */
function updateTrack(c) {
  var types = {}, tags = [], tt = {};
  extras(c, 'status').forEach(function (f) { types[f.k] = f.type; });
  customWins(c).filter(function (w) { return w.mode === 'track'; }).forEach(function (w) {
    var m = {}; cwFields(w).forEach(function (f) { m[f.k] = f.type; });
    tags.push(w.tag); tt[w.tag] = m;
  });
  var sig = Object.keys(types).length || tags.length ? JSON.stringify([types, tt]) : '';
  if (sig !== TRACK.sig) syncedId = null;       /* field types changed: recompute the totals once */
  TRACK = { tags: tags, types: tt, sig: sig };
  HB.S.setTypes(types);
}
/* every custom tag any installed pack defines: their blocks are turned into windows wherever they appear */
function allTags() {
  var out = [];
  Object.keys(S.themes).forEach(function (id) { var t = S.themes[id]; if (t.pack && Array.isArray(t.cw)) t.cw.forEach(function (w) { if (out.indexOf(w.tag) < 0) out.push(w.tag); }); });
  return out.sort();
}
function cwName(tag) { var p = curPack(), w = p && p.cw.filter(function (x) { return x.tag === tag; })[0]; return w ? w.name : ''; }

/* ---- templates: {{key}}, {{key.cur|max|pct|label|1..}}, {{#key}}…{{/key}}, {{^key}}…{{/key}}, {{bar key}}, {{grade key}}, {{icon name}} ---- */
function tpl(src, d, T, labels) {
  T = T || {}; labels = labels || {};
  function val(k) { var v = HB.one(d, k); return HB.isNone(v) ? '' : v; }
  function items(k) {
    if (T[k] && T[k] !== 'list') { var v = val(k); return v ? [v] : []; }
    return HB.all(d, k).filter(function (s) { return !HB.isNone(s); });
  }
  function get(ctx, path) {
    if (path === '.') return ctx == null ? '' : ctx;
    if (/^\d+$/.test(path)) return ctx == null ? '' : HB.fields(ctx)[+path - 1] || '';
    var p = path.split('.'), k = p[0].toLowerCase(), sub = p[1] || '', v;
    if (sub === 'label') return labels[k] || k;
    v = val(k);
    if (!sub) return v;
    if (/^\d+$/.test(sub)) return HB.fields(v)[+sub - 1] || '';
    var f = HB.frac(v), q;
    if (sub === 'cur') return f ? f.a : (String(v).match(/-?[\d,.]+/) || [''])[0];
    if (sub === 'max') return f ? f.b : '';
    if (sub === 'pct') { q = f ? f.p : HB.pct(v); return q == null ? '0' : String(Math.round(q)); }
    return '';
  }
  function pathish(key) { return key === '.' || /^\d+$/.test(key) || key.indexOf('.') > -1; }
  function run(s, ctx) {
    s = s.replace(/\{\{([#^])\s*([\w.]+)\s*\}\}([\s\S]*?)\{\{\/\s*\2\s*\}\}/g, function (all, mode, key, inner) {
      var list = pathish(key) ? (get(ctx, key) ? [ctx] : []) : items(key.toLowerCase());
      if (mode === '^') return list.length ? '' : run(inner, ctx);
      return list.map(function (it) { return run(inner, pathish(key) ? ctx : it); }).join('');
    });
    s = s.replace(/\{\{\s*(bar|grade|icon)\s+([\w.]+)\s*\}\}/g, function (all, fn, arg) {
      if (fn === 'icon') return HB.ic(arg);
      var v = get(ctx, arg);
      if (fn === 'bar') { var f = HB.frac(v), q = f ? f.p : HB.pct(v); return HB.bar(Math.max(0, Math.min(100, q || 0))); }
      /* a grade chip for a grade, a lock for "?", nothing for anything else */
      var last = trimS(v).split(/\s+/).pop(), g = HB.grade(last);
      return g ? HB.gchip(g) : HB.isQ(last) ? HB.gchip(null) : '';
    });
    return s.replace(/\{\{\s*([\w.]+)\s*\}\}/g, function (all, path) { return HB.esc(get(ctx, path)); });
  }
  return run(String(src || ''), null);
}
/* the starting template of a custom window: one row per field, in the built-in look */
function defaultHtml(w) {
  return '<div class="win cw">\n  <div class="hd">{{icon sys}}<span class="hd-t"><b>' + HB.esc(w.name || w.tag) + '</b><small>' + HB.esc(w.tag) + '</small></span></div>\n  <div class="bd">\n' +
    cwFields(w).map(function (f) {
      var k = f.k;
      if (f.type === 'gauge') return '    {{#' + k + '}}<div class="cw-g"><div class="cw-r"><span class="k">{{' + k + '.label}}</span><span class="v">{{' + k + '}}</span></div>{{bar ' + k + '}}</div>{{/' + k + '}}';
      if (f.type === 'list') return '    {{#' + k + '.1}}<div class="lbl">{{' + k + '.label}}</div>{{/' + k + '.1}}\n    {{#' + k + '}}<div class="cw-l">{{.}}</div>{{/' + k + '}}';
      return '    {{#' + k + '}}<div class="cw-r"><span class="k">{{' + k + '.label}}</span><span class="v">{{' + k + '}}</span></div>{{/' + k + '}}';
    }).join('\n') + '\n  </div>\n</div>';
}
/* a window nobody here defines (another pack's, or one since removed): its lines as plain rows */
function plainWindow(tag) {
  return function (d) {
    return '<div class="win cw"><div class="hd">' + HB.ic('sys') + '<span class="hd-t"><b>' + HB.esc(cwName(tag) || tag) + '</b></span></div><div class="bd">' +
      d._l.map(function (kv) { return '<div class="cw-r"><span class="k">' + HB.esc(kv[0]) + '</span><span class="v">' + HB.esc(kv[1]) + '</span></div>'; }).join('') + '</div></div>';
  };
}
function labelsOf(kind, w) {
  var L = {};
  if (kind === 'status') Object.keys(STATE_LABEL).forEach(function (k) { L[k] = STATE_LABEL[k]; });
  (kind ? w.extra : w.fields).forEach(function (f) { if (f.k) L[f.k] = f.label || f.k; });
  return L;
}
function typesOf(kind, w) { var T = {}; (kind ? w.extra : w.fields).forEach(function (f) { if (f.k) T[f.k] = f.type; }); return T; }
/* after the theme reset HB.R: renderers for custom windows and template overrides. Returns the windows' CSS */
function packRegister(t) {
  allTags().forEach(function (tag) { if (!HB.R[tag]) HB.R[tag] = plainWindow(tag); });
  HB.opt.ext = { status: extras(EF, 'status'), profile: extras(EF, 'profile') };
  if (!t || !t.pack) return '';
  var css = '';
  WIN_KINDS.forEach(function (k) {
    var w = t.win[k];
    if (trimS(w.html)) { var L = labelsOf(k, w), T = typesOf(k, w); HB.R[k] = function (d) { return tpl(w.html, d, T, L); }; }
    if (trimS(w.css)) css += '\n' + w.css;
  });
  t.cw.forEach(function (w) {
    var L = labelsOf(null, w), T = typesOf(null, w);
    HB.R[w.tag] = function (d) { return tpl(trimS(w.html) || defaultHtml(w), d, T, L); };
    if (trimS(w.css)) css += '\n' + w.css;
  });
  return css;
}

/* ---- prompt pieces ---- */
/* a maker's sentence may end with its own full stop: the prompt adds its own ":" or "." */
function bare(s) { return trimS(s).replace(/[\s.。:：]+$/, ''); }
function whenOf(c, kind) { var w = c.pack && c.pack.win[kind] && bare(c.pack.win[kind].when || ''); return w || WHEN[kind]; }
function fieldLine(f) {
  return f.k + ': ' + (trimS(f.desc) || f.label || f.k) + (f.type === 'gauge' ? ' (cur/max)' : f.type === 'number' ? ' (number)' : f.type === 'list' ? ' (item; item)' : '');
}
/* the added fields of a built-in window, as format lines to put inside its block */
function extraLines(c, kind) { var fs = extras(c, kind); return fs.length ? '\n' + fs.map(fieldLine).join('\n') : ''; }
function howLine(f) {
  if (f.type === 'gauge') return f.k + ': +n / -n (cur/max only if the maximum changes)';
  if (f.type === 'number') return f.k + ': +n / -n';
  if (f.type === 'list') return f.k + ': "+item" added, "-item" removed';
  return f.k + ': new value';
}
/* the sections for the pack's own windows */
function packSections(c, st) {
  return customWins(c).map(function (w) {
    var fs = cwFields(w), name = trimS(w.name) || w.tag, when = bare(w.when) || WHEN[w.mode === 'track' ? 'track' : 'snap'];
    if (!fs.length) return '';
    var fmt = '<' + w.tag + '>\n' + fs.map(fieldLine).join('\n') + '\n</' + w.tag + '>';
    if (w.mode !== 'track') return '[' + name + ' Window]\n' + when + ':\n' + fmt;
    var sub = st && st['@' + w.tag];
    if (!sub || !Object.keys(sub).length) return '[' + name + ' Window]\n' + when + '. Nothing is tracked yet: the first time, write every line:\n' + fmt;
    return '[' + name + ' Window]\n' + when + ': a <' + w.tag + '> block holding only the lines that change; the System keeps the totals.\n- ' +
      fs.map(howLine).join('\n- ') + '\n[Current ' + name + ']\n' + HB.S.text(sub, fs.map(function (f) { return f.k; }));
  }).filter(Boolean).join('\n\n');
}

/* ---- export / import ---- */
function exportPack(t) {
  var meta = clone(t), files = {};
  delete meta.css; delete meta.js; delete meta.rev;
  WIN_KINDS.forEach(function (k) {
    var w = meta.win[k];
    if (trimS(w.html)) files['windows/' + k + '.html'] = w.html;
    if (trimS(w.css)) files['windows/' + k + '.css'] = w.css;
    delete w.html; delete w.css;
  });
  meta.cw.forEach(function (w) {
    if (trimS(w.html)) files['windows/' + w.tag + '.html'] = w.html;
    if (trimS(w.css)) files['windows/' + w.tag + '.css'] = w.css;
    delete w.html; delete w.css;
  });
  files['theme.json'] = JSON.stringify(meta, null, 2);
  files['theme.css'] = t.css || '';
  if (t.js) files['theme.js'] = t.js;
  download((/^pack-/.test(t.id) ? '' : 'pack-') + t.id + '.zip', ZIP.write(files));
}
/* the window files of an imported pack: windows/<kind or tag>.html / .css */
function packFiles(m, find) {
  WIN_KINDS.forEach(function (k) { var x = m.win[k]; x.html = find('windows/' + k + '.html') || x.html; x.css = find('windows/' + k + '.css') || x.css; });
  m.cw.forEach(function (w) { w.html = find('windows/' + w.tag + '.html') || w.html; w.css = find('windows/' + w.tag + '.css') || w.css; });
}

/* ---- the text a maker hands an AI to get a window's design ---- */
function sampleValue(f) {
  if (f.type === 'gauge') return '62/100';
  if (f.type === 'number') return '1,250';
  if (f.type === 'list') return (f.label || f.k) + ' A; ' + (f.label || f.k) + ' B';
  return (f.label || f.k) + ' 예시';
}
function sampleCw(w) { return cwFields(w).map(function (f) { return f.k + ': ' + sampleValue(f); }).join('\n'); }
function aiPrompt(kind, tag) {
  var p = curPack(), w = kind ? p.win[kind] : p.cw.filter(function (x) { return x.tag === tag; })[0];
  var name = kind ? WIN_NAME[kind] : w.name, t = kind || tag, lines;
  if (kind) lines = (sampleOf(kind, EF) || '').split('\n').concat(extras(EF, kind).map(function (f) { return f.k + ': ' + sampleValue(f) + '   ← ' + (f.label || f.k) + ' (' + typeName(f.type) + ')'; }));
  else lines = cwFields(w).map(function (f) { return f.k + ': ' + sampleValue(f) + '   ← ' + (f.label || f.k) + ' (' + typeName(f.type) + ')'; });
  return 'SillyTavern "시스템 상태창" 확장의 창 디자인을 만들어 줘.\n\n' +
    '창: ' + name + ' (태그 <' + t + '>)\n' +
    'AI가 이 창에 적는 값 (키: 예시):\n' + lines.join('\n') + '\n\n' +
    '규칙:\n' +
    '- 결과물은 HTML 틀과 CSS 두 개. 각각 전체 내용을 코드 블록으로 줘.\n' +
    '- HTML 틀 문법:\n' +
    '  {{키}} 값 · {{키.label}} 항목 이름\n' +
    '  {{키.cur}} {{키.max}} {{키.pct}} 게이지의 현재값 · 최대값 · 퍼센트(0-100)\n' +
    '  {{키.1}} {{키.2}} … 값을 "|"로 나눈 칸\n' +
    '  {{#키}} … {{/키}} 값이 있을 때만. 목록이면 항목마다 반복하고, 안에서 {{.}}는 항목 전체, {{1}} {{2}}는 항목을 "|"로 나눈 칸\n' +
    '  {{^키}} … {{/키}} 값이 없을 때만\n' +
    '  {{bar 키}} 게이지 막대 · {{grade 키}} 등급 칩(F~SSS, EX) · {{icon 이름}} 아이콘 (sys, status, quest, scan, shop, heart, fire, bolt, sword, gem, coin, medal, timer, warn, lock, eye, spark, point)\n' +
    '  같은 키의 {{#키}}는 서로 겹쳐 쓸 수 없다.\n' +
    '- <script>는 쓰지 마. 버튼 동작 같은 게 필요하면 따로 말해.\n' +
    '- 창은 섀도 DOM 안에 그려진다. CSS 변수는 :host에 선언하고, :root·body·html 선택자는 쓰지 마.\n' +
    '- 바깥을 <div class="win">으로 감싸면 지금 테마의 창 틀과 색을 그대로 쓴다. 다른 창과 겹치지 않게 내 창만의 클래스 이름을 붙여.\n' +
    '- 좁은 화면은 @media 대신 @container hb (max-width:540px) 로 처리해.\n' +
    '- 글자가 배경에 묻히지 않게 대비를 충분히 주고, 폰 화면(폭 360px)에서도 깨지지 않게 해.\n\n' +
    '원하는 디자인: (여기에 적기)';
}
function typeName(t) { return (FTYPES.filter(function (x) { return x[0] === t; })[0] || ['', '글자'])[1]; }

/* ---------- status store: one snapshot per message, saved inside the chat file ----------
   message.extra.hb_sw = { h: hash of what produced it, st: state after this message, f: 1 = old-style full blocks,
                           o: manual corrections (block text), sw: swipe it belongs to }
   A snapshot is trusted while its hash matches, so deleting other messages never disturbs it; editing a message
   recomputes it and everything after it. */
var SKEY = 'hb_sw', MARK = 'hb_sw_state';
var ownMemo = new WeakMap(), syncedId = null, syncedLen = -1, saveT = 0;
function chatIdOf(c) { return c.chatId || (c.getCurrentChatId && c.getCurrentChatId()) || ''; }
function isUserMes(m) { return !!(m.is_user || m.user); }
/* the blocks an AI message adds to the totals (remembered until its text changes): <status> bodies as they are,
   blocks of a tracked custom window as "\u0003tag\u0003body" (so a chat without them hashes exactly as before) */
var TAGMARK = '\u0003';
function ownOf(m) {
  var mes = m.mes || '', c = ownMemo.get(m), tags = TRACK.tags, sig = tags.join();
  if (c && c.mes === mes && c.sig === sig) return c.own;
  var own = [];
  if (!isUserMes(m)) {
    if (!tags.length) own = HB.S.blocks(mes);
    else HB.S.tagged(mes, ['status'].concat(tags)).forEach(function (b) { own.push(b[0] === 'status' ? b[1] : TAGMARK + b[0] + TAGMARK + b[1]); });
  }
  c = { mes: mes, sig: sig, own: own };
  ownMemo.set(m, c);
  return c.own;
}
/* which window a stored block belongs to, and its body */
function ownTag(s) { if (s.charAt(0) !== TAGMARK) return ['status', s]; var i = s.indexOf(TAGMARK, 1); return [s.slice(1, i), s.slice(i + 1)]; }
function applyOwn(st, s, full) {
  var b = ownTag(s);
  if (b[0] === 'status') return HB.S.apply(st, b[1], full);
  var out = {}; Object.keys(st).forEach(function (k) { out[k] = st[k]; });
  out['@' + b[0]] = HB.S.apply(st['@' + b[0]] || {}, b[1], false, TRACK.types[b[0]] || {});
  return out;
}
function snapOf(m) { return m.extra && m.extra[SKEY] ? m.extra[SKEY] : null; }
/* TRACK.sig (custom field types) is part of the hash only when a pack defines any, so plain chats keep their old hashes */
function sigOf(own, o, full) { return HB.S.hash((full ? 'F' : 'D') + own.join('\u0001') + '\u0002' + (o || '') + (TRACK.sig ? '\u0004' + TRACK.sig : '')); }
/* upto = stop after the upto-th block of window "tag" (default status); corrections count only when every block was applied */
function foldMes(base, own, o, full, upto, tag) {
  var st = base, seen = -1, last = -1;
  tag = tag || 'status';
  for (var j = 0; j < own.length; j++) {
    st = applyOwn(st, own[j], full); last = j;
    if (upto != null && ownTag(own[j])[0] === tag && ++seen === upto) break;
  }
  if (o && last === own.length - 1) st = HB.S.apply(st, o, true);
  return st;
}
function queueChatSave() {
  var id = chatIdOf(C());
  clearTimeout(saveT);
  saveT = setTimeout(function tick() {
    var c = C();
    if (HB.dead || chatIdOf(c) !== id) return;
    if (generating()) { saveT = setTimeout(tick, 2000); return; }   /* SillyTavern saves at the end of a reply anyway */
    try { (c.saveChatDebounced || c.saveChat).call(c); } catch (e) { console.warn('[HB] 채팅 저장 실패', e); }
  }, 1500);
}
/* walk the chat once, reuse every snapshot that is still valid, compute the rest. Returns the latest state. */
function syncStates() {
  var c = C(), chat = c.chat || [], meta = c.chatMetadata, legacy = !(meta && meta[MARK]);
  var st = {}, dirty = false, wrote = false, any = false;
  for (var i = 0; i < chat.length; i++) {
    var m = chat[i], own = ownOf(m), sn = snapOf(m), o = sn && sn.o || '';
    if (o && sn.sw != null && m.swipe_id != null && sn.sw !== m.swipe_id) o = '';   /* corrections belong to the swipe they were made on */
    if (!own.length && !o) { if (sn) { delete m.extra[SKEY]; dirty = wrote = true; } continue; }
    any = true;
    var full = sn ? !!sn.f : legacy, h = sigOf(own, o, full);
    if (sn && sn.h === h && sn.st && !dirty) { st = sn.st; continue; }
    st = foldMes(st, own, o, full);
    var next = { h: h, st: st, f: full ? 1 : 0 };
    if (o) next.o = o;
    if (m.swipe_id != null) next.sw = m.swipe_id;
    (m.extra = m.extra || {})[SKEY] = next;
    dirty = wrote = true;
  }
  if (any && legacy && meta) { meta[MARK] = 1; saveMeta(); }
  if (wrote) queueChatSave();
  syncedId = chatIdOf(c); syncedLen = chat.length;
  return st;
}
/* drawing needs the snapshots of earlier messages: catch up when the chat or its length changed since the last pass */
function ensureSynced() { var c = C(); if (syncedId !== chatIdOf(c) || syncedLen !== (c.chat || []).length) syncStates(); }
/* the state right before message i (the nearest earlier snapshot) */
function stateBefore(i) {
  var chat = C().chat || [];
  for (var j = Math.min(i, chat.length) - 1; j >= 0; j--) { var sn = snapOf(chat[j]); if (sn && sn.st) return sn.st; }
  return {};
}
/* the full state to draw for the k-th block of window "tag" (default status) in message i, or null when unknown */
function viewState(i, k, tag) {
  ensureSynced();
  var c = C(), m = (c.chat || [])[i];
  if (!m) return null;
  var own = ownOf(m), sn = snapOf(m);
  tag = tag || 'status';
  if (k >= own.filter(function (s) { return ownTag(s)[0] === tag; }).length) return null;
  return foldMes(stateBefore(i), own, sn && sn.o, sn ? !!sn.f : !(c.chatMetadata && c.chatMetadata[MARK]), k, tag);
}
/* the state the AI should be told. A swipe / regenerate / continue redoes the last reply, so that reply is left out */
function currentState(type) {
  var st = syncStates(), chat = C().chat || [], n = chat.length;
  if (n && /^(swipe|regenerate|continue)$/.test(type || '') && !isUserMes(chat[n - 1])) return stateBefore(n - 1);
  return st;
}
/* manual corrections: stored on the last message as block text, applied after its own blocks */
function saveCorrection(lines) {
  var chat = C().chat || [], m = chat[chat.length - 1];
  if (!m) return false;
  var sn = snapOf(m), map = {}, keys = [];
  HB.parse((sn && sn.o || '') + '\n' + lines.join('\n'))._l.forEach(function (kv) { if (!(kv[0] in map)) keys.push(kv[0]); map[kv[0]] = kv[1]; });
  var o = keys.map(function (k) { return k + ': ' + map[k]; }).join('\n');
  sn = (m.extra = m.extra || {})[SKEY] = sn || { h: '', st: null, f: (C().chatMetadata || {})[MARK] ? 0 : 1 };
  sn.o = o; sn.h = '';
  if (m.swipe_id != null) sn.sw = m.swipe_id;
  syncStates();
  return true;
}
/* ---------- translated display ----------
   A translation extension keeps the translated message in extra.display_text. The totals are computed from the
   original text, so the windows would show untranslated values. A translated block lines up with its original line
   by line; from those pairs a small dictionary is built and applied to a state right before it is drawn.
   Numbers are masked (#) on both sides, so "500円（お小遣い）" -> "#엔 (용돈)" still fits after the amount changes. */
var NUMS = /\d[\d,]*(?:\.\d+)?/g, trMemo = new WeakMap(), trDict = null, trKey = '';
function maskNum(s) { return String(s).replace(NUMS, '#'); }
function learnPair(out, a, b) {
  a = trimS(a); b = trimS(b);
  if (!a || !b || a === b) return;
  var ma = maskNum(a), mb = maskNum(b);
  if (ma !== mb && ma.split('#').length === mb.split('#').length) out.push([ma, mb]);
}
function pairsOf(mes, shown) {
  var tags = ['status'].concat(TRACK.tags), A = HB.S.tagged(mes, tags), B = HB.S.tagged(shown, tags), out = [];
  if (A.length !== B.length) return out;
  A.forEach(function (blk, n) {
    if (B[n][0] !== blk[0]) return;
    var da = HB.parse(blk[1])._l, db = HB.parse(B[n][1])._l, T = blk[0] === 'status' ? null : TRACK.types[blk[0]] || {};
    if (da.length !== db.length) return;
    da.forEach(function (kv, i) {
      var k = kv[0];
      if (db[i][0] !== k) return;
      if (!HB.S.isList(k, T)) { learnPair(out, kv[1], db[i][1]); return; }
      var ia = HB.S.items(kv[1]), ib = HB.S.items(db[i][1]);
      if (ia.length !== ib.length) return;
      ia.forEach(function (it, j) {
        var a = HB.S.unsign(it), b = HB.S.unsign(ib[j]);
        if (k === 'fx' || k === 'stat') { learnPair(out, a, b); return; }
        var fa = HB.fields(a), fb = HB.fields(b);
        if (fa.length === fb.length) fa.forEach(function (x, q) { learnPair(out, x, fb[q]); });
      });
    });
  });
  return out;
}
function translations() {
  var c = C(), chat = c.chat || [], miss = false, all = [];
  for (var i = 0; i < chat.length; i++) {
    var m = chat[i], shown = m.extra && m.extra.display_text;
    if (!shown || isUserMes(m)) continue;
    var memo = trMemo.get(m);
    if (!memo || memo.mes !== m.mes || memo.shown !== shown) { memo = { mes: m.mes, shown: shown, pairs: pairsOf(m.mes, shown) }; trMemo.set(m, memo); miss = true; }
    all.push(memo.pairs);
  }
  var key = chatIdOf(c) + ':' + chat.length + ':' + all.length;
  if (!trDict || miss || key !== trKey) {
    trDict = {}; trKey = key;
    all.forEach(function (ps) { ps.forEach(function (p) { trDict[p[0]] = p[1]; }); });
  }
  return trDict;
}
function trText(dict, s) {
  var t = dict[maskNum(s)];
  if (!t) return s;
  var nums = String(s).match(NUMS) || [], i = 0;
  return t.replace(/#/g, function () { return nums[i++]; });
}
/* a copy of the state with every value the chat has a translation for swapped in (drawing only) */
function translated(st) {
  var dict = translations(), out = {};
  if (!Object.keys(dict).length) return st;
  Object.keys(st).forEach(function (k) {
    var v = st[k];
    if (v && typeof v === 'object' && !Array.isArray(v)) { out[k] = v; return; }   /* a tracked window's totals: translated when that window is drawn */
    if (!Array.isArray(v)) { out[k] = trText(dict, v); return; }
    out[k] = v.map(function (it) {
      var sg = (it.match(HB.S.SIGN) || [''])[0], body = it.slice(sg.length);
      if (k === 'fx' || k === 'stat') return sg + trText(dict, body);
      return sg + HB.fields(body).map(function (f) { return trText(dict, f); }).join('|');
    });
  });
  return out;
}
function redrawStatus() { unrender(['status'].concat(TRACK.tags).map(function (k) { return '#chat .hb-host[data-hb="' + k + '"]'; }).join(',')); scanAll(); }

/* ---------- AI check: a model reads the recent story against the tracked status and lists what does not match ----------
   It can run on another connection profile (a cheaper model) so the main model is untouched. Nothing changes until
   the user picks the findings to apply; applied findings are stored as manual corrections. */
var AUDIT_MSGS = 6, AUDIT_CHARS = 2400;
function auditProfiles() {
  var c = C(), svc = c.ConnectionManagerRequestService, list = [];
  try { list = svc && svc.getSupportedProfiles ? svc.getSupportedProfiles() : []; } catch (e) { list = []; }
  return (list || []).map(function (p) { return { id: p.id, name: p.name }; });
}
function auditPrompt(st, keys) {
  var c = C(), chat = c.chat || [], parts = [], used = 0;
  for (var i = chat.length - 1; i >= 0 && used < AUDIT_MSGS; i--) {
    var m = chat[i], t = String(m.mes || '').replace(/<(system|noti|quest|profile|shop)>[\s\S]*?<\/\1>/gi, '').trim();
    if (!t) continue;
    if (t.length > AUDIT_CHARS) t = '…' + t.slice(-AUDIT_CHARS);
    parts.unshift((isUserMes(m) ? '[{{user}}]\n' : '[Story]\n') + t);
    used++;
  }
  var lang = (WORDS[CF.lang] || WORDS.auto).lang;
  var sys = 'You check a game status tracker against the story. Find values in [Tracked Status] that contradict what happened in [Recent Story]: ' +
    'money or items gained, spent or used but not recorded, damage or healing missed, wrong time or place, quests or effects that ended or began, and arithmetic slips. ' +
    'Each <status> block inside the story lists the changes recorded for that reply. Only report clear contradictions, never guesses or style.\n' +
    'Output one line per wrong value and nothing else:\nkey: corrected value // short reason in Korean\n' +
    'For list keys (fx, stat, inv, skill, titles, quest) write the whole corrected list, items separated by ";" and fields by "|", in the same form as the tracked value. ' +
    'Keep values in ' + lang + '. If nothing is wrong, output exactly: OK';
  var user = '[Tracked Status]\n' + HB.S.text(st, keys) + '\n\n[Recent Story]\n' + parts.join('\n\n');
  try { if (c.substituteParams) { sys = c.substituteParams(sys); user = c.substituteParams(user); } } catch (e) {}
  return { sys: sys, user: user };
}
/* -> Promise<string> (the model's reply) */
function auditAsk(sys, user) {
  var c = C(), pid = CF.adv.checkProfile, svc = c.ConnectionManagerRequestService;
  if (pid && svc && svc.sendRequest) {
    return Promise.resolve(svc.sendRequest(pid, [{ role: 'system', content: sys }, { role: 'user', content: user }], 1200)).then(function (r) {
      return typeof r === 'string' ? r : r && (r.content || r.message || '') || '';
    });
  }
  if (!c.generateRaw) return Promise.reject(new Error('이 실리태번 버전에서는 점검을 쓸 수 없습니다.'));
  return Promise.resolve(c.generateRaw({ prompt: user, systemPrompt: sys, responseLength: 1200 }));
}
/* model reply -> [{ k, v, why, old }] for keys that exist and really change */
function auditParse(reply, st, keys) {
  var out = [], seen = {};
  String(reply || '').replace(/```[a-z]*|```/gi, '').split(/\r?\n/).forEach(function (l) {
    var m = l.match(/^\s*[-*]?\s*([A-Za-z_]+)\s*[:：]\s*(.+?)\s*(?:\/\/\s*(.*))?$/);
    if (!m) return;
    var k = m[1].toLowerCase(), v = trimS(m[2]);
    if (seen[k] || (keys.indexOf(k) < 0 && !(k in st))) return;
    var old = HB.S.text(st, [k]).replace(/^[^:]+:\s*/, '');
    if (!v || v === old) return;
    seen[k] = 1;
    out.push({ k: k, v: v, why: trimS(m[3] || ''), old: old });
  });
  return out;
}
function runAudit() {
  var st = currentState(), keys = statusKeys(EF);
  if (!Object.keys(st).length) return Promise.reject(new Error('아직 기록된 상태가 없습니다.'));
  var p = auditPrompt(st, keys);
  return auditAsk(p.sys, p.user).then(function (reply) {
    if (/^\s*OK\s*$/i.test(reply || '')) return [];
    return auditParse(reply, st, keys);
  });
}

/* ---------- settings window (light, readable, separate from the window design) ---------- */
var UI_CSS = [
'#hbs-ov{position:fixed;top:0;left:0;width:100vw;height:100vh;height:100dvh;margin:0;z-index:40000;background:rgba(15,23,32,.45);display:flex;align-items:center;justify-content:center;padding:12px;box-sizing:border-box;font:14px/1.55 "Pretendard","IBM Plex Sans KR","Apple SD Gothic Neo","Malgun Gothic",system-ui,sans-serif;color:#1d2530;text-align:left;text-shadow:none}',
'#hbs-ov *{box-sizing:border-box;text-shadow:none}',
'#hbs-ov [hidden]{display:none!important}',
'#hbs-ov .hbs{--b:#e3e7ec;--b2:#cdd5de;--bg:#ffffff;--bg2:#f6f8fa;--bg3:#eef2f6;--tx:#1d2530;--dim:#5b6776;--ac:#1d86cf;--ac2:#0e6aa8;--acs:#e5f2fb;--warn:#d4334f;width:min(820px,100%);height:min(820px,100%);background:var(--bg);color:var(--tx);border:1px solid var(--b2);border-radius:12px;box-shadow:0 24px 70px rgba(10,20,35,.35);display:flex;flex-direction:column;overflow:hidden}',
'#hbs-ov .hbs-hd{display:flex;flex-direction:column;gap:10px;padding:14px 18px 0;border-bottom:1px solid var(--b);background:var(--bg)}',
'#hbs-ov .hbs-top{display:flex;align-items:center;gap:12px}',
'#hbs-ov .hbs-top h2{margin:0;font-size:16px;font-weight:700;color:var(--tx);letter-spacing:0}',
'#hbs-ov .hbs-sp{flex:1}',
'#hbs-ov .hbs-saved{font-size:12px;color:var(--ac2);opacity:0;transition:opacity .25s}',
'#hbs-ov .hbs-saved.on{opacity:1}',
'#hbs-ov .hbs-x{width:32px;height:32px;display:grid;place-items:center;border:0;border-radius:8px;background:none;color:var(--dim);cursor:pointer;font-size:20px;line-height:1;padding:0}',
'#hbs-ov .hbs-x:hover{background:var(--bg3);color:var(--tx)}',
'#hbs-ov .hbs-link{display:flex;flex-direction:column;gap:6px}',
'#hbs-ov .hbs-link .hbs-lnote{margin:0;padding:0;border:0;background:none;display:flex;align-items:center;flex-wrap:wrap;gap:2px 7px;font-size:12.5px;color:var(--dim);line-height:1.5}',
'#hbs-ov .hbs-link .hbs-lnote i{width:7px;height:7px;border-radius:50%;background:#aab4bf;flex:none}',
'#hbs-ov .hbs-link.on .hbs-lnote{color:var(--ac2)}',
'#hbs-ov .hbs-link.on .hbs-lnote i{background:#22a06b;box-shadow:0 0 0 3px rgba(34,160,107,.18)}',
'#hbs-ov .hbs-link .hbs-lnote .hbs-btn.ln{padding:0 2px;font-size:12.5px}',
'#hbs-ov .hbs-seg{display:flex;gap:2px;padding:3px;border-radius:10px;background:var(--bg3)}',
'#hbs-ov .hbs-seg button{flex:1;border:0;background:none;color:var(--dim);font:inherit;font-size:13px;font-weight:600;padding:7px 10px;cursor:pointer;white-space:nowrap;margin:0;border-radius:7px;transition:background .15s,color .15s}',
'#hbs-ov .hbs-seg button:hover{color:var(--tx)}',
'#hbs-ov .hbs-seg button[aria-pressed="true"]{background:#fff;color:var(--ac2);box-shadow:0 1px 3px rgba(20,35,55,.18)}',
'#hbs-ov .hbs-link.on .hbs-seg button[aria-pressed="true"]{background:var(--ac);color:#fff}',
'#hbs-ov .hbs-seg button:disabled{color:#a7b0bb;cursor:default}',
'#hbs-ov .hbs-tabs{display:flex;gap:4px;margin-bottom:-1px}',
'#hbs-ov .hbs-tabs button{border:0;border-bottom:2px solid transparent!important;background:none;color:var(--dim);font:inherit;font-size:14px;font-weight:500;padding:9px 12px;cursor:pointer;margin:0;border-radius:0}',
'#hbs-ov .hbs-tabs button:hover{color:var(--tx)}',
'#hbs-ov .hbs-tabs button[aria-selected="true"]{color:var(--ac2);border-bottom-color:var(--ac)!important;font-weight:700}',
'#hbs-ov .hbs-body{flex:1;min-height:0;overflow:auto;padding:18px 18px 32px;display:flex;flex-direction:column;gap:22px;background:var(--bg)}',
'#hbs-ov .hbs-sec{display:flex;flex-direction:column;gap:10px}',
'#hbs-ov .hbs-sec+.hbs-sec{padding-top:22px;border-top:1px solid var(--b)}',
'#hbs-ov .hbs-sec>h3{margin:0;font-size:15px;font-weight:700;color:var(--tx);display:flex;align-items:center;gap:4px 10px;flex-wrap:wrap;min-height:26px}',
'#hbs-ov .hbs-sec>h3 .hbs-btn.ln{font-size:12.5px;font-weight:600;padding:3px 6px}',
'#hbs-ov .hbs-sec>h3 small{font-weight:400;font-size:12.5px;color:var(--dim)}',
'#hbs-ov .hbs-sub{margin:0;font-size:13px;font-weight:600;color:var(--tx)}',
'#hbs-ov .hbs-help{margin:0;font-size:12.5px;color:var(--dim)}',
'#hbs-ov .hbs-row{display:flex;align-items:center;gap:12px;padding:12px 14px}',
'#hbs-ov .hbs-row .tx{flex:1;min-width:0;display:flex;flex-direction:column}',
'#hbs-ov .hbs-row .tx b{font-weight:600;font-size:14px;color:var(--tx)}',
'#hbs-ov .hbs-row .tx span{font-size:12.5px;color:var(--dim)}',
'#hbs-ov .hbs-card{border:1px solid var(--b);border-radius:10px;background:var(--bg);overflow:hidden}',
'#hbs-ov .hbs-card.off{background:var(--bg2)}',
'#hbs-ov .hbs-card>.hbs-opt{padding:12px 14px 14px;border-top:1px solid var(--b);display:flex;flex-direction:column;gap:12px}',
'#hbs-ov .hbs-prev{padding:12px;border-top:1px solid var(--b);background:linear-gradient(160deg,#2a3a4d,#16202c);overflow:hidden}',
'#hbs-ov .hbs-card.off .hbs-row .tx b{color:var(--dim)}',
'#hbs-ov .hbs-f{display:flex;flex-direction:column;gap:6px}',
'#hbs-ov .hbs-f>label,#hbs-ov .hbs-f>span.l{font-size:12.5px;color:var(--dim);font-weight:500}',
'#hbs-ov .hbs-sw{position:relative;flex:none;width:40px;height:24px;cursor:pointer;margin:0}',
'#hbs-ov .hbs-sw input{position:absolute;inset:0;opacity:0;margin:0;cursor:pointer;width:100%;height:100%}',
'#hbs-ov .hbs-sw i{position:absolute;inset:0;border-radius:12px;background:#c5ced8;transition:background .2s}',
'#hbs-ov .hbs-sw i::after{content:"";position:absolute;top:3px;left:3px;width:18px;height:18px;border-radius:50%;background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .2s}',
'#hbs-ov .hbs-sw input:checked+i{background:var(--ac)}',
'#hbs-ov .hbs-sw input:checked+i::after{transform:translateX(16px)}',
'#hbs-ov .hbs-sw input:focus-visible+i{outline:2px solid var(--ac);outline-offset:2px}',
'#hbs-ov .hbs-chips{display:flex;flex-wrap:wrap;gap:6px}',
'#hbs-ov .hbs-chip{border:1px solid var(--b2)!important;background:var(--bg);color:var(--tx);font:inherit;font-size:13px;padding:6px 12px;border-radius:999px;cursor:pointer;white-space:nowrap;margin:0}',
'#hbs-ov .hbs-chip:hover{border-color:var(--ac)!important}',
'#hbs-ov .hbs-chip[aria-pressed="true"]{background:var(--acs);border-color:var(--ac)!important;color:var(--ac2);font-weight:600}',
'#hbs-ov .hbs-ck{position:relative;display:inline-flex;align-items:center;gap:7px;border:1px solid var(--b2);background:var(--bg);color:var(--tx);font-size:13px;padding:6px 12px 6px 9px;border-radius:8px;cursor:pointer;user-select:none;white-space:nowrap;margin:0}',
'#hbs-ov .hbs-ck input{position:absolute;opacity:0;pointer-events:none;margin:0}',
'#hbs-ov .hbs-ck::before{content:"";width:15px;height:15px;border:1.5px solid #9aa6b3;border-radius:4px;flex:none;background:#fff}',
'#hbs-ov .hbs-ck:has(input:checked){border-color:var(--ac);background:var(--acs);color:var(--ac2);font-weight:600}',
'#hbs-ov .hbs-ck:has(input:checked)::before{border-color:var(--ac);background:var(--ac) url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23fff\' stroke-width=\'4\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpath d=\'M5 12.5l4.5 4.5L19 7.5\'/%3E%3C/svg%3E") center/11px no-repeat}',
'#hbs-ov .hbs-ck:has(input:focus-visible){outline:2px solid var(--ac);outline-offset:1px}',
'#hbs-ov .hbs-grp{display:grid;grid-template-columns:96px minmax(0,1fr);gap:8px 12px;align-items:start}',
'#hbs-ov .hbs-grp>span{font-size:12.5px;color:var(--dim);padding-top:7px}',
'#hbs-ov .hbs-in,#hbs-ov .hbs-ta,#hbs-ov .hbs-sel{width:100%;border:1px solid var(--b2)!important;background:#fff;color:var(--tx)!important;font:inherit;font-size:14px;padding:8px 10px;border-radius:8px;outline:none;margin:0;box-shadow:none}',
'#hbs-ov .hbs-in::placeholder,#hbs-ov .hbs-ta::placeholder{color:#97a2ae}',
'#hbs-ov .hbs-in:focus,#hbs-ov .hbs-ta:focus,#hbs-ov .hbs-sel:focus{border-color:var(--ac);box-shadow:0 0 0 3px rgba(29,134,207,.15)}',
'#hbs-ov .hbs-ta{resize:vertical;min-height:110px;line-height:1.6}',
'#hbs-ov .hbs-ta.mono{font-family:"JetBrains Mono",ui-monospace,Consolas,monospace;font-size:12.5px;min-height:260px;white-space:pre-wrap;word-break:break-word;color:#1d2530;background:#f6f8fa}',
'#hbs-ov .hbs-cnt{font-size:12px;color:var(--dim);margin-left:auto;font-weight:400}',
'#hbs-ov .hbs-btn{display:inline-flex;align-items:center;justify-content:center;gap:6px;border:1px solid var(--b2)!important;background:#fff;color:var(--tx);font:inherit;font-size:13px;font-weight:500;padding:7px 14px;border-radius:8px;cursor:pointer;white-space:nowrap;margin:0}',
'#hbs-ov .hbs-btn:hover{border-color:var(--ac)!important;color:var(--ac2)}',
'#hbs-ov .hbs-btn.pri{background:var(--ac);border-color:var(--ac)!important;color:#fff;font-weight:600}',
'#hbs-ov .hbs-btn.pri:hover{background:var(--ac2);border-color:var(--ac2)!important;color:#fff}',
'#hbs-ov .hbs-btn.dng:hover{border-color:var(--warn)!important;color:var(--warn)}',
'#hbs-ov .hbs-btn.sm{padding:4px 10px;font-size:12.5px}',
'#hbs-ov .hbs-btn.ln{border-color:transparent!important;background:none;color:var(--ac2);padding:4px 6px}',
'#hbs-ov .hbs-btn.ln:hover{text-decoration:underline}',
'#hbs-ov .hbs-btn:disabled{opacity:.45;cursor:default;pointer-events:none}',
'#hbs-ov .hbs-line{display:flex;flex-wrap:wrap;gap:8px;align-items:center}',
'#hbs-ov .hbs-line.nowrap{flex-wrap:nowrap}',
'#hbs-ov .hbs-line.nowrap .hbs-in{flex:1;min-width:0}',
'#hbs-ov .hbs-ps .bt{display:flex;gap:6px;flex-wrap:wrap}',
'#hbs-ov .hbs-acc{border:1px solid var(--b);border-radius:10px;overflow:hidden}',
'#hbs-ov .hbs-acc>button{display:flex;align-items:center;gap:10px;width:100%;border:0;background:var(--bg2);color:var(--tx);font:inherit;font-size:13.5px;font-weight:600;padding:11px 14px;cursor:pointer;text-align:left;margin:0;border-radius:0}',
'#hbs-ov .hbs-acc>button:hover{background:var(--bg3)}',
'#hbs-ov .hbs-acc>button small{font-weight:400;color:var(--dim);font-size:12.5px;flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}',
'#hbs-ov .hbs-acc>button svg{width:16px;height:16px;flex:none;color:var(--dim);transition:transform .2s}',
'#hbs-ov .hbs-acc>button[aria-expanded="true"] svg{transform:rotate(180deg)}',
'#hbs-ov .hbs-acc>div{padding:14px;border-top:1px solid var(--b);display:flex;flex-direction:column;gap:12px}',
'#hbs-ov .hbs-pslist{display:flex;flex-direction:column;border:1px solid var(--b);border-radius:10px;overflow:hidden}',
'#hbs-ov .hbs-ps{display:flex;align-items:center;gap:8px;padding:9px 12px;border-top:1px solid var(--b);flex-wrap:wrap}',
'#hbs-ov .hbs-ps:first-child{border-top:0}',
'#hbs-ov .hbs-ps .tx{flex:1 1 200px;min-width:0;display:flex;flex-direction:column}',
'#hbs-ov .hbs-ps .tx b{font-size:13.5px;font-weight:600;color:var(--tx)}',
'#hbs-ov .hbs-ps .tx span{font-size:12px;color:var(--dim);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}',
'#hbs-ov .hbs-themes{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:12px}',
'#hbs-ov .hbs-th{border:1px solid var(--b);border-radius:10px;background:var(--bg);overflow:hidden;display:flex;flex-direction:column}',
'#hbs-ov .hbs-th.on{border-color:var(--ac);box-shadow:0 0 0 1px var(--ac)}',
'#hbs-ov .hbs-th .pv{padding:12px;background:linear-gradient(160deg,#2a3a4d,#16202c);border-bottom:1px solid var(--b);pointer-events:none}',
'#hbs-ov .hbs-th .mt{padding:10px 12px;display:flex;flex-direction:column;gap:2px}',
'#hbs-ov .hbs-th .mt b{font-size:13.5px;display:flex;align-items:center;gap:8px;color:var(--tx)}',
'#hbs-ov .hbs-th .mt span{font-size:12px;color:var(--dim)}',
'#hbs-ov .hbs-tag{font-size:11px;font-weight:600;color:var(--ac2);background:var(--acs);border-radius:4px;padding:0 6px}',
'#hbs-ov .hbs-th .ac{display:flex;gap:6px;padding:0 12px 12px;flex-wrap:wrap}',
'#hbs-ov .hbs-empty{font-size:12.5px;color:var(--dim);padding:14px;border:1px dashed var(--b2);border-radius:10px;text-align:center}',
'#hbs-ov .hbs-note{font-size:12.5px;color:#7a5a12;background:#fff7e3;border:1px solid #f1dfae;border-radius:8px;padding:8px 12px}',
'#hbs-ov .hbs-num{width:84px}',
'#hbs-ov .hbs-line.nowrap .hbs-sel{flex:1;min-width:0}',
'#hbs-ov .hbs-audit{display:flex;flex-direction:column;border:1px solid var(--b);border-radius:10px;overflow:hidden}',
'#hbs-ov .hbs-afind{display:flex;gap:10px;align-items:flex-start;padding:10px 12px;border-top:1px solid var(--b);cursor:pointer;margin:0}',
'#hbs-ov .hbs-afind:first-child{border-top:0}',
'#hbs-ov .hbs-afind input{margin:3px 0 0;flex:none;width:16px;height:16px;accent-color:var(--ac)}',
'#hbs-ov .hbs-afind .tx{display:flex;flex-direction:column;gap:2px;min-width:0}',
'#hbs-ov .hbs-afind b{font-size:13px;font-weight:700;color:var(--tx)}',
'#hbs-ov .hbs-afind .chg{font-size:13px;color:var(--tx);word-break:break-word}',
'#hbs-ov .hbs-afind .chg s{color:var(--dim)}',
'#hbs-ov .hbs-afind .chg em{font-style:normal;font-weight:600;color:var(--ac2)}',
'#hbs-ov .hbs-afind .why{font-size:12.5px;color:var(--dim)}',
'#hbs-ov .hbs{position:relative}',
'#hbs-ov .hbs-ask{position:absolute;inset:0;z-index:5;display:flex;align-items:center;justify-content:center;padding:20px;background:rgba(15,23,32,.45)}',
'#hbs-ov .hbs-ask>div{width:min(340px,100%);background:#fff;border-radius:12px;padding:18px 18px 14px;box-shadow:0 16px 40px rgba(10,20,35,.3);display:flex;flex-direction:column;gap:14px}',
'#hbs-ov .hbs-ask p{margin:0;font-size:14px;font-weight:500;color:var(--tx);line-height:1.6;word-break:keep-all}',
'#hbs-ov .hbs-ask .hbs-line{justify-content:flex-end}',
'#hbs-ov .hbs-btn.dngp{background:var(--warn);border-color:var(--warn)!important}',
'#hbs-ov .hbs-btn.dngp:hover{background:#b82a44;border-color:#b82a44!important;color:#fff}',
'#hbs-ov .hbs-wchip{display:inline-flex;align-items:stretch;border:1px solid var(--b2);border-radius:999px;overflow:hidden;background:var(--bg)}',
'#hbs-ov .hbs-wchip button{border:0!important;background:none;color:var(--tx);font:inherit;font-size:13px;padding:6px 4px 6px 12px;cursor:pointer;margin:0;border-radius:0;white-space:nowrap;max-width:200px;overflow:hidden;text-overflow:ellipsis}',
'#hbs-ov .hbs-wchip button.x{padding:6px 10px 6px 4px;color:var(--dim);font-size:12.5px}',
'#hbs-ov .hbs-wchip button.x:hover{color:var(--warn)}',
'#hbs-ov .hbs-wchip[aria-pressed="true"]{background:var(--acs);border-color:var(--ac)}',
'#hbs-ov .hbs-wchip[aria-pressed="true"] button:first-child{color:var(--ac2);font-weight:600}',
'#hbs-ov .hbs-chips:empty{display:none}',
'#hbs-ov .hbs-mini{display:inline-flex;gap:2px;padding:2px;border-radius:8px;background:var(--bg3)}',
'#hbs-ov .hbs-mini button{border:0!important;background:none;color:var(--dim);font:inherit;font-size:12px;font-weight:600;padding:4px 10px;border-radius:6px;cursor:pointer;margin:0}',
'#hbs-ov .hbs-mini button[aria-pressed="true"]{background:#fff;color:var(--ac2);box-shadow:0 1px 2px rgba(20,35,55,.18)}',
'#hbs-ov .hbs-pvbar{display:flex;align-items:center;gap:8px;margin:-2px 0 10px}',
'#hbs-ov .hbs-pvbar .hbs-mini{background:rgba(255,255,255,.12)}',
'#hbs-ov .hbs-pvbar .hbs-mini button{color:#cfe3ef}',
'#hbs-ov .hbs-pvbar .hbs-mini button[aria-pressed="true"]{background:#fff;color:var(--ac2)}',
'#hbs-ov .hbs-pvtag{margin-left:auto;font-size:11.5px;color:#ffd58a}',
'#hbs-ov .hbs-pvbar .hbs-btn.ln{color:#9fd6ff;padding:2px 4px}',
'#hbs-ov textarea.hbs-code{display:block;width:100%;resize:vertical;outline:none;border-radius:0}',
'#hbs-ov textarea.hbs-code:focus{border-color:rgba(120,214,255,.6)}',
'#hbs-ov .hbs-code{margin:0;padding:10px 12px;font:12px/1.6 "JetBrains Mono",ui-monospace,Consolas,monospace;color:#d6ecf8!important;-webkit-text-fill-color:#d6ecf8;background:rgba(4,12,22,.55);border:1px solid rgba(120,214,255,.2)!important;white-space:pre-wrap;word-break:break-word;text-align:left;max-height:360px;overflow:auto}',
'#hbs-ov .hbs-stgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px 12px}',
/* pack editor */
'#hbs-ov .hbs-pk{display:flex;flex-direction:column;gap:12px;padding:12px 2px 6px}',
'#hbs-ov .hbs-fl{display:flex;flex-direction:column;gap:8px}',
'#hbs-ov .hbs-frow{display:grid;grid-template-columns:20px minmax(0,1fr) minmax(0,1fr) 84px 32px;gap:6px;align-items:center;padding-bottom:8px;border-bottom:1px dashed var(--b)}',
'#hbs-ov .hbs-frow .d{grid-column:2 / 5}',
'#hbs-ov .hbs-frow input[type=checkbox]{margin:0;width:16px;height:16px}',
'#hbs-ov .hbs-frow.bad .hbs-in[data-k$=".k"]{border-color:var(--warn)!important;background:#fff5f6}',
'#hbs-ov .hbs-in.sm,#hbs-ov .hbs-sel.sm{font-size:13px;padding:6px 8px}',
'#hbs-ov .hbs-btn.sm.dng{padding:5px 0}',
'#hbs-ov .hbs-help.warn{color:var(--warn)}',
'#hbs-ov textarea.hbs-ta.code{font-family:"JetBrains Mono",ui-monospace,Consolas,monospace;font-size:12px;line-height:1.5;min-height:90px;white-space:pre;overflow:auto;color:#1d2530!important;background:#f6f8fa}',
'#hbs-ov .hbs-f > label small,#hbs-ov .hbs-f > .l small{font-weight:400;color:var(--dim);margin-left:6px}',
'#hbs-ov .hbs-ta.hbs-stlist{min-height:0;font-size:13px;line-height:1.7;white-space:pre;overflow-x:auto}',
'#hbs-ov .hbs-guide{display:flex;flex-direction:column;gap:8px;font-size:13px;color:var(--tx);line-height:1.6}',
'#hbs-ov .hbs-guide h4{margin:6px 0 0;font-size:13.5px;font-weight:700;color:var(--tx)}',
'#hbs-ov .hbs-guide h4:first-child{margin-top:0}',
'#hbs-ov .hbs-guide p{margin:0}',
'#hbs-ov .hbs-guide ul{margin:0;padding-left:18px;display:flex;flex-direction:column;gap:3px}',
'#hbs-ov .hbs-guide code{font-family:"JetBrains Mono",ui-monospace,Consolas,monospace;font-size:12px;background:var(--bg3);color:var(--ac2);padding:1px 5px;border-radius:4px}',
'#hbs-ov .hbs-guide pre{margin:0;padding:10px 12px;background:#f6f8fa;border:1px solid var(--b);border-radius:8px;font-family:"JetBrains Mono",ui-monospace,Consolas,monospace;font-size:12px;line-height:1.55;color:var(--tx);white-space:pre-wrap;word-break:break-all;overflow:auto}',
'@media (max-width:640px){#hbs-ov{padding:0}#hbs-ov .hbs{width:100%;height:100%;border-radius:0;border:0}',
'#hbs-ov .hbs-hd{padding:10px 14px 0;gap:8px}#hbs-ov .hbs-body{padding:16px 14px 28px}#hbs-ov .hbs-grp{grid-template-columns:minmax(0,1fr)}#hbs-ov .hbs-grp>span{padding-top:0}',
'#hbs-ov .hbs-seg button{padding:7px 4px}#hbs-ov .hbs-prev{padding:10px}#hbs-ov .hbs-tabs button{padding:8px 12px}}',
'.hb-host{display:block}',
'.TH-render:has(> pre[data-hb-done]) > .TH-collapse-code-block-button{display:none!important}',
'.TH-render:has(> pre[data-hb-done]):not(:has(> .hb-host)){display:none!important}',
'.TH-render:has(> .hb-host){display:block!important}',
'#chat .hb-oldbar{display:flex;align-items:center;gap:6px;width:fit-content;margin:6px 0;padding:4px 12px 4px 8px;font:500 12px/1.4 "IBM Plex Sans KR","Apple SD Gothic Neo","Malgun Gothic",system-ui,sans-serif;color:#8fe9ff;background:rgba(6,20,36,.88);border:1px solid rgba(120,214,255,.35)!important;border-radius:2px;cursor:pointer;user-select:none;text-shadow:none;box-shadow:0 2px 6px rgba(0,0,0,.15)}',
'#chat .hb-oldbar:hover{border-color:rgba(120,214,255,.7)!important}',
'#chat .hb-oldbar svg{width:13px;height:13px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;transition:transform .2s}',
'#chat .hb-oldbar.open svg{transform:rotate(90deg)}'
].join('\n');

var FIELD_GROUPS = [
  ['시간 · 장소', [['date', '날짜'], ['time', '시간'], ['loc', '장소'], ['weather', '날씨']]],
  ['기본 정보', [['name', '이름'], ['lv', '레벨 · 랭크'],['role', '직업 · 신분'], ['title', '칭호'], ['exp', '경험치']]],
  ['게이지', [['hp', 'HP'], ['mp', 'MP'], ['fat', '피로도']]],
  ['상태', [['fx', '버프 · 디버프'], ['quest', '진행 중 퀘스트']]],
  ['재화', [['money', '소지금'], ['point', '포인트'], ['sp', '잔여 스탯 포인트']]],
  ['펼쳤을 때', [['stat', '능력치'], ['inv', '인벤토리'], ['skill', '스킬']]]
];
var FIELD_NAMES = {}; FIELD_GROUPS.forEach(function (g) { g[1].forEach(function (f) { FIELD_NAMES[f[0]] = f[1]; }); });
var FIELD_SETS = {
  min: ['time', 'loc', 'hp'],
  simple: ['date', 'time', 'loc', 'name', 'lv', 'hp', 'mp', 'fx', 'money'],
  full: Object.keys(DEF.status.fields)
};
var SAMPLE = {
  status: { date: '2026.11.10 (화)', time: '05:42', loc: '마포구 연남동', weather: '흐림, 3°C', name: '한도윤', lv: '12', role: '대학생', title: '첫 번째 플레이어', exp: '1,240/2,000',
    hp: '86/100', mp: '40/60', fat: '35', fx: '+집중 (32분); -수면 부족', quest: '편의점 강도를 제압하라|00:14:52', money: '128,400원', point: '3,250', sp: '3',
    stat: null, inv: '집중의 반지|희귀|장착; 하급 회복 포션|일반|2; 녹슨 열쇠|퀘스트|1', skill: '관찰안|2|액티브|MP 5|대상의 인물 정보를 열람한다; 위기 감지|1|패시브|상시|반경 10m 안의 적의를 감지한다' },
  system: 'type: notice\ntext: 플레이어의 각성이 확인되었습니다.\nsub: 지금부터 [시스템]이 플레이어를 보조합니다.',
  sys: {
    notice: 'type: notice\ntext: 플레이어의 각성이 확인되었습니다.\nsub: 지금부터 [시스템]이 플레이어를 보조합니다.',
    talk: 'type: talk\ntext: 지금 그걸 저한테 물어보시는 거예요? 진심으로?\nsub: 답변: 해당 정보는 레벨 5부터 열람할 수 있습니다.',
    warn: 'type: warn\ntext: 반경 10m 안에서 적의가 감지되었습니다.\nsub: 즉시 자리를 피하십시오.',
    error: 'type: error\ntext: 플레이어의 사망 예정일: ████년 ██월\nlog: 기록 열람|FAIL\nlog: 권한 확인|OK',
    levelup: 'type: levelup\ntext: LV.12 → LV.13\nsub: 모든 능력치 +1',
    rankup: 'type: levelup\ntext: RANK C → C+\nsub: 모든 능력치 +1'
  },
  noti: 'exp: 경험치 획득|+120\nskill: 스킬 획득 · 위기 감지 Lv.1\naff: 윤하린 호감도|+3',
  quest: 'type: 긴급\ntitle: 편의점 강도를 제압하라\ndesc: 흉기를 든 남성이 직원을 위협하고 있습니다.\ntime: 00:14:52|49\ngoal: 인질의 안전 확보 1/1; 범인 무력화 0/1\nreward: EXP +500; 칭호 [동네 영웅]\npenalty: 최대 HP −30% (24시간)',
  shop: 'point: 3,250\nitem: 하급 회복 포션|일반|200|HP를 30% 회복한다|재고 5\nitem: 스킬북 · 은신|영웅|3,000|사용 시 스킬 [은신 Lv.1] 습득|재고 1\nrefresh: 18:17:43'
};
function sampleStatus(c) {
  var f = c.status.fields, grades = ['C', 'B', 'C', 'B+', 'A', 'F', 'D', 'E'], vals = [24, 31, 22, 35, 48, 7, 15, 11];
  return Object.keys(f).filter(function (k) { return f[k]; }).map(function (k) {
    if (k === 'stat') return 'stat: ' + names(c.status.stats).map(function (n, i) { return n + ' ' + vals[i % 8] + ' ' + grades[i % 8]; }).join('; ');
    if (c.status.grow === 'rank') { if (k === 'lv') return 'rank: C+'; if (k === 'exp') return 'exp: 62%'; }
    if (k === 'title') return 'title: ' + SAMPLE.status.title + '\ntitles: 첫 번째 플레이어|모든 능력치 +1; 편의점의 수호자|야간 피로 감소';
    return k + ': ' + SAMPLE.status[k];
  }).join('\n');
}
function sampleProfile(c) {
  var g = ['D', 'C+', 'S', 'A+', 'B', 'A'], st = names(c.profile.stats).map(function (n, i) { return n + ' ' + g[i % 6]; });
  if (c.profile.uniq) st.push('*관찰력 A');
  return 'name: 윤하린\nrank: A\ninfo: 24세 · 대학원생 · 소속 미상\ntag: 거짓말에 서툼' + (st.length ? '\nstat: ' + st.join('; ') : '') +
    (c.profile.aff ? '\naff: 42|관심' : '') + (c.profile.mind ? '\nmind: 저 사람, 아까부터 허공만 보고 있어.' : '');
}
function download(name, blob) {
  try {
    var a = D.createElement('a'); a.href = P.URL.createObjectURL(blob); a.download = name; D.body.appendChild(a); a.click();
    setTimeout(function () { P.URL.revokeObjectURL(a.href); a.remove(); }, 1500);
  } catch (e) { toast('내려받기에 실패했습니다: ' + e.message, 'error'); }
}

function exportTheme(id) {
  if (getTheme(id).pack) { exportPack(getTheme(id)); return; }
  var t = getTheme(id), meta = { id: t.builtin ? t.id + '-copy' : t.id, name: t.builtin ? t.name + ' (복사본)' : t.name, author: t.author || '', version: t.version || '1.0', description: t.description || '', fonts: t.fonts || [] };
  if (t.extends) meta.extends = t.extends;
  var files = { 'theme.json': JSON.stringify(meta, null, 2), 'theme.css': t.css || '' };
  if (t.js) files['theme.js'] = t.js;
  download('theme-' + meta.id + '.zip', ZIP.write(files));
}
function importTheme(file) {
  return file.arrayBuffer().then(ZIP.read).then(function (files) {
    function find(n) { var k = Object.keys(files).filter(function (p) { return p.split('/').pop().toLowerCase() === n && !/^__MACOSX/.test(p); })[0]; return k ? ZIP.text(files[k]) : null; }
    var mj = find('theme.json'), css = find('theme.css'), js = find('theme.js');
    if (!mj || css == null) throw new Error('theme.json 또는 theme.css가 없습니다.');
    var m = JSON.parse(mj.replace(/^﻿/, ''));
    var id = String(m.id || '').toLowerCase().replace(/[^a-z0-9-]/g, '-').replace(/^-+|-+$/g, '');
    if (!id) throw new Error('theme.json에 id가 없습니다.');
    if (BUILTIN[id]) throw new Error('"' + id + '"는 기본 테마의 id입니다. theme.json의 id를 바꿔 주세요.');
    if (m.extends && !BUILTIN[m.extends] && !S.themes[m.extends]) throw new Error('바탕 테마 "' + m.extends + '"가 없습니다. 먼저 그 테마를 불러오세요.');
    var fonts = Array.isArray(m.fonts) ? m.fonts.filter(function (u) { return /^https:\/\//.test(u); }) : [];
    css = css.replace(/@import\s+(?:url\()?\s*["']?([^"')\s;]+)["']?\s*\)?[^;]*;/gi, function (all, u) { if (/^https:\/\//.test(u)) fonts.push(u); return ''; });
    var update = !!S.themes[id];
    S.themes[id] = { id: id, name: String(m.name || id), author: String(m.author || ''), version: String(m.version || ''), description: String(m.description || ''), fonts: fonts, css: css };
    if (m.extends) S.themes[id].extends = String(m.extends);
    if (js) S.themes[id].js = js;
    /* a custom pack: its windows, fields and window files (windows/<name>.html / .css) */
    if (m.pack) {
      S.themes[id].win = m.win; S.themes[id].cw = m.cw;
      normPack(S.themes[id]);
      packFiles(S.themes[id], function (n) {
        var k = Object.keys(files).filter(function (p) { return !/^__MACOSX/.test(p) && ('/' + p.toLowerCase()).slice(-(n.length + 1)) === '/' + n; })[0];
        return k ? ZIP.text(files[k]) : '';
      });
      S.themes[id].rev = (update && S.themes[id].rev | 0) + 1;
    }
    return { id: id, name: S.themes[id].name, update: update };
  });
}
var ui = { tab: 'main', el: null, savedT: 0, acc: {}, dirty: false, prevMode: {}, audit: null };
var CHEV = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>';
function h(s) { return HB.esc(s); }
/* a pack edit: its windows are redrawn on the next apply */
function packBump(path) { var p = curPack(); if (p && String(path).charAt(0) === '#') p.rev = (p.rev | 0) + 1; }
/* "@name" = a device-wide choice kept in S.ui instead of the current chat's settings; "#name" = the current custom pack */
function getPath(o, p) { if (p.charAt(0) === '@') { o = S.ui; p = p.slice(1); } else if (p.charAt(0) === '#') { o = curPack(); p = p.slice(1); } return p.split('.').reduce(function (a, k) { return a == null ? a : a[k]; }, o); }
function setPath(o, p, v) { if (p.charAt(0) === '@') { o = S.ui; p = p.slice(1); } else if (p.charAt(0) === '#') { o = curPack(); p = p.slice(1); } var ks = p.split('.'), last = ks.pop(), t = ks.reduce(function (a, k) { return a[k]; }, o); t[last] = v; }
function sw(path) { return '<label class="hbs-sw"><input type="checkbox" data-k="' + path + '"' + (getPath(CF, path) ? ' checked' : '') + '><i></i></label>'; }
function chip(path, val, label) { return '<button type="button" class="hbs-chip" data-set="' + path + '" data-v="' + h(val) + '" aria-pressed="' + (String(getPath(CF, path)) === String(val)) + '">' + h(label) + '</button>'; }
function ck(path, label) { return '<label class="hbs-ck"><input type="checkbox" data-k="' + path + '"' + (getPath(CF, path) ? ' checked' : '') + '>' + h(label) + '</label>'; }
function row(path, title, desc) { return '<div class="hbs-row"><div class="tx"><b>' + title + '</b><span>' + desc + '</span></div>' + sw(path) + '</div>'; }
function acc(id, title, summary, inner) {
  var open = !!ui.acc[id];
  return '<div class="hbs-acc"><button type="button" data-acc="' + id + '" aria-expanded="' + open + '">' + h(title) + '<small>' + h(summary) + '</small>' + CHEV + '</button>' +
    '<div' + (open ? '' : ' hidden') + '>' + inner + '</div></div>';
}
/* a window card: switch, options, and a live preview drawn with the current design */
function card(kind, title, desc, opts) {
  var on = !!CF[kind].on;
  /* a switched-off window shows only its row: no options, no preview */
  return '<div class="hbs-card' + (on ? '' : ' off') + '">' + row(kind + '.on', title, desc) + (on && opts ? '<div class="hbs-opt">' + opts + '</div>' : '') +
    (on ? '<div class="hbs-prev" data-prev="' + kind + '"></div>' : '') + '</div>';
}
function presetSummary(p) {
  var c = merge(DEF, p), on = KINDS.filter(function (k) { return c[k].on; }).length;
  return (PERSONA[c.persona] || PERSONA.neutral)[0] + ' · 창 ' + on + '종 · ' + getTheme(c.theme).name + (trimS(c.world) ? ' · ' + trimS(c.world).slice(0, 30) + (trimS(c.world).length > 30 ? '…' : '') : '');
}

var STATE_LABEL = { date: '날짜', time: '시간', loc: '장소', weather: '날씨', name: '이름', lv: '레벨', rank: '랭크', role: '직업 · 신분', title: '장착 칭호', titles: '보유 칭호', exp: '경험치',
  hp: 'HP', mp: 'MP', fat: '피로도', fx: '버프 · 디버프', quest: '진행 중 퀘스트', money: '소지금', point: '포인트', sp: '잔여 스탯 포인트', stat: '능력치', inv: '인벤토리', skill: '스킬' };
var STATE_HINT = { fx: '+버프 (남은 시간) / -디버프', quest: '이름|남은 시간', titles: '칭호|효과', stat: '이름 수치 등급', inv: '이름|희귀도|수량', skill: '이름|레벨|종류|비용|효과' };
/* AI check: pick a model, run, then choose which findings to apply */
function auditSection(c) {
  var profs = auditProfiles(), sel = c.adv.checkProfile, busy = ui.audit === 'busy', res = Array.isArray(ui.audit) ? ui.audit : null;
  var html = '<div class="hbs-sec"><h3>AI 점검</h3><p class="hbs-help">최근 응답 ' + AUDIT_MSGS + '개를 읽고 상태와 맞지 않는 값을 찾습니다. 누를 때마다 요청이 한 번 나갑니다.</p>' +
    '<div class="hbs-line nowrap"><select class="hbs-sel" data-k="adv.checkProfile" aria-label="점검할 모델"><option value="">지금 연결된 모델</option>' +
    profs.map(function (p) { return '<option value="' + h(p.id) + '"' + (p.id === sel ? ' selected' : '') + '>' + h(p.name) + '</option>'; }).join('') + '</select>' +
    '<button type="button" class="hbs-btn pri" data-act="audit"' + (busy ? ' disabled' : '') + '>' + (busy ? '점검 중…' : '점검하기') + '</button></div>';
  if (res && !res.length) html += '<div class="hbs-empty">맞지 않는 값을 찾지 못했습니다.</div>';
  if (res && res.length) {
    html += '<div class="hbs-audit">' + res.map(function (r, i) {
      return '<label class="hbs-afind"><input type="checkbox" data-afind="' + i + '" checked><span class="tx"><b>' + h(STATE_LABEL[r.k] || r.k) + '</b>' +
        '<span class="chg"><s>' + h(r.old || '없음') + '</s> → <em>' + h(r.v) + '</em></span>' + (r.why ? '<span class="why">' + h(r.why) + '</span>' : '') + '</span></label>';
    }).join('') + '</div><div class="hbs-line" style="justify-content:flex-end"><button type="button" class="hbs-btn" data-act="audit-clear">닫기</button><button type="button" class="hbs-btn pri" data-act="audit-apply">선택한 항목 적용</button></div>';
  }
  return html + '</div>';
}
function worldChips(c) {
  var ks = Object.keys(S.worlds);
  return '<div class="hbs-chips">' + ks.map(function (k) {
    return '<span class="hbs-wchip" aria-pressed="' + (S.worlds[k] === c.world) + '"><button type="button" data-act="w-use" data-id="' + h(k) + '">' + h(k) + '</button><button type="button" class="x" data-act="w-del" data-id="' + h(k) + '" aria-label="삭제">×</button></span>';
  }).join('') + '</div>' +
    '<div class="hbs-line nowrap"><input class="hbs-in" id="hbs-wname" placeholder="이 내용의 이름"><button type="button" class="hbs-btn" data-act="w-save">세계관 저장</button></div>';
}
/* ---- custom pack editor (custom tab, shown while the chat uses a pack) ---- */
function fieldRows(path, list, kind) {
  var own = kind ? OWN_KEYS[kind] || [] : [], seen = {};
  return '<div class="hbs-fl">' + list.map(function (f, j) {
    var p = path + '.' + j, bad = !KEY_RE.test(f.k) || own.indexOf(f.k) > -1 || seen[f.k];
    seen[f.k] = 1;
    return '<div class="hbs-frow' + (bad ? ' bad' : '') + '"><input type="checkbox" data-k="' + p + '.on"' + (f.on ? ' checked' : '') + ' aria-label="켜기">' +
      '<input class="hbs-in sm" data-k="' + p + '.k" value="' + h(f.k) + '" placeholder="키 (영문)" aria-label="키">' +
      '<input class="hbs-in sm" data-k="' + p + '.label" value="' + h(f.label) + '" placeholder="표시 이름" aria-label="표시 이름">' +
      '<select class="hbs-sel sm" data-k="' + p + '.type" aria-label="종류">' + FTYPES.map(function (x) { return '<option value="' + x[0] + '"' + (f.type === x[0] ? ' selected' : '') + '>' + x[1] + '</option>'; }).join('') + '</select>' +
      '<button type="button" class="hbs-btn sm dng" data-act="pk-fdel" data-path="' + path + '" data-i="' + j + '" aria-label="항목 삭제">×</button>' +
      '<input class="hbs-in sm d" data-k="' + p + '.desc" value="' + h(f.desc) + '" placeholder="AI에게 줄 설명 (영어 권장, 예: corruption level of the soul)" aria-label="AI 설명"></div>';
  }).join('') + (list.some(function (f, j) { return !KEY_RE.test(f.k) || own.indexOf(f.k) > -1; }) || Object.keys(seen).length < list.length ? '<p class="hbs-help warn">빨간 칸의 키를 확인하세요. 영문 소문자로 시작하고, 기본 항목·다른 항목과 겹치면 안 됩니다.</p>' : '') +
    '</div><button type="button" class="hbs-btn sm" data-act="pk-fadd" data-path="' + path + '">+ 항목</button>';
}
function designRows(path, hasDefault) {
  return '<div class="hbs-f"><label>HTML 틀</label><textarea class="hbs-ta code" data-k="' + path + '.html" spellcheck="false" placeholder="' + (hasDefault ? '비워 두면 기본 디자인' : '비워 두면 기본 틀') + '"></textarea></div>' +
    '<div class="hbs-f"><label>CSS</label><textarea class="hbs-ta code" data-k="' + path + '.css" spellcheck="false" placeholder="이 창에만 쓰는 CSS"></textarea></div>';
}
function winEditor(p, k) {
  var w = p.win[k], base = '#win.' + k, ex = w.extra.length, inner = row(base + '.on', '켜기', WIN_NAME[k] + '을 씁니다.');
  if (k === 'status') {
    inner += '<div class="hbs-f"><span class="l">성장 표시</span><div class="hbs-chips">' + chip(base + '.grow', 'lv', '레벨 · 경험치') + chip(base + '.grow', 'rank', '랭크 · 진행도') + '</div></div>' +
      '<div class="hbs-f"><span class="l">기본 항목</span><div class="hbs-grp">' + FIELD_GROUPS.map(function (g) { return '<span>' + g[0] + '</span><div class="hbs-chips">' + g[1].map(function (x) { return ck(base + '.fields.' + x[0], x[1]); }).join('') + '</div>'; }).join('') + '</div></div>' +
      '<div class="hbs-f"><label>능력치 이름 (쉼표로 구분)</label><input class="hbs-in" data-k="' + base + '.stats" value="' + h(w.stats) + '"></div>';
  }
  if (k === 'profile') {
    inner += '<div class="hbs-f"><label>공통 능력치 (쉼표로 구분)</label><input class="hbs-in" data-k="' + base + '.stats" value="' + h(w.stats) + '"></div>' +
      '<div class="hbs-chips">' + ck(base + '.uniq', '인물별 고유 능력치') + ck(base + '.aff', '호감도') + ck(base + '.mind', '현재 생각') + '</div>';
  }
  inner += '<div class="hbs-f"><label>' + (k === 'status' ? '중간에 다시 띄울 때' : '언제 띄울지') + ' <small>비우면 기본 문장</small></label><textarea class="hbs-ta" style="min-height:60px" data-k="' + base + '.when" placeholder="' + h(WHEN[k]) + '"></textarea></div>' +
    '<div class="hbs-f"><span class="l">추가 항목</span>' + fieldRows(base + '.extra', w.extra, k) + '</div>' +
    designRows(base, true) +
    '<div class="hbs-line"><button type="button" class="hbs-btn sm" data-act="pk-ai" data-kind="' + k + '">AI 요청문 복사</button></div>' +
    '<div class="hbs-prev" data-prev="' + k + '"></div>';
  return acc('pk-' + k, WIN_NAME[k], (w.on ? '켜짐' : '꺼짐') + (ex ? ' · 추가 항목 ' + ex : '') + (trimS(w.html) ? ' · 직접 디자인' : ''), '<div class="hbs-pk">' + inner + '</div>');
}
function cwEditor(p, w, i) {
  var base = '#cw.' + i;
  var inner = row(base + '.on', '켜기', '태그 &lt;' + h(w.tag) + '&gt;') +
    '<div class="hbs-f"><label>이름</label><input class="hbs-in" data-k="' + base + '.name" value="' + h(w.name) + '"></div>' +
    '<div class="hbs-f"><span class="l">기억 방식</span><div class="hbs-chips">' + chip(base + '.mode', 'snap', '그때그때') + chip(base + '.mode', 'track', '누적') + '</div>' +
    '<p class="hbs-help">' + (w.mode === 'track' ? '누적: AI는 바뀐 값만 적고, 확장이 더해서 기억합니다. 길드 등급처럼 계속 이어지는 값에 씁니다.' : '그때그때: 나올 때마다 AI가 전부 적습니다. 각성 알림처럼 한 번 보여 주는 창에 씁니다.') + '</p></div>' +
    '<div class="hbs-f"><label>언제 띄울지 <small>비우면 기본 문장</small></label><textarea class="hbs-ta" style="min-height:60px" data-k="' + base + '.when" placeholder="' + h(WHEN[w.mode === 'track' ? 'track' : 'snap']) + '"></textarea></div>' +
    '<div class="hbs-f"><span class="l">항목</span>' + fieldRows(base + '.fields', w.fields, null) + '</div>' +
    designRows(base, false) +
    '<div class="hbs-line"><button type="button" class="hbs-btn sm" data-act="pk-tpl" data-i="' + i + '">기본 틀 넣기</button><button type="button" class="hbs-btn sm" data-act="pk-ai" data-tag="' + h(w.tag) + '">AI 요청문 복사</button>' +
    '<span class="hbs-sp"></span><button type="button" class="hbs-btn sm dng" data-act="pk-cwdel" data-i="' + i + '">이 창 삭제</button></div>' +
    '<div class="hbs-prev" data-prev="' + h(w.tag) + '"></div>';
  return acc('pk-cw-' + w.tag, w.name, (w.on ? '켜짐' : '꺼짐') + ' · ' + (w.mode === 'track' ? '누적' : '그때그때') + ' · 항목 ' + w.fields.length, '<div class="hbs-pk">' + inner + '</div>');
}
function packEditor(p) {
  return '<div class="hbs-sec"><h3>팩 편집 <small>이 팩을 쓰는 모든 채팅에 적용됩니다</small><span class="hbs-sp"></span><button type="button" class="hbs-btn sm" data-act="th-exp" data-id="' + h(p.id) + '">팩 내보내기</button></h3>' +
    '<div class="hbs-stgrid">' + [['name', '이름'], ['author', '제작자'], ['version', '버전'], ['description', '설명']].map(function (x) {
      return '<div class="hbs-f"><label>' + x[1] + '</label><input class="hbs-in" data-k="#' + x[0] + '" value="' + h(p[x[0]] || '') + '"></div>';
    }).join('') + '</div></div>' +
    '<div class="hbs-sec"><h3>기본 창</h3>' + WIN_KINDS.map(function (k) { return winEditor(p, k); }).join('') + '</div>' +
    '<div class="hbs-sec"><h3>새 창</h3>' + p.cw.map(function (w, i) { return cwEditor(p, w, i); }).join('') +
    '<div class="hbs-line nowrap" style="margin-top:10px"><input class="hbs-in" id="pk-tag" placeholder="태그 (영문, 예: awaken)"><input class="hbs-in" id="pk-name" placeholder="이름 (예: 각성 창)"><button type="button" class="hbs-btn pri" data-act="pk-cwadd">+ 새 창</button></div></div>' +
    '<div class="hbs-sec"><h3>팩 전체</h3>' + acc('pk-all', 'CSS · JS', '모든 창에 함께 쓰는 코드',
      '<div class="hbs-f"><label>CSS</label><textarea class="hbs-ta code" data-k="#css" spellcheck="false" placeholder="모든 창에 쓰는 CSS"></textarea></div>' +
      '<div class="hbs-f"><label>JS <small>HB.R / HB.B로 창을 그리는 함수를 덮어씁니다</small></label><textarea class="hbs-ta code" data-k="#js" spellcheck="false" placeholder="선택. 비워 두면 쓰지 않습니다."></textarea></div>') + '</div>';
}
/* long code is put into the editors after the HTML is built (attribute escaping would bloat it) */
function fillCode(body) {
  body.querySelectorAll('textarea[data-k^="#"]').forEach(function (ta) { var v = getPath(CF, ta.dataset.k); ta.value = v == null ? '' : v; });
}
var PACK_GUIDE = '<div class="hbs-guide">' +
  '<h4>1. 만들기</h4><p>[+ 커스텀 팩]을 누르면 지금 설정과 디자인으로 팩이 만들어지고, 이 채팅에 적용됩니다. 아래 "팩 편집"에서 고칩니다.</p>' +
  '<h4>2. 창과 항목</h4><ul><li>기본 창: 켜기·끄기, 기본 항목 고르기, 항목 추가, 언제 띄울지 문장, 디자인을 고칩니다.</li>' +
  '<li>새 창: 태그(영문)와 이름으로 만듭니다. 항목마다 종류(글자 · 게이지 · 숫자 · 목록)와 AI에게 줄 설명을 적습니다.</li>' +
  '<li>기억 방식: <b>그때그때</b>는 나올 때마다 AI가 전부 적고, <b>누적</b>은 바뀐 값만 적으면 확장이 더해서 기억합니다.</li></ul>' +
  '<h4>3. 디자인 (HTML 틀)</h4><pre>{{키}} 값 · {{키.label}} 항목 이름\n{{키.cur}} {{키.max}} {{키.pct}} 게이지 값\n{{키.1}} {{키.2}} "|"로 나눈 칸\n{{#키}} … {{/키}} 값이 있을 때만 (목록은 항목마다 반복, 안에서 {{.}} {{1}} {{2}})\n{{^키}} … {{/키}} 값이 없을 때만\n{{bar 키}} 막대 · {{grade 키}} 등급 · {{icon 이름}} 아이콘</pre>' +
  '<p>창마다 [AI 요청문 복사]를 누르면 항목과 문법이 담긴 요청문이 복사됩니다. AI에게 붙여 넣고 원하는 디자인을 적으면 HTML 틀과 CSS를 받을 수 있습니다.</p>' +
  '<h4>4. 배포</h4><p>[팩 내보내기]로 받은 zip을 나눠 주면, 받는 사람은 [zip 불러오기]로 넣습니다. id가 같으면 업데이트됩니다. 팩의 JS는 받는 사람 실리에서 그대로 실행되니, 믿을 수 있는 팩만 넣으세요.</p></div>';
var PANELS = {
  main: function (c) {
    var keys = Object.keys(S.presets), f = c.status.fields;
    var picked = Object.keys(f).filter(function (k) { return f[k]; }).map(function (k) { return FIELD_NAMES[k]; });
    var p = PERSONA[c.persona] || PERSONA.neutral;
    return '' +
    /* presets */
    '<div class="hbs-sec"><h3>프리셋<span class="hbs-sp"></span><button type="button" class="hbs-btn ln" data-act="ps-imp">가져오기</button><button type="button" class="hbs-btn ln" data-act="ps-exp"' + (keys.length ? '' : ' disabled') + '>내보내기</button></h3>' +
      '<input type="file" id="hbs-jfile" accept=".json,application/json" hidden>' +
      (keys.length ? '<div class="hbs-pslist">' + keys.map(function (k) {
        return '<div class="hbs-ps"><div class="tx"><b>' + h(k) + '</b><span>' + h(presetSummary(S.presets[k])) + '</span></div><div class="bt">' +
          '<button type="button" class="hbs-btn sm pri" data-act="ps-load" data-id="' + h(k) + '">적용</button><button type="button" class="hbs-btn sm" data-act="ps-over" data-id="' + h(k) + '">덮어쓰기</button><button type="button" class="hbs-btn sm dng" data-act="ps-del" data-id="' + h(k) + '">삭제</button></div></div>';
      }).join('') + '</div>' : '') +
      '<div class="hbs-line nowrap"><input class="hbs-in" id="hbs-pname" placeholder="새 프리셋 이름"><button type="button" class="hbs-btn" data-act="ps-save">지금 설정 저장</button></div></div>' +
    /* basics */
    '<div class="hbs-sec"><h3>기본</h3>' +
      '<div class="hbs-f"><span class="l">출력 언어 · AI가 창에 적는 값과 창 라벨</span><div class="hbs-chips">' + chip('lang', 'ko', '한국어') + chip('lang', 'en', 'English') + chip('lang', 'ja', '日本語') + chip('lang', 'auto', '이야기 언어 따라가기') + '</div></div>' +
      '<div class="hbs-f"><span class="l">시스템 성격</span><div class="hbs-chips">' + Object.keys(PERSONA).map(function (k) { return chip('persona', k, PERSONA[k][0]); }).join('') + '</div>' +
        (c.persona === 'custom'
          ? '<textarea class="hbs-ta" style="min-height:64px" data-k="personaCustom" placeholder="예: 존댓말을 쓰지만 은근히 사용자를 깔본다. 가끔 혼잣말을 흘린다.">' + h(c.personaCustom) + '</textarea>'
          : '<p class="hbs-help">' + h(p[1]) + '</p>') + '</div>' +
      '<div class="hbs-f"><label for="hbs-world" style="display:flex">세계관 · 작가 노트<span class="hbs-cnt" id="hbs-wc"></span></label>' +
        '<textarea id="hbs-world" class="hbs-ta" data-k="world" maxlength="1200" placeholder="이 시스템이 어떤 이야기에 속하는지 짧게 적습니다. 비워 두면 봇 설정을 그대로 따릅니다. {{user}}, {{char}}를 쓸 수 있습니다.">' + h(c.world) + '</textarea>' + worldChips(c) + '</div></div>' +
    /* with a custom pack the windows are set in the custom tab */
    (EF.pack ? '<div class="hbs-sec"><h3>창 구성</h3><div class="hbs-note">커스텀 팩 "' + h(EF.pack.name) + '"을 쓰는 중입니다. 창과 항목은 커스텀 탭에서 고칩니다. <button type="button" class="hbs-btn ln" data-tabgo="design">커스텀 탭으로</button></div>' +
      (EF.quest.on ? '<div class="hbs-f" style="margin-top:12px"><span class="l">퀘스트 수락 / 거절 버튼</span><div class="hbs-chips">' + chip('quest.btn', 'input', '입력창에 넣기') + chip('quest.btn', 'send', '바로 전송') + chip('quest.btn', 'off', '버튼 숨김') + '</div></div>' : '') + '</div>' : '') +
    (EF.pack ? '' :
    /* status window */
    '<div class="hbs-sec"><h3>기본 상태창</h3><div class="hbs-card' + (c.status.on ? '' : ' off') + '">' + row('status.on', '상태창', '모든 AI 응답의 맨 위에 붙습니다.') +
      (c.status.on ? '<div class="hbs-opt">' +
        '<div class="hbs-f"><span class="l">성장 표시</span><div class="hbs-chips">' + chip('status.grow', 'lv', '레벨 · 경험치') + chip('status.grow', 'rank', '랭크 · 진행도') + '</div></div>' +
        acc('fields', '표시할 항목', picked.length + '개 · ' + picked.join(', '),
        '<div class="hbs-line"><span class="hbs-help">한 번에 고르기</span><button type="button" class="hbs-btn sm" data-act="fset" data-v="min">최소</button><button type="button" class="hbs-btn sm" data-act="fset" data-v="simple">심플</button><button type="button" class="hbs-btn sm" data-act="fset" data-v="full">전체</button></div>' +
        '<div class="hbs-grp">' + FIELD_GROUPS.map(function (g) { return '<span>' + g[0] + '</span><div class="hbs-chips">' + g[1].map(function (x) { return ck('status.fields.' + x[0], x[1]); }).join('') + '</div>'; }).join('') + '</div>' +
        (f.stat ? '<div class="hbs-f"><label for="hbs-stats">능력치 이름 (쉼표로 구분)</label><input id="hbs-stats" class="hbs-in" data-k="status.stats" value="' + h(c.status.stats) + '"></div>' : '')) + '</div>' +
      '<div class="hbs-prev" data-prev="status"></div>' : '') + '</div></div>' +
    /* other windows */
    '<div class="hbs-sec"><h3>창 종류 <small>켠 창만 AI에게 알려 줍니다</small></h3>' +
      card('system', '시스템 메시지', '공지 · 시스템과의 대화 · 경고 · 오류 · 레벨업',
        '<div class="hbs-f"><span class="l">미리보기</span><div class="hbs-chips">' + [['notice', '공지'], ['talk', '대화'], ['warn', '경고'], ['error', '오류'], ['levelup', c.status.grow === 'rank' ? '랭크업' : '레벨업']].map(function (x) {
          return '<button type="button" class="hbs-chip" data-sysprev="' + x[0] + '" aria-pressed="' + ((ui.sysPrev || 'notice') === x[0]) + '">' + x[1] + '</button>';
        }).join('') + '</div></div>') +
      card('noti', '알림', '경험치, 아이템, 호감도처럼 짧은 변화') +
      card('quest', '퀘스트', '목표 · 제한 시간 · 보상과 패널티 · 결과',
        '<div class="hbs-f"><span class="l">수락 / 거절 버튼</span><div class="hbs-chips">' + chip('quest.btn', 'input', '입력창에 넣기') + chip('quest.btn', 'send', '바로 전송') + chip('quest.btn', 'off', '버튼 숨김') + '</div></div>') +
      card('profile', '인물 창', '상대의 등급 · 능력치 · 호감도 · 현재 생각',
        '<div class="hbs-f"><label for="hbs-pst">공통 능력치 (쉼표로 구분)</label><input id="hbs-pst" class="hbs-in" data-k="profile.stats" value="' + h(c.profile.stats) + '"></div>' +
        '<div class="hbs-chips">' + ck('profile.uniq', '인물별 고유 능력치') + ck('profile.aff', '호감도') + ck('profile.mind', '현재 생각') + '</div>') +
      card('shop', '상점', '포인트로 사는 아이템 목록') + '</div>');
  },
  /* the tracked status of this chat, editable: fixes what the AI got wrong or left out */
  state: function (c) {
    if (!hasChat()) return '<div class="hbs-empty">채팅을 열면 이 채팅의 상태를 볼 수 있습니다.</div>';
    var st = currentState(), keys = statusKeys(EF), lab = {};
    extras(EF, 'status').forEach(function (f) { lab[f.k] = f.label || f.k; });
    Object.keys(st).forEach(function (k) { if (keys.indexOf(k) < 0 && k.charAt(0) !== '@') keys.push(k); });
    var one = keys.filter(function (k) { return !HB.S.isList(k); }), many = keys.filter(function (k) { return HB.S.isList(k); });
    var empty = !Object.keys(st).length;
    return '<div class="hbs-sec"><h3>현재 상태<span class="hbs-sp"></span><button type="button" class="hbs-btn sm" data-act="st-reset">되돌리기</button><button type="button" class="hbs-btn sm pri" data-act="st-save">저장</button></h3>' +
      '<p class="hbs-help">' + (empty ? '아직 기록된 상태가 없습니다. 값을 채우고 저장하면 AI가 이 상태에서 시작합니다.' : 'AI는 바뀐 값만 적고, 합계는 확장이 계산해서 여기에 보관합니다. 틀린 값은 고쳐서 저장하면 다음 응답부터 반영됩니다.') + '</p>' +
      (one.length ? '<div class="hbs-stgrid">' + one.map(function (k) {
        return '<div class="hbs-f"><label for="hbs-st-' + k + '">' + h(STATE_LABEL[k] || lab[k] || k) + '</label><input id="hbs-st-' + k + '" class="hbs-in" data-st="' + k + '" value="' + h(st[k] || '') + '"></div>';
      }).join('') + '</div>' : '') +
      many.map(function (k) {
        var its = st[k] || [];
        return '<div class="hbs-f"><label for="hbs-st-' + k + '" style="display:flex">' + h(STATE_LABEL[k] || lab[k] || k) + '<span class="hbs-cnt">' + (STATE_HINT[k] || '') + '</span></label>' +
          '<textarea id="hbs-st-' + k + '" class="hbs-ta hbs-stlist" data-st="' + k + '" rows="' + Math.max(2, its.length + 1) + '" placeholder="한 줄에 하나씩 적습니다.">' + h(its.join('\n')) + '</textarea></div>';
      }).join('') + '</div>' + (empty ? '' : auditSection(c));
  },
  design: function (c) {
    var p = curPack();
    return '<div class="hbs-sec"><h3>테마 · 커스텀 팩 <small>지금 연결된 설정에 적용됩니다</small></h3><div class="hbs-themes">' + themeList().map(function (t) {
      var on = c.theme === t.id;
      return '<div class="hbs-th' + (on ? ' on' : '') + '"><div class="pv" data-pv="' + h(t.id) + '"></div><div class="mt"><b>' + h(t.name) + (t.builtin ? '<span class="hbs-tag">기본</span>' : '') + (t.pack ? '<span class="hbs-tag">팩</span>' : '') + (on ? '<span class="hbs-tag">사용 중</span>' : '') + '</b>' +
        '<span>' + h(t.description || (t.author ? '제작: ' + t.author : '')) + '</span></div><div class="ac">' +
        '<button type="button" class="hbs-btn sm' + (on ? '' : ' pri') + '" data-act="th-use" data-id="' + h(t.id) + '"' + (on ? ' disabled' : '') + '>' + (on ? '적용됨' : '적용') + '</button>' +
        '<button type="button" class="hbs-btn sm" data-act="th-exp" data-id="' + h(t.id) + '">zip 내보내기</button>' +
        (t.builtin ? '' : '<button type="button" class="hbs-btn sm dng" data-act="th-del" data-id="' + h(t.id) + '">삭제</button>') + '</div></div>';
    }).join('') + '</div></div>' +
      '<div class="hbs-sec"><h3>추가</h3><div class="hbs-line"><button type="button" class="hbs-btn pri" data-act="pk-new">+ 커스텀 팩</button><button type="button" class="hbs-btn" data-act="th-imp">zip 불러오기</button><input type="file" id="hbs-file" accept=".zip,application/zip" hidden></div>' +
      '<p class="hbs-help">커스텀 팩은 지금 설정과 디자인을 바탕으로 만들어집니다. 팩과 테마 zip은 같은 버튼으로 불러오고, 같은 id면 업데이트됩니다.</p>' +
      acc('packhelp', '커스텀 팩 만드는 법', '창 · 항목 · 틀 문법 · 배포', PACK_GUIDE) +
      acc('themehelp', '테마 만드는 법', 'zip 구성 · 색만 바꾸기 · 주의할 점', THEME_GUIDE) + '</div>' +
      (p ? packEditor(p) : '');
  },
  advanced: function (c) {
    var text = buildPrompt(c, c.status.on ? currentState() : null);
    return '<div class="hbs-sec"><h3>지침 넣는 위치</h3><div class="hbs-line" style="align-items:flex-start;gap:16px"><div class="hbs-f"><label for="hbs-depth">깊이 (0 = 맨 끝)</label><input id="hbs-depth" type="number" min="0" max="20" class="hbs-in hbs-num" data-k="adv.depth" value="' + (c.adv.depth | 0) + '"></div>' +
      '<div class="hbs-f"><span class="l">역할</span><div class="hbs-chips">' + chip('adv.role', 0, 'System') + chip('adv.role', 1, 'User') + chip('adv.role', 2, 'Assistant') + '</div></div></div></div>' +
      '<div class="hbs-sec"><div class="hbs-card">' + row('adv.cleanup', '지난 응답의 창 접어 두기', '최근 3개 응답보다 오래된 창은 그리지 않고 코드로 접어 둡니다. 긴 채팅이 가벼워지고, AI에게는 그대로 보냅니다.') + '</div>' +
      '<div class="hbs-card">' + row('adv.strip', '지난 상태창을 AI에게 보내지 않기', '현재 상태를 따로 알려 주므로 지난 상태창은 AI가 읽는 내용에서 뺍니다. 토큰이 줄어듭니다.') + '</div></div>' +
      '<div class="hbs-sec"><h3>수첩</h3><div class="hbs-card">' + row('@book', '수첩 쓰기', '채팅에 나온 인물 창과 마지막 상점을 모아 봅니다. 모든 채팅에 똑같이 적용됩니다.') + '</div>' +
      (S.ui.book ? '<div class="hbs-f"><span class="l">버튼 위치</span><div class="hbs-chips">' + chip('@bookAt', 'wand', '마법봉 메뉴') + chip('@bookAt', 'input', '입력창 아이콘') + chip('@bookAt', 'float', '떠 있는 버튼') + '</div></div>' : '') + '</div>' +
      '<div class="hbs-sec"><h3>AI에게 보내는 지침 <small>지금 설정으로 만든 내용</small><span class="hbs-cnt">' + text.length + '자 · 약 ' + Math.round(text.length / 3.6) + ' 토큰</span></h3>' +
      (LINK.active ? '' : '<div class="hbs-note">이 채팅은 연결되어 있지 않아 지금은 이 지침을 보내지 않습니다.</div>') +
      '<textarea class="hbs-ta mono" readonly id="hbs-prompt">' + h(text) + '</textarea>' +
      '<div class="hbs-line"><button type="button" class="hbs-btn sm" data-act="copy-prompt">복사</button></div></div>' +
      '<div class="hbs-sec"><h3>관리</h3><div class="hbs-line"><button type="button" class="hbs-btn" data-act="rx-fix">정규식 다시 설치</button><button type="button" class="hbs-btn dng" data-act="reset">이 설정 초기화</button></div>' +
      '<p class="hbs-help">표시용 정규식 3개는 스크립트가 자동으로 설치하고 관리합니다. 정규식 목록에서 "시스템 상태창 ·"으로 시작하는 항목입니다.</p></div>';
  }
};
var THEME_GUIDE = '<div class="hbs-guide">' +
  '<h4>1. 견본 받기</h4><p>위 테마 카드의 [zip 내보내기]를 누르면 지금 디자인 그대로의 견본 zip을 받습니다.</p>' +
  '<h4>2. zip 구성</h4><ul>' +
  '<li><code>theme.json</code> 필수. 테마 정보입니다.</li>' +
  '<li><code>theme.css</code> 필수. 창 디자인입니다.</li>' +
  '<li><code>theme.js</code> 선택. 창을 그리는 함수(<code>HB.R</code> / <code>HB.B</code>)를 덮어쓸 때만 넣습니다.</li></ul>' +
  '<pre>{\n  "id": "my-theme",\n  "name": "내 테마",\n  "author": "이름",\n  "version": "1.0",\n  "description": "한 줄 소개",\n  "extends": "holo-blue",\n  "fonts": ["https://fonts.googleapis.com/css2?family=..."]\n}</pre>' +
  '<p><code>id</code>는 영문 소문자, 숫자, <code>-</code>만 씁니다. <code>extends</code>를 적으면 그 테마 위에 내 CSS를 덧붙입니다. <code>fonts</code>에는 웹폰트 CSS 주소(https)를 넣습니다.</p>' +
  '<h4>3. 색만 바꾸기</h4><p><code>extends</code>를 <code>"holo-blue"</code>로 두고 theme.css에 변수만 적으면 됩니다.</p>' +
  '<pre>:host {\n  --hi: #ffd9a0;      /* 강조 글자 */\n  --cy: #ffb14a;      /* 아이콘 · 선 */\n  --line: rgba(255,190,110,.34);\n  --panel-a: rgba(46,28,10,.93); /* 창 위쪽 */\n  --panel-b: rgba(24,14,5,.96);  /* 창 아래쪽 */\n  --txt: #fff1dc;  --dim: #cbb090;\n}</pre>' +
  '<h4>4. 주의할 점</h4><ul>' +
  '<li>창은 섀도 DOM 안에 그려집니다. 변수는 <code>:root</code>가 아니라 <code>:host</code>에 적습니다.</li>' +
  '<li>좁은 화면 대응은 <code>@media</code> 대신 <code>@container hb (max-width:540px)</code>를 씁니다.</li>' +
  '<li>창 종류별 바깥 클래스: 상태창 <code>.st</code>, 시스템 <code>.sys .talk .warn .err .lvup</code>, 알림 <code>.toast .t</code>, 인물 <code>.ch-top .slist</code>, 상점 <code>.item</code></li>' +
  '<li>견본 테마 <b>Amber Terminal</b>이 색만 바꾼 예입니다.</li></ul>' +
  '<h4>5. AI에게 맡길 때</h4><p>견본 zip의 theme.css를 첨부하고 아래 글을 붙여 넣은 뒤, 마지막 줄에 원하는 디자인을 적습니다.</p>' +
  '<pre class="hbs-copy">첨부한 theme.css는 SillyTavern "시스템 상태창" 확장의 창 디자인이다. 이걸 고쳐서 새 테마를 만들어 줘.\n\n' +
  '규칙:\n' +
  '- 결과물은 theme.json과 theme.css 두 파일. zip에 바로 넣을 수 있게 각각 전체 내용을 줘.\n' +
  '- theme.json: {"id":"영문소문자-숫자-하이픈","name":"","author":"","version":"1.0","description":"","fonts":[]}\n' +
  '- 창은 섀도 DOM 안에 그려진다. CSS 변수는 :host에 선언하고, :root·body·html 선택자는 쓰지 마.\n' +
  '- 좁은 화면은 @media 대신 @container hb (max-width:540px) 로 처리해.\n' +
  '- HTML 구조와 클래스 이름은 바꿀 수 없다. 첨부한 CSS에 나온 클래스만 꾸며.\n' +
  '- 웹폰트는 @import 대신 theme.json의 fonts에 https CSS 주소로 넣어.\n' +
  '- 글자가 배경에 묻히지 않게 대비를 충분히 주고, 폰 화면(폭 360px)에서도 깨지지 않게 해.\n' +
  '- 애니메이션은 지금 있는 것만 고치고, 정보를 가리거나 깜빡여서 읽기 힘들게 하지 마.\n\n' +
  '원하는 디자인: (여기에 적기. 예: 낡은 양피지 느낌, 갈색 잉크, 세리프 폰트)</pre>' +
  '<div class="hbs-line"><button type="button" class="hbs-btn sm" data-act="copy-guide">프롬프트 복사</button></div>' +
  '<p>색만 바꾸고 싶으면 "theme.json에 "extends": "holo-blue"를 넣고, theme.css에는 :host 변수만 적어 줘"라고 덧붙이면 결과가 짧고 안전합니다.</p></div>';
var TABS = [['main', '설정'], ['state', '상태'], ['design', '커스텀'], ['advanced', '고급']];

function linkBar() {
  var c = C(), chat = hasChat(c), ck = charKey(c), nm = charName(c), isGroup = ck && /^group:/.test(ck);
  var who = isGroup ? '그룹' : '캐릭터';
  /* one short line: what the settings below belong to */
  var note;
  if (LINK.src === 'chat') note = '이 채팅에만 적용됩니다.';
  else if (LINK.src === 'char') note = (nm ? nm + '의 ' : '이 ' + who + '의 ') + '모든 채팅에 적용됩니다.';
  else if (LINK.src === 'off') note = '이 채팅만 껐습니다. 아래는 ' + (nm || who) + ' 설정입니다.';
  else note = chat ? '꺼져 있습니다. 아래는 새로 연결할 때 쓰는 기본 설정입니다.' : '채팅을 열면 연결할 수 있습니다.';
  var mode = LINK.src === 'chat' ? 'chat' : LINK.src === 'char' ? 'char' : 'off';
  function b(m, label, dis) { return '<button type="button" data-link="' + m + '" aria-pressed="' + (mode === m) + '"' + (dis ? ' disabled' : '') + '>' + label + '</button>'; }
  return '<div class="hbs-link' + (LINK.active ? ' on' : '') + '">' +
    '<div class="hbs-seg" role="group" aria-label="연결">' + b('off', '끄기', !chat) + b('chat', '이 채팅', !chat) + b('char', who + ' 전체', !chat || !ck) + '</div>' +
    '<p class="hbs-lnote"><i></i>' + h(note) + (LINK.src === 'off' && LINK.charLinked ? ' <button type="button" class="hbs-btn ln" data-act="unlink-char">' + who + ' 연결 해제</button>' : '') + '</p></div>';
}
/* the sample a preview shows for a window kind, before any edit */
function sampleOf(k, c) {
  var cw = c.pack && c.pack.cw.filter(function (w) { return w.tag === k; })[0], s;
  if (cw) return sampleCw(cw);
  if (k === 'status') s = sampleStatus(c);
  else if (k === 'profile') s = sampleProfile(c);
  else if (k === 'system') { var st = ui.sysPrev || 'notice'; s = SAMPLE.sys[st === 'levelup' && c.status.grow === 'rank' ? 'rankup' : st]; }
  else s = SAMPLE[k] || '';
  /* fields a pack added show in the sample too */
  var ex = extras(c, k).map(function (f) { return f.k + ': ' + sampleValue(f); }).join('\n');
  return s && ex ? s + '\n' + ex : s || ex;
}
/* one preview box: a design / code switch on top; in code view the block can be edited and the design follows it */
function drawPrev(el, c) {
  var k = el.getAttribute('data-prev'), edited = S.ui.prev[k] != null, raw = edited ? S.ui.prev[k] : sampleOf(k, c), code = ui.prevMode[k] === 'code';
  el.innerHTML = '<div class="hbs-pvbar"><span class="hbs-mini" role="group" aria-label="미리보기"><button type="button" data-pvmode="design" aria-pressed="' + !code + '">디자인</button>' +
    '<button type="button" data-pvmode="code" aria-pressed="' + code + '">코드</button></span>' + (edited ? '<span class="hbs-pvtag">수정됨</span><button type="button" class="hbs-btn ln" data-pvreset>초기화</button>' : '') + '</div>';
  if (!raw && k === 'status') { el.insertAdjacentHTML('beforeend', '<div class="hbs-empty" style="background:#fff">표시할 항목을 하나 이상 고르세요.</div>'); return; }
  if (code) {
    var ta = D.createElement('textarea'); ta.className = 'hbs-code'; ta.spellcheck = false; ta.setAttribute('data-pvedit', k);
    ta.value = '<' + k + '>\n' + raw + '\n</' + k + '>'; ta.rows = Math.min(18, ta.value.split('\n').length + 1);
    el.appendChild(ta); return;
  }
  el.appendChild(makeHost(k, raw, { quiet: true, preview: true }));
}
function drawPreviews(body, c) {
  body.querySelectorAll('[data-prev]').forEach(function (el) { drawPrev(el, c); });
  body.querySelectorAll('[data-pv]').forEach(function (el) {
    var t = getTheme(el.getAttribute('data-pv'));
    el.appendChild(makeHost('system', SAMPLE.system, { quiet: true, preview: true, css: themeCss(t) }));
  });
}
function paint() {
  if (!ui.el) return;
  resolve();
  var c = CF, body = ui.el.querySelector('.hbs-body'), top = body.scrollTop;
  ui.el.querySelector('#hbs-linkbar').innerHTML = linkBar();
  ui.el.querySelectorAll('.hbs-tabs button').forEach(function (b) { b.setAttribute('aria-selected', b.dataset.tab === ui.tab ? 'true' : 'false'); });
  /* keep the control the user just touched where it was on screen */
  var anchor = ui.anchor, aTop = null; ui.anchor = null;
  var aEl = anchor ? body.querySelector(anchor) : null; if (aEl) aTop = aEl.getBoundingClientRect().top;
  body.innerHTML = PANELS[ui.tab](c);
  fillCode(body);
  drawPreviews(body, EF);
  body.scrollTop = top;
  aEl = anchor ? body.querySelector(anchor) : null;
  if (aEl && aTop != null) body.scrollTop += aEl.getBoundingClientRect().top - aTop;
  var wc = body.querySelector('#hbs-wc'); if (wc) wc.textContent = c.world.length + ' / 1200';
}
function commit(repaint) {
  persist(); applyAll();
  if (ui.el) {
    var sv = ui.el.querySelector('.hbs-saved'); sv.classList.add('on');
    clearTimeout(ui.savedT); ui.savedT = setTimeout(function () { sv.classList.remove('on'); }, 1400);
  }
  if (repaint) paint();
}
/* a small confirm box inside the settings window; resolves true when the user agrees */
function ask(msg, okLabel) {
  return new Promise(function (done) {
    var box = ui.el && ui.el.querySelector('.hbs');
    if (!box) { done(false); return; }
    var bg = D.createElement('div'); bg.className = 'hbs-ask';
    bg.innerHTML = '<div role="alertdialog" aria-modal="true"><p>' + h(msg) + '</p><div class="hbs-line"><button type="button" class="hbs-btn" data-a="0">취소</button><button type="button" class="hbs-btn pri dngp" data-a="1">' + h(okLabel) + '</button></div></div>';
    function close(v) { bg.remove(); done(v); }
    bg.addEventListener('click', function (e) { var a = e.target.closest('[data-a]'); if (a) close(a.dataset.a === '1'); else if (e.target === bg) close(false); });
    bg.addEventListener('keydown', function (e) { if (e.key === 'Escape') { e.stopPropagation(); close(false); } });
    box.appendChild(bg); bg.querySelector('[data-a="0"]').focus();
  });
}
var ACTIONS = {
  fset: function (b) { var set = FIELD_SETS[b.dataset.v], f = CF.status.fields; Object.keys(f).forEach(function (k) { f[k] = set.indexOf(k) > -1 ? 1 : 0; }); commit(true); },
  'th-use': function (b) { CF.theme = b.dataset.id; commit(true); },
  'th-exp': function (b) { exportTheme(b.dataset.id); },
  'th-del': function (b) {
    var id = b.dataset.id, dep = Object.keys(S.themes).filter(function (k) { return S.themes[k].extends === id; });
    if (dep.length) { toast('"' + S.themes[dep[0]].name + '" 테마가 이 테마를 바탕으로 씁니다. 먼저 그 테마를 삭제하세요.', 'warning'); return; }
    ask('"' + getTheme(id).name + '" 테마를 삭제하시겠습니까?', '삭제').then(function (ok) { if (!ok) return; delete S.themes[id]; if (CF.theme === id) CF.theme = 'holo-blue'; commit(true); });
  },
  'th-imp': function () { var f = ui.el.querySelector('#hbs-file'); f.value = ''; f.click(); },
  /* custom packs */
  'pk-new': function () {
    var p = newPack(EF);
    S.themes[p.id] = p; CF.theme = p.id; ui.acc['pk-status'] = true;
    commit(true); toast('커스텀 팩 "' + p.name + '"을(를) 만들어 이 설정에 적용했습니다.', 'success');
  },
  'pk-fadd': function (b) { var list = getPath(CF, b.dataset.path); if (!Array.isArray(list)) return; list.push(normField({ type: 'text' })); ui.anchor = '[data-act="pk-fadd"][data-path="' + b.dataset.path + '"]'; packBump('#'); commit(true); },
  'pk-fdel': function (b) { var list = getPath(CF, b.dataset.path); if (!Array.isArray(list)) return; list.splice(+b.dataset.i, 1); ui.anchor = '[data-act="pk-fadd"][data-path="' + b.dataset.path + '"]'; packBump('#'); commit(true); },
  'pk-cwadd': function () {
    var p = curPack(), ti = ui.el.querySelector('#pk-tag'), tag = trimS(ti.value).toLowerCase(), name = trimS(ui.el.querySelector('#pk-name').value) || tag;
    if (!TAG_RE.test(tag)) { toast('태그는 영문 소문자로 시작하고, 영문 · 숫자 · - · _ 로 2~24자입니다.', 'warning'); ti.focus(); return; }
    if (RESERVED[tag]) { toast('"' + tag + '"는 쓸 수 없는 태그입니다. 다른 이름을 고르세요.', 'warning'); ti.focus(); return; }
    if (p.cw.some(function (w) { return w.tag === tag; })) { toast('이 팩에 이미 있는 태그입니다.', 'warning'); ti.focus(); return; }
    p.cw.push(normPack({ cw: [{ tag: tag, name: name, fields: [{ k: 'text', label: '내용', type: 'text', desc: 'what the window says' }] }] }).cw[0]);
    ui.acc['pk-cw-' + tag] = true; packBump('#'); commit(true);
  },
  'pk-cwdel': function (b) {
    var p = curPack(), w = p && p.cw[+b.dataset.i];
    if (!w) return;
    ask('"' + w.name + '" 창을 삭제하시겠습니까? 채팅에 남은 이 창의 블록은 일반 목록으로 보입니다.', '삭제').then(function (ok) { if (!ok) return; p.cw.splice(+b.dataset.i, 1); packBump('#'); commit(true); });
  },
  'pk-tpl': function (b) {
    var p = curPack(), w = p && p.cw[+b.dataset.i];
    if (!w) return;
    function put() { w.html = defaultHtml(w); packBump('#'); commit(true); }
    if (trimS(w.html)) ask('지금 HTML 틀을 기본 틀로 바꾸시겠습니까?', '바꾸기').then(function (ok) { if (ok) put(); }); else put();
  },
  'pk-ai': function (b) {
    var t = aiPrompt(b.dataset.kind || null, b.dataset.tag || null);
    (P.navigator.clipboard ? P.navigator.clipboard.writeText(t) : Promise.reject()).then(function () { b.textContent = '복사됨'; toast('요청문을 복사했습니다. AI에게 붙여 넣고 원하는 디자인을 적으세요.', 'success'); },
      function () { toast('복사하지 못했습니다. 브라우저가 클립보드를 막고 있습니다.', 'warning'); });
  },
  'ps-save': function () {
    var n = trimS(ui.el.querySelector('#hbs-pname').value);
    if (!n) { toast('프리셋 이름을 적어 주세요.', 'warning'); ui.el.querySelector('#hbs-pname').focus(); return; }
    S.presets[n] = clone(CF); commit(true); toast('프리셋 "' + n + '"을(를) 저장했습니다.', 'success');
  },
  'ps-load': function (b) { setCur(clone(S.presets[b.dataset.id])); commit(true); toast('프리셋 "' + b.dataset.id + '"을(를) 적용했습니다.', 'success'); },
  'ps-over': function (b) {
    var id = b.dataset.id;
    ask('"' + id + '" 프리셋을 지금 설정으로 덮어쓰시겠습니까?', '덮어쓰기').then(function (ok) { if (!ok) return; S.presets[id] = clone(CF); commit(true); toast('프리셋 "' + id + '"에 지금 설정을 덮어썼습니다.', 'success'); });
  },
  'ps-del': function (b) {
    var id = b.dataset.id;
    ask('"' + id + '" 프리셋을 삭제하시겠습니까?', '삭제').then(function (ok) { if (!ok) return; delete S.presets[id]; commit(true); });
  },
  'ps-exp': function () { download('system-window-presets.json', new Blob([JSON.stringify({ hb_system_window: 2, presets: S.presets, current: CF }, null, 2)], { type: 'application/json' })); },
  'ps-imp': function () { var f = ui.el.querySelector('#hbs-jfile'); f.value = ''; f.click(); },
  'unlink-char': function () { unlinkChar(); commit(true); },
  /* world notes kept by name: tap one to swap it in */
  'w-save': function () {
    var inp = ui.el.querySelector('#hbs-wname'), n = trimS(inp.value);
    if (!trimS(CF.world)) { toast('저장할 내용이 없습니다.', 'warning'); return; }
    if (!n) { toast('이름을 적어 주세요.', 'warning'); inp.focus(); return; }
    S.worlds[n] = CF.world; ui.anchor = '#hbs-wname'; commit(true);
  },
  'w-use': function (b) { CF.world = S.worlds[b.dataset.id] || ''; ui.anchor = '#hbs-world'; commit(true); },
  'w-del': function (b) {
    var id = b.dataset.id;
    ask('"' + id + '" 세계관을 삭제하시겠습니까?', '삭제').then(function (ok) { if (!ok) return; delete S.worlds[id]; ui.anchor = '#hbs-world'; commit(true); });
  },
  audit: function () {
    ui.audit = 'busy'; ui.anchor = '[data-act="audit"]'; paint();
    runAudit().then(function (r) { ui.audit = r; ui.anchor = '[data-act="audit"]'; paint(); },
      function (e) { ui.audit = null; paint(); toast('점검하지 못했습니다: ' + (e && e.message || e), 'error'); });
  },
  'audit-clear': function () { ui.audit = null; paint(); },
  'audit-apply': function () {
    var res = Array.isArray(ui.audit) ? ui.audit : [], lines = [];
    ui.el.querySelectorAll('[data-afind]').forEach(function (cb) { var r = res[+cb.dataset.afind]; if (cb.checked && r) lines.push(r.k + ': ' + r.v); });
    if (!lines.length) { toast('적용할 항목을 고르세요.', 'warning'); return; }
    if (!saveCorrection(lines)) { toast('적용하지 못했습니다.', 'error'); return; }
    ui.audit = null; redrawStatus(); applyPrompt(); paint(); toast(lines.length + '개 항목을 고쳤습니다.', 'success');
  },
  'st-reset': function () { ui.dirty = false; paint(); },
  /* only the values that differ from the tracked state are stored, as corrections on the last message */
  'st-save': function () {
    var st = currentState(), lines = [];
    ui.el.querySelectorAll('.hbs-body [data-st]').forEach(function (el) {
      var k = el.dataset.st;
      if (HB.S.isList(k)) {
        var its = el.value.split(/\r?\n/).map(trimS).filter(Boolean);
        if (JSON.stringify(its) !== JSON.stringify(st[k] || [])) lines.push(k + ': ' + (its.join('; ') || 'none'));
      } else {
        var v = trimS(el.value.replace(/[\r\n]+/g, ' '));
        if (v !== (st[k] || '')) lines.push(k + ': ' + (v || 'none'));
      }
    });
    if (!lines.length) { toast('바뀐 값이 없습니다.'); return; }
    if (!saveCorrection(lines)) { toast('채팅에 메시지가 하나 이상 있어야 저장할 수 있습니다.', 'warning'); return; }
    ui.dirty = false; redrawStatus(); applyPrompt(); paint();
    toast('상태를 저장했습니다.', 'success');
  },
  'copy-guide': function (b) {
    var pre = ui.el.querySelector('.hbs-copy'), t = pre ? pre.textContent : '';
    (P.navigator.clipboard ? P.navigator.clipboard.writeText(t) : Promise.reject()).then(function () { b.textContent = '복사됨'; }, function () {
      var r = D.createRange(); r.selectNodeContents(pre); var s = P.getSelection(); s.removeAllRanges(); s.addRange(r); b.textContent = '선택됨 · 길게 눌러 복사';
    });
  },
  'copy-prompt': function (b) {
    var ta = ui.el.querySelector('#hbs-prompt');
    (P.navigator.clipboard ? P.navigator.clipboard.writeText(ta.value) : Promise.reject()).then(function () { b.textContent = '복사됨'; }, function () { ta.focus(); ta.select(); });
  },
  'rx-fix': function () { removeRegex(); ensureRegex(true); toast('정규식을 다시 설치했습니다.', 'success'); },
  reset: function (b) {
    ask('이 설정을 처음 상태로 되돌리시겠습니까? 프리셋과 테마는 남습니다.', '초기화').then(function (ok) { if (ok) { setCur(clone(DEF)); commit(true); } });
  }
};
function openSettings() {
  if (ui.el && ui.el.isConnected) return;
  var stale = D.getElementById('hbs-ov'); if (stale) stale.remove();
  var ov = D.createElement('div'); ov.id = 'hbs-ov';
  ov.innerHTML = '<div class="hbs" role="dialog" aria-modal="true" aria-label="시스템 상태창 설정"><div class="hbs-hd"><div class="hbs-top"><h2>시스템 상태창</h2><span class="hbs-sp"></span><span class="hbs-saved">저장됨</span><button type="button" class="hbs-x" aria-label="닫기">×</button></div>' +
    '<div id="hbs-linkbar"></div><div class="hbs-tabs" role="tablist">' + TABS.map(function (t) { return '<button type="button" role="tab" data-tab="' + t[0] + '">' + t[1] + '</button>'; }).join('') + '</div></div>' +
    '<div class="hbs-body"></div></div>';
  /* close only when a press both starts and ends on the backdrop */
  var downOnBackdrop = false;
  ov.addEventListener('pointerdown', function (e) { downOnBackdrop = e.target === ov; });
  ov.addEventListener('click', function (e) { if (e.target === ov && downOnBackdrop) closeSettings(); downOnBackdrop = false; });
  D.body.appendChild(ov); ui.el = ov;
  pinFixed(ov);
  ov.querySelector('.hbs-x').addEventListener('click', closeSettings);
  ov.addEventListener('keydown', function (e) { if (e.key === 'Escape') { e.stopPropagation(); closeSettings(); } });
  ov.querySelector('.hbs-tabs').addEventListener('click', function (e) { var b = e.target.closest('button[data-tab]'); if (b) { ui.tab = b.dataset.tab; ui.dirty = false; if (ui.audit !== 'busy') ui.audit = null; ov.querySelector('.hbs-body').scrollTop = 0; paint(); } });
  ov.querySelector('#hbs-linkbar').addEventListener('click', function (e) {
    var b = e.target.closest('[data-link]'); if (b && !b.disabled) { setLink(b.dataset.link); commit(true); return; }
    var a = e.target.closest('[data-act]'); if (a && ACTIONS[a.dataset.act]) ACTIONS[a.dataset.act](a);
  });
  var body = ov.querySelector('.hbs-body');
  body.addEventListener('click', function (e) {
    var ac = e.target.closest('[data-acc]');
    if (ac) { var open = ac.getAttribute('aria-expanded') !== 'true'; ui.acc[ac.dataset.acc] = open; ac.setAttribute('aria-expanded', open); ac.nextElementSibling.hidden = !open; return; }
    var pv = e.target.closest('[data-prev]');
    if (pv && e.target.closest('[data-pvmode]')) { ui.prevMode[pv.dataset.prev] = e.target.closest('[data-pvmode]').dataset.pvmode; drawPrev(pv, CF); return; }
    if (pv && e.target.closest('[data-pvreset]')) { delete S.ui.prev[pv.dataset.prev]; save(); drawPrev(pv, CF); return; }
    var sp = e.target.closest('[data-sysprev]');
    if (sp) {
      ui.sysPrev = sp.dataset.sysprev; delete S.ui.prev.system; save();
      sp.parentNode.querySelectorAll('[data-sysprev]').forEach(function (x) { x.setAttribute('aria-pressed', x === sp ? 'true' : 'false'); });
      var pv = body.querySelector('[data-prev="system"]'); if (pv) drawPreviews(pv.parentNode, CF);
      return;
    }
    var go = e.target.closest('[data-tabgo]');
    if (go) { ui.tab = go.dataset.tabgo; body.scrollTop = 0; paint(); return; }
    var set = e.target.closest('[data-set]');
    if (set) { ui.anchor = '[data-set="' + set.dataset.set + '"][data-v="' + set.dataset.v + '"]'; var cur = getPath(CF, set.dataset.set), v = set.dataset.v; setPath(CF, set.dataset.set, typeof cur === 'number' ? +v : v); packBump(set.dataset.set); commit(true); return; }
    var act = e.target.closest('[data-act]');
    if (act && ACTIONS[act.dataset.act]) ACTIONS[act.dataset.act](act);
  });
  body.addEventListener('change', function (e) {
    var t = e.target;
    if (t.id === 'hbs-file' && t.files[0]) {
      importTheme(t.files[0]).then(function (r) { commit(true); toast('테마 "' + r.name + '"을(를) ' + (r.update ? '업데이트했습니다.' : '추가했습니다.'), 'success'); if (r.update) applyAll({ force: true }); },
        function (err) { toast('테마를 불러오지 못했습니다: ' + err.message, 'error'); });
      return;
    }
    if (t.id === 'hbs-jfile' && t.files[0]) {
      t.files[0].text().then(function (txt) {
        var j = JSON.parse(txt); if (!j || (!j.presets && !j.cfg)) throw new Error('프리셋 파일이 아닙니다.');
        var n = 0; Object.keys(j.presets || {}).forEach(function (k) { S.presets[k] = j.presets[k]; n++; });
        commit(true); toast('프리셋 ' + n + '개를 가져왔습니다.', 'success');
      }).catch(function (err) { toast('가져오지 못했습니다: ' + err.message, 'error'); });
      return;
    }
    if (t.matches('input[type=checkbox][data-k]')) { ui.anchor = 'input[data-k="' + t.dataset.k + '"]'; var cur = getPath(CF, t.dataset.k); setPath(CF, t.dataset.k, typeof cur === 'number' ? (t.checked ? 1 : 0) : t.checked); packBump(t.dataset.k); commit(true); }
  });
  body.addEventListener('input', function (e) {
    var t = e.target;
    if (t.dataset && t.dataset.pvedit) {                             /* preview code edited: kept on this device until reset */
      var k = t.dataset.pvedit, body2 = t.value.replace(/^\s*<[a-z]+>[ \t]*\r?\n?/i, '').replace(/\r?\n?[ \t]*<\/[a-z]+>\s*$/i, '');
      S.ui.prev[k] = body2; save();
      var bar = t.parentNode.querySelector('.hbs-pvbar');
      if (bar && !bar.querySelector('[data-pvreset]')) bar.insertAdjacentHTML('beforeend', '<span class="hbs-pvtag">수정됨</span><button type="button" class="hbs-btn ln" data-pvreset>초기화</button>');
      return;
    }
    if (t.dataset && t.dataset.st) { ui.dirty = true; return; }   /* status editor: saved with its own button */
    /* pack editor: typed text is kept at once, the windows catch up when typing pauses */
    if (t.dataset && t.dataset.k && t.dataset.k.charAt(0) === '#' && t.type !== 'checkbox') {
      var pv2 = t.value;
      if (/\.k$/.test(t.dataset.k)) { pv2 = pv2.toLowerCase().replace(/[^a-z0-9_]/g, '').slice(0, 24); if (pv2 !== t.value) t.value = pv2; }
      setPath(CF, t.dataset.k, pv2); save();
      clearTimeout(ui.pkT);
      ui.pkT = setTimeout(function () { if (!ui.el) return; packBump('#'); applyAll(); body.querySelectorAll('[data-prev]').forEach(function (el) { drawPrev(el, EF); }); }, 450);
      return;
    }
    if (!t.dataset || !t.dataset.k || t.type === 'checkbox') return;
    var v = t.type === 'number' ? Math.max(0, Math.min(20, parseInt(t.value, 10) || 0)) : t.value;
    setPath(CF, t.dataset.k, v); commit(false);
    var wc = body.querySelector('#hbs-wc'); if (wc && t.dataset.k === 'world') wc.textContent = v.length + ' / 1200';
    if (t.dataset.k === 'status.stats' || t.dataset.k === 'profile.stats') drawPreviews(body, CF);
  });
  paint();
}
/* the status window's "edit" button lands here */
HB.opt.editState = function () { ui.tab = 'state'; ui.dirty = false; openSettings(); paint(); };
function closeSettings() { if (ui.el) { try { ui.el._unplace(); } catch (e) {} ui.el.remove(); ui.el = null; } }

/* the wand item belongs to this running copy of the script; one left over from a reloaded copy is replaced */
function addWand() {
  var menu = D.getElementById('extensionsMenu'); if (!menu) return;
  wandItem(menu, 'hb-wand', 'fa-table-list', '시스템 상태창', function () {
    try { openSettings(); }
    catch (e) { console.error('[시스템 상태창] 설정 창 오류', e); toast('설정 창을 열지 못했습니다: ' + e.message, 'error'); }
  });
  placeBook();
}
function wandItem(menu, id, icon, label, go) {
  var old = D.getElementById(id);
  if (old) { if (old.getAttribute('data-inst') === INSTANCE) return; old.remove(); }
  var item = D.createElement('div'); item.id = id; item.setAttribute('data-inst', INSTANCE);
  item.className = 'list-group-item flex-container flexGap5 interactable'; item.tabIndex = 0; item.setAttribute('role', 'listitem');
  item.innerHTML = '<div class="fa-fw fa-solid ' + icon + ' extensionsMenuExtensionButton"></div><span>' + label + '</span>';
  item.addEventListener('click', function () { go(); });
  item.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } });
  menu.appendChild(item);
}

/* ---------- notebook: the people and the last shop this chat has shown, gathered from their windows ----------
   Nothing is stored: each time it opens it reads the chat, so swipes, edits and deletions are always reflected. */
UI_CSS += '\n' + [
'#hbn-ov{position:fixed;top:0;left:0;width:100vw;height:100vh;height:100dvh;margin:0;z-index:40000;background:rgba(4,10,18,.55);display:flex;align-items:center;justify-content:center;padding:12px;box-sizing:border-box;font:14px/1.5 "Pretendard","IBM Plex Sans KR","Apple SD Gothic Neo","Malgun Gothic",system-ui,sans-serif;color:#d6ecf8;text-align:left;text-shadow:none}',
'#hbn-ov *{box-sizing:border-box;text-shadow:none}',
'#hbn-ov [hidden]{display:none!important}',
'#hbn-ov .hbn{width:min(560px,100%);max-height:100%;display:flex;flex-direction:column;background:#0a1521;border:1px solid rgba(120,214,255,.28)!important;border-radius:12px;box-shadow:0 24px 70px rgba(0,0,0,.5);overflow:hidden}',
'#hbn-ov .hbn-hd{display:flex;align-items:center;gap:6px;padding:10px 10px 10px 16px;border-bottom:1px solid rgba(120,214,255,.16)}',
'#hbn-ov .hbn-hd h2{margin:0 8px 0 0;font-size:15px;font-weight:700;color:#eaf6ff;letter-spacing:0}',
'#hbn-ov .hbn-tab{border:0!important;background:none;color:#8aa3b6;font:inherit;font-size:13.5px;font-weight:600;padding:6px 10px;border-radius:8px;cursor:pointer;margin:0}',
'#hbn-ov .hbn-tab small{font-size:11.5px;margin-left:3px;opacity:.75;color:inherit!important}',
'#hbn-ov .hbn-tab[aria-selected="true"]{background:rgba(120,214,255,.14);color:#8fe9ff}',
'#hbn-ov .hbn-sp{flex:1}',
'#hbn-ov .hbn-x{width:32px;height:32px;display:grid;place-items:center;border:0!important;border-radius:8px;background:none;color:#8aa3b6;cursor:pointer;font-size:20px;line-height:1;padding:0;margin:0}',
'#hbn-ov .hbn-x:hover{background:rgba(120,214,255,.1);color:#eaf6ff}',
'#hbn-ov .hbn-body{overflow:auto;padding:12px;display:flex;flex-direction:column;gap:12px;overscroll-behavior:contain}',
'#hbn-ov .hbn-who{display:flex;flex-wrap:wrap;gap:6px}',
'#hbn-ov .hbn-who button{border:1px solid rgba(120,214,255,.25)!important;background:rgba(120,214,255,.05);color:#cfe3ef;font:inherit;font-size:13px;padding:5px 12px;border-radius:999px;cursor:pointer;margin:0;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}',
'#hbn-ov .hbn-who button[aria-pressed="true"]{background:rgba(120,214,255,.2);border-color:rgba(120,214,255,.7)!important;color:#fff;font-weight:600}',
'#hbn-ov .hbn-empty{padding:28px 8px;text-align:center;color:#7d93a5;font-size:13px}',
'#hbn-ov .hbn-at{align-self:flex-end;margin-top:-6px;font-size:11.5px;color:#6f8698}',
/* the floating button sits above the input bar on the right, clear of the last message's swipe row; faint until touched */
'#hb-book-float{position:absolute;right:12px;bottom:calc(100% + 64px);width:40px;height:40px;border-radius:50%;display:grid;place-items:center;box-sizing:border-box;background:rgba(10,21,33,.55);color:#cfe9ff!important;border:1px solid rgba(120,214,255,.35)!important;-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);box-shadow:0 2px 10px rgba(0,0,0,.25);opacity:.6;cursor:pointer;z-index:30;font-size:16px;transition:opacity .15s}',
'#hb-book-float:hover,#hb-book-float:focus-visible{opacity:1}'
].join('\n');

var book = { el: null, tab: 'npc', who: null };
/* the profile, notification and shop blocks of a text, in the order they were written */
function bookBlocks(text) {
  var out = [], re = /<(profile|noti|shop)>([\s\S]*?)<\/\1>/gi, m;
  if (!text) return out;
  while ((m = re.exec(text))) out.push([m[1].toLowerCase(), m[2]]);
  return out;
}
function bookKey(s) { return String(s || '').toLowerCase().replace(/\s+/g, ''); }
function bookText(d) { return d._l.map(function (kv) { return kv[0] + ': ' + kv[1]; }).join('\n'); }
/* "근력 B" / "*관찰력 40" / "민첩 ?" -> { name, last } (last = the grade or number at the end, '' if none) */
function statTok(it) {
  var t = trimS(it).split(/\s+/), last = t.length > 1 ? t.pop() : '';
  return { name: t.join(' ').replace(/^[*＊]\s*/, ''), last: last };
}
/* the new end token of a stat after a change, or null when the change cannot be read safely */
function statNext(last, ch) {
  var tk = ch.split(/\s+|→|->|>/).filter(Boolean), end = tk[tk.length - 1] || '', sg;
  if (HB.grade(last)) return HB.grade(end) ? end.toUpperCase() : null;
  if (!/^\d+$/.test(last)) return null;                     /* locked (?) or no value: leave it */
  if ((sg = ch.match(/^\s*([+\-−＋－])\s*(\d+)/))) return String(Math.max(0, parseInt(last, 10) + parseInt(sg[2], 10) * (/[+＋]/.test(sg[1]) ? 1 : -1)));
  return /^\d+$/.test(end) ? end : null;
}
/* one "stat" line again, so a single item can be changed in place */
function statItems(d) {
  var its = HB.all(d, 'stat'), at = -1;
  d._l = d._l.filter(function (kv, i) { if (kv[0] !== 'stat') return true; if (at < 0) at = i; return false; });
  return { its: its, put: function () { if (at > -1) d._l.splice(at, 0, ['stat', its.join('; ')]); d.stat = [its.join('; ')]; } };
}
/* a <noti> "aff" or "stat" line about someone already in the notebook updates their latest profile.
   Anything that cannot be matched without guessing (no name, two names, an unknown stat, a locked value) is skipped. */
function bookNoti(people, raw, at) {
  HB.parse(raw)._l.forEach(function (kv) {
    if (kv[0] !== 'aff' && kv[0] !== 'stat') return;
    var f = HB.fields(kv[1]), what = bookKey(f[0]), ch = trimS(f[1] || ''), who = null, len = 0, tie = false;
    if (!what || !ch) return;
    Object.keys(people).forEach(function (k) {
      if (what.indexOf(k) < 0) return;
      if (k.length > len) { who = people[k]; len = k.length; tie = false; } else if (k.length === len) tie = true;
    });
    if (!who || tie) return;
    if (kv[0] === 'aff') {
      var a = HB.fields(HB.one(who.d, 'aff')), n = parseInt(a[0], 10), sg = ch.match(/^\s*([+\-−＋－])\s*(\d+)/), v;
      if (isNaN(n) || !/^\d+$/.test(trimS(a[0]))) return;   /* locked or unknown affection stays as it is */
      if (sg) v = n + parseInt(sg[2], 10) * (/[+＋]/.test(sg[1]) ? 1 : -1);
      else if (/^\d+$/.test(ch)) v = parseInt(ch, 10);
      else return;
      v = String(Math.max(0, Math.min(100, v)));
      [who.d, who.s].forEach(function (d) {
        d._l.forEach(function (x) { if (x[0] === 'aff') { var fs = HB.fields(x[1]); fs[0] = v; x[1] = fs.join('|'); } });
        d.aff = d._l.filter(function (x) { return x[0] === 'aff'; }).map(function (x) { return x[1]; });
      });
      who.at = at;
      return;
    }
    var rest = what.replace(who.key, ''), R = statItems(who.d), S = statItems(who.s), i, hit = -1;
    for (i = 0; i < R.its.length; i++) if (bookKey(statTok(R.its[i]).name) === rest) { hit = i; break; }
    if (hit < 0) {                                           /* "하린의 민첩": accept one stat the line ends with */
      R.its.forEach(function (it, j) { var sk = bookKey(statTok(it).name); if (sk && rest.slice(-sk.length) === sk) hit = hit === -1 ? j : -2; });
      if (hit < 0) hit = -1;
    }
    var t = hit > -1 ? statTok(R.its[hit]) : null, nv = t ? statNext(t.last, ch) : null;
    if (nv != null) {
      R.its[hit] = R.its[hit].replace(/\S+\s*$/, nv);
      /* the translated copy lists the same stats in the same order */
      if (S.its.length === R.its.length) { var ts = statTok(S.its[hit]); if (ts.last && (HB.grade(ts.last) ? HB.grade(nv) : /^\d+$/.test(ts.last))) S.its[hit] = S.its[hit].replace(/\S+\s*$/, nv); }
      who.at = at;
    }
    R.put(); S.put();
  });
}
function bookData() {
  var chat = C().chat || [], people = {}, shop = null;
  for (var i = 0; i < chat.length; i++) {
    var m = chat[i];
    if (isUserMes(m) || !m.mes || m.mes.indexOf('<') < 0) continue;
    var a = bookBlocks(m.mes), b = m.extra && m.extra.display_text ? bookBlocks(m.extra.display_text) : [];
    /* the translated copy is used only when it keeps every block in the same order */
    if (b.length !== a.length || b.some(function (x, n) { return x[0] !== a[n][0]; })) b = a;
    a.forEach(function (x, n) {
      if (x[0] === 'shop') { shop = { raw: b[n][1], at: i }; return; }
      if (x[0] === 'noti') { bookNoti(people, x[1], i); return; }
      var d = HB.parse(x[1]), s = HB.parse(b[n][1]), name = trimS(HB.one(d, 'name'));
      if (!name || HB.isQ(name)) return;                     /* a stranger with no name yet cannot be told apart */
      var key = bookKey(name);
      people[key] = { key: key, name: trimS(HB.one(s, 'name')) || name, d: d, s: s, at: i };
    });
  }
  /* the person seen or updated most recently comes first */
  var list = Object.keys(people).map(function (k) { var p = people[k]; p.raw = bookText(p.s); return p; }).sort(function (a, b) { return b.at - a.at; });
  return { people: list, shop: shop };
}
/* how many AI replies came after the one that showed it */
function bookAgo(at) {
  var chat = C().chat || [], n = 0;
  for (var i = at + 1; i < chat.length; i++) if (!isUserMes(chat[i])) n++;
  return n ? n + '개 전 응답' : '최근 응답';
}
function paintBook() {
  if (!book.el) return;
  var d = bookData(), body = book.el.querySelector('.hbn-body');
  book.el.querySelectorAll('.hbn-tab').forEach(function (b) {
    b.setAttribute('aria-selected', b.dataset.bt === book.tab ? 'true' : 'false');
    if (b.dataset.bt === 'npc') b.innerHTML = '인물' + (d.people.length ? '<small>' + d.people.length + '</small>' : '');
  });
  body.textContent = '';
  if (book.tab === 'npc') {
    if (!d.people.length) { body.innerHTML = '<div class="hbn-empty">아직 인물 창이 나오지 않았습니다.</div>'; return; }
    var cur = d.people.filter(function (p) { return p.key === book.who; })[0] || d.people[0];
    book.who = cur.key;
    var who = D.createElement('div'); who.className = 'hbn-who';
    who.innerHTML = d.people.map(function (p) { return '<button type="button" data-who="' + HB.esc(p.key) + '" aria-pressed="' + (p === cur ? 'true' : 'false') + '">' + HB.esc(p.name) + '</button>'; }).join('');
    body.appendChild(who);
    body.appendChild(makeHost('profile', cur.raw, { quiet: true }));
    body.insertAdjacentHTML('beforeend', '<div class="hbn-at">' + bookAgo(cur.at) + '</div>');
    return;
  }
  if (!d.shop) { body.innerHTML = '<div class="hbn-empty">아직 상점 창이 나오지 않았습니다.</div>'; return; }
  body.appendChild(makeHost('shop', d.shop.raw, { quiet: true, preview: true }));
  body.insertAdjacentHTML('beforeend', '<div class="hbn-at">' + bookAgo(d.shop.at) + '</div>');
}
/* SillyTavern puts a transform on <html>, so a fixed element moves with the page scroll: pull it back every frame */
function pinFixed(ov) {
  var raf = 0;
  (function place() {
    if (!ov.isConnected) return;
    var r = ov.getBoundingClientRect();
    if (Math.abs(r.top) > 0.5) ov.style.top = ((parseFloat(ov.style.top) || 0) - r.top) + 'px';
    if (Math.abs(r.left) > 0.5) ov.style.left = ((parseFloat(ov.style.left) || 0) - r.left) + 'px';
    raf = P.requestAnimationFrame(place);
  })();
  ov._unplace = function () { P.cancelAnimationFrame(raf); };
}
function openBook(tab) {
  if (tab) book.tab = tab;
  if (book.el && book.el.isConnected) { paintBook(); return; }
  var stale = D.getElementById('hbn-ov'); if (stale) stale.remove();
  var ov = D.createElement('div'); ov.id = 'hbn-ov';
  ov.innerHTML = '<div class="hbn" role="dialog" aria-modal="true" aria-label="수첩"><div class="hbn-hd"><h2>수첩</h2>' +
    '<button type="button" class="hbn-tab" data-bt="npc">인물</button><button type="button" class="hbn-tab" data-bt="shop">상점</button>' +
    '<span class="hbn-sp"></span><button type="button" class="hbn-x" aria-label="닫기">×</button></div><div class="hbn-body"></div></div>';
  var downOnBackdrop = false;
  ov.addEventListener('pointerdown', function (e) { downOnBackdrop = e.target === ov; });
  ov.addEventListener('click', function (e) {
    if (e.target === ov && downOnBackdrop) { closeBook(); return; }
    downOnBackdrop = false;
    if (e.target.closest('.hbn-x')) { closeBook(); return; }
    var t = e.target.closest('[data-bt]'); if (t) { book.tab = t.dataset.bt; paintBook(); return; }
    var w = e.target.closest('[data-who]'); if (w) { book.who = w.dataset.who; paintBook(); }
  });
  ov.addEventListener('keydown', function (e) { if (e.key === 'Escape') { e.stopPropagation(); closeBook(); } });
  D.body.appendChild(ov); book.el = ov;
  pinFixed(ov);
  paintBook();
}
function closeBook() { if (book.el) { try { book.el._unplace(); } catch (e) {} book.el.remove(); book.el = null; } }
/* where the notebook button lives (advanced tab): wand menu, an icon beside the wand in the input bar, or a floating button */
var BOOK_SPOTS = { wand: 'hb-wand-book', input: 'hb-book-btn', float: 'hb-book-float' };
function bookBtn(id, cls) {
  var el = D.createElement('div'); el.id = id; el.className = cls; el.setAttribute('data-inst', INSTANCE);
  el.title = '수첩'; el.tabIndex = 0; el.setAttribute('role', 'button'); el.setAttribute('aria-label', '수첩');
  el.addEventListener('click', function () { HB.opt.openBook(); });
  el.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); HB.opt.openBook(); } });
  return el;
}
function placeBook() {
  var at = S && S.ui && S.ui.book ? S.ui.bookAt : '';
  if (!BOOK_SPOTS[at]) at = S && S.ui && S.ui.book ? 'wand' : '';
  Object.keys(BOOK_SPOTS).forEach(function (k) {
    var el = D.getElementById(BOOK_SPOTS[k]);
    if (el && (k !== at || el.getAttribute('data-inst') !== INSTANCE)) el.remove();
  });
  if (!at) { closeBook(); return; }
  if (D.getElementById(BOOK_SPOTS[at])) return;
  if (at === 'wand') {
    var menu = D.getElementById('extensionsMenu');
    if (menu) wandItem(menu, 'hb-wand-book', 'fa-book', '수첩', HB.opt.openBook);
  } else if (at === 'input') {
    var left = D.getElementById('leftSendForm'), wand = D.getElementById('extensionsMenuButton');
    if (left) left.insertBefore(bookBtn('hb-book-btn', 'fa-solid fa-book interactable'), wand && wand.parentNode === left ? wand.nextSibling : null);
  } else {
    var fs = D.getElementById('form_sheld');
    if (fs) { var f = bookBtn('hb-book-float', ''); f.innerHTML = '<i class="fa-solid fa-book" aria-hidden="true"></i>'; fs.appendChild(f); }
  }
}
HB.opt.openBook = function () { try { openBook(); } catch (e) { console.error('[시스템 상태창] 수첩 오류', e); toast('수첩을 열지 못했습니다: ' + e.message, 'error'); } };

/* ---------- start / stop ---------- */
var obs = null, listeners = [], wandTimer = 0, handle = null, warnedOld = false, stateT = 0;
/* the extension takes the page back from an older script copy (v1.1.x) that does not know to step aside */
if (IS_EXT) setInterval(function () {
  var cur = P.__HB_SYSTEM_WINDOW__;
  if (!handle || (cur === handle && !HB.dead)) return;
  if (cur && cur !== handle) { try { cur.destroy(); } catch (e) {} }
  try { start(); } catch (e) { console.error('[시스템 상태창]', e); }
  if (!warnedOld) { warnedOld = true; toast('예전 스크립트 버전이 켜져 있습니다. 酒馆助手에서 "시스템 상태창" 스크립트를 지워 주세요.', 'warning'); }
}, 2000);
function on(name, fn) {
  var es = ctx.eventSource, types = ctx.eventTypes || ctx.event_types || {};
  var ev = types[name]; if (!es || !ev) return;
  es.on(ev, fn); listeners.push([ev, fn]);
}
function destroy() {
  HB.dead = true;
  try { if (obs) obs.disconnect(); } catch (e) {}
  try { listeners.forEach(function (l) { (ctx.eventSource.removeListener || ctx.eventSource.off).call(ctx.eventSource, l[0], l[1]); }); } catch (e) {}
  try { clearInterval(wandTimer); clearTimeout(stateT); clearTimeout(saveT); closeSettings(); closeBook(); } catch (e) {}
  try { ctx.setExtensionPrompt(PROMPT_ID, '', 1, 0, false, 0); } catch (e) {}
  try { unrender(); } catch (e) {}
  ['hb-wand', 'hb-wand-book', 'hb-book-btn', 'hb-book-float', 'hbs-style'].forEach(function (id) { var el = D.getElementById(id); if (el && (id === 'hbs-style' || el.getAttribute('data-inst') === INSTANCE)) el.remove(); });
  D.querySelectorAll('link[data-hb-font]').forEach(function (l) { l.remove(); });
  if (P.__HB_SYSTEM_WINDOW__ && P.__HB_SYSTEM_WINDOW__.destroy === destroy) delete P.__HB_SYSTEM_WINDOW__;
}
function start() {
  ctx = P.SillyTavern.getContext();
  /* a script copy (酒馆助手) steps aside when the extension is installed */
  if (!IS_EXT && P.__HB_SYSTEM_WINDOW__ && P.__HB_SYSTEM_WINDOW__.ext) {
    toast('확장 버전이 설치되어 있어 스크립트 버전은 쉬겠습니다. 酒馆助手에서 이 스크립트를 지워 주세요.', 'warning');
    return;
  }
  HB.dead = false; listeners = [];
  if (P.__HB_SYSTEM_WINDOW__) { try { P.__HB_SYSTEM_WINDOW__.destroy(); } catch (e) {} }
  /* a reloaded copy may not have cleaned up (its frame can already be gone): clear what it left on the page */
  ['hb-wand', 'hb-wand-book', 'hb-book-btn', 'hb-book-float', 'hbs-ov', 'hbn-ov', 'hbs-style'].forEach(function (id) { var el = D.getElementById(id); if (el) el.remove(); });
  try { unrender(); } catch (e) {}
  loadStore();
  var st = D.createElement('style'); st.id = 'hbs-style'; st.textContent = UI_CSS; D.head.appendChild(st);
  applyAll({ force: true });
  var chat = D.getElementById('chat');
  obs = new P.MutationObserver(function (muts) {
    if (HB.dead) return;
    for (var i = 0; i < muts.length; i++) {
      var added = muts[i].addedNodes;
      for (var j = 0; j < added.length; j++) {
        var n = added[j];
        if (n.nodeType !== 1 || (n.classList && n.classList.contains('hb-host'))) continue;
        if (n.classList && n.classList.contains('TH-collapse-code-block-button')) { var sp = n.parentNode && n.parentNode.querySelector(':scope > pre'); if (sp) process(sp); }
        else if (n.tagName === 'PRE') process(n);
        else if (n.tagName === 'CODE' && n.parentNode && n.parentNode.tagName === 'PRE') process(n.parentNode);
        else if (n.querySelectorAll) n.querySelectorAll('pre').forEach(process);
      }
    }
  });
  if (chat) obs.observe(chat, { childList: true, subtree: true });
  /* each chat can have its own link and settings */
  on('CHAT_CHANGED', function () { applyAll(); setTimeout(scanAll, 60); if (ui.el) paint(); if (book.el) { book.who = null; paintBook(); } });
  /* right before a reply is generated: the totals and the prompt-only regex must match this chat */
  on('GENERATION_STARTED', function (type) { applyPrompt(type); ensureRegex(false, true); });
  /* the chat's content changed: bring the status totals up to date, then whatever shows them */
  function stateChanged(redraw) {
    return function () {
      clearTimeout(stateT);
      stateT = setTimeout(function () {
        if (HB.dead) return;
        applyPrompt();                                   /* syncs the totals first */
        if (redraw) redrawStatus();                      /* later windows were drawn from the old totals */
        if (ui.el && ui.tab === 'state' && !ui.dirty) paint();
        if (book.el) paintBook();
      }, 120);
    };
  }
  on('MESSAGE_RECEIVED', stateChanged(false)); on('MESSAGE_SWIPED', stateChanged(false));
  ['MESSAGE_EDITED', 'MESSAGE_UPDATED', 'MESSAGE_DELETED'].forEach(function (ev) { on(ev, stateChanged(true)); });
  function settle() { setTimeout(function () { unrender('#chat .hb-host[data-hb-pending]'); scanAll(); }, 150); }
  on('GENERATION_ENDED', settle); on('GENERATION_STOPPED', settle);
  ['MESSAGE_RECEIVED', 'MESSAGE_SENT', 'MESSAGE_DELETED', 'CHARACTER_MESSAGE_RENDERED', 'USER_MESSAGE_RENDERED', 'MORE_MESSAGES_LOADED', 'CHAT_CHANGED'].forEach(function (ev) { on(ev, hideOld); });
  addWand(); wandTimer = setInterval(addWand, 3000);

  P.__HB_SYSTEM_WINDOW__ = handle = { ext: IS_EXT, destroy: destroy, open: openSettings, version: VERSION, buildPrompt: function () { resolve(); return buildPrompt(EF, promptState(EF)); },
    S: HB.S, state: function () { return currentState(); } };
  window.addEventListener('pagehide', destroy);
  console.log('[시스템 상태창] v' + VERSION + ' 시작');
}
(function wait(n) {
  var ok = false;
  try { ok = !!(P.SillyTavern && P.SillyTavern.getContext && D.getElementById('chat') && P.SillyTavern.getContext().extensionSettings); } catch (e) {}
  if (ok) { try { start(); } catch (e) { console.error('[시스템 상태창] 시작 실패', e); toast('시작하지 못했습니다: ' + e.message, 'error'); } }
  else if (n < 200) setTimeout(function () { wait(n + 1); }, 300);
  else { console.error('[시스템 상태창] 실리태번을 찾지 못해 시작하지 않았습니다.'); toast('실리태번을 찾지 못해 시작하지 않았습니다.', 'error'); }
})(0);

})();

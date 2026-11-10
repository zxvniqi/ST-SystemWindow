/* 시스템 상태창 (System Window) v1.2.2 — SillyTavern 확장
   설정: 마법봉 메뉴 > 시스템 상태창 */
(function () {
"use strict";
var VERSION = "1.2.2";
var IS_EXT = true;
var P = window; try { if (window.parent && window.parent !== window && window.parent.document && window.parent.SillyTavern) P = window.parent; } catch (e) {}
var D = P.document;
var INSTANCE = Math.random().toString(36).slice(2);
var BASE_FONTS = "https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;500;600;700&family=IBM+Plex+Sans+KR:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap";
var BASE_CSS = ":host{display:block;margin:8px 0;container:hb / inline-size;\n  color-scheme:dark;\n  --line:rgba(120,214,255,.30);\n  --line-soft:rgba(120,214,255,.13);\n  --fill:rgba(120,214,255,.07);\n  --panel-a:rgba(12,36,60,.92);\n  --panel-b:rgba(6,20,36,.95);\n  --tile:rgba(8,24,42,.6);\n  --hi:#8fe9ff;\n  --cy:#3cc9f0;\n  --cy-deep:#1a7fb0;\n  --txt:#e2f5ff;\n  --dim:#94b6cb;\n  --mute:#5e7f96;\n  --bg:#040a13;\n  --warn:#ff5d73;\n  --warn-soft:rgba(255,93,115,.12);\n  --ok:#5ff0c4;\n  --amber:#ffc762;\n  --violet:#ad92ff;\n  --rose:#ff86b0;\n  --g-f:#6b7d8f;--g-e:#8798aa;--g-d:#7cb8d2;--g-c:#45d3ee;--g-b:#5c9eff;--g-a:#ad92ff;--g-s:#ffc762;--g-ss:#ff86b0;\n  --r-common:#a9bccb;--r-rare:#45d3ee;--r-epic:#ad92ff;--r-legend:#ffc762;\n  --f-disp:\"Chakra Petch\",\"IBM Plex Sans KR\",ui-sans-serif,system-ui,sans-serif;\n  --f-body:\"IBM Plex Sans KR\",\"Apple SD Gothic Neo\",\"Malgun Gothic\",system-ui,sans-serif;\n  --f-mono:\"JetBrains Mono\",ui-monospace,Consolas,monospace;\n  --ease:cubic-bezier(.2,.8,.2,1);\n}\n.hb,.hb *{box-sizing:border-box}\n.hb{font-family:var(--f-body);font-size:14px;line-height:1.6;color:var(--txt);-webkit-font-smoothing:antialiased;display:flex;flex-direction:column;gap:12px;text-align:left}\n.hb svg.i{width:18px;height:18px;flex:none;fill:none;stroke:currentColor;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round}\n.hb .num{font-family:var(--f-disp);font-variant-numeric:tabular-nums}\n.hb .hl{color:var(--hi)}\n.hb p{margin:0}\n\n/* frame */\n.win{position:relative;background:linear-gradient(180deg,var(--panel-a),var(--panel-b));border:1px solid var(--line);box-shadow:0 0 0 1px rgba(0,0,0,.35),0 3px 10px rgba(0,0,0,.18),0 0 10px rgba(60,190,255,.08),inset 0 0 36px rgba(60,190,255,.05);--c:var(--hi);animation:hb-in .7s var(--ease) both;animation-delay:var(--d,0s)}\n@keyframes hb-in{0%{clip-path:inset(50% 0 50% 0);opacity:0;filter:brightness(2.2)}30%{clip-path:inset(calc(50% - 1px) 0 calc(50% - 1px) 0);opacity:1;filter:brightness(2.2)}100%{clip-path:inset(-40px);opacity:1;filter:brightness(1)}}\n.win::before{content:\"\";position:absolute;inset:-1px;pointer-events:none;z-index:3;\n  background:linear-gradient(var(--c),var(--c)) top left/14px 2px no-repeat,linear-gradient(var(--c),var(--c)) top left/2px 14px no-repeat,linear-gradient(var(--c),var(--c)) top right/14px 2px no-repeat,linear-gradient(var(--c),var(--c)) top right/2px 14px no-repeat,linear-gradient(var(--c),var(--c)) bottom left/14px 2px no-repeat,linear-gradient(var(--c),var(--c)) bottom left/2px 14px no-repeat,linear-gradient(var(--c),var(--c)) bottom right/14px 2px no-repeat,linear-gradient(var(--c),var(--c)) bottom right/2px 14px no-repeat;\n  filter:drop-shadow(0 0 4px var(--c));animation:hb-corner 3.2s ease-in-out infinite}\n@keyframes hb-corner{50%{opacity:.55}}\n.win::after{content:\"\";position:absolute;inset:0;pointer-events:none;z-index:2;background:repeating-linear-gradient(0deg,rgba(140,225,255,.028) 0 1px,transparent 1px 3px)}\n.win>*{position:relative;z-index:1}\n.hd{position:relative;display:flex;align-items:center;gap:10px;padding:11px 16px;border-bottom:1px solid var(--line-soft);background:linear-gradient(90deg,rgba(80,200,255,.10),transparent 70%);overflow:hidden}\n.hd::after{content:\"\";position:absolute;top:0;bottom:0;left:-40%;width:30%;background:linear-gradient(90deg,transparent,rgba(160,235,255,.16),transparent);transform:skewX(-20deg);animation:hb-sweep 1.1s var(--ease) both;animation-delay:calc(var(--d,0s) + .5s);pointer-events:none}\n@keyframes hb-sweep{from{left:-40%}to{left:120%}}\n.hd>.i{color:var(--hi);filter:drop-shadow(0 0 4px rgba(120,220,255,.6))}\n.hd-t{display:flex;align-items:baseline;gap:8px;min-width:0}\n.hd-t b{font-weight:600;font-size:14.5px;letter-spacing:.02em;white-space:nowrap}\n.hd-t small{font-family:var(--f-disp);font-size:10.5px;letter-spacing:.22em;color:var(--mute);text-transform:uppercase}\n.hd-r{margin-left:auto;display:flex;align-items:center;gap:8px;font-family:var(--f-disp);font-size:12px;color:var(--dim);white-space:nowrap;min-width:0}\n.bd{padding:14px 16px;display:flex;flex-direction:column;gap:14px}\n.lbl{font-family:var(--f-disp);font-size:10.5px;letter-spacing:.2em;color:var(--mute);text-transform:uppercase;display:flex;align-items:center;gap:10px}\n.lbl::after{content:\"\";flex:1;height:1px;background:linear-gradient(90deg,var(--line),transparent)}\n\n/* chips, grades, rarity */\n.g{display:inline-grid;place-items:center;min-width:28px;height:20px;padding:0 5px;font-family:var(--f-disp);font-weight:700;font-size:12px;color:var(--gc);border:1px solid color-mix(in srgb,var(--gc) 55%,transparent);background:color-mix(in srgb,var(--gc) 12%,transparent);text-shadow:0 0 6px color-mix(in srgb,var(--gc) 60%,transparent);white-space:nowrap}\n.g-f{--gc:var(--g-f)}.g-e{--gc:var(--g-e)}.g-d{--gc:var(--g-d)}.g-c{--gc:var(--g-c)}.g-b{--gc:var(--g-b)}.g-a{--gc:var(--g-a)}.g-s{--gc:var(--g-s)}.g-ss{--gc:var(--g-ss)}.g-x{--gc:var(--mute)}\n.g .i{width:11px!important;height:11px!important}\n.rar{display:inline-flex;align-items:center;gap:6px;font-size:12px;color:var(--rc)}\n.rar::before{content:\"\";width:8px;height:8px;transform:rotate(45deg);border:1px solid var(--rc);background:color-mix(in srgb,var(--rc) 30%,transparent)}\n.r-common{--rc:var(--r-common)}.r-rare{--rc:var(--r-rare)}.r-epic{--rc:var(--r-epic)}.r-legend{--rc:var(--r-legend)}\n.chip{display:inline-flex;align-items:center;gap:6px;padding:3px 9px 3px 7px;font-size:12px;border:1px solid var(--cc);background:color-mix(in srgb,var(--cc) 10%,transparent);line-height:1.4}\n.chip .i{width:13px!important;height:13px!important}\n.chip time{font-family:var(--f-disp);color:var(--dim);font-size:11.5px}\n.chip.buff{--cc:rgba(95,240,196,.5)}.chip.buff .i{color:var(--ok)}\n.chip.debuff{--cc:rgba(255,93,115,.5)}.chip.debuff .i{color:var(--warn)}\n.chip.tr{--cc:var(--line)}\n.chip.alert{--cc:rgba(255,93,115,.5);color:var(--warn)}\n.fx{display:flex;flex-wrap:wrap;gap:6px}\n.ico{display:grid;place-items:center;flex:none;border:1px solid color-mix(in srgb,var(--rc,var(--cy)) 60%,transparent);background:radial-gradient(circle at 50% 40%,color-mix(in srgb,var(--rc,var(--cy)) 22%,transparent),transparent 70%);color:var(--rc,var(--hi))}\n.ico .i{filter:drop-shadow(0 0 4px color-mix(in srgb,var(--rc,var(--cy)) 70%,transparent))}\n\n/* bars */\n.bar{position:relative;height:7px;background:var(--fill);border:1px solid var(--line-soft);overflow:hidden}\n.bar>i{position:absolute;inset:0 auto 0 0;width:var(--v);background:linear-gradient(90deg,var(--bc1,var(--cy-deep)),var(--bc2,var(--hi)));box-shadow:0 0 10px var(--bc2,var(--hi));animation:hb-fill 1.1s var(--ease) both;animation-delay:calc(var(--d,0s) + .45s)}\n@keyframes hb-fill{from{width:0}}\n.bar.hp{--bc1:#1d9e86;--bc2:var(--ok)}\n.bar.mp{--bc1:#2d5fd0;--bc2:#6fa8ff}\n.bar.fat{--bc1:#a8652a;--bc2:var(--amber)}\n.bar.love{--bc1:#a3406e;--bc2:var(--rose)}\n.bar.red{--bc1:#8a2033;--bc2:var(--warn)}\n.bar.uniq{--bc1:#6a4fc9;--bc2:var(--violet)}\n.bar.lockbar{background:repeating-linear-gradient(135deg,var(--fill) 0 4px,transparent 4px 8px)}\n.bar.lockbar>i{display:none}\n\n/* tabs */\n.tabs{display:flex;gap:2px;border-bottom:1px solid var(--line-soft);overflow-x:auto;scrollbar-width:none}\n.tab{font:500 13px/1 var(--f-body);color:var(--mute);background:none;border:0;border-bottom:2px solid transparent;margin-bottom:-1px;padding:9px 12px;cursor:pointer;white-space:nowrap;display:inline-flex;align-items:center;gap:6px}\n.tab small{font-family:var(--f-disp);font-size:11px;color:var(--mute)}\n.tab:hover{color:var(--dim)}\n.tab[aria-selected=\"true\"]{color:var(--hi);border-color:var(--hi);text-shadow:0 0 8px rgba(120,220,255,.5)}\n.tab:focus-visible{outline:1px solid var(--hi);outline-offset:-2px}\n.panel{animation:hb-panel .35s var(--ease) both}\n.panel[hidden]{display:none}\n@keyframes hb-panel{from{opacity:0;transform:translateX(6px)}}\n\n/* ===== status ===== */\n.who-lv{display:flex;align-items:baseline;gap:8px;min-width:0;max-width:100%}\n.who-lv b{font-family:var(--f-body);font-size:13.5px;font-weight:600;color:var(--txt);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0}\n.who-lv span{flex:none}\n.who-lv span{font-family:var(--f-disp);font-weight:600;font-size:13px;color:var(--hi);letter-spacing:.04em}\n.brief{display:flex;flex-direction:column;gap:12px;padding:14px 16px}\n/* date · time · weather on one airy line, the place on its own line below: no boxes */\n.info{display:flex;flex-wrap:wrap;align-items:center;gap:6px 18px;padding-bottom:12px;border-bottom:1px solid var(--line-soft)}\n.info>div{flex:0 1 auto;max-width:100%;display:flex;align-items:center;gap:6px;min-width:0}\n.info>div.loc{order:5;flex:1 1 100%}\n.info .i{width:14px!important;height:14px!important;color:var(--cy);opacity:.85}\n.info .v{font-size:13px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0}\n.vit{display:grid;grid-template-columns:repeat(var(--n),minmax(0,1fr));gap:14px}\n.vit>div{display:flex;flex-direction:column;gap:4px;min-width:0}\n.vit .row{display:flex;align-items:baseline;justify-content:space-between;gap:0 6px;flex-wrap:wrap}\n.vit .k{font-family:var(--f-disp);font-size:11px;letter-spacing:.14em;color:var(--dim);white-space:nowrap}\n.vit .v{font-family:var(--f-disp);font-size:12.5px;font-variant-numeric:tabular-nums;white-space:nowrap}\n.vit .v span{color:var(--mute)}\n.vit .bar{height:5px}\n.qline{display:flex;align-items:center;gap:8px;padding:5px 10px;border-left:2px solid rgba(255,199,98,.65);background:linear-gradient(90deg,rgba(255,199,98,.09),transparent 85%);font-size:12.5px;min-width:0}\n.qline .i{width:14px!important;height:14px!important;color:var(--amber)}\n.qline b{font-weight:500;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0}\n.qline time{margin-left:auto;font-family:var(--f-disp);color:var(--amber);white-space:nowrap}\n.bline{display:flex;align-items:center;gap:8px 14px;flex-wrap:wrap}\n.bline .fx{flex:1 1 auto;min-width:0}\n.st .fx .chip{border-color:transparent;background:color-mix(in srgb,var(--cc) 22%,transparent)}\n.money{display:flex;flex-wrap:wrap;gap:4px 14px;margin-left:auto;font-size:12.5px;color:var(--dim)}\n.money span{display:inline-flex;align-items:center;gap:5px;white-space:nowrap}\n.money .i{width:14px!important;height:14px!important;color:var(--cy)}\n.money b{font-family:var(--f-disp);font-weight:600;color:var(--txt);font-variant-numeric:tabular-nums}\n.st .more{border-top:1px solid var(--line-soft);animation:hb-unfold .45s var(--ease) both}\n.st .more[hidden]{display:none}\n.more-t{display:flex;width:100%;align-items:center;justify-content:center;gap:6px;padding:7px 12px;border:0;border-top:1px solid var(--line-soft);background:linear-gradient(180deg,transparent,rgba(80,200,255,.06));color:var(--dim);font:500 12px/1.2 var(--f-body);letter-spacing:.04em;cursor:pointer;transition:color .2s,background .2s}\n.more-t:hover{color:var(--hi);background:linear-gradient(180deg,transparent,rgba(80,200,255,.14))}\n.more-t:focus-visible{outline:1px solid var(--hi);outline-offset:-2px}\n.more-t .i{width:14px!important;height:14px!important;transition:transform .25s var(--ease)}\n.more-t[aria-expanded=\"true\"] .i{transform:rotate(180deg)}\n.more-t small{font-family:var(--f-disp);color:var(--mute);font-size:11px}\n@keyframes hb-unfold{from{opacity:0;transform:translateY(-6px)}}\n.prof{display:flex;align-items:center;gap:8px 14px;flex-wrap:wrap}\n.prof .role{font-size:12.5px;color:var(--dim)}\n/* title badge: slanted gold plate with a slow sheen */\n.ttl{position:relative;display:inline-flex;align-items:center;gap:7px;min-width:0;max-width:100%;padding:5px 18px 5px 12px;overflow:hidden;\n  background:linear-gradient(90deg,rgba(255,199,98,.22),rgba(255,199,98,.06) 70%,rgba(255,199,98,.02));\n  border-top:1px solid rgba(255,199,98,.55);border-bottom:1px solid rgba(255,199,98,.25);clip-path:polygon(8px 0,100% 0,calc(100% - 8px) 100%,0 100%)}\n.ttl::after{content:\"\";position:absolute;top:0;bottom:0;left:-40%;width:30%;background:linear-gradient(90deg,transparent,rgba(255,236,190,.28),transparent);transform:skewX(-20deg);animation:hb-sheen 4.5s ease-in-out infinite;animation-delay:calc(var(--d,0s) + 1.2s)}\n@keyframes hb-sheen{0%,60%{left:-40%}100%{left:130%}}\n.ttl .i{width:15px!important;height:15px!important;color:var(--amber);filter:drop-shadow(0 0 4px rgba(255,199,98,.7));flex:none}\n.ttl small{font-family:var(--f-disp);font-size:10.5px;letter-spacing:.16em;color:color-mix(in srgb,var(--amber) 70%,transparent);flex:none}\n.ttl em{font-style:normal;font-size:13.5px;font-weight:600;color:#ffe2a6;text-shadow:0 0 10px rgba(255,199,98,.5);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0}\n.who-lv .rk{display:inline-flex;align-items:center;gap:6px}\n.prof .stp{margin-left:auto;font-size:12px;color:var(--dim);white-space:nowrap}\n.prof .stp b{font-family:var(--f-disp);color:var(--amber);font-weight:600;margin-left:4px}\n.meter{display:grid;grid-template-columns:40px 1fr auto;gap:12px;align-items:center}\n.meter .k{font-family:var(--f-disp);font-size:11.5px;letter-spacing:.12em;color:var(--dim)}\n.meter .v{font-family:var(--f-disp);font-size:12.5px;text-align:right;font-variant-numeric:tabular-nums;white-space:nowrap}\n.meter .v span{color:var(--mute)}\n.stats{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:6px}\n.stat{display:flex;align-items:center;gap:10px;padding:8px 10px 8px 12px;border:1px solid var(--line-soft);background:var(--tile);min-width:0}\n.stat .k{font-size:13px;color:var(--dim);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.stat .n{margin-left:auto;font-family:var(--f-disp);font-size:15px;font-weight:600;font-variant-numeric:tabular-nums}\n.stat .g{margin-left:auto}\n.stat .n+.g{margin-left:0}\n.inv{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:6px}\n.slot{display:grid;grid-template-columns:36px 1fr auto;gap:10px;align-items:center;padding:7px 10px 7px 7px;border:1px solid var(--line-soft);background:var(--tile);min-width:0}\n.slot .ico{width:36px;height:36px}\n.slot .ico .i{width:18px;height:18px}\n.slot .nm{display:flex;flex-direction:column;min-width:0;line-height:1.35}\n.slot .nm b{font-size:13px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.slot .nm span{font-size:11px;color:var(--rc)}\n.slot .q{font-family:var(--f-disp);font-size:12.5px;color:var(--dim);font-variant-numeric:tabular-nums;white-space:nowrap}\n.slot .eq{font-size:10.5px;font-weight:600;color:var(--bg);background:var(--hi);padding:1px 5px;white-space:nowrap}\n.skills{display:flex;flex-direction:column;gap:6px}\n.skill{display:grid;grid-template-columns:36px minmax(0,1fr);gap:12px;align-items:center;padding:8px 12px 8px 8px;border:1px solid var(--line-soft);background:var(--tile)}\n.skill .ico{width:36px;height:36px}\n.skill .ico .i{width:18px;height:18px}\n.skill .tx{display:flex;flex-direction:column;gap:2px;min-width:0}\n.skill .top{display:flex;align-items:center;gap:4px 8px;flex-wrap:wrap;min-width:0}\n.skill .top b{font-size:13.5px;font-weight:600;line-height:1.4}\n.skill .top .lv{font-family:var(--f-disp);font-weight:500;color:var(--hi);font-size:12px}\n.skill .type{font-size:10.5px;line-height:1.5;padding:0 6px;border:1px solid var(--line);color:var(--dim);white-space:nowrap}\n.skill .type.on{color:var(--hi);border-color:rgba(143,233,255,.5)}\n.skill .cost{margin-left:auto;font-family:var(--f-disp);font-size:11.5px;color:var(--mute);white-space:nowrap}\n.skill .ds{font-size:12px;color:var(--dim);line-height:1.5}\n\n/* ===== system ===== */\n.sys{text-align:center;padding:18px 20px;display:flex;flex-direction:column;align-items:center;gap:6px}\n.sys .tag{font-family:var(--f-disp);font-size:11px;letter-spacing:.3em;color:var(--cy)}\n.sys .msg{font-size:15.5px;font-weight:500;text-wrap:balance}\n.sys .sub{font-size:13px;color:var(--dim);text-wrap:balance}\n.talk{display:grid;grid-template-columns:auto 1fr;gap:12px;padding:14px 16px;align-items:start}\n.talk .who{display:grid;place-items:center;width:34px;height:34px;border:1px solid var(--line);color:var(--hi);background:var(--fill)}\n.talk .who .i{animation:hb-spin 8s linear infinite}\n@keyframes hb-spin{to{transform:rotate(360deg)}}\n.talk .body{display:flex;flex-direction:column;gap:3px;min-width:0}\n.talk .nm{font-family:var(--f-disp);font-size:11px;letter-spacing:.26em;color:var(--cy)}\n.talk .sub{color:var(--dim);font-size:13px}\n.caret::after{content:\"\";display:inline-block;width:7px;height:1em;margin-left:4px;vertical-align:-2px;background:var(--hi);animation:hb-blink 1s steps(1) infinite}\n@keyframes hb-blink{50%{opacity:0}}\n.win.warn{--c:var(--warn);border-color:rgba(255,93,115,.45);background:linear-gradient(180deg,rgba(54,14,26,.92),rgba(26,8,16,.95));animation:hb-in .7s var(--ease) both,hb-alarm 1.8s ease-in-out infinite;animation-delay:var(--d,0s),calc(var(--d,0s) + .7s)}\n@keyframes hb-alarm{0%,100%{box-shadow:0 0 18px rgba(255,93,115,.10),inset 0 0 30px rgba(255,93,115,.05)}50%{box-shadow:0 0 34px rgba(255,93,115,.32),inset 0 0 40px rgba(255,93,115,.14)}}\n.win.warn .tag{color:var(--warn)}\n.win.warn .msg .hl{color:var(--warn)}\n/* error: static on the surface, text never leaves */\n.win.err{--c:var(--violet);border-color:rgba(173,146,255,.45);background:linear-gradient(180deg,rgba(26,16,48,.93),rgba(10,8,24,.96));animation:hb-in .7s var(--ease) both,hb-errflick 5.3s steps(1) infinite;animation-delay:var(--d,0s),calc(var(--d,0s) + .8s)}\n@keyframes hb-errflick{0%,100%{filter:none}31%{filter:brightness(1.4) hue-rotate(-18deg)}31.6%{filter:none}32.4%{filter:brightness(.8)}33%{filter:none}77%{filter:brightness(1.3) saturate(1.5)}77.8%{filter:none}}\n.err .fxl{position:absolute;inset:0;overflow:hidden;z-index:2;pointer-events:none}\n.err .slice{position:absolute;left:-1px;right:-1px;z-index:4;pointer-events:none;display:none;border-left:2px solid var(--rose);border-right:2px solid var(--cy);background:linear-gradient(90deg,rgba(255,134,176,.22),rgba(26,16,48,.75) 20%,rgba(26,16,48,.75) 80%,rgba(69,211,238,.22));box-shadow:0 0 10px rgba(173,146,255,.35);backdrop-filter:hue-rotate(60deg) brightness(1.3)}\n.err.burst .slice{display:block}\n.gx .ch{display:inline-block;white-space:pre}\n.gx .ch.j{transform:translate(var(--x,0),var(--y,0));color:var(--jc,var(--rose));text-shadow:-2px 0 rgba(69,211,238,.8),2px 0 rgba(255,134,176,.8)}\n.gx.shift{transform:translateX(var(--sx,3px)) skewX(var(--sk,-8deg))}\n@keyframes hb-gxj{0%,100%{translate:0 0}38%{translate:1.5px 0}39%{translate:-1px 0}40%{translate:0 0}71%{translate:-2px 1px}72%{translate:0 0}}\n.gx-sub.shift{transform:translateX(var(--sx,-3px))}\n.err .noise{position:absolute;inset:0;z-index:1;pointer-events:none;opacity:.07;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)'/%3E%3C/svg%3E\");animation:hb-noise .25s steps(3) infinite}\n@keyframes hb-noise{0%{background-position:0 0}33%{background-position:-40px 20px}66%{background-position:30px -50px}100%{background-position:-10px 40px}}\n.err .band{position:absolute;left:0;right:0;height:22%;top:-25%;z-index:1;pointer-events:none;background:linear-gradient(180deg,transparent,rgba(173,146,255,.10) 40%,rgba(255,134,176,.12) 60%,transparent);animation:hb-band 3.6s linear infinite}\n@keyframes hb-band{to{top:110%}}\n.err .tear{position:absolute;left:0;right:0;height:2px;z-index:1;pointer-events:none;background:rgba(255,134,176,.5);box-shadow:0 0 8px rgba(255,134,176,.6);opacity:0;animation:hb-tear 4.3s steps(1) infinite}\n@keyframes hb-tear{0%,100%{opacity:0}62%{opacity:1;top:28%}63%{opacity:0}81%{opacity:.8;top:71%}82%{opacity:0}}\n.gx-hd{display:flex;align-items:center;gap:10px;padding:10px 16px;border-bottom:1px solid rgba(173,146,255,.2);font-family:var(--f-mono);font-size:11px;color:var(--violet);letter-spacing:.06em}\n.gx-hd .i{width:15px!important;height:15px!important}\n.gx-hd .r{margin-left:auto;color:var(--rose);animation:hb-blink 1.2s steps(1) infinite}\n.gx-bd{padding:18px 18px 16px;display:flex;flex-direction:column;gap:8px;align-items:center;text-align:center}\n.gx{position:relative;display:inline-block;font-size:16px;font-weight:600;text-wrap:balance;animation:hb-gxj 2.9s steps(1) infinite;text-shadow:-1px 0 rgba(255,134,176,.55),1px 0 rgba(69,211,238,.55)}\n.gx::before,.gx::after{content:attr(data-t);position:absolute;inset:0;pointer-events:none;text-shadow:none;clip-path:inset(0 0 100% 0)}\n.gx::before{color:var(--rose);animation:hb-sl1 3.7s steps(1) infinite}\n.gx::after{color:var(--cy);animation:hb-sl2 4.6s steps(1) infinite}\n@keyframes hb-sl1{0%,100%{clip-path:inset(0 0 100% 0);transform:none}70%{clip-path:inset(10% 0 66% 0);transform:translate(-4px,0)}72%{clip-path:inset(52% 0 26% 0);transform:translate(3px,0)}74%{clip-path:inset(30% 0 50% 0);transform:translate(-6px,0)}76%{clip-path:inset(76% 0 6% 0);transform:translate(2px,0)}78%{clip-path:inset(0 0 100% 0)}}\n@keyframes hb-sl2{0%,100%{clip-path:inset(0 0 100% 0);transform:none}40%{clip-path:inset(60% 0 16% 0);transform:translate(5px,0)}42%{clip-path:inset(6% 0 78% 0);transform:translate(-4px,0)}44%{clip-path:inset(40% 0 38% 0);transform:translate(6px,0)}46%{clip-path:inset(0 0 100% 0)}88%{clip-path:inset(22% 0 60% 0);transform:translate(-3px,0)}90%{clip-path:inset(0 0 100% 0)}}\n.gx-sub{display:inline-block;font-size:13px;color:var(--dim)}\n.redact{display:inline-block;height:1.05em;width:var(--w,4em);vertical-align:-2px;background:repeating-linear-gradient(90deg,var(--txt) 0 3px,rgba(226,245,255,.75) 3px 4px);animation:hb-redact 1.4s steps(2) infinite}\n@keyframes hb-redact{50%{filter:brightness(.7);transform:translateX(1px)}}\n.gx-log{align-self:stretch;margin:6px 0 0;padding:9px 12px;list-style:none;border:1px solid rgba(173,146,255,.18);background:rgba(10,6,22,.7);font-family:var(--f-mono);font-size:11.5px;line-height:1.7;color:var(--mute);text-align:left}\n.gx-log li{display:flex;gap:10px;min-width:0}\n.gx-log li span:first-child{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.gx-log .s{margin-left:auto;flex:none;color:var(--warn)}\n.gx-log .s.ok{color:var(--ok)}\n.lvup{padding:22px 20px;text-align:center;display:flex;flex-direction:column;gap:4px;align-items:center;overflow:hidden}\n.lvup .ring{position:absolute;left:50%;top:42%;width:60px;height:60px;margin:-30px 0 0 -30px;border:1px solid var(--hi);border-radius:50%;z-index:0;opacity:0;animation:hb-ring 1.6s var(--ease) both;animation-delay:calc(var(--d,0s) + .55s)}\n.lvup .ring.r2{animation-delay:calc(var(--d,0s) + .8s)}\n@keyframes hb-ring{0%{transform:scale(.4);opacity:.9}100%{transform:scale(9);opacity:0}}\n.lvup .big{font-family:var(--f-disp);font-weight:700;font-size:30px;letter-spacing:.24em;padding-left:.24em;color:var(--hi);text-shadow:0 0 18px rgba(110,220,255,.6);line-height:1.2;animation:hb-track 1s var(--ease) both,hb-glow 2.4s ease-in-out infinite;animation-delay:calc(var(--d,0s) + .4s),calc(var(--d,0s) + 1.4s)}\n@keyframes hb-track{from{letter-spacing:.8em;opacity:0;filter:blur(6px)}}\n@keyframes hb-glow{50%{text-shadow:0 0 28px rgba(110,220,255,.95),0 0 6px rgba(255,255,255,.6)}}\n.lvup .from{font-family:var(--f-disp);font-size:14px;color:var(--dim)}\n.lvup .from b{color:var(--txt);font-weight:600}\n.lvup .sub{font-size:13px;color:var(--dim)}\n\n/* ===== noti ===== */\n.toast{display:flex;flex-direction:column;gap:6px}\n.t{display:flex;align-items:center;gap:10px;padding:7px 12px;border:1px solid var(--line-soft);border-left:2px solid var(--tc,var(--cy));background:linear-gradient(180deg,var(--panel-a),var(--panel-b));font-size:13px;animation:hb-toast .55s var(--ease) both;animation-delay:calc(var(--d,0s) + var(--td,0s))}\n@keyframes hb-toast{from{opacity:0;transform:translateX(-14px)}}\n.t .i{width:15px!important;height:15px!important;color:var(--tc,var(--cy))}\n.t b{font-weight:500;min-width:0}\n.t .d{margin-left:auto;font-family:var(--f-disp);font-size:12.5px;color:var(--tc,var(--cy));font-variant-numeric:tabular-nums;white-space:nowrap}\n.t.nt-exp{--tc:var(--hi)}.t.nt-skill{--tc:var(--violet)}.t.nt-title{--tc:var(--amber)}.t.nt-aff{--tc:var(--rose)}.t.nt-item{--tc:var(--r-rare)}.t.nt-stat{--tc:var(--ok)}.t.nt-quest{--tc:var(--amber)}.t.nt-neg{--tc:var(--warn)}\n\n/* ===== quest ===== */\n.qtype{font-family:var(--f-body);font-size:11.5px;font-weight:600;padding:2px 8px;border:1px solid currentColor;color:var(--cy);letter-spacing:.04em}\n.qtype.urgent{color:var(--warn);background:var(--warn-soft);animation:hb-blink2 1.2s ease-in-out infinite}\n@keyframes hb-blink2{50%{background:rgba(255,93,115,.3)}}\n.qtype.hidden{color:var(--violet);background:rgba(173,146,255,.1)}\n.qtype.main{color:var(--amber);background:rgba(255,199,98,.08)}\n.qtype.state{color:var(--dim)}\n.qtitle{font-size:19px;font-weight:600;line-height:1.35;text-wrap:balance}\n.qdesc{color:var(--dim);font-size:13.5px}\n.obj{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:6px}\n.obj li{display:grid;grid-template-columns:18px 1fr auto;gap:10px;align-items:center;font-size:13.5px}\n.box{width:16px;height:16px;border:1px solid var(--line);display:grid;place-items:center}\n.box .i{width:12px!important;height:12px!important;stroke-width:2.4!important;color:var(--bg)}\n.obj li.done .box{background:var(--ok);border-color:var(--ok);box-shadow:0 0 8px rgba(95,240,196,.6)}\n.obj li.done .t1{color:var(--mute);text-decoration:line-through;text-decoration-color:rgba(148,182,203,.5)}\n.obj .cnt{font-family:var(--f-disp);font-size:12.5px;color:var(--dim);font-variant-numeric:tabular-nums}\n/* timer colour follows the time left: plenty = blue, half = amber, little = red */\n.timer{--tm:var(--hi);display:grid;grid-template-columns:auto 1fr;gap:6px 14px;align-items:center;padding:10px 12px;border:1px solid color-mix(in srgb,var(--tm) 35%,transparent);background:color-mix(in srgb,var(--tm) 8%,transparent)}\n.timer.t-mid{--tm:var(--amber)}.timer.t-low{--tm:var(--warn)}\n.timer>.i{color:var(--tm);width:20px!important;height:20px!important;grid-row:span 2}\n.timer .row{display:flex;align-items:baseline;justify-content:space-between;gap:10px}\n.timer .k{font-size:12px;color:var(--dim)}\n.timer .clock{font-family:var(--f-disp);font-weight:600;font-size:22px;letter-spacing:.06em;color:var(--tm);font-variant-numeric:tabular-nums;line-height:1;text-shadow:0 0 10px color-mix(in srgb,var(--tm) 50%,transparent)}\n.timer.t-low .clock .c{animation:hb-blink 1s steps(1) infinite}\n.timer.solo{grid-template-columns:auto 1fr}\n.timer.solo>.i{grid-row:auto}\n.rp{display:flex;flex-direction:column;gap:8px}\n.rp>div{border:1px solid var(--line-soft);padding:10px 12px;display:flex;flex-direction:column;gap:6px;background:var(--tile)}\n.rp .h{display:flex;align-items:center;gap:6px;font-size:12px;font-weight:600;letter-spacing:.04em}\n.rp .h .i{width:15px!important;height:15px!important}\n.rp .rw .h{color:var(--ok)}\n.rp .pn .h{color:var(--warn)}\n.rp ul{margin:0;padding:0;list-style:none;display:flex;flex-wrap:wrap;gap:4px 18px;font-size:13px}\n.rp li{display:flex;gap:8px}\n.rp li::before{content:\"\";flex:none;width:4px;height:4px;margin-top:9px}\n.rp .rw li::before{background:var(--ok)}\n.rp .pn li::before{background:var(--warn)}\n.act{display:flex;gap:8px;justify-content:flex-end;align-items:center;min-height:38px;flex-wrap:wrap}\n.btn{position:relative;overflow:hidden;font:600 13px/1 var(--f-body);color:var(--txt);background:var(--fill);border:1px solid var(--line);padding:10px 20px;cursor:pointer;letter-spacing:.04em;transition:border-color .2s,box-shadow .2s,color .2s}\n.btn.pri{background:linear-gradient(180deg,rgba(80,200,255,.28),rgba(40,140,200,.2));border-color:var(--hi);color:#fff;box-shadow:0 0 12px rgba(80,200,255,.25)}\n.btn:hover{border-color:var(--hi);box-shadow:0 0 16px rgba(80,200,255,.35)}\n.btn.no:hover{border-color:var(--warn);color:var(--warn);box-shadow:0 0 16px rgba(255,93,115,.3)}\n.btn:focus-visible{outline:1px solid var(--hi);outline-offset:2px}\n.btn::after{content:\"\";position:absolute;top:0;bottom:0;left:-60%;width:40%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.25),transparent);transform:skewX(-20deg);transition:left .5s var(--ease)}\n.btn:hover::after{left:130%}\n.result{display:flex;align-items:center;gap:10px;margin-right:auto;font-size:13.5px;font-weight:600;animation:hb-stamp .45s var(--ease) both;flex-wrap:wrap}\n.result .i{width:18px;height:18px}\n.result.ok{color:var(--ok)}\n.result.no{color:var(--warn)}\n.result small{font-weight:400;color:var(--mute);font-size:12px}\n@keyframes hb-stamp{0%{opacity:0;transform:scale(1.25);filter:blur(3px)}100%{opacity:1;transform:none;filter:none}}\n.undo{font:500 12px/1 var(--f-body);color:var(--mute);background:none;border:0;padding:6px;cursor:pointer;text-decoration:underline;text-underline-offset:3px}\n.undo:hover{color:var(--dim)}\n.win.q-acc{--c:var(--ok)}\n.win.q-rej{--c:var(--warn)}\n.win.clear{--c:var(--ok);border-color:rgba(95,240,196,.4)}\n.win.fail{--c:var(--warn);border-color:rgba(255,93,115,.45)}\n.res-hd{position:relative;display:flex;flex-direction:column;align-items:center;gap:4px;padding:18px 16px 4px;overflow:hidden;text-align:center}\n.res-hd .big{position:relative;font-family:var(--f-disp);font-weight:700;font-size:24px;letter-spacing:.28em;padding-left:.28em;line-height:1.2;color:var(--ok);text-shadow:0 0 16px rgba(95,240,196,.5);animation:hb-stamp .6s var(--ease) both;animation-delay:calc(var(--d,0s) + .5s);overflow:hidden}\n.fail .res-hd .big{color:var(--warn);text-shadow:0 0 16px rgba(255,93,115,.5)}\n.res-hd .big::after{content:\"\";position:absolute;top:0;bottom:0;left:-30%;width:25%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.45),transparent);transform:skewX(-20deg);animation:hb-sweep2 2.8s ease-in-out infinite;animation-delay:calc(var(--d,0s) + 1.2s)}\n@keyframes hb-sweep2{0%{left:-30%}40%,100%{left:120%}}\n.res-hd .q{font-size:13px;color:var(--dim);display:inline-flex;align-items:center;gap:6px;flex-wrap:wrap;justify-content:center}\n.got{display:flex;flex-wrap:wrap;gap:8px}\n.got>div{flex:1 1 140px;border:1px solid var(--line-soft);padding:10px;text-align:center;background:var(--tile);font-size:13.5px;font-weight:500;animation:hb-toast .5s var(--ease) both;animation-delay:calc(var(--d,0s) + .9s + var(--td,0s))}\n.fail .got>div{color:var(--warn);border-color:rgba(255,93,115,.25)}\n\n/* ===== profile ===== */\n.anal{display:flex;align-items:center;gap:6px}\n.anal .bar{width:56px;height:5px}\n.ch-top{display:grid;grid-template-columns:72px 1fr;gap:16px;align-items:center}\n.rank{position:relative;width:72px;height:72px;display:grid;place-items:center;--gc:var(--g-a)}\n.rank svg.hex{position:absolute;inset:0;width:100%;height:100%;fill:none;stroke:var(--gc)}\n.rank svg.hex .o{stroke-opacity:.7}\n.rank svg.hex .n{stroke-opacity:.25;animation:hb-hex 2.8s ease-in-out infinite}\n@keyframes hb-hex{50%{stroke-opacity:.6}}\n.rank b{position:relative;font-family:var(--f-disp);font-weight:700;font-size:30px;color:var(--gc);text-shadow:0 0 14px color-mix(in srgb,var(--gc) 70%,transparent);line-height:1}\n.rank b.ss{font-size:25px}\n.rank small{position:absolute;bottom:-2px;left:50%;transform:translateX(-50%);font-family:var(--f-disp);font-size:9.5px;letter-spacing:.2em;color:var(--mute);background:var(--panel-b);padding:0 4px;white-space:nowrap}\n.rank.unk{--gc:var(--mute)}\n.rank.unk svg.hex .o{stroke-dasharray:4 4}\n.rank.unk>.i{position:relative;width:24px;height:24px;color:var(--mute)}\n.ch-id{display:flex;flex-direction:column;gap:4px;min-width:0}\n.ch-id .name{font-size:20px;font-weight:600;line-height:1.25}\n.ch-id .meta{font-size:12.5px;color:var(--dim)}\n.ch-id .fx{margin-top:4px}\n.q3{font-family:var(--f-disp);color:var(--mute);letter-spacing:.06em}\n.slist{display:flex;flex-direction:column;gap:7px}\n.srow{display:grid;grid-template-columns:minmax(44px,max-content) 1fr 40px;gap:12px;align-items:center}\n.srow .k{font-size:13px;color:var(--dim);display:inline-flex;align-items:center;gap:4px;white-space:nowrap}\n.srow .k .i{width:12px!important;height:12px!important;color:var(--violet)}\n.srow.uq .k{color:var(--txt)}\n.srow .bar{height:5px}\n.srow .g{justify-self:end}\n.srow.locked .k{color:var(--mute)}\n.aff{display:grid;grid-template-columns:auto 1fr auto;gap:12px;align-items:center;padding:10px 12px;border:1px solid rgba(255,134,176,.28);background:rgba(255,134,176,.06)}\n.aff>.i{color:var(--rose);animation:hb-beat 1.6s ease-in-out infinite}\n@keyframes hb-beat{0%,60%,100%{transform:scale(1)}20%{transform:scale(1.18)}40%{transform:scale(.96)}}\n.aff .k{display:flex;flex-direction:column;gap:5px}\n.aff .k span{font-size:12px;color:var(--dim)}\n.aff .k span b{color:var(--rose);font-weight:600;margin-left:6px}\n.aff .v{font-family:var(--f-disp);font-size:20px;font-weight:600;color:var(--rose);font-variant-numeric:tabular-nums}\n.aff .v small{font-size:12px;color:var(--mute);font-weight:500}\n.thought{position:relative;padding:12px 14px 12px 42px;border:1px dashed var(--line);font-size:14px;background:rgba(8,24,42,.5);min-height:48px}\n.thought>.i{position:absolute;left:14px;top:14px;width:16px;height:16px;color:var(--cy)}\n.tw{display:block}\n.tw.typing::after{content:\"\";display:inline-block;width:2px;height:1em;margin-left:2px;vertical-align:-2px;background:var(--hi);animation:hb-blink .8s steps(1) infinite}\n.lockbox{position:relative;overflow:hidden}\n.lockbox .veil{filter:blur(5px);opacity:.45;user-select:none;pointer-events:none}\n.lk-ov{position:absolute;inset:0;z-index:2;display:flex;align-items:center;justify-content:center;gap:10px;padding:0 12px;text-align:center;background:repeating-linear-gradient(135deg,rgba(4,10,19,.55) 0 6px,rgba(4,10,19,.35) 6px 12px)}\n.lk-ov .i{width:16px!important;height:16px!important;color:var(--warn)}\n.lk-ov span{font-size:12.5px;color:var(--dim)}\n.lk-ov::after{content:\"\";position:absolute;left:0;right:0;height:1px;top:0;background:linear-gradient(90deg,transparent,rgba(255,93,115,.6),transparent);animation:hb-scan 2.4s linear infinite}\n@keyframes hb-scan{to{top:100%}}\n\n/* ===== shop ===== */\n.items{display:flex;flex-direction:column;gap:8px}\n.item{position:relative;display:grid;grid-template-columns:44px 1fr auto;gap:12px;align-items:center;padding:10px 12px;border:1px solid var(--line-soft);background:var(--tile);overflow:hidden;transition:border-color .2s,background .2s;animation:hb-toast .5s var(--ease) both;animation-delay:calc(var(--d,0s) + .5s + var(--td,0s))}\n.item::after{content:\"\";position:absolute;top:0;bottom:0;left:-40%;width:30%;background:linear-gradient(90deg,transparent,color-mix(in srgb,var(--rc) 18%,transparent),transparent);transform:skewX(-20deg);transition:left .6s var(--ease);pointer-events:none}\n.item:hover{border-color:color-mix(in srgb,var(--rc) 50%,transparent);background:rgba(12,32,54,.7)}\n.item:hover::after{left:120%}\n.item .ico{width:44px;height:44px}\n.item .ico .i{width:22px;height:22px}\n.item.r-legend .ico{animation:hb-legend 2.6s ease-in-out infinite}\n@keyframes hb-legend{50%{box-shadow:0 0 16px rgba(255,199,98,.45)}}\n.it{display:flex;flex-direction:column;gap:1px;min-width:0}\n.it .nm{display:flex;align-items:center;gap:8px;flex-wrap:wrap}\n.it .nm b{font-weight:600;font-size:14px}\n.it .ds{font-size:12.5px;color:var(--dim)}\n.price{display:flex;flex-direction:column;align-items:flex-end;gap:2px}\n.price b{font-family:var(--f-disp);font-weight:600;font-size:15px;font-variant-numeric:tabular-nums;white-space:nowrap}\n.price b small{font-size:11px;color:var(--mute);margin-left:2px}\n.price span{font-size:11px;color:var(--mute);white-space:nowrap;display:inline-flex;align-items:center;gap:3px}\n.item.lock{opacity:.62}\n.item.lock .price span{color:var(--warn)}\n.item.lock .price span .i{width:11px!important;height:11px!important}\n.hint{font-size:12.5px;color:var(--mute)}\n.hint b{font-family:var(--f-disp);font-weight:500;color:var(--dim)}\n\n@container hb (max-width:540px){\n  .vit{gap:10px}\n  .stats{grid-template-columns:repeat(2,minmax(0,1fr))}\n  .inv{grid-template-columns:1fr}\n  .who-lv b{display:none}\n  .money{margin-left:0}\n}\n/* ticker for text too long to fit (class set by HB.marquee) */\n.mq{overflow:hidden!important;text-overflow:clip!important;white-space:nowrap!important}\n.mq-i{display:inline-block;white-space:nowrap;will-change:transform}\n.mq.run{-webkit-mask-image:linear-gradient(90deg,#000 calc(100% - 12px),transparent);mask-image:linear-gradient(90deg,#000 calc(100% - 12px),transparent)}\n.mq.run .mq-i{animation:hb-mq var(--mqt,6s) ease-in-out infinite alternate}\n@keyframes hb-mq{0%,18%{transform:translateX(0)}82%,100%{transform:translateX(var(--mqd,0))}}\n@media (prefers-reduced-motion:reduce){\n  .hb *,.hb *::before,.hb *::after{animation:none!important;transition:none!important}\n}\n\n/* shadow-root additions */\n.hb.noanim{--d:-5s}\n.ch-top.norank{grid-template-columns:minmax(0,1fr)}\n.win.pend{display:flex;align-items:center;justify-content:center;gap:12px;padding:12px 16px;font-size:12.5px;color:var(--dim);letter-spacing:.04em}\n.pend .dots{display:inline-flex;gap:4px}\n.pend .dots i{width:5px;height:5px;background:var(--hi);box-shadow:0 0 6px var(--hi);animation:hb-dot 1.2s ease-in-out infinite}\n.pend .dots i:nth-child(2){animation-delay:.15s}.pend .dots i:nth-child(3){animation-delay:.3s}\n.hd .upd{font-family:var(--f-disp);font-size:10.5px;letter-spacing:.14em;color:var(--amber);border:1px solid color-mix(in srgb,var(--amber) 50%,transparent);background:color-mix(in srgb,var(--amber) 10%,transparent);padding:0 6px;line-height:1.6;white-space:nowrap}\n.info>div.chg{animation:hb-chg 1.6s ease-out both;animation-delay:calc(var(--d,0s) + .6s)}\n.info>div.chg .i,.info>div.chg .v{color:var(--amber)}\n.vit>div.chg .k,.vit>div.chg .v{color:var(--amber)}\n.qline.chg{animation:hb-chg 1.6s ease-out both;animation-delay:calc(var(--d,0s) + .6s)}\n.fx.chg .chip{animation:hb-chg 1.6s ease-out both;animation-delay:calc(var(--d,0s) + .6s)}\n@keyframes hb-chg{0%{box-shadow:0 0 0 0 color-mix(in srgb,var(--amber) 70%,transparent)}100%{box-shadow:0 0 0 6px transparent}}\n@keyframes hb-dot{0%,100%{opacity:.2;transform:translateY(0)}40%{opacity:1;transform:translateY(-3px)}}\n/* breathing room above and below each window */\n:host{margin:16px 0}\n/* waits off-screen at its first frame, plays when it scrolls into view */\n.hb.wait *,.hb.wait *::before,.hb.wait *::after{animation-play-state:paused!important}\n";
/* ---------- core: parsing, icons, labels ---------- */
var HB = { R: {}, B: {}, lang: 'ko', opt: { questBtn: 'input' } };
var LBL = {
  ko: { status: '상태창', fat: '피로', title: '칭호', sp: '잔여 스탯', attr: '능력치', inv: '인벤토리', skill: '스킬', more: '상세 보기', less: '접기',
    left: '남은 시간', reward: '성공 보상', penalty: '실패 패널티', no: '거절', yes: '수락', acc: '퀘스트를 수락했습니다', rej: '퀘스트를 거절했습니다',
    typed: '입력창에 입력됨', sent: '전송됨', redo: '다시 선택', active: '진행 중', grade: '평가', quest: '퀘스트', profile: '인물 정보', scan: '분석',
    aff: '호감도', affLock: '호감도 열람 불가', lock: '열람 권한 부족', shop: '상점', refresh: '상점 갱신까지', pending: '시스템 창 수신 중',
    veil: '아직 읽을 수 없는 정보입니다. 조금 더 가까워져야 합니다.', accLine: '(퀘스트 [{q}]를 수락한다)', rejLine: '(퀘스트 [{q}]를 거절한다)', equip: '장착', upd: '갱신' },
  en: { status: 'Status', fat: 'FTG', title: 'Title', sp: 'Stat points', attr: 'Attributes', inv: 'Inventory', skill: 'Skills', more: 'Details', less: 'Collapse',
    left: 'Time left', reward: 'Reward', penalty: 'Penalty', no: 'Decline', yes: 'Accept', acc: 'Quest accepted', rej: 'Quest declined',
    typed: 'added to input', sent: 'sent', redo: 'Choose again', active: 'In progress', grade: 'Grade', quest: 'Quest', profile: 'Profile', scan: 'Scan',
    aff: 'Affection', affLock: 'Affection hidden', lock: 'Access denied', shop: 'Shop', refresh: 'Restock in', pending: 'Receiving System window',
    veil: 'This information cannot be read yet. You need to get closer.', accLine: '(I accept the quest [{q}])', rejLine: '(I decline the quest [{q}])', equip: 'equipped', upd: 'UPDATED' },
  ja: { status: 'ステータス', fat: '疲労', title: '称号', sp: '残りポイント', attr: '能力値', inv: 'インベントリ', skill: 'スキル', more: '詳細を見る', less: '閉じる',
    left: '残り時間', reward: '成功報酬', penalty: '失敗ペナルティ', no: '拒否', yes: '受諾', acc: 'クエストを受諾しました', rej: 'クエストを拒否しました',
    typed: '入力欄に入力済み', sent: '送信済み', redo: '選び直す', active: '進行中', grade: '評価', quest: 'クエスト', profile: '人物情報', scan: '分析',
    aff: '好感度', affLock: '好感度 閲覧不可', lock: '閲覧権限不足', shop: 'ショップ', refresh: '更新まで', pending: 'システムウィンドウ受信中',
    veil: 'まだ読み取れない情報です。もう少し近づく必要があります。', accLine: '(クエスト[{q}]を受ける)', rejLine: '(クエスト[{q}]を断る)', equip: '装備', upd: '更新' }
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
var GV = { f: 8, e: 20, d: 32, c: 46, b: 60, a: 74, s: 87, ss: 97 };
HB.grade = function (s) {
  var m = trimS(s || '').toUpperCase().match(/^(SS|[FEDCBAS])([+-]?)$/);
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
HB.MQ = '.ttl em, .who-lv b,.info .v, .qline b, .stat .k, .slot .nm b, .gx-log li span:first-child';
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

/* ---------- renderers: each takes parsed lines and returns HTML; missing lines are simply not drawn ---------- */
HB.R.status = function (d) {
  /* "없음 / none / なし / -" means the line should not be there at all */
  var H = HB, one = function (k) { var v = H.one(d, k); return H.isNone(v) ? '' : v; }, cc = function () { return ''; }; /* changed lines are no longer highlighted */
  var name = one('name'), lv = one('lv').replace(/^\s*(lv\.?|레벨)\s*/i, '');
  /* level or rank: whichever the settings asked for */
  var rk = one('rank').replace(/^\s*(rank|랭크|ランク)\s*/i, ''), rg = H.grade(rk);
  var tail = rk ? '<span class="rk">RANK ' + (rg ? H.gchip(rg) : '<em>' + H.esc(rk) + '</em>') + '</span>' : lv ? '<span>LV.' + H.esc(lv) + '</span>' : '';
  var who = '';
  if (name || tail) who = '<span class="who-lv">' + (name ? '<b title="' + H.esc(name) + '">' + H.esc(name) + '</b>' : '') + tail + '</span>';

  var brief = '';
  var info = [['date', 'cal'], ['time', 'clock'], ['loc', 'pin'], ['weather', 'weather']].filter(function (x) { return one(x[0]); });
  if (info.length) {
    brief += '<div class="info">' + info.map(function (x) {
      return '<div class="' + x[0] + cc(x[0]) + '" title="' + H.esc(one(x[0])) + '">' + H.ic(x[1]) + '<span class="v' + (x[0] === 'date' || x[0] === 'time' ? ' num' : '') + '">' + H.esc(one(x[0])) + '</span></div>';
    }).join('') + '</div>';
  }
  var gauges = [['hp', 'HP', 'hp'], ['mp', 'MP', 'mp'], ['fat', T('fat'), 'fat'], ['sta', 'STA', 'fat'], ['san', 'SAN', 'mp']].filter(function (x) { return one(x[0]); });
  if (gauges.length) {
    brief += '<div class="vit" style="--n:' + gauges.length + '">' + gauges.map(function (x) {
      var raw = one(x[0]), f = H.frac(raw), v, txt;
      if (f) { v = f.p; txt = H.esc(f.a) + '<span>/' + H.esc(f.b) + '</span>'; }
      else { v = H.pct(raw); txt = v == null ? H.esc(raw) : H.esc(String(raw).replace(/%/, '')) + '<span>%</span>'; if (v == null) v = 0; }
      return '<div class="' + cc(x[0]).trim() + '"><div class="row"><span class="k">' + x[1] + '</span><span class="v">' + txt + '</span></div>' + H.bar(v, x[2]) + '</div>';
    }).join('') + '</div>';
  }
  if (one('quest')) {
    var q = H.fields(one('quest'));
    brief += '<div class="qline' + cc('quest') + '">' + H.ic('quest') + '<b title="' + H.esc(q[0]) + '">' + H.fmt(q[0]) + '</b>' + (q[1] ? '<time>' + H.esc(q[1]) + '</time>' : '') + '</div>';
  }
  var fx = H.all(d, 'fx').filter(function (s) { return !H.isNone(s); }), money = [];
  if (one('money')) money.push('<span>' + H.ic('won') + '<b>' + H.esc(one('money')) + '</b></span>');
  if (one('point')) { var pt = one('point'); if (H.isNum(pt)) pt = pt.trim() + ' P'; money.push('<span>' + H.ic('point') + '<b>' + H.esc(pt) + '</b></span>'); }
  if (fx.length || money.length) {
    brief += '<div class="bline">';
    if (fx.length) brief += '<div class="fx' + cc('fx') + '">' + fx.map(function (s) {
      var neg = /^[-−]/.test(s); s = s.replace(/^[+\-−]\s*/, '');
      var m = s.match(/^(.*?)\s*[(（]([^)）]*)[)）]\s*$/);
      return '<span class="chip ' + (neg ? 'debuff' : 'buff') + '">' + H.ic(neg ? 'down' : 'up') + H.esc(m ? m[1] : s) + (m ? ' <time>' + H.esc(m[2]) + '</time>' : '') + '</span>';
    }).join('') + '</div>';
    if (money.length) brief += '<div class="money">' + money.join('') + '</div>';
    brief += '</div>';
  }

  var body = '', role = one('role'), title = one('title'), sp = one('sp');
  if (role || title || sp) {
    /* the title is worn like a badge */
    body += '<div class="prof">' + (title ? '<span class="ttl">' + H.ic('medal') + '<small>' + T('title') + '</small><em>' + H.esc(title.replace(/^[\[「『【]|[\]」』】]$/g, '')) + '</em></span>' : '') +
      (role ? '<span class="role">' + H.esc(role) + '</span>' : '') +
      (sp ? '<div class="stp">' + T('sp') + '<b>' + H.esc(sp) + '</b></div>' : '') + '</div>';
  }
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
  if (panes.length > 1) {
    body += '<div class="tabs" role="tablist" data-tabs>' + panes.map(function (p, i) {
      return '<button class="tab" role="tab" type="button" aria-selected="' + (i ? 'false' : 'true') + '" data-p="' + p[0] + '">' + p[1] + (p[2] !== '' ? ' <small>' + p[2] + '</small>' : '') + '</button>';
    }).join('') + '</div>';
    body += panes.map(function (p, i) { return '<div class="panel" role="tabpanel" data-panel="' + p[0] + '"' + (i ? ' hidden' : '') + '>' + p[3] + '</div>'; }).join('');
  } else if (panes.length) {
    body += '<div class="lbl">' + panes[0][1] + '</div>' + panes[0][3];
  }

  var hd = '<div class="hd">' + H.ic('status') + '<span class="hd-t"><b>' + T('status') + '</b><small>Status</small></span>' + '<span class="hd-r">' + who + '</span></div>';
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
    /* "nt-" prefix: plain .aff / .item / .skill / .stat belong to other windows' layouts */
    return '<div class="t' + (k[0] ? ' nt-' + k[0] : '') + (neg ? ' nt-neg' : '') + '" style="--td:' + (i * 0.12).toFixed(2) + 's">' + H.ic(neg && x[0] === 'stat' ? 'down' : k[1]) +
      '<b>' + H.fmt(f[0]) + '</b>' + (val ? '<span class="d">' + H.esc(val) + '</span>' : '') + '</div>';
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
  adv: { depth: 1, role: 0, cleanup: 1 }
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
  s.presets = s.presets || {}; s.themes = s.themes || {}; s.chars = s.chars || {};
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
function buildPrompt(c) {
  var W = WORDS[c.lang] || WORDS.auto, out = [], f = c.status.fields;
  var any = KINDS.some(function (k) { return c[k].on; });
  if (!any) return '';
  var rank = c.status.grow === 'rank';
  var usesGrade = (c.status.on && (f.stat || (rank && f.lv))) || c.profile.on || c.quest.on;
  var rules = '[System Window Rules]\n{{user}} alone sees a game-like System. Show System windows as tagged blocks, using only the formats given, each placed at the point in the story where it happens. ' +
    'One "key: value" per line; drop lines that don\'t apply (never write "none" or "-"). Lists: ";" between items, "|" between fields. Keep keys in English; write values in ' + W.lang + '.';
  if (usesGrade) rules += '\nGrades: F feeble < E < D < C average adult < B < A elite human < S superhuman < SS legendary; +/- allowed.';
  rules += '\nCarry numbers, items and effects over from the latest block; change only what the story changed.';
  var per = c.persona === 'custom' ? trimS(c.personaCustom) : (PERSONA[c.persona] || PERSONA.neutral)[2];
  if (per) rules += '\nSystem personality: ' + per + '.';
  out.push(rules);
  if (trimS(c.world)) out.push('[Setting]\n' + trimS(c.world));

  if (c.status.on) {
    var L = { date: 'date: YYYY.MM.DD (weekday)', time: 'time: HH:MM', loc: 'loc: place', weather: 'weather: sky, temperature', name: 'name: {{user}}',
      lv: rank ? 'rank: grade' : 'lv: level',
      role: 'role: job or social position', title: 'title: equipped title', exp: rank ? 'exp: % toward the next rank' : 'exp: cur/max', hp: 'hp: cur/max', mp: 'mp: cur/max', fat: 'fat: fatigue 0-100',
      fx: 'fx: +buff (time left); -debuff (time left)', quest: 'quest: active quest|time left', money: 'money: cash with unit', point: 'point: System points', sp: 'sp: unspent stat points',
      stat: 'stat: ' + (names(c.status.stats).length ? names(c.status.stats) : ['STR']).map(function (n) { return n + ' n G'; }).join('; '),
      inv: 'inv: item|rarity|qty or ' + W.equip + '; ...', skill: 'skill: name|level|active or passive|cost or cooldown|effect; ...' };
    var lines = Object.keys(L).filter(function (k) { return f[k]; }).map(function (k) { return L[k]; });
    if (lines.length) {
      var s = '[Status Window]\nBegin every reply with this full block, before any narrative or other block:\n<status>\n' + lines.join('\n') + '\n</status>';
      var mid = ['date', 'time', 'loc', 'weather'].filter(function (k) { return f[k]; });
      var notes = mid.length ? ['Only for a time skip of an hour or more, or a move to another place, partway through the reply: add one more <status> right there with only the ' + mid.join('/') + ' lines that changed. At most one per reply.'] : ['One <status> per reply.'];
      if (f.stat) notes.push('n = value, G = grade.');
      if (f.quest) notes.push('No active quest = no quest line.');
      if (f.inv) notes.push('inv lists items carried or wielded, never clothing. Rarity: ' + W.rar + '.');
      if (notes.length) s += '\n' + notes.join(' ');
      out.push(s);
    }
  }
  if (c.system.on || c.noti.on) {
    var sm = '';
    if (c.system.on) sm += '[System Messages]\nWhen the System speaks, warns or reacts, add one block per message:\n<system>\ntype: notice/talk/warn/error/levelup\ntext: main line\nsub: second line\n</system>\n' +
      'text alone is fine; add sub only when there is more to say. talk = answering {{user}}; warn = danger or deadline; error = malfunction or forbidden truth (hide words with ███, optional "log: action|OK or FAIL" lines); levelup text = ' +
      (c.status.grow === 'rank' ? '"RANK a → b"' : '"LV.a → LV.b"') + '.';
    if (c.noti.on) sm += (sm ? '\n' : '[System Notifications]\n') + 'Small gains or changes go in one block' + (c.system.on ? ' instead' : '') + ', a line each:\n<noti>\nexp/skill/title/item/aff/stat/quest/money: what|change\n</noti>';
    out.push(sm);
  }
  if (c.quest.on) out.push('[Quest Window]\nOnly when the System issues a quest:\n<quest>\ntype: ' + W.qtype + '\ntitle: quest name\ndesc: situation, 1-2 sentences\ntime: HH:MM:SS left|% of time left\n' +
    'goal: objective cur/max; ...\nreward: ...; ...\npenalty: ...; ...\n</quest>\nGoals are things still to be done when the quest is issued: each starts at 0. For progress, repeat the block with "state: active". When it ends: <quest> with state: clear or fail, grade, title, and only the reward (clear) or penalty (fail) actually applied.');
  if (c.profile.on) {
    var ps = names(c.profile.stats).map(function (n) { return n + ' G'; });
    if (c.profile.uniq) ps.push('*unique G');
    var p = '[Profile Window]\nWhen {{user}} first meets, studies or scans a notable person:\n<profile>\nname: name\nrank: overall grade\n' +
      'info: age · job · affiliation\ntag: trait; trait (prefix ! for a warning sign)' + (ps.length ? '\nstat: ' + ps.join('; ') : '') +
      (c.profile.aff ? '\naff: affection 0-100|their feeling toward {{user}} in one word' : '') + (c.profile.mind ? '\nmind: their current inner thought, one sentence' : '') + '\n</profile>\n' +
      (c.profile.uniq ? 'Add 1-2 stats unique to the person, name prefixed with *. ' : '') + 'Write ? for anything {{user}} cannot know yet.' +
      (c.profile.mind ? ' If mind is ?, add "lock: what would reveal it".' : '');
    out.push(p);
  }
  if (c.shop.on) out.push('[Shop Window]\nOnly when {{user}} opens the shop:\n<shop>\npoint: balance\nitem: name|rarity|price|effect|stock or unlock condition\nrefresh: time until restock\n</shop>\n3-6 item lines. Prefix ! to a locked item\'s name. Rarity: ' + W.rar + '.');
  return out.join('\n\n');
}
function applyPrompt() {
  resolve();
  var text = LINK.active ? buildPrompt(CF) : '';
  try { if (text && ctx.substituteParams) text = ctx.substituteParams(text); } catch (e) {}
  try { ctx.setExtensionPrompt(PROMPT_ID, text, 1, Math.max(0, CF.adv.depth | 0), false, CF.adv.role | 0); }
  catch (e) { console.warn('[HB] 지침 주입 실패', e); }
}

/* ---------- regex: installed and kept in sync automatically ---------- */
var TAGS = KINDS.join('|');
function wantedRegex() {
  var base = { trimStrings: [], placement: [2], disabled: false, runOnEdit: true, substituteRegex: 0, minDepth: null, maxDepth: null };
  function mk(o) { var r = clone(base); Object.keys(o).forEach(function (k) { r[k] = o[k]; }); return r; }
  /* order matters: the old-window hider must run before the display regex turns the tags into code blocks */
  return [
    mk({ id: 'hb-sw-cleanup', scriptName: '시스템 상태창 · 지난 상태창 숨김 (자동 관리)', markdownOnly: true, promptOnly: false, minDepth: 3,
      disabled: !CF.adv.cleanup, findRegex: '/(?:```[a-z]*[ \\t]*\\n)?[ \\t]*<(status|noti)>[\\s\\S]*?<\\/\\1>(?:[ \\t]*\\n```)?/gi', replaceString: '\n```\n[HB:hidden]\n```\n' }),
    mk({ id: 'hb-sw-display', scriptName: '시스템 상태창 · 표시 (자동 관리)', markdownOnly: true, promptOnly: false,
      findRegex: '/(?:```[a-z]*[ \\t]*\\n)?[ \\t]*<(' + TAGS + ')>([\\s\\S]*?)<\\/\\1>(?:[ \\t]*\\n```)?/gi', replaceString: '\n```\n[HB:$1]\n$2\n```\n' }),
    mk({ id: 'hb-sw-pending', scriptName: '시스템 상태창 · 수신 중 (자동 관리)', markdownOnly: true, promptOnly: false,
      findRegex: '/<(' + TAGS + ')>(?![\\s\\S]*<\\/\\1>)([\\s\\S]*)$/i', replaceString: '\n```\n[HB:pending]\n$1\n$2\n```\n' })
  ];
}
function ensureRegex(force) {
  var es = ctx.extensionSettings, list = es.regex = es.regex || [], changed = false, display = false;
  var wanted = wantedRegex();
  wanted.forEach(function (w) {
    var i = -1; list.forEach(function (x, n) { if (x && x.id === w.id) i = n; });
    if (i < 0) { list.push(w); changed = true; if (w.markdownOnly) display = true; return; }
    var cur = list[i], diff = Object.keys(w).some(function (k) { return JSON.stringify(cur[k]) !== JSON.stringify(w[k]); });
    if (diff) { Object.keys(w).forEach(function (k) { cur[k] = w[k]; }); changed = true; display = true; }
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
  if ((display || force) && ctx.reloadCurrentChat) { try { ctx.reloadCurrentChat(); } catch (e) {} }
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
  try { sheet = new P.CSSStyleSheet(); sheet.replaceSync(sheetCss); } catch (e) { sheet = null; }
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
  if (raw && typeof raw === 'object') {
    /* a mid-message status: carry earlier values forward, mark what this block changed */
    var base = {}; raw.merge.forEach(function (r) { var p = HB.parse(r); Object.keys(p).forEach(function (k) { if (k !== '_l') base[k] = p[k]; }); });
    var cur = HB.parse(raw.raw); data = { _l: [], _chg: {}, _mid: true };
    Object.keys(base).forEach(function (k) { data[k] = base[k]; });
    Object.keys(cur).forEach(function (k) { if (k === '_l') return; if (JSON.stringify(base[k]) !== JSON.stringify(cur[k])) data._chg[k] = 1; data[k] = cur[k]; });
  } else data = HB.parse(raw);
  try { box.innerHTML = HB.R[kind] ? HB.R[kind](data) : ''; }
  catch (e) { box.textContent = '[시스템 상태창] 표시 오류: ' + e.message; }
  sh.appendChild(box);
  function bind() {
    if (HB.B[kind]) { try { HB.B[kind](box, !!opt.quiet); } catch (e) { console.warn('[HB]', e); } }
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
  var txt = code.textContent, m = txt.match(/^\s*\[HB:([a-z]+)\][ \t]*\r?\n?/i);
  if (!m) return;
  var kind = m[1].toLowerCase(), raw = txt.slice(m[0].length), pending = false, pendKind = '';
  if (kind === 'pending') {
    var nl = raw.indexOf('\n'), inner = trimS(nl < 0 ? raw : raw.slice(0, nl)).toLowerCase();
    if (generating()) { pending = true; pendKind = inner; raw = ''; }
    else { kind = inner; raw = nl < 0 ? '' : raw.slice(nl + 1); }
  }
  /* an old status/noti hidden by the cleanup regex: show nothing, not even the code block */
  if (kind === 'hidden') { pre.setAttribute('data-hb-done', '1'); pre.style.display = 'none'; hideRunnerBtn(pre); return; }
  if (!pending && KINDS.indexOf(kind) < 0) return;
  var mes = pre.closest('.mes'), id = mes ? mes.getAttribute('mesid') : '', key = id + '|' + kind + '|' + raw;
  /* each window plays its entrance once, the first time it is on screen */
  var quiet = seen.has(key);
  if (seen.size > 800) seen.clear();
  var mt = pre.closest('.mes_text'), order = 0;
  if (kind === 'status' && mt) {
    var prev = statusPres(mt, pre);
    order = prev.length;
    if (order) raw = { merge: prev.map(function (p) { return p.raw; }), raw: raw };
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
/* earlier status blocks in the same message, in document order */
function statusPres(mt, pre) {
  var out = [];
  var all = mt.querySelectorAll('pre');
  for (var i = 0; i < all.length && all[i] !== pre; i++) {
    var c = all[i].querySelector('code'), t = c ? c.textContent : '', m = t.match(/^\s*\[HB:status\][ \t]*\r?\n?/i);
    if (m) out.push({ pre: all[i], raw: t.slice(m[0].length) });
  }
  return out;
}
function scanAll(root) { (root || D).querySelectorAll('#chat .mes_text pre').forEach(process); }
function unrender(sel) {
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
  applyPrompt();
  ensureRegex();
  var sig = c.theme + '|' + HB.lang + '|' + c.quest.btn + '|' + (opt && opt.force ? Math.random() : '');
  if (sig !== lastSig) { lastSig = sig; applyTheme(); rerenderAll(); }
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
'#hbs-ov .hbs-in,#hbs-ov .hbs-ta,#hbs-ov .hbs-sel{width:100%;border:1px solid var(--b2)!important;background:#fff;color:var(--tx);font:inherit;font-size:14px;padding:8px 10px;border-radius:8px;outline:none;margin:0;box-shadow:none}',
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
'.TH-render:has(> .hb-host){display:block!important}'
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
    return { id: id, name: S.themes[id].name, update: update };
  });
}
var ui = { tab: 'main', el: null, savedT: 0, acc: {} };
var CHEV = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>';
function h(s) { return HB.esc(s); }
function getPath(o, p) { return p.split('.').reduce(function (a, k) { return a == null ? a : a[k]; }, o); }
function setPath(o, p, v) { var ks = p.split('.'), last = ks.pop(), t = ks.reduce(function (a, k) { return a[k]; }, o); t[last] = v; }
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
        '<textarea id="hbs-world" class="hbs-ta" data-k="world" maxlength="1200" placeholder="이 시스템이 어떤 이야기에 속하는지 짧게 적습니다. 비워 두면 봇 설정을 그대로 따릅니다. {{user}}, {{char}}를 쓸 수 있습니다.">' + h(c.world) + '</textarea></div></div>' +
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
      card('shop', '상점', '포인트로 사는 아이템 목록') + '</div>';
  },
  design: function (c) {
    return '<div class="hbs-sec"><h3>테마 <small>지금 연결된 설정에 적용됩니다</small></h3><div class="hbs-themes">' + themeList().map(function (t) {
      var on = c.theme === t.id;
      return '<div class="hbs-th' + (on ? ' on' : '') + '"><div class="pv" data-pv="' + h(t.id) + '"></div><div class="mt"><b>' + h(t.name) + (t.builtin ? '<span class="hbs-tag">기본</span>' : '') + (on ? '<span class="hbs-tag">사용 중</span>' : '') + '</b>' +
        '<span>' + h(t.description || (t.author ? '제작: ' + t.author : '')) + '</span></div><div class="ac">' +
        '<button type="button" class="hbs-btn sm' + (on ? '' : ' pri') + '" data-act="th-use" data-id="' + h(t.id) + '"' + (on ? ' disabled' : '') + '>' + (on ? '적용됨' : '적용') + '</button>' +
        '<button type="button" class="hbs-btn sm" data-act="th-exp" data-id="' + h(t.id) + '">zip 내보내기</button>' +
        (t.builtin ? '' : '<button type="button" class="hbs-btn sm dng" data-act="th-del" data-id="' + h(t.id) + '">삭제</button>') + '</div></div>';
    }).join('') + '</div></div>' +
      '<div class="hbs-sec"><h3>테마 추가</h3><div class="hbs-line"><button type="button" class="hbs-btn pri" data-act="th-imp">zip 불러오기</button><input type="file" id="hbs-file" accept=".zip,application/zip" hidden></div>' +
      '<p class="hbs-help">theme.json과 theme.css가 든 zip을 불러옵니다. 같은 id로 다시 불러오면 업데이트됩니다.</p>' +
      acc('themehelp', '테마 만드는 법', 'zip 구성 · 색만 바꾸기 · 주의할 점', THEME_GUIDE) + '</div>';
  },
  advanced: function (c) {
    var text = buildPrompt(c);
    return '<div class="hbs-sec"><h3>지침 넣는 위치</h3><div class="hbs-line" style="align-items:flex-start;gap:16px"><div class="hbs-f"><label for="hbs-depth">깊이 (0 = 맨 끝)</label><input id="hbs-depth" type="number" min="0" max="20" class="hbs-in hbs-num" data-k="adv.depth" value="' + (c.adv.depth | 0) + '"></div>' +
      '<div class="hbs-f"><span class="l">역할</span><div class="hbs-chips">' + chip('adv.role', 0, 'System') + chip('adv.role', 1, 'User') + chip('adv.role', 2, 'Assistant') + '</div></div></div></div>' +
      '<div class="hbs-sec"><div class="hbs-card">' + row('adv.cleanup', '지난 상태창 숨기기', '최근 3개 응답에만 상태창과 알림을 보여 줍니다. AI에게는 그대로 보냅니다.') + '</div></div>' +
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
  '<li>견본 테마 <b>Amber Terminal</b>이 색만 바꾼 예입니다.</li></ul></div>';
var TABS = [['main', '설정'], ['design', '디자인'], ['advanced', '고급']];

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
function drawPreviews(body, c) {
  body.querySelectorAll('[data-prev]').forEach(function (el) {
    var k = el.getAttribute('data-prev'), raw = k === 'status' ? sampleStatus(c) : k === 'profile' ? sampleProfile(c) : SAMPLE[k];
    if (k === 'system') { var st = ui.sysPrev || 'notice'; raw = SAMPLE.sys[st === 'levelup' && c.status.grow === 'rank' ? 'rankup' : st]; }
    el.innerHTML = '';
    if (k === 'status' && !raw) { el.innerHTML = '<div class="hbs-empty" style="background:#fff">표시할 항목을 하나 이상 고르세요.</div>'; return; }
    el.appendChild(makeHost(k, raw, { quiet: true }));
  });
  body.querySelectorAll('[data-pv]').forEach(function (el) {
    var t = getTheme(el.getAttribute('data-pv'));
    el.appendChild(makeHost('system', SAMPLE.system, { quiet: true, css: themeCss(t) }));
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
  drawPreviews(body, c);
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
var ACTIONS = {
  fset: function (b) { var set = FIELD_SETS[b.dataset.v], f = CF.status.fields; Object.keys(f).forEach(function (k) { f[k] = set.indexOf(k) > -1 ? 1 : 0; }); commit(true); },
  'th-use': function (b) { CF.theme = b.dataset.id; commit(true); },
  'th-exp': function (b) { exportTheme(b.dataset.id); },
  'th-del': function (b) {
    var id = b.dataset.id, dep = Object.keys(S.themes).filter(function (k) { return S.themes[k].extends === id; });
    if (dep.length) { toast('"' + S.themes[dep[0]].name + '" 테마가 이 테마를 바탕으로 씁니다. 먼저 그 테마를 삭제하세요.', 'warning'); return; }
    if (b.dataset.sure !== '1') { b.dataset.sure = '1'; b.textContent = '한 번 더 눌러 삭제'; return; }
    delete S.themes[id]; if (CF.theme === id) CF.theme = 'holo-blue'; commit(true);
  },
  'th-imp': function () { var f = ui.el.querySelector('#hbs-file'); f.value = ''; f.click(); },
  'ps-save': function () {
    var n = trimS(ui.el.querySelector('#hbs-pname').value);
    if (!n) { toast('프리셋 이름을 적어 주세요.', 'warning'); ui.el.querySelector('#hbs-pname').focus(); return; }
    S.presets[n] = clone(CF); commit(true); toast('프리셋 "' + n + '"을(를) 저장했습니다.', 'success');
  },
  'ps-load': function (b) { setCur(clone(S.presets[b.dataset.id])); commit(true); toast('프리셋 "' + b.dataset.id + '"을(를) 적용했습니다.', 'success'); },
  'ps-over': function (b) {
    if (b.dataset.sure !== '1') { b.dataset.sure = '1'; b.textContent = '한 번 더 눌러 덮어쓰기'; return; }
    S.presets[b.dataset.id] = clone(CF); commit(true); toast('프리셋 "' + b.dataset.id + '"에 지금 설정을 덮어썼습니다.', 'success');
  },
  'ps-del': function (b) {
    if (b.dataset.sure !== '1') { b.dataset.sure = '1'; b.textContent = '한 번 더 눌러 삭제'; return; }
    delete S.presets[b.dataset.id]; commit(true);
  },
  'ps-exp': function () { download('system-window-presets.json', new Blob([JSON.stringify({ hb_system_window: 2, presets: S.presets, current: CF }, null, 2)], { type: 'application/json' })); },
  'ps-imp': function () { var f = ui.el.querySelector('#hbs-jfile'); f.value = ''; f.click(); },
  'unlink-char': function () { unlinkChar(); commit(true); },
  'copy-prompt': function (b) {
    var ta = ui.el.querySelector('#hbs-prompt');
    (P.navigator.clipboard ? P.navigator.clipboard.writeText(ta.value) : Promise.reject()).then(function () { b.textContent = '복사됨'; }, function () { ta.focus(); ta.select(); });
  },
  'rx-fix': function () { removeRegex(); ensureRegex(true); toast('정규식을 다시 설치했습니다.', 'success'); },
  reset: function (b) {
    if (b.dataset.sure !== '1') { b.dataset.sure = '1'; b.textContent = '한 번 더 눌러 초기화 (프리셋과 테마는 남습니다)'; return; }
    setCur(clone(DEF)); commit(true);
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
  /* SillyTavern puts a transform on <html>, so a fixed element moves with the page scroll: pull it back into view every frame while open */
  var raf = 0;
  (function place() {
    if (!ov.isConnected) return;
    var r = ov.getBoundingClientRect();
    if (Math.abs(r.top) > 0.5) ov.style.top = ((parseFloat(ov.style.top) || 0) - r.top) + 'px';
    if (Math.abs(r.left) > 0.5) ov.style.left = ((parseFloat(ov.style.left) || 0) - r.left) + 'px';
    raf = P.requestAnimationFrame(place);
  })();
  ov._unplace = function () { P.cancelAnimationFrame(raf); };
  ov.querySelector('.hbs-x').addEventListener('click', closeSettings);
  ov.addEventListener('keydown', function (e) { if (e.key === 'Escape') { e.stopPropagation(); closeSettings(); } });
  ov.querySelector('.hbs-tabs').addEventListener('click', function (e) { var b = e.target.closest('button[data-tab]'); if (b) { ui.tab = b.dataset.tab; ov.querySelector('.hbs-body').scrollTop = 0; paint(); } });
  ov.querySelector('#hbs-linkbar').addEventListener('click', function (e) {
    var b = e.target.closest('[data-link]'); if (b && !b.disabled) { setLink(b.dataset.link); commit(true); return; }
    var a = e.target.closest('[data-act]'); if (a && ACTIONS[a.dataset.act]) ACTIONS[a.dataset.act](a);
  });
  var body = ov.querySelector('.hbs-body');
  body.addEventListener('click', function (e) {
    var ac = e.target.closest('[data-acc]');
    if (ac) { var open = ac.getAttribute('aria-expanded') !== 'true'; ui.acc[ac.dataset.acc] = open; ac.setAttribute('aria-expanded', open); ac.nextElementSibling.hidden = !open; return; }
    var sp = e.target.closest('[data-sysprev]');
    if (sp) {
      ui.sysPrev = sp.dataset.sysprev;
      sp.parentNode.querySelectorAll('[data-sysprev]').forEach(function (x) { x.setAttribute('aria-pressed', x === sp ? 'true' : 'false'); });
      var pv = body.querySelector('[data-prev="system"]'); if (pv) drawPreviews(pv.parentNode, CF);
      return;
    }
    var set = e.target.closest('[data-set]');
    if (set) { ui.anchor = '[data-set="' + set.dataset.set + '"][data-v="' + set.dataset.v + '"]'; var cur = getPath(CF, set.dataset.set), v = set.dataset.v; setPath(CF, set.dataset.set, typeof cur === 'number' ? +v : v); commit(true); return; }
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
    if (t.matches('input[type=checkbox][data-k]')) { ui.anchor = 'input[data-k="' + t.dataset.k + '"]'; var cur = getPath(CF, t.dataset.k); setPath(CF, t.dataset.k, typeof cur === 'number' ? (t.checked ? 1 : 0) : t.checked); commit(true); }
  });
  body.addEventListener('input', function (e) {
    var t = e.target;
    if (!t.dataset || !t.dataset.k || t.type === 'checkbox') return;
    var v = t.type === 'number' ? Math.max(0, Math.min(20, parseInt(t.value, 10) || 0)) : t.value;
    setPath(CF, t.dataset.k, v); commit(false);
    var wc = body.querySelector('#hbs-wc'); if (wc && t.dataset.k === 'world') wc.textContent = v.length + ' / 1200';
    if (t.dataset.k === 'status.stats' || t.dataset.k === 'profile.stats') drawPreviews(body, CF);
  });
  paint();
}
function closeSettings() { if (ui.el) { try { ui.el._unplace(); } catch (e) {} ui.el.remove(); ui.el = null; } }

/* the wand item belongs to this running copy of the script; one left over from a reloaded copy is replaced */
function addWand() {
  var menu = D.getElementById('extensionsMenu'); if (!menu) return;
  var old = D.getElementById('hb-wand');
  if (old) { if (old.getAttribute('data-inst') === INSTANCE) return; old.remove(); }
  var item = D.createElement('div'); item.id = 'hb-wand'; item.setAttribute('data-inst', INSTANCE);
  item.className = 'list-group-item flex-container flexGap5 interactable'; item.tabIndex = 0; item.setAttribute('role', 'listitem');
  item.innerHTML = '<div class="fa-fw fa-solid fa-table-list extensionsMenuExtensionButton"></div><span>시스템 상태창</span>';
  function go() {
    try { openSettings(); }
    catch (e) { console.error('[시스템 상태창] 설정 창 오류', e); toast('설정 창을 열지 못했습니다: ' + e.message, 'error'); }
  }
  item.addEventListener('click', go);
  item.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } });
  menu.appendChild(item);
}

/* ---------- start / stop ---------- */
var obs = null, listeners = [], wandTimer = 0, handle = null, warnedOld = false;
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
  try { clearInterval(wandTimer); closeSettings(); } catch (e) {}
  try { ctx.setExtensionPrompt(PROMPT_ID, '', 1, 0, false, 0); } catch (e) {}
  try { unrender(); } catch (e) {}
  ['hb-wand', 'hbs-style'].forEach(function (id) { var el = D.getElementById(id); if (el && (id !== 'hb-wand' || el.getAttribute('data-inst') === INSTANCE)) el.remove(); });
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
  ['hb-wand', 'hbs-ov', 'hbs-style'].forEach(function (id) { var el = D.getElementById(id); if (el) el.remove(); });
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
  on('CHAT_CHANGED', function () { applyAll(); setTimeout(scanAll, 60); if (ui.el) paint(); });
  on('GENERATION_STARTED', applyPrompt);
  function settle() { setTimeout(function () { unrender('#chat .hb-host[data-hb-pending]'); scanAll(); }, 150); }
  on('GENERATION_ENDED', settle); on('GENERATION_STOPPED', settle);
  addWand(); wandTimer = setInterval(addWand, 3000);

  P.__HB_SYSTEM_WINDOW__ = handle = { ext: IS_EXT, destroy: destroy, open: openSettings, version: VERSION, buildPrompt: function () { resolve(); return buildPrompt(CF); } };
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

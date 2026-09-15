const fs = require("fs");
const amp = String.fromCharCode(38);
const file = "c:/Users/acer/OneDrive/Desktop/round2/index.html";
const fontLink = "https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;800;900" + amp + "family=Plus+Jakarta+Sans:wght@700;800" + amp + "family=Space+Grotesk:wght@700;800" + amp + "display=swap";

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>Connection Round 2</title>
<script src="https://cdn.tailwindcss.com"></` + `script>
<link href="${fontLink}" rel="stylesheet"/>
<style>
*{box-sizing:border-box;margin:0;padding:0}
html,body{min-height:100%;font-family:Outfit,sans-serif;background:#070b14;color:#f8fafc;}
body{min-height:100vh;background:radial-gradient(circle at 20% 10%,rgba(37,99,235,.14),transparent 40%),radial-gradient(circle at 80% 20%,rgba(56,189,248,.1),transparent 42%),linear-gradient(180deg,#070b14,#0d1527 60%,#060912);}
body::before{content:"";position:fixed;inset:0;background-image:linear-gradient(rgba(148,163,184,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(148,163,184,.04) 1px,transparent 1px);background-size:48px 48px;pointer-events:none;z-index:0;}
.shimmer{background:linear-gradient(90deg,#60a5fa,#93c5fd,#fff,#3b82f6,#60a5fa);background-size:200% auto;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;animation:sh 4s linear infinite;}
@keyframes sh{to{background-position:200% center}}
.gt{background:linear-gradient(135deg,#fff,#93c5fd,#3b82f6,#1d4ed8);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;}
.glass{background:rgba(15,23,42,.9);backdrop-filter:blur(28px);border:1px solid rgba(59,130,246,.22);box-shadow:0 24px 70px rgba(0,0,0,.8),inset 0 1px 0 rgba(255,255,255,.12);}
.mc{position:relative;width:min(340px,90vw);padding:36px 28px 32px;border-radius:28px;cursor:pointer;display:flex;flex-direction:column;align-items:center;text-align:center;transition:transform .3s,box-shadow .3s;overflow:hidden;}
.mc:hover{transform:translateY(-6px) scale(1.02);}
.mcb{background:linear-gradient(145deg,rgba(15,23,42,.96),rgba(8,13,24,.98));border:1.5px solid rgba(59,130,246,.45);box-shadow:0 20px 60px rgba(0,0,0,.7),0 0 30px rgba(37,99,235,.2),inset 0 1px 1px rgba(255,255,255,.14);}
.mcb:hover{box-shadow:0 28px 80px rgba(0,0,0,.8),0 0 40px rgba(59,130,246,.4);}
.mcp{background:linear-gradient(145deg,rgba(14,10,28,.96),rgba(6,4,14,.98));border:1.5px solid rgba(139,92,246,.45);box-shadow:0 20px 60px rgba(0,0,0,.7),0 0 30px rgba(109,40,217,.2),inset 0 1px 1px rgba(255,255,255,.14);}
.mcp:hover{box-shadow:0 28px 80px rgba(0,0,0,.8),0 0 40px rgba(139,92,246,.4);}
.ib{width:80px;height:80px;border-radius:22px;display:flex;align-items:center;justify-content:center;margin-bottom:20px;}
.ibb{background:linear-gradient(135deg,#2563eb,#1d4ed8);box-shadow:0 0 35px rgba(59,130,246,.5);}
.ibp{background:linear-gradient(135deg,#7c3aed,#6d28d9);box-shadow:0 0 35px rgba(139,92,246,.5);}
.rb{display:flex;align-items:center;gap:10px;padding:10px 16px;border-radius:14px;background:rgba(15,23,42,.7);border:1px solid rgba(100,116,139,.3);font-size:.875rem;color:#cbd5e1;}
.xb{display:inline-flex;align-items:center;justify-content:center;gap:10px;height:48px;padding:0 28px;border:none;border-radius:14px;background:linear-gradient(135deg,#3b82f6,#2563eb,#1d4ed8);color:#fff;font-family:Outfit,sans-serif;font-weight:800;font-size:.95rem;letter-spacing:.04em;text-transform:uppercase;cursor:pointer;box-shadow:0 14px 35px rgba(37,99,235,.4),inset 0 1px 0 rgba(255,255,255,.35);transition:transform .25s;width:100%;}
.xb:hover{transform:translateY(-2px);}
.pb2{display:inline-flex;align-items:center;justify-content:center;gap:10px;height:48px;padding:0 28px;border:none;border-radius:14px;background:linear-gradient(135deg,#7c3aed,#6d28d9);color:#fff;font-family:Outfit,sans-serif;font-weight:800;font-size:.95rem;letter-spacing:.04em;text-transform:uppercase;cursor:pointer;box-shadow:0 12px 30px rgba(109,40,217,.4),inset 0 1px 0 rgba(255,255,255,.3);transition:transform .25s;width:100%;}
.pb2:hover{transform:translateY(-2px);}
.tc{position:relative;min-width:145px;padding:8px 18px;border-radius:18px;background:linear-gradient(145deg,rgba(15,23,42,.96),rgba(8,13,24,.98));border:1.5px solid rgba(59,130,246,.38);box-shadow:0 14px 40px rgba(0,0,0,.75),0 0 25px rgba(37,99,235,.18),inset 0 1px 1px rgba(255,255,255,.18);}
#td{font-family:Space Grotesk,monospace;font-size:clamp(2.8rem,5vw,3.8rem);font-weight:800;color:#60a5fa;text-shadow:0 0 25px rgba(59,130,246,.6);transition:color .3s;line-height:1;}
.tw{color:#f43f5e!important;text-shadow:0 0 35px rgba(244,63,94,.9)!important;animation:al .6s ease-in-out infinite alternate;}
.tb{color:#fbbf24!important;text-shadow:0 0 30px rgba(245,158,11,.8)!important;animation:bp .8s ease-in-out infinite alternate;}
@keyframes al{to{transform:scale(1.12)}}@keyframes bp{to{transform:scale(1.06)}}
#pb{height:100%;background:linear-gradient(90deg,#1d4ed8,#2563eb,#38bdf8,#93c5fd);box-shadow:0 0 16px rgba(59,130,246,.6);position:relative;overflow:hidden;}
#pb::after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,transparent,rgba(255,255,255,.6),transparent);transform:translateX(-100%);animation:sh2 1.6s ease-in-out infinite;}@keyframes sh2{to{transform:translateX(100%)}}
.pbr{animation:pbrun 20s linear forwards;}.pbb{animation:pbbrk 5s linear forwards!important;background:linear-gradient(90deg,#b45309,#f59e0b,#fde68a)!important;box-shadow:0 0 18px rgba(245,158,11,.7)!important;}
@keyframes pbrun{from{width:100%}to{width:0%}}@keyframes pbbrk{from{width:100%}to{width:0%}}
.is{width:min(1180px,94vw);height:min(67vh,630px);padding:12px;border-radius:26px;background:linear-gradient(160deg,rgba(17,24,39,.95),rgba(8,12,22,.98));border:1px solid rgba(59,130,246,.28);box-shadow:0 35px 90px rgba(0,0,0,.85),inset 0 1px 1px rgba(255,255,255,.16);position:relative;}
.ii{width:100%;height:100%;border-radius:18px;overflow:hidden;background:#03060c;display:flex;align-items:center;justify-content:center;position:relative;}
#qi{display:block;width:100%;height:100%;object-fit:contain;}
.ca{position:absolute;width:18px;height:18px;pointer-events:none;}
.ctl{top:8px;left:8px;border-top:2px solid #60a5fa;border-left:2px solid #60a5fa;border-top-left-radius:6px;filter:drop-shadow(0 0 5px rgba(96,165,250,.7));}
.ctr{top:8px;right:8px;border-top:2px solid #38bdf8;border-right:2px solid #38bdf8;border-top-right-radius:6px;filter:drop-shadow(0 0 5px rgba(56,189,248,.7));}
.cbl{bottom:8px;left:8px;border-bottom:2px solid #38bdf8;border-left:2px solid #38bdf8;border-bottom-left-radius:6px;filter:drop-shadow(0 0 5px rgba(56,189,248,.7));}
.cbr{bottom:8px;right:8px;border-bottom:2px solid #60a5fa;border-right:2px solid #60a5fa;border-bottom-right-radius:6px;filter:drop-shadow(0 0 5px rgba(96,165,250,.7));}
#bo{transition:opacity .35s,transform .35s;}.bov{opacity:1!important;pointer-events:auto!important;transform:scale(1)!important;}.boh{opacity:0!important;pointer-events:none!important;transform:scale(.96)!important;}
.cb{display:inline-flex;align-items:center;justify-content:center;gap:8px;height:46px;padding:0 18px;border-radius:14px;font-family:Outfit,sans-serif;font-weight:700;font-size:.85rem;letter-spacing:.04em;text-transform:uppercase;cursor:pointer;transition:all .22s;user-select:none;width:100%;}
.cbp{background:linear-gradient(135deg,#2563eb,#1d4ed8);border:1.5px solid rgba(96,165,250,.45);color:#fff;box-shadow:0 8px 25px rgba(37,99,235,.35),inset 0 1px 0 rgba(255,255,255,.25);}
.cbp:hover:not(:disabled){background:linear-gradient(135deg,#3b82f6,#2563eb);transform:scale(1.03);}
.cbp.paused{background:linear-gradient(135deg,#d97706,#b45309)!important;border-color:rgba(251,191,36,.65)!important;}
.cbs{background:rgba(15,23,42,.88);border:1.5px solid rgba(59,130,246,.3);color:#93c5fd;box-shadow:0 6px 20px rgba(0,0,0,.45);}
.cbs:hover:not(:disabled){background:rgba(30,41,59,.95);border-color:#60a5fa;color:#fff;transform:scale(1.03);}
.cb:disabled{opacity:.35;cursor:not-allowed;pointer-events:none;}
.quiz-row{display:flex;align-items:center;gap:14px;width:100%;max-width:min(1280px,98vw);}
.ctrl-panel{display:flex;flex-direction:column;gap:10px;flex-shrink:0;width:110px;}
.img-wrap{flex:1;min-width:0;}
.qj{width:40px;height:40px;border-radius:12px;font-family:Space Grotesk,monospace;font-size:.85rem;font-weight:700;cursor:pointer;transition:all .2s;display:flex;align-items:center;justify-content:center;border:1.5px solid rgba(59,130,246,.3);background:rgba(15,23,42,.85);color:#93c5fd;}
.qj:hover{background:rgba(37,99,235,.35);border-color:#60a5fa;color:#fff;transform:scale(1.08);}
.qj.active{background:linear-gradient(135deg,#2563eb,#1d4ed8);border-color:#60a5fa;color:#fff;box-shadow:0 0 18px rgba(59,130,246,.6);}
.qj.tech:hover{background:rgba(109,40,217,.35);border-color:#a78bfa;color:#fff;}
.qj.tech.active{background:linear-gradient(135deg,#7c3aed,#6d28d9);border-color:#a78bfa;color:#fff;box-shadow:0 0 18px rgba(139,92,246,.6);}
.sb{display:inline-flex;align-items:center;gap:10px;padding:12px 24px;border-radius:14px;background:rgba(15,23,42,.85);border:1.5px solid rgba(59,130,246,.35);color:#93c5fd;font-family:Outfit,sans-serif;font-weight:700;font-size:.9rem;cursor:pointer;box-shadow:0 10px 25px rgba(0,0,0,.5);transition:all .2s;}
.sb:hover{background:rgba(30,41,59,.95);border-color:#60a5fa;color:#fff;transform:translateY(-2px);}
</style>
</head>
<body class="flex flex-col min-h-screen">
<header class="w-full px-4 md:px-8 py-4 flex items-center justify-between sticky top-0 z-20 bg-black/45 backdrop-blur-md border-b border-slate-800">
  <div class="flex items-center gap-3">
    <div class="w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-700 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,.4)] border border-blue-400/40">
      <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
    </div>
    <div>
      <h1 class="text-lg md:text-2xl font-black tracking-wider flex gap-1.5" style="font-family:Plus Jakarta Sans,sans-serif;">
        <span class="text-white" id="hdr-title">CONNECTION</span>&nbsp;<span class="shimmer font-black" id="hdr-sub">ROUND 2</span>
      </h1>
      <p class="text-[10px] uppercase tracking-[.28em] text-blue-400 font-bold" id="hdr-lbl">Select a Round</p>
    </div>
  </div>
  <div class="flex items-center gap-3 md:gap-4">
    <div id="qcw" class="hidden flex items-center gap-2.5 px-3.5 py-2 rounded-xl border border-blue-500/30 bg-slate-900/60">
      <span class="relative flex h-2.5 w-2.5"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-80"></span><span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-400 shadow-[0_0_10px_#60a5fa]"></span></span>
      <span id="qc" class="text-xs md:text-sm font-bold text-slate-100 tracking-wider font-mono">Q: 1 / 10</span>
    </div>
    <div id="tw" class="hidden tc">
      <div class="flex flex-col items-center gap-0.5">
        <span class="text-[.6rem] uppercase tracking-widest font-bold text-slate-400" id="tl">Time left</span>
        <div class="flex items-baseline gap-1.5"><span id="td">20</span><span class="text-lg font-bold text-blue-300">s</span></div>
      </div>
    </div>
  </div>
</header>
<div class="w-full h-1.5 bg-slate-950 z-20 border-b border-blue-500/20 overflow-hidden"><div id="pb" style="width:100%"></div></div>
<main class="flex-grow flex flex-col justify-center items-center px-4 py-6 md:px-8 relative z-10 w-full max-w-7xl mx-auto">
  <div id="home" class="w-full flex flex-col items-center gap-8 py-4" style="transition:opacity .4s;">
    <div class="text-center">
      <p class="text-xs uppercase tracking-[.3em] text-blue-400 font-bold mb-3">Select a Game Mode</p>
      <h2 class="text-3xl md:text-5xl font-black tracking-tight mb-3" style="font-family:Plus Jakarta Sans,sans-serif;"><span class="text-white">CHOOSE YOUR</span> <span class="gt">ROUND</span></h2>
      <div class="w-20 h-0.5 bg-gradient-to-r from-blue-600 via-sky-400 to-indigo-500 mx-auto shadow-[0_0_10px_#3b82f6]"></div>
    </div>
    <div class="flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-center w-full">
      <div class="mc mcb glass" id="mc-con">
        <div class="ib ibb"><svg class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/></svg></div>
        <p class="text-[10px] uppercase tracking-[.3em] text-blue-400 font-bold mb-2">Round 2 Classic</p>
        <h3 class="text-2xl md:text-3xl font-black text-white mb-3" style="font-family:Plus Jakarta Sans,sans-serif;">Connection<br><span class="gt">Round</span></h3>
        <p class="text-sm text-slate-300 mb-5 leading-relaxed">Look at the images and identify the hidden <strong class="text-blue-300">connection</strong> linking them.</p>
        <div class="flex items-center gap-3 text-xs text-slate-400 mb-6 flex-wrap justify-center"><span class="flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-blue-400 inline-block"></span>10 Questions</span><span class="flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-cyan-400 inline-block"></span>20s / Q</span><span class="flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-amber-400 inline-block"></span>5s Break</span></div>
        <button class="xb">Begin Round <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/></svg></button>
      </div>
      <div class="w-12 h-12 rounded-full bg-slate-800/80 border border-slate-600/50 flex items-center justify-center"><span class="text-slate-400 font-black text-sm">OR</span></div>
      <div class="mc mcp" id="mc-tech">
        <div class="ib ibp"><svg class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg></div>
        <p class="text-[10px] uppercase tracking-[.3em] text-purple-400 font-bold mb-2">Round 2 Tech</p>
        <h3 class="text-2xl md:text-3xl font-black text-white mb-3" style="font-family:Plus Jakarta Sans,sans-serif;">Tech<br><span style="background:linear-gradient(135deg,#fff,#c4b5fd,#8b5cf6,#6d28d9);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;">Connection</span></h3>
        <p class="text-sm text-slate-300 mb-5 leading-relaxed">Look at <strong class="text-purple-300">two images</strong> and guess the <strong class="text-purple-300">tech-related word</strong> connecting them!</p>
        <div class="flex items-center gap-3 text-xs text-slate-400 mb-6 flex-wrap justify-center"><span class="flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-purple-400 inline-block"></span>10 Questions</span><span class="flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-cyan-400 inline-block"></span>20s / Q</span><span class="flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-amber-400 inline-block"></span>5s Break</span></div>
        <button class="pb2">Begin Tech <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/></svg></button>
      </div>
    </div>
    <div class="flex flex-wrap gap-3 justify-center">
      <div class="rb"><svg class="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg><span><strong class="text-blue-300">20 seconds</strong> per question</span></div>
      <div class="rb"><svg class="h-4 w-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg><span><strong class="text-amber-300">5s break</strong> to write answer</span></div>
      <div class="rb"><svg class="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg><span><strong class="text-green-300">10 questions</strong> per round</span></div>
    </div>
  </div>
  <div id="jbar" class="hidden w-full flex flex-col items-center gap-2 mb-3">
    <p class="text-[10px] uppercase tracking-[.3em] text-slate-400 font-bold">Jump to Question</p>
    <div id="jbtns" class="flex flex-wrap gap-2 justify-center"></div>
  </div>
  <div id="quizrow" class="quiz-row hidden">
    <!-- LEFT: Control Panel -->
    <div id="ctlbar" class="ctrl-panel">
      <button id="bbk" class="cb cbs"><svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>Back</button>
      <button id="bpp" class="cb cbp"><span id="ppic"></span><span id="pptx">Stop</span></button>
      <button id="bhm" class="cb cbs"><svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>Home</button>
      <button id="bnx" class="cb cbs"><span id="nxtx">Next</span><svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg></button>
    </div>
    <!-- RIGHT: Image -->
    <div class="img-wrap">
      <div id="ic" class="is" style="opacity:0;transform:scale(.97) translateY(14px);transition:opacity .5s,transform .5s;width:100%;">
        <div class="ca ctl"></div><div class="ca ctr"></div><div class="ca cbl"></div><div class="ca cbr"></div>
        <div id="bo" class="boh absolute inset-0 z-30 flex flex-col items-center justify-center bg-black/85 backdrop-blur-md rounded-3xl p-6 text-center">
          <div class="flex flex-col items-center max-w-xs w-full">
            <div class="relative mb-4 flex items-center justify-center">
              <div class="absolute inset-0 rounded-full bg-amber-500/25 blur-xl animate-pulse"></div>
              <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-[0_0_25px_rgba(245,158,11,.5)]"><svg class="h-8 w-8 text-slate-950" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg></div>
            </div>
            <p class="text-[11px] uppercase tracking-[.3em] text-amber-400 font-bold mb-1">Answer Phase</p>
            <h3 class="text-2xl md:text-3xl font-black text-white mb-2" style="font-family:Plus Jakarta Sans,sans-serif;">Write Your Answer!</h3>
            <p class="text-sm text-slate-300 mb-4">Note down your answer before the next question.</p>
            <div class="flex items-baseline justify-center gap-2 mb-5 px-6 py-2 rounded-2xl bg-slate-900/80 border border-amber-500/30"><span id="bcd" class="font-mono text-5xl md:text-6xl font-black text-amber-400" style="text-shadow:0 0 25px rgba(251,191,36,.7)">5</span><span class="text-xs uppercase tracking-widest text-amber-300/80 font-bold">s</span></div>
            <button id="sk" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-amber-300 hover:text-white bg-amber-500/10 hover:bg-amber-500/25 border border-amber-500/30 transition-all cursor-pointer">Skip Break <svg class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/></svg></button>
          </div>
        </div>
        <div class="ii"><div id="ldr" class="absolute inset-0 flex flex-col items-center justify-center bg-[#03060c] z-10"><div class="animate-spin rounded-full h-12 w-12 border-[3px] border-slate-800 border-t-blue-500 border-r-sky-400"></div><span class="mt-3 text-xs tracking-widest uppercase text-blue-400/80">Loading...</span></div><img id="qi" src="" alt="Question" style="display:block;width:100%;height:100%;object-fit:contain;opacity:0;transition:opacity .3s;"/></div>
      </div>
    </div>
  </div>
  <div id="esc" class="absolute inset-0 flex flex-col items-center justify-center z-30 hidden">
    <div class="glass flex flex-col items-center text-center w-[min(680px,92vw)] p-10 md:p-14 rounded-[30px] mx-4" id="ecd" style="opacity:0;transition:opacity .4s;">
      <div class="w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-content:center shadow-[0_0_30px_rgba(59,130,246,.5)] mb-6"><svg class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></div>
      <p class="text-xs uppercase tracking-[.3em] text-blue-400 font-bold mb-2">Session Completed</p>
      <h2 class="text-3xl md:text-5xl font-black mb-4 tracking-tight text-white" style="font-family:Plus Jakarta Sans,sans-serif;">Round <span class="gt">Complete!</span></h2>
      <div class="w-20 h-0.5 bg-gradient-to-r from-blue-600 via-sky-400 to-indigo-500 mb-6 shadow-[0_0_10px_#3b82f6]"></div>
      <p id="em" class="text-base md:text-lg text-slate-300 mb-8 max-w-md leading-relaxed">All challenges completed!</p>
      <div class="flex gap-4 flex-wrap justify-center">
        <button id="brst" class="sb"><svg class="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd"/></svg>Play Again</button>
        <button id="bgh" class="sb"><svg class="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>Home</button>
      </div>
    </div>
  </div>
</main>
<script>
const ROUNDS={connection:{label:"Connection Round",sub:"ROUND 2",qs:["Q1.jpeg","Q2.jpeg","Q3.jpeg","Q4.jpeg","Q5.jpeg","Q6.jpeg","Q7.jpeg","Q8.jpeg","Q9.jpeg","Q10.jpeg"],tech:false},tech:{label:"TECH CONNECTION",sub:"TECH ROUND",qs:["Tech_Connection_Quiz_Individual_Slides_page-0002.jpg","Tech_Connection_Quiz_Individual_Slides_page-0003.jpg","Tech_Connection_Quiz_Individual_Slides_page-0004.jpg","Tech_Connection_Quiz_Individual_Slides_page-0005.jpg","Tech_Connection_Quiz_Individual_Slides_page-0006.jpg","Tech_Connection_Quiz_Individual_Slides_page-0007.jpg","Tech_Connection_Quiz_Individual_Slides_page-0008.jpg","Tech_Connection_Quiz_Individual_Slides_page-0009.jpg","Tech_Connection_Quiz_Individual_Slides_page-0010.jpg","Tech_Connection_Quiz_Individual_Slides_page-0011.jpg"],tech:true}};
const TQ=20,TB=5;let rnd=null,qs=[],qi=0,tI,bI,tr=TQ,isBrk=false,paused=false;
const SIC='<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>';
const PIC='<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>';
const el=id=>document.getElementById(id);
const hmEl=el("home"),iC=el("ic"),qI=el("qi"),ldr=el("ldr"),esc=el("esc"),ecd=el("ecd"),em=el("em");
const tdEl=el("td"),tlEl=el("tl"),twEl=el("tw"),qcEl=el("qc"),qcwEl=el("qcw");
const pb=el("pb"),bo=el("bo"),bcd=el("bcd"),cb=el("ctlbar"),jb=el("jbar"),jbt=el("jbtns");
const hT=el("hdr-title"),hS=el("hdr-sub"),hL=el("hdr-lbl");
const bbk=el("bbk"),bpp=el("bpp"),ppic=el("ppic"),pptx=el("pptx"),bhm=el("bhm"),bnx=el("bnx"),nxtx=el("nxtx");
el("mc-con").onclick=()=>startR("connection");el("mc-tech").onclick=()=>startR("tech");
el("sk").onclick=()=>{if(isBrk)eBrk();};bbk.onclick=prevQ;bpp.onclick=togPP;bhm.onclick=goHome;bnx.onclick=nxtQ;
el("brst").onclick=restR;el("bgh").onclick=goHome;
function startR(k){rnd=ROUNDS[k];qs=rnd.qs;qi=0;hT.textContent=k==="tech"?"TECH":"CONNECTION";hS.textContent=rnd.sub;hL.textContent=rnd.label;qcwEl.classList.remove("hidden");twEl.classList.remove("hidden");qcEl.textContent="Q: 1 / "+qs.length;tdEl.textContent=TQ;if(k==="tech"){pb.style.background="linear-gradient(90deg,#4c1d95,#7c3aed,#8b5cf6,#c4b5fd)";pb.style.boxShadow="0 0 16px rgba(139,92,246,.6)";}else{pb.style.background="";pb.style.boxShadow="";}bldJ();jb.classList.remove("hidden");hmEl.style.opacity="0";setTimeout(()=>{hmEl.classList.add("hidden");iC.classList.remove("hidden");cb.classList.remove("hidden");requestAnimationFrame(()=>{iC.style.opacity="1";iC.style.transform="scale(1) translateY(0)";});ldQ();},400);}
function bldJ(){jbt.innerHTML="";qs.forEach((_,i)=>{const b=document.createElement("button");b.className="qj"+(rnd.tech?" tech":"");b.textContent=i+1;b.title="Q"+(i+1);b.onclick=()=>{if(i!==qi){rstT();isBrk=false;paused=false;qi=i;ldQ();}};jbt.appendChild(b);});}
function updJ(){jbt.querySelectorAll(".qj").forEach((b,i)=>b.classList.toggle("active",i===qi));}
function updC(){bbk.disabled=(qi===0&&!isBrk);if(paused){pptx.textContent="Start";ppic.innerHTML=PIC;bpp.classList.add("paused");}else{pptx.textContent="Stop";ppic.innerHTML=SIC;bpp.classList.remove("paused");}nxtx.textContent=(qi>=qs.length-1&&!isBrk)?"Finish":"Next";}
function ldQ(){if(qi>=qs.length){endQ();return;}isBrk=false;paused=false;clearInterval(bI);bo.classList.remove("bov");bo.classList.add("boh");tlEl.textContent="Time left";tdEl.classList.remove("tw","tb");qcEl.textContent="Q: "+(qi+1)+" / "+qs.length;updC();updJ();qI.style.opacity="0";ldr.style.display="flex";setTimeout(()=>{qI.src=qs[qi];qI.onload=qI.onerror=()=>{ldr.style.display="none";qI.style.opacity="1";rstT();stT();};},250);}
function stT(){tr=TQ;updD();paused=false;updC();rstPB();pb.classList.add("pbr");pb.style.animationPlayState="running";runQT();}
function runQT(){clearInterval(tI);tI=setInterval(()=>{tr--;updD();if(tr<=0){clearInterval(tI);sBrk();}},1000);}
function sBrk(){clearInterval(tI);clearInterval(bI);isBrk=true;paused=false;updC();tr=TB;tlEl.textContent="Write Time";tdEl.classList.remove("tw");tdEl.classList.add("tb");tdEl.textContent=tr;bcd.textContent=tr;rstPB();pb.classList.add("pbb");pb.style.animationPlayState="running";bo.classList.remove("boh");bo.classList.add("bov");runBT();}
function runBT(){clearInterval(bI);bI=setInterval(()=>{tr=Math.max(0,tr-1);tdEl.textContent=tr;bcd.textContent=tr;if(tr<=0){clearInterval(bI);setTimeout(eBrk,300);}},1000);}
function eBrk(){clearInterval(bI);isBrk=false;paused=false;bo.classList.remove("bov");bo.classList.add("boh");tlEl.textContent="Time left";tdEl.classList.remove("tb");pb.classList.remove("pbb");if(qi>=qs.length-1)endQ();else{qi++;ldQ();}}
function togPP(){paused=!paused;if(paused){clearInterval(tI);clearInterval(bI);pb.style.animationPlayState="paused";}else{pb.style.animationPlayState="running";if(isBrk)runBT();else runQT();}updC();}
function prevQ(){if(qi>0){rstT();isBrk=false;paused=false;qi--;ldQ();}}
function nxtQ(){rstT();paused=false;if(isBrk)eBrk();else if(qi>=qs.length-1)endQ();else{qi++;ldQ();}}
function updD(){tdEl.textContent=tr;if(tr<=5)tdEl.classList.add("tw");else tdEl.classList.remove("tw");}
function rstT(){clearInterval(tI);clearInterval(bI);rstPB();}
function rstPB(){pb.classList.remove("pbr","pbb");pb.style.animationPlayState="running";void pb.offsetWidth;}
function endQ(){rstT();iC.style.opacity="0";iC.style.transform="scale(.97) translateY(14px)";cb.classList.add("hidden");jb.classList.add("hidden");setTimeout(()=>{iC.classList.add("hidden");em.textContent="All "+qs.length+" "+(rnd.tech?"tech ":"")+"challenges complete. Outstanding!";esc.classList.remove("hidden");ecd.style.opacity="0";requestAnimationFrame(()=>{ecd.style.opacity="1";});},500);}
function goHome(){rstT();isBrk=false;paused=false;iC.classList.add("hidden");cb.classList.add("hidden");jb.classList.add("hidden");esc.classList.add("hidden");qcwEl.classList.add("hidden");twEl.classList.add("hidden");tdEl.classList.remove("tw","tb");bo.classList.remove("bov");bo.classList.add("boh");pb.style.background="";pb.style.boxShadow="";rstPB();hT.textContent="CONNECTION";hS.textContent="ROUND 2";hL.textContent="Select a Round";hmEl.classList.remove("hidden");hmEl.style.opacity="0";requestAnimationFrame(()=>{hmEl.style.opacity="1";});}
function restR(){ecd.style.opacity="0";setTimeout(()=>{esc.classList.add("hidden");qi=0;iC.classList.remove("hidden");cb.classList.remove("hidden");jb.classList.remove("hidden");iC.style.opacity="0";iC.style.transform="scale(.97) translateY(14px)";requestAnimationFrame(()=>{iC.style.opacity="1";iC.style.transform="scale(1) translateY(0)";});tdEl.textContent=TQ;tdEl.classList.remove("tw","tb");tlEl.textContent="Time left";bldJ();ldQ();},400);}
window.addEventListener("keydown",e=>{if(iC.classList.contains("hidden"))return;if(e.code==="Space"){e.preventDefault();togPP();}else if(e.key==="ArrowLeft"){e.preventDefault();prevQ();}else if(e.key==="ArrowRight"){e.preventDefault();nxtQ();}});
</script>
</body>
</html>`;

fs.writeFileSync(file, html, "utf8");
console.log("Written! Size:", fs.statSync(file).size);
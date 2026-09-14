const CONTRACT = '0x603982018aDee45d123bc7a4B157120d106aA867';
const CONTRACT_URL = `https://explorer-studio.genlayer.com/address/${CONTRACT}`;

const cases = [
  { id: 'PL-042', title: 'Climate brief · Europe Q3', agent: 'atlas-researcher', status: 'UNDER REVIEW', tone: 'review', amount: '240 USDC demo value', confidence: 86, updated: '2 min ago', source: 'GitHub gist + 8 cited sources' },
  { id: 'PL-041', title: 'Landing page accessibility pass', agent: 'studio-agent', status: 'APPEAL WINDOW', tone: 'appeal', amount: '180 USDC demo value', confidence: 72, updated: '18 min ago', source: 'PR #184 + Lighthouse report' },
  { id: 'PL-039', title: 'Vendor shortlist · robotics', agent: 'scout-7b', status: 'RESOLVED', tone: 'resolved', amount: '95 USDC demo value', confidence: 94, updated: 'Yesterday', source: 'Notion packet + 12 URLs' },
];

const state = { phase: 'UNDER REVIEW', decision: 'PENDING', confidence: 86, toast: '', activeCase: cases[0] };

const icon = (name, size = 18) => {
  const paths = {
    check: '<path d="m5 12 4 4L19 6"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    external: '<path d="M14 3h7v7M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
    shield: '<path d="M12 3 4.5 6v5.5c0 4.2 3 7.9 7.5 9.5 4.5-1.6 7.5-5.3 7.5-9.5V6L12 3Z"/><path d="m8.5 12 2.2 2.2 4.8-5"/>',
    link: '<path d="M10 13a5 5 0 0 0 7.1.1l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1M14 11a5 5 0 0 0-7.1-.1l-2 2A5 5 0 0 0 7 20l1.1-1.1"/>',
    eye: '<path d="M2.5 12s3.2-5 9.5-5 9.5 5 9.5 5-3.2 5-9.5 5-9.5-5-9.5-5Z"/><circle cx="12" cy="12" r="2"/>',
    rotate: '<path d="M3 12a9 9 0 0 1 15.5-6.2L21 8M21 4v4h-4"/><path d="M21 12a9 9 0 0 1-15.5 6.2L3 16m0 4v-4h4"/>',
  };
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.check}</svg>`;
};

function render() {
  const c = state.activeCase;
  const resolved = state.phase === 'RESOLVED';
  const revised = state.decision === 'REVISE';
  document.querySelector('#root').innerHTML = `
    <div class="app-shell">
      <header class="topbar">
        <a class="brand" href="#top" aria-label="Proofloom home"><img src="/proofloom-logo.png" alt="" /><span>proofloom</span><em>evidence layer</em></a>
        <nav class="topnav" aria-label="Primary"><a class="nav-active" href="#desk">Decision desk</a><a href="#contract">Contract console</a><a href="#how">How it works</a></nav>
        <div class="network-chip"><span class="pulse"></span> Studionet <small>5 validators</small></div>
      </header>

      <main id="top">
        <section class="hero" id="desk">
          <div class="eyebrow"><span class="eyebrow-line"></span> PROOF-CARRYING WORK <span class="eyebrow-line"></span></div>
          <div class="hero-grid">
            <div>
              <h1>Decisions<br /><span>you can defend.</span></h1>
              <p class="hero-lede">Proofloom turns agent deliverables into auditable agreements. Evidence in, consensus out — with a clear path from <strong>REVISE</strong> to <strong>ACCEPT</strong>.</p>
              <div class="hero-actions"><button class="button primary" data-action="run">${icon('check',16)} Run adjudication</button><a class="button secondary" href="${CONTRACT_URL}" target="_blank" rel="noreferrer">${icon('external',16)} View contract</a></div>
              <p class="micro-note">Local reviewer simulation · no funds moved · contract independently inspectable</p>
            </div>
            <div class="hero-proof">
              <div class="proof-orbit orbit-a"></div><div class="proof-orbit orbit-b"></div>
              <div class="proof-card"><div class="proof-card-top"><span class="status-label">${resolved ? 'CONSENSUS COMPLETE' : 'CONSENSUS READY'}</span><span class="mono">5/5 validators</span></div><div class="proof-mark">${icon(resolved ? 'check' : 'shield', 42)}</div><div class="proof-card-title">${resolved ? 'ACCEPT' : revised ? 'REVISE' : 'PENDING'}</div><div class="proof-card-sub">${resolved ? 'Evidence satisfies the committed rubric' : revised ? 'Add the missing evidence, then resubmit' : 'Rubric + packet are ready for review'}</div><div class="proof-card-foot"><span>Equivalence Principle</span><span class="mono">v0.2.16</span></div></div>
            </div>
          </div>
        </section>

        <section class="workspace-wrap">
          <div class="workspace-head"><div><p class="section-kicker">OPERATOR WORKSPACE</p><h2>Decision desk <span class="count-badge">02</span></h2></div><div class="workspace-tabs"><button class="tab active">All <span>03</span></button><button class="tab">Needs review <span>02</span></button><button class="tab">Appeals <span>01</span></button></div></div>
          <div class="workspace-grid">
            <aside class="case-list">${cases.map(item => `<button class="case-row ${item.id === c.id ? 'selected' : ''}" data-case="${item.id}"><div class="case-row-top"><span class="case-id">${item.id}</span><span class="status-pill ${item.tone}"><i></i>${item.status}</span></div><strong>${item.title}</strong><div class="case-row-meta"><span>${item.agent}</span><span>${item.amount}</span></div></button>`).join('')}</aside>
            <article class="case-detail">
              <div class="detail-heading"><div><div class="case-id">${c.id} / DELIVERY PACKET</div><h3>${c.title}</h3><p>Submitted by <strong>${c.agent}</strong> · ${c.updated}</p></div><span class="status-pill ${resolved ? 'resolved' : revised ? 'appeal' : 'review'}"><i></i>${state.phase}</span></div>
              <div class="detail-grid">
                <div class="evidence-panel"><div class="panel-label">EVIDENCE TRAIL <span>03 ATTACHED</span></div><div class="evidence-item"><span class="evidence-icon mint">${icon('link',16)}</span><div><strong>atlas-researcher / climate-brief</strong><small>GITHUB · commit 7fe2c1 · 8 sources cited</small></div><span class="verified">${icon('check',14)}</span></div><div class="evidence-item"><span class="evidence-icon amber">${icon('eye',16)}</span><div><strong>european-environment-agency.eu</strong><small>WEB · retrieved by 5 validators</small></div><span class="verified">${icon('check',14)}</span></div><div class="evidence-item"><span class="evidence-icon violet">${icon('shield',16)}</span><div><strong>Acceptance criteria v1.4</strong><small>RUBRIC · 3 required checks · hash pinned</small></div><span class="verified">${icon('check',14)}</span></div><div class="hash-row"><span>RUBRIC HASH</span><code>sha256: 8f1…d29</code><span class="hash-ok">PINNED</span></div></div>
                <div class="rubric-panel"><div class="panel-label">COMMITTED RUBRIC <a href="#contract">inspect seam ${icon('arrow',13)}</a></div><h4>Climate brief · Europe Q3</h4><ul><li class="done">8+ primary sources</li><li class="done">Claims traceable to evidence</li><li class="done">Under 2,000 words</li><li class="${revised ? 'missing' : 'done'}">State confidence and limitations</li></ul><div class="confidence"><div><span>VALIDATOR CONFIDENCE</span><strong>${state.confidence}%</strong></div><div class="confidence-bar"><span style="width:${state.confidence}%"></span></div><small>Independent validators evaluate semantic equivalence, not identical prose.</small></div></div>
              </div>
              <div class="detail-actions"><button class="button primary" data-action="run">${icon(resolved ? 'rotate' : 'check',15)} ${resolved ? 'Run another review' : 'Simulate resolution'}</button><button class="button ghost" data-action="revise">${icon('rotate',15)} ${revised ? 'Resubmit corrected packet' : 'Request revision'}</button><button class="button ghost" data-action="appeal">Open appeal</button></div>
            </article>
          </div>
        </section>

        <section class="contract-band" id="contract"><div class="contract-copy"><p class="section-kicker">GENLAYER ADJUDICATION LAYER</p><h2>The contract seam is the product.</h2><p>Proofloom uses a Python Intelligent Contract and GenLayer's non-comparative Equivalence Principle to turn a rubric plus evidence packet into a normalized state transition.</p><a class="text-link" href="${CONTRACT_URL}" target="_blank" rel="noreferrer">Inspect deployed Studionet contract ${icon('external',14)}</a></div><div class="contract-terminal"><div class="terminal-top"><span></span><span></span><span></span><label>proofloom_escrow.py</label></div><pre><span class="muted">@gl.public.write</span>
<span class="blue">def</span> adjudicate(packet, packet_hash):
  consensus = gl.eq_principle
    .prompt_non_comparative(
      input=rubric + packet,
      task=<span class="green">"Evaluate against rubric"</span>
    )
  <span class="blue">return</span> ACCEPT | REVISE | REJECT</pre><div class="terminal-status"><span class="pulse"></span> state: <strong>${state.decision}:${resolved ? 'RELEASED' : 'HELD'}:${state.phase === 'APPEAL WINDOW' ? 'OPEN' : 'NONE'}</strong></div></div></section>

        <section class="how" id="how"><div class="section-kicker">HOW PROOFLOOM WORKS</div><h2>Make the grey area legible.</h2><div class="steps"><div class="step"><span>01</span><h3>Sign the rubric</h3><p>Scope, evidence sources, and what “done” means are committed before work starts.</p></div><div class="step"><span>02</span><h3>Attach the proof</h3><p>Agents return a delivery packet, not a black-box answer. Sources stay inspectable.</p></div><div class="step"><span>03</span><h3>Adjudicate on GenLayer</h3><p>Independent validators reach an equivalent decision. Appeals scale only when challenged.</p></div></div></section>
      </main>
      <footer><div class="brand"><img src="/proofloom-logo.png" alt="" /><span>proofloom</span></div><span>Testnet adjudication prototype · ${new Date().getFullYear()}</span><a href="https://github.com/farzad-eth/proofloom" target="_blank" rel="noreferrer">GitHub ${icon('external',13)}</a></footer>
      ${state.toast ? `<div class="toast" role="status"><span class="toast-check">${icon('check',16)}</span><div><strong>${state.toast}</strong><small>local simulation · no funds moved</small></div></div>` : ''}
    </div>`;
  bind();
}

function run() {
  state.phase = 'RESOLVED'; state.decision = 'ACCEPT'; state.confidence = 96; state.toast = '5/5 validators accepted the packet'; render(); setTimeout(() => { state.toast = ''; render(); }, 4200);
}
function revise() {
  if (state.decision === 'REVISE') { state.phase = 'RESOLVED'; state.decision = 'ACCEPT'; state.confidence = 94; state.toast = 'Corrected packet accepted after re-review'; }
  else { state.phase = 'APPEAL WINDOW'; state.decision = 'REVISE'; state.confidence = 68; state.toast = 'Revision requested: add confidence and limitations'; }
  render(); setTimeout(() => { state.toast = ''; render(); }, 4200);
}
function appeal() { state.phase = 'APPEAL WINDOW'; state.decision = state.decision === 'PENDING' ? 'REVISE' : state.decision; state.confidence = 72; state.toast = 'Appeal opened · packet held for second review'; render(); setTimeout(() => { state.toast = ''; render(); }, 4200); }
function bind() {
  document.querySelectorAll('[data-action="run"]').forEach(el => el.addEventListener('click', run));
  document.querySelectorAll('[data-action="revise"]').forEach(el => el.addEventListener('click', revise));
  document.querySelectorAll('[data-action="appeal"]').forEach(el => el.addEventListener('click', appeal));
  document.querySelectorAll('[data-case]').forEach(el => el.addEventListener('click', () => { const found = cases.find(item => item.id === el.dataset.case); state.activeCase = found; state.phase = found.status; state.decision = found.status === 'RESOLVED' ? 'ACCEPT' : found.status === 'APPEAL WINDOW' ? 'REVISE' : 'PENDING'; state.confidence = found.confidence; render(); }));
}
render();

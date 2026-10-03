'use strict';
const p=window.PORTFOLIO;
const esc=x=>String(x).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const tags=xs=>`<div class="tags">${xs.map(x=>`<span class="tag">${esc(x)}</span>`).join('')}</div>`;
const cards=(xs,extra='')=>xs.map(x=>`<article class="card ${extra}"><h3>${esc(x.title)}</h3><p>${esc(x.text)}</p></article>`).join('');
const section=(n,id,title,content)=>`<section class="section wrap" id="${id}"><div class="section-head"><span class="section-no">${n}</span><h2>${title}</h2></div>${content}</section>`;
const draft='<span class="draft">Suggested wording · review and personalize</span>';
document.querySelector('#intro').textContent=p.intro;
document.querySelector('#year').textContent=new Date().getFullYear();
document.querySelector('#sections').innerHTML=[
section('01','about','A little about me.',`<div class="two"><article class="card"><h3>Student profile</h3><dl class="profile-grid">${[['Name',p.profile.name],['Register / roll number',p.profile.register],['Department',p.profile.department],['Current year',p.profile.year],['College',p.profile.college],['Email ID',p.profile.email]].map(([k,v])=>`<div><dt>${k}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl></article><article><h3>Career objective</h3>${draft}<div class="goal"><h3>My next step</h3><p>${esc(p.objectives.short)}</p></div><div class="goal"><h3>The bigger picture</h3><p>${esc(p.objectives.long)}</p></div></article></div>`),
section('02','academics','Academic foundation.',`<div class="two"><article class="card"><span class="label">${esc(p.academic.dates)}</span><h3>${esc(p.profile.college)}</h3><p>${esc(p.academic.degree)}</p><div class="tags"><span class="tag">Year 2</span><span class="tag">Academic score: ${esc(p.academic.score)}</span></div><p class="small">${esc(p.academic.scoreNote)}</p></article><article class="card empty"><h3>School education</h3><p>${esc(p.academic.school)}</p></article></div>`),
section('03','skills','My technical toolkit.',`<div class="three">${p.skills.map(x=>`<article class="card"><h3>${esc(x.title)}</h3>${tags(x.items)}</article>`).join('')}</div>`),
section('04','projects','Ideas put into practice.',p.projects.map((x,i)=>`<article class="project"><span class="project-num">0${i+1}</span><div><p class="label">${esc(x.category)}</p><h3>${esc(x.title)}</h3><p>${esc(x.description)}</p>${tags(x.tech)}<details><summary>Project details</summary><div class="detail"><div><h4>Problem statement</h4><p>${esc(x.problem)}</p></div><div><h4>My contribution</h4><p>${esc(x.contribution)}</p></div><div><h4>Outcome</h4><p>${esc(x.outcome)}</p></div></div></details></div><span class="project-status">${esc(x.status)}</span></article>`).join('')),
section('05','journey','Learning beyond the classroom.',`<div class="experience"><div><span class="label">Internships / Industrial Exposure</span><p class="date">${esc(p.internship.duration)}</p></div><article><h3>${esc(p.internship.role)}</h3><strong>${esc(p.internship.organization)}</strong><div class="two"><div><h4>Work performed</h4><p>${esc(p.internship.work)}</p></div><div><h4>Learning outcomes</h4><p>${esc(p.internship.learning)}</p></div></div></article></div>`),
section('06','achievements','Milestones & achievements.',`<div class="three">${cards(p.achievements)}</div>`),
section('07','activities','Participation & perspective.',`<p>Co-curricular & extracurricular activities</p><div class="three">${cards(p.activities)}</div>`),
section('08','growth','Growing beyond technical skills.',`${draft}<div class="two"><article class="card"><h3>Skills & personal development</h3>${p.development.map(x=>`<div class="skill-row"><strong>${esc(x.title)}</strong><p>${esc(x.text)}</p></div>`).join('')}</article><article><h3>Future goals</h3>${p.future.map(x=>`<div class="skill-row"><strong>${esc(x.title)}</strong><p>${esc(x.text)}</p></div>`).join('')}</article></div>`),
].join('');
function expandProjects(){document.querySelectorAll('details').forEach(d=>d.open=true)}
window.addEventListener('beforeprint',expandProjects);
document.querySelector('#print').addEventListener('click',()=>{expandProjects();window.print()});

import fs from 'fs';
import path from 'path';
import { marked } from 'marked';



const rawDir = path.join(process.cwd(), 'history_data');

// 1. Chronology
let chronologyText = fs.readFileSync(path.join(rawDir, 'chronology.md'), 'utf-8');
let chronologyIntro = chronologyText.split(/<strong>\d{4}<\/strong>/)[0];
let chronologyParts = chronologyText.match(/<strong>\d{4}<\/strong>[\s\S]*?(?=<strong>\d{4}<\/strong>|$)/g);

let chronologyHtml = '<div class="prose max-w-none text-lg text-gray-700 mb-8">' + marked.parse(chronologyIntro) + '</div>';
chronologyHtml += '<div class="space-y-4">';
if (chronologyParts) {
    for (let part of chronologyParts) {
        let yearMatch = part.match(/<strong>(\d{4})<\/strong>/);
        if (!yearMatch) continue;
        let year = yearMatch[1];
        let contentText = part.replace(/<strong>\d{4}<\/strong>/, '');
        contentText = contentText.split(/\r?\n/).filter(l => l.trim() !== '').join('\n\n');
        chronologyHtml += `
        <details class="bg-white rounded-xl shadow-sm group overflow-hidden border border-gray-100 hover:shadow-md transition-all">
            <summary class="cursor-pointer p-4 md:p-5 font-bold text-xl hover:bg-amber-50 transition-colors flex justify-between items-center text-brand-primary">
                <span class="flex items-center gap-4">
                    <span class="inline-block bg-brand-accent text-brand-primary px-4 py-1 font-black rounded-lg text-lg shadow-sm">${year}</span>
                    <span class="text-lg">Highlights</span>
                </span>
                <svg class="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </summary>
            <div class="p-6 md:p-8 bg-gray-50 border-t border-gray-100 prose max-w-none text-gray-700">
                ${marked.parse(contentText)}
            </div>
        </details>
        `;
    }
}
chronologyHtml += '</div>';

// 2. Summary
let summaryText = fs.readFileSync(path.join(rawDir, 'summary.md'), 'utf-8');
let summaryHtml = '<div class="space-y-4">';
const summaryLines = summaryText.split(/\r?\n/);
let inSummaryRole = false;
let summaryRoleContent = '';

for (let i = 0; i < summaryLines.length; i++) {
    const line = summaryLines[i];
    if (line.startsWith('### ')) {
        if (inSummaryRole) {
            summaryHtml += '<div class="p-6 md:p-8 bg-blue-50/30 border-t border-blue-100/50 prose max-w-none text-gray-700 text-lg leading-relaxed">' + marked.parse(summaryRoleContent) + '</div></details>';
        }
        let sectionName = line.replace('### ', '').trim();
        summaryHtml += `
        <details class="bg-white rounded-xl shadow-sm group overflow-hidden border border-gray-100 hover:shadow-md transition-all">
            <summary class="cursor-pointer p-4 md:p-5 font-bold text-xl hover:bg-blue-50 transition-colors flex justify-between items-center text-brand-primary">
                ${sectionName}
                <svg class="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </summary>
        `;
        inSummaryRole = true;
        summaryRoleContent = '';
    } else {
        if (inSummaryRole) {
            summaryRoleContent += line + '\n';
        }
    }
}
if (inSummaryRole) {
    summaryHtml += '<div class="p-6 md:p-8 bg-blue-50/30 border-t border-blue-100/50 prose max-w-none text-gray-700 text-lg leading-relaxed">' + marked.parse(summaryRoleContent) + '</div></details>';
}
summaryHtml += '</div>';

// 3. Hall of fame
let hofText = fs.readFileSync(path.join(rawDir, 'hall-of-fame.md'), 'utf-8');
hofText = hofText.replace(/<ul id="markdown-toc">[\s\S]*?<\/ul>\s*<hr \/>/, '');

let hofHtml = '<div class="space-y-4">';
const hofLines = hofText.split(/\r?\n/);
let inHofRole = false;
let hofRoleContent = '';
let inHofIntro = true;

for (let i = 0; i < hofLines.length; i++) {
    const line = hofLines[i];
    if (line.startsWith('<h2')) { 
        if (inHofRole) {
            hofHtml += '<div class="p-6 md:p-8 bg-gray-50 border-t border-gray-100 prose max-w-none text-gray-700 prose-img:rounded-xl prose-img:shadow-md">' + marked.parse(hofRoleContent) + '</div></details>';
            inHofRole = false;
        }
        let tierName = line.replace(/<.*?>/g, '').trim();
        hofHtml += `<h2 class="text-4xl font-black text-brand-primary mt-16 mb-8 border-b border-gray-200 pb-4">${tierName} Tier</h2>`;
        inHofIntro = false;
    } else if (line.startsWith('<h3')) {
        if (inHofRole) {
            hofHtml += '<div class="p-6 md:p-8 bg-gray-50 border-t border-gray-100 prose max-w-none text-gray-700 prose-img:rounded-xl prose-img:shadow-md">' + marked.parse(hofRoleContent) + '</div></details>';
        }
        let memberName = line.replace(/<.*?>/g, '').trim();
        hofHtml += `
        <details class="bg-white rounded-xl shadow-sm group overflow-hidden border border-gray-100 hover:shadow-md transition-all mb-4">
            <summary class="cursor-pointer p-4 md:p-6 font-bold text-2xl hover:bg-blue-50 transition-colors flex justify-between items-center text-gray-800">
                ${memberName}
                <svg class="w-6 h-6 text-gray-400 group-open:rotate-180 transition-transform shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </summary>
        `;
        inHofRole = true;
        inHofIntro = false;
        hofRoleContent = '';
    } else {
        if (inHofRole) {
            if (line.trim() !== '') {
                hofRoleContent += line + '\n';
            }
        } else if (inHofIntro) {
            if (line.trim() !== '') {
                hofHtml += '<div class="prose max-w-none text-lg text-gray-700 mb-8">' + marked.parse(line) + '</div>';
            }
        }
    }
}
if (inHofRole) {
    hofHtml += '<div class="p-6 md:p-8 bg-gray-50 border-t border-gray-100 prose max-w-none text-gray-700 prose-img:rounded-xl prose-img:shadow-md">' + marked.parse(hofRoleContent) + '</div></details>';
}
hofHtml += '</div>';

// 4. Awards & Tables
let awardsText = fs.readFileSync(path.join(rawDir, 'awards.md'), 'utf-8');
let moyText = fs.readFileSync(path.join(rawDir, 'member-of-the-year.md'), 'utf-8');
let royText = fs.readFileSync(path.join(rawDir, 'rookie-of-the-year.md'), 'utf-8');
let certText = fs.readFileSync(path.join(rawDir, 'certificates.md'), 'utf-8');

function styleTable(html) {
    return html.replace(/<table.*?>/g, '<div class="overflow-x-auto my-6 bg-white rounded-xl shadow-sm border border-gray-100"><table class="w-full text-left border-collapse">')
               .replace(/<\/table>/g, '</table></div>')
               .replace(/<thead>/g, '<thead class="bg-gray-50 text-brand-primary border-b border-gray-200">')
               .replace(/<th>/g, '<th class="p-4 font-bold whitespace-nowrap">')
               .replace(/<td(.*?)>/g, '<td class="p-4 border-b border-gray-100 text-gray-700">');
}

let awardsHtml = `<div class="prose max-w-none text-gray-700">` + marked.parse(awardsText) + `</div>`;
let moyHtml = styleTable(marked.parse(moyText));
let royHtml = styleTable(marked.parse(royText));
let certHtml = styleTable(marked.parse(certText));

// 5. Officers
let officersText = fs.readFileSync(path.join(rawDir, 'officers.md'), 'utf-8');

let officersHtml = '<div class="space-y-4">';
const lines = officersText.split(/\r?\n/);
let inRole = false;
let roleContent = '';

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.startsWith('# ')) {
        if (inRole) {
            officersHtml += '<div class="p-5 bg-gray-50 border-t border-gray-100 prose max-w-none text-sm text-gray-600">' + marked.parse(roleContent) + '</div></details>';
            inRole = false;
        }
        officersHtml += `<h2 class="text-3xl font-bold text-brand-primary mt-12 mb-6 border-b border-gray-200 pb-2">${line.replace('# ', '')}</h2>`;
    } else if (line.includes('<strong>')) {
        if (inRole) {
            officersHtml += '<div class="p-5 bg-gray-50 border-t border-gray-100 prose max-w-none text-sm text-gray-600">' + marked.parse(roleContent) + '</div></details>';
        }
        let roleName = line.replace('<strong>', '').replace('</strong>', '').replace(':', '').trim();
        officersHtml += `
        <details class="bg-white rounded-xl shadow-sm group overflow-hidden border border-gray-100 hover:shadow-md transition-all">
            <summary class="cursor-pointer p-5 font-semibold text-lg hover:bg-blue-50 transition-colors flex justify-between items-center text-gray-800">
                ${roleName}
                <svg class="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </summary>
        `;
        inRole = true;
        roleContent = '';
    } else {
        if (inRole && !line.includes('***')) {
            if (line.trim() !== '') roleContent += line + '<br>\n';
        }
    }
}
if (inRole) {
    officersHtml += '<div class="p-5 bg-gray-50 border-t border-gray-100 prose max-w-none text-sm text-gray-600">' + marked.parse(roleContent) + '</div></details>';
}
officersHtml += '</div>';

// Output Nunjucks file
const njkContent = `---
layout: "base.njk"
title: "Celebrating Our Legacy - GLAAM Chapter History"
---

<div class="bg-bg-subtle min-h-screen pb-20">
    <!-- Hero Section -->
    <section class="relative pt-32 pb-16 overflow-hidden bg-brand-primary">
        <div class="absolute inset-0 z-0">
            <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
            <div class="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-bg-subtle to-transparent"></div>
        </div>
        
        <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center text-white">
            <span class="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-sm font-bold uppercase tracking-widest mb-6">Our Heritage</span>
            <h1 class="text-4xl md:text-6xl font-black tracking-tight mb-6 drop-shadow-sm">
                Celebrating Our <span class="text-brand-accent">Legacy</span>
            </h1>
            <p class="text-xl max-w-3xl mx-auto mb-10 leading-relaxed text-blue-100 text-balance">
                Over 60 years of vibrant history, outstanding volunteers, and the incredible people who built the Greater Los Angeles Area Mensa chapter.
            </p>
        </div>
    </section>

    <!-- Tabbed Interface -->
    <section class="max-w-6xl mx-auto px-6 lg:px-8 relative z-10 -mt-12">
        
        <!-- Tab Navigation -->
        <div class="flex overflow-x-auto mb-6 gap-2 no-scrollbar px-2" id="legacy-tabs">
            <button class="tab-btn active px-8 py-4 rounded-xl font-bold transition-all bg-white text-brand-primary shadow-lg ring-2 ring-brand-primary/20 shrink-0" data-target="chronology">Chronology & Story</button>
            <button class="tab-btn px-8 py-4 rounded-xl font-bold transition-all bg-white/80 text-gray-500 hover:text-brand-primary hover:bg-white shadow-sm shrink-0" data-target="hof">Hall of Fame</button>
            <button class="tab-btn px-8 py-4 rounded-xl font-bold transition-all bg-white/80 text-gray-500 hover:text-brand-primary hover:bg-white shadow-sm shrink-0" data-target="awards">Annual Awards</button>
            <button class="tab-btn px-8 py-4 rounded-xl font-bold transition-all bg-white/80 text-gray-500 hover:text-brand-primary hover:bg-white shadow-sm shrink-0" data-target="officers">Past Officers</button>
        </div>

        <!-- Tab Contents -->
        <div class="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden">
            
            <!-- Chronology Tab -->
            <div id="chronology" class="tab-content active p-6 md:p-12 animate-fade-in">
                <div class="mb-16">
                    <div class="flex items-center gap-4 mb-8">
                        <div class="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-brand-primary">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                        </div>
                        <h2 class="text-3xl font-bold text-gray-900">The Chapter Story</h2>
                    </div>
                    <div class="bg-blue-50/50 p-8 md:p-12 rounded-3xl border border-blue-100/50">
                        ${summaryHtml}
                    </div>
                </div>
                
                <div>
                    <div class="flex items-center gap-4 mb-8">
                        <div class="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-600">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                        </div>
                        <h2 class="text-3xl font-bold text-gray-900">Detailed Chronology</h2>
                    </div>
                    <div class="bg-white p-6 md:p-10 rounded-3xl border border-gray-100 shadow-sm">
                        ${chronologyHtml}
                    </div>
                </div>
            </div>

            <!-- Hall of Fame Tab -->
            <div id="hof" class="tab-content hidden p-6 md:p-12 animate-fade-in">
                <div class="max-w-4xl mx-auto">
                    ${hofHtml}
                </div>
            </div>

            <!-- Annual Awards Tab -->
            <div id="awards" class="tab-content hidden p-6 md:p-12 animate-fade-in space-y-16">
                <div class="max-w-4xl mx-auto">
                    <h2 class="text-4xl font-bold text-brand-primary mb-8 text-center">About the Awards</h2>
                    ${awardsHtml}
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div class="bg-gradient-to-br from-white to-blue-50/30 p-8 rounded-3xl border border-blue-100 shadow-sm">
                        <h3 class="text-2xl font-bold text-brand-primary mb-6 flex items-center gap-3">
                            <svg class="w-8 h-8 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                            Member of the Year
                        </h3>
                        ${moyHtml}
                    </div>
                    <div class="bg-gradient-to-br from-white to-amber-50/50 p-8 rounded-3xl border border-amber-100 shadow-sm">
                        <h3 class="text-2xl font-bold text-brand-primary mb-6 flex items-center gap-3">
                            <svg class="w-8 h-8 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                            Rookie of the Year
                        </h3>
                        ${royHtml}
                    </div>
                </div>

                <div class="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm max-w-4xl mx-auto">
                    <h3 class="text-3xl font-bold text-brand-primary mb-8 text-center">Certificates of Appreciation</h3>
                    ${certHtml}
                </div>
            </div>

            <!-- Officers Tab -->
            <div id="officers" class="tab-content hidden p-6 md:p-12 animate-fade-in">
                <div class="mb-10 text-center max-w-2xl mx-auto">
                    <h2 class="text-4xl font-bold text-brand-primary mb-4">Past Officers Registry</h2>
                    <p class="text-lg text-gray-500">A testament to the brilliant minds who have guided our chapter. Expand a role to see its history.</p>
                </div>
                <div class="max-w-4xl mx-auto">
                    ${officersHtml}
                </div>
            </div>

        </div>
    </section>
</div>

<script>
    document.addEventListener('DOMContentLoaded', () => {
        const btns = document.querySelectorAll('.tab-btn');
        const contents = document.querySelectorAll('.tab-content');

        btns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active from all
                btns.forEach(b => {
                    b.classList.remove('bg-white', 'text-brand-primary', 'shadow-lg', 'ring-2', 'ring-brand-primary/20');
                    b.classList.add('bg-white/80', 'text-gray-500');
                });
                contents.forEach(c => c.classList.add('hidden'));

                // Add active to clicked
                btn.classList.add('bg-white', 'text-brand-primary', 'shadow-lg', 'ring-2', 'ring-brand-primary/20');
                btn.classList.remove('bg-white/80', 'text-gray-500');
                
                const targetId = btn.getAttribute('data-target');
                document.getElementById(targetId).classList.remove('hidden');
            });
        });
    });
</script>

<style>
    .prose-img { border-radius: 1rem; margin-top: 2.5rem; margin-bottom: 2.5rem; border: 1px solid rgba(229, 231, 235, 1); box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); }
    .animate-fade-in { animation: fadeIn 0.5s cubic-bezier(0.4, 0, 0.2, 1); }
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(15px); }
        to { opacity: 1; transform: translateY(0); }
    }
    .no-scrollbar::-webkit-scrollbar { display: none; }
    .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
</style>
`;

fs.writeFileSync(path.join(process.cwd(), 'src', 'history.njk'), njkContent);
console.log('Successfully built bright src/history.njk');

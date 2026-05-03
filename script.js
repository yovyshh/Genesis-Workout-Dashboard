const days = [
  {
    label: "Mon", name: "Push strength", badge: "Strength", bc: "b-strength",
    sub: "Chest · Shoulders · Triceps · Abs",
    gear: ["Barbell", "Dumbbells", "Bodyweight"],
    tip: "Floor press with barbell: load 5kg each side (10kg total) to start. Lower slowly for 3 seconds — that tension builds chest even without a bench. Add weight only when you can do all reps with clean form.",
    sections: [
      { name: "Warm-up (5 min)", ex: [
        { name: "Arm circles + shoulder rolls", detail: "2 min", video: "https://www.youtube.com/watch?v=140RTXN4K0o" },
        { name: "Push-up (slow)", detail: "2 × 8", video: "https://www.youtube.com/watch?v=mWyY0_S_m7E" },
      ]},
      { name: "Main workout", ex: [
        { name: "Barbell floor press", note: "replaces bench press · 10kg to start", detail: "4 × 8 · Rest 2 min", video: "https://www.youtube.com/watch?v=Xef_H9ZLkdY" },
        { name: "Pike push-up", note: "targets shoulders · elevate feet to progress", detail: "3 × 10 · Rest 90 sec", video: "https://www.youtube.com/watch?v=sposDXWEB0A" },
        { name: "Diamond push-up", note: "tricep focus", detail: "3 × 10 · Rest 1 min", video: "https://www.youtube.com/watch?v=6dALZ87SlhY" },
        { name: "Dumbbell lateral raise", note: "use 2kg or 3kg", detail: "3 × 12 · Rest 1 min", video: "https://www.youtube.com/watch?v=3VcKaXpzqRo" },
        { name: "Dumbbell overhead press", note: "seated or standing", detail: "3 × 10 · Rest 90 sec", video: "https://www.youtube.com/watch?v=2yjwXTZQDDI" },
      ]},
      { name: "Abs circuit (no rest between exercises)", ex: [
        { name: "Sit-up", detail: "3 × 20", video: "https://www.youtube.com/watch?v=jDwoBqPH0jk" },
        { name: "Leg raise", detail: "3 × 15", video: "https://www.youtube.com/watch?v=JB2oyawG9KI" },
        { name: "Plank hold", detail: "3 × 40 sec", video: "https://www.youtube.com/watch?v=pSHjTRCQxIw" },
      ]},
    ]
  },
  {
    label: "Tue", name: "Pull + cardio", badge: "Strength + Burn", bc: "b-cardio",
    sub: "Back · Biceps · Cardio · Fat loss",
    gear: ["Pull-up bar", "Barbell", "Dumbbells"],
    tip: "Pull-ups are the single best back exercise you can do at home. If you can only do 3–4, that's fine — do all your reps then switch to negative pull-ups (jump up, lower yourself in 5 seconds). You'll build fast.",
    sections: [
      { name: "Warm-up (5 min)", ex: [
        { name: "Dead hang on pull-up bar", detail: "2 × 20 sec", video: "https://www.youtube.com/watch?v=R96S97m_Y_g" },
        { name: "Bodyweight squat", detail: "2 × 10", video: "https://www.youtube.com/watch?v=MVMNk0HiTMg" },
      ]},
      { name: "Main workout", ex: [
        { name: "Pull-up", note: "max reps per set · negative reps if needed", detail: "4 sets · Rest 2 min", video: "https://www.youtube.com/watch?v=eGo4IYlbE5g" },
        { name: "Chin-up", note: "underhand grip · hits biceps harder", detail: "3 sets · Rest 90 sec", video: "https://www.youtube.com/watch?v=i8_M6v_xhyE" },
        { name: "Barbell bent-over row", note: "10kg to start · hinge at hips", detail: "4 × 8 · Rest 2 min", video: "https://www.youtube.com/watch?v=vT2GjY_Umpw" },
        { name: "Dumbbell bicep curl", note: "use 3kg or 5kg", detail: "3 × 12 · Rest 1 min", video: "https://www.youtube.com/watch?v=ykJmrZ5v0Oo" },
        { name: "Dumbbell hammer curl", detail: "3 × 10 · Rest 1 min", video: "https://www.youtube.com/watch?v=zC3nLlEvin4" },
      ]},
      { name: "Cardio finisher (fat burn)", ex: [
        { name: "Brisk walk or jog outdoors", detail: "20 min", video: null },
        { name: "OR jump rope", detail: "10 min", video: "https://www.youtube.com/watch?v=1BZM6jcr7M4" },
      ]},
    ]
  },
  {
    label: "Wed", name: "Legs + core", badge: "Strength", bc: "b-strength",
    sub: "Quads · Hamstrings · Glutes · Abs",
    gear: ["Barbell", "Dumbbells", "Bodyweight"],
    tip: "Barbell squats with 10kg total are perfectly fine for now. Focus on going below parallel — thighs past horizontal. That depth is what activates glutes and builds real leg muscle. Squat shallow and you are wasting the set.",
    sections: [
      { name: "Warm-up (5 min)", ex: [
        { name: "Hip circle", detail: "10 each side", video: "https://www.youtube.com/watch?v=H7m_YqfQvY4" },
        { name: "Bodyweight squat", detail: "2 × 12", video: "https://www.youtube.com/watch?v=MVMNk0HiTMg" },
        { name: "Hip flexor stretch", detail: "30 sec each side", video: "https://www.youtube.com/watch?v=7bRaX6M2nr8" },
      ]},
      { name: "Main workout", ex: [
        { name: "Barbell back squat", note: "10kg to start · go deep", detail: "4 × 8 · Rest 2–3 min", video: "https://www.youtube.com/watch?v=ultWZbUMPL8" },
        { name: "Barbell Romanian deadlift", note: "feel the hamstring stretch", detail: "3 × 10 · Rest 2 min", video: "https://www.youtube.com/watch?v=hCDzSR6bW10" },
        { name: "Bulgarian split squat", note: "bodyweight or hold dumbbells", detail: "3 × 8 each leg · Rest 90 sec", video: "https://www.youtube.com/watch?v=2C-uNgKwPLE" },
        { name: "Dumbbell goblet squat", note: "use 5kg dumbbell", detail: "3 × 12 · Rest 1 min", video: "https://www.youtube.com/watch?v=MeIiGibT6Xo" },
        { name: "Calf raise", note: "use barbell on back or hold dumbbells", detail: "4 × 20 · Rest 1 min", video: "https://www.youtube.com/watch?v=-M4-G8p8fmc" },
      ]},
      { name: "Abs circuit", ex: [
        { name: "Hanging knee raise (pull-up bar)", detail: "3 × 15", video: "https://www.youtube.com/watch?v=RD_A-Z15Er4" },
        { name: "Bicycle crunch", detail: "3 × 20", video: "https://www.youtube.com/watch?v=Iwyvozckjak" },
        { name: "Side plank", detail: "2 × 30 sec each side", video: "https://www.youtube.com/watch?v=K3fT699-vFw" },
      ]},
    ]
  },
  {
    label: "Thu", name: "HIIT + active recovery", badge: "Fat Burn", bc: "b-hiit",
    sub: "Cardio · Fat loss · Light mobility",
    gear: ["Bodyweight"],
    tip: "HIIT is your most powerful fat-loss tool. 20 minutes burns more fat than 40 minutes of slow jogging because your metabolism stays elevated for hours after. Push hard during the work intervals — that is the whole point.",
    sections: [
      { name: "HIIT circuit (4 rounds, 40 sec on / 20 sec rest)", ex: [
        { name: "Burpee", detail: "40 sec on · 20 sec rest", video: "https://www.youtube.com/watch?v=dZfeHe69mK8" },
        { name: "Jump squat", detail: "40 sec on · 20 sec rest", video: "https://www.youtube.com/watch?v=CVaE6m-vCis" },
        { name: "Mountain climber", detail: "40 sec on · 20 sec rest", video: "https://www.youtube.com/watch?v=nmwgirgXLYM" },
        { name: "High knees", detail: "40 sec on · 20 sec rest", video: "https://www.youtube.com/watch?v=ZZpZatn8HmA" },
        { name: "Rest between rounds", detail: "90 sec", video: null },
      ]},
      { name: "Active recovery (after HIIT)", ex: [
        { name: "Slow walk outdoors", detail: "10–15 min", video: null },
        { name: "Full body stretch", detail: "10 min", video: "https://www.youtube.com/watch?v=7bRaX6M2nr8" },
      ]},
    ]
  },
  {
    label: "Fri", name: "Push + pull superset", badge: "Strength", bc: "b-strength",
    sub: "Full upper body · Muscle definition",
    gear: ["Pull-up bar", "Barbell", "Dumbbells"],
    tip: "Supersets mean doing two exercises back to back with no rest in between, then resting after both. For example: push-up → immediately pull-up → rest 90 sec. This saves time, keeps your heart rate up (burns fat), and builds muscle at the same time.",
    sections: [
      { name: "Warm-up", ex: [
        { name: "Arm swing + rotation", detail: "2 min", video: "https://www.youtube.com/watch?v=140RTXN4K0o" },
        { name: "Band or bodyweight pull-apart", detail: "2 × 15", video: "https://www.youtube.com/watch?v=wi9v_YnoI3k" },
      ]},
      { name: "Superset A (push + pull · 4 rounds)", ex: [
        { name: "Push-up", note: "A1", detail: "12 reps", video: "https://www.youtube.com/watch?v=mWyY0_S_m7E" },
        { name: "Pull-up or chin-up", note: "A2 · max reps", detail: "then rest 90 sec", video: "https://www.youtube.com/watch?v=eGo4IYlbE5g" },
      ]},
      { name: "Superset B (barbell · 3 rounds)", ex: [
        { name: "Barbell floor press", note: "B1", detail: "8 reps", video: "https://www.youtube.com/watch?v=Xef_H9ZLkdY" },
        { name: "Barbell bent-over row", note: "B2", detail: "8 reps · rest 2 min", video: "https://www.youtube.com/watch?v=vT2GjY_Umpw" },
      ]},
      { name: "Superset C (dumbbells · 3 rounds)", ex: [
        { name: "Dumbbell shoulder press", note: "C1", detail: "10 reps", video: "https://www.youtube.com/watch?v=2yjwXTZQDDI" },
        { name: "Dumbbell rear delt fly", note: "C2 · replaces face pull", detail: "10 reps · rest 90 sec", video: "https://www.youtube.com/watch?v=rep-qVOkqgk" },
      ]},
      { name: "Abs", ex: [
        { name: "Hanging leg raise (pull-up bar)", detail: "3 × 12", video: "https://www.youtube.com/watch?v=Pr1ieGZ5atk" },
        { name: "Russian twist (hold dumbbell)", detail: "3 × 20", video: "https://www.youtube.com/watch?v=3zIu9fP8RkU" },
      ]},
    ]
  },
  {
    label: "Sat", name: "Cardio + full abs", badge: "Fat Burn", bc: "b-cardio",
    sub: "Fat loss · Ab definition · Active day",
    gear: ["Bodyweight", "Pull-up bar"],
    tip: "This is your highest fat-burn day. Steady cardio first to deplete glycogen, then hit abs. You will feel the abs working more intensely when you train them after cardio. This is also the day that most directly targets visible ab definition.",
    sections: [
      { name: "Cardio (choose one)", ex: [
        { name: "Jog outdoors", detail: "30–35 min", video: null },
        { name: "Jump rope intervals", detail: "20 min", video: "https://www.youtube.com/watch?v=1BZM6jcr7M4" },
        { name: "Cycling or brisk walk", detail: "40 min", video: null },
      ]},
      { name: "Full abs circuit (after cardio · 3 rounds)", ex: [
        { name: "Crunch", detail: "20 reps", video: "https://www.youtube.com/watch?v=Xyd_fa5zoRK" },
        { name: "Leg raise", detail: "15 reps", video: "https://www.youtube.com/watch?v=JB2oyawG9KI" },
        { name: "Bicycle crunch", detail: "20 reps", video: "https://www.youtube.com/watch?v=Iwyvozckjak" },
        { name: "Hanging knee raise", detail: "12 reps", video: "https://www.youtube.com/watch?v=RD_A-Z15Er4" },
        { name: "Plank hold", detail: "45 sec", video: "https://www.youtube.com/watch?v=pSHjTRCQxIw" },
        { name: "Rest between rounds", detail: "60 sec", video: null },
      ]},
    ]
  },
  {
    label: "Sun", name: "Full rest", badge: "Rest", bc: "b-rest",
    sub: "Sleep · Eat · Recover",
    gear: [],
    rest: true,
    tip: "Muscle grows during rest, not during training. Skipping this day feels productive but it slows your results. Sleep 7–9 hours, eat your protein, and let your body do the work."
  },
];

const STORAGE_KEY = 'genesisFitness_v1';
let state = {
    progress: {}, 
    notes: {},    
    theme: 'dark',
    streak: 0,
    settings: {
        userName: '',
        goal: 'strength',
        notifications: true
    },
    bestStreak: 0
};

// Elements
const trackerBody = document.getElementById('tracker-body');
const totalCompletedEl = document.getElementById('total-completed');
const progressPercentEl = document.getElementById('progress-percent');
const progressCircle = document.getElementById('progress-circle');
const streakCountEl = document.getElementById('streak-count');
const currentDateEl = document.getElementById('current-date');
const notesModal = document.getElementById('notes-modal');
const detailsModal = document.getElementById('details-modal');
const dayNotesTextarea = document.getElementById('day-notes');
const saveNotesBtn = document.getElementById('save-notes');
const modalDayInfo = document.getElementById('modal-day-info');
const detailsTitle = document.getElementById('details-title');
const exerciseListContainer = document.getElementById('exercise-list-container');

function init() {
    loadState();
    renderTracker();
    updateUI();
    setupEventListeners();
    updateSettingsUI();
    registerServiceWorker();
    
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    if (currentDateEl) currentDateEl.innerText = new Date().toLocaleDateString(undefined, options);
}

function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('service-worker.js')
                .then(reg => console.log('Genesis Service Worker registered'))
                .catch(err => console.error('Registration failed', err));
        });
    }
}

function loadState() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        state = { ...state, ...JSON.parse(saved) };
    }
    applyTheme();
}

function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function applyTheme() {
    if (state.theme === 'light') {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
    } else {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
    }
    updateThemeToggleUI();
}

function renderTracker() {
    if (!trackerBody) return;
    trackerBody.innerHTML = '';
    
    for (let w = 1; w <= 8; w++) {
        const weekCard = document.createElement('div');
        weekCard.className = 'week-container';
        const completedInWeek = Array.from({length: 7}, (_, i) => state.progress[`w${w}d${i+1}`]).filter(Boolean).length;
        
        weekCard.innerHTML = `
            <h2><span>Week ${w}</span><span class="week-progress-mini">${completedInWeek}/7 Done</span></h2>
            <div class="day-list" id="week${w}-days"></div>
        `;
        trackerBody.appendChild(weekCard);

        const container = document.getElementById(`week${w}-days`);
        days.forEach((workout, index) => {
            const id = `w${w}d${index + 1}`;
            const isCompleted = state.progress[id] || false;
            const hasNotes = state.notes[id] && state.notes[id].trim().length > 0;
            
            const row = document.createElement('div');
            row.className = `day-row ${isCompleted ? 'completed' : ''}`;
            row.id = `row-${id}`;
            row.onclick = (event) => showDetails(id, event);
            
            row.innerHTML = `
                <div class="checkbox-custom" onclick="toggleDay('${id}', event)"></div>
                <div class="day-content">
                    <div class="day-header">
                        <span class="day-title">${workout.name}</span>
                        <div class="day-actions">
                            <button class="action-btn ${hasNotes ? 'has-notes' : ''}" onclick="openNotes('${id}', event)">Note</button>
                        </div>
                    </div>
                    <div class="day-focus">${workout.sub}</div>
                </div>
            `;
            container.appendChild(row);
        });
    }
}

function showDetails(id, event) {
    if (event) event.stopPropagation();
    const dayNum = parseInt(id.match(/d(\d+)/)[1]);
    const weekNum = id.match(/w(\d+)/)[1];
    const workout = days[dayNum - 1];
    
    if (detailsTitle) detailsTitle.innerText = `Week ${weekNum}, ${workout.label} - ${workout.name}`;
    if (exerciseListContainer) {
        exerciseListContainer.innerHTML = '';
        
        if (workout.rest) {
            exerciseListContainer.innerHTML = `
                <div class="rest-block">
                    <div style="font-size:48px;margin-bottom:20px;">&#128564;</div>
                    <div style="font-size:18px;font-weight:700;">Complete Rest Day</div>
                    <div style="color:var(--text-secondary);margin-top:10px;">Muscle grows during rest, not during training. Sleep 7–9 hours, eat your protein, and let your body recover.</div>
                </div>
            `;
        } else {
            if (workout.gear && workout.gear.length) {
                const gearDiv = document.createElement('div');
                gearDiv.className = 'gear-row-modal';
                gearDiv.innerHTML = `<span class="section-label">Equipment:</span> ` + 
                    workout.gear.map(g => `<span class="gear-tag">${g}</span>`).join(' ');
                exerciseListContainer.appendChild(gearDiv);
            }

            workout.sections.forEach(s => {
                const sectionHeader = document.createElement('div');
                sectionHeader.className = 'section-label-modal';
                sectionHeader.innerText = s.name;
                exerciseListContainer.appendChild(sectionHeader);

                s.ex.forEach(e => {
                    const exItem = document.createElement('div');
                    exItem.className = 'exercise-item-new';
                    exItem.innerHTML = `
                        <div class="ex-main-info">
                            <span class="ex-name">${e.name}</span>
                            <span class="ex-detail">${e.detail}</span>
                        </div>
                        ${e.note ? `<div class="ex-note">${e.note}</div>` : ''}
                        ${e.video ? `<a href="${e.video}" target="_blank" class="ex-video-link" onclick="event.stopPropagation();">Watch Tutorial</a>` : ''}
                    `;
                    exerciseListContainer.appendChild(exItem);
                });
            });
        }

        const tipBox = document.createElement('div');
        tipBox.className = 'tip-box-modal';
        tipBox.innerHTML = `<strong>💡 Tip of the Day:</strong><br>${workout.tip}`;
        exerciseListContainer.appendChild(tipBox);
    }
    if (detailsModal) detailsModal.style.display = 'block';
}

function toggleDay(id, event) {
    if (event) event.stopPropagation();
    state.progress[id] = !state.progress[id];
    
    const row = document.getElementById(`row-${id}`);
    if (row) {
        if (state.progress[id]) row.classList.add('completed');
        else row.classList.remove('completed');
    }
    
    calculateStreak();
    updateUI();
    saveState();
    
    const weekNum = id.match(/w(\d+)/)[1];
    const weekHeader = document.querySelector(`#row-${id}`).closest('.week-container').querySelector('.week-progress-mini');
    const completedInWeek = Array.from({length: 7}, (_, i) => state.progress[`w${weekNum}d${i+1}`]).filter(Boolean).length;
    if (weekHeader) weekHeader.innerText = `${completedInWeek}/7 Done`;
}

function calculateStreak() {
    let maxStreak = 0, currentStreak = 0;
    for (let w = 1; w <= 8; w++) {
        for (let d = 1; d <= 7; d++) {
            if (state.progress[`w${w}d${d}`]) {
                currentStreak++;
                if (currentStreak > maxStreak) maxStreak = currentStreak;
            } else currentStreak = 0;
        }
    }
    state.bestStreak = maxStreak;
    
    let simpleStreak = 0;
    for (let w = 1; w <= 8; w++) {
        for (let d = 1; d <= 7; d++) {
            if (state.progress[`w${w}d${d}`]) simpleStreak++;
            else { state.streak = simpleStreak; return; }
        }
    }
    state.streak = simpleStreak;
}

function updateUI() {
    const total = 56;
    const completed = Object.values(state.progress).filter(Boolean).length;
    const percentage = Math.round((completed / total) * 100);
    
    if (totalCompletedEl) totalCompletedEl.innerText = `${completed}/${total}`;
    if (progressPercentEl) progressPercentEl.innerText = `${percentage}%`;
    
    if (progressCircle) {
        const circumference = 163.36;
        progressCircle.style.strokeDashoffset = circumference - (percentage / 100) * circumference;
    }
    
    calculateStreak();
    if (streakCountEl) streakCountEl.innerText = `${state.streak} Day${state.streak === 1 ? '' : 's'}`;
    
    const dashTitle = document.querySelector('.header-left h1');
    if (dashTitle) {
        dashTitle.innerText = state.settings.userName ? `${state.settings.userName}'s Genesis` : `Genesis Dashboard`;
    }
}

window.switchView = function(viewName) {
    document.querySelectorAll('.view-section').forEach(section => section.style.display = 'none');
    const targetSection = document.getElementById(`${viewName}-view`);
    if (targetSection) targetSection.style.display = 'block';
    
    document.querySelectorAll('.nav-item, .nav-settings-btn').forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-view') === viewName) item.classList.add('active');
    });

    if (viewName === 'stats') renderStats();
};

function renderStats() {
    const total = 56, completed = Object.values(state.progress).filter(Boolean).length;
    const statTotal = document.getElementById('stat-total-workouts');
    const statRate = document.getElementById('stat-completion-rate');
    const statBest = document.getElementById('stat-best-streak');
    
    if (statTotal) statTotal.innerText = completed;
    if (statRate) statRate.innerText = `${Math.round((completed / total) * 100)}%`;
    if (statBest) statBest.innerText = `${state.bestStreak} Days`;

    const chart = document.getElementById('weekly-consistency-chart');
    if (chart) {
        chart.innerHTML = '';
        for (let w = 1; w <= 8; w++) {
            const done = Array.from({length: 7}, (_, i) => state.progress[`w${w}d${i+1}`]).filter(Boolean).length;
            const bar = document.createElement('div');
            bar.className = 'chart-bar-container';
            bar.innerHTML = `<div class="chart-bar ${done > 0 ? 'active' : ''}" style="height: ${(done / 7) * 100}%"></div><span class="chart-label">W${w}</span>`;
            chart.appendChild(bar);
        }
    }
}

function updateSettingsUI() {
    const nameInp = document.getElementById('user-name-input');
    const goalSel = document.getElementById('fitness-goal-select');
    const notifTog = document.getElementById('notif-toggle');
    if (nameInp) nameInp.value = state.settings.userName || '';
    if (goalSel) goalSel.value = state.settings.goal || 'strength';
    if (notifTog) notifTog.checked = state.settings.notifications;
}

function setupEventListeners() {
    document.addEventListener('click', (e) => {
        const navTarget = e.target.closest('[data-view]');
        if (navTarget && (navTarget.classList.contains('nav-item') || navTarget.classList.contains('nav-settings-btn'))) {
            e.preventDefault();
            window.switchView(navTarget.getAttribute('data-view'));
        }
    });

    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            state.theme = state.theme === 'dark' ? 'light' : 'dark';
            applyTheme();
            saveState();
        });
    }

    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', () => {
            if (notesModal) notesModal.style.display = 'none';
            if (detailsModal) detailsModal.style.display = 'none';
        });
    });

    const saveNotes = document.getElementById('save-notes');
    if (saveNotes) {
        saveNotes.addEventListener('click', () => {
            if (activeNoteId && dayNotesTextarea) {
                state.notes[activeNoteId] = dayNotesTextarea.value;
                saveState();
                if (notesModal) notesModal.style.display = 'none';
                renderTracker(); 
            }
        });
    }

    const resetBtn = document.getElementById('reset-all');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            if (confirm("Reset everything?")) {
                state.progress = {}; state.notes = {}; state.streak = 0; state.bestStreak = 0;
                saveState(); location.reload();
            }
        });
    }

    const exportBtn = document.getElementById('export-csv');
    if (exportBtn) exportBtn.addEventListener('click', exportToCSV);

    const testNotif = document.getElementById('test-notif');
    if (testNotif) {
        testNotif.addEventListener('click', () => {
            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.ready.then(reg => {
                    reg.showNotification("Genesis Fitness", { body: "Test successful.", vibrate: [200, 100, 200] });
                });
            }
        });
    }

    const saveSet = document.getElementById('save-settings');
    if (saveSet) {
        saveSet.addEventListener('click', () => {
            const nameInp = document.getElementById('user-name-input');
            const goalSel = document.getElementById('fitness-goal-select');
            const notifTog = document.getElementById('notif-toggle');
            state.settings.userName = nameInp ? nameInp.value : '';
            state.settings.goal = goalSel ? goalSel.value : 'strength';
            state.settings.notifications = notifTog ? notifTog.checked : true;
            saveState(); updateUI(); alert('Settings saved!');
        });
    }

    window.onclick = (event) => {
        if (event.target == notesModal) notesModal.style.display = 'none';
        if (event.target == detailsModal) detailsModal.style.display = 'none';
    };
}

function updateThemeToggleUI() {
    const icon = document.querySelector('#theme-toggle .toggle-icon');
    if (icon) icon.innerText = state.theme === 'dark' ? 'Dark Mode' : 'Light Mode';
}

let activeNoteId = null;
function openNotes(id, event) {
    if (event) event.stopPropagation();
    activeNoteId = id;
    const day = parseInt(id.match(/d(\d+)/)[1]);
    const week = id.match(/w(\d+)/)[1];
    if (modalDayInfo) modalDayInfo.innerText = `Week ${week}, Day ${day} - ${days[day-1].name}`;
    if (dayNotesTextarea) {
        dayNotesTextarea.value = state.notes[id] || '';
        if (notesModal) notesModal.style.display = 'block';
        dayNotesTextarea.focus();
    }
}

function exportToCSV() {
    let csv = 'Week,Day,Focus,Completed,Notes\n';
    for (let w = 1; w <= 8; w++) {
        for (let d = 1; d <= 7; d++) {
            const id = `w${w}d${d}`;
            const workout = days[d-1];
            csv += `${w},${d},"${workout.name}",${state.progress[id] ? 'Yes' : 'No'},"${(state.notes[id] || '').replace(/"/g, '""')}"\n`;
        }
    }
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    link.setAttribute("href", URL.createObjectURL(blob));
    link.setAttribute("download", "genesis_workout_export.csv");
    link.style.visibility = 'hidden';
    document.body.appendChild(link); link.click(); document.body.removeChild(link);
}

init();

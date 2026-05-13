const workoutPhases = {
  phase1: [ // Weeks 1-4: Foundation + DB (3 days/week)
    {
      label: "Mon", name: "Full Body Foundation", badge: "Phase 1", bc: "b-strength",
      sub: "Push · Pull · Legs · Core",
      gear: ["Dumbbells", "Bodyweight", "Pull-up bar"],
      tip: "Focus on form first. In Phase 1, we are building the neural pathways. Add dumbbells to traditional calisthenics to spark extra muscle growth early.",
      sections: [
        { name: "Warm-up (5 min)", ex: [
          { name: "Arm circles + shoulder rolls", detail: "2 min", video: "https://www.youtube.com/watch?v=140RTXN4K0o" },
          { name: "Push-up (slow)", detail: "2 × 8", video: "https://www.youtube.com/watch?v=mWyY0_S_m7E" },
        ]},
        { name: "The Workout", ex: [
          { name: "Push-ups", note: "Standard form", detail: "3 × 8-12", video: "https://www.youtube.com/watch?v=mWyY0_S_m7E" },
          { name: "DB Floor Press", note: "Add chest volume", detail: "3 × 10 · Rest 90s", video: "https://www.youtube.com/watch?v=Xef_H9ZLkdY" },
          { name: "Pull-ups or Inverted Rows", note: "Back foundation", detail: "3 × 5-8", video: "https://www.youtube.com/watch?v=eGo4IYlbE5g" },
          { name: "DB One-Arm Row", note: "Back thickness", detail: "3 × 10 per side", video: "https://www.youtube.com/watch?v=ykJmrZ5v0Oo" },
          { name: "Dips", note: "Triceps/Chest", detail: "3 × 8-12", video: "https://www.youtube.com/watch?v=2z8JmcrW-As" },
          { name: "DB Overhead Press", note: "Shoulder mass", detail: "3 × 10", video: "https://www.youtube.com/watch?v=2yjwXTZQDDI" },
          { name: "Bodyweight Squats", note: "Leg foundation", detail: "3 × 15-20", video: "https://www.youtube.com/watch?v=ultWZbUMPL8" },
          { name: "DB Goblet Squat", note: "Quads/Glutes focus", detail: "3 × 12", video: "https://www.youtube.com/watch?v=MeIiGibT6Xo" },
          { name: "Plank", note: "Core stability", detail: "3 × 45 sec", video: "https://www.youtube.com/watch?v=pSHjTRCQxIw" },
        ]}
      ]
    },
    { label: "Tue", name: "Active Recovery", badge: "Recovery", bc: "b-rest", sub: "Mobility · Light Walk", rest: true, tip: "Recovery is when muscle is built. Keep it light today." },
    {
      label: "Wed", name: "Full Body Foundation", badge: "Phase 1", bc: "b-strength",
      sub: "Push · Pull · Legs · Core",
      gear: ["Dumbbells", "Bodyweight", "Pull-up bar"],
      tip: "Consistency is key. If pull-ups are too hard, use negatives or rows, but keep the intensity high with your dumbbells.",
      sections: [
        { name: "The Workout", ex: [
          { name: "Push-ups", detail: "3 × 8-12" },
          { name: "DB Floor Press", detail: "3 × 10" },
          { name: "Inverted Rows", detail: "3 × 8-10" },
          { name: "DB Hammer Curls", note: "Bicep/Forearm mass", detail: "3 × 12", video: "https://www.youtube.com/watch?v=zC3nLlEvin4" },
          { name: "Lunges", note: "Leg balance", detail: "3 × 10 per leg" },
          { name: "DB Walking Lunges", note: "Glute focus", detail: "3 × 10 per leg", video: "https://www.youtube.com/watch?v=D7KaRcUTQeE" },
          { name: "Plank", detail: "3 × 45 sec" },
        ]}
      ]
    },
    { label: "Thu", name: "Active Recovery", badge: "Recovery", bc: "b-rest", sub: "Mobility · Light Walk", rest: true, tip: "Hydrate and eat your protein today." },
    {
      label: "Fri", name: "Full Body Foundation", badge: "Phase 1", bc: "b-strength",
      sub: "Push · Pull · Legs · Core",
      gear: ["Dumbbells", "Bodyweight", "Pull-up bar"],
      tip: "End the week strong. Push yourself to add an extra 1-2 reps or a bit more weight on your dumbbells.",
      sections: [
        { name: "The Workout", ex: [
          { name: "Push-ups (Diamond focus)", detail: "3 × 8-12" },
          { name: "DB Lateral Raise", note: "Width for shoulders", detail: "3 × 12", video: "https://www.youtube.com/watch?v=3VcKaXpzqRo" },
          { name: "Pull-ups", detail: "3 × max reps" },
          { name: "DB One-Arm Row", detail: "3 × 10 per side" },
          { name: "DB Goblet Squat", detail: "3 × 15" },
          { name: "Calf Raises (DB)", detail: "3 × 20", video: "https://www.youtube.com/watch?v=-M4-G8p8fmc" },
          { name: "Plank", detail: "3 × 60 sec" },
        ]}
      ]
    },
    { label: "Sat", name: "Cardio / Skill", badge: "Active", bc: "b-cardio", sub: "Light Jog · Stretching", rest: true, tip: "A 20-min walk today will help clear lactic acid." },
    { label: "Sun", name: "Full Rest", badge: "Rest", bc: "b-rest", sub: "Recovery", rest: true, tip: "Get 8 hours of sleep tonight." },
  ],
  phase2: [ // Weeks 5-8: Split + DB Intensity
    {
      label: "Mon", name: "Upper Body Intensity", badge: "Phase 2", bc: "b-strength",
      sub: "Chest · Back · Shoulders",
      gear: ["Dumbbells", "Bodyweight", "Pull-up bar"],
      tip: "Phases 2 introduces higher volume. Use dumbbells to push past your calisthenics plateaus.",
      sections: [
        { name: "Main Workout", ex: [
          { name: "Push-ups", detail: "4 × 10-15" },
          { name: "DB Bench/Floor Press", detail: "4 × 10" },
          { name: "Pull-ups", detail: "4 × 6-10" },
          { name: "DB One-Arm Row", detail: "4 × 10" },
          { name: "Dips", detail: "4 × 10-15" },
          { name: "Pike Push-ups", note: "Shoulder focus", detail: "3 × 8-12" },
          { name: "DB Lateral Raise", detail: "3 × 12" },
        ]}
      ]
    },
    {
      label: "Tue", name: "Lower Body & Core", badge: "Phase 2", bc: "b-strength",
      sub: "Quads · Hams · Glutes · Abs",
      gear: ["Dumbbells", "Bodyweight"],
      tip: "Legs respond well to higher reps and weighted loads. Hold those dumbbells tight.",
      sections: [
        { name: "Main Workout", ex: [
          { name: "Squats", detail: "4 × 20-25" },
          { name: "DB Goblet Squats", detail: "4 × 12" },
          { name: "Lunges", detail: "4 × 15 per leg" },
          { name: "DB Romanian Deadlift", note: "Hamstrings focus", detail: "3 × 12", video: "https://www.youtube.com/watch?v=hCDzSR6bW10" },
          { name: "Hanging Leg Raises", detail: "3 × 8-12" },
          { name: "Russian Twists (DB)", detail: "3 × 20 per side" },
        ]}
      ]
    },
    { label: "Wed", name: "Active Recovery", badge: "Recovery", bc: "b-rest", rest: true, tip: "Yoga or light stretching today." },
    {
      label: "Thu", name: "Upper Body Intensity", badge: "Phase 2", bc: "b-strength",
      sub: "Chest · Back · Shoulders",
      gear: ["Dumbbells", "Bodyweight", "Pull-up bar"],
      tip: "Focus on the mind-muscle connection, especially with dumbbell rows and presses.",
      sections: [
        { name: "Main Workout", ex: [
          { name: "Push-ups", detail: "4 × 10-15" },
          { name: "DB Overhead Press", detail: "4 × 10" },
          { name: "Chin-ups", detail: "4 × 6-10" },
          { name: "DB Hammer Curls", detail: "3 × 12" },
          { name: "Dips", detail: "4 × 10-15" },
          { name: "Plank to Push-up", detail: "3 × 10-15" },
        ]}
      ]
    },
    {
      label: "Fri", name: "Lower Body & Core", badge: "Phase 2", bc: "b-strength",
      sub: "Quads · Hams · Glutes · Abs",
      gear: ["Dumbbells", "Bodyweight"],
      tip: "Last leg day of the week. Make it count with deep squats.",
      sections: [
        { name: "Main Workout", ex: [
          { name: "Bulgarian Split Squats", detail: "3 × 10 per leg" },
          { name: "DB Goblet Squats", detail: "4 × 12" },
          { name: "Glute Bridges", detail: "3 × 20-25" },
          { name: "Calf Raises (DB)", detail: "3 × 20-25" },
          { name: "Hanging Leg Raises", detail: "3 × 8-12" },
          { name: "Russian Twists", detail: "3 × 20" },
        ]}
      ]
    },
    { label: "Sat", name: "Cardio", badge: "Burn", bc: "b-cardio", rest: true, tip: "30-min steady state cardio." },
    { label: "Sun", name: "Full Rest", badge: "Rest", bc: "b-rest", rest: true, tip: "Prepare your meals for next week." },
  ],
  phase3: [ // Weeks 9-12: Advanced Skill + DB Build
    {
      label: "Mon", name: "Advanced Upper", badge: "Phase 3", bc: "b-strength",
      sub: "Chest · Back · Strength",
      gear: ["Dumbbells", "Bodyweight", "Pull-up bar"],
      tip: "Phase 3 is where we refine skills and add serious mass. Decline push-ups hit the upper chest hard.",
      sections: [
        { name: "Main Workout", ex: [
          { name: "Decline Push-ups", detail: "4 × 10-15" },
          { name: "DB Bench/Floor Press (Heavy)", detail: "4 × 8" },
          { name: "Pull-ups (Weighted if possible)", detail: "4 × 8-12" },
          { name: "DB One-Arm Row (Heavy)", detail: "4 × 8" },
          { name: "Archer Push-ups", detail: "3 × 6-10 per side" },
          { name: "Dips", detail: "4 × 10-15" },
        ]}
      ]
    },
    {
      label: "Tue", name: "Advanced Lower", badge: "Phase 3", bc: "b-strength",
      sub: "Leg Mastery",
      gear: ["Dumbbells", "Bodyweight"],
      tip: "Pistol squats build elite balance and single-leg strength.",
      sections: [
        { name: "Main Workout", ex: [
          { name: "Pistol Squats (Assisted if needed)", detail: "4 × 6-10 per leg" },
          { name: "Bulgarian Split Squats (DB)", detail: "4 × 10-15 per leg" },
          { name: "DB Romanian Deadlift", detail: "4 × 10" },
          { name: "Single-Leg Glute Bridges", detail: "3 × 15-20 per leg" },
          { name: "Hanging Leg Raises", detail: "3 × 10-15" },
          { name: "Windshield Wipers", detail: "3 × 10-15 per side" },
        ]}
      ]
    },
    {
      label: "Wed", name: "Skill & Hypertrophy", badge: "Skill", bc: "b-hiit",
      sub: "Arms · Shoulders · Skills",
      gear: ["Dumbbells", "Bodyweight"],
      tip: "Skills like handstands build incredible shoulder stability.",
      sections: [
        { name: "The Workout", ex: [
          { name: "Handstand Practice", detail: "3 × 30 sec" },
          { name: "L-Sit Hold", detail: "3 × 15 sec" },
          { name: "DB Overhead Press", detail: "3 × 10" },
          { name: "DB Hammer Curls", detail: "4 × 10" },
          { name: "DB Skull Crushers", detail: "4 × 10" },
          { name: "DB Lateral Raise", detail: "3 × 15" },
        ]}
      ]
    },
    {
      label: "Thu", name: "Advanced Upper", badge: "Phase 3", bc: "b-strength",
      sections: [
        { name: "Main Workout", ex: [
          { name: "Decline Push-ups", detail: "4 × 10-15" },
          { name: "DB Floor Press", detail: "4 × 10" },
          { name: "Pull-ups", detail: "4 × 8-12" },
          { name: "DB Row", detail: "4 × 10" },
          { name: "Plank to Push-up", detail: "3 × 15-20" },
          { name: "Muscle-Up Progressions", detail: "3 × 3-5" },
        ]}
      ]
    },
    {
      label: "Fri", name: "Advanced Lower", badge: "Phase 3", bc: "b-strength",
      sections: [
        { name: "Main Workout", ex: [
          { name: "Pistol Squats", detail: "4 × 6-10 per leg" },
          { name: "DB Bulgarian Split Squat", detail: "4 × 10 per leg" },
          { name: "Calf Raises (DB)", detail: "3 × 25-30" },
          { name: "Hanging Leg Raises", detail: "3 × 10-15" },
          { name: "Russian Twists (Heavy DB)", detail: "3 × 20" },
        ]}
      ]
    },
    { label: "Sat", name: "Active Recovery", rest: true },
    { label: "Sun", name: "Full Rest", rest: true },
  ]
};

function getWorkoutForWeek(weekNum) {
  if (weekNum <= 4) return workoutPhases.phase1;
  if (weekNum <= 8) return workoutPhases.phase2;
  return workoutPhases.phase3;
}

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
    
    const startWeek = (activeDashboardMonth - 1) * 4 + 1;
    const endWeek = startWeek + 3;
    
    for (let w = startWeek; w <= endWeek; w++) {
        const weekCard = document.createElement('div');
        weekCard.className = 'week-container';
        const completedInWeek = Array.from({length: 7}, (_, i) => state.progress[`w${w}d${i+1}`]).filter(Boolean).length;
        
        weekCard.innerHTML = `
            <h2><span>Week ${w}</span><span class="week-progress-mini">${completedInWeek}/7 Done</span></h2>
            <div class="day-list" id="week${w}-days"></div>
        `;
        trackerBody.appendChild(weekCard);

        const container = document.getElementById(`week${w}-days`);
        const weekDays = getWorkoutForWeek(w);
        weekDays.forEach((workout, index) => {
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
                    <div class="day-focus">${workout.sub || ''}</div>
                </div>
            `;
            container.appendChild(row);
        });
    }
}

function showDetails(id, event) {
    if (event) event.stopPropagation();
    const dayNum = parseInt(id.match(/d(\d+)/)[1]);
    const weekNum = parseInt(id.match(/w(\d+)/)[1]);
    const workout = getWorkoutForWeek(weekNum)[dayNum - 1];
    
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
        tipBox.innerHTML = `<strong>💡 Tip of the Day:</strong><br>${workout.tip || "Focus on consistency and proper form."}`;
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
    for (let w = 1; w <= 12; w++) {
        for (let d = 1; d <= 7; d++) {
            if (state.progress[`w${w}d${d}`]) {
                currentStreak++;
                if (currentStreak > maxStreak) maxStreak = currentStreak;
            } else currentStreak = 0;
        }
    }
    state.bestStreak = maxStreak;
    
    let simpleStreak = 0;
    for (let w = 1; w <= 12; w++) {
        for (let d = 1; d <= 7; d++) {
            if (state.progress[`w${w}d${d}`]) simpleStreak++;
            else { state.streak = simpleStreak; return; }
        }
    }
    state.streak = simpleStreak;
}

function updateUI() {
    const total = 84;
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
    const total = 84, completed = Object.values(state.progress).filter(Boolean).length;
    const statTotal = document.getElementById('stat-total-workouts');
    const statRate = document.getElementById('stat-completion-rate');
    const statBest = document.getElementById('stat-best-streak');
    
    if (statTotal) statTotal.innerText = completed;
    if (statRate) statRate.innerText = `${Math.round((completed / total) * 100)}%`;
    if (statBest) statBest.innerText = `${state.bestStreak} Days`;

    const chart = document.getElementById('weekly-consistency-chart');
    if (chart) {
        chart.innerHTML = '';
        for (let w = 1; w <= 12; w++) {
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
    const weekNum = parseInt(id.match(/w(\d+)/)[1]);
    const workout = getWorkoutForWeek(weekNum)[day-1];
    if (modalDayInfo) modalDayInfo.innerText = `Week ${weekNum}, Day ${day} - ${workout.name}`;
    if (dayNotesTextarea) {
        dayNotesTextarea.value = state.notes[id] || '';
        if (notesModal) notesModal.style.display = 'block';
        dayNotesTextarea.focus();
    }
}

function exportToCSV() {
    let csv = 'Week,Day,Focus,Completed,Notes\n';
    for (let w = 1; w <= 12; w++) {
        const weekDays = getWorkoutForWeek(w);
        for (let d = 1; d <= 7; d++) {
            const id = `w${w}d${d}`;
            const workout = weekDays[d-1];
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

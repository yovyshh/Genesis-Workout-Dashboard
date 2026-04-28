const workoutData = [
    { day: "Monday", focus: "Workout A (Full Body / Deadlift)", link: "https://www.youtube.com/watch?v=hCDzSR6bW10" },
    { day: "Tuesday", focus: "Cardio + Core", link: "https://www.youtube.com/watch?v=pSHjTRCQxIw" },
    { day: "Wednesday", focus: "Workout B (Squat Focus)", link: "https://www.youtube.com/watch?v=ultWZbUMPL8" },
    { day: "Thursday", focus: "Active Recovery & Mobility", link: "https://www.youtube.com/watch?v=7bRaX6M2nr8" },
    { day: "Friday", focus: "Workout C (Split Squat / Close Grip)", link: "https://www.youtube.com/watch?v=2C-uNgKwPLE" },
    { day: "Saturday", focus: "Cardio Day (Intervals)", link: "https://www.youtube.com/watch?v=1BZM6jcr7M4" },
    { day: "Sunday", focus: "Full Rest & Recovery", link: null }
];

const exerciseData = {
    "Monday": [
        { name: "Deadlift", details: "3 x 8", video: "https://www.youtube.com/watch?v=hCDzSR6bW10" },
        { name: "Overhead Press", details: "3 x 8", video: "https://www.youtube.com/watch?v=2yjwXTZQDDI" },
        { name: "Bench Press", details: "3 x 8", video: "https://www.youtube.com/watch?v=rT7DgCr-3pg" },
        { name: "Bicep Curl", details: "3 x 10", video: "https://www.youtube.com/watch?v=ykJmrZ5v0Oo" },
        { name: "Overhead Triceps Extension", details: "3 x 10", video: "https://www.youtube.com/watch?v=_gsUck-7M74" },
        { name: "Calf Raises", details: "3 x 20", video: "https://www.youtube.com/watch?v=-M4-G8p8fmc" },
        { name: "Sit-Ups", details: "3 x 20", video: "https://www.youtube.com/watch?v=jDwoBqPH0jk" }
    ],
    "Tuesday": [
        { name: "Brisk walk / jog / cycle", details: "30 min", video: null },
        { name: "Plank", details: "3 x 30–45 sec", video: "https://www.youtube.com/watch?v=pSHjTRCQxIw" },
        { name: "Leg Raises", details: "3 x 15", video: "https://www.youtube.com/watch?v=JB2oyawG9KI" },
        { name: "Mountain Climbers", details: "3 x 20", video: "https://www.youtube.com/watch?v=nmwgirgXLYM" }
    ],
    "Wednesday": [
        { name: "Back Squat", details: "3 x 8", video: "https://www.youtube.com/watch?v=ultWZbUMPL8" },
        { name: "Bent-Over Row", details: "3 x 8", video: "https://www.youtube.com/watch?v=vT2GjY_Umpw" },
        { name: "Incline Press", details: "3 x 8", video: "https://www.youtube.com/watch?v=SrqOu55lrYU" },
        { name: "EZ Bar Curl", details: "3 x 10", video: "https://www.youtube.com/watch?v=kwG2ipFRgfo" },
        { name: "Lateral Raise", details: "3 x 10", video: "https://www.youtube.com/watch?v=3VcKaXpzqRo" },
        { name: "Tricep Pushdown", details: "3 x 10", video: "https://www.youtube.com/watch?v=2-LAMcpzODU" },
        { name: "Oblique Cable Twist", details: "3 x 20", video: "https://www.youtube.com/watch?v=9ZmbiA0P3Ac" }
    ],
    "Thursday": [
        { name: "Easy walk / Yoga / Swim", details: "20–30 min", video: null },
        { name: "Hip Flexor Stretch", details: "Mobility", video: "https://www.youtube.com/watch?v=7bRaX6M2nr8" },
        { name: "Chest Opener Stretch", details: "Mobility", video: "https://www.youtube.com/watch?v=SXhfEU00M5w" },
        { name: "Thoracic Rotation", details: "Mobility", video: "https://www.youtube.com/watch?v=ltUY0Bv6M6g" }
    ],
    "Friday": [
        { name: "Split Squat", details: "3 x 8", video: "https://www.youtube.com/watch?v=2C-uNgKwPLE" },
        { name: "Close-Grip Bench", details: "3 x 8", video: "https://www.youtube.com/watch?v=nEF0bv2FW94" },
        { name: "Flat Dumbbell Press", details: "3 x 8", video: "https://www.youtube.com/watch?v=VmB1G1K7v94" },
        { name: "Incline Dumbbell Curl", details: "3 x 10", video: "https://www.youtube.com/watch?v=soxrZlIl35U" },
        { name: "Lat Pulldown", details: "3 x 10", video: "https://www.youtube.com/watch?v=CAwf7n6Luuc" },
        { name: "Face Pull", details: "3 x 10", video: "https://www.youtube.com/watch?v=rep-qVOkqgk" },
        { name: "Hanging Leg Raise", details: "3 x 20", video: "https://www.youtube.com/watch?v=Pr1ieGZ5atk" }
    ],
    "Saturday": [
        { name: "Jog / Cycle / Elliptical", details: "30–40 min", video: "https://www.youtube.com/watch?v=1BZM6jcr7M4" },
        { name: "Jump Rope", details: "3 x 2 min", video: "https://www.youtube.com/watch?v=1BZM6jcr7M4" },
        { name: "Intervals", details: "1 min fast / 2 min easy x 8-10", video: null }
    ],
    "Sunday": [
        { name: "Sleep & Recover", details: "Full Rest", video: null },
        { name: "Protein Intake", details: "Eat enough protein", video: null }
    ]
};
};

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

async function requestNotificationPermission() {
    if ('Notification' in window) {
        const permission = await Notification.requestPermission();
        return permission === 'granted';
    }
    return false;
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
        workoutData.forEach((workout, index) => {
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
                        <span class="day-title">${workout.day}</span>
                        <div class="day-actions">
                            ${workout.link ? `<button class="action-btn" onclick="window.open('${workout.link}', '_blank'); event.stopPropagation();">Video</button>` : ''}
                            <button class="action-btn ${hasNotes ? 'has-notes' : ''}" onclick="openNotes('${id}', event)">Note</button>
                        </div>
                    </div>
                    <div class="day-focus">${workout.focus}</div>
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
    const workout = workoutData[dayNum - 1];
    const exercises = exerciseData[workout.day];
    
    if (detailsTitle) detailsTitle.innerText = `Week ${weekNum}, ${workout.day} - ${workout.focus}`;
    if (exerciseListContainer) {
        exerciseListContainer.innerHTML = '';
        exercises.forEach(ex => {
            const exItem = document.createElement('div');
            exItem.className = 'exercise-item';
            exItem.innerHTML = `
                <span class="exercise-name">${ex.name}</span>
                <div class="exercise-details">
                    <span>${ex.details}</span>
                    ${ex.video ? `<a href="${ex.video}" target="_blank" class="exercise-video" onclick="event.stopPropagation();">Watch Video</a>` : ''}
                </div>
            `;
            exerciseListContainer.appendChild(exItem);
        });
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

function openNotes(id, event) {
    if (event) event.stopPropagation();
    activeNoteId = id;
    const day = id.match(/d(\d+)/)[1];
    const week = id.match(/w(\d+)/)[1];
    if (modalDayInfo) modalDayInfo.innerText = `Week ${week}, Day ${day} - ${workoutData[parseInt(day)-1].focus}`;
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
            const workout = workoutData[d-1];
            csv += `${w},${d},"${workout.focus}",${state.progress[id] ? 'Yes' : 'No'},"${(state.notes[id] || '').replace(/"/g, '""')}"\n`;
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

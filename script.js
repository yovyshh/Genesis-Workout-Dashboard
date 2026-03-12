const workoutData = [
    { day: "Day 1", focus: "Upper Body (Push/Pull)", link: "https://www.youtube.com/watch?v=eGo4IYlbE5g", icon: "🔥" },
    { day: "Day 2", focus: "Lower Body & Core", link: "https://www.youtube.com/watch?v=MeIiIdhvXT4", icon: "🦵" },
    { day: "Day 3", focus: "Active Rest", link: null, icon: "🧘‍♂️" },
    { day: "Day 4", focus: "Upper Body (Strength)", link: "https://www.youtube.com/watch?v=iW9u_yVbaS0", icon: "💪" },
    { day: "Day 5", focus: "Full Body & Mobility", link: "https://www.youtube.com/watch?v=vjKW_Z_vX_M", icon: "⚡" },
    { day: "Day 6", focus: "Rest & Recovery", link: null, icon: "💤" },
    { day: "Day 7", focus: "Rest & Recovery", link: null, icon: "💤" }
];

const STORAGE_KEY = 'eliteFitnessPro_v1';
let state = {
    progress: {}, // { id: boolean }
    notes: {},    // { id: string }
    theme: 'dark',
    streak: 0
};

// Elements
const trackerBody = document.getElementById('tracker-body');
const totalCompletedEl = document.getElementById('total-completed');
const progressPercentEl = document.getElementById('progress-percent');
const progressCircle = document.getElementById('progress-circle');
const streakCountEl = document.getElementById('streak-count');
const currentDateEl = document.getElementById('current-date');
const themeToggleBtn = document.getElementById('theme-toggle');
const notesModal = document.getElementById('notes-modal');
const dayNotesTextarea = document.getElementById('day-notes');
const saveNotesBtn = document.getElementById('save-notes');
const modalDayInfo = document.getElementById('modal-day-info');

let activeNoteId = null;

function init() {
    loadState();
    renderTracker();
    updateUI();
    setupEventListeners();
    
    // Set date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    currentDateEl.innerText = new Date().toLocaleDateString(undefined, options);
}

function loadState() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        state = { ...state, ...JSON.parse(saved) };
    }
    
    if (state.theme === 'light') {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        updateThemeToggleUI();
    }
}

function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function renderTracker() {
    trackerBody.innerHTML = '';
    
    for (let w = 1; w <= 4; w++) {
        const weekCard = document.createElement('div');
        weekCard.className = 'week-container';
        
        const completedInWeek = Array.from({length: 7}, (_, i) => state.progress[`w${w}d${i+1}`]).filter(Boolean).length;
        
        weekCard.innerHTML = `
            <h2>
                <span>Week ${w}</span>
                <span class="week-progress-mini">${completedInWeek}/7 Done</span>
            </h2>
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
            
            row.innerHTML = `
                <div class="checkbox-custom" onclick="toggleDay('${id}', event)"></div>
                <div class="day-content" onclick="toggleDay('${id}', event)">
                    <div class="day-header">
                        <span class="day-title">${workout.day} ${workout.icon}</span>
                        <div class="day-actions">
                            ${workout.link ? `<button class="action-btn" title="Watch Tutorial" onclick="window.open('${workout.link}', '_blank'); event.stopPropagation();">▶️</button>` : ''}
                            <button class="action-btn ${hasNotes ? 'has-notes' : ''}" title="Notes" onclick="openNotes('${id}', event)">📝</button>
                        </div>
                    </div>
                    <div class="day-focus">${workout.focus}</div>
                </div>
            `;
            container.appendChild(row);
        });
    }
}

function toggleDay(id, event) {
    if (event) event.stopPropagation();
    state.progress[id] = !state.progress[id];
    
    const row = document.getElementById(`row-${id}`);
    if (state.progress[id]) {
        row.classList.add('completed');
    } else {
        row.classList.remove('completed');
    }
    
    calculateStreak();
    updateUI();
    saveState();
    
    // Update week mini progress
    const weekNum = id.charAt(1);
    const weekHeader = row.closest('.week-container').querySelector('.week-progress-mini');
    const completedInWeek = Array.from({length: 7}, (_, i) => state.progress[`w${weekNum}d${i+1}`]).filter(Boolean).length;
    weekHeader.innerText = `${completedInWeek}/7 Done`;
}

function calculateStreak() {
    // Simplified streak calculation: consecutive completed days from most recent
    // In a real app, this would be based on actual dates. 
    // Here we'll just count consecutive checked boxes from the start.
    let streak = 0;
    for (let w = 1; w <= 4; w++) {
        for (let d = 1; d <= 7; d++) {
            if (state.progress[`w${w}d${d}`]) {
                streak++;
            } else {
                state.streak = streak;
                return;
            }
        }
    }
    state.streak = streak;
}

function updateUI() {
    const total = 28;
    const completed = Object.values(state.progress).filter(Boolean).length;
    const percentage = Math.round((completed / total) * 100);
    
    totalCompletedEl.innerText = `${completed}/${total}`;
    progressPercentEl.innerText = `${percentage}%`;
    
    // Progress Circle
    // Circumference = 2 * PI * r = 2 * 3.1415 * 26 ≈ 163.36
    const circumference = 163.36;
    const offset = circumference - (percentage / 100) * circumference;
    progressCircle.style.strokeDashoffset = offset;
    
    // Streak
    calculateStreak();
    streakCountEl.innerText = `${state.streak} Day${state.streak === 1 ? '' : 's'}`;
}

function setupEventListeners() {
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        document.body.classList.toggle('light-theme');
        state.theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
        updateThemeToggleUI();
        saveState();
    });

    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', () => notesModal.style.display = 'none');
    });

    saveNotesBtn.addEventListener('click', () => {
        if (activeNoteId) {
            state.notes[activeNoteId] = dayNotesTextarea.value;
            saveState();
            notesModal.style.display = 'none';
            renderTracker(); // Refresh to show note icon color change
        }
    });

    document.getElementById('reset-all').addEventListener('click', () => {
        if (confirm("Reset all progress and notes? This cannot be undone.")) {
            state.progress = {};
            state.notes = {};
            state.streak = 0;
            saveState();
            location.reload();
        }
    });

    document.getElementById('export-csv').addEventListener('click', exportToCSV);

    window.onclick = (event) => {
        if (event.target == notesModal) {
            notesModal.style.display = 'none';
        }
    };
}

function updateThemeToggleUI() {
    const icon = themeToggleBtn.querySelector('.toggle-icon');
    const text = themeToggleBtn.querySelector('.toggle-text');
    if (state.theme === 'dark') {
        icon.innerText = '🌙';
        text.innerText = 'Dark Mode';
    } else {
        icon.innerText = '☀️';
        text.innerText = 'Light Mode';
    }
}

function openNotes(id, event) {
    if (event) event.stopPropagation();
    activeNoteId = id;
    
    const week = id.charAt(1);
    const day = id.substring(3);
    modalDayInfo.innerText = `Week ${week}, Day ${day} - ${workoutData[parseInt(day)-1].focus}`;
    
    dayNotesTextarea.value = state.notes[id] || '';
    notesModal.style.display = 'block';
    dayNotesTextarea.focus();
}

function exportToCSV() {
    let csv = 'Week,Day,Focus,Completed,Notes\n';
    
    for (let w = 1; w <= 4; w++) {
        for (let d = 1; d <= 7; d++) {
            const id = `w${w}d${d}`;
            const workout = workoutData[d-1];
            const completed = state.progress[id] ? 'Yes' : 'No';
            const notes = (state.notes[id] || '').replace(/"/g, '""');
            csv += `${w},${d},"${workout.focus}",${completed},"${notes}"\n`;
        }
    }
    
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "workout_progress_export.csv");
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Start
init();

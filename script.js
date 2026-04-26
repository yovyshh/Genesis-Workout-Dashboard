const workoutData = [
    { day: "Day 1", focus: "Upper Body (Push/Pull)", link: "https://www.youtube.com/watch?v=eGo4IYlbE5g", icon: "🔥" },
    { day: "Day 2", focus: "Lower Body & Core", link: "https://www.youtube.com/watch?v=MeIiIdhvXT4", icon: "🦵" },
    { day: "Day 3", focus: "Active Rest", link: null, icon: "🧘‍♂️" },
    { day: "Day 4", focus: "Upper Body (Strength)", link: "https://www.youtube.com/watch?v=iW9u_yVbaS0", icon: "💪" },
    { day: "Day 5", focus: "Full Body & Mobility", link: "https://www.youtube.com/watch?v=vjKW_Z_vX_M", icon: "⚡" },
    { day: "Day 6", focus: "Rest & Recovery", link: null, icon: "💤" },
    { day: "Day 7", focus: "Rest & Recovery", link: null, icon: "💤" }
];

const exerciseData = {
    "Day 1": [
        { name: "Pull-ups/Negatives", details: "3 x Max/5-8", video: "https://www.youtube.com/watch?v=eGo4IYlbE5g" },
        { name: "Standard Push-ups", details: "3 x 8-15", video: "https://www.youtube.com/watch?v=v9LABVJzv8Y" },
        { name: "DB Bent-Over Rows", details: "3 x 10-12", video: "https://www.youtube.com/watch?v=6KAGCdrAzX0" },
        { name: "Pike Push-ups", details: "3 x 6-10", video: "https://www.youtube.com/watch?v=sposDXWEB0A" },
        { name: "DB Bicep Curls", details: "3 x 10-15", video: "https://www.youtube.com/watch?v=i1YgFZB6alI" }
    ],
    "Day 2": [
        { name: "DB Goblet Squats", details: "4 x 10-15", video: "https://www.youtube.com/watch?v=MeIiIdhvXT4" },
        { name: "DB Walking Lunges", details: "3 x 10/leg", video: "https://www.youtube.com/watch?v=COkF9X76vqo" },
        { name: "Glute Bridges", details: "3 x 15-20", video: "https://www.youtube.com/watch?v=A8nFGuY77CE" },
        { name: "Lying Leg Raises", details: "3 x 12-15", video: "https://www.youtube.com/watch?v=v9LABVJzv8Y" },
        { name: "Forearm Plank", details: "3 x 30-60 sec", video: "https://www.youtube.com/watch?v=TvxNkmjdhMM" }
    ],
    "Day 3": [
        { name: "Light Stretching", details: "15-20 mins", video: null },
        { name: "Yoga or Mobility Flow", details: "Optional", video: null },
        { name: "Walking", details: "30 mins", video: null }
    ],
    "Day 4": [
        { name: "Chin-ups/Negatives", details: "3 x Max/5-8", video: "https://www.youtube.com/watch?v=i1YgFZB6alI" },
        { name: "Decline Push-ups", details: "3 x 8-12", video: "https://www.youtube.com/watch?v=v9LABVJzv8Y" },
        { name: "Chair/Bench Dips", details: "3 x 10-15", video: "https://www.youtube.com/watch?v=2z8JmcrW-As" },
        { name: "DB Lateral Raises", details: "3 x 12-15", video: "https://www.youtube.com/watch?v=v9LABVJzv8Y" },
        { name: "Hanging Knee Raises", details: "3 x 8-12", video: "https://www.youtube.com/watch?v=hdnHCAR66iE" }
    ],
    "Day 5": [
        { name: "DB Thrusters", details: "3 x 10-12", video: "https://www.youtube.com/watch?v=v9LABVJzv8Y" },
        { name: "Diamond Push-ups", details: "3 x 8-12", video: "https://www.youtube.com/watch?v=J0DnG1_S92I" },
        { name: "DB Romanian Deadlifts", details: "3 x 10-15", video: "https://www.youtube.com/watch?v=jEy_czb3zKA" },
        { name: "Russian Twists w/ DB", details: "3 x 20", video: "https://www.youtube.com/watch?v=v9LABVJzv8Y" },
        { name: "Hollow Body Hold", details: "3 x 30-45 sec", video: "https://www.youtube.com/watch?v=v9LABVJzv8Y" }
    ],
    "Day 6": [
        { name: "Full Rest", details: "Focus on recovery", video: null },
        { name: "Foam Rolling", details: "Optional", video: null }
    ],
    "Day 7": [
        { name: "Full Rest", details: "Prepare for next week", video: null }
    ]
};

const STORAGE_KEY = 'eliteFitnessPro_v1';
let state = {
    progress: {}, // { id: boolean }
    notes: {},    // { id: string }
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
const themeToggleBtn = document.getElementById('theme-toggle');
const notesModal = document.getElementById('notes-modal');
const detailsModal = document.getElementById('details-modal');
const dayNotesTextarea = document.getElementById('day-notes');
const saveNotesBtn = document.getElementById('save-notes');
const modalDayInfo = document.getElementById('modal-day-info');
const detailsTitle = document.getElementById('details-title');
const exerciseListContainer = document.getElementById('exercise-list-container');

// View elements
const navItems = document.querySelectorAll('.nav-item');
const viewSections = document.querySelectorAll('.view-section');
const dashboardTitle = document.querySelector('.header-left h1');

// Stats elements
const weeklyConsistencyChart = document.getElementById('weekly-consistency-chart');
const focusDistribution = document.getElementById('focus-distribution');
const statTotalWorkouts = document.getElementById('stat-total-workouts');
const statCompletionRate = document.getElementById('stat-completion-rate');
const statBestStreak = document.getElementById('stat-best-streak');

// Settings elements
const userNameInput = document.getElementById('user-name-input');
const fitnessGoalSelect = document.getElementById('fitness-goal-select');
const notifToggle = document.getElementById('notif-toggle');
const saveSettingsBtn = document.getElementById('save-settings');

let activeNoteId = null;

function init() {
    loadState();
    renderTracker();
    updateUI();
    setupEventListeners();
    updateSettingsUI();
    
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
    
    for (let w = 1; w <= 8; w++) {
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
            row.onclick = () => showDetails(id);
            
            row.innerHTML = `
                <div class="checkbox-custom" onclick="toggleDay('${id}', event)"></div>
                <div class="day-content">
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

function showDetails(id) {
    const weekNum = id.match(/w(\d+)/)[1];
    const dayNum = parseInt(id.match(/d(\d+)/)[1]);
    const workout = workoutData[dayNum - 1];
    const exercises = exerciseData[workout.day];
    
    detailsTitle.innerText = `Week ${weekNum}, ${workout.day} - ${workout.focus}`;
    exerciseListContainer.innerHTML = '';
    
    exercises.forEach(ex => {
        const exItem = document.createElement('div');
        exItem.className = 'exercise-item';
        exItem.innerHTML = `
            <span class="exercise-name">${ex.name}</span>
            <div class="exercise-details">
                <span>${ex.details}</span>
                ${ex.video ? `<a href="${ex.video}" target="_blank" class="exercise-video" onclick="event.stopPropagation();">▶ Video</a>` : ''}
            </div>
        `;
        exerciseListContainer.appendChild(exItem);
    });
    
    detailsModal.style.display = 'block';
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
    const weekNum = id.match(/w(\d+)/)[1];
    const weekContainer = row.closest('.week-container');
    const weekHeader = weekContainer.querySelector('.week-progress-mini');
    const completedInWeek = Array.from({length: 7}, (_, i) => state.progress[`w${weekNum}d${i+1}`]).filter(Boolean).length;
    weekHeader.innerText = `${completedInWeek}/7 Done`;
}

function calculateStreak() {
    let currentStreak = 0;
    let maxStreak = 0;
    
    // Calculate best streak across all time
    for (let w = 1; w <= 8; w++) {
        for (let d = 1; d <= 7; d++) {
            if (state.progress[`w${w}d${d}`]) {
                currentStreak++;
                if (currentStreak > maxStreak) maxStreak = currentStreak;
            } else {
                currentStreak = 0;
            }
        }
    }
    state.bestStreak = maxStreak;
    
    // Calculate current consecutive streak from Day 1
    let simpleStreak = 0;
    for (let w = 1; w <= 8; w++) {
        for (let d = 1; d <= 7; d++) {
            if (state.progress[`w${w}d${d}`]) {
                simpleStreak++;
            } else {
                state.streak = simpleStreak;
                return;
            }
        }
    }
    state.streak = simpleStreak;
}

function updateUI() {
    const total = 56; // 8 weeks * 7 days
    const completed = Object.values(state.progress).filter(Boolean).length;
    const percentage = Math.round((completed / total) * 100);
    
    totalCompletedEl.innerText = `${completed}/${total}`;
    progressPercentEl.innerText = `${percentage}%`;
    
    const circumference = 163.36;
    const offset = circumference - (percentage / 100) * circumference;
    progressCircle.style.strokeDashoffset = offset;
    
    calculateStreak();
    streakCountEl.innerText = `${state.streak} Day${state.streak === 1 ? '' : 's'}`;
    
    if (state.settings.userName) {
        dashboardTitle.innerText = `${state.settings.userName}'s Dashboard`;
    } else {
        dashboardTitle.innerText = `Workout Dashboard`;
    }
}

function switchView(viewName) {
    viewSections.forEach(section => {
        section.style.display = 'none';
    });
    
    const targetSection = document.getElementById(`${viewName}-view`);
    if (targetSection) {
        targetSection.style.display = 'block';
    }
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-view') === viewName) {
            item.classList.add('active');
        }
    });

    if (viewName === 'stats') {
        renderStats();
    }
}

function renderStats() {
    const total = 56;
    const completed = Object.values(state.progress).filter(Boolean).length;
    statTotalWorkouts.innerText = completed;
    statCompletionRate.innerText = `${Math.round((completed / total) * 100)}%`;
    statBestStreak.innerText = `${state.bestStreak} Days`;

    weeklyConsistencyChart.innerHTML = '';
    for (let w = 1; w <= 8; w++) {
        const completedInWeek = Array.from({length: 7}, (_, i) => state.progress[`w${w}d${i+1}`]).filter(Boolean).length;
        const heightPercentage = (completedInWeek / 7) * 100;
        
        const barContainer = document.createElement('div');
        barContainer.className = 'chart-bar-container';
        barContainer.innerHTML = `
            <div class="chart-bar ${completedInWeek > 0 ? 'active' : ''}" style="height: ${heightPercentage}%"></div>
            <span class="chart-label">W${w}</span>
        `;
        weeklyConsistencyChart.appendChild(barContainer);
    }

    const focusCounts = {};
    let totalCompleted = 0;

    for (let w = 1; w <= 8; w++) {
        workoutData.forEach((workout, index) => {
            const id = `w${w}d${index + 1}`;
            if (state.progress[id]) {
                const focus = workout.focus.split('(')[0].trim();
                focusCounts[focus] = (focusCounts[focus] || 0) + 1;
                totalCompleted++;
            }
        });
    }

    focusDistribution.innerHTML = '';
    Object.entries(focusCounts).forEach(([focus, count]) => {
        const percentage = Math.round((count / totalCompleted) * 100);
        const focusItem = document.createElement('div');
        focusItem.className = 'focus-item';
        focusItem.innerHTML = `
            <div class="focus-info">
                <span>${focus}</span>
                <span>${count} workouts (${percentage}%)</span>
            </div>
            <div class="focus-bar-bg">
                <div class="focus-bar-fill" style="width: ${percentage}%"></div>
            </div>
        `;
        focusDistribution.appendChild(focusItem);
    });
    
    if (totalCompleted === 0) {
        focusDistribution.innerHTML = '<p style="color: var(--text-secondary); font-size: 14px;">No data yet. Complete some workouts!</p>';
    }
}

function updateSettingsUI() {
    userNameInput.value = state.settings.userName || '';
    fitnessGoalSelect.value = state.settings.goal || 'strength';
    notifToggle.checked = state.settings.notifications;
}

function setupEventListeners() {
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            switchView(item.getAttribute('data-view'));
        });
    });

    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        document.body.classList.toggle('light-theme');
        state.theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
        updateThemeToggleUI();
        saveState();
    });

    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', () => {
            notesModal.style.display = 'none';
            detailsModal.style.display = 'none';
        });
    });

    saveNotesBtn.addEventListener('click', () => {
        if (activeNoteId) {
            state.notes[activeNoteId] = dayNotesTextarea.value;
            saveState();
            notesModal.style.display = 'none';
            renderTracker(); 
        }
    });

    document.getElementById('reset-all').addEventListener('click', () => {
        if (confirm("Reset all progress and notes? This cannot be undone.")) {
            state.progress = {};
            state.notes = {};
            state.streak = 0;
            state.bestStreak = 0;
            saveState();
            location.reload();
        }
    });

    document.getElementById('export-csv').addEventListener('click', exportToCSV);

    saveSettingsBtn.addEventListener('click', () => {
        state.settings.userName = userNameInput.value;
        state.settings.goal = fitnessGoalSelect.value;
        state.settings.notifications = notifToggle.checked;
        saveState();
        updateUI();
        alert('Settings saved!');
    });

    window.onclick = (event) => {
        if (event.target == notesModal) notesModal.style.display = 'none';
        if (event.target == detailsModal) detailsModal.style.display = 'none';
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
    
    const weekMatch = id.match(/w(\d+)/);
    const dayMatch = id.match(/d(\d+)/);
    const week = weekMatch[1];
    const day = dayMatch[1];
    modalDayInfo.innerText = `Week ${week}, Day ${day} - ${workoutData[parseInt(day)-1].focus}`;
    
    dayNotesTextarea.value = state.notes[id] || '';
    notesModal.style.display = 'block';
    dayNotesTextarea.focus();
}

function exportToCSV() {
    let csv = 'Week,Day,Focus,Completed,Notes\n';
    
    for (let w = 1; w <= 8; w++) {
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

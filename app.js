// =============================================
// JUMPSTART TRACKER - APPLICATION LOGIC
// =============================================

const LS_KEY = 'jumpstart-tracker';

// State
let state = loadState();
let currentDay = getTodayDay();
let currentView = 'day-view';
let activeTrip = 'all';
let recipeSource = null; // tracks if recipe was opened from day view

const TRIP_LABELS = {
  week1: [
    { trip: 'all', label: 'All' },
    { trip: '1', label: 'Days 1\u20132' },
    { trip: '2', label: 'Days 3\u20134' },
    { trip: '3', label: 'Days 5\u20137' }
  ],
  week2: [
    { trip: 'all', label: 'All' },
    { trip: '1', label: 'Days 8\u20139' },
    { trip: '2', label: 'Days 10\u201311' },
    { trip: '3', label: 'Days 12\u201314' }
  ]
};

// --- LOCAL STORAGE ---
function loadState() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch { return {}; }
}

function saveState() {
  localStorage.setItem(LS_KEY, JSON.stringify(state));
}

function getDayState(day) {
  const key = `day-${day}`;
  if (!state[key]) state[key] = { essentials: {}, prep: {}, journal: {}, notes: '', meals: {} };
  return state[key];
}

function getShopState(listKey) {
  const key = `shop-${listKey}`;
  if (!state[key]) state[key] = {};
  return state[key];
}

// --- DATE HELPERS ---
function getDateForDay(dayNum) {
  const start = new Date(START_DATE + 'T00:00:00');
  const d = new Date(start);
  d.setDate(d.getDate() + dayNum - 1);
  return d;
}

function formatDate(d) {
  return d.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });
}

function getTodayDay() {
  const start = new Date(START_DATE + 'T00:00:00');
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const diff = Math.floor((today - start) / (1000 * 60 * 60 * 24)) + 1;
  return Math.max(-3, Math.min(15, diff));
}

// --- NAVIGATION ---
function initDayNav() {
  const nav = document.getElementById('day-nav');
  nav.innerHTML = '';
  for (let d = -3; d <= 15; d++) {
    const pip = document.createElement('button');
    pip.className = 'day-pip';
    pip.textContent = d <= 0 ? `P${Math.abs(d) + 1}` : d;
    pip.title = d <= 0 ? `Prep Day ${Math.abs(d) + 1}` : `Day ${d}`;
    pip.dataset.day = d;

    const ds = getDayState(d);
    const hasData = ds.notes || Object.keys(ds.journal).some(k => ds.journal[k]) || Object.keys(ds.essentials).length > 0;
    if (hasData) pip.classList.add('has-data');
    if (d === currentDay) pip.classList.add('current');

    pip.addEventListener('click', () => navigateToDay(d));
    nav.appendChild(pip);
  }
  // Append the date label after pips
  const dateSpan = document.createElement('span');
  dateSpan.id = 'header-date';
  dateSpan.className = 'header-date';
  const dateObj = getDateForDay(currentDay);
  const dayLabel = currentDay <= 0 ? `Prep Day ${Math.abs(currentDay) + 1}` : `Day ${currentDay}`;
  const longDate = dateObj.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
  dateSpan.textContent = `${dayLabel} is ${longDate}`;
  nav.appendChild(dateSpan);

  // Scroll current into view
  const currentPip = nav.querySelector('.current');
  if (currentPip) currentPip.scrollIntoView({ inline: 'center', behavior: 'smooth' });
}

function navigateToDay(day) {
  currentDay = day;
  initDayNav();
  renderDayView();
  switchView('day-view');
}

function switchView(viewId) {
  currentView = viewId;
  document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
  document.getElementById(viewId).classList.remove('hidden');
  document.querySelectorAll('.tnav-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.view === viewId);
  });
}

// --- DAY VIEW ---
function renderDayView() {
  const ds = getDayState(currentDay);
  const dayLabel = currentDay <= 0 ? `Prep Day ${Math.abs(currentDay) + 1}` : currentDay <= 14 ? `Day ${currentDay}` : 'Day 15 (Commencement)';
  const dateObj = getDateForDay(currentDay);

  document.getElementById('day-title').textContent = dayLabel;
  document.getElementById('day-date').textContent = formatDate(dateObj);

  // Progress bar
  const essentialsDone = DAILY_ESSENTIALS.filter(e => ds.essentials[e.id]).length;
  const pct = Math.round((essentialsDone / DAILY_ESSENTIALS.length) * 100);
  document.querySelector('#day-progress-bar .progress-fill').style.width = pct + '%';

  // Nav buttons
  document.getElementById('prev-day').onclick = () => { if (currentDay > -3) navigateToDay(currentDay - 1); };
  document.getElementById('next-day').onclick = () => { if (currentDay < 15) navigateToDay(currentDay + 1); };
  document.getElementById('prev-day').disabled = currentDay <= -3;
  document.getElementById('next-day').disabled = currentDay >= 15;

  // Zoom alert
  renderZoomAlert();

  // Prep tasks
  renderPrepTasks();

  // Daily essentials
  renderEssentials();

  // Meals
  renderMeals();

  // Journal
  renderJournal();

  // Notes
  const notesEl = document.getElementById('daily-notes');
  notesEl.value = ds.notes || '';
  notesEl.oninput = () => {
    getDayState(currentDay).notes = notesEl.value;
    saveState();
  };
}

function renderZoomAlert() {
  const alert = document.getElementById('zoom-alert');
  const meeting = ZOOM_MEETINGS[currentDay];
  if (meeting) {
    alert.classList.remove('hidden');
    document.getElementById('zoom-alert-text').innerHTML =
      `<strong>${meeting.title}</strong> (${meeting.duration})<p>${meeting.desc}</p>`;
  } else {
    alert.classList.add('hidden');
  }
}

function renderPrepTasks() {
  const section = document.getElementById('prep-section');
  const container = document.getElementById('prep-tasks');
  const tasks = PREP_TASKS[currentDay];

  if (!tasks || tasks.length === 0) {
    section.classList.add('hidden');
    return;
  }

  section.classList.remove('hidden');
  container.innerHTML = '';
  const ds = getDayState(currentDay);

  tasks.forEach((task, i) => {
    const id = `prep-${currentDay}-${i}`;
    const checked = ds.prep[id] || false;
    const item = document.createElement('div');
    item.className = 'checklist-item' + (checked ? ' done' : '');
    item.innerHTML = `
      <input type="checkbox" id="${id}" ${checked ? 'checked' : ''}>
      <label for="${id}">${task}</label>
    `;
    item.querySelector('input').addEventListener('change', (e) => {
      ds.prep[id] = e.target.checked;
      item.classList.toggle('done', e.target.checked);
      saveState();
    });
    container.appendChild(item);
  });
}

function renderEssentials() {
  const container = document.getElementById('daily-essentials');
  container.innerHTML = '';
  const ds = getDayState(currentDay);

  DAILY_ESSENTIALS.forEach(ess => {
    const checked = ds.essentials[ess.id] || false;
    const item = document.createElement('div');
    item.className = 'checklist-item' + (checked ? ' done' : '');
    item.innerHTML = `
      <input type="checkbox" id="ess-${ess.id}" ${checked ? 'checked' : ''}>
      <label for="ess-${ess.id}">${ess.text}</label>
    `;
    item.querySelector('input').addEventListener('change', (e) => {
      ds.essentials[ess.id] = e.target.checked;
      item.classList.toggle('done', e.target.checked);
      saveState();
      // Update progress bar
      const done = DAILY_ESSENTIALS.filter(e2 => ds.essentials[e2.id]).length;
      document.querySelector('#day-progress-bar .progress-fill').style.width =
        Math.round((done / DAILY_ESSENTIALS.length) * 100) + '%';
      initDayNav();
    });
    container.appendChild(item);
  });
}

function renderMeals() {
  const container = document.getElementById('meals-section');
  container.innerHTML = '';

  const dayMeals = MEAL_PLAN[currentDay];
  if (!dayMeals) {
    container.innerHTML = '<p style="color:var(--gray-600);font-size:0.9rem;">No meal plan for this day. Focus on prep tasks above!</p>';
    return;
  }

  const mealSlots = [
    { key: 'breakfast', label: 'Breakfast', type: 'meal' },
    { key: 'snack1', label: 'Morning Snack', type: 'snack' },
    { key: 'lunch', label: 'Lunch', type: 'meal' },
    { key: 'snack2', label: 'Afternoon Snack', type: 'snack' },
    { key: 'dinner', label: 'Dinner', type: 'meal' },
    { key: 'snack3', label: 'Evening Snack', type: 'dessert' }
  ];

  mealSlots.forEach(slot => {
    const meal = dayMeals[slot.key];
    if (!meal) return;

    const card = document.createElement('div');
    card.className = `meal-card ${slot.type}`;

    let nameHtml = meal.name;
    if (meal.recipe && RECIPES[meal.recipe]) {
      nameHtml = `<a href="#" data-recipe="${meal.recipe}">${meal.name}</a>`;
    }

    card.innerHTML = `
      <div class="meal-label">${slot.label}</div>
      <div class="meal-name">${nameHtml}</div>
      ${meal.note ? `<div class="meal-note">${meal.note}</div>` : ''}
    `;

    const link = card.querySelector('a[data-recipe]');
    if (link) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        recipeSource = { view: 'day-view', day: currentDay };
        switchView('recipes-view');
        showRecipeDetail(link.dataset.recipe);
      });
    }

    container.appendChild(card);
  });
}

function renderJournal() {
  const ds = getDayState(currentDay);
  const fields = ['breakfast', 'snack1', 'lunch', 'snack2', 'dinner', 'snack3'];
  fields.forEach(f => {
    const el = document.getElementById(`journal-${f}`);
    if (el) {
      el.value = ds.journal[f] || '';
      el.oninput = () => {
        ds.journal[f] = el.value;
        saveState();
        initDayNav();
      };
    }
  });
}

// --- SHOPPING HELPERS ---
// Build a map from recipe/meal name keywords to the days they appear
function buildRecipeDayMap() {
  const map = {};
  for (let d = 1; d <= 14; d++) {
    const dayMeals = MEAL_PLAN[d];
    if (!dayMeals) continue;
    Object.values(dayMeals).forEach(meal => {
      if (!meal || !meal.name) return;
      // Normalize: lowercase, strip common prefixes
      const name = meal.name.toLowerCase();
      if (!map[name]) map[name] = [];
      if (!map[name].includes(d)) map[name].push(d);
    });
  }
  return map;
}

function formatDayDate(d) {
  const dateObj = getDateForDay(d);
  const short = dateObj.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  return `Day ${d} (${short})`;
}

function getPurposeDays(purposeStr, listKey) {
  if (!purposeStr) return '';
  const recipeDayMap = buildRecipeDayMap();
  const matchedDays = new Set();

  // Determine day range based on list key
  const dayRange = listKey === 'week2' ? [8, 14] : [1, 7];

  // Try to match each comma-separated purpose term against meal names
  const terms = purposeStr.split(',').map(t => t.trim().toLowerCase());
  terms.forEach(term => {
    if (!term || term === 'various recipes' || term === 'snacks' || term === 'breakfast'
        || term === 'garnish' || term === 'salads' || term === 'bowls'
        || term === 'breakfast and snacks' || term === 'snacks and desserts'
        || term === 'breakfast, snacks' || term === 'breakfast, recipes'
        || term === 'breakfast, snacks, lunches') return;
    Object.entries(recipeDayMap).forEach(([name, days]) => {
      // Check if the purpose term appears within the meal name or vice versa
      if (name.includes(term) || term.includes(name)) {
        days.forEach(d => {
          if (d >= dayRange[0] && d <= dayRange[1]) matchedDays.add(d);
        });
      }
    });
  });

  if (matchedDays.size === 0) return '';
  const sorted = [...matchedDays].sort((a, b) => a - b);
  return 'Days ' + sorted.join(', ');
}

// --- SHOPPING VIEW ---
function initShoppingView() {
  document.querySelectorAll('#shopping-view .tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('#shopping-view .tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeTrip = 'all';
      renderShoppingList(tab.dataset.shop);
    });
  });
  renderShoppingList('week1');
}

function renderShoppingList(listKey) {
  const container = document.getElementById('shopping-list-content');
  container.innerHTML = '';
  const list = SHOPPING[listKey];
  if (!list) return;

  // Render sub-pills for week1/week2
  const tripLabels = TRIP_LABELS[listKey];
  if (tripLabels) {
    const filterBar = document.createElement('div');
    filterBar.className = 'sub-filter-bar';
    tripLabels.forEach(({ trip, label }) => {
      const btn = document.createElement('button');
      btn.className = 'sub-filter-btn' + (trip === activeTrip ? ' active' : '');
      btn.textContent = label;
      btn.addEventListener('click', () => {
        activeTrip = trip;
        renderShoppingList(listKey);
      });
      filterBar.appendChild(btn);
    });
    container.appendChild(filterBar);
  }

  const shopState = getShopState(listKey);

  Object.keys(list).forEach(category => {
    const section = document.createElement('div');
    section.className = 'shop-category';
    section.innerHTML = `<h4>${category}</h4>`;

    let visibleCount = 0;
    list[category].forEach((item, i) => {
      if (activeTrip !== 'all' && item.trip && String(item.trip) !== activeTrip) return;
      visibleCount++;
      const id = `${listKey}-${category}-${i}`;
      const bought = shopState[id] || false;
      const row = document.createElement('div');
      row.className = 'shop-item' + (bought ? ' bought' : '');
      const dayInfo = getPurposeDays(item.purpose, listKey);
      row.innerHTML = `
        <input type="checkbox" id="${id}" ${bought ? 'checked' : ''}>
        <label for="${id}">
          <strong>${item.amount}</strong> ${item.item}
          ${item.purpose ? `<span class="shop-purpose">For: ${item.purpose}${dayInfo ? ` (${dayInfo})` : ''}</span>` : ''}
        </label>
      `;
      row.querySelector('input').addEventListener('change', (e) => {
        shopState[id] = e.target.checked;
        row.classList.toggle('bought', e.target.checked);
        saveState();
      });
      section.appendChild(row);
    });

    if (visibleCount > 0) {
      container.appendChild(section);
    }
  });
}

// --- RECIPES VIEW ---
function initRecipesView() {
  document.querySelectorAll('#recipes-view .tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('#recipes-view .tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderRecipeList(tab.dataset.cat);
      document.getElementById('recipe-detail').classList.add('hidden');
      document.getElementById('recipe-list').classList.remove('hidden');
    });
  });
  renderRecipeList('breakfast');
}

function renderRecipeList(category) {
  const container = document.getElementById('recipe-list');
  container.innerHTML = '';
  container.classList.remove('hidden');
  document.getElementById('recipe-detail').classList.add('hidden');

  Object.entries(RECIPES).forEach(([id, recipe]) => {
    if (recipe.category !== category) return;
    const card = document.createElement('div');
    card.className = 'recipe-card';
    card.innerHTML = `
      <h4>${recipe.name}</h4>
      <span class="recipe-meta">Serves ${recipe.serves}</span>
    `;
    card.addEventListener('click', () => showRecipeDetail(id));
    container.appendChild(card);
  });

  if (!container.children.length) {
    container.innerHTML = '<p style="color:var(--gray-600);padding:20px;">No recipes in this category yet.</p>';
  }
}

function showRecipeDetail(recipeId) {
  const recipe = RECIPES[recipeId];
  if (!recipe) return;

  document.getElementById('recipe-list').classList.add('hidden');
  const detail = document.getElementById('recipe-detail');
  detail.classList.remove('hidden');

  const backLabel = recipeSource ? `\u2190 Back to Day ${recipeSource.day}` : '\u2190 Back to list';
  let html = `<span class="back-link" id="recipe-back">${backLabel}</span>`;
  html += `<h3>${recipe.name}</h3>`;
  html += `<p><em>Serves ${recipe.serves}</em></p>`;

  html += `<h4>Ingredients</h4><ul>`;
  recipe.ingredients.forEach(ing => {
    html += `<li>${ing}</li>`;
  });
  html += `</ul>`;

  html += `<h4>Directions</h4>`;
  const steps = recipe.directions.split('\n');
  if (steps.length > 1) {
    html += '<ol>';
    steps.forEach(s => {
      const clean = s.replace(/^\d+\.\s*/, '').trim();
      if (clean) html += `<li>${clean}</li>`;
    });
    html += '</ol>';
  } else {
    html += `<p>${recipe.directions}</p>`;
  }

  if (recipe.sauce) {
    html += `<h4>Sauce</h4><p>${recipe.sauce}</p>`;
  }
  if (recipe.tip) {
    html += `<p><strong>Tip:</strong> ${recipe.tip}</p>`;
  }

  detail.innerHTML = html;

  document.getElementById('recipe-back').addEventListener('click', () => {
    if (recipeSource) {
      const day = recipeSource.day;
      recipeSource = null;
      detail.classList.add('hidden');
      document.getElementById('recipe-list').classList.remove('hidden');
      navigateToDay(day);
    } else {
      detail.classList.add('hidden');
      document.getElementById('recipe-list').classList.remove('hidden');
      const cat = recipe.category;
      document.querySelectorAll('#recipes-view .tab').forEach(t => {
        t.classList.toggle('active', t.dataset.cat === cat);
      });
      renderRecipeList(cat);
    }
  });
}

// --- FOOD GUIDE VIEW ---
function initFoodGuide() {
  const container = document.getElementById('food-guide-content');
  container.innerHTML = '';

  FOOD_GUIDE.forEach(section => {
    const div = document.createElement('div');
    div.className = 'guide-section';
    div.innerHTML = `<h3>${section.title}</h3>`;

    section.items.forEach(item => {
      const row = document.createElement('div');
      row.className = 'guide-row';
      row.innerHTML = `
        <span class="guide-icon ${item.ok ? 'guide-yes' : 'guide-no'}">${item.ok ? '&#10004;' : '&#10008;'}</span>
        <span>${item.text}</span>
      `;
      div.appendChild(row);
    });

    container.appendChild(div);
  });
}

// --- PROGRESS VIEW ---
function renderProgress() {
  const container = document.getElementById('progress-content');
  container.innerHTML = '';

  // Stats
  let totalEssentialsDone = 0;
  let totalEssentialsPossible = 0;
  let daysWithJournal = 0;
  let daysWithNotes = 0;

  for (let d = 1; d <= 14; d++) {
    const ds = getDayState(d);
    const done = DAILY_ESSENTIALS.filter(e => ds.essentials[e.id]).length;
    totalEssentialsDone += done;
    totalEssentialsPossible += DAILY_ESSENTIALS.length;
    const hasJournal = Object.keys(ds.journal).some(k => ds.journal[k]);
    if (hasJournal) daysWithJournal++;
    if (ds.notes) daysWithNotes++;
  }

  const statsHtml = `
    <div class="stats-row">
      <div class="stat-card">
        <div class="stat-num">${daysWithJournal}</div>
        <div class="stat-label">Days Logged</div>
      </div>
      <div class="stat-card">
        <div class="stat-num">${totalEssentialsDone}</div>
        <div class="stat-label">Essentials Checked</div>
      </div>
      <div class="stat-card">
        <div class="stat-num">${totalEssentialsPossible > 0 ? Math.round((totalEssentialsDone / totalEssentialsPossible) * 100) : 0}%</div>
        <div class="stat-label">Essentials Rate</div>
      </div>
    </div>
  `;

  // Day grid
  let gridHtml = '<div class="progress-grid">';
  for (let d = 1; d <= 14; d++) {
    const ds = getDayState(d);
    const done = DAILY_ESSENTIALS.filter(e => ds.essentials[e.id]).length;
    const pct = Math.round((done / DAILY_ESSENTIALS.length) * 100);
    const hasEntries = done > 0 || Object.keys(ds.journal).some(k => ds.journal[k]) || ds.notes;
    gridHtml += `
      <div class="progress-day ${hasEntries ? 'has-entries' : ''}" style="cursor:pointer" data-goto="${d}">
        <div class="p-day-num">Day ${d}</div>
        <div class="p-day-pct">${pct}%</div>
      </div>
    `;
  }
  gridHtml += '</div>';

  container.innerHTML = statsHtml + gridHtml;

  // Click to navigate
  container.querySelectorAll('[data-goto]').forEach(el => {
    el.addEventListener('click', () => navigateToDay(parseInt(el.dataset.goto)));
  });
}

// --- EXPORT / RESET ---
function initExportReset() {
  document.getElementById('export-btn').addEventListener('click', () => {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'jumpstart-tracker-data.json';
    a.click();
    URL.revokeObjectURL(url);
  });

  document.getElementById('reset-btn').addEventListener('click', () => {
    if (confirm('Are you sure you want to delete ALL your data? This cannot be undone.')) {
      localStorage.removeItem(LS_KEY);
      state = {};
      currentDay = getTodayDay();
      initDayNav();
      renderDayView();
      renderProgress();
      alert('All data has been reset.');
    }
  });
}

// --- TOP NAV ---
function initTopNav() {
  document.querySelectorAll('.tnav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const view = btn.dataset.view;
      if (view === 'day-view') {
        navigateToDay(getTodayDay());
      } else {
        switchView(view);
        if (view === 'progress-view') renderProgress();
      }
    });
  });
}

// --- INIT ---
function init() {
  initDayNav();
  renderDayView();
  initShoppingView();
  initRecipesView();
  initFoodGuide();
  renderProgress();
  initExportReset();
  initTopNav();
}

document.addEventListener('DOMContentLoaded', init);

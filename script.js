/* ==========================================================
   GymDiet Pro — script.js
   Clean, well-structured, fully featured
========================================================== */

/* ── DATA ──────────────────────────────────────────────── */

const MEAL_PLANS = {
  underweight: {
    gain:     { title:"High-Calorie Muscle Builder", note:"Calorie surplus with dense, clean foods. Eat every 3 hrs.", days:{ Monday:["Breakfast: 4 eggs + oats + banana + milk","Snack: Peanut butter toast + mixed nuts","Lunch: Rice (2 cups) + chicken breast + dal + ghee","Snack: Paneer bhurji + roti","Dinner: Wheat roti + rajma curry + cucumber salad"], Tuesday:["Breakfast: Poha + 2 boiled eggs + fruit","Snack: Almonds + dates","Lunch: Chicken biryani + raita","Snack: Greek yogurt + honey","Dinner: Chapati + mutton curry + sabji"], Wednesday:["Breakfast: Stuffed paratha + curd","Snack: Banana peanut butter shake","Lunch: Dal + rice + egg curry","Snack: Cheese sandwich","Dinner: Paneer curry + naan + salad"], Thursday:["Breakfast: Idli (4) + sambar + boiled egg","Snack: Trail mix (nuts + raisins)","Lunch: Chole + rice + roti","Snack: Protein shake + banana","Dinner: Grilled chicken + rice + veggies"], Friday:["Breakfast: Smoothie bowl + granola","Snack: PB banana toast","Lunch: Fish curry + rice + dal","Snack: Boiled eggs + cheese","Dinner: Chicken wrap + salad"], Saturday:["Breakfast: Paratha + lassi","Snack: Paneer tikka","Lunch: Mutton curry + rice + salad","Snack: Oats with milk + honey","Dinner: Dal makhani + roti + sabji"], Sunday:["Breakfast: Full Indian thali (poori + aloo)","Snack: Fruit salad + nuts","Lunch: Special biryani (chicken/veg)","Snack: Protein shake","Dinner: Grilled chicken + sweet potato"] } },
    maintain: { title:"Gradual Weight Build", note:"Steady calorie increase with whole foods.", days:{ Monday:["Breakfast: Eggs + toast + milk","Lunch: Dal + rice + sabji","Dinner: Roti + paneer + salad"], Tuesday:["Breakfast: Paratha + curd","Lunch: Chicken + rice","Dinner: Dal + roti + veggies"], Wednesday:["Breakfast: Oats + fruits","Lunch: Rajma + rice","Dinner: Egg curry + roti"], Thursday:["Breakfast: Poha + juice","Lunch: Pulao + raita","Dinner: Sabji + roti + dal"], Friday:["Breakfast: Smoothie + toast","Lunch: Fish + rice","Dinner: Paneer + roti"], Saturday:["Breakfast: Idli + sambar","Lunch: Biryani","Dinner: Dal makhani + roti"], Sunday:["Breakfast: Paratha + pickle","Lunch: Full Indian meal","Dinner: Light soup + roti"] } }
  },
  normal: {
    maintain: { title:"Balanced Maintenance Plan", note:"3 meals + 2 snacks. Whole foods. Stay active.", days:{ Monday:["Breakfast: Oats + boiled egg + fruit","Snack: Handful nuts","Lunch: Dal + roti + sabji + salad","Snack: Yogurt + banana","Dinner: Chicken/paneer + rice + veggies"], Tuesday:["Breakfast: Poha + chai","Snack: Apple + peanut butter","Lunch: Chole + 2 roti","Snack: Boiled egg","Dinner: Roti + dal + sabji"], Wednesday:["Breakfast: Smoothie + toast","Snack: Trail mix","Lunch: Fish curry + rice","Snack: Curd + fruits","Dinner: Soup + chapati + salad"], Thursday:["Breakfast: Idli + sambar","Snack: Banana","Lunch: Chicken + rice + salad","Snack: Cheese + crackers","Dinner: Paneer + roti + dal"], Friday:["Breakfast: Paratha + curd","Snack: Green tea + nuts","Lunch: Rajma + rice","Snack: Fruits","Dinner: Stir-fry veggies + egg + roti"], Saturday:["Breakfast: Eggs + toast","Snack: Yogurt","Lunch: Favourite meal (moderate)","Snack: Nuts + dates","Dinner: Light soup + bread"], Sunday:["Breakfast: Pancakes + honey","Snack: Fresh fruit","Lunch: Full Indian meal","Snack: Smoothie","Dinner: Grilled protein + veggies"] } },
    gain:     { title:"Lean Muscle Building", note:"Slight surplus + high protein. Lift heavy.", days:{ Monday:["Breakfast: 4 eggs + oats + milk","Lunch: Chicken breast + rice + salad","Snack: Protein shake + banana","Dinner: Dal + roti + sabji"], Tuesday:["Breakfast: Banana peanut butter smoothie","Lunch: Fish + rice + veggies","Snack: Paneer tikka","Dinner: Egg curry + roti"], Wednesday:["Breakfast: Oats + nuts + fruits","Lunch: Chole + roti + salad","Snack: Greek yogurt","Dinner: Chicken + sweet potato"], Thursday:["Breakfast: Paratha + boiled eggs","Lunch: Rajma + rice","Snack: Cheese sandwich","Dinner: Paneer + roti + dal"], Friday:["Breakfast: Idli + egg","Lunch: Biryani + raita","Snack: Protein shake","Dinner: Dal makhani + roti"], Saturday:["Breakfast: Stuffed paratha + milk","Lunch: Chicken biryani","Snack: Mixed nuts + shake","Dinner: Sabji + roti + curd"], Sunday:["Breakfast: Eggs + toast + juice","Lunch: Full meal","Snack: Banana shake","Dinner: Grilled chicken + veggies"] } },
    loss:     { title:"Fat Loss – Calorie Deficit", note:"500 cal deficit. High protein, low refined carbs.", days:{ Monday:["Breakfast: 2-egg veggie omelette","Snack: Cucumber + hummus","Lunch: Grilled chicken + salad (no rice)","Snack: Green tea + apple","Dinner: Dal + 1 roti + sabji"], Tuesday:["Breakfast: Greek yogurt + berries","Snack: 10 almonds","Lunch: Moong dal + veggies + 1 roti","Snack: Buttermilk","Dinner: Egg whites + stir-fry veggies"], Wednesday:["Breakfast: Oats (no sugar)","Snack: Apple","Lunch: Grilled fish + salad","Snack: Curd","Dinner: Grilled paneer (100g) + veggies"], Thursday:["Breakfast: Poha (less oil)","Snack: Green tea + nuts","Lunch: Chicken soup + salad","Snack: Cucumber","Dinner: Dal + sabji + 1 roti"], Friday:["Breakfast: 2 idli + sambar","Snack: Lemon water + nuts","Lunch: Rajma (small) + salad","Snack: Yogurt","Dinner: Egg curry (no rice)"], Saturday:["Breakfast: Spinach smoothie","Snack: Apple","Lunch: Big salad bowl + protein","Snack: Buttermilk","Dinner: Light soup + 1 roti"], Sunday:["Breakfast: 2-egg omelette + toast","Snack: Fruits","Lunch: Grilled chicken + salad","Snack: Green tea","Dinner: Dal soup + veggies"] } }
  },
  overweight: {
    loss:     { title:"Structured Weight Loss", note:"500-600 cal deficit. Eliminate sugar + refined carbs.", days:{ Monday:["Breakfast: 2 boiled eggs + cucumber","Snack: Buttermilk","Lunch: Grilled chicken + salad + 1 roti","Snack: Green tea","Dinner: Dal + sabji + 1 small roti"], Tuesday:["Breakfast: Plain oats + cinnamon","Snack: Apple slices","Lunch: Moong dal + veggies","Snack: Curd","Dinner: Egg whites stir-fry + sabji"], Wednesday:["Breakfast: Spinach apple ginger smoothie","Snack: 10 almonds","Lunch: Grilled fish + salad","Snack: Green tea","Dinner: Grilled paneer + veggies"], Thursday:["Breakfast: 2 idli + sambar (no chutney)","Snack: Lemon water","Lunch: Chicken soup + 1 roti","Snack: Cucumber","Dinner: Dal + veggies"], Friday:["Breakfast: Besan chilla","Snack: Fruits","Lunch: Rajma (small) + veggies","Snack: Curd","Dinner: Light soup"], Saturday:["Breakfast: Poha (less oil)","Snack: Nuts (10)","Lunch: Grilled protein + salad","Snack: Green tea","Dinner: 1 roti + dal + sabji"], Sunday:["Breakfast: 2-egg omelette","Snack: Fruit bowl","Lunch: Lighter favourite meal","Snack: Buttermilk","Dinner: Clear soup"] } },
    maintain: { title:"Healthy Maintenance", note:"Watch portions. Move daily.", days:{ Monday:["Breakfast: Oats + fruit","Lunch: Dal + 2 roti + sabji","Dinner: Chicken + rice + salad"], Tuesday:["Breakfast: Idli + sambar","Lunch: Rajma + rice","Dinner: Roti + paneer + sabji"], Wednesday:["Breakfast: Eggs + toast","Lunch: Fish + veggies + rice","Dinner: Dal + roti"], Thursday:["Breakfast: Poha","Lunch: Chole + 2 roti","Dinner: Egg + sabji + roti"], Friday:["Breakfast: Smoothie","Lunch: Chicken + salad","Dinner: Dal + rice"], Saturday:["Breakfast: 1 paratha + curd","Lunch: Regular balanced meal","Dinner: Light dinner"], Sunday:["Breakfast: Fruits + yogurt","Lunch: Balanced Indian meal","Dinner: Soup + roti"] } }
  },
  obese: {
    loss:     { title:"Medical-Grade Fat Loss", note:"Consult doctor. Very low carb, zero sugar.", days:{ Monday:["Breakfast: 2 boiled eggs + 1 fruit","Snack: 5 almonds + lemon water","Lunch: Grilled chicken (150g) + salad","Snack: Low-fat curd","Dinner: Steamed veggies + small dal"], Tuesday:["Breakfast: Spinach apple smoothie (no sugar)","Snack: Cucumber slices","Lunch: Moong dal soup + veggies","Snack: Green tea","Dinner: Egg whites + stir-fry veggies"], Wednesday:["Breakfast: Oats (no sugar) + cinnamon","Snack: Apple","Lunch: Grilled fish + salad","Snack: Buttermilk","Dinner: Grilled paneer (100g) + veggies"], Thursday:["Breakfast: 1 besan chilla","Snack: Water + 5 almonds","Lunch: Chicken soup","Snack: Fruits","Dinner: 1 small roti + dal"], Friday:["Breakfast: 2 idli + sambar","Snack: Lemon water","Lunch: Clear soup + salad","Snack: Curd","Dinner: Steamed veggies + eggs"], Saturday:["Breakfast: 2-egg omelette (no butter)","Snack: Fruit","Lunch: Light daal + salad","Snack: Buttermilk","Dinner: Soup only"], Sunday:["Breakfast: Boiled eggs + cucumber","Snack: Apple","Lunch: Grilled protein + salad","Snack: Green tea","Dinner: Dal + 1 roti"] } }
  }
};

const GROCERY = {
  "🥩 Proteins":      ["Chicken breast","Eggs","Paneer","Tuna / Fish","Dal (lentils)","Greek yogurt","Tofu","Rajma","Chole","Soya chunks"],
  "🌾 Carbs":         ["Brown rice","Whole wheat roti","Oats","Sweet potato","Quinoa","Banana","Multigrain bread","Poha","Barley"],
  "🥦 Vegetables":    ["Spinach","Broccoli","Cucumber","Tomato","Capsicum","Beans","Carrot","Cauliflower","Onion","Bitter gourd"],
  "🥑 Healthy Fats":  ["Almonds","Walnuts","Peanut butter","Ghee (small)","Flaxseeds","Chia seeds","Olive oil","Avocado","Coconut"],
  "🍎 Fruits":        ["Apple","Banana","Orange","Papaya","Watermelon","Berries","Mango (moderate)","Pomegranate","Kiwi"],
  "🧴 Dairy":         ["Milk (low-fat)","Curd","Paneer","Cheese (low-fat)","Buttermilk","Whey protein"]
};

const WORKOUT = {
  Monday:    { focus:"Chest & Triceps", tag:"Push", exercises:[{n:"Barbell Bench Press",d:"4×8–12 reps | 90s rest"},{n:"Incline Dumbbell Press",d:"3×10 reps"},{n:"Cable / Dumbbell Flyes",d:"3×12 reps"},{n:"Tricep Pushdown",d:"4×12 reps"},{n:"Overhead Tricep Extension",d:"3×12 reps"},{n:"Dips",d:"3 sets to failure"}] },
  Tuesday:   { focus:"Back & Biceps",   tag:"Pull", exercises:[{n:"Deadlift",d:"4×5 reps | 2 min rest"},{n:"Pull-ups / Lat Pulldown",d:"4×8–10 reps"},{n:"Bent-Over Row",d:"3×10 reps"},{n:"Seated Cable Row",d:"3×12 reps"},{n:"Barbell Curl",d:"4×12 reps"},{n:"Hammer Curl",d:"3×12 reps"}] },
  Wednesday: { focus:"Legs & Glutes",   tag:"Legs", exercises:[{n:"Barbell Squat",d:"5×5 reps | 2 min rest"},{n:"Romanian Deadlift",d:"4×10 reps"},{n:"Leg Press",d:"4×12 reps"},{n:"Walking Lunges",d:"3×12 each leg"},{n:"Leg Curl (machine)",d:"3×12 reps"},{n:"Calf Raises",d:"4×15 reps"}] },
  Thursday:  { focus:"Shoulders & Core",tag:"Push", exercises:[{n:"Overhead Press",d:"4×8–10 reps"},{n:"Arnold Press",d:"3×12 reps"},{n:"Lateral Raises",d:"4×15 reps"},{n:"Face Pulls",d:"3×15 reps"},{n:"Plank",d:"3×60 sec"},{n:"Hanging Leg Raises",d:"3×12 reps"}] },
  Friday:    { focus:"Full Body + Cardio",tag:"Full",exercises:[{n:"Squat or Deadlift (light)",d:"3×8 reps"},{n:"Push-ups",d:"3×15 reps"},{n:"Dumbbell Row",d:"3×12 reps"},{n:"Box Step-ups",d:"3×10 reps"},{n:"HIIT / Jump Rope",d:"20 minutes"},{n:"Core Circuit",d:"3 rounds: crunches + plank + leg raise"}] },
  Saturday:  { focus:"Arms & Forearms",  tag:"Arms", exercises:[{n:"Barbell Curl",d:"4×10 reps"},{n:"Preacher Curl",d:"3×12 reps"},{n:"Concentration Curl",d:"3×12 each"},{n:"Skull Crusher",d:"4×10 reps"},{n:"Cable Pushdown",d:"3×15 reps"},{n:"Wrist Curls + Reverse",d:"3×20 reps"}] },
  Sunday:    { focus:"Active Rest",       tag:"Rest", exercises:[{n:"Light walk",d:"30–45 min easy pace"},{n:"Full body stretch",d:"20 minutes"},{n:"Foam rolling",d:"10 minutes"},{n:"Yoga / mobility",d:"20 minutes"},{n:"Meditation",d:"10 minutes"},{n:"Meal prep",d:"Plan next week ✓"}] }
};

const FOODS_DB = [
  { name:"Chicken breast (100g)",  kcal:165, p:31, c:0,  f:3.6 },
  { name:"Eggs (1 whole)",          kcal:78,  p:6,  c:0.6,f:5 },
  { name:"Oats (50g)",              kcal:188, p:6,  c:32, f:3 },
  { name:"Brown rice (1 cup)",      kcal:215, p:5,  c:45, f:2 },
  { name:"Paneer (100g)",           kcal:265, p:18, c:4,  f:20 },
  { name:"Dal (1 cup cooked)",      kcal:230, p:18, c:40, f:1 },
  { name:"Banana (1 medium)",       kcal:105, p:1,  c:27, f:0.4},
  { name:"Whole milk (200ml)",      kcal:122, p:6,  c:9,  f:7 },
  { name:"Greek yogurt (100g)",     kcal:59,  p:10, c:3,  f:0.4},
  { name:"Peanut butter (1 tbsp)", kcal:94,  p:4,  c:3,  f:8 },
  { name:"Almonds (10 pcs)",        kcal:70,  p:2.5,c:2.5,f:6 },
  { name:"White rice (1 cup)",      kcal:242, p:4,  c:53, f:0.4},
  { name:"Wheat roti (1)",          kcal:80,  p:3,  c:15, f:1 },
  { name:"Tuna (100g)",             kcal:116, p:26, c:0,  f:1 },
  { name:"Rajma (1 cup cooked)",    kcal:225, p:15, c:40, f:1 },
  { name:"Sweet potato (100g)",     kcal:86,  p:2,  c:20, f:0 },
  { name:"Spinach (100g)",          kcal:23,  p:3,  c:4,  f:0.4},
  { name:"Apple (1 medium)",        kcal:95,  p:0.5,c:25, f:0.3},
];

/* ── STORAGE ────────────────────────────────────────────── */
const K = { users:'gdUsers', cur:'gdCur', grocery:'gdGrocery', water:'gdWater', habits:'gdHabits', settings:'gdSettings', theme:'gdTheme', progress:'gdProgress', measurements:'gdMeasure', foodlog:'gdFoodLog' };

let S = {
  page:'dashboard', bmi:null, goal:'maintain',
  water:0,
  habits:{ sleep:false, steps:false, protein:false, junk:false },
  settings:{ name:'', age:'', gender:'', activity:'', showTips:true, gemini_api_key:'' },
  grocery:[], progress:[], measurements:{}, foodlog:[],
  aiHistory:[]
};

function load(){
  S.water        = parseInt(localStorage.getItem(K.water)||'0')||0;
  S.habits       = JSON.parse(localStorage.getItem(K.habits)||'{"sleep":false,"steps":false,"protein":false,"junk":false}');
  S.settings     = JSON.parse(localStorage.getItem(K.settings)||'{"name":"","age":"","gender":"","activity":"","showTips":true}');
  S.grocery      = JSON.parse(localStorage.getItem(K.grocery)||'[]');
  S.progress     = JSON.parse(localStorage.getItem(K.progress)||'[]');
  S.measurements = JSON.parse(localStorage.getItem(K.measurements)||'{}');
  S.foodlog      = JSON.parse(localStorage.getItem(K.foodlog)||'[]');
}
const save = {
  water(){ localStorage.setItem(K.water, S.water) },
  habits(){ localStorage.setItem(K.habits, JSON.stringify(S.habits)) },
  settings(){ localStorage.setItem(K.settings, JSON.stringify(S.settings)) },
  grocery(){ localStorage.setItem(K.grocery, JSON.stringify(S.grocery)) },
  progress(){ localStorage.setItem(K.progress, JSON.stringify(S.progress)) },
  measurements(){ localStorage.setItem(K.measurements, JSON.stringify(S.measurements)) },
  foodlog(){ localStorage.setItem(K.foodlog, JSON.stringify(S.foodlog)) }
};

/* ── AUTH ───────────────────────────────────────────────── */
function getUsers(){ return JSON.parse(localStorage.getItem(K.users)||'[]') }
function saveUsers(u){ localStorage.setItem(K.users, JSON.stringify(u)) }
function getCurrent(){ return sessionStorage.getItem(K.cur) }
function setCurrent(e){ e ? sessionStorage.setItem(K.cur,e) : sessionStorage.removeItem(K.cur) }
function isLoggedIn(){ return !!getCurrent() }
function getCurrentUser(){ const e=getCurrent(); return getUsers().find(u=>u.email===e)||null }

function openAuth(tab='login'){
  document.getElementById('authModal').classList.remove('hidden');
  switchModalTab(tab);
}
function closeAuth(){ document.getElementById('authModal').classList.add('hidden') }
function switchModalTab(t){
  document.getElementById('tabLogin').classList.toggle('active', t==='login');
  document.getElementById('tabReg').classList.toggle('active', t==='reg');
  document.getElementById('loginPanel').classList.toggle('hidden', t!=='login');
  document.getElementById('regPanel').classList.toggle('hidden', t!=='reg');
}

async function handleLogin(e){
  e.preventDefault();
  const email = document.getElementById('lEmail').value.trim();
  const pass  = document.getElementById('lPass').value;
  const msg   = document.getElementById('lMsg');
  
  try {
    const res = await fetch('http://127.0.0.1:8000/api/login/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email, password: pass})
    });
    const data = await res.json();
    
    if(res.ok) {
      setCurrent(email);
      // Save minimal user info so existing code doesn't break
      const users = getUsers();
      if(!users.find(u=>u.email===email)) {
        users.push({email: data.user.email, name: data.user.name});
        saveUsers(users);
      }
      
      msg.textContent='Login successful!'; msg.className='fmsg ok';
      setTimeout(()=>{ closeAuth(); updateAuthUI(); goPage('dashboard'); }, 500);
    } else {
      msg.textContent = data.error || 'Invalid credentials.'; msg.className='fmsg err'; 
    }
  } catch(err) {
    msg.textContent = 'Network error. Backend not running.'; msg.className='fmsg err';
  }
}

async function handleRegister(e){
  e.preventDefault();
  const name = document.getElementById('rName').value.trim();
  const email= document.getElementById('rEmail').value.trim();
  const pass = document.getElementById('rPass').value;
  const msg  = document.getElementById('rMsg');
  const age = document.getElementById('rAge').value;
  const gender = document.getElementById('rGender').value;
  const goal = document.getElementById('rGoal').value;
  const activity = document.getElementById('rActivity').value;

  if(!name||!email||!pass){ msg.textContent='Name, email and password are required.'; msg.className='fmsg err'; return; }
  if(pass.length<6){ msg.textContent='Password must be at least 6 characters.'; msg.className='fmsg err'; return; }

  try {
    const res = await fetch('http://127.0.0.1:8000/api/register/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        email, password: pass, name, 
        profile: { age: parseInt(age)||null, gender, goal, activity_level: activity } 
      })
    });
    const data = await res.json();
    
    if(res.ok) {
        // Also save to localStorage cache so it functions locally
        const users = getUsers();
        users.push({ name, email, age, gender, goal, activity });
        saveUsers(users);
        
        msg.textContent='Account created! Sign in now.'; msg.className='fmsg ok';
        setTimeout(()=> switchModalTab('login'), 800);
    } else {
        // Extract field error if available
        let errMsg = 'Error creating account.';
        if (data.email) errMsg = data.email[0];
        else if (data.error) errMsg = data.error;
        else if (typeof data === 'object') {
            const firstKey = Object.keys(data)[0];
            if (Array.isArray(data[firstKey])) errMsg = data[firstKey][0];
        }
        msg.textContent = errMsg; msg.className = 'fmsg err'; 
    }
  } catch(err) {
      msg.textContent='Network error. Backend not running.'; msg.className='fmsg err';
  }
}


function logout(){
  setCurrent(null);
  [K.grocery,K.water,K.habits,K.progress,K.measurements,K.foodlog].forEach(k=>localStorage.removeItem(k));
  load();
  updateAuthUI();
  goPage('dashboard');
}

function updateAuthUI(){
  const user = getCurrentUser();
  ['authBtn'].forEach(id=>{
    const btn = document.getElementById(id);
    if(!btn) return;
    if(user){
      btn.textContent = (user.name||'').split(' ')[0]+' · Logout';
      btn.className='btn-auth out';
      btn.onclick=logout;
    } else {
      btn.textContent='Login';
      btn.className='btn-auth';
      btn.onclick=()=>openAuth('login');
    }
  });
}

function togglePw(inpId, iconId){
  const i=document.getElementById(inpId), ic=document.getElementById(iconId);
  if(i.type==='password'){ i.type='text'; ic.className='fa-solid fa-eye-slash'; }
  else { i.type='password'; ic.className='fa-solid fa-eye'; }
}

/* ── NAVIGATION ─────────────────────────────────────────── */
// const PAGE_ORDER=['dashboard','bmi','calories','meal','ai','grocery','workout','measurements','progress','habits','settings'];

// function goPage(id){
//   if(!PAGE_ORDER.includes(id)) return;
//   S.page = id;
//   document.querySelectorAll('.nav-item').forEach(b=>b.classList.toggle('active', b.dataset.page===id));
//   renderPage(id);
//   window.scrollTo({top:0,behavior:'smooth'});
//   closeSidebar();
// }



const PAGEORDER = [
  "dashboard","bmi","calories","meal","ai",
  "grocery","workout","measurements","progress",
  "habits","settings"
];

function goPage(id) {
  if (!PAGEORDER.includes(id)) return;

  S.page = id;
  document.querySelectorAll(".nav-item").forEach(b => {
    b.classList.toggle("active", b.dataset.page === id);
  });
  renderPage(id);
  window.scrollTo({ top: 0, behavior: "smooth" });
  closeSidebar();
}

applyTheme(localStorage.getItem(K.theme) || "dark");
load();
updateAuthUI();
goPage("dashboard");    // correct


function goPageProtected(id) {
  if (!isLoggedIn()) {
    openAuth("login");   // show login modal
    return;              // do NOT call goPage
  }
  goPage(id);            // only runs when logged in
}




document.querySelectorAll(".nav-item").forEach(btn => {
  btn.addEventListener("click", () => {
    const page = btn.dataset.page;
    goPageProtected(page);   // NOT goPage(page)
  });
});


/* ── THEME ──────────────────────────────────────────────── */
function applyTheme(t){
  document.documentElement.setAttribute('data-theme',t);
  localStorage.setItem(K.theme,t);
  ['themeIcon','themeIconMobile'].forEach(id=>{
    const el=document.getElementById(id);
    if(el) el.className = t==='dark'?'fa-solid fa-moon':'fa-solid fa-sun';
  });
}
function toggleTheme(){
  const cur=document.documentElement.getAttribute('data-theme')||'dark';
  applyTheme(cur==='dark'?'light':'dark');
}

/* ── SIDEBAR (mobile) ───────────────────────────────────── */
function openSidebar(){
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('sidebarOverlay').classList.remove('hidden');
}
function closeSidebar(){
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebarOverlay').classList.add('hidden');
}

/* ── BMI HELPERS ────────────────────────────────────────── */
function calcBMIVal(w,h){ return w/(h*h) }
function interpretBMI(b){
  if(b<18.5) return {label:'Underweight', key:'underweight', color:'#60a5fa', pct:b/18.5*25};
  if(b<25)   return {label:'Normal',      key:'normal',      color:'#63dc8c', pct:25+(b-18.5)/6.5*25};
  if(b<30)   return {label:'Overweight',  key:'overweight',  color:'#fbbf24', pct:50+(b-25)/5*25};
  return              {label:'Obese',      key:'obese',       color:'#f87171', pct:Math.min(75+(b-30)/5*25,100)};
}
function getMealPlan(bmiKey, goal){
  const byGoal = MEAL_PLANS[bmiKey];
  if(!byGoal) return MEAL_PLANS.normal.maintain;
  return byGoal[goal] || byGoal.maintain || byGoal.loss || byGoal.gain || MEAL_PLANS.normal.maintain;
}
function getDietAdvice(info, goal){
  if(goal==='loss')    return `You are ${info.label.toLowerCase()}. Aim for a 400–500 cal daily deficit with high protein and low refined carbs.`;
  if(goal==='gain')    return `You are ${info.label.toLowerCase()}. Add a 200–300 cal surplus. Prioritise protein and progressive strength training.`;
  return `You are ${info.label.toLowerCase()}. Maintain balanced meals: lean protein, complex carbs and vegetables.`;
}

/* ── CALORIE HELPERS ────────────────────────────────────── */
function calcTDEE(weight, height, age, gender, activity, goal){
  // Harris-Benedict BMR
  let bmr = gender==='female'
    ? 655 + (9.6*weight) + (1.8*height*100) - (4.7*(age||25))
    : 88.4 + (13.4*weight) + (4.8*height*100) - (5.7*(age||25));
  const mult = {low:1.375, medium:1.55, high:1.725}[activity||'medium'] || 1.55;
  let tdee = bmr * mult;
  if(goal==='loss') tdee -= 500;
  if(goal==='gain') tdee += 300;
  return Math.round(tdee);
}
function calcMacros(kcal, goal){
  let p,c,f;
  if(goal==='loss')    { p=0.40; f=0.30; c=0.30; }
  else if(goal==='gain'){ p=0.30; f=0.25; c=0.45; }
  else                  { p=0.30; f=0.25; c=0.45; }
  return { protein:Math.round(kcal*p/4), carbs:Math.round(kcal*c/4), fat:Math.round(kcal*f/9) };
}
function todayFoodLog(){
  const today = new Date().toDateString();
  return S.foodlog.filter(e=>e.date===today);
}
function logTotals(){
  return todayFoodLog().reduce((a,e)=>({ kcal:a.kcal+e.kcal, p:a.p+e.p, c:a.c+e.c, f:a.f+e.f }), {kcal:0,p:0,c:0,f:0});
}

/* ── RENDER ENGINE ──────────────────────────────────────── */
function renderPage(id){
  const main = document.getElementById('main');
  main.innerHTML='';
  const div = document.createElement('div');
  div.className='page';
  main.appendChild(div);
  const pages = { dashboard, bmi, calories, meal, ai, grocery, workout, measurements, progress, habits, settings };
  if(pages[id]) pages[id](div);
}

/* ═══════════════════════════════════════════════════════════
   PAGES
═══════════════════════════════════════════════════════════ */

/* ── DASHBOARD ──────────────────────────────────────────── */
function dashboard(el){
  const user = getCurrentUser();
  const name = user ? user.name.split(' ')[0] : null;
  const done = Object.values(S.habits).filter(Boolean).length;
  const totals = logTotals();

  el.innerHTML=`
    <div class="dash-greeting">${name ? `Hey, <span>${name}</span> 👋` : 'Your Fitness OS 💪'}</div>
    <p class="muted" style="margin-bottom:22px">${name ? "Ready to crush today's goals?" : 'Sign in to save progress. Or explore freely.'}</p>

    ${S.settings.showTips ? `<div class="tip-bar"><i class="fa-solid fa-lightbulb"></i> Pro tip: Calculate your BMI first → get a meal plan → log your food → track progress.</div>` : ''}

    <div class="stat-row">
      <div class="stat-box"><div class="stat-label">BMI</div><div class="stat-val">${S.bmi ? S.bmi.toFixed(1) : '—'}</div><div class="stat-sub">${S.bmi ? interpretBMI(S.bmi).label : 'Not calculated'}</div></div>
      <div class="stat-box"><div class="stat-label">Calories Today</div><div class="stat-val">${totals.kcal}</div><div class="stat-sub">kcal logged</div></div>
      <div class="stat-box"><div class="stat-label">Water</div><div class="stat-val">${S.water}</div><div class="stat-sub">/ 8 glasses</div></div>
      <div class="stat-box"><div class="stat-label">Habits</div><div class="stat-val">${done}</div><div class="stat-sub">/ 4 done today</div></div>
    </div>

    <div class="gauto">
      ${[
        {page:'bmi',icon:'fa-weight-scale',title:'BMI Calculator',desc:'Know your body status and get a tailored plan.'},
        {page:'calories',icon:'fa-fire',title:'Calories & Macros',desc:'Track daily food intake and hit your targets.'},
        {page:'meal',icon:'fa-utensils',title:'Weekly Meal Plan',desc:'7-day Indian diet plans matched to your BMI.'},
        {page:'ai',icon:'fa-robot',title:'AI Meal Advisor',desc:'Chat with AI for personalised meal suggestions.'},
        {page:'grocery',icon:'fa-basket-shopping',title:'Grocery Planner',desc:'Smart grocery list from fitness food categories.'},
        {page:'workout',icon:'fa-dumbbell',title:'Workout Planner',desc:'7-day training split with exercises and sets.'},
        {page:'measurements',icon:'fa-ruler',title:'Body Measurements',desc:'Track waist, arms, chest and other metrics.'},
        {page:'progress',icon:'fa-chart-line',title:'Progress Chart',desc:'Visualise your BMI and weight trend over time.'},
      ].map(c=>`
        <div class="dash-card" onclick="goPageProtected('${c.page}')">
          <div class="dash-card-icon"><i class="fa-solid ${c.icon}"></i></div>
          <h3>${c.title}</h3>
          <p>${c.desc}</p>
        </div>
      `).join('')}
    </div>
  `;
}

/* ── BMI PAGE ───────────────────────────────────────────── */
function bmi(el){
  el.innerHTML=`
    <div class="ph"><h1>⚖ BMI Calculator</h1><p>Calculate your BMI and get a personalised diet recommendation.</p></div>
    <div class="g2">
      <div class="card">
        <div class="field"><label>Weight (kg)</label><input type="number" id="bW" placeholder="70" min="30" max="250"></div>
        <div class="field"><label>Height (m)</label><input type="number" id="bH" step="0.01" placeholder="1.75"></div>
        <div class="field"><label>Fitness Goal</label>
          <select id="bG"><option value="maintain">Maintain</option><option value="loss">Lose Fat</option><option value="gain">Build Muscle</option></select>
        </div>
        <div class="field"><label>Age</label><input type="number" id="bA" placeholder="25"></div>
        <div class="field"><label>Gender</label>
          <select id="bGender"><option value="male">Male</option><option value="female">Female</option></select>
        </div>
        <div class="field"><label>Activity</label>
          <select id="bAct"><option value="low">Low</option><option value="medium" selected>Medium</option><option value="high">High</option></select>
        </div>
        <button class="btn-main w100 mt12" onclick="doBMI()"><i class="fa-solid fa-calculator"></i> Calculate</button>
      </div>
      <div id="bmiResultBox" class="card" style="display:flex;flex-direction:column;justify-content:center;gap:14px;min-height:240px">
        <p class="muted" style="font-size:14px">Enter your details and click Calculate.</p>
      </div>
    </div>
  `;
}

function doBMI(){
  const w=parseFloat(document.getElementById('bW').value);
  const h=parseFloat(document.getElementById('bH').value);
  const goal=document.getElementById('bG').value;
  const age=parseInt(document.getElementById('bA').value)||25;
  const gender=document.getElementById('bGender').value;
  const act=document.getElementById('bAct').value;
  const box=document.getElementById('bmiResultBox');
  if(!w||!h||h<1||h>2.5){ box.innerHTML='<p style="color:var(--red)">Enter valid weight and height.</p>'; return; }

  const bmi=calcBMIVal(w,h);
  const info=interpretBMI(bmi);
  const tdee=calcTDEE(w,h,age,gender,act,goal);
  const macros=calcMacros(tdee,goal);
  S.bmi=bmi; S.goal=goal;

  box.innerHTML=`
    <div>
      <div class="stat-label">Your BMI</div>
      <div class="bmi-big">${bmi.toFixed(1)}</div>
    </div>
    <span class="badge" style="background:${info.color}22;color:${info.color}">${info.label}</span>
    <div class="bmi-track"><div class="bmi-fill" style="width:${Math.min(info.pct,100)}%;background:${info.color}"></div></div>
    <div class="bmi-labels"><span>Under</span><span>Normal</span><span>Over</span><span>Obese</span></div>
    <p style="font-size:13px;color:var(--muted);border-left:2px solid var(--bora);padding-left:12px;line-height:1.6">${getDietAdvice(info,goal)}</p>
    <div style="margin-top:4px">
      <div class="stat-label" style="margin-bottom:8px">Daily Calorie Target</div>
      <div style="display:flex;gap:10px;flex-wrap:wrap">
        <div style="text-align:center"><div style="font-size:22px;font-weight:800;color:var(--accent);font-family:'JetBrains Mono',monospace">${tdee}</div><div class="stat-sub">kcal/day</div></div>
        <div style="text-align:center"><div style="font-size:22px;font-weight:800;color:#60a5fa;font-family:'JetBrains Mono',monospace">${macros.protein}g</div><div class="stat-sub">protein</div></div>
        <div style="text-align:center"><div style="font-size:22px;font-weight:800;color:#fbbf24;font-family:'JetBrains Mono',monospace">${macros.carbs}g</div><div class="stat-sub">carbs</div></div>
        <div style="text-align:center"><div style="font-size:22px;font-weight:800;color:#f87171;font-family:'JetBrains Mono',monospace">${macros.fat}g</div><div class="stat-sub">fat</div></div>
      </div>
    </div>
    <button class="btn-outline" style="margin-top:6px" onclick="goPage('meal')">See Meal Plan <i class="fa-solid fa-arrow-right"></i></button>
  `;
}

/* ── CALORIES PAGE ──────────────────────────────────────── */
function calories(el){
  const user=getCurrentUser();
  const w=parseFloat(user?.weight||70), h=parseFloat(user?.height||1.75), age=parseInt(user?.age||25);
  const gender=user?.gender||'male', act=user?.activity||'medium', goal=S.goal||'maintain';
  const tdee=calcTDEE(w,h,age,gender,act,goal);
  const macros=calcMacros(tdee,goal);
  const totals=logTotals();
  const remaining=Math.max(0,tdee-totals.kcal);
  const pct=n=>Math.min(100,Math.round(n/tdee*100));

  el.innerHTML=`
    <div class="ph"><h1>🔥 Calories & Macros</h1><p>Track today's food intake against your targets.</p></div>
    <div class="g2">
      <div>
        <div class="card" style="margin-bottom:16px">
          <div class="section-label">Daily Targets</div>
          <div class="macro-grid">
            <div class="macro-box"><div class="macro-val" style="color:var(--accent)">${tdee}</div><div class="macro-lbl">Calories</div></div>
            <div class="macro-box"><div class="macro-val" style="color:#60a5fa">${macros.protein}g</div><div class="macro-lbl">Protein</div></div>
            <div class="macro-box"><div class="macro-val" style="color:#fbbf24">${macros.carbs}g</div><div class="macro-lbl">Carbs</div></div>
          </div>
          <div class="macro-bar-row" style="margin-top:14px">
            <div>
              <div class="mbar-label"><span>Calories</span><span>${totals.kcal} / ${tdee} kcal</span></div>
              <div class="mbar"><div class="mbar-fill" style="width:${pct(totals.kcal)}%;background:var(--accent)"></div></div>
            </div>
            <div>
              <div class="mbar-label"><span>Protein</span><span>${totals.p}g / ${macros.protein}g</span></div>
              <div class="mbar"><div class="mbar-fill" style="width:${Math.min(100,Math.round(totals.p/macros.protein*100))}%;background:#60a5fa"></div></div>
            </div>
            <div>
              <div class="mbar-label"><span>Carbs</span><span>${totals.c}g / ${macros.carbs}g</span></div>
              <div class="mbar"><div class="mbar-fill" style="width:${Math.min(100,Math.round(totals.c/macros.carbs*100))}%;background:#fbbf24"></div></div>
            </div>
            <div>
              <div class="mbar-label"><span>Fat</span><span>${totals.f}g / ${macros.fat}g</span></div>
              <div class="mbar"><div class="mbar-fill" style="width:${Math.min(100,Math.round(totals.f/macros.fat*100))}%;background:#f87171"></div></div>
            </div>
          </div>
          <p style="margin-top:12px;font-size:13px;color:var(--muted)">Remaining: <strong style="color:var(--accent)">${remaining} kcal</strong></p>
        </div>

        <div class="card">
          <div class="section-label">Add Food</div>
          <div class="field"><label>Search Food</label>
            <select id="foodSelect" style="width:100%;margin-bottom:10px">
              <option value="">Choose food…</option>
              ${FOODS_DB.map((f,i)=>`<option value="${i}">${f.name} — ${f.kcal} kcal</option>`).join('')}
            </select>
          </div>
          <div class="field"><label>Servings</label><input type="number" id="foodServings" value="1" min="0.5" step="0.5"></div>
          <button class="btn-main" onclick="addFood()"><i class="fa-solid fa-plus"></i> Add to Log</button>
        </div>
      </div>

      <div class="card">
        <div class="flex-between" style="margin-bottom:12px">
          <div class="section-label" style="margin-bottom:0">Today's Food Log</div>
          <button class="btn-danger btn-sm" onclick="clearFoodLog()"><i class="fa-solid fa-trash"></i> Clear</button>
        </div>
        <div class="food-log" id="foodLog">${renderFoodLog()}</div>
      </div>
    </div>
  `;
}

function renderFoodLog(){
  const today=todayFoodLog();
  if(!today.length) return '<div class="empty-msg"><i class="fa-solid fa-bowl-food" style="font-size:24px;display:block;margin-bottom:8px"></i>No food logged today.</div>';
  return today.map((e,i)=>`
    <div class="food-item">
      <div>
        <div>${e.name}</div>
        <div class="food-macros">P: ${e.p}g · C: ${e.c}g · F: ${e.f}g</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span class="kcal">${e.kcal} kcal</span>
        <button class="btn-icon" onclick="removeFood(${i})" title="Remove"><i class="fa-solid fa-xmark"></i></button>
      </div>
    </div>
  `).join('');
}

function addFood(){
  const sel=document.getElementById('foodSelect');
  const srv=parseFloat(document.getElementById('foodServings').value)||1;
  if(!sel.value){ return; }
  const f=FOODS_DB[parseInt(sel.value)];
  S.foodlog.push({
    name:`${f.name} ×${srv}`, date:new Date().toDateString(),
    kcal:Math.round(f.kcal*srv), p:Math.round(f.p*srv*10)/10,
    c:Math.round(f.c*srv*10)/10, f:Math.round(f.f*srv*10)/10
  });
  save.foodlog();
  goPage('calories');
}

function removeFood(idx){
  const today=new Date().toDateString();
  let i=-1, count=0;
  S.foodlog.forEach((e,j)=>{ if(e.date===today){ if(count===idx) i=j; count++; } });
  if(i>=0) S.foodlog.splice(i,1);
  save.foodlog();
  goPage('calories');
}

function clearFoodLog(){
  const today=new Date().toDateString();
  S.foodlog=S.foodlog.filter(e=>e.date!==today);
  save.foodlog();
  goPage('calories');
}

/* ── MEAL PAGE ──────────────────────────────────────────── */
function meal(el){
  if(!S.bmi){
    el.innerHTML=`
      <div class="ph"><h1>🍽 Weekly Meal Plan</h1><p>Calculate your BMI first to get a personalized plan.</p></div>
      <div class="card" style="text-align:center;padding:40px">
        <i class="fa-solid fa-weight-scale" style="font-size:36px;color:var(--dim);display:block;margin-bottom:14px"></i>
        <p class="muted" style="margin-bottom:16px">No BMI data yet.</p>
        <button class="btn-main" onclick="goPage('bmi')">Calculate BMI <i class="fa-solid fa-arrow-right"></i></button>
      </div>`;
    return;
  }
  const info=interpretBMI(S.bmi);
  const plan=getMealPlan(info.key, S.goal);
  const emojis=['🌅','☀️','🌿','🌇','🌙','🍃','🎉'];
  const daysHtml=Object.keys(plan.days).map((day,i)=>`
    <div class="day-card">
      <h4>${emojis[i]||'📅'} ${day}</h4>
      <ul>${plan.days[day].map(m=>`<li>${m}</li>`).join('')}</ul>
    </div>
  `).join('');

  el.innerHTML=`
    <div class="ph"><h1>🍽 Weekly Meal Plan</h1><p>Based on your BMI (${S.bmi.toFixed(1)} – ${info.label}) and goal: ${S.goal}.</p></div>
    <div class="tip-bar"><i class="fa-solid fa-info-circle"></i><strong>${plan.title}:</strong>&nbsp;${plan.note}</div>
    <div class="week-grid">${daysHtml}</div>
  `;
}

/* ── AI MEAL PAGE ───────────────────────────────────────── */
function ai(el){
  el.innerHTML=`
    <div class="ph"><h1>🤖 AI Meal Advisor</h1><p>Chat with Gemini AI for personalised nutrition advice, meal ideas and diet tips.</p></div>
    <div class="card">
      <div class="ai-quick" id="aiQuick">
        ${['Suggest a high-protein breakfast','Low-calorie dinner ideas for weight loss','Pre-workout meal ideas','Post-workout recovery meals','Vegetarian muscle-building meals','Indian food for fat loss'].map(q=>`<button onclick="sendAI('${q}')">${q}</button>`).join('')}
      </div>
      <div class="ai-chat" id="aiChat">
        <div class="ai-msg bot">Hi! I'm your AI nutrition advisor 🥗 Ask me anything about meals, macros, diet plans or nutrition. Use the quick prompts above or type your own question below!</div>
      </div>
      <div class="ai-input-row">
        <input type="text" id="aiInput" placeholder="Ask about meals, nutrition, diet tips…" onkeydown="if(event.key==='Enter')sendAI()">
        <button class="btn-main" id="aiSendBtn" onclick="sendAI()"><i class="fa-solid fa-paper-plane"></i></button>
      </div>
    </div>
  `;

  // Restore chat history
  if(S.aiHistory.length){
    const chat=document.getElementById('aiChat');
    chat.innerHTML='';
    S.aiHistory.forEach(m=>{
      const div=document.createElement('div');
      div.className=`ai-msg ${m.role==='user'?'user':'bot'}`;
      div.innerHTML=m.content;
      chat.appendChild(div);
    });
    chat.scrollTop=chat.scrollHeight;
  }
}

async function sendAI(preset){
  const input=document.getElementById('aiInput');
  const chat=document.getElementById('aiChat');
  const sendBtn=document.getElementById('aiSendBtn');
  const text=preset||input.value.trim();
  if(!text||!chat) return;
  if(input) input.value='';

  // User bubble
  const userBubble=document.createElement('div');
  userBubble.className='ai-msg user';
  userBubble.textContent=text;
  chat.appendChild(userBubble);
  S.aiHistory.push({role:'user', content:text});

  // Loader
  const loader=document.createElement('div');
  loader.className='ai-msg bot';
  loader.innerHTML='<div class="ai-loader"><span></span><span></span><span></span></div>';
  chat.appendChild(loader);
  chat.scrollTop=chat.scrollHeight;
  if(sendBtn) sendBtn.disabled=true;

  // Build context from state
  const context=[
    S.bmi ? `User BMI: ${S.bmi.toFixed(1)} (${interpretBMI(S.bmi).label})` : '',
    S.goal ? `User goal: ${S.goal}` : '',
  ].filter(Boolean).join('. ');

  // Real AI API Call
  try {
    const res = await fetch('http://127.0.0.1:8000/api/chat/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        message: text, 
        context: context,
        email: getCurrent() // Send email so backend can find the user's key
      })
    });
    
    loader.remove();
    
    if (res.ok) {
      const data = await res.json();
      const reply = data.reply || "";
      const botBubble = document.createElement('div');
      botBubble.className = 'ai-msg bot';
      botBubble.innerHTML = reply
        .replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>')
        .replace(/\n/g,'<br>');
      chat.appendChild(botBubble);
      S.aiHistory.push({role:'assistant', content:botBubble.innerHTML});
    } else {
      const data = await res.json();
      const errBubble = document.createElement('div');
      errBubble.className = 'ai-msg bot';
      errBubble.innerHTML = `⚠️ ${data.error || 'Could not connect to real AI. Please check your API key in Settings.'}`;
      chat.appendChild(errBubble);
    }
  } catch(err) {
    loader.remove();
    const errBubble = document.createElement('div');
    errBubble.className = 'ai-msg bot';
    errBubble.innerHTML = '⚠️ Network error. Is the Django backend running?';
    chat.appendChild(errBubble);
  }
  
  chat.scrollTop = chat.scrollHeight;
  if(sendBtn) sendBtn.disabled = false;
}

/* ── GROCERY PAGE ───────────────────────────────────────── */
function grocery(el){
  const catsHtml=Object.keys(GROCERY).map(cat=>`
    <div class="cat-card">
      <h4>${cat}</h4>
      ${GROCERY[cat].map(item=>`<div class="cat-item" onclick="addGrocery('${item}')"><span>${item}</span><span class="plus">+</span></div>`).join('')}
    </div>
  `).join('');

  el.innerHTML=`
    <div class="ph"><h1>🛒 Grocery Planner</h1><p>Click items to add, or type your own.</p></div>
    <div class="grocery-wrap">
      <div>
        <div class="section-label">Food Categories</div>
        <div class="cat-grid">${catsHtml}</div>
      </div>
      <div class="my-list">
        <h3><i class="fa-solid fa-list-check" style="color:var(--accent)"></i> My List <span class="badge b-green" id="gCount">${S.grocery.length}</span></h3>
        <div class="g-input-row">
          <input type="text" id="gInput" placeholder="Add custom item…" onkeydown="if(event.key==='Enter')addGrocery()">
          <button class="btn-main btn-sm" onclick="addGrocery()"><i class="fa-solid fa-plus"></i></button>
        </div>
        <div class="g-items" id="gItems">${renderGroceryItems()}</div>
        ${S.grocery.length ? `<button class="btn-danger btn-sm" style="margin-top:10px;width:100%" onclick="clearGrocery()"><i class="fa-solid fa-trash"></i> Clear All</button>` : ''}
      </div>
    </div>
  `;
}

function renderGroceryItems(){
  if(!S.grocery.length) return '<div class="empty-msg"><i class="fa-solid fa-cart-plus" style="font-size:22px;display:block;margin-bottom:8px"></i>Your list is empty.</div>';
  return S.grocery.map((item,i)=>`
    <div class="g-item">
      <span>${item}</span>
      <button class="g-rm" onclick="removeGrocery(${i})"><i class="fa-solid fa-xmark"></i></button>
    </div>
  `).join('');
}

function addGrocery(name){
  if(!name){
    const inp=document.getElementById('gInput');
    name=inp?.value.trim();
    if(!name) return;
    if(inp) inp.value='';
  }
  if(S.grocery.includes(name)) return;
  S.grocery.push(name);
  save.grocery();
  const el=document.getElementById('gItems');
  const cnt=document.getElementById('gCount');
  if(el) el.innerHTML=renderGroceryItems();
  if(cnt) cnt.textContent=S.grocery.length;
}

function removeGrocery(i){
  S.grocery.splice(i,1);
  save.grocery();
  const el=document.getElementById('gItems');
  const cnt=document.getElementById('gCount');
  if(el) el.innerHTML=renderGroceryItems();
  if(cnt) cnt.textContent=S.grocery.length;
}

function clearGrocery(){
  S.grocery=[];
  save.grocery();
  goPage('grocery');
}

/* ── WORKOUT PAGE ───────────────────────────────────────── */
let timerInterval=null, timerSec=0;

function workout(el){
  const days=Object.keys(WORKOUT);
  const tabsHtml=days.map(d=>`<button class="day-tab" id="dt-${d}" onclick="showDay('${d}')">${d}</button>`).join('');
  el.innerHTML=`
    <div class="ph"><h1>💪 Workout Planner</h1><p>Select a day to see your training focus and exercises.</p></div>
    <div class="workout-wrap">
      <div class="day-tabs">${tabsHtml}</div>
      <div>
        <div class="workout-detail" id="wDetail"><p class="muted">Select a day to begin.</p></div>
        <div class="timer-bar">
          <i class="fa-solid fa-stopwatch" style="color:var(--accent)"></i>
          <div class="timer-display" id="timerDisp">00:00</div>
          <div style="display:flex;gap:8px;margin-left:auto">
            <button class="btn-outline btn-sm" onclick="startTimer()"><i class="fa-solid fa-play"></i></button>
            <button class="btn-outline btn-sm" onclick="pauseTimer()"><i class="fa-solid fa-pause"></i></button>
            <button class="btn-outline btn-sm" onclick="resetTimer()"><i class="fa-solid fa-rotate-left"></i></button>
          </div>
        </div>
      </div>
    </div>
  `;
  showDay('Monday');
}

function showDay(day){
  document.querySelectorAll('.day-tab').forEach(t=>t.classList.remove('active'));
  const tab=document.getElementById('dt-'+day);
  if(tab) tab.classList.add('active');
  const data=WORKOUT[day];
  const tagClass={Push:'b-green',Pull:'b-blue',Legs:'b-amber',Full:'b-green',Arms:'b-amber',Rest:'b-red'}[data.tag]||'b-green';
  const box=document.getElementById('wDetail');
  if(!box) return;
  box.innerHTML=`
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:14px">
      <div class="w-focus">${day}</div>
      <span class="badge ${tagClass}">${data.tag}</span>
    </div>
    <p style="font-size:13px;color:var(--muted);margin-bottom:14px">Focus: <strong style="color:var(--text)">${data.focus}</strong></p>
    <div class="ex-list">
      ${data.exercises.map((ex,i)=>`
        <div class="ex-row">
          <div class="ex-num">${i+1}</div>
          <div><div class="ex-name">${ex.n}</div><div class="ex-detail">${ex.d}</div></div>
        </div>
      `).join('')}
    </div>
  `;
}

function startTimer(){
  if(timerInterval) return;
  timerInterval=setInterval(()=>{
    timerSec++;
    const m=String(Math.floor(timerSec/60)).padStart(2,'0');
    const s=String(timerSec%60).padStart(2,'0');
    const el=document.getElementById('timerDisp');
    if(el) el.textContent=`${m}:${s}`;
  },1000);
}
function pauseTimer(){ clearInterval(timerInterval); timerInterval=null; }
function resetTimer(){ pauseTimer(); timerSec=0; const el=document.getElementById('timerDisp'); if(el) el.textContent='00:00'; }

/* ── MEASUREMENTS PAGE ──────────────────────────────────── */
const MEASURES=[
  {key:'chest',   label:'Chest',   unit:'cm'},
  {key:'waist',   label:'Waist',   unit:'cm'},
  {key:'hips',    label:'Hips',    unit:'cm'},
  {key:'neck',    label:'Neck',    unit:'cm'},
  {key:'larm',    label:'Left Arm',unit:'cm'},
  {key:'rarm',    label:'Right Arm',unit:'cm'},
  {key:'lthigh',  label:'Left Thigh',unit:'cm'},
  {key:'rthigh',  label:'Right Thigh',unit:'cm'},
  {key:'weight',  label:'Weight',  unit:'kg'},
  {key:'bodyfat', label:'Body Fat',unit:'%'},
];

function measurements(el){
  const cur=S.measurements.current||{};
  const history=S.measurements.history||[];

  el.innerHTML=`
    <div class="ph"><h1>📏 Body Measurements</h1><p>Track your body metrics to see real progress beyond the scale.</p></div>
    <div class="g2">
      <div class="card">
        <div class="section-label">Today's Measurements</div>
        <div class="measure-grid">
          ${MEASURES.map(m=>`
            <div class="measure-box">
              <label>${m.label}</label>
              <div class="measure-input-wrap">
                <input type="number" id="m-${m.key}" value="${cur[m.key]||''}" placeholder="—" step="0.1" min="0">
                <span class="measure-unit">${m.unit}</span>
              </div>
            </div>
          `).join('')}
        </div>
        <button class="btn-main" style="margin-top:16px" onclick="saveMeasurements()"><i class="fa-solid fa-floppy-disk"></i> Save Entry</button>
      </div>

      <div class="card">
        <div class="section-label">History</div>
        <div id="mHistory">
          ${history.length===0 ? '<div class="empty-msg">No entries yet.</div>' :
            history.slice().reverse().slice(0,10).map(entry=>`
              <div class="mlog-row">
                <i class="fa-solid fa-calendar-check" style="color:var(--accent)"></i>
                <div>
                  ${MEASURES.filter(m=>entry[m.key]).map(m=>`<strong>${m.label}:</strong> ${entry[m.key]}${m.unit}`).join(' · ')||'No data'}
                </div>
                <span class="mlog-date">${entry.date}</span>
              </div>
            `).join('')
          }
        </div>
      </div>
    </div>
  `;
}

function saveMeasurements(){
  const cur={};
  MEASURES.forEach(m=>{ const v=document.getElementById('m-'+m.key)?.value; if(v) cur[m.key]=parseFloat(v); });
  if(!Object.keys(cur).length){ alert('Enter at least one measurement.'); return; }
  S.measurements.current=cur;
  if(!S.measurements.history) S.measurements.history=[];
  S.measurements.history.push({...cur, date:new Date().toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'})});
  save.measurements();
  goPage('measurements');
}

/* ── PROGRESS PAGE ──────────────────────────────────────── */
function progress(el){
  el.innerHTML=`
    <div class="ph"><h1>📊 Progress Tracker</h1><p>Log your weight regularly to track your BMI trend over time.</p></div>
    <div class="g2">
      <div>
        <div class="card" style="margin-bottom:16px">
          <div class="section-label">New Check-in</div>
          <div class="field"><label>Weight (kg)</label><input type="number" id="pW" placeholder="70" step="0.1"></div>
          <div class="field"><label>Height (m)</label><input type="number" id="pH" step="0.01" placeholder="1.75"></div>
          <div class="field"><label>Goal</label>
            <select id="pG"><option value="maintain">Maintain</option><option value="loss">Fat Loss</option><option value="gain">Muscle Gain</option></select>
          </div>
          <div id="pResult" class="card-accent" style="display:none;margin-top:12px"></div>
          <button class="btn-main w100 mt12" onclick="logProgress()"><i class="fa-solid fa-plus"></i> Log Check-in</button>
        </div>

        <div class="chart-wrap">
          <div class="section-label">BMI Trend</div>
          <div class="chart-canvas-wrap">
            <canvas id="progressChart"></canvas>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="flex-between" style="margin-bottom:12px">
          <div class="section-label" style="margin-bottom:0">History</div>
          ${S.progress.length ? `<button class="btn-danger btn-sm" onclick="clearProgress()"><i class="fa-solid fa-trash"></i></button>` : ''}
        </div>
        <div class="progress-entries" id="pEntries">${renderProgressEntries()}</div>
      </div>
    </div>
  `;
  drawChart();
}

function renderProgressEntries(){
  if(!S.progress.length) return '<div class="empty-msg">No entries yet. Log your first check-in!</div>';
  return S.progress.slice().reverse().map((e,i)=>{
    const info=interpretBMI(e.bmi);
    return `<div class="pentry">
      <div class="pentry-bmi" style="color:${info.color}">${e.bmi.toFixed(1)}</div>
      <div><span class="badge" style="background:${info.color}22;color:${info.color}">${info.label}</span><div style="font-size:11px;color:var(--muted);margin-top:3px">${e.weight}kg · ${e.goal}</div></div>
      <span class="pentry-date">${e.date}</span>
      <button class="pentry-rm" onclick="removeProgress(${S.progress.length-1-i})"><i class="fa-solid fa-xmark"></i></button>
    </div>`;
  }).join('');
}

function logProgress(){
  const w=parseFloat(document.getElementById('pW').value);
  const h=parseFloat(document.getElementById('pH').value);
  const goal=document.getElementById('pG').value;
  if(!w||!h||h<1) return;
  const bmi=calcBMIVal(w,h);
  const info=interpretBMI(bmi);
  const res=document.getElementById('pResult');
  res.style.display='block';
  res.innerHTML=`<div style="font-size:36px;font-weight:800;font-family:'JetBrains Mono',monospace;color:${info.color}">${bmi.toFixed(1)}</div>
    <span class="badge" style="background:${info.color}22;color:${info.color}">${info.label}</span>
    <p style="font-size:13px;color:var(--muted);margin-top:8px">${getDietAdvice(info,goal)}</p>`;
  S.bmi=bmi; S.goal=goal;
  S.progress.push({bmi,weight:w,height:h,goal,date:new Date().toLocaleDateString('en-IN',{day:'numeric',month:'short'})});
  save.progress();
  const entries=document.getElementById('pEntries');
  if(entries) entries.innerHTML=renderProgressEntries();
  drawChart();
}

function removeProgress(i){
  S.progress.splice(i,1);
  save.progress();
  goPage('progress');
}

function clearProgress(){
  if(!confirm('Clear all progress entries?')) return;
  S.progress=[];
  save.progress();
  goPage('progress');
}

function drawChart(){
  const canvas=document.getElementById('progressChart');
  if(!canvas||!S.progress.length) return;
  const ctx=canvas.getContext('2d');
  const dpr=window.devicePixelRatio||1;
  const rect=canvas.parentElement.getBoundingClientRect();
  canvas.width=rect.width*dpr;
  canvas.height=200*dpr;
  canvas.style.width=rect.width+'px';
  canvas.style.height='200px';
  ctx.scale(dpr,dpr);

  const W=rect.width, H=200;
  const pts=S.progress.slice(-12);
  const bmis=pts.map(p=>p.bmi);
  const mn=Math.min(...bmis)-2, mx=Math.max(...bmis)+2;
  const px=(i)=> 40+(W-60)/(pts.length-1||1)*i;
  const py=(b)=> 20+(H-40)*(1-(b-mn)/(mx-mn||1));

  // Grid
  const isDark=document.documentElement.getAttribute('data-theme')!=='light';
  ctx.strokeStyle=isDark?'rgba(255,255,255,0.05)':'rgba(0,0,0,0.06)';
  ctx.lineWidth=1;
  [0,0.25,0.5,0.75,1].forEach(t=>{
    const y=20+(H-40)*t;
    ctx.beginPath(); ctx.moveTo(40,y); ctx.lineTo(W-20,y); ctx.stroke();
    ctx.fillStyle=isDark?'rgba(255,255,255,0.25)':'rgba(0,0,0,0.35)';
    ctx.font='10px JetBrains Mono,monospace';
    ctx.fillText((mx-(mx-mn)*t).toFixed(1),2,y+4);
  });

  // Line
  if(pts.length>1){
    const grad=ctx.createLinearGradient(0,0,W,0);
    grad.addColorStop(0,'#3ecfb0');
    grad.addColorStop(1,'#63dc8c');
    ctx.strokeStyle=grad; ctx.lineWidth=2.5; ctx.lineJoin='round'; ctx.lineCap='round';
    ctx.beginPath();
    pts.forEach((p,i)=>{ i===0 ? ctx.moveTo(px(i),py(p.bmi)) : ctx.lineTo(px(i),py(p.bmi)); });
    ctx.stroke();

    // Fill
    ctx.beginPath();
    pts.forEach((p,i)=>{ i===0 ? ctx.moveTo(px(i),py(p.bmi)) : ctx.lineTo(px(i),py(p.bmi)); });
    ctx.lineTo(px(pts.length-1),H-20); ctx.lineTo(px(0),H-20); ctx.closePath();
    const fillGrad=ctx.createLinearGradient(0,20,0,H-20);
    fillGrad.addColorStop(0,'rgba(99,220,140,0.2)');
    fillGrad.addColorStop(1,'rgba(99,220,140,0)');
    ctx.fillStyle=fillGrad; ctx.fill();
  }

  // Dots + labels
  pts.forEach((p,i)=>{
    ctx.beginPath();
    ctx.arc(px(i),py(p.bmi),4,0,Math.PI*2);
    ctx.fillStyle='#63dc8c'; ctx.fill();
    ctx.fillStyle=isDark?'rgba(255,255,255,0.5)':'rgba(0,0,0,0.45)';
    ctx.font='9px Outfit,sans-serif'; ctx.textAlign='center';
    ctx.fillText(p.date,px(i),H-6);
  });
}

/* ── HABITS PAGE ────────────────────────────────────────── */
const HABIT_LIST=[
  {key:'sleep',   icon:'fa-moon',           label:'Slept 7+ hours',             sub:'Recovery drives results'},
  {key:'steps',   icon:'fa-person-walking', label:'8,000+ steps / 30 min walk', sub:'Daily movement boosts metabolism'},
  {key:'protein', icon:'fa-egg',            label:'Hit protein target today',    sub:'Protein preserves muscle'},
  {key:'junk',    icon:'fa-ban',            label:'No junk / sugary drinks',     sub:'Cutting sugar accelerates fat loss'},
];

function habits(el){
  const done=Object.values(S.habits).filter(Boolean).length;
  const glassesHtml=Array.from({length:8},(_,i)=>`
    <div class="glass ${i<S.water?'on':''}" onclick="setWater(${i+1})" title="${i+1} glass${i>0?'es':''}">💧</div>
  `).join('');
  const habitsHtml=HABIT_LIST.map(h=>`
    <div class="hitem ${S.habits[h.key]?'done':''}" onclick="toggleHabit('${h.key}')">
      <div class="hcheck">${S.habits[h.key]?'<i class="fa-solid fa-check"></i>':''}</div>
      <div>
        <div class="htext"><i class="fa-solid ${h.icon}" style="color:var(--accent);margin-right:6px;font-size:12px"></i>${h.label}</div>
        <div class="hsub">${h.sub}</div>
      </div>
    </div>
  `).join('');

  el.innerHTML=`
    <div class="ph"><h1>💧 Daily Habits</h1><p>Small consistent habits build extraordinary results.</p></div>
    ${done===4 ? '<div class="streak-badge"><i class="fa-solid fa-fire"></i> All habits done today! Amazing! 🎉</div>' : ''}
    <div class="habits-layout">
      <div class="water-card">
        <div class="water-title">Water Intake</div>
        <p class="water-sub">${S.water} of 8 glasses today — ${S.water>=8?'🎉 Target hit!':S.water>=5?'Good progress!':'Keep going!'}</p>
        <div class="glasses-grid" id="glassesGrid">${glassesHtml}</div>
        <div class="water-btns">
          <button class="btn-main btn-sm" onclick="changeWater(1)"><i class="fa-solid fa-plus"></i> Add Glass</button>
          <button class="btn-outline btn-sm" onclick="changeWater(-1)"><i class="fa-solid fa-minus"></i></button>
          <button class="btn-outline btn-sm" onclick="resetWater()"><i class="fa-solid fa-rotate-left"></i> Reset</button>
        </div>
      </div>
      <div class="habit-card">
        <h3><i class="fa-solid fa-check-double" style="color:var(--accent)"></i> Daily Habits
          <span class="badge b-green">${done}/4</span>
        </h3>
        <div class="habit-list">${habitsHtml}</div>
      </div>
    </div>
  `;
}

function setWater(n){ S.water=n; save.water(); goPage('habits'); }
function changeWater(d){ S.water=Math.max(0,Math.min(10,S.water+d)); save.water(); goPage('habits'); }
function resetWater(){ S.water=0; save.water(); goPage('habits'); }
function toggleHabit(key){ S.habits[key]=!S.habits[key]; save.habits(); goPage('habits'); }

/* ── SETTINGS PAGE ──────────────────────────────────────── */
function settings(el){
  const s=S.settings;
  const user=getCurrentUser();
  el.innerHTML=`
    <div class="ph"><h1>⚙ Settings</h1><p>Update your profile and app preferences.</p></div>
    <div class="settings-layout">
      <div class="settings-card">
        <h3><i class="fa-solid fa-user"></i> Profile</h3>
        <div class="field"><label>Full Name</label><input type="text" id="sName" value="${s.name||user?.name||''}" placeholder="Your name"></div>
        <div class="field"><label>Age</label><input type="number" id="sAge" value="${s.age||user?.age||''}" placeholder="25"></div>
        <div class="field"><label>Gender</label>
          <select id="sGender">
            <option value="">Select</option>
            <option value="male" ${(s.gender||user?.gender)==='male'?'selected':''}>Male</option>
            <option value="female" ${(s.gender||user?.gender)==='female'?'selected':''}>Female</option>
            <option value="other" ${(s.gender||user?.gender)==='other'?'selected':''}>Other</option>
          </select>
        </div>
        <div class="field"><label>Activity Level</label>
          <select id="sActivity">
            <option value="low" ${(s.activity||user?.activity)==='low'?'selected':''}>Low (desk job)</option>
            <option value="medium" ${(s.activity||user?.activity)==='medium'?'selected':''}>Medium (3–4x/week)</option>
            <option value="high" ${(s.activity||user?.activity)==='high'?'selected':''}>High (daily intense)</option>
          </select>
        </div>
        <button class="btn-main w100 mt12" onclick="saveSettingsForm()"><i class="fa-solid fa-floppy-disk"></i> Save Profile</button>
      </div>

      <div class="settings-card">
        <h3><i class="fa-solid fa-robot" style="color:var(--accent)"></i> Real AI Connection</h3>
        <p class="muted" style="font-size:12.5px;margin-bottom:14px">To activate the <strong>Real Gemini AI Advisor</strong>, enter your API key below.</p>
        <div class="field"><label>Gemini API Key</label>
          <div class="pw-row">
            <input type="password" id="sGeminiKey" value="${S.settings.gemini_api_key||''}" placeholder="Paste your API key here…">
            <button type="button" class="eye" onclick="togglePw('sGeminiKey','sGeminiEye')"><i class="fa-solid fa-eye" id="sGeminiEye"></i></button>
          </div>
          <p class="muted" style="font-size:11px;margin-top:6px">Get a free key from <a href="https://aistudio.google.com/app/apikey" target="_blank" style="color:var(--accent)">Google AI Studio</a>.</p>
        </div>
        <div id="aiTestMsg" class="fmsg" style="margin-bottom:10px"></div>
        <button class="btn-main w100" id="btnTestAI" onclick="testAIConnection()"><i class="fa-solid fa-vial"></i> Test & Save Connection</button>

        <hr style="border:none;border-top:1px solid var(--border);margin:20px 0">
        <h3><i class="fa-solid fa-sliders"></i> Preferences</h3>
        <div class="toggle-row">
          <div class="toggle-lbl">Show dashboard tips<small>Beginner guidance on dashboard</small></div>
          <div class="toggle ${s.showTips?'on':''}" id="toggleTips" onclick="flipToggle('showTips','toggleTips')"></div>
        </div>
        <div class="toggle-row" style="margin-top:10px">
          <div class="toggle-lbl">Theme<small>Currently: ${document.documentElement.getAttribute('data-theme')==='dark'?'Dark 🌙':'Light ☀️'}</small></div>
          <button class="btn-outline btn-sm" onclick="toggleTheme();goPage('settings')"><i class="fa-solid fa-circle-half-stroke"></i> Toggle</button>
        </div>

        ${isLoggedIn() ? `
          <hr style="border:none;border-top:1px solid var(--border);margin:16px 0">
          <h3 style="margin-bottom:10px"><i class="fa-solid fa-right-from-bracket"></i> Account</h3>
          <p class="muted" style="font-size:13px;margin-bottom:12px">Signed in as <strong>${getCurrent()}</strong></p>
          <button class="btn-danger" onclick="logout()"><i class="fa-solid fa-right-from-bracket"></i> Sign Out</button>
        ` : `
          <hr style="border:none;border-top:1px solid var(--border);margin:16px 0">
          <p class="muted" style="font-size:13px;margin-bottom:10px">Sign in to sync your data across sessions.</p>
          <button class="btn-main" onclick="openAuth('login')">Sign In / Register</button>
        `}

        <hr style="border:none;border-top:1px solid var(--border);margin:16px 0">
        <h3 style="margin-bottom:10px"><i class="fa-solid fa-trash"></i> Data</h3>
        <button class="btn-danger btn-sm" onclick="resetAllData()"><i class="fa-solid fa-rotate-left"></i> Reset All App Data</button>
      </div>
    </div>
  `;
}

function flipToggle(key, toggleId){
  S.settings[key]=!S.settings[key];
  document.getElementById(toggleId)?.classList.toggle('on', S.settings[key]);
}

async function saveSettingsForm(){
  S.settings.name     = document.getElementById('sName')?.value.trim()||'';
  S.settings.age      = document.getElementById('sAge')?.value||'';
  S.settings.gender   = document.getElementById('sGender')?.value||'';
  S.settings.activity = document.getElementById('sActivity')?.value||'';
  // We don't save gemini key here as it has its own test/save button now
  save.settings();
  
  if (isLoggedIn()) {
    try {
      await fetch('http://127.0.0.1:8000/api/update-settings/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: getCurrent(), name: S.settings.name, age: S.settings.age, gender: S.settings.gender, activity: S.settings.activity })
      });
    } catch(e) {}
  }

  const btn=document.querySelector('[onclick="saveSettingsForm()"]');
  if(btn){ btn.innerHTML='<i class="fa-solid fa-check"></i> Saved!'; setTimeout(()=>btn.innerHTML='<i class="fa-solid fa-floppy-disk"></i> Save Profile',1500); }
}

async function testAIConnection(){
  const key = document.getElementById('sGeminiKey')?.value.trim()||'';
  const msg = document.getElementById('aiTestMsg');
  const btn = document.getElementById('btnTestAI');
  if(!key){ msg.textContent='Please enter an API key.'; msg.className='fmsg err'; return; }
  
  msg.textContent='Testing connection…'; msg.className='fmsg';
  btn.disabled=true;

  try {
    const res = await fetch('http://127.0.0.1:8000/api/test-ai/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ gemini_api_key: key })
    });
    const data = await res.json();
    
    if (res.ok) {
      S.settings.gemini_api_key = key;
      save.settings();
      if(isLoggedIn()){
        await fetch('http://127.0.0.1:8000/api/update-settings/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: getCurrent(), gemini_api_key: key })
        });
      }
      msg.textContent='✅ Connection Successful! AI is live.'; msg.className='fmsg ok';
    } else {
      msg.textContent = '❌ ' + (data.error || 'Connection failed.'); msg.className='fmsg err';
    }
  } catch(err) {
    msg.textContent='❌ Network error. Is the backend running?'; msg.className='fmsg err';
  }
  btn.disabled=false;
}

function resetAllData(){
  if(!confirm('This will reset ALL app data. Are you sure?')) return;
  [K.grocery,K.water,K.habits,K.settings,K.progress,K.measurements,K.foodlog].forEach(k=>localStorage.removeItem(k));
  S.bmi=null; S.goal='maintain'; S.aiHistory=[];
  load();
  goPage('dashboard');
}

/* ── INIT ───────────────────────────────────────────────── */
window.addEventListener('DOMContentLoaded',()=>{
  applyTheme(localStorage.getItem(K.theme)||'dark');
  load();
  updateAuthUI();
  goPage('dashboard');

  // Sidebar nav
  document.querySelectorAll('.nav-item').forEach(btn=>{
    btn.addEventListener('click',()=>goPageProtected(btn.dataset.page));
  });

  // Auth modal
  document.getElementById('tabLogin').addEventListener('click',()=>switchModalTab('login'));
  document.getElementById('tabReg').addEventListener('click',()=>switchModalTab('reg'));
  document.getElementById('modalClose').addEventListener('click',closeAuth);
  document.getElementById('authModal').addEventListener('click',e=>{ if(e.target===e.currentTarget) closeAuth(); });
  document.getElementById('loginForm').addEventListener('submit',handleLogin);
  document.getElementById('regForm').addEventListener('submit',handleRegister);
  document.getElementById('lEye').addEventListener('click',()=>togglePw('lPass','lEyeI'));
  document.getElementById('rEye').addEventListener('click',()=>togglePw('rPass','rEyeI'));

  // Theme
  document.getElementById('themeBtn').addEventListener('click',toggleTheme);
  document.getElementById('themeBtnMobile').addEventListener('click',toggleTheme);

  // Mobile sidebar
  document.getElementById('hamburger').addEventListener('click',openSidebar);
  document.getElementById('sidebarOverlay').addEventListener('click',closeSidebar);

  // Redraw chart on resize
  window.addEventListener('resize',()=>{ if(S.page==='progress') drawChart(); });
});



// =============================================
// JUMPSTART TRACKER - ALL PROGRAM DATA
// =============================================

const START_DATE = '2026-04-11'; // Day 1

// 14-day meal plan (1 person, halved from 2-person plan)
const MEAL_PLAN = {
  1: {
    breakfast: { name: 'Oatmeal w/ banana', recipe: 'hot-oatmeal', note: 'Add 1 tbsp ground flaxseed' },
    snack1:    { name: 'Carrots & Hummus', recipe: 'hummus' },
    lunch:     { name: 'Veggie Stir-Fry', recipe: 'stir-fry', note: 'Serve over brown rice' },
    snack2:    { name: 'Apple' },
    dinner:    { name: 'Mushrooms & Lentils over Quinoa', recipe: 'mushrooms-lentils-quinoa' },
    snack3:    { name: 'Fruit Salad', note: 'Use seasonal fresh fruit' }
  },
  2: {
    breakfast: { name: 'Overnight Oats w/ blueberries', recipe: 'overnight-oats', note: 'Prep the night before' },
    snack1:    { name: 'Kale Chips', recipe: 'kale-chips' },
    lunch:     { name: 'Mushrooms & Lentils over Quinoa', recipe: 'mushrooms-lentils-quinoa', note: 'Leftovers from Day 1 dinner' },
    snack2:    { name: 'Banana' },
    dinner:    { name: 'Curry', recipe: 'curry', note: 'Serve over brown rice' },
    snack3:    { name: 'Baked Oat Bars', recipe: 'baked-oat-bars', note: 'Batch bake today for the week' }
  },
  3: {
    breakfast: { name: 'Shredded Wheat', note: 'With plant milk and fruit' },
    snack1:    { name: 'Broccoli & Hummus', recipe: 'hummus' },
    lunch:     { name: 'Curry', recipe: 'curry', note: 'Leftovers from Day 2' },
    snack2:    { name: 'Grapes' },
    dinner:    { name: 'Busy Day Soup', recipe: 'busy-day-soup' },
    snack3:    { name: 'Fruit Sorbet', recipe: 'fruit-sorbet' }
  },
  4: {
    breakfast: { name: 'Greens & Beans w/ toast', note: 'Sauteed greens + canned beans on Ezekiel toast (no pasta)' },
    snack1:    { name: 'Roasted Chickpeas', recipe: 'baked-chickpeas' },
    lunch:     { name: 'Busy Day Soup', recipe: 'busy-day-soup', note: 'Leftovers from Day 3' },
    snack2:    { name: 'Orange' },
    dinner:    { name: 'Sauteed Veggies w/ Whole Grain Pasta', recipe: 'sauteed-veggies' },
    snack3:    { name: 'Fruit Salad' }
  },
  5: {
    breakfast: { name: 'Oatmeal w/ banana', recipe: 'hot-oatmeal' },
    snack1:    { name: 'Carrots & Hummus', recipe: 'hummus' },
    lunch:     { name: 'Sauteed Veggies w/ Whole Grain Pasta', recipe: 'sauteed-veggies', note: 'Leftovers from Day 4' },
    snack2:    { name: 'Strawberries' },
    dinner:    { name: 'Colorful Rice & Lentils', recipe: 'colorful-rice-lentils' },
    snack3:    { name: 'Baked Oat Bars', recipe: 'baked-oat-bars' }
  },
  6: {
    breakfast: { name: 'Overnight Oats w/ blueberries', recipe: 'overnight-oats' },
    snack1:    { name: '4 Bean Salad', recipe: 'four-bean-salad', note: 'Make a batch - great for snacking' },
    lunch:     { name: 'Colorful Rice & Lentils', recipe: 'colorful-rice-lentils', note: 'Leftovers from Day 5' },
    snack2:    { name: 'Apple' },
    dinner:    { name: 'Chickpea Quinoa Salad', recipe: 'chickpea-quinoa-salad' },
    snack3:    { name: 'Fruit Sorbet', recipe: 'fruit-sorbet' }
  },
  7: {
    breakfast: { name: 'Shredded Wheat', note: 'With plant milk and fruit' },
    snack1:    { name: 'Broccoli & Hummus', recipe: 'hummus' },
    lunch:     { name: 'Chickpea Quinoa Salad', recipe: 'chickpea-quinoa-salad', note: 'Leftovers from Day 6' },
    snack2:    { name: 'Banana' },
    dinner:    { name: 'Grain Bowl', recipe: 'grain-bowl' },
    snack3:    { name: 'Fruit Salad' }
  },
  8: {
    breakfast: { name: 'Oatmeal w/ banana', recipe: 'hot-oatmeal' },
    snack1:    { name: 'Carrots & Hummus', recipe: 'hummus' },
    lunch:     { name: 'Veggie Stir-Fry', recipe: 'stir-fry' },
    snack2:    { name: 'Apple' },
    dinner:    { name: 'Red Beans & Rice', recipe: 'red-beans-rice' },
    snack3:    { name: 'Fruit Sorbet', recipe: 'fruit-sorbet' }
  },
  9: {
    breakfast: { name: 'Overnight Oats w/ blueberries', recipe: 'overnight-oats' },
    snack1:    { name: 'Kale Chips', recipe: 'kale-chips' },
    lunch:     { name: 'Red Beans & Rice', recipe: 'red-beans-rice', note: 'Leftovers from Day 8' },
    snack2:    { name: 'Banana' },
    dinner:    { name: 'Pasta Fagioli', recipe: 'pasta-fagioli' },
    snack3:    { name: 'Fruit Salad' }
  },
  10: {
    breakfast: { name: 'Shredded Wheat', note: 'With plant milk and fruit' },
    snack1:    { name: 'Broccoli & Hummus', recipe: 'hummus' },
    lunch:     { name: 'Pasta Fagioli', recipe: 'pasta-fagioli', note: 'Leftovers from Day 9' },
    snack2:    { name: 'Grapes' },
    dinner:    { name: 'Chili Quinoa w/ Sweet Potato', recipe: 'chili-quinoa' },
    snack3:    { name: 'Baked Oat Bars', recipe: 'baked-oat-bars' }
  },
  11: {
    breakfast: { name: 'Greens & Beans w/ toast', note: 'Sauteed greens + canned beans on Ezekiel toast' },
    snack1:    { name: 'Roasted Chickpeas', recipe: 'baked-chickpeas' },
    lunch:     { name: 'Chili Quinoa w/ Sweet Potato', recipe: 'chili-quinoa', note: 'Leftovers from Day 10' },
    snack2:    { name: 'Orange' },
    dinner:    { name: 'Veggie Big Bowl & Rice', note: 'Build a bowl: rice, beans, veggies, salsa' },
    snack3:    { name: 'Fruit Sorbet', recipe: 'fruit-sorbet' }
  },
  12: {
    breakfast: { name: 'Oatmeal w/ banana', recipe: 'hot-oatmeal' },
    snack1:    { name: 'Carrots & Hummus', recipe: 'hummus' },
    lunch:     { name: 'Veggie Big Bowl & Rice', note: 'Leftovers from Day 11' },
    snack2:    { name: 'Strawberries' },
    dinner:    { name: "Dr. Veggie's Favorite Meal", recipe: 'dr-veggies-favorite' },
    snack3:    { name: 'Fruit Salad' }
  },
  13: {
    breakfast: { name: 'Overnight Oats w/ blueberries', recipe: 'overnight-oats' },
    snack1:    { name: '4 Bean Salad', recipe: 'four-bean-salad' },
    lunch:     { name: "Dr. Veggie's Favorite Meal", recipe: 'dr-veggies-favorite', note: 'Leftovers from Day 12' },
    snack2:    { name: 'Apple' },
    dinner:    { name: 'Veggie Pasta w/ White Bean Sauce', recipe: 'veggie-pasta-white-bean' },
    snack3:    { name: 'Baked Oat Bars', recipe: 'baked-oat-bars' }
  },
  14: {
    breakfast: { name: 'Shredded Wheat', note: 'With plant milk and fruit' },
    snack1:    { name: 'Broccoli & Hummus', recipe: 'hummus' },
    lunch:     { name: 'Veggie Pasta w/ White Bean Sauce', recipe: 'veggie-pasta-white-bean', note: 'Leftovers from Day 13' },
    snack2:    { name: 'Banana' },
    dinner:    { name: 'Veggie Stir-Fry', recipe: 'stir-fry' },
    snack3:    { name: 'Fruit Sorbet', recipe: 'fruit-sorbet' }
  }
};

// Daily essentials checklist (same every day)
const DAILY_ESSENTIALS = [
  { id: 'flax', text: 'Take 1 tbsp ground flaxseed (omega-3s)' },
  { id: 'greens', text: 'Eat dark leafy greens (aim for every meal)' },
  { id: 'water', text: 'Drink plenty of water throughout the day' },
  { id: 'legumes', text: 'Include legumes in at least one meal' },
  { id: 'fruit', text: 'Eat whole fruit (not juice)' },
  { id: 'grains', text: 'Include whole grains' },
  { id: 'sodium', text: 'Keep sodium under 2300 mg' },
  { id: 'no-oil', text: 'No added oil today' },
  { id: 'no-animal', text: 'No animal products today' }
];

// Zoom meeting schedule
const ZOOM_MEETINGS = {
  '-3': { title: 'Orientation Session', duration: '2 hours', desc: 'Setting up for success: compliant foods, meal planning, shopping, food prep, reading labels, snacks, medical recommendations.' },
  1:    { title: 'Day 1: Launch Session', duration: '2 hours', desc: 'Small group discussions, presentations on food & chronic disease, behavior change, and living on a WFPB diet.' },
  5:    { title: 'Day 5: Check-In', duration: '1 hour (6:30–7:30 pm ET)', desc: 'Mid-week check-in with medical facilitator for questions and community support.' },
  8:    { title: 'Day 8: Virtual Potluck', duration: '2 hours (1:00–3:00 pm ET)', desc: 'Share a recipe photo with the group! Medical Q&A with facilitator.' },
  12:   { title: 'Day 12: Check-In', duration: '1 hour (6:30–7:30 pm ET)', desc: 'Mid-week check-in with medical facilitator.' },
  15:   { title: 'Day 15: Results & Next Steps', duration: '2 hours (1:00–3:00 pm ET)', desc: 'Complete questionnaires, share results, discuss next steps and transitioning to ongoing WFPB lifestyle.' }
};

// Prep tasks for specific days
const PREP_TASKS = {
  '-3': [
    'Review the Jumpstart Essentials guide',
    'Read through the Jumpstart Recipe Book',
    'Complete your big grocery shop (see Shopping tab)',
    'Set up your pantry with infrastructure items',
    'Discuss with your medical provider about participating',
    'Watch any cooking videos received by email'
  ],
  '-2': [
    'Prep overnight oats for Day 1 or Day 2',
    'Cook a batch of brown rice (stores 5 days in fridge)',
    'Cook a batch of quinoa',
    'Make a batch of hummus',
    'Wash and prep vegetables for the week',
    'Bake a batch of Oat Bars for snacks'
  ],
  '-1': [
    'Prep overnight oats for tomorrow if not done',
    'Make sure you have fruits ready for snacking',
    'Review Day 1 meal plan',
    'Set out ingredients for tomorrow\'s breakfast'
  ],
  1: [
    'Prep lunch items if eating at work',
    'Start soaking beans if cooking from dried'
  ],
  4: [
    'Take stock of fresh produce - anything need using up?',
    'Prep any batch items running low (hummus, rice, etc.)'
  ],
  7: [
    'Week 2 grocery shop (see Shopping tab - Week 2)',
    'Replenish fresh greens and fruit',
    'Cook a fresh batch of brown rice or quinoa',
    'Make another batch of hummus',
    'Bake more Oat Bars if needed'
  ],
  8: [
    'Take a photo of your favorite recipe to share at the Virtual Potluck!',
    'Think about what recipe you want to share with the group'
  ],
  14: [
    'Reflect on your 2-week journey',
    'Think about which meals you want to keep making',
    'Consider getting post-program lab work done'
  ],
  15: [
    'Complete the Program Questionnaire',
    'Complete the Health & Lab Data Questionnaire',
    'Record your weight, blood pressure, cholesterol, and glucose changes',
    'Think about your next steps for continuing WFPB eating'
  ]
};

// Shopping lists
const SHOPPING = {
  week1: {
    'Fresh Produce': [
      { amount: '3 bell peppers', item: 'Bell peppers', purpose: 'Stir-fry, Curry, Sauteed Veggies', trip: 1 },
      { amount: '1 bag (5 oz)', item: 'Arugula', purpose: 'Chickpea Quinoa Salad', trip: 3 },
      { amount: '1 bunch or bag', item: 'Fresh basil or spinach', purpose: 'Sauteed Veggies, Pasta', trip: 2 },
      { amount: '1.5 crowns', item: 'Broccoli', purpose: 'Various recipes, snacks', trip: 2 },
      { amount: '1 bag (1 lb)', item: 'Baby carrots', purpose: 'Snacks with hummus', trip: 1 },
      { amount: '1 bag (1 lb)', item: 'Regular carrots', purpose: 'Curry, Stir-fry, Sauteed Veggies', trip: 1 },
      { amount: '1 bag (15 oz)', item: 'Escarole or greens', purpose: 'Busy Day Soup', trip: 2 },
      { amount: '0.5 lb', item: 'Green beans', purpose: 'Curry, Stir-fry', trip: 1 },
      { amount: '1 bag (16 oz)', item: 'Kale', purpose: 'Kale Chips, Pasta Fagioli', trip: 1 },
      { amount: '1 carton (10 oz)', item: 'Crimini mushrooms', purpose: 'Mushrooms & Lentils', trip: 1 },
      { amount: '1 bunch', item: 'Flat-leaf Italian parsley', purpose: 'Garnish', trip: 2 },
      { amount: '0.5 head', item: 'Red cabbage', purpose: '4 Bean Salad', trip: 3 },
      { amount: '1 bunch', item: 'Scallions/green onion', purpose: 'Stir-fry, garnish', trip: 1 },
      { amount: '1', item: 'Tomato', purpose: 'Salads', trip: 2 },
      { amount: '1', item: 'Zucchini', purpose: 'Curry, Stir-fry, Sauteed Veggies', trip: 1 },
      { amount: '1 large tub (16 oz)', item: 'Spring mix', purpose: 'Green salads', trip: 1 },
      { amount: '1 bag', item: 'Romaine hearts', purpose: 'Green salads', trip: 3 },
      { amount: '2-3 lb', item: 'Potatoes', purpose: 'Snacks, Curry', trip: 1 },
      { amount: '1.5 lb', item: 'Sweet potatoes', purpose: 'Snack, Chili Quinoa', trip: 2 },
      { amount: '1 lb', item: 'Yellow or sweet onions', purpose: 'Various recipes', trip: 1 },
      { amount: '1 small', item: 'Red onion', purpose: 'Colorful Rice & Lentils', trip: 3 },
      { amount: '1 head', item: 'Garlic', purpose: 'Various recipes', trip: 1 },
      { amount: '1 small piece', item: 'Fresh ginger', purpose: 'Curry, Stir-fry', trip: 1 },
      { amount: '1 container', item: 'Strawberries or blueberries', purpose: 'Snacks and desserts', trip: 2 },
      { amount: '5', item: 'Bananas', purpose: 'Breakfast, snacks', trip: 1 },
      { amount: '4-5', item: 'Apples', purpose: 'Snacks', trip: 1 },
      { amount: '3-4', item: 'Oranges or clementines', purpose: 'Snacks', trip: 2 },
      { amount: '1-2', item: 'Lemons', purpose: 'Various recipes', trip: 1 }
    ],
    'Refrigerator & Freezer': [
      { amount: '1 loaf', item: 'Ezekiel 4:9 Bread', purpose: 'Breakfast, snacks, lunches', trip: 1 },
      { amount: '1 bag (16 oz)', item: 'Frozen broccoli', purpose: 'Pasta Fagioli, White Bean Sauce', trip: 2 },
      { amount: '1 bag (10 oz)', item: 'Frozen broccoli/cauliflower mix', purpose: 'Busy Day Soup', trip: 2 },
      { amount: '1 bag (16 oz)', item: 'Frozen corn', purpose: 'Bowls, Chili Quinoa', trip: 3 },
      { amount: '1 bag (12 oz)', item: 'Frozen kale', purpose: 'Pasta Fagioli', trip: 3 },
      { amount: '1 bag (12 oz)', item: 'Frozen mirepoix mix', purpose: 'Busy Day Soup', trip: 2 },
      { amount: '1 bag (16 oz)', item: 'Frozen mixed vegetables', purpose: 'Curry, Colorful Rice', trip: 1 },
      { amount: '1 bag (1 lb)', item: 'Frozen peas', purpose: 'White Bean Sauce, snacks', trip: 3 },
      { amount: '1 bag (1 lb)', item: 'Frozen spinach', purpose: 'Various recipes', trip: 2 },
      { amount: '1.5 lb', item: 'Frozen blueberries', purpose: 'Breakfast and snacks', trip: 1 },
      { amount: '1.5 lb', item: 'Frozen strawberries', purpose: 'Breakfast and snacks', trip: 1 }
    ],
    'Cans, Jars & Shelf Stable': [
      { amount: '2 cans', item: 'Black beans', purpose: '4 Bean Salad, Chili Quinoa', trip: 3 },
      { amount: '2 cans', item: 'Cannellini (white kidney) beans', purpose: 'Pasta Fagioli, White Bean Sauce', trip: 3 },
      { amount: '3 cans', item: 'Chickpeas (garbanzo)', purpose: 'Hummus, Salad, Curry', trip: 1 },
      { amount: '2 cans', item: 'Kidney beans', purpose: '4 Bean Salad, Bowls', trip: 3 },
      { amount: '1 can', item: 'Pinto beans', purpose: 'Pasta Fagioli', trip: 3 },
      { amount: '1 can', item: 'Green beans (no salt)', purpose: '4 Bean Salad', trip: 3 },
      { amount: '2 cans (14.5 oz)', item: 'Diced tomatoes', purpose: 'Curry, Chili Quinoa, Red Beans', trip: 1 },
      { amount: '1 can (14.5 or 28 oz)', item: 'Crushed tomatoes', purpose: 'Beans and Greens', trip: 2 },
      { amount: '1 jar', item: 'Roasted red pepper', purpose: 'Hummus', trip: 1 },
      { amount: '1 jar', item: 'Salsa', purpose: 'Bowls, Chili Quinoa', trip: 3 },
      { amount: '1 bag (1 lb)', item: 'Lentils (dry)', purpose: 'Mushrooms & Lentils, Colorful Rice', trip: 1 },
      { amount: '0.5 lb', item: 'Quinoa', purpose: 'Various recipes', trip: 1 },
      { amount: '1 lb', item: 'Brown rice', purpose: 'Various recipes', trip: 1 },
      { amount: '1.5 lb', item: 'Whole wheat pasta', purpose: 'Pasta Fagioli, Sauteed Veggies', trip: 2 },
      { amount: '1 qt', item: 'Vegetable broth (low sodium)', purpose: 'Busy Day Soup', trip: 2 },
      { amount: '1 carton (42 oz)', item: 'Old-fashioned oatmeal', purpose: 'Breakfast, snacks', trip: 1 },
      { amount: '1 box', item: 'Shredded wheat cereal', purpose: 'Breakfast', trip: 2 }
    ],
    'Natural Food Section': [
      { amount: '1 carton', item: 'Plant milk (unsweetened)', purpose: 'Breakfast, recipes', trip: 1 },
      { amount: '1 box', item: 'Whole wheat crackers', purpose: 'Snacks', trip: 2 }
    ]
  },
  week2: {
    'Fresh Produce - Replenish': [
      { amount: '3', item: 'Bell peppers', purpose: 'Stir-fry, Sauteed Veggies', trip: 1 },
      { amount: '1 crown', item: 'Broccoli', purpose: "Dr. Veggie's Favorite, snacks", trip: 3 },
      { amount: '1 bag', item: 'Baby carrots', purpose: 'Snacks', trip: 1 },
      { amount: '1 large tub', item: 'Spring mix or greens', purpose: 'Salads', trip: 1 },
      { amount: '2-3', item: 'Sweet potatoes', purpose: "Dr. Veggie's Favorite, Chili Quinoa", trip: 2 },
      { amount: '1 lb', item: 'Onions', purpose: 'Various recipes', trip: 1 },
      { amount: '1 head', item: 'Garlic', purpose: 'Various recipes', trip: 1 },
      { amount: '5', item: 'Bananas', purpose: 'Breakfast, snacks', trip: 1 },
      { amount: '4-5', item: 'Apples', purpose: 'Snacks', trip: 2 },
      { amount: '3-4', item: 'Oranges', purpose: 'Snacks', trip: 2 },
      { amount: '1 container', item: 'Strawberries', purpose: 'Snacks', trip: 3 },
      { amount: '1 bunch', item: 'Grapes', purpose: 'Snacks', trip: 2 },
      { amount: '1', item: 'Zucchini', purpose: 'Stir-fry', trip: 1 },
      { amount: '1 carton', item: 'Mushrooms', purpose: 'Stir-fry', trip: 1 },
      { amount: '1', item: 'Red onion', purpose: 'Bean salad, Colorful Rice', trip: 3 },
      { amount: '1-2', item: 'Lemons', purpose: 'Various recipes', trip: 1 }
    ],
    'Cans & Shelf Stable - Replenish': [
      { amount: '2 cans', item: 'Chickpeas', purpose: 'Hummus, Baked Chickpeas', trip: 1 },
      { amount: '1 can', item: 'Black beans', purpose: 'Chili Quinoa, Bean Salad', trip: 2 },
      { amount: '2 cans', item: 'Kidney beans', purpose: 'Red Beans & Rice, Bean Salad', trip: 1 },
      { amount: '1 can', item: 'Cannellini beans', purpose: 'Pasta Fagioli, White Bean Sauce', trip: 1 },
      { amount: '2 cans', item: 'Diced tomatoes', purpose: 'Red Beans, Pasta Fagioli', trip: 1 },
      { amount: '1 can', item: 'Crushed tomatoes', purpose: 'Beans and Greens', trip: 2 },
      { amount: '1 can', item: 'Green beans (no salt)', purpose: 'Bean Salad', trip: 3 }
    ]
  },
  infrastructure: {
    'Condiments & Staples': [
      { amount: '1 bottle', item: 'Low-sodium soy sauce', purpose: '' },
      { amount: '1 bottle', item: 'Cider or red wine vinegar', purpose: '' },
      { amount: '1 bottle', item: 'Balsamic vinegar', purpose: '' },
      { amount: '1 bottle', item: 'Rice vinegar (regular, not seasoned)', purpose: '' },
      { amount: '1 jar/bottle', item: 'Mustard (spicy brown or Dijon)', purpose: '' },
      { amount: '1 bottle (20 oz)', item: 'Ketchup (organic)', purpose: '' },
      { amount: '1 bottle', item: 'Pure maple syrup or agave', purpose: 'Breakfast and snack recipes' },
      { amount: '1 jar/package', item: 'Nutritional yeast (e.g. Bob\'s Red Mill)', purpose: '' },
      { amount: '1 bag', item: 'Ground flaxseed (16 oz)', purpose: '' }
    ]
  },
  spices: {
    'Herbs & Spices': [
      { amount: '1 container', item: 'Chili powder', purpose: '' },
      { amount: '1 container', item: 'Cinnamon', purpose: '' },
      { amount: '1 container', item: 'Curry powder', purpose: '' },
      { amount: '1 container', item: 'Garlic powder', purpose: '' },
      { amount: '1 container', item: 'Onion powder', purpose: '' },
      { amount: '1 container', item: 'Dried basil', purpose: '' },
      { amount: '1 container', item: 'Dried oregano', purpose: '' },
      { amount: '1 container', item: 'Italian seasoning', purpose: '' }
    ]
  }
};

// Food guide data
const FOOD_GUIDE = [
  {
    title: 'The Basics',
    items: [
      { ok: true, text: 'Whole plant foods: legumes, vegetables, fruits, whole grains' },
      { ok: false, text: 'No animal foods: meat, fish, eggs, dairy' }
    ]
  },
  {
    title: 'Grains & Starches',
    items: [
      { ok: true, text: '100% whole grains (including flours)' },
      { ok: true, text: 'Pasta: whole grain or bean-based, no egg' },
      { ok: true, text: 'Bread: whole wheat, no oil (Ezekiel is great)' },
      { ok: true, text: 'Oats: groats, steel cut, rolled, or old-fashioned (skip quick oats)' }
    ]
  },
  {
    title: 'Meat Alternatives',
    items: [
      { ok: true, text: 'Tempeh' },
      { ok: true, text: 'Legumes' },
      { ok: true, text: 'Mushrooms' },
      { ok: false, text: 'No tofu, seitan, soy curls, TVP/TSP, or vegan meats' }
    ]
  },
  {
    title: 'Fats',
    items: [
      { ok: true, text: '1 tbsp/day ground flaxseed (for omega-3s)' },
      { ok: false, text: 'No oil' },
      { ok: false, text: 'No nuts (chestnuts allowed), seeds, nut/seed butters, olives, coconut' }
    ]
  },
  {
    title: 'Sweeteners',
    items: [
      { ok: true, text: 'Up to 1 tbsp/day of maple syrup, agave, molasses, or date syrup/paste' },
      { ok: true, text: 'Dried fruit: up to 1 tbsp/day' },
      { ok: false, text: 'No stevia, monk fruit, or artificial sweeteners' }
    ]
  },
  {
    title: 'Beverages',
    items: [
      { ok: true, text: 'Water, coffee, tea, herbal tea' },
      { ok: true, text: 'Flavored but unsweetened water' },
      { ok: true, text: 'Plant milk: up to 1 cup/day, unsweetened, ~3-4g fat/serving (no coconut)' },
      { ok: false, text: 'No juices, coconut water, sweetened drinks, or smoothies' },
      { ok: false, text: 'No store-bought plant yogurt' }
    ]
  },
  {
    title: 'Other Notes',
    items: [
      { ok: true, text: 'No calorie restrictions - eat whole foods freely' },
      { ok: true, text: 'Condiments okay, minimally processed only' },
      { ok: true, text: 'Small amounts of salt/soy sauce (under 2300 mg/day sodium)' },
      { ok: true, text: 'Alcohol: up to 1/2 serving/day (wine, beer, light beer, kombucha)' },
      { ok: true, text: 'Gluten-free options: brown rice, quinoa, GF oats, GF pastas' }
    ]
  }
];

// Recipes
const RECIPES = {
  'hot-oatmeal': {
    name: 'Hot Oatmeal (Banana or Blueberry)',
    category: 'breakfast',
    serves: '1',
    ingredients: [
      '1/2 cup dry oatmeal (rolled or old-fashioned)',
      '1 medium banana or 1/2 cup fresh or frozen blueberries',
      '1 tbsp ground flaxseed',
      '1/4 tsp cinnamon (optional)',
      '1 cup water OR 1/2 cup water + 1/2 cup plant milk'
    ],
    directions: 'Cut or mash the fruit in a microwave-safe bowl. Add the oatmeal and cinnamon and mix. Add the water (or water/milk) and mix again. Microwave until cooked (approx. 2-3 minutes). Sprinkle 1 tbsp flax meal on top.'
  },
  'overnight-oats': {
    name: 'Overnight Oats',
    category: 'breakfast',
    serves: '1',
    ingredients: [
      '1/2 cup dry oatmeal (rolled or old-fashioned)',
      '1 medium banana or 1/2 cup blueberries',
      '1 tbsp ground flaxseed',
      '1/4 tsp cinnamon (optional)',
      '1/2 cup water or 1/2 cup plant milk'
    ],
    directions: 'Cut or mash the fruit and place in a 16 oz sealable jar or container. Add the oatmeal, flax meal, cinnamon, and liquid, and mix. Store in the refrigerator overnight. Eat cold or warm. Optionally add up to 1 tbsp of maple syrup or agave.',
    tip: 'Prep the night before for a grab-and-go breakfast!'
  },
  'baked-oat-bars': {
    name: 'Baked Oat Bars (Banana or Blueberry)',
    category: 'breakfast',
    serves: '4-6 bars',
    ingredients: [
      '2 cups dry oatmeal (rolled or old-fashioned)',
      '4 medium-large bananas or 2 cups blueberries',
      '4 tbsp ground flaxseed',
      '1 tsp cinnamon (optional)'
    ],
    directions: '1. Mash the fruit in a mixing bowl.\n2. Add the oatmeal, flax meal, cinnamon and mix.\n3. Line an 8x8" or 9x9" baking pan with parchment paper.\n4. Spread the mixture into the pan.\n5. Bake for 25 minutes at 350 degrees.\n6. Let cool for 10 minutes. Eat warm or store in the fridge for on-the-go breakfast.',
    tip: 'Make these a savory snack by using veggies instead of fruit.'
  },
  'stir-fry': {
    name: 'Stir-Fry',
    category: 'main',
    serves: '2-4',
    ingredients: [
      'A variety of vegetables: carrots, broccoli, green beans, bell pepper, zucchini, pea pods, snow peas',
      'Water, white wine, sherry, or vegetable broth for sauteing',
      'Brown rice to serve over'
    ],
    directions: '1. In a large frying pan or pot, in a small amount of liquid, saute a variety of vegetables.\n2. Go from the hardest vegetables to the softest (carrots first, then broccoli, bell pepper, zucchini, pea pods).\n3. When the stir-fry is done, add the stir-fry sauce, bring to a simmer, and let it thicken. Serve over brown rice.',
    sauce: 'Stir-Fry Sauce: Whisk 2 tbsp cornstarch into 1.5 cups water. Add 2 tbsp rice or cider vinegar, 1 tbsp soy sauce, 1 tsp each minced garlic and ginger, 2-3 sliced scallions. Bring to a boil to thicken.'
  },
  'mushrooms-lentils-quinoa': {
    name: 'Mushrooms and Lentils over Quinoa',
    category: 'main',
    serves: '2-4',
    ingredients: [
      '1 large onion',
      '2 cups mushroom pieces',
      '1/2 tsp garlic powder',
      '1.5 cups chopped spinach',
      '1/4 cup water',
      '1 cup cooked lentils',
      '1 cup cooked quinoa'
    ],
    directions: 'Chop and saute onions and mushrooms (use liquid in any pan, or high-heat dry saute in stainless steel). Add in garlic, spinach, water and lentils. Simmer for 5 minutes and serve over quinoa.',
    tip: 'Choose an ethnic flavor profile from the Guide to Herbs and Spices.'
  },
  'curry': {
    name: 'Curry',
    category: 'soup',
    serves: '2-4',
    ingredients: [
      '1/2 cup water, white wine, or sherry',
      '1 onion, diced',
      '1 clove garlic, minced',
      '1 tbsp minced fresh ginger (optional)',
      '15 oz crushed or diced tomatoes',
      'At least 4 cups diced vegetables (potatoes, green beans, cauliflower, carrots, or zucchini), or 4 cups frozen mixed vegetables',
      '1 can chickpeas, drained',
      '1 tsp garam masala or curry powder',
      '1/8 tsp salt'
    ],
    directions: '1. Saute onion, garlic, and ginger in water or wine until transparent, about 2 minutes.\n2. Add the tomatoes and vegetables, cook until all the vegetables are done, about 20 minutes.\n3. Watch the pot and add more liquid as needed.\n4. Add the chickpeas and spices, heat through. Serve with brown rice.'
  },
  'busy-day-soup': {
    name: 'Busy Day Soup',
    category: 'soup',
    serves: '4+',
    ingredients: [
      '2 quarts vegetable broth',
      '1 bag frozen mirepoix',
      '2 cans cooked beans (your choice)',
      '1 bag frozen broccoli/cauliflower mix',
      '2 cloves garlic, minced',
      '1 tablespoon seasoning of your choice',
      '1 bag frozen spinach, chopped'
    ],
    directions: '1. Place all ingredients (minus the beans and spinach) in a large pot.\n2. Simmer for 20-25 minutes until vegetables are tender.\n3. Add beans and chopped spinach and simmer 5 more minutes until heated through.'
  },
  'chili-quinoa': {
    name: 'Chili Quinoa with Sweet Potato and Corn',
    category: 'soup',
    serves: '2-4',
    ingredients: [
      '1 medium onion',
      '3 cloves fresh garlic',
      '3 tsp chili powder',
      '1 can diced tomatoes (14.5 oz)',
      '1.5 cups or 1 can cooked black beans',
      '1 cup yellow corn',
      '1 large sweet potato (precook in microwave or oven)',
      '1 cup cooked quinoa'
    ],
    directions: '1. Saute onion and add crushed garlic.\n2. Add chili powder and diced tomatoes and simmer 5 minutes.\n3. Add the beans, corn, and sweet potato, heat through.\n4. Combine and serve over the quinoa.'
  },
  'red-beans-rice': {
    name: 'Red Beans and Brown Rice',
    category: 'main',
    serves: '2-4',
    ingredients: [
      '1 medium onion',
      '3 cloves fresh garlic',
      '1 can diced tomatoes (14.5 oz)',
      '1.5 cups chopped spinach',
      '1 tablespoon nutritional yeast',
      '1/4 tsp cayenne pepper',
      '1.5 cups or 1 can kidney beans',
      '1.5 cups cooked brown rice'
    ],
    directions: 'Saute onion and add crushed garlic. Add the diced tomatoes, spinach, nutritional yeast and cayenne pepper. Simmer for 5 minutes. Add the beans and bring to a slow simmer. Serve over rice.'
  },
  'pasta-fagioli': {
    name: 'Pasta Fagioli',
    category: 'main',
    serves: '2-4',
    ingredients: [
      '1 large onion',
      '3 cloves fresh garlic',
      '1 can diced tomatoes (14.5 oz)',
      '1/2 tsp dried oregano',
      '1/2 tsp dried basil',
      '3 cups chopped broccoli',
      '1 cup chopped kale',
      '1.5 cups or 1 can pinto beans',
      '2 cups cooked whole wheat spaghetti'
    ],
    directions: 'Saute onion and add crushed garlic. Add the diced tomatoes and herbs. Simmer 5 minutes. Add broccoli, kale, and beans. Simmer 5 more minutes. Serve with spaghetti.'
  },
  'colorful-rice-lentils': {
    name: 'Colorful Rice and Lentils',
    category: 'main',
    serves: '4-6',
    ingredients: [
      '1 red onion, chopped',
      '1 large or 6 oz small portobello mushrooms, chopped',
      '1 bag (16 oz) frozen peas and carrots',
      '4 cups cooked brown rice (about 2 cups uncooked)',
      '1/2 cup cooked lentils',
      '1 tbsp liquid aminos or tamari',
      'Chopped fresh parsley'
    ],
    directions: '1. Combine mushrooms and onion in a skillet with a little water or white wine, saute about 5 minutes.\n2. Add 1-2 tbsp aminos or tamari and a little water if needed.\n3. Add frozen peas and carrots; heat through.\n4. Add cooked rice and lentils and another tablespoon of aminos if desired.'
  },
  'chickpea-quinoa-salad': {
    name: 'Chickpea Quinoa Salad',
    category: 'salad',
    serves: '2-3',
    ingredients: [
      '2 packed cups arugula',
      '1 large tomato, diced',
      '1.5 cups cooked garbanzo beans / chickpeas',
      '2 tbsp balsamic vinegar',
      '1/2 to 1 tsp fresh lemon juice',
      '1/4 tsp each dried basil and dried oregano',
      '1 cup quinoa, cooked and cooled'
    ],
    directions: 'Combine all ingredients and mix well.'
  },
  'four-bean-salad': {
    name: '4 Bean Salad',
    category: 'salad',
    serves: '6+',
    ingredients: [
      '1 can each (rinsed and drained): green beans, black beans, kidney beans, garbanzo beans',
      '1 medium red onion, chopped',
      '1 small or half a large head of red cabbage, shredded',
      '1 recipe Italian dressing (balsamic vinaigrette)'
    ],
    directions: 'Place all ingredients in a large casserole dish or storage container and stir to mix. Best when marinated for 8 hours. Makes a great snack or side dish.'
  },
  'grain-bowl': {
    name: 'Grain Bowl',
    category: 'main',
    serves: '2-4',
    ingredients: [
      '3 cups cooked quinoa',
      'Sauteed veggies',
      'Greens of choice, chopped',
      '1.5 cups beans of choice (garbanzo)',
      '1 can beets, no salt, sliced (reserve liquid)',
      'Hummus dressing'
    ],
    directions: '1. Place quinoa and water/broth in a saucepan, bring to a boil, reduce heat, set timer for 15 minutes and cover.\n2. Stir once or twice. All liquid should be absorbed.\n3. Place quinoa in the bottom of a large salad bowl. Cover with sauteed veggies, add greens, sprinkle with beans and hummus dressing.'
  },
  'dr-veggies-favorite': {
    name: "Dr. Veggie's Favorite Meal",
    category: 'main',
    serves: '2-4',
    ingredients: [
      '2 to 4 sweet potatoes',
      '1 large head of broccoli'
    ],
    directions: 'Cut the broccoli into small florets. Let the florets sit at room temperature for 30 to 60 min. (allows sulforaphane to develop). Poke holes in the sweet potatoes with a fork. Place on a cookie sheet or baking pan. Bake at 400 degrees for about 45 minutes. Towards the end, steam the broccoli in a small amount of water for 4 to 5 minutes. Serve hot; sprinkle some soy sauce and rice vinegar, and some garlic or onion powder, on the broccoli.'
  },
  'veggie-pasta-white-bean': {
    name: 'Veggie Pasta with White Bean Sauce',
    category: 'main',
    serves: '2-4',
    ingredients: [
      '1.5 cups or 1 can white beans (drained and rinsed)',
      '1 tbsp nutritional yeast',
      '1/2 tsp garlic powder',
      '1/4 cup water',
      '1 cup green peas',
      '1.5 cups chopped spinach',
      '2 cups chopped broccoli',
      '2 cups cooked whole wheat spaghetti noodles'
    ],
    directions: 'Blend beans with nutritional yeast, garlic, and water in a blender or food processor. If using fresh broccoli, steam for about 5 minutes. In a saucepan, mix and heat the peas, spinach, steamed or frozen broccoli and sauce, until all veggies are heated through. Pour over spaghetti.'
  },
  'hummus': {
    name: 'Hummus',
    category: 'sauce',
    serves: '6+',
    ingredients: [
      '1 can chickpeas, drained (reserve liquid)',
      '2/3 cup roasted red peppers from a jar (optional)',
      '1 garlic clove, chopped',
      '2-3 tbsp fresh lemon juice',
      '1/4 cup chickpea liquid, or more as needed',
      '1 tsp soy sauce or 1/8 tsp salt'
    ],
    directions: 'Combine all ingredients in a food processor. Add more chickpea liquid if too thick, or thin it down with more liquid to use as a salad dressing.',
    tip: 'For white bean hummus, substitute a can of white beans for the chickpeas.'
  },
  'kale-chips': {
    name: 'Kale Chips',
    category: 'snack',
    serves: '2-4',
    ingredients: [
      '1-2 bunches regular curly kale'
    ],
    directions: 'Wash the kale and dry with a salad spinner and/or clean dish towel. Ensure the kale is completely dry. Tear into 3"x3" pieces. Place in a single layer on a baking sheet. Preheat the oven to 250 degrees. Bake for approximately 30 minutes. Remove and cool.'
  },
  'baked-chickpeas': {
    name: 'Baked Chickpeas',
    category: 'snack',
    serves: '4+',
    ingredients: [
      'Chickpeas (cooked or canned, no salt added)',
      'Cinnamon or other salt & sugar free seasoning',
      '(For ranch flavor: apple cider, dill, garlic and onion powder)'
    ],
    directions: '1. Preheat oven to 425.\n2. Drain and rinse chickpeas.\n3. Place on a lint-free towel and roll dry.\n4. Remove any loose skins.\n5. Place on a baking sheet with edges.\n6. Bake for about 30 minutes.\n7. Remove, toss with seasonings.\n8. Return to oven for 15 minutes.'
  },
  'fruit-sorbet': {
    name: 'Fruit Sorbet',
    category: 'dessert',
    serves: '8',
    ingredients: [
      'Choose any: 1 cup frozen raspberries, pineapple, mangos, peaches, cherries, blueberries',
      '1 ripe banana',
      '1/2 cup coconut water, beet juice or orange juice (as needed)'
    ],
    directions: '1. Choose whichever fruits you like.\n2. Let fruits sit at room temp for about 10 minutes.\n3. The banana gives creamy texture. Use just enough liquid to make the food processor work.\n4. Blend until creamy smooth.\n5. Leftovers can go back in the freezer.'
  },
  'sauteed-veggies': {
    name: 'Sauteed Veggies',
    category: 'main',
    serves: '2-4',
    ingredients: [
      '4 red bell peppers, seeded and sliced',
      '2 large yellow onion, sliced',
      '1 zucchini cut in 1/2" cubes',
      '4 carrots, cut in coins'
    ],
    directions: 'Saute veggies in a small amount of veggie broth or vinegar. Divide in half and use half to make a Grain Bowl, and the other half for Pasta & Veggies.'
  }
};

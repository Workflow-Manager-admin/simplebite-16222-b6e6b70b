import React, { useState } from 'react';
import './App.css';

// PUBLIC_INTERFACE
function RecipeCard({ title, steps }) {
  /** Card to display a recipe and its steps */
  return (
    <div className="recipe-card">
      <div className="recipe-title">{title}</div>
      <ol className="recipe-steps">
        {steps.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ol>
    </div>
  );
}

// PUBLIC_INTERFACE
function CategoryColumn({ categoryName, recipes, accentColor }) {
  /** Category column with list of recipes */
  return (
    <section className="category-column">
      <header
        className="category-header"
        style={{ background: accentColor, color: '#333', borderRadius: '8px 8px 0 0' }}
      >
        {categoryName}
      </header>
      <div className="category-recipes">
        {recipes.map((recipe, idx) => (
          <RecipeCard key={idx} title={recipe.title} steps={recipe.steps} />
        ))}
      </div>
    </section>
  );
}

// ---- STUB DATA -----

const categories = [
  {
    key: 'five_ingredient',
    name: '5-Ingredient Recipes Only',
    accent: '#FFD600',
    recipes: [
      {
        title: 'Easy Tomato Pasta',
        steps: [
          'Boil pasta in salted water.',
          'Heat olive oil, add garlic, sauté.',
          'Add canned tomatoes, simmer 10m.',
          'Toss pasta with sauce and basil.',
          'Top with Parmesan and serve.'
        ]
      },
      {
        title: 'Quick Veggie Omelette',
        steps: [
          'Beat eggs, season with salt & pepper.',
          'Chop and sauté veggies in pan.',
          'Pour eggs into pan.',
          'Cook until set, fold, and serve.',
          'Optional: Add cheese before folding.'
        ]
      },
      {
        title: 'Peanut Butter Banana Toast',
        steps: [
          'Toast bread slices.',
          'Spread peanut butter on toast.',
          'Slice bananas and arrange on top.',
          'Drizzle with honey (optional).',
          'Sprinkle with cinnamon, serve.'
        ]
      },
      {
        title: 'Chicken Avocado Salad',
        steps: [
          'Dice cooked chicken breast.',
          'Cube avocado and tomatoes.',
          'Mix together in bowl.',
          'Dress with olive oil, lemon, salt.',
          'Toss and enjoy.'
        ]
      },
      {
        title: 'Garlic Butter Shrimp',
        steps: [
          'Melt butter in pan.',
          'Add minced garlic, sauté 1 min.',
          'Add shrimp, cook until pink.',
          'Season with salt, pepper, lemon.',
          'Serve with bread or rice.'
        ]
      },
      {
        title: 'Caprese Skewers',
        steps: [
          'Skewer cherry tomatoes, mozzarella, basil.',
          'Drizzle with olive oil and balsamic.',
          'Sprinkle with salt & pepper.',
          'Chill briefly before serving.',
          'Enjoy as appetizer or snack.'
        ]
      },
      {
        title: 'Vegetable Stir-Fry',
        steps: [
          'Slice assorted veggies.',
          'Heat oil, add veggies to pan.',
          'Stir-fry at high heat 5-7 mins.',
          'Add soy sauce; stir well.',
          'Serve over cooked rice.'
        ]
      },
      {
        title: 'Berry Yogurt Parfait',
        steps: [
          'Layer yogurt in glass.',
          'Add berries and granola.',
          'Repeat layers as desired.',
          'Drizzle honey over top.',
          'Serve cold.'
        ]
      },
      {
        title: 'Turkey Wraps',
        steps: [
          'Lay out a tortilla.',
          'Add turkey, cheese, lettuce.',
          'Spread with mustard or mayo.',
          'Roll up tightly.',
          'Slice and serve.'
        ]
      },
      {
        title: 'Mini Pita Pizzas',
        steps: [
          'Top pita bread with sauce.',
          'Add shredded cheese, toppings.',
          'Bake at 400°F for 10 min.',
          'Slice when cool.',
          'Enjoy your pizza bites.'
        ]
      }
    ]
  },
  {
    key: 'student_meals',
    name: 'Student Meals',
    accent: '#FFD600',
    recipes: [
      {
        title: 'Microwave Mac & Cheese',
        steps: [
          'Combine pasta, water in mug.',
          'Microwave 2-3 minutes, stir.',
          'Add cheese and milk, mix well.',
          'Microwave 30s more, stir.',
          'Let cool, enjoy!'
        ]
      },
      {
        title: 'Tuna Mayo Rice Bowl',
        steps: [
          'Cook rice.',
          'Mix tuna with mayo, season.',
          'Scoop rice into bowl.',
          'Top with tuna mixture.',
          'Add soy sauce, if desired.'
        ]
      },
      {
        title: 'Egg Fried Rice',
        steps: [
          'Heat oil in pan.',
          'Add leftover rice.',
          'Push aside, scramble egg.',
          'Mix with rice, season, serve.',
          'Optional: Add veggies/soy.'
        ]
      },
      {
        title: 'Pita Hummus Pockets',
        steps: [
          'Spread hummus in pita.',
          'Add sliced cucumber, tomato.',
          'Stuff with greens.',
          'Drizzle olive oil, fold.',
          'Easy and portable!'
        ]
      },
      {
        title: 'Ramen Upgrade',
        steps: [
          'Cook instant ramen noodles.',
          'Add mixed frozen veggies.',
          'Crack egg in, cook 2 min.',
          'Top with green onions.',
          'Enjoy hearty meal!'
        ]
      },
      {
        title: 'Breakfast Burrito',
        steps: [
          'Scramble eggs in pan.',
          'Warm tortilla.',
          'Add eggs, cheese, salsa.',
          'Roll into burrito.',
          'Serve warm.'
        ]
      },
      {
        title: 'Bagel Pizza',
        steps: [
          'Halve bagel, add sauce.',
          'Sprinkle cheese & toppings.',
          'Toast/bake until bubbly.',
          'Cool slightly before handling.',
          'Eat as quick meal.'
        ]
      },
      {
        title: 'Lazy Chili',
        steps: [
          'Heat canned chili in pot.',
          'Add drained beans.',
          'Stir in corn, simmer.',
          'Serve with bread.',
          'Top with cheese.'
        ]
      },
      {
        title: 'Apple PB Sandwich',
        steps: [
          'Slice apple in rings.',
          'Spread with peanut butter.',
          'Top with granola.',
          'Put another apple slice on.',
          'Repeat for sandwich effect.'
        ]
      },
      {
        title: 'Oven Quesadilla',
        steps: [
          'Sprinkle cheese on tortilla.',
          'Fold in half, bake on sheet.',
          'Cook at 375°F for 7-8 min.',
          'Cut into triangles.',
          'Serve with salsa.'
        ]
      }
    ]
  },
  {
    key: 'vegan_galaxy',
    name: 'Vegan & Plant-Based Galaxy',
    accent: '#FFD600',
    recipes: [
      {
        title: 'Lentil Curry',
        steps: [
          'Cook lentils until soft.',
          'Sauté onion, garlic in pan.',
          'Add spices & tomatoes.',
          'Mix in lentils, simmer.',
          'Serve with rice or bread.'
        ]
      },
      {
        title: 'Chickpea Avocado Salad',
        steps: [
          'Mash chickpeas and avocado.',
          'Add lemon, salt, and pepper.',
          'Mix in chopped parsley.',
          'Serve on toast or in wrap.',
          'Great for lunch boxes!'
        ]
      },
      {
        title: 'Tofu Stir-Fry',
        steps: [
          'Cube tofu, pat dry.',
          'Fry in oil until golden.',
          'Add chopped vegetables.',
          'Season with soy sauce.',
          'Serve over rice or noodles.'
        ]
      },
      {
        title: 'Vegan Chili',
        steps: [
          'Sauté onion in pot.',
          'Add beans, tomatoes, corn.',
          'Season with spices.',
          'Simmer 20 minutes.',
          'Top with avocado.'
        ]
      },
      {
        title: 'Seitan Fajitas',
        steps: [
          'Slice seitan and veggies.',
          'Fry in oil with fajita spices.',
          'Serve in tortillas.',
          'Add salsa and greens.',
          'Enjoy warm.'
        ]
      },
      {
        title: 'Peanut Noodle Bowl',
        steps: [
          'Cook rice noodles.',
          'Mix peanut butter with soy, lime.',
          'Toss noodles and sliced veggies.',
          'Top with peanuts and scallions.',
          'Eat chilled or room temp.'
        ]
      },
      {
        title: 'Vegan Breakfast Oats',
        steps: [
          'Mix oats and plant milk.',
          'Cook until creamy.',
          'Stir in fruits & seeds.',
          'Top with maple syrup.',
          'Eat warm or chilled.'
        ]
      },
      {
        title: 'Stuffed Bell Peppers',
        steps: [
          'Halve and de-seed peppers.',
          'Stuff with rice, beans, salsa.',
          'Bake at 375°F for 20m.',
          'Sprinkle with herbs.',
          'Serve hot.'
        ]
      },
      {
        title: 'Edamame Avocado Toast',
        steps: [
          'Toast bread.',
          'Mash avocado with salt, lemon.',
          'Top with cooked edamame.',
          'Add chili flakes.',
          'Serve immediately.'
        ]
      },
      {
        title: 'Mushroom Lentil Soup',
        steps: [
          'Sauté mushrooms, onion.',
          'Add lentils, water, season.',
          'Simmer until lentils soft.',
          'Blend half (optional).',
          'Serve hot with bread.'
        ]
      }
    ]
  },
  {
    key: 'build_a_recipe',
    name: 'Build-a-Recipe',
    accent: '#FFD600',
    recipes: [
      {
        title: 'Customizable Pasta Bowl',
        steps: [
          'Cook pasta base.',
          'Add protein: beans/chicken/tofu.',
          'Choose veggies (fresh or cooked).',
          'Mix with sauce or oil.',
          'Top with cheese or seeds.'
        ]
      },
      {
        title: 'Breakfast Base Bowl',
        steps: [
          'Spoon cooked oats/rice/quinoa.',
          'Top with fruit or nuts.',
          'Add yogurt or plant-based milk.',
          'Sweeten to taste.',
          'Mix & eat!'
        ]
      },
      {
        title: 'Salad Builder',
        steps: [
          'Pick greens & wash.',
          'Choose toppings: veg/beans/nuts.',
          'Add protein: egg/chickpea.',
          'Dress with oil & vinegar.',
          'Toss and serve.'
        ]
      },
      {
        title: 'DIY Stir-Fry',
        steps: [
          'Select rice/noodle base.',
          'Add protein (meat, tofu, edamame).',
          'Toss in veggies.',
          'Stir-fry with sauce.',
          'Garnish & eat warm.'
        ]
      },
      {
        title: 'Easy Flatbread Pizza',
        steps: [
          'Start with flatbread or naan.',
          'Spread sauce over base.',
          'Add cheese & toppings.',
          'Bake 10-12m at 400°F.',
          'Cool, slice, enjoy!'
        ]
      },
      {
        title: 'Soup Starter Kit',
        steps: [
          'Pick broth base (veg/chicken).',
          'Add any chopped veggies.',
          'Include beans/pasta/noodles.',
          'Simmer until soft.',
          'Season and serve.'
        ]
      },
      {
        title: 'Rice Bowl Creation',
        steps: [
          'Spoon cooked rice into bowl.',
          'Add protein and veggies.',
          'Drizzle sauce (soy, tahini, etc).',
          'Mix and heat as needed.',
          'Top with herbs.'
        ]
      },
      {
        title: 'Wrap Wizard',
        steps: [
          'Lay out wrap/tortilla.',
          'Choose fillings: protein+veggies.',
          'Spread sauce if desired.',
          'Roll up tight.',
          'Slice and enjoy.'
        ]
      },
      {
        title: 'Loaded Potato',
        steps: [
          'Bake/boil potato until soft.',
          'Cut open, fluff inside.',
          'Add toppings: beans/veg/cheese.',
          'Season and mash lightly.',
          'Eat hot.'
        ]
      },
      {
        title: 'Buddha Bowl',
        steps: [
          'Start with grain (quinoa/rice).',
          'Add roasted or fresh veggies.',
          'Include hummus or dressing.',
          'Top with seeds or nuts.',
          'Mix for perfect bite!'
        ]
      }
    ]
  }
];

// ---- MAIN LAYOUT COMPONENT ----

// PUBLIC_INTERFACE
function App() {
  // Bachelor's Cooking Home Main Container
  // Add state for selected category tab
  const [selectedCategory, setSelectedCategory] = useState(categories[0].key);

  return (
    <div className="simplebite-main" style={{ minHeight: '100vh', background: '#fff' }}>
      <header
        className="simplebite-header"
        style={{
          width: '100%',
          background: '#FFD600',
          padding: '32px 0 20px 0',
          textAlign: 'center',
          boxShadow: '0 1px 12px 0 rgba(0,0,0,0.07)'
        }}
      >
        <div
          className="simplebite-logo"
          style={{
            fontSize: '2.1rem',
            fontWeight: 800,
            letterSpacing: '-1px',
            color: '#222',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <span role="img" aria-label="bite" style={{ fontSize: '2.6rem', color: '#fff170' }}>
            🍳
          </span>
          {"Bachelor's Cooking"}
        </div>
        <div
          className="simplebite-description"
          style={{
            marginTop: 6,
            fontSize: '1.05rem',
            color: '#333',
            fontWeight: 500
          }}
        >
          Fast, fun, and foolproof recipes for beginners & students.
        </div>
      </header>

      <nav
        className="simplebite-category-nav"
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 32,
          padding: '20px 0 4px 0',
          borderBottom: '1.5px solid #FFD600',
          background: '#fff'
        }}
      >
        {categories.map((cat) => (
          <button
            key={cat.key}
            className="simplebite-category-link"
            style={{
              color: selectedCategory === cat.key ? '#fff' : '#222',
              background: selectedCategory === cat.key ? '#FFD600' : 'rgba(255,214,0,0.12)',
              fontWeight: 600,
              textDecoration: 'none',
              padding: '6px 17px 7px 17px',
              borderRadius: '22px',
              border: 'none',
              outline: 'none',
              fontSize: '1rem',
              transition: 'background 0.15s, color 0.13s',
              cursor: 'pointer',
              marginBottom: '-2px'
            }}
            onClick={() => setSelectedCategory(cat.key)}
            aria-selected={selectedCategory === cat.key}
          >
            {cat.name}
          </button>
        ))}
      </nav>

      <main
        className="simplebite-category-main"
        style={{
          padding: '38px 0 66px 0',
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          background: '#fff'
        }}
      >
        <div
          className="simplebite-columns"
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '34px',
            width: 'min(900px, 98vw)',
            margin: '0 auto',
            justifyContent: 'center'
          }}
        >
          {/* Only display the selected category column */}
          {categories
            .filter(cat => cat.key === selectedCategory)
            .map(cat => (
              <div
                id={cat.key}
                key={cat.key}
                style={{
                  borderRadius: '8px',
                  border: '1.5px solid #FFD600',
                  background: '#fff',
                  boxShadow: '0 8px 32px rgba(255,220,70,0.06)',
                  minWidth: 0,
                  flex: '1 1 360px'
                }}
              >
                <CategoryColumn
                  categoryName={cat.name}
                  recipes={cat.recipes}
                  accentColor={cat.accent}
                />
              </div>
            ))}
        </div>
      </main>
      <footer style={{
        color: '#FFD600',
        background: '#fff',
        borderTop: '1px solid #FFD600',
        fontSize: '0.98rem',
        textAlign: 'center',
        padding: '24px 0 12px 0',
        marginTop: '60px'
      }}>
        {"Bachelor's Cooking"} © {new Date().getFullYear()} &mdash; Recipes for everyone ❤️
      </footer>
    </div>
  );
}

export default App;

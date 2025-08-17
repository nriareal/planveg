// This file contains the complete database of vegan meals and ingredient categories.
// Added a "cuisine" tag to each meal object for easier filtering.

const allMeals = {
    breakfast: [
        // --- NEW Mediterranean Breakfasts ---
        { name: "Mediterranean Hummus & Tofu Toast", cuisine: "Mediterranean", calories: 360, protein: 18, cookingTime: "8 mins", ingredients: [{item: "sourdough bread", quantity: 2, unit: "slices"}, {item: "hummus", quantity: 40, unit: "g"}, {item: "smoked tofu", quantity: 80, unit: "g"}, {item: "cucumber", quantity: 50, unit: "g"}, {item: "za'atar", quantity: 2, unit: "g"}], instructions: 'Toast the bread. Spread a generous layer of hummus on each slice. Top with thinly sliced smoked tofu, fresh cucumber, and a sprinkle of za\'atar.' },
        { name: "Avocado & Pan-Fried Tempeh Toast", cuisine: "Mediterranean", calories: 380, protein: 16, cookingTime: "10 mins", ingredients: [{item: "whole grain bread", quantity: 2, unit: "slices"}, {item: "avocado", quantity: 80, unit: "g"}, {item: "tempeh", quantity: 70, unit: "g"}, {item: "olive oil", quantity: 5, unit: "ml"}, {item: "red pepper flakes", quantity: 1, unit: "g"}], instructions: 'Toast the bread. Mash the avocado and spread it on the toast. Slice the tempeh and pan-fry in olive oil until golden. Place tempeh on top of the avocado and sprinkle with red pepper flakes.' },
        { name: "Greek Muesli Yogurt Bowl", cuisine: "Mediterranean", calories: 340, protein: 15, cookingTime: "5 mins", ingredients: [{item: "soy yogurt", quantity: 150, unit: "g"}, {item: "muesli", quantity: 50, unit: "g"}, {item: "fresh figs", quantity: 60, unit: "g"}, {item: "agave syrup", quantity: 10, unit: "ml"}], instructions: 'Pour the soy yogurt into a bowl. Top with muesli, sliced fresh figs, and a drizzle of agave syrup.' },
        { name: "Apricot & Pistachio Overnight Oats", cuisine: "Mediterranean", calories: 370, protein: 14, cookingTime: "5 mins prep", ingredients: [{item: "rolled oats", quantity: 50, unit: "g"}, {item: "plant milk", quantity: 200, unit: "ml"}, {item: "dried apricots", quantity: 30, unit: "g"}, {item: "pistachios", quantity: 20, unit: "g"}, {item: "cardamom", quantity: 1, unit: "g"}], instructions: 'In a jar, combine oats, plant milk, chopped apricots, and a pinch of cardamom. Stir well and refrigerate overnight. Top with crushed pistachios before serving.' },
        { name: "Lemon & Berry Chia Pudding", cuisine: "Mediterranean", calories: 310, protein: 12, cookingTime: "5 mins prep", ingredients: [{item: "chia seeds", quantity: 30, unit: "g"}, {item: "almond milk", quantity: 200, unit: "ml"}, {item: "lemon zest", quantity: 2, unit: "g"}, {item: "mixed berries", quantity: 80, unit: "g"}, {item: "fresh mint", quantity: 2, unit: "g"}], instructions: 'Whisk chia seeds, almond milk, and lemon zest together. Let it sit for 5 minutes, then whisk again. Refrigerate for at least 2 hours or overnight. Serve topped with fresh berries and a sprig of mint.' },
        { name: "Savory Tofu & Olive Toast", cuisine: "Mediterranean", calories: 350, protein: 17, cookingTime: "8 mins", ingredients: [{item: "rye bread", quantity: 2, unit: "slices"}, {item: "hummus", quantity: 30, unit: "g"}, {item: "firm tofu", quantity: 80, unit: "g"}, {item: "kalamata olives", quantity: 30, unit: "g"}, {item: "fresh parsley", quantity: 5, unit: "g"}], instructions: 'Toast the rye bread. Crumble the firm tofu and mix it with chopped olives and parsley. Spread hummus on the toast and top with the tofu-olive mixture.' },
        { name: "Smoked Paprika Tempeh & Avocado Toast", cuisine: "Mediterranean", calories: 390, protein: 17, cookingTime: "10 mins", ingredients: [{item: "sourdough bread", quantity: 2, unit: "slices"}, {item: "avocado", quantity: 80, unit: "g"}, {item: "tempeh", quantity: 70, unit: "g"}, {item: "smoked paprika", quantity: 2, unit: "g"}, {item: "arugula", quantity: 20, unit: "g"}], instructions: 'Toast the bread and spread with mashed avocado. Season tempeh strips with smoked paprika and pan-fry until crispy. Place on top of the avocado and finish with a handful of arugula.' },
        { name: "Fig & Walnut Muesli Bowl", cuisine: "Mediterranean", calories: 350, protein: 14, cookingTime: "5 mins", ingredients: [{item: "oat milk yogurt", quantity: 150, unit: "g"}, {item: "muesli", quantity: 50, unit: "g"}, {item: "fresh figs", quantity: 60, unit: "g"}, {item: "walnuts", quantity: 20, unit: "g"}], instructions: 'Create a base of oat milk yogurt in a bowl. Add a layer of muesli, and top with sliced fresh figs and chopped walnuts.' },
        { name: "Almond Butter & Date Chia Pudding", cuisine: "Mediterranean", calories: 340, protein: 13, cookingTime: "5 mins prep", ingredients: [{item: "chia seeds", quantity: 30, unit: "g"}, {item: "plant milk", quantity: 200, unit: "ml"}, {item: "almond butter", quantity: 15, unit: "g"}, {item: "medjool dates", quantity: 2, unit: "pieces"}], instructions: 'Blend plant milk with almond butter and pitted dates until smooth. Pour over chia seeds and whisk well. Refrigerate for at least 2 hours or overnight until thick.' },
        { name: "Mediterranean Savory Oats", cuisine: "Mediterranean", calories: 360, protein: 15, cookingTime: "10 mins", ingredients: [{item: "rolled oats", quantity: 50, unit: "g"}, {item: "vegetable broth", quantity: 250, unit: "ml"}, {item: "sun-dried tomatoes", quantity: 20, unit: "g"}, {item: "spinach", quantity: 30, unit: "g"}, {item: "tahini", quantity: 15, unit: "g"}], instructions: 'Cook oats in vegetable broth until creamy. Stir in chopped sun-dried tomatoes and spinach until the spinach wilts. Drizzle with tahini before serving.' },
        { name: "Tomato & Herb Tofu Toast", cuisine: "Mediterranean", calories: 330, protein: 16, cookingTime: "8 mins", ingredients: [{item: "whole grain bread", quantity: 2, unit: "slices"}, {item: "tomato paste", quantity: 20, unit: "g"}, {item: "firm tofu", quantity: 80, unit: "g"}, {item: "fresh oregano", quantity: 3, unit: "g"}, {item: "olive oil", quantity: 5, unit: "ml"}], instructions: 'Toast the bread. Spread a thin layer of tomato paste on each slice. Pan-fry thin slices of tofu in olive oil until golden. Place tofu on toast and garnish with fresh oregano.' },
        // --- Original Breakfasts ---
        { name: "Overnight Oats with Berries", cuisine: "Western", calories: 320, protein: 12, cookingTime: "5 mins prep", ingredients: [{item: "oats", quantity: 50, unit: "g"}, {item: "plant milk", quantity: 200, unit: "ml"}, {item: "chia seeds", quantity: 15, unit: "g"}, {item: "mixed berries", quantity: 100, unit: "g"}, {item: "maple syrup", quantity: 10, unit: "ml"}], instructions: 'Combine oats, preferred plant milk, chia seeds, and maple syrup in a jar. Stir well, cover, and refrigerate overnight. In the morning, top with mixed berries.' },
        { name: "Green Smoothie", cuisine: "Western", calories: 350, protein: 15, cookingTime: "5 mins", ingredients: [{item: "spinach", quantity: 100, unit: "g"}, {item: "banana", quantity: 150, unit: "g"}, {item: "plant protein powder", quantity: 25, unit: "g"}, {item: "plant milk", quantity: 250, unit: "ml"}, {item: "flax seeds", quantity: 10, unit: "g"}], instructions: 'Blend all ingredients until smooth. Serve immediately.' },
        { name: "Avocado Toast with Tomato", cuisine: "Western", calories: 280, protein: 8, cookingTime: "10 mins", ingredients: [{item: "whole grain bread", quantity: 100, unit: "g"}, {item: "avocado", quantity: 100, unit: "g"}, {item: "cherry tomatoes", quantity: 50, unit: "g"}, {item: "nutritional yeast", quantity: 5, unit: "g"}, {item: "red pepper flakes", quantity: 1, unit: "g"}], instructions: 'Toast bread. Mash avocado and spread on toast. Top with sliced cherry tomatoes, nutritional yeast, and red pepper flakes.' },
        { name: "Tofu Scramble", cuisine: "Western", calories: 310, protein: 18, cookingTime: "15 mins", ingredients: [{item: "firm tofu", quantity: 200, unit: "g"}, {item: "nutritional yeast", quantity: 10, unit: "g"}, {item: "turmeric", quantity: 2, unit: "g"}, {item: "bell peppers", quantity: 80, unit: "g"}, {item: "onion", quantity: 50, unit: "g"}, {item: "spinach", quantity: 50, unit: "g"}, {item: "whole grain toast", quantity: 50, unit: "g"}], instructions: 'Crumble tofu. Sauté chopped bell peppers and onion. Add tofu, nutritional yeast, turmeric, and spinach. Cook until heated through. Serve with toast.' },
        { name: "Vegan Breakfast Burrito", cuisine: "Latin American", calories: 400, protein: 20, cookingTime: "20 mins", ingredients: [{item: "whole wheat tortilla", quantity: 60, unit: "g"}, {item: "black beans", quantity: 100, unit: "g"}, {item: "scrambled tofu", quantity: 100, unit: "g"}, {item: "avocado", quantity: 50, unit: "g"}, {item: "salsa", quantity: 30, unit: "ml"}, {item: "vegan sausage patty", quantity: 50, unit: "g"}], instructions: 'Warm tortilla. Mash black beans. Cook scrambled tofu and vegan sausage patty. Assemble burrito with all fillings and salsa.' },
        { name: "Vegan Pancakes with Fruit", cuisine: "Western", calories: 380, protein: 10, cookingTime: "15 mins", ingredients: [{item: "vegan pancake mix", quantity: 80, unit: "g"}, {item: "plant milk", quantity: 100, unit: "ml"}, {item: "banana", quantity: 100, unit: "g"}, {item: "mixed berries", quantity: 80, unit: "g"}, {item: "maple syrup", quantity: 20, unit: "ml"}], instructions: 'Prepare pancake mix with plant milk. Cook pancakes. Top with sliced banana, mixed berries, and maple syrup.' },
        { name: "Masala Chickpea Scramble (Indian)", cuisine: "South Asian", calories: 380, protein: 22, cookingTime: "20 mins", ingredients: [{item: "chickpea flour", quantity: 80, unit: "g"}, {item: "water", quantity: 200, unit: "ml"}, {item: "onion", quantity: 60, unit: "g"}, {item: "tomato", quantity: 80, unit: "g"}, {item: "ginger", quantity: 8, unit: "g"}, {item: "garlic", quantity: 10, unit: "g"}, {item: "turmeric", quantity: 3, unit: "g"}, {item: "cumin", quantity: 2, unit: "g"}, {item: "coriander", quantity: 2, unit: "g"}, {item: "green chilies", quantity: 5, unit: "g"}, {item: "cilantro", quantity: 10, unit: "g"}], instructions: 'Whisk chickpea flour with water. Sauté onion, ginger, garlic, and green chilies. Add tomato, turmeric, cumin, coriander. Pour in chickpea mixture, stir constantly until set. Garnish with cilantro.' },
        { name: "Congee with Mushrooms (Chinese)", cuisine: "East Asian", calories: 290, protein: 14, cookingTime: "45 mins", ingredients: [{item: "jasmine rice", quantity: 60, unit: "g"}, {item: "water", quantity: 800, unit: "ml"}, {item: "shiitake mushrooms", quantity: 80, unit: "g"}, {item: "firm tofu", quantity: 100, unit: "g"}, {item: "soy sauce", quantity: 15, unit: "ml"}, {item: "sesame oil", quantity: 5, unit: "ml"}, {item: "ginger", quantity: 5, unit: "g"}, {item: "scallions", quantity: 20, unit: "g"}, {item: "white pepper", quantity: 1, unit: "g"}], instructions: 'Simmer rice in water for 45 minutes, stirring occasionally. Sauté mushrooms and cubed tofu with ginger. Season with soy sauce and white pepper. Serve congee topped with mushroom-tofu mixture, sesame oil, and scallions.' },
        { name: "Shakshuka Verde (Middle Eastern)", cuisine: "Middle Eastern", calories: 340, protein: 16, cookingTime: "25 mins", ingredients: [{item: "white beans", quantity: 150, unit: "g"}, {item: "spinach", quantity: 200, unit: "g"}, {item: "onion", quantity: 80, unit: "g"}, {item: "garlic", quantity: 15, unit: "g"}, {item: "green chilies", quantity: 10, unit: "g"}, {item: "cilantro", quantity: 30, unit: "g"}, {item: "parsley", quantity: 20, unit: "g"}, {item: "tahini", quantity: 20, unit: "g"}, {item: "lemon juice", quantity: 15, unit: "ml"}, {item: "cumin", quantity: 3, unit: "g"}, {item: "sumac", quantity: 2, unit: "g"}], instructions: 'Sauté onion, garlic, and green chilies. Add spinach until wilted. Blend half the spinach with herbs, tahini, lemon juice, and spices. Return to pan with white beans. Simmer 10 minutes. Sprinkle with sumac.' },
        { name: "Quinoa Breakfast Bowl (Peruvian)", cuisine: "Latin American", calories: 360, protein: 18, cookingTime: "20 mins", ingredients: [{item: "quinoa", quantity: 70, unit: "g"}, {item: "plant milk", quantity: 200, unit: "ml"}, {item: "pumpkin seeds", quantity: 20, unit: "g"}, {item: "chia seeds", quantity: 10, unit: "g"}, {item: "mango", quantity: 100, unit: "g"}, {item: "coconut flakes", quantity: 15, unit: "g"}, {item: "cinnamon", quantity: 2, unit: "g"}, {item: "vanilla extract", quantity: 3, unit: "ml"}, {item: "lucuma powder", quantity: 5, unit: "g"}], instructions: 'Cook quinoa in plant milk with cinnamon and vanilla until creamy. Top with diced mango, pumpkin seeds, chia seeds, coconut flakes, and lucuma powder.' },
        { name: "Acai Bowl with Granola", cuisine: "Latin American", calories: 340, protein: 14, cookingTime: "10 mins", ingredients: [{item: "frozen acai", quantity: 100, unit: "g"}, {item: "banana", quantity: 120, unit: "g"}, {item: "coconut milk", quantity: 100, unit: "ml"}, {item: "homemade granola", quantity: 40, unit: "g"}, {item: "fresh strawberries", quantity: 80, unit: "g"}, {item: "coconut flakes", quantity: 10, unit: "g"}], instructions: 'Blend frozen acai with banana and coconut milk until thick. Pour into bowl and top with granola, sliced strawberries, and coconut flakes.' },
        { name: "Chia Pudding Parfait", cuisine: "Western", calories: 300, protein: 16, cookingTime: "15 mins prep", ingredients: [{item: "chia seeds", quantity: 40, unit: "g"}, {item: "almond milk", quantity: 250, unit: "ml"}, {item: "vanilla extract", quantity: 5, unit: "ml"}, {item: "maple syrup", quantity: 15, unit: "ml"}, {item: "fresh blueberries", quantity: 100, unit: "g"}, {item: "sliced almonds", quantity: 20, unit: "g"}], instructions: 'Mix chia seeds with almond milk, vanilla, and maple syrup. Refrigerate overnight. Layer with blueberries and almonds in the morning.' },
        { name: "Banana Pancakes", cuisine: "Western", calories: 360, protein: 12, cookingTime: "15 mins", ingredients: [{item: "oat flour", quantity: 80, unit: "g"}, {item: "mashed banana", quantity: 100, unit: "g"}, {item: "soy milk", quantity: 150, unit: "ml"}, {item: "baking powder", quantity: 5, unit: "g"}, {item: "cinnamon", quantity: 2, unit: "g"}, {item: "coconut oil", quantity: 10, unit: "ml"}, {item: "fresh berries", quantity: 80, unit: "g"}], instructions: 'Mix dry ingredients. Combine wet ingredients and fold into dry. Cook pancakes in heated pan with coconut oil. Serve with fresh berries.' },
        { name: "Breakfast Burrito", cuisine: "Latin American", calories: 420, protein: 20, cookingTime: "20 mins", ingredients: [{item: "whole wheat tortilla", quantity: 80, unit: "g"}, {item: "black beans", quantity: 80, unit: "g"}, {item: "scrambled tempeh", quantity: 100, unit: "g"}, {item: "diced tomatoes", quantity: 60, unit: "g"}, {item: "avocado", quantity: 80, unit: "g"}, {item: "spinach", quantity: 40, unit: "g"}, {item: "nutritional yeast", quantity: 10, unit: "g"}], instructions: 'Scramble crumbled tempeh with nutritional yeast. Warm tortilla, fill with tempeh, beans, tomatoes, spinach, and avocado. Roll tightly and serve.' },
        { name: "Miso Soup with Tofu (Japanese)", cuisine: "East Asian", calories: 280, protein: 18, cookingTime: "15 mins", ingredients: [{item: "miso paste", quantity: 30, unit: "g"}, {item: "silken tofu", quantity: 150, unit: "g"}, {item: "wakame seaweed", quantity: 10, unit: "g"}, {item: "shiitake mushrooms", quantity: 60, unit: "g"}, {item: "scallions", quantity: 20, unit: "g"}, {item: "dashi stock", quantity: 400, unit: "ml"}, {item: "sesame oil", quantity: 5, unit: "ml"}], instructions: 'Heat dashi stock, whisk in miso paste. Add cubed tofu, sliced mushrooms, and soaked wakame. Simmer 5 minutes. Garnish with scallions and sesame oil.' },
        { name: "Arepas with Black Bean Filling (Venezuelan)", cuisine: "Latin American", calories: 380, protein: 16, cookingTime: "25 mins", ingredients: [{item: "arepa flour", quantity: 100, unit: "g"}, {item: "warm water", quantity: 200, unit: "ml"}, {item: "black beans", quantity: 100, unit: "g"}, {item: "red onion", quantity: 40, unit: "g"}, {item: "bell pepper", quantity: 50, unit: "g"}, {item: "cilantro", quantity: 15, unit: "g"}, {item: "lime juice", quantity: 10, unit: "ml"}, {item: "cumin", quantity: 2, unit: "g"}], instructions: 'Mix arepa flour with warm water, knead until smooth. Form patties and cook on griddle until golden. Sauté vegetables with beans and spices. Stuff arepas with filling.' },
        { name: "Moroccan Mint Tea with Date Scones", cuisine: "African", calories: 320, protein: 8, cookingTime: "30 mins", ingredients: [{item: "whole wheat flour", quantity: 120, unit: "g"}, {item: "dates", quantity: 60, unit: "g"}, {item: "coconut oil", quantity: 30, unit: "ml"}, {item: "oat milk", quantity: 80, unit: "ml"}, {item: "baking powder", quantity: 8, unit: "g"}, {item: "cinnamon", quantity: 3, unit: "g"}, {item: "green tea", quantity: 5, unit: "g"}, {item: "fresh mint", quantity: 10, unit: "g"}], instructions: 'Mix dry ingredients, add chopped dates. Cut in coconut oil, add oat milk to form dough. Bake scones at 400°F for 15 minutes. Serve with mint tea.' },
        { name: "Kimchi Fried Rice (Korean)", cuisine: "East Asian", calories: 390, protein: 14, cookingTime: "20 mins", ingredients: [{item: "cooked brown rice", quantity: 150, unit: "g"}, {item: "kimchi", quantity: 80, unit: "g"}, {item: "firm tofu", quantity: 100, unit: "g"}, {item: "sesame oil", quantity: 10, unit: "ml"}, {item: "soy sauce", quantity: 15, unit: "ml"}, {item: "garlic", quantity: 8, unit: "g"}, {item: "scallions", quantity: 25, unit: "g"}, {item: "nori sheets", quantity: 5, unit: "g"}], instructions: 'Crumble and pan-fry tofu until golden. Add garlic, then rice and kimchi. Stir-fry with soy sauce and sesame oil. Garnish with scallions and torn nori.' },
        { name: "Chickpea Flour Omelette with Kala Namak", cuisine: "South Asian", calories: 280, protein: 18, cookingTime: "15 mins", ingredients: [ {item: "chickpea flour", quantity: 80, unit: "g"}, {item: "water", quantity: 120, unit: "ml"}, {item: "kala namak", quantity: 2, unit: "g"}, {item: "turmeric", quantity: 1, unit: "g"}, {item: "onion", quantity: 50, unit: "g"}, {item: "bell pepper", quantity: 40, unit: "g"}, {item: "olive oil", quantity: 10, unit: "ml"} ], instructions: 'Whisk chickpea flour with water, kala namak, and turmeric. Let batter rest 10 minutes. Heat oil in non-stick pan, add diced onion and bell pepper. Pour batter, cook 5 minutes each side until golden.' },
        { name: "Peanut Butter & Banana Toast", cuisine: "Western", calories: 350, protein: 14, cookingTime: "5 mins", ingredients: [ {item: "whole grain bread", quantity: 2, unit: "slices"}, {item: "peanut butter", quantity: 30, unit: "g"}, {item: "banana", quantity: 1, unit: "medium"}, {item: "hemp seeds", quantity: 10, unit: "g"}, {item: "cinnamon", quantity: 1, unit: "g"} ], instructions: 'Toast bread until golden. Spread peanut butter evenly on both slices. Slice banana and arrange on top. Sprinkle with hemp seeds and cinnamon.' },
        { name: "Smokey Tempeh & Beans on Toast", cuisine: "Western", calories: 420, protein: 22, cookingTime: "12 mins", ingredients: [ {item: "sourdough bread", quantity: 2, unit: "slices"}, {item: "tempeh", quantity: 100, unit: "g"}, {item: "white beans", quantity: 120, unit: "g"}, {item: "tomato paste", quantity: 15, unit: "g"}, {item: "smoked paprika", quantity: 2, unit: "g"}, {item: "olive oil", quantity: 10, unit: "ml"} ], instructions: 'Crumble and sauté tempeh in oil with smoked paprika. Add white beans and tomato paste, cook 5 minutes. Toast bread and serve tempeh mixture on top.' },
        { name: "Protein Granola with Soy Yogurt", cuisine: "Western", calories: 390, protein: 20, cookingTime: "5 mins prep", ingredients: [ {item: "protein granola", quantity: 60, unit: "g"}, {item: "soy yogurt", quantity: 150, unit: "g"}, {item: "mixed berries", quantity: 80, unit: "g"}, {item: "almond butter", quantity: 15, unit: "g"}, {item: "pumpkin seeds", quantity: 10, unit: "g"} ], instructions: 'Layer soy yogurt in bowl, top with protein granola and mixed berries. Drizzle with almond butter and sprinkle pumpkin seeds on top.' },
        { name: "Edamame & Kale Smoothie Bowl", cuisine: "Fusion", calories: 310, protein: 16, cookingTime: "8 mins", ingredients: [ {item: "frozen edamame", quantity: 80, unit: "g"}, {item: "kale", quantity: 40, unit: "g"}, {item: "banana", quantity: 1, unit: "medium"}, {item: "plant milk", quantity: 150, unit: "ml"}, {item: "chia seeds", quantity: 15, unit: "g"}, {item: "coconut flakes", quantity: 10, unit: "g"} ], instructions: 'Blend edamame, kale, banana, and plant milk until smooth. Pour into bowl, top with chia seeds and coconut flakes.' },
        { name: "Seitan Bacon Breakfast Sandwich", cuisine: "Western", calories: 380, protein: 25, cookingTime: "10 mins", ingredients: [ {item: "sourdough roll", quantity: 1, unit: "piece"}, {item: "seitan bacon", quantity: 60, unit: "g"}, {item: "avocado", quantity: 80, unit: "g"}, {item: "tomato", quantity: 2, unit: "slices"}, {item: "spinach", quantity: 30, unit: "g"}, {item: "vegan mayo", quantity: 10, unit: "g"} ], instructions: 'Pan-fry seitan bacon until crispy. Toast roll halves, spread with vegan mayo. Layer with spinach, tomato, avocado, and seitan bacon.' },
        { name: "Coconut Chickpea Pancakes", cuisine: "Fusion", calories: 340, protein: 15, cookingTime: "20 mins", ingredients: [ {item: "chickpea flour", quantity: 70, unit: "g"}, {item: "coconut milk", quantity: 120, unit: "ml"}, {item: "baking powder", quantity: 3, unit: "g"}, {item: "coconut oil", quantity: 15, unit: "ml"}, {item: "vanilla extract", quantity: 2, unit: "ml"}, {item: "maple syrup", quantity: 15, unit: "ml"} ], instructions: 'Mix chickpea flour and baking powder. Whisk in coconut milk, vanilla, and maple syrup. Heat oil in pan, cook pancakes 3 minutes each side.' },
        { name: "White Bean Bruschetta", cuisine: "European", calories: 320, protein: 14, cookingTime: "8 mins", ingredients: [ {item: "sourdough bread", quantity: 3, unit: "slices"}, {item: "white beans", quantity: 120, unit: "g"}, {item: "cherry tomatoes", quantity: 100, unit: "g"}, {item: "basil", quantity: 10, unit: "g"}, {item: "garlic", quantity: 1, unit: "clove"}, {item: "olive oil", quantity: 15, unit: "ml"} ], instructions: 'Toast bread and rub with garlic. Mash beans with olive oil, spread on toast. Top with diced tomatoes and fresh basil.' },
        { name: "Maple-Tahini Tofu Squares", cuisine: "Fusion", calories: 290, protein: 18, cookingTime: "15 mins", ingredients: [ {item: "firm tofu", quantity: 150, unit: "g"}, {item: "tahini", quantity: 20, unit: "g"}, {item: "maple syrup", quantity: 15, unit: "ml"}, {item: "soy sauce", quantity: 10, unit: "ml"}, {item: "sesame seeds", quantity: 5, unit: "g"}, {item: "olive oil", quantity: 10, unit: "ml"} ], instructions: 'Cut tofu into squares. Mix tahini, maple syrup, and soy sauce. Pan-fry tofu in oil until golden, glaze with tahini mixture, sprinkle sesame seeds.' },
        { name: "Protein-Enhanced Muesli", cuisine: "Western", calories: 370, protein: 19, cookingTime: "5 mins prep", ingredients: [ {item: "rolled oats", quantity: 50, unit: "g"}, {item: "protein powder", quantity: 25, unit: "g"}, {item: "plant milk", quantity: 200, unit: "ml"}, {item: "nuts", quantity: 20, unit: "g"}, {item: "dried fruit", quantity: 20, unit: "g"}, {item: "ground flax", quantity: 10, unit: "g"} ], instructions: 'Combine oats, protein powder, and ground flax. Add plant milk and mix well. Top with nuts and dried fruit. Let soak 5 minutes before eating.' },
        { name: "Moong Dal Chilla", cuisine: "South Asian", calories: 260, protein: 16, cookingTime: "25 mins", ingredients: [ {item: "moong dal", quantity: 80, unit: "g"}, {item: "water", quantity: 150, unit: "ml"}, {item: "ginger", quantity: 5, unit: "g"}, {item: "green chili", quantity: 1, unit: "piece"}, {item: "coriander", quantity: 10, unit: "g"}, {item: "oil", quantity: 10, unit: "ml"} ], instructions: 'Soak moong dal 4 hours, grind with ginger and chili. Add water to make batter, mix in coriander. Cook like pancakes in oiled pan, 3 minutes each side.' },
        { name: "Paneer-Style Tofu Paratha", cuisine: "South Asian", calories: 380, protein: 20, cookingTime: "30 mins", ingredients: [ {item: "whole wheat flour", quantity: 100, unit: "g"}, {item: "firm tofu", quantity: 120, unit: "g"}, {item: "onion", quantity: 50, unit: "g"}, {item: "cumin", quantity: 2, unit: "g"}, {item: "turmeric", quantity: 1, unit: "g"}, {item: "oil", quantity: 15, unit: "ml"} ], instructions: 'Make dough with flour and water. Crumble tofu, sauté with onion and spices. Roll dough, stuff with tofu mixture, roll again. Cook on griddle with oil.' },
        { name: "Spiced Quinoa Upma", cuisine: "South Asian", calories: 300, protein: 12, cookingTime: "20 mins", ingredients: [ {item: "quinoa", quantity: 80, unit: "g"}, {item: "water", quantity: 200, unit: "ml"}, {item: "mustard seeds", quantity: 2, unit: "g"}, {item: "curry leaves", quantity: 5, unit: "pieces"}, {item: "vegetables", quantity: 100, unit: "g"}, {item: "oil", quantity: 10, unit: "ml"} ], instructions: 'Dry roast quinoa. Heat oil, add mustard seeds and curry leaves. Add vegetables, cook 5 minutes. Add quinoa and water, simmer until cooked.' },
        { name: "Kala Chana Curry + Flatbread", cuisine: "South Asian", calories: 420, protein: 22, cookingTime: "35 mins", ingredients: [ {item: "black chickpeas", quantity: 100, unit: "g"}, {item: "onion", quantity: 80, unit: "g"}, {item: "tomato", quantity: 100, unit: "g"}, {item: "garam masala", quantity: 3, unit: "g"}, {item: "flatbread", quantity: 2, unit: "pieces"}, {item: "oil", quantity: 15, unit: "ml"} ], instructions: 'Soak chickpeas overnight, pressure cook. Sauté onions, add tomatoes and spices. Add cooked chickpeas, simmer 15 minutes. Serve with warm flatbread.' },
        { name: "Vegan Suji Cheela", cuisine: "South Asian", calories: 270, protein: 11, cookingTime: "15 mins", ingredients: [ {item: "semolina", quantity: 80, unit: "g"}, {item: "water", quantity: 150, unit: "ml"}, {item: "vegetables", quantity: 80, unit: "g"}, {item: "green chili", quantity: 1, unit: "piece"}, {item: "ginger", quantity: 5, unit: "g"}, {item: "oil", quantity: 10, unit: "ml"} ], instructions: 'Mix semolina with water, add diced vegetables, chili, and ginger. Let batter rest 10 minutes. Cook like pancakes in oiled pan until golden.' },
        { name: "Lentil & Vegetable Uttapam", cuisine: "South Asian", calories: 290, protein: 15, cookingTime: "30 mins", ingredients: [ {item: "lentil batter", quantity: 120, unit: "g"}, {item: "onion", quantity: 50, unit: "g"}, {item: "tomato", quantity: 50, unit: "g"}, {item: "bell pepper", quantity: 40, unit: "g"}, {item: "coriander", quantity: 10, unit: "g"}, {item: "oil", quantity: 10, unit: "ml"} ], instructions: 'Spread lentil batter on hot griddle, top with diced vegetables and coriander. Drizzle oil around edges, cook until bottom is golden, flip carefully.' },
        { name: "Masala Vegan Dhokla", cuisine: "South Asian", calories: 220, protein: 10, cookingTime: "25 mins", ingredients: [ {item: "chickpea flour", quantity: 80, unit: "g"}, {item: "water", quantity: 120, unit: "ml"}, {item: "lemon juice", quantity: 15, unit: "ml"}, {item: "turmeric", quantity: 1, unit: "g"}, {item: "mustard seeds", quantity: 2, unit: "g"}, {item: "oil", quantity: 10, unit: "ml"} ], instructions: 'Mix chickpea flour, water, lemon juice, and turmeric. Steam batter 15 minutes. Heat oil, add mustard seeds, pour over steamed dhokla.' },
        { name: "Rajma Wrap", cuisine: "South Asian", calories: 380, protein: 18, cookingTime: "20 mins", ingredients: [ {item: "tortilla", quantity: 1, unit: "large"}, {item: "kidney beans", quantity: 120, unit: "g"}, {item: "vegetables", quantity: 100, unit: "g"}, {item: "spices", quantity: 3, unit: "g"}, {item: "hummus", quantity: 30, unit: "g"}, {item: "lettuce", quantity: 30, unit: "g"} ], instructions: 'Cook kidney beans with spices and vegetables. Warm tortilla, spread hummus, add lettuce and rajma mixture. Roll tightly and serve.' },
        { name: "Masala Oatmeal", cuisine: "South Asian", calories: 280, protein: 12, cookingTime: "12 mins", ingredients: [ {item: "rolled oats", quantity: 60, unit: "g"}, {item: "water", quantity: 250, unit: "ml"}, {item: "vegetables", quantity: 80, unit: "g"}, {item: "turmeric", quantity: 1, unit: "g"}, {item: "cumin", quantity: 1, unit: "g"}, {item: "oil", quantity: 5, unit: "ml"} ], instructions: 'Heat oil, add cumin and vegetables. Add oats and spices, toast 2 minutes. Add water, cook until creamy, stirring frequently.' },
        { name: "Tropical Soya Pudding", cuisine: "Fusion", calories: 250, protein: 15, cookingTime: "10 mins", ingredients: [ {item: "silken tofu", quantity: 150, unit: "g"}, {item: "coconut milk", quantity: 100, unit: "ml"}, {item: "mango", quantity: 80, unit: "g"}, {item: "pineapple", quantity: 60, unit: "g"}, {item: "vanilla", quantity: 2, unit: "ml"}, {item: "coconut flakes", quantity: 10, unit: "g"} ], instructions: 'Blend silken tofu, coconut milk, and vanilla until smooth. Fold in diced mango and pineapple. Chill and top with coconut flakes.' },
        { name: "Vietnamese Tofu Banh Mi Bowl", cuisine: "Southeast Asian", calories: 350, protein: 20, cookingTime: "20 mins", ingredients: [ {item: "firm tofu", quantity: 120, unit: "g"}, {item: "rice", quantity: 60, unit: "g"}, {item: "pickled vegetables", quantity: 80, unit: "g"}, {item: "cucumber", quantity: 60, unit: "g"}, {item: "herbs", quantity: 20, unit: "g"}, {item: "sriracha", quantity: 10, unit: "ml"} ], instructions: 'Marinate and pan-fry tofu until golden. Cook rice according to package. Assemble bowl with rice, tofu, pickled vegetables, cucumber, and herbs. Drizzle with sriracha.' },
        { name: "Savory Congee with Peas & Tempeh", cuisine: "East Asian", calories: 320, protein: 16, cookingTime: "35 mins", ingredients: [ {item: "rice", quantity: 50, unit: "g"}, {item: "water", quantity: 400, unit: "ml"}, {item: "tempeh", quantity: 80, unit: "g"}, {item: "peas", quantity: 60, unit: "g"}, {item: "ginger", quantity: 10, unit: "g"}, {item: "soy sauce", quantity: 15, unit: "ml"} ], instructions: 'Simmer rice in water with ginger until very soft and porridge-like. Pan-fry crumbled tempeh, add peas. Stir into congee with soy sauce.' },
        { name: "Soba Noodle Salad", cuisine: "East Asian", calories: 340, protein: 14, cookingTime: "15 mins", ingredients: [ {item: "soba noodles", quantity: 80, unit: "g"}, {item: "edamame", quantity: 80, unit: "g"}, {item: "cucumber", quantity: 100, unit: "g"}, {item: "sesame oil", quantity: 10, unit: "ml"}, {item: "rice vinegar", quantity: 15, unit: "ml"}, {item: "sesame seeds", quantity: 10, unit: "g"} ], instructions: 'Cook soba noodles, rinse with cold water. Mix with edamame and diced cucumber. Dress with sesame oil and rice vinegar, top with sesame seeds.' },
        { name: "Tofu & Edamame Gyoza", cuisine: "East Asian", calories: 300, protein: 18, cookingTime: "25 mins", ingredients: [ {item: "gyoza wrappers", quantity: 8, unit: "pieces"}, {item: "firm tofu", quantity: 100, unit: "g"}, {item: "edamame", quantity: 60, unit: "g"}, {item: "cabbage", quantity: 80, unit: "g"}, {item: "ginger", quantity: 5, unit: "g"}, {item: "oil", quantity: 10, unit: "ml"} ], instructions: 'Mash tofu with edamame, cabbage, and ginger. Fill gyoza wrappers, seal edges with water. Pan-fry until golden, add water and steam-cook.' },
        { name: "Thai Pumpkin & Peanut Soup", cuisine: "Southeast Asian", calories: 280, protein: 12, cookingTime: "25 mins", ingredients: [ {item: "pumpkin", quantity: 200, unit: "g"}, {item: "coconut milk", quantity: 150, unit: "ml"}, {item: "peanut butter", quantity: 25, unit: "g"}, {item: "red curry paste", quantity: 10, unit: "g"}, {item: "lime juice", quantity: 10, unit: "ml"}, {item: "peanuts", quantity: 15, unit: "g"} ], instructions: 'Roast diced pumpkin until tender. Simmer with coconut milk, peanut butter, and curry paste. Blend until smooth, finish with lime juice and crushed peanuts.' },
        { name: "Kimchi Tofu Toast", cuisine: "East Asian", calories: 320, protein: 16, cookingTime: "10 mins", ingredients: [ {item: "sourdough bread", quantity: 2, unit: "slices"}, {item: "firm tofu", quantity: 100, unit: "g"}, {item: "kimchi", quantity: 60, unit: "g"}, {item: "avocado", quantity: 60, unit: "g"}, {item: "sesame oil", quantity: 5, unit: "ml"}, {item: "scallions", quantity: 10, unit: "g"} ], instructions: 'Pan-fry crumbled tofu with sesame oil. Toast bread, mash avocado on top. Add tofu and kimchi, garnish with sliced scallions.' },
        { name: "Miso Oat Porridge", cuisine: "East Asian", calories: 290, protein: 13, cookingTime: "12 mins", ingredients: [ {item: "rolled oats", quantity: 60, unit: "g"}, {item: "plant milk", quantity: 200, unit: "ml"}, {item: "miso paste", quantity: 10, unit: "g"}, {item: "nutritional yeast", quantity: 10, unit: "g"}, {item: "seaweed", quantity: 5, unit: "g"}, {item: "sesame seeds", quantity: 5, unit: "g"} ], instructions: 'Cook oats in plant milk until creamy. Whisk in miso paste and nutritional yeast. Top with crumbled seaweed and sesame seeds.' },
        { name: "Filipino-Style Savory Pancakes", cuisine: "Southeast Asian", calories: 310, protein: 14, cookingTime: "18 mins", ingredients: [ {item: "rice flour", quantity: 70, unit: "g"}, {item: "coconut milk", quantity: 120, unit: "ml"}, {item: "vegetables", quantity: 100, unit: "g"}, {item: "tofu", quantity: 80, unit: "g"}, {item: "soy sauce", quantity: 10, unit: "ml"}, {item: "oil", quantity: 10, unit: "ml"} ], instructions: 'Mix rice flour with coconut milk and soy sauce. Add diced vegetables and crumbled tofu. Cook pancakes in oiled pan until golden on both sides.' },
        { name: "Shiitake Tofu Mushroom Toast", cuisine: "Fusion", calories: 290, protein: 16, cookingTime: "12 mins", ingredients: [ {item: "sourdough bread", quantity: 2, unit: "slices"}, {item: "shiitake mushrooms", quantity: 100, unit: "g"}, {item: "firm tofu", quantity: 80, unit: "g"}, {item: "garlic", quantity: 2, unit: "cloves"}, {item: "thyme", quantity: 2, unit: "g"}, {item: "olive oil", quantity: 10, unit: "ml"} ], instructions: 'Sauté sliced shiitake with garlic and thyme. Add crumbled tofu, cook until golden. Toast bread and top with mushroom-tofu mixture.' },
        { name: "Tea-Smoked Tofu & Avocado", cuisine: "East Asian", calories: 320, protein: 18, cookingTime: "20 mins", ingredients: [ {item: "firm tofu", quantity: 120, unit: "g"}, {item: "black tea", quantity: 15, unit: "g"}, {item: "avocado", quantity: 80, unit: "g"}, {item: "lime juice", quantity: 10, unit: "ml"}, {item: "rice", quantity: 50, unit: "g"}, {item: "soy sauce", quantity: 10, unit: "ml"} ], instructions: 'Smoke tofu slices over tea leaves in covered pan for 15 minutes. Serve over rice with sliced avocado, lime juice, and soy sauce.' },
        { name: "Foul Medames Bowl", cuisine: "Middle Eastern", calories: 350, protein: 16, cookingTime: "15 mins", ingredients: [ {item: "fava beans", quantity: 120, unit: "g"}, {item: "tomato", quantity: 80, unit: "g"}, {item: "cucumber", quantity: 60, unit: "g"}, {item: "olive oil", quantity: 15, unit: "ml"}, {item: "lemon juice", quantity: 15, unit: "ml"}, {item: "parsley", quantity: 10, unit: "g"} ], instructions: 'Warm fava beans with olive oil and lemon juice. Serve in bowl topped with diced tomato, cucumber, and fresh parsley.' },
        { name: "Muhammara Toast", cuisine: "Middle Eastern", calories: 330, protein: 12, cookingTime: "10 mins", ingredients: [ {item: "sourdough bread", quantity: 2, unit: "slices"}, {item: "red peppers", quantity: 150, unit: "g"}, {item: "walnuts", quantity: 30, unit: "g"}, {item: "pomegranate molasses", quantity: 10, unit: "ml"}, {item: "olive oil", quantity: 15, unit: "ml"}, {item: "chili flakes", quantity: 1, unit: "g"} ], instructions: 'Blend roasted red peppers, walnuts, pomegranate molasses, and chili flakes. Toast bread and spread with muhammara mixture. Drizzle with olive oil.' },
        { name: "Za'atar Tofu Scramble Wrap", cuisine: "Middle Eastern", calories: 380, protein: 20, cookingTime: "12 mins", ingredients: [ {item: "large tortilla", quantity: 1, unit: "piece"}, {item: "firm tofu", quantity: 120, unit: "g"}, {item: "za'atar", quantity: 5, unit: "g"}, {item: "spinach", quantity: 50, unit: "g"}, {item: "tomato", quantity: 60, unit: "g"}, {item: "olive oil", quantity: 10, unit: "ml"} ], instructions: 'Scramble crumbled tofu with za\'atar and olive oil. Add spinach and diced tomato. Fill tortilla with mixture and roll tightly.' },
        { name: "Lentil Shawarma Salad", cuisine: "Middle Eastern", calories: 340, protein: 18, cookingTime: "20 mins", ingredients: [ {item: "red lentils", quantity: 80, unit: "g"}, {item: "shawarma spice", quantity: 5, unit: "g"}, {item: "mixed greens", quantity: 100, unit: "g"}, {item: "cucumber", quantity: 80, unit: "g"}, {item: "tahini", quantity: 20, unit: "g"}, {item: "lemon juice", quantity: 15, unit: "ml"} ], instructions: 'Cook lentils with shawarma spice until tender. Mix tahini with lemon juice for dressing. Serve spiced lentils over greens and cucumber with tahini dressing.' },
        { name: "Tahini & Date Overnight Buckwheat", cuisine: "Middle Eastern", calories: 360, protein: 14, cookingTime: "5 mins prep", ingredients: [ {item: "buckwheat groats", quantity: 60, unit: "g"}, {item: "plant milk", quantity: 200, unit: "ml"}, {item: "tahini", quantity: 20, unit: "g"}, {item: "dates", quantity: 30, unit: "g"}, {item: "cinnamon", quantity: 1, unit: "g"}, {item: "almonds", quantity: 15, unit: "g"} ], instructions: 'Combine buckwheat groats, plant milk, tahini, chopped dates, and cinnamon in jar. Refrigerate overnight. Top with chopped almonds before serving.' },
        { name: "Herbed Freekeh with Chickpeas", cuisine: "Middle Eastern", calories: 380, protein: 16, cookingTime: "25 mins", ingredients: [ {item: "freekeh", quantity: 70, unit: "g"}, {item: "chickpeas", quantity: 100, unit: "g"}, {item: "vegetable broth", quantity: 200, unit: "ml"}, {item: "fresh herbs", quantity: 20, unit: "g"}, {item: "lemon juice", quantity: 15, unit: "ml"}, {item: "olive oil", quantity: 10, unit: "ml"} ], instructions: 'Cook freekeh in vegetable broth until tender. Stir in chickpeas and fresh herbs. Finish with lemon juice and olive oil.' },
        { name: "Spiced Harissa Tofu Bites", cuisine: "African", calories: 280, protein: 20, cookingTime: "15 mins", ingredients: [ {item: "extra firm tofu", quantity: 150, unit: "g"}, {item: "harissa paste", quantity: 15, unit: "g"}, {item: "olive oil", quantity: 10, unit: "ml"}, {item: "lemon juice", quantity: 10, unit: "ml"}, {item: "cilantro", quantity: 10, unit: "g"}, {item: "cucumber yogurt", quantity: 80, unit: "g"} ], instructions: 'Cut tofu into cubes, marinate in harissa paste, olive oil, and lemon juice. Pan-fry until golden and crispy. Serve with cucumber yogurt and fresh cilantro.' },
        { name: "Vegan M'hanncha Mini Rolls", cuisine: "African", calories: 320, protein: 10, cookingTime: "30 mins", ingredients: [ {item: "phyllo pastry", quantity: 4, unit: "sheets"}, {item: "almonds", quantity: 60, unit: "g"}, {item: "dates", quantity: 40, unit: "g"}, {item: "orange zest", quantity: 5, unit: "g"}, {item: "cinnamon", quantity: 2, unit: "g"}, {item: "olive oil", quantity: 15, unit: "ml"} ], instructions: 'Blend almonds, dates, orange zest, and cinnamon. Brush phyllo with oil, add filling, roll into spirals. Bake at 180°C for 20 minutes until golden.' },
        { name: "Tabbouleh & White Bean Bowl", cuisine: "Middle Eastern", calories: 310, protein: 14, cookingTime: "15 mins", ingredients: [ {item: "bulgur wheat", quantity: 50, unit: "g"}, {item: "white beans", quantity: 100, unit: "g"}, {item: "parsley", quantity: 60, unit: "g"}, {item: "tomatoes", quantity: 100, unit: "g"}, {item: "lemon juice", quantity: 20, unit: "ml"}, {item: "olive oil", quantity: 15, unit: "ml"} ], instructions: 'Soak bulgur in hot water until tender. Mix with chopped parsley, diced tomatoes, and white beans. Dress with lemon juice and olive oil.' },
        { name: "Turkish Lentil Soup", cuisine: "Middle Eastern", calories: 290, protein: 16, cookingTime: "25 mins", ingredients: [ {item: "red lentils", quantity: 80, unit: "g"}, {item: "vegetable broth", quantity: 300, unit: "ml"}, {item: "onion", quantity: 60, unit: "g"}, {item: "carrot", quantity: 50, unit: "g"}, {item: "paprika", quantity: 2, unit: "g"}, {item: "olive oil", quantity: 10, unit: "ml"} ], instructions: 'Sauté diced onion and carrot in olive oil. Add lentils, broth, and paprika. Simmer 20 minutes until lentils are soft. Blend partially for texture.' },
        { name: "Mexican Quinoa Breakfast Burrito", cuisine: "Latin American", calories: 420, protein: 18, cookingTime: "20 mins", ingredients: [ {item: "large tortilla", quantity: 1, unit: "piece"}, {item: "quinoa", quantity: 60, unit: "g"}, {item: "black beans", quantity: 80, unit: "g"}, {item: "bell pepper", quantity: 60, unit: "g"}, {item: "avocado", quantity: 60, unit: "g"}, {item: "salsa", quantity: 30, unit: "g"} ], instructions: 'Cook quinoa until fluffy. Sauté bell pepper, add black beans to warm. Fill tortilla with quinoa, bean mixture, avocado, and salsa. Roll tightly.' },
        { name: "Sweet Potato & Black Bean Hash", cuisine: "Latin American", calories: 340, protein: 14, cookingTime: "25 mins", ingredients: [ {item: "sweet potato", quantity: 200, unit: "g"}, {item: "black beans", quantity: 100, unit: "g"}, {item: "bell pepper", quantity: 80, unit: "g"}, {item: "onion", quantity: 60, unit: "g"}, {item: "cumin", quantity: 2, unit: "g"}, {item: "olive oil", quantity: 15, unit: "ml"} ], instructions: 'Dice sweet potato and roast until tender. Sauté onion and bell pepper, add black beans and cumin. Combine with roasted sweet potato.' },
        { name: "Arepa with Tofu 'Egg' Salad", cuisine: "Latin American", calories: 350, protein: 16, cookingTime: "20 mins", ingredients: [ {item: "arepa", quantity: 1, unit: "piece"}, {item: "firm tofu", quantity: 120, unit: "g"}, {item: "vegan mayo", quantity: 20, unit: "g"}, {item: "turmeric", quantity: 1, unit: "g"}, {item: "celery", quantity: 30, unit: "g"}, {item: "black pepper", quantity: 1, unit: "g"} ], instructions: 'Mash tofu with vegan mayo, turmeric, and black pepper. Add diced celery. Warm arepa, split open, and fill with tofu egg salad.' },
        { name: "Vegan Huevos Rancheros", cuisine: "Latin American", calories: 380, protein: 18, cookingTime: "20 mins", ingredients: [ {item: "corn tortillas", quantity: 2, unit: "pieces"}, {item: "firm tofu", quantity: 120, unit: "g"}, {item: "salsa roja", quantity: 60, unit: "g"}, {item: "black beans", quantity: 80, unit: "g"}, {item: "nutritional yeast", quantity: 10, unit: "g"}, {item: "avocado", quantity: 60, unit: "g"} ], instructions: 'Scramble tofu with nutritional yeast. Warm tortillas and beans. Layer tortillas with beans, tofu scramble, and salsa. Top with sliced avocado.' },
        { name: "Chia & Quinoa Pudding", cuisine: "Fusion", calories: 320, protein: 15, cookingTime: "5 mins prep", ingredients: [ {item: "chia seeds", quantity: 30, unit: "g"}, {item: "cooked quinoa", quantity: 40, unit: "g"}, {item: "plant milk", quantity: 200, unit: "ml"}, {item: "vanilla", quantity: 2, unit: "ml"}, {item: "berries", quantity: 80, unit: "g"}, {item: "maple syrup", quantity: 15, unit: "ml"} ], instructions: 'Mix chia seeds, quinoa, plant milk, vanilla, and maple syrup. Refrigerate overnight until thick. Top with fresh berries before serving.' },
        { name: "Brazilian-Style Açaí & Soy Bowl", cuisine: "Latin American", calories: 380, protein: 16, cookingTime: "8 mins", ingredients: [ {item: "açaí puree", quantity: 100, unit: "g"}, {item: "soy protein powder", quantity: 25, unit: "g"}, {item: "banana", quantity: 1, unit: "medium"}, {item: "granola", quantity: 40, unit: "g"}, {item: "coconut flakes", quantity: 15, unit: "g"}, {item: "guarana powder", quantity: 2, unit: "g"} ], instructions: 'Blend açaí puree with soy protein powder and half the banana. Pour into bowl, top with granola, coconut flakes, sliced banana, and guarana powder.' },
        { name: "Plantain & Black Bean Tacos", cuisine: "Latin American", calories: 340, protein: 12, cookingTime: "15 mins", ingredients: [ {item: "corn tortillas", quantity: 3, unit: "small"}, {item: "plantain", quantity: 1, unit: "medium"}, {item: "black beans", quantity: 100, unit: "g"}, {item: "lime juice", quantity: 10, unit: "ml"}, {item: "cilantro", quantity: 15, unit: "g"}, {item: "hot sauce", quantity: 5, unit: "ml"} ], instructions: 'Slice and pan-fry plantain until caramelized. Warm black beans with lime juice. Fill tortillas with plantain, beans, cilantro, and hot sauce.' },
        { name: "Almond & Chocolate Protein Muffins", cuisine: "Western", calories: 290, protein: 18, cookingTime: "25 mins", ingredients: [ {item: "almond flour", quantity: 80, unit: "g"}, {item: "protein powder", quantity: 30, unit: "g"}, {item: "cocoa powder", quantity: 15, unit: "g"}, {item: "plant milk", quantity: 120, unit: "ml"}, {item: "baking powder", quantity: 5, unit: "g"}, {item: "dark chocolate chips", quantity: 20, unit: "g"} ], instructions: 'Mix dry ingredients, add plant milk to form batter. Fold in chocolate chips. Bake in muffin tins at 180°C for 18-20 minutes.' },
        { name: "Coconut & Pea-Protein Porridge", cuisine: "Fusion", calories: 350, protein: 22, cookingTime: "10 mins", ingredients: [ {item: "rolled oats", quantity: 50, unit: "g"}, {item: "pea protein powder", quantity: 30, unit: "g"}, {item: "coconut milk", quantity: 200, unit: "ml"}, {item: "shredded coconut", quantity: 15, unit: "g"}, {item: "chia seeds", quantity: 10, unit: "g"}, {item: "vanilla", quantity: 2, unit: "ml"} ], instructions: 'Cook oats in coconut milk until creamy. Stir in pea protein powder and vanilla. Top with shredded coconut and chia seeds.' },
        { name: "Quinoa & Bean Tostada", cuisine: "Latin American", calories: 380, protein: 16, cookingTime: "15 mins", ingredients: [ {item: "tostada shells", quantity: 2, unit: "pieces"}, {item: "quinoa", quantity: 60, unit: "g"}, {item: "refried beans", quantity: 100, unit: "g"}, {item: "lettuce", quantity: 50, unit: "g"}, {item: "tomato", quantity: 60, unit: "g"}, {item: "lime juice", quantity: 10, unit: "ml"} ], instructions: 'Cook quinoa until fluffy. Warm refried beans. Spread beans on tostada shells, top with quinoa, shredded lettuce, diced tomato, and lime juice.' }
    ],
    lunch: [
        // --- Original Lunch Recipes ---
        { name: "Buddha Bowl with Crispy Chickpeas", cuisine: "Fusion", calories: 480, protein: 22, cookingTime: "30 mins", ingredients: [{item: "quinoa", quantity: 80, unit: "g"}, {item: "chickpeas", quantity: 100, unit: "g"}, {item: "roasted vegetables", quantity: 200, unit: "g"}, {item: "tahini dressing", quantity: 30, unit: "g"}, {item: "leafy greens", quantity: 80, unit: "g"}], instructions: 'Cook quinoa. Roast chickpeas and your favorite vegetables until crispy. Assemble bowl with leafy greens, cooked quinoa, roasted chickpeas and vegetables, and tahini dressing.' },
        { name: "Hearty Lentil Soup", cuisine: "Western", calories: 420, protein: 20, cookingTime: "30 mins", ingredients: [{item: "red lentils", quantity: 80, unit: "g"}, {item: "mixed vegetables", quantity: 200, unit: "g"}, {item: "vegetable broth", quantity: 300, unit: "ml"}, {item: "coconut milk", quantity: 50, unit: "ml"}, {item: "curry powder", quantity: 5, unit: "g"}, {item: "crushed tomatoes", quantity: 50, unit: "g"}], instructions: 'Sauté chopped vegetables. Add red lentils, vegetable broth, coconut milk, curry powder, and crushed tomatoes. Simmer until lentils are tender, about 20-25 minutes.' },
        { name: "Mediterranean Quinoa Salad", cuisine: "Mediterranean", calories: 410, protein: 18, cookingTime: "20 mins", ingredients: [{item: "quinoa", quantity: 70, unit: "g"}, {item: "cucumber", quantity: 80, unit: "g"}, {item: "cherry tomatoes", quantity: 80, unit: "g"}, {item: "olives", quantity: 30, unit: "g"}, {item: "red onion", quantity: 20, unit: "g"}, {item: "hummus", quantity: 50, unit: "g"}], instructions: 'Cook and cool quinoa. Chop cucumber, tomatoes, and red onion. Combine all ingredients with olives and a dollop of hummus. Dress with lemon juice and herbs.' },
        { name: "Vegan Deli Slice Sandwich", cuisine: "Western", calories: 390, protein: 15, cookingTime: "5 mins", ingredients: [{item: "whole grain bread", quantity: 100, unit: "g"}, {item: "vegan deli slices", quantity: 80, unit: "g"}, {item: "lettuce", quantity: 30, unit: "g"}, {item: "tomato", quantity: 50, unit: "g"}, {item: "vegan mayonnaise", quantity: 20, unit: "g"}], instructions: 'Assemble sandwich with bread, vegan deli slices, lettuce, tomato, and vegan mayonnaise.' },
        { name: "Beyond Burger with Side Salad", cuisine: "Western", calories: 600, protein: 25, cookingTime: "20 mins", ingredients: [{item: "beyond burger patty", quantity: 120, unit: "g"}, {item: "whole grain bun", quantity: 80, unit: "g"}, {item: "mixed greens", quantity: 100, unit: "g"}, {item: "dressing", quantity: 20, unit: "ml"}, {item: "onion", quantity: 20, unit: "g"}, {item: "tomato", quantity: 30, unit: "g"}], instructions: 'Cook Beyond Burger patty according to package. Toast bun. Assemble burger with desired toppings. Serve with a simple side salad.' },
        // --- New Catalan/Spanish Lunch Recipes ---
        {
            name: "Mediterranean Lentil Stew (Llenties Estofades)",
            cuisine: "Mediterranean",
            calories: 480,
            protein: 24,
            cookingTime: "45 mins",
            ingredients: [
                { item: "brown lentils", quantity: 100, unit: "g" },
                { item: "potato", quantity: 150, unit: "g" },
                { item: "carrot", quantity: 80, unit: "g" },
                { item: "onion", quantity: 70, unit: "g" },
                { item: "crushed tomatoes", quantity: 150, unit: "g" },
                { item: "rosemary", quantity: 2, unit: "g" },
                { item: "vegetable broth", quantity: 500, unit: "ml" },
                { item: "olive oil", quantity: 15, unit: "ml" }
            ],
            instructions: 'Sauté the chopped onion in olive oil. Add the diced carrots and potatoes and cook for 5 minutes. Add the lentils, crushed tomatoes, and vegetable broth. Bring to a boil, then simmer for 35-40 minutes until lentils are tender. Add a sprig of rosemary for the last 10 minutes of cooking.'
        },
        {
            name: "Lentil Bolognese with Macaroni",
            cuisine: "Mediterranean",
            calories: 550,
            protein: 26,
            cookingTime: "40 mins",
            ingredients: [
                { item: "pasta", quantity: 100, unit: "g" },
                { item: "brown lentils", quantity: 80, unit: "g" },
                { item: "onion", quantity: 60, unit: "g" },
                { item: "carrot", quantity: 50, unit: "g" },
                { item: "celery", quantity: 40, unit: "g" },
                { item: "crushed tomatoes", quantity: 200, unit: "g" },
                { item: "nutritional yeast", quantity: 15, unit: "g" },
                { item: "oregano", quantity: 3, unit: "g" }
            ],
            instructions: 'Boil the pasta. For the sauce, sauté the chopped onion, carrot, and celery. Add the pre-cooked lentils, crushed tomatoes, and oregano. Simmer for 20 minutes. Serve the pasta with the bolognese and sprinkle with nutritional yeast.'
        },
        {
            name: "Vegan Mushroom & Chickpea Fideuà",
            cuisine: "Mediterranean",
            calories: 520,
            protein: 22,
            cookingTime: "35 mins",
            ingredients: [
                { item: "fideua noodles", quantity: 100, unit: "g" },
                { item: "mixed mushrooms", quantity: 150, unit: "g" },
                { item: "chickpeas", quantity: 100, unit: "g" },
                { item: "onion", quantity: 70, unit: "g" },
                { item: "tomato", quantity: 100, unit: "g" },
                { item: "vegetable broth", quantity: 300, unit: "ml" },
                { item: "saffron", quantity: 1, unit: "g" },
                { item: "olive oil", quantity: 25, unit: "ml" }
            ],
            instructions: 'Sauté the onion and grated tomato. Add the mushrooms and cook until browned. Toast the noodles in the same pan. Add the chickpeas and hot broth with saffron. Cook until the noodles have absorbed the liquid and are tender.'
        },
        {
            name: "Vegan Seitan Stew (Fricandó Vegà)",
            cuisine: "Mediterranean",
            calories: 510,
            protein: 30,
            cookingTime: "45 mins",
            ingredients: [
                { item: "seitan", quantity: 180, unit: "g" },
                { item: "shiitake mushrooms", quantity: 100, unit: "g" },
                { item: "onion", quantity: 80, unit: "g" },
                { item: "tomato", quantity: 120, unit: "g" },
                { item: "almonds", quantity: 20, unit: "g" },
                { item: "white wine", quantity: 50, unit: "ml" },
                { item: "vegetable broth", quantity: 200, unit: "ml" },
                { item: "brown rice", quantity: 70, unit: "g" }
            ],
            instructions: 'Coat seitan steaks in flour and fry them. In the same pot, make a sofrito with onion and tomato. Add the mushrooms. Pour in the wine and let it evaporate. Return the seitan to the pot, cover with broth, and cook for 30 min. Add a picada (ground almonds and garlic) at the end. Serve with rice.'
        },
        {
            name: "Breaded Seitan with Ratatouille (Seitan Arrebossat)",
            cuisine: "Mediterranean",
            calories: 490,
            protein: 28,
            cookingTime: "35 mins",
            ingredients: [
                { item: "seitan", quantity: 150, unit: "g" },
                { item: "panko breadcrumbs", quantity: 40, unit: "g" },
                { item: "plant milk", quantity: 50, unit: "ml" },
                { item: "zucchini", quantity: 100, unit: "g" },
                { item: "eggplant", quantity: 100, unit: "g" },
                { item: "bell peppers", quantity: 80, unit: "g" },
                { item: "crushed tomatoes", quantity: 150, unit: "g" }
            ],
            instructions: 'Slice the seitan thinly, dip in plant milk, then in breadcrumbs. Fry until golden. For the ratatouille (samfaina), sauté the chopped vegetables (pepper, eggplant, zucchini) and finally add the tomato. Simmer for 20 minutes. Serve the seitan with the ratatouille.'
        },
        {
            name: "Vegan Catalan Stew (Escudella Vegana)",
            cuisine: "Mediterranean",
            calories: 530,
            protein: 25,
            cookingTime: "60 mins",
            ingredients: [
                { item: "pasta shells", quantity: 60, unit: "g" },
                { item: "chickpeas", quantity: 100, unit: "g" },
                { item: "white beans", quantity: 100, unit: "g" },
                { item: "potato", quantity: 120, unit: "g" },
                { item: "carrot", quantity: 80, unit: "g" },
                { item: "firm tofu", quantity: 120, unit: "g" },
                { item: "breadcrumbs", quantity: 20, unit: "g" },
                { item: "parsley", quantity: 10, unit: "g" }
            ],
            instructions: 'In a large pot, boil the vegetables (potato, carrot) and legumes in plenty of water or broth. For the "pilota" (meatball), mash the tofu with breadcrumbs, garlic, and parsley, form a large ball, and add it to the broth. Boil everything for 45 minutes. Finally, add the pasta and cook it in the same broth. Serve very hot.'
        },
        {
            name: "Cabbage & Potato Hash with Smoked Tempeh (Trinxat)",
            cuisine: "Mediterranean",
            calories: 480,
            protein: 23,
            cookingTime: "40 mins",
            ingredients: [
                { item: "cabbage", quantity: 250, unit: "g" },
                { item: "potato", quantity: 200, unit: "g" },
                { item: "smoked tempeh", quantity: 100, unit: "g" },
                { item: "garlic", quantity: 10, unit: "g" },
                { item: "olive oil", quantity: 25, unit: "ml" }
            ],
            instructions: 'Boil the cabbage and potato together until very soft. Drain well and mash with a fork. Meanwhile, dice the tempeh very small and fry it in a pan until crispy. Remove it. In the same pan, brown the sliced garlic, add the cabbage and potato mix, and pan-fry it, browning it well on both sides. Serve the trinxat topped with the crispy tempeh.'
        },
        {
            name: "Vegan Sausages with White Beans",
            cuisine: "Mediterranean",
            calories: 540,
            protein: 27,
            cookingTime: "25 mins",
            ingredients: [
                { item: "vegan sausage", quantity: 150, unit: "g" },
                { item: "white beans", quantity: 200, unit: "g" },
                { item: "onion", quantity: 70, unit: "g" },
                { item: "crushed tomatoes", quantity: 100, unit: "g" },
                { item: "white wine", quantity: 30, unit: "ml" },
                { item: "parsley", quantity: 10, unit: "g" }
            ],
            instructions: 'Slice the vegan sausages and brown them in a pot. Remove them. In the same oil, sauté the chopped onion, then add the tomato and wine. Cook for 10 minutes. Add the cooked beans and the sausages. Cook everything together for 5 more minutes and serve with fresh chopped parsley.'
        },
        {
            name: "Catalan Vegan Roast with Prunes & Pine Nuts",
            cuisine: "Mediterranean",
            calories: 560,
            protein: 32,
            cookingTime: "55 mins",
            ingredients: [
                { item: "soy protein chunks (e.g., Heura)", quantity: 120, unit: "g" },
                { item: "onion", quantity: 100, unit: "g" },
                { item: "potato", quantity: 150, unit: "g" },
                { item: "prunes", quantity: 40, unit: "g" },
                { item: "pine nuts", quantity: 25, unit: "g" },
                { item: "brandy", quantity: 30, unit: "ml" },
                { item: "vegetable broth", quantity: 250, unit: "ml" }
            ],
            instructions: 'Hydrate the soy protein chunks. Brown them in a pot with oil. Remove them. Sauté the onion and sliced potatoes. Add the protein back. Flambé with brandy. Add the prunes, pine nuts, and broth. Cover and simmer for 35-40 minutes until everything is tender and the sauce has reduced.'
        }
    ],
    dinner: [
        // --- Original Dinner Recipes ---
        { name: "Creamy Lentil Curry", cuisine: "South Asian", calories: 520, protein: 25, cookingTime: "30 mins", ingredients: [{item: "green lentils", quantity: 100, unit: "g"}, {item: "coconut milk", quantity: 150, unit: "ml"}, {item: "curry paste", quantity: 20, unit: "g"}, {item: "mixed vegetables", quantity: 250, unit: "g"}, {item: "brown rice", quantity: 80, unit: "g"}, {item: "spinach", quantity: 50, unit: "g"}], instructions: 'Cook brown rice. Sauté vegetables. Add green lentils, curry paste, coconut milk, and spinach. Simmer until lentils are tender and sauce has thickened. Serve with rice.' },
        { name: "Spaghetti with Marinara & Meatballs", cuisine: "European", calories: 550, protein: 28, cookingTime: "35 mins", ingredients: [{item: "whole grain pasta", quantity: 100, unit: "g"}, {item: "vegan meatballs", quantity: 120, unit: "g"}, {item: "marinara sauce", quantity: 150, unit: "ml"}, {item: "onion", quantity: 30, unit: "g"}, {item: "garlic", quantity: 10, unit: "g"}, {item: "fresh basil", quantity: 10, unit: "g"}], instructions: 'Cook pasta. Sauté onion and garlic. Add vegan meatballs and cook until browned. Stir in marinara sauce and simmer. Serve over pasta, topped with fresh basil.' },
        { name: "Sheet Pan Fajitas", cuisine: "Latin American", calories: 480, protein: 20, cookingTime: "25 mins", ingredients: [{item: "bell peppers", quantity: 200, unit: "g"}, {item: "onion", quantity: 100, unit: "g"}, {item: "mushrooms", quantity: 100, unit: "g"}, {item: "black beans", quantity: 80, unit: "g"}, {item: "fajita seasoning", quantity: 10, unit: "g"}, {item: "tortillas", quantity: 60, unit: "g"}, {item: "avocado", quantity: 50, unit: "g"}], instructions: 'Toss sliced bell peppers, onion, and mushrooms with black beans and fajita seasoning on a sheet pan. Roast until tender. Serve in warm tortillas with sliced avocado.' },
        { name: "Tofu Katsu Curry", cuisine: "East Asian", calories: 600, protein: 30, cookingTime: "40 mins", ingredients: [{item: "firm tofu", quantity: 200, unit: "g"}, {item: "panko breadcrumbs", quantity: 50, unit: "g"}, {item: "flour", quantity: 20, unit: "g"}, {item: "curry block sauce", quantity: 100, unit: "g"}, {item: "jasmine rice", quantity: 80, unit: "g"}, {item: "broccoli", quantity: 100, unit: "g"}], instructions: 'Press tofu, coat in flour, then breadcrumbs. Fry until golden. Prepare curry sauce. Cook jasmine rice and steam broccoli. Serve tofu over rice with sauce and broccoli.' },
        { name: "Chickpea & Spinach Masala", cuisine: "South Asian", calories: 490, protein: 24, cookingTime: "30 mins", ingredients: [{item: "chickpeas", quantity: 150, unit: "g"}, {item: "spinach", quantity: 100, unit: "g"}, {item: "diced tomatoes", quantity: 150, unit: "g"}, {item: "onion", quantity: 50, unit: "g"}, {item: "garlic", quantity: 10, unit: "g"}, {item: "ginger", quantity: 5, unit: "g"}, {item: "garam masala", quantity: 5, unit: "g"}, {item: "brown rice", quantity: 70, unit: "g"}], instructions: 'Cook brown rice. Sauté onion, garlic, ginger. Add chickpeas, diced tomatoes, garam masala. Simmer. Stir in spinach until wilted. Serve with rice.' },
        { name: "Impossible Burger with Sweet Potato Fries", cuisine: "Western", calories: 650, protein: 27, cookingTime: "30 mins", ingredients: [{item: "impossible burger patty", quantity: 120, unit: "g"}, {item: "sweet potato", quantity: 200, unit: "g"}, {item: "whole grain bun", quantity: 80, unit: "g"}, {item: "ketchup", quantity: 20, unit: "g"}, {item: "lettuce", quantity: 20, unit: "g"}, {item: "tomato", quantity: 30, unit: "g"}], instructions: 'Cook Impossible Burger patty. Slice sweet potato into fries and bake. Assemble burger with bun, lettuce, tomato. Serve with fries and ketchup.' },
        // --- New Catalan/Spanish Dinner Recipes ---
        {
            name: "Catalan Lentil Salad (Amanida de Llenties)",
            cuisine: "Mediterranean",
            calories: 430,
            protein: 21,
            cookingTime: "10 mins",
            ingredients: [
                { item: "cooked lentils", quantity: 250, unit: "g" },
                { item: "red bell pepper", quantity: 80, unit: "g" },
                { item: "cucumber", quantity: 100, unit: "g" },
                { item: "red onion", quantity: 40, unit: "g" },
                { item: "olive oil", quantity: 20, unit: "ml" },
                { item: "sherry vinegar", quantity: 15, unit: "ml" },
                { item: "parsley", quantity: 15, unit: "g" }
            ],
            instructions: 'Drain and rinse the canned lentils well. Dice the vegetables into small cubes. Chop the parsley. Mix all ingredients in a large bowl and dress with olive oil and sherry vinegar.'
        },
        {
            name: "Pumpkin Soup with Grilled Tofu",
            cuisine: "Mediterranean",
            calories: 380,
            protein: 18,
            cookingTime: "30 mins",
            ingredients: [
                { item: "pumpkin", quantity: 300, unit: "g" },
                { item: "onion", quantity: 80, unit: "g" },
                { item: "vegetable broth", quantity: 400, unit: "ml" },
                { item: "firm tofu", quantity: 150, unit: "g" },
                { item: "olive oil", quantity: 15, unit: "ml" },
                { item: "pumpkin seeds", quantity: 10, unit: "g" }
            ],
            instructions: 'Sauté the onion in oil. Add the diced pumpkin and broth. Cook for 20 minutes. Blend until you get a smooth cream. Cut the tofu into cubes, grill it until golden, and serve it on top of the soup. Garnish with pumpkin seeds.'
        },
        {
            name: "Zucchini & Onion Soup with Tempeh",
            cuisine: "Mediterranean",
            calories: 360,
            protein: 19,
            cookingTime: "25 mins",
            ingredients: [
                { item: "zucchini", quantity: 300, unit: "g" },
                { item: "onion", quantity: 100, unit: "g" },
                { item: "vegetable broth", quantity: 400, unit: "ml" },
                { item: "tempeh", quantity: 120, unit: "g" },
                { item: "olive oil", quantity: 15, unit: "ml" },
                { item: "fresh mint", quantity: 10, unit: "g" }
            ],
            instructions: 'Sauté the onion. Add the zucchini and broth, and cook for 15 minutes. Blend until creamy. Crumble the tempeh and sauté it in a pan until crispy. Serve the soup topped with the tempeh and a few fresh mint leaves.'
        },
        {
            name: "White Beans with Sautéed Mushrooms (Mongetes amb Bolets)",
            cuisine: "Mediterranean",
            calories: 410,
            protein: 22,
            cookingTime: "20 mins",
            ingredients: [
                { item: "white beans", quantity: 200, unit: "g" },
                { item: "mixed mushrooms", quantity: 150, unit: "g" },
                { item: "garlic", quantity: 10, unit: "g" },
                { item: "parsley", quantity: 15, unit: "g" },
                { item: "olive oil", quantity: 20, unit: "ml" },
                { item: "white wine", quantity: 30, unit: "ml" }
            ],
            instructions: 'Sauté the minced garlic in olive oil. Add the mushrooms and cook until they release their water. Pour in the white wine and let it evaporate. Add the cooked white beans, sauté everything together for 5 minutes, and sprinkle with fresh chopped parsley.'
        },
        {
            name: "Potato & Green Beans with Tofu (Patata i Mongeta)",
            cuisine: "Mediterranean",
            calories: 450,
            protein: 24,
            cookingTime: "25 mins",
            ingredients: [
                { item: "potato", quantity: 200, unit: "g" },
                { item: "green beans", quantity: 150, unit: "g" },
                { item: "firm tofu", quantity: 150, unit: "g" },
                { item: "garlic", quantity: 8, unit: "g" },
                { item: "paprika", quantity: 3, unit: "g" },
                { item: "olive oil", quantity: 20, unit: "ml" }
            ],
            instructions: 'Boil the potatoes and green beans until tender. Drain them. In a pan, brown the diced tofu with oil and garlic. Add the potatoes and green beans, sauté everything together, and sprinkle with paprika before serving.'
        },
        {
            name: "Vegan Spanish Omelette (Truita de Patates)",
            cuisine: "Mediterranean",
            calories: 480,
            protein: 18,
            cookingTime: "30 mins",
            ingredients: [
                { item: "potato", quantity: 250, unit: "g" },
                { item: "onion", quantity: 100, unit: "g" },
                { item: "chickpea flour", quantity: 70, unit: "g" },
                { item: "water", quantity: 150, unit: "ml" },
                { item: "kala namak", quantity: 3, unit: "g" },
                { item: "turmeric", quantity: 2, unit: "g" },
                { item: "olive oil", quantity: 30, unit: "ml" }
            ],
            instructions: 'Finely slice the potatoes and onion and slow-cook them in olive oil over low heat until soft. Mix the chickpea flour with water, kala namak salt, and turmeric. Drain the potatoes and mix them with the batter. Cook the omelette in a pan on both sides until set.'
        },
        {
            name: "Gazpacho with Chickpea Croutons",
            cuisine: "Mediterranean",
            calories: 400,
            protein: 18,
            cookingTime: "15 mins",
            ingredients: [
                { item: "tomato", quantity: 300, unit: "g" },
                { item: "cucumber", quantity: 100, unit: "g" },
                { item: "green bell pepper", quantity: 60, unit: "g" },
                { item: "garlic", quantity: 5, unit: "g" },
                { item: "olive oil", quantity: 20, unit: "ml" },
                { item: "sourdough bread", quantity: 30, unit: "g" },
                { item: "chickpeas", quantity: 100, unit: "g" },
                { item: "paprika", quantity: 2, unit: "g" }
            ],
            instructions: 'Blend the tomatoes, cucumber, pepper, garlic, and bread with olive oil and a little cold water until smooth. Season to taste. For the topping, sauté the cooked chickpeas with a pinch of paprika until slightly golden. Serve the gazpacho cold with the chickpeas on top.'
        },
        {
            name: "Basque-Style Tofu with Asparagus (Tofu a la Basca)",
            cuisine: "Mediterranean",
            calories: 410,
            protein: 25,
            cookingTime: "20 mins",
            ingredients: [
                { item: "firm tofu", quantity: 180, unit: "g" },
                { item: "shiitake mushrooms", quantity: 100, unit: "g" },
                { item: "canned asparagus", quantity: 120, unit: "g" },
                { item: "garlic", quantity: 10, unit: "g" },
                { item: "fresh parsley", quantity: 20, unit: "g" },
                { item: "white wine", quantity: 40, unit: "ml" },
                { item: "olive oil", quantity: 20, unit: "ml" }
            ],
            instructions: 'Dice the tofu and brown it in a pan with oil. Set aside. In the same pan, sauté the garlic and sliced mushrooms. When golden, add the white wine. Add the tofu, chopped asparagus, and a large amount of fresh chopped parsley. Cook together for 2 minutes and serve.'
        },
        {
            name: "Stewed Peas & Potato with Vegan Burger",
            cuisine: "Mediterranean",
            calories: 520,
            protein: 28,
            cookingTime: "30 mins",
            ingredients: [
                { item: "peas", quantity: 200, unit: "g" },
                { item: "potato", quantity: 150, unit: "g" },
                { item: "onion", quantity: 80, unit: "g" },
                { item: "vegan patty", quantity: 120, unit: "g" },
                { item: "vegetable broth", quantity: 100, unit: "ml" },
                { item: "olive oil", quantity: 15, unit: "ml" }
            ],
            instructions: 'Sauté the chopped onion in a pot. Add the diced potato and cook for a couple of minutes. Add the peas and broth. Cover and cook over low heat until the potato is tender. Meanwhile, cook the vegan burger on a griddle. Serve the stewed peas and potato with the burger on the side.'
        },
        {
            name: "Cauliflower with Beans & Smoked Tofu",
            cuisine: "Mediterranean",
            calories: 430,
            protein: 25,
            cookingTime: "20 mins",
            ingredients: [
                { item: "cauliflower", quantity: 250, unit: "g" },
                { item: "white beans", quantity: 150, unit: "g" },
                { item: "smoked tofu", quantity: 100, unit: "g" },
                { item: "garlic", quantity: 8, unit: "g" },
                { item: "paprika", quantity: 2, unit: "g" },
                { item: "olive oil", quantity: 15, unit: "ml" }
            ],
            instructions: 'Boil the cauliflower until al dente. In a pan, sauté the garlic and sliced smoked tofu. Add the cauliflower and cooked white beans, sauté together for a few minutes with a bit of paprika. Serve hot.'
        },
        {
            name: "Roasted Veggies with Vegan Sausage (Escalivada)",
            cuisine: "Mediterranean",
            calories: 480,
            protein: 22,
            cookingTime: "50 mins",
            ingredients: [
                { item: "eggplant", quantity: 200, unit: "g" },
                { item: "red bell pepper", quantity: 150, unit: "g" },
                { item: "onion", quantity: 100, unit: "g" },
                { item: "vegan sausage", quantity: 120, unit: "g" },
                { item: "olive oil", quantity: 25, unit: "ml" },
                { item: "sourdough bread", quantity: 2, unit: "slices" }
            ],
            instructions: 'Roast the eggplant, pepper, and onion in the oven at 200°C (400°F) for 40-50 minutes. Meanwhile, cook the vegan sausages on a griddle. Peel and slice the roasted vegetables into strips and season with oil and salt. Serve them on a slice of toast with the sausage on the side.'
        },
        {
            name: "Vegan Catalan Stew (Escudella Vegana)",
            cuisine: "Mediterranean",
            calories: 530,
            protein: 25,
            cookingTime: "60 mins",
            ingredients: [
                { item: "pasta shells", quantity: 60, unit: "g" },
                { item: "chickpeas", quantity: 100, unit: "g" },
                { item: "white beans", quantity: 100, unit: "g" },
                { item: "potato", quantity: 120, unit: "g" },
                { item: "carrot", quantity: 80, unit: "g" },
                { item: "firm tofu", quantity: 120, unit: "g" },
                { item: "breadcrumbs", quantity: 20, unit: "g" },
                { item: "parsley", quantity: 10, unit: "g" }
            ],
            instructions: 'In a large pot, boil the vegetables (potato, carrot) and legumes in plenty of water or broth. For the "pilota" (meatball), mash the tofu with breadcrumbs, garlic, and parsley, form a large ball, and add it to the broth. Boil everything for 45 minutes. Finally, add the pasta and cook it in the same broth. Serve very hot.'
        },
        {
            name: "Stuffed Zucchini with Textured Soy Protein",
            cuisine: "Mediterranean",
            calories: 460,
            protein: 26,
            cookingTime: "45 mins",
            ingredients: [
                { item: "zucchini", quantity: 300, unit: "g" },
                { item: "tvp (textured vegetable protein)", quantity: 50, unit: "g" },
                { item: "onion", quantity: 80, unit: "g" },
                { item: "crushed tomatoes", quantity: 150, unit: "g" },
                { item: "nutritional yeast", quantity: 15, unit: "g" },
                { item: "oregano", quantity: 3, unit: "g" },
                { item: "olive oil", quantity: 15, unit: "ml" }
            ],
            instructions: 'Hydrate the TVP with hot broth. Cut the zucchinis in half and scoop out the flesh. Sauté the onion, add the chopped zucchini flesh and the drained TVP. Add the tomato and oregano and cook for 10 min. Fill the zucchinis, sprinkle with nutritional yeast, and bake at 190°C (375°F) for 25-30 minutes.'
        },
        {
            name: "Spinach, Tofu & Pine Nut Flatbread (Coca d'Espinacs)",
            cuisine: "Mediterranean",
            calories: 490,
            protein: 22,
            cookingTime: "30 mins",
            ingredients: [
                { item: "pizza dough", quantity: 150, unit: "g" },
                { item: "spinach", quantity: 200, unit: "g" },
                { item: "firm tofu", quantity: 100, unit: "g" },
                { item: "pine nuts", quantity: 20, unit: "g" },
                { item: "raisins", quantity: 20, unit: "g" },
                { item: "garlic", quantity: 5, unit: "g" }
            ],
            instructions: 'Roll out the dough on a baking sheet. Sauté the garlic in a pan, add the spinach, and cook until wilted. Drain it well. Crumble the tofu and mix it with the spinach, pine nuts, and raisins. Spread the mixture over the dough and bake at 200°C (400°F) for 15-20 minutes.'
        }
    ],
     snacks: [
        { name: "Energy Balls", cuisine: "Mediterranean", calories: 120, protein: 4, cookingTime: "10 mins", ingredients: [{item: "dates", quantity: 40, unit: "g"}, {item: "walnuts", quantity: 20, unit: "g"}, {item: "chia seeds", quantity: 5, unit: "g"}, {item: "cocoa powder", quantity: 5, unit: "g"}], instructions: 'Blend dates, walnuts, chia seeds, and cocoa powder in a food processor until a sticky mixture forms. Roll into small balls.' },
        { name: "Hummus & Veggie Sticks", cuisine: "Middle Eastern", calories: 110, protein: 5, cookingTime: "5 mins", ingredients: [{item: "hummus", quantity: 50, unit: "g"}, {item: "carrots", quantity: 80, unit: "g"}, {item: "cucumber", quantity: 80, unit: "g"}, {item: "bell peppers", quantity: 80, unit: "g"}], instructions: 'Serve hummus with sliced carrots, cucumber sticks, and bell pepper strips for dipping.' },
        { name: "Protein Smoothie", cuisine: "Mediterranean", calories: 130, protein: 8, cookingTime: "5 mins", ingredients: [{item: "plant protein powder", quantity: 15, unit: "g"}, {item: "plant milk", quantity: 150, unit: "ml"}, {item: "banana", quantity: 100, unit: "g"}, {item: "spinach", quantity: 20, unit: "g"}], instructions: 'Blend plant protein powder, preferred plant milk, banana, and spinach until smooth.' },
        { name: "Mixed Nuts & Dried Fruit", cuisine: "Mediterranean", calories: 180, protein: 6, cookingTime: "1 min", ingredients: [{item: "mixed nuts", quantity: 30, unit: "g"}, {item: "dried fruit", quantity: 20, unit: "g"}], instructions: 'Combine mixed nuts and dried fruit for a quick snack.' },
        { name: "Apple with Almond Butter", cuisine: "Mediterranean", calories: 150, protein: 6, cookingTime: "5 mins", ingredients: [{item: "apple", quantity: 150, unit: "g"}, {item: "almond butter", quantity: 20, unit: "g"}, {item: "cinnamon", quantity: 2, unit: "g"}], instructions: 'Slice an apple and spread almond butter on the slices. Sprinkle with cinnamon.' },
        { name: "Edamame (steamed)", cuisine: "East Asian", calories: 160, protein: 14, cookingTime: "10 mins", ingredients: [{item: "frozen edamame", quantity: 150, unit: "g"}, {item: "salt", quantity: 2, unit: "g"}], instructions: 'Steam frozen edamame according to package instructions. Sprinkle with salt.' },
        { name: "Edamame with Garlic Chili Oil (Japanese)", cuisine: "East Asian", calories: 170, protein: 14, cookingTime: "10 mins", ingredients: [{item: "frozen edamame", quantity: 150, unit: "g"}, {item: "garlic", quantity: 8, unit: "g"}, {item: "sesame oil", quantity: 5, unit: "ml"}, {item: "chili flakes", quantity: 2, unit: "g"}, {item: "sea salt", quantity: 2, unit: "g"}, {item: "sesame seeds", quantity: 3, unit: "g"}], instructions: 'Steam edamame. Heat sesame oil with sliced garlic and chili flakes. Pour over edamame and sprinkle with salt and sesame seeds.' },
        { name: "Muhammara (Syrian Red Pepper Dip)", cuisine: "Middle Eastern", calories: 140, protein: 6, cookingTime: "15 mins", ingredients: [{item: "roasted red peppers", quantity: 100, unit: "g"}, {item: "walnuts", quantity: 30, unit: "g"}, {item: "breadcrumbs", quantity: 15, unit: "g"}, {item: "pomegranate molasses", quantity: 10, unit: "ml"}, {item: "olive oil", quantity: 15, unit: "ml"}, {item: "garlic", quantity: 5, unit: "g"}, {item: "cumin", quantity: 2, unit: "g"}, {item: "aleppo pepper", quantity: 2, unit: "g"}, {item: "pita chips", quantity: 30, unit: "g"}], instructions: 'Blend roasted peppers, walnuts, breadcrumbs, pomegranate molasses, olive oil, garlic, and spices until smooth. Serve with pita chips.' },
        { name: "Baba Ganoush with Protein Boost (Middle Eastern)", cuisine: "Middle Eastern", calories: 150, protein: 8, cookingTime: "20 mins", ingredients: [{item: "roasted eggplant", quantity: 120, unit: "g"}, {item: "tahini", quantity: 25, unit: "g"}, {item: "white beans", quantity: 40, unit: "g"}, {item: "lemon juice", quantity: 15, unit: "ml"}, {item: "garlic", quantity: 5, unit: "g"}, {item: "olive oil", quantity: 10, unit: "ml"}, {item: "smoked paprika", quantity: 1, unit: "g"}, {item: "cucumber slices", quantity: 80, unit: "g"}], instructions: 'Blend roasted eggplant flesh, tahini, white beans, lemon juice, and garlic until smooth. Drizzle with olive oil and paprika. Serve with cucumber slices.' },
        { name: "Korean Seasoned Seaweed (Miyeok)", cuisine: "East Asian", calories: 90, protein: 7, cookingTime: "10 mins", ingredients: [{item: "dried seaweed", quantity: 20, unit: "g"}, {item: "sesame oil", quantity: 5, unit: "ml"}, {item: "soy sauce", quantity: 10, unit: "ml"}, {item: "rice vinegar", quantity: 5, unit: "ml"}, {item: "garlic", quantity: 3, unit: "g"}, {item: "sesame seeds", quantity: 3, unit: "g"}, {item: "gochugaru", quantity: 1, unit: "g"}], instructions: 'Soak seaweed until tender. Squeeze out excess water. Mix with sesame oil, soy sauce, vinegar, minced garlic, and gochugaru. Sprinkle with sesame seeds.' },
        { name: "Trail Mix", cuisine: "Mediterranean", calories: 200, protein: 8, cookingTime: "5 mins", ingredients: [{item: "mixed nuts", quantity: 30, unit: "g"}, {item: "dried cranberries", quantity: 20, unit: "g"}, {item: "pumpkin seeds", quantity: 15, unit: "g"}, {item: "dark chocolate chips", quantity: 15, unit: "g"}], instructions: 'Mix all ingredients together in a bowl. Store in airtight container for up to one week.' },
        { name: "Stuffed Dates", cuisine: "Middle Eastern", calories: 160, protein: 6, cookingTime: "10 mins", ingredients: [{item: "medjool dates", quantity: 60, unit: "g"}, {item: "almond butter", quantity: 20, unit: "g"}, {item: "chopped walnuts", quantity: 15, unit: "g"}, {item: "cinnamon", quantity: 1, unit: "g"}], instructions: 'Remove pits from dates. Stuff each date with almond butter and chopped walnuts. Sprinkle with cinnamon.' },
        { name: "Rice Paper Rolls (Vietnamese)", cuisine: "Southeast Asian", calories: 140, protein: 8, cookingTime: "15 mins", ingredients: [{item: "rice paper", quantity: 40, unit: "g"}, {item: "lettuce", quantity: 60, unit: "g"}, {item: "cucumber", quantity: 50, unit: "g"}, {item: "carrots", quantity: 40, unit: "g"}, {item: "fresh herbs", quantity: 20, unit: "g"}, {item: "firm tofu", quantity: 60, unit: "g"}, {item: "peanut dipping sauce", quantity: 20, unit: "g"}], instructions: 'Soften rice paper in warm water. Fill with lettuce, julienned vegetables, herbs, and sliced tofu. Roll tightly and serve with peanut sauce.' },
        { name: "Stuffed Grape Leaves (Greek)", cuisine: "Mediterranean", calories: 180, protein: 7, cookingTime: "20 mins", ingredients: [{item: "grape leaves", quantity: 60, unit: "g"}, {item: "rice", quantity: 40, unit: "g"}, {item: "pine nuts", quantity: 15, unit: "g"}, {item: "onion", quantity: 30, unit: "g"}, {item: "dill", quantity: 10, unit: "g"}, {item: "lemon juice", quantity: 15, unit: "ml"}, {item: "olive oil", quantity: 10, unit: "ml"}], instructions: 'Cook rice with onion, pine nuts, and dill. Blanch grape leaves. Wrap rice mixture in leaves, drizzle with olive oil and lemon juice. Steam for 15 minutes.' },
        { name: "Mango Sticky Rice Bites (Thai)", cuisine: "Southeast Asian", calories: 150, protein: 4, cookingTime: "25 mins", ingredients: [{item: "glutinous rice", quantity: 50, unit: "g"}, {item: "coconut milk", quantity: 80, unit: "ml"}, {item: "palm sugar", quantity: 15, unit: "g"}, {item: "fresh mango", quantity: 80, unit: "g"}, {item: "toasted coconut", quantity: 5, unit: "g"}, {item: "salt", quantity: 1, unit: "g"}], instructions: 'Steam glutinous rice until tender. Heat coconut milk with palm sugar and salt. Mix with cooked rice. Serve with diced mango and toasted coconut.' },
        { name: "Plantain Chips (Caribbean)", cuisine: "Caribbean", calories: 130, protein: 3, cookingTime: "20 mins", ingredients: [{item: "green plantains", quantity: 100, unit: "g"}, {item: "coconut oil", quantity: 15, unit: "ml"}, {item: "sea salt", quantity: 2, unit: "g"}, {item: "lime juice", quantity: 10, unit: "ml"}, {item: "chili powder", quantity: 1, unit: "g"}], instructions: 'Slice plantains thinly. Toss with coconut oil and salt. Bake at 375°F for 15-20 minutes until crispy. Sprinkle with lime juice and chili powder.' },
        { name: "Beetroot Hummus", cuisine: "Middle Eastern", calories: 120, protein: 6, cookingTime: "15 mins", ingredients: [{item: "cooked beetroot", quantity: 80, unit: "g"}, {item: "chickpeas", quantity: 60, unit: "g"}, {item: "tahini", quantity: 15, unit: "g"}, {item: "lemon juice", quantity: 15, unit: "ml"}, {item: "garlic", quantity: 5, unit: "g"}, {item: "olive oil", quantity: 10, unit: "ml"}, {item: "pita chips", quantity: 30, unit: "g"}], instructions: 'Blend cooked beetroot, chickpeas, tahini, lemon juice, and garlic until smooth. Drizzle with olive oil. Serve with pita chips.' },
        { name: "Green Tea Ice Cream Mochi (Japanese)", cuisine: "East Asian", calories: 110, protein: 4, cookingTime: "30 mins", ingredients: [{item: "mochiko flour", quantity: 40, unit: "g"}, {item: "coconut milk", quantity: 60, unit: "ml"}, {item: "matcha powder", quantity: 3, unit: "g"}, {item: "sugar", quantity: 20, unit: "g"}, {item: "vanilla ice cream", quantity: 60, unit: "g"}, {item: "cornstarch", quantity: 10, unit: "g"}], instructions: 'Mix mochiko, coconut milk, matcha, and sugar. Microwave 2 minutes, stir, repeat until smooth. Wrap small scoops of ice cream in mochi dough dusted with cornstarch.' }
    ]
};

const ingredientCategories = {
    'Produce': ['banana', 'berries', 'spinach', 'avocado', 'tomato', 'lime', 'vegetables', 'leafy greens', 'bell peppers', 'carrots', 'cucumber', 'apple', 'sweet potato', 'cherry tomatoes', 'fresh fruit', 'alfalfa sprouts', 'fresh ginger', 'seasonal vegetables', 'lettuce', 'basil', 'onion', 'garlic', 'diced tomatoes', 'eggplant', 'zucchini', 'cabbage', 'turnips', 'okra', 'collard greens', 'mango', 'pineapple', 'beets', 'plantain', 'broccoli', 'bok choy', 'courgette', 'red onion', 'fresh strawberries', 'fresh blueberries', 'celery', 'shiitake mushrooms', 'mixed mushrooms', 'portobello mushroom', 'thai eggplant', 'lime leaves', 'fresh mint', 'fresh parsley', 'dill', 'kale', 'daikon radish', 'romaine lettuce', 'aubergine', 'Chinese eggplant', 'potato', 'arugula', 'fresh figs'],
    'Pantry Staples': ['oats', 'chia seeds', 'maple syrup', 'quinoa', 'rice', 'bread', 'tortilla', 'pasta', 'dates', 'spices', 'herbs', 'vanilla extract', 'turmeric', 'curry powder', 'curry paste', 'cocoa powder', 'cinnamon', 'canned crushed tomatoes', 'flax seeds', 'salsa', 'curry block sauce', 'panko breadcrumbs', 'flour', 'garam masala', 'brown sugar', 'chili paste', 'allspice', 'bay leaves', 'tamarind paste', 'ras el hanout', 'preserved lemon', 'cornstarch', 'doubanjiang', 'gochujang', 'mirin', 'sriracha', 'oyster sauce alternative', 'black tea', 'pomegranate molasses', 'za\'atar', 'shawarma spice', 'freekeh', 'harissa paste', 'phyllo pastry', 'bulgur wheat', 'semolina', 'arepa flour', 'mochiko flour', 'matcha powder', 'guarana powder', 'lucuma powder', 'black pepper', 'red pepper flakes', 'sumac', 'white pepper', 'kala namak', 'smoked paprika', 'baking powder', 'italian herbs', 'dried oregano', 'cajun seasoning', 'jerk seasoning', 'rendang paste', 'palm sugar', 'biryani spice mix', 'saffron', 'caraway seeds', 'dried chilies', 'hominy', 'dried lime', 'nutritional yeast', 'breadcrumbs', 'coconut sugar', 'tomato paste', 'fermented black beans', 'sichuan peppercorns', 'wild rice', 'pumpernickel bread', 'lemongrass', 'galangal', 'ancho chilies', 'arborio rice', 'bomba rice', 'white wine', 'long grain rice', 'yellow split peas', 'bbq sauce', 'oat flour', 'rolled oats', 'buckwheat groats', 'moong dal', 'black chickpeas', 'lentil batter', 'pickled vegetables', 'rice flour', 'fava beans', 'almond flour', 'pea protein powder', 'refried beans', 'tostada shells', 'short grain rice', 'baguette', 'Japanese curry roux', 'young jackfruit', 'canned tomatoes', 'pita bread', 'toasted rice powder', 'macaroni', 'rice vermicelli', 'capers', 'croutons', 'TVP mince', 'ghee alternative', 'soy protein chunks', 'wide noodles', 'fine bulgur', 'udon noodles', 'mung beans', 'paella rice', 'artichoke hearts', 'pumpkin puree', 'lasagna sheets', 'kaffir lime leaves', 'collard greens', 'coconut rice', 'wheat noodles', 'muesli', 'agave syrup', 'cardamom', 'dried apricots', 'rye bread', 'sun-dried tomatoes', 'pizza dough', 'sherry vinegar'],
    'Plant Proteins': ['chickpeas', 'lentils', 'beans', 'tofu', 'plant protein powder', 'black bean patty', 'vegan sausage', 'vegan patty', 'beyond meat grounds', 'impossible burger patty', 'vegan deli slices', 'vegan meatballs', 'edamame', 'tempeh', 'seitan', 'soy mince', 'tvp (textured vegetable protein)', 'soy curls', 'smoked tofu', 'pea protein powder', 'firm tofu', 'silken tofu', 'extra firm tofu', 'scrambled tofu', 'scrambled tempeh', 'seitan bacon', 'soy protein powder', 'soy protein chunks', 'seitan sausage'],
    'Nuts & Seeds': ['hemp seeds', 'nuts', 'almonds', 'walnuts', 'cashews', 'almond butter', 'tahini', 'pumpkin seeds', 'pine nuts', 'sesame seeds', 'peanuts', 'peanut butter', 'ground flax', 'sliced almonds', 'pistachios'],
    'Plant Milks & Alternatives': ['almond milk', 'coconut milk', 'cashew cream', 'soy milk', 'oat milk', 'plant milk', 'coconut yogurt', 'vegan mayo', 'yogurt alternative', 'ghee alternative', 'soy yogurt', 'vegan butter', 'coconut cream', 'oat milk yogurt'],
    'Condiments & Sauces': ['hummus', 'soy sauce', 'tahini dressing', 'vegan mayonnaise', 'ketchup', 'marinara sauce', 'dressing', 'chili oil', 'rice vinegar', 'balsamic vinegar', 'hot sauce', 'peanut dipping sauce', 'enchilada sauce', 'dijon mustard', 'lingonberry jam', 'fish sauce alternative', 'yogurt sauce', 'salsa roja', 'shawarma spice blend', 'vegan caesar dressing'],
    'Frozen': ['frozen banana', 'frozen edamame', 'frozen acai', 'vanilla ice cream', 'mixed berries'],
    'Other': ['granola', 'vegetable broth', 'corn', 'toast', 'bun', 'salt', 'pita bread', 'pita chips', 'coffee', 'iced coffee', 'water', 'whole grain toast', 'whole grain bun', 'protein granola', 'sourdough bread', 'sourdough roll', 'seaweed', 'gochugaru', 'flatbread', 'chapati', 'acai puree', 'gyoza wrappers', 'sushi rice', 'dried seaweed', 'glutinous rice', 'cooked beetroot', 'green plantains', 'ramen noodles', 'potato gnocchi', 'polenta', 'egg noodles', 'injera bread', 'butter lettuce', 'couscous', 'naan bread', 'lettuce cups', 'homemade granola', 'vegan pancake mix', 'dashi stock', 'green tea', 'cooked brown rice', 'nori sheets', 'sourdough roll', 'tostada shells', 'rice paper', 'grape leaves', 'medjool dates']
};
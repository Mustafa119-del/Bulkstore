import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'on-gold-standard-whey',
    name: {
      ar: 'Optimum Nutrition Gold Standard 100% Whey',
      en: 'Optimum Nutrition Gold Standard 100% Whey'
    },
    brand: 'Optimum Nutrition (ON)',
    origin: 'USA',
    category: 'protein',
    categoryName: {
      ar: 'واي بروتين',
      en: 'Whey Protein'
    },
    image: '/images/products/whey-gold.png',
    badge: {
      ar: 'الأكثر مبيعاً عالمياً',
      en: 'Global Best Seller'
    },
    description: {
      ar: 'المعيار الذهبي لبروتينات بناء العضلات الصافية والاستشفاء بعد التمرين الشاق من أنقى مصادر مصل اللبن المعزول والمركز.',
      en: 'The world’s best-selling 100% whey protein powder for lean muscle repair and accelerated recovery.'
    },
    features: {
      ar: [
        '24 جم بروتين نقي لكل سكوب من أجود مصادر الـ Whey Isolate & Concentrate',
        '5.5 جم BCAAs طبيعية لتسريع الاستشفاء العضلي ومنع الهدم',
        '4 جم جلوتامين وحمض الجلوتاميك لدعم المناعة والألياف العضلية',
        'سريع الذوبان بمجرد التقليب وبدون تكتل مع نكهات متميزة'
      ],
      en: [
        '24g Pure Protein per scoop from premium Whey Isolate & Concentrate',
        '5.5g Naturally occurring BCAAs to stop catabolism and trigger protein synthesis',
        '4g Glutamine & Glutamic Acid for muscle recovery',
        'Instantized formula for seamless mixability without clumping'
      ]
    },
    usageGuide: {
      ar: 'اخلط سكوب واحد (حوالي 30.4 جم) مع 180-240 مل ماء بارد أو حليب خالي الدسم في الشيكر ورجه لمدة 30 ثانية.',
      en: 'Mix 1 scoop (approx 30.4g) with 6-8 fl oz of cold water or skim milk in a shaker cup and shake for 30 seconds.'
    },
    timing: {
      ar: 'مباشرة بعد التمرين بـ 20-30 دقيقة أو صباحاً عند الاستيقاظ لسد احتياج العضلات السريع.',
      en: 'Within 20-30 minutes post-workout or first thing in the morning.'
    },
    nutritionFacts: [
      { labelAr: 'البروتين', labelEn: 'Protein', value: '24g', dailyValue: '48%' },
      { labelAr: 'السعرات الحرارية', labelEn: 'Calories', value: '120 kcal' },
      { labelAr: 'الكربوهيدرات', labelEn: 'Carbs', value: '3g', dailyValue: '1%' },
      { labelAr: 'الدهون الكلية', labelEn: 'Total Fat', value: '1.5g', dailyValue: '2%' },
      { labelAr: 'السكريات', labelEn: 'Sugars', value: '1g' },
      { labelAr: 'BCAAs', labelEn: 'BCAAs', value: '5.5g' }
    ],
    specs: {
      servings: '74 حصة (5 باوند / 2.27 كجم)',
      servingSize: '1 Scoop (30.4g)',
      proteinPerServing: '24g',
      caloriesPerServing: '120 kcal',
      carbsPerServing: '3g',
      weight: '5 lbs (2.27 kg)',
      flavorOptions: ['Double Rich Chocolate', 'Vanilla Ice Cream', 'Delicious Strawberry', 'Extreme Milk Chocolate']
    },
    goal: 'muscle_building',
    inStock: true
  },
  {
    id: 'dymatize-iso-100',
    name: {
      ar: 'Dymatize ISO 100 Hydrolyzed Whey Isolate',
      en: 'Dymatize ISO 100 Hydrolyzed Whey Isolate'
    },
    brand: 'Dymatize',
    origin: 'USA',
    category: 'protein',
    categoryName: {
      ar: 'واي بروتين أيزوليت',
      en: 'Whey Isolate'
    },
    image: '/images/products/dymatize-iso100.png',
    badge: {
      ar: 'نقاء فائق للتنشيف',
      en: 'Ultra Pure Lean'
    },
    description: {
      ar: 'بروتين هايدرولايزد أيزوليت مجزأ مسبقاً لسرعة امتصاص فائقة وخالٍ تماماً تقريباً من الدهون واللاكتوز، الاختيار الأول لفترات التنشيف الصارم.',
      en: 'Pre-hydrolyzed 100% whey protein isolate for lightning-fast absorption, zero lactose, and unmatched lean definition.'
    },
    features: {
      ar: [
        '25 جم بروتين هيدرولايزد أيزوليت سريع الهضم والامتصاص',
        '5.5 جم BCAAs متضمنة 2.6 جم ليوسين لتحفيز البناء العضلي mTOR',
        'أقل من 1 جم سكر وأقل من 1 جم دهون خالية من اللاكتوز والجلوتين',
        'مثالي للرياضيين الذين يعانون من حساسية الحليب أو يبحثون عن تنشيف صلب'
      ],
      en: [
        '25g Hydrolyzed 100% Whey Protein Isolate for ultra-fast digestion',
        '5.5g BCAAs with 2.6g Leucine to trigger muscle protein synthesis',
        'Less than 1g sugar and 1g fat, gluten-free & lactose-free',
        'Flawless choice for strict cutting phases and sensitive stomachs'
      ]
    },
    usageGuide: {
      ar: 'اخلط سكوب واحد مع 150-180 مل ماء بارد في شيكر. سريع الذوبان للغاية.',
      en: 'Mix 1 scoop with 5-6 fl oz of cold water. Mixes instantly with a spoon or shaker.'
    },
    timing: {
      ar: 'فور انتهاء التمرين مباشرة أو قبل الإفطار أثناء فترات التنشيف.',
      en: 'Immediately post-workout or first thing in the morning on an empty stomach.'
    },
    nutritionFacts: [
      { labelAr: 'البروتين', labelEn: 'Protein', value: '25g', dailyValue: '50%' },
      { labelAr: 'السعرات الحرارية', labelEn: 'Calories', value: '110 kcal' },
      { labelAr: 'الكربوهيدرات', labelEn: 'Carbs', value: '< 1g', dailyValue: '0%' },
      { labelAr: 'الدهون الكلية', labelEn: 'Total Fat', value: '0.5g', dailyValue: '1%' },
      { labelAr: 'اللاكتوز', labelEn: 'Lactose', value: '0g' },
      { labelAr: 'الليوسين', labelEn: 'Leucine', value: '2.6g' }
    ],
    specs: {
      servings: '71-76 حصة (5 باوند / 2.3 كجم)',
      servingSize: '1 Scoop (30g)',
      proteinPerServing: '25g',
      caloriesPerServing: '110 kcal',
      carbsPerServing: '<1g',
      weight: '5 lbs (2.3 kg)',
      flavorOptions: ['Gourmet Chocolate', 'Fudge Brownie', 'Birthday Cake', 'Smooth Banana', 'Cookies & Cream']
    },
    goal: 'muscle_building',
    inStock: true
  },
  {
    id: 'muscletech-platinum-creatine',
    name: {
      ar: 'MuscleTech Platinum 100% Creatine Monohydrate',
      en: 'MuscleTech Platinum 100% Creatine Monohydrate'
    },
    brand: 'MuscleTech',
    origin: 'USA',
    category: 'creatine',
    categoryName: {
      ar: 'كرياتين مونوهايدريت',
      en: 'Creatine Monohydrate'
    },
    image: '/images/products/creatine-monohydrate.png',
    badge: {
      ar: 'زيادة القوة والحجم',
      en: 'Max Power & Volume'
    },
    description: {
      ar: 'كرياتين ميكرونايزد نقي 100% بدون أي إضافات، يعمل على تجديد مخازن الـ ATP الخلوية وزيادة حجم الخلايا العضلية ورفع الأوزان القياسية.',
      en: 'Ultra-pure micronized creatine monohydrate engineered to saturate ATP stores, boost raw lifting power, and enhance muscle cell volumization.'
    },
    features: {
      ar: [
        '5 جم كرياتين مونوهايدريت نقي في كل حصة لزيادة القوة والتحمل',
        'ميكرونايزد بجزيئات فائقة الدقة لمنع الترسيب وضمان الامتصاص الكامل',
        'يزيد من احتباس الماء داخل الألياف العضلية ليعطي مظهراً ممتلئاً وقوياً',
        'بدون أي نكهات أو سكر، يمكن إضافته لأي عصير أو واي بروتين'
      ],
      en: [
        '5g 100% Pure Creatine Monohydrate per serving',
        'Micronized for superior solubility with zero gritty residue',
        'Amplifies muscle cell hydration and explosive workout strength',
        'Unflavored - easily mixes with water, juice, or your post-workout shake'
      ]
    },
    usageGuide: {
      ar: 'تناول سكوب واحد (5 جم) يومياً مع 200-250 مل ماء أو عصير كربوهيدراتي سريع لزيادة الامتصاص.',
      en: 'Take 1 scoop (5g) daily mixed with 8 fl oz of water or fruit juice.'
    },
    timing: {
      ar: 'يومياً بعد التمرين مباشرة في أيام التمرين، أو مع وجبة الإفطار في أيام الراحة.',
      en: 'Directly post-workout on training days, or with breakfast on non-training rest days.'
    },
    nutritionFacts: [
      { labelAr: 'كرياتين مونوهايدريت', labelEn: 'Creatine Monohydrate', value: '5,000 mg' },
      { labelAr: 'السعرات الحرارية', labelEn: 'Calories', value: '0 kcal' },
      { labelAr: 'الدهون', labelEn: 'Fat', value: '0g' },
      { labelAr: 'الكربوهيدرات', labelEn: 'Carbs', value: '0g' }
    ],
    specs: {
      servings: '80 حصة (400 جم)',
      servingSize: '1 Scoop (5g)',
      creatinePerServing: '5g',
      caloriesPerServing: '0 kcal',
      weight: '400g / 0.88 lbs',
      flavorOptions: ['Unflavored (بدون نكهة)']
    },
    goal: 'muscle_building',
    inStock: true
  },
  {
    id: 'cellucor-c4-original',
    name: {
      ar: 'Cellucor C4 Original Pre-Workout',
      en: 'Cellucor C4 Original Pre-Workout'
    },
    brand: 'Cellucor',
    origin: 'USA',
    category: 'preworkout',
    categoryName: {
      ar: 'طاقة وبمب للتمرين',
      en: 'Pre-Workout Energy'
    },
    image: '/images/products/c4-preworkout.png',
    badge: {
      ar: 'طاقة وتركيز ناري',
      en: 'Explosive Energy'
    },
    description: {
      ar: 'مكمل الطاقة الأكثر شهرة للرياضيين في مصر والعالم، يمنحك طاقة انفجارية فورية، تركيزاً حاداً، وبمب عضلي استثنائي للتغلب على أصعب التمارين.',
      en: 'The legendary pre-workout powder that started it all — delivers clean explosive energy, laser focus, and skin-splitting pumps.'
    },
    features: {
      ar: [
        '150 مجم كافيين لا مائي لرفع مستويات النشاط الذهني والبدني فوراً',
        '1.6 جم بيتا ألانين CarnoSyn لتقليل تراكم حمض اللاكتيك وتأخير التعب',
        '1 جم كرياتين نترات (NO3-T) لدعم تدفق الدم وضخامة البمب',
        'أرجينين AKG وفيتامينات B6 و B12 لدعم مسار الطاقة الحيوي'
      ],
      en: [
        '150mg Anhydrous Caffeine for clean explosive energy & mental alertness',
        '1.6g CarnoSyn Beta-Alanine to delay muscle fatigue and buffer lactic acid',
        '1g Creatine Nitrate (NO3-T) for dual-path pumps and strength',
        'Arginine AKG with Vitamin B6 & B12 energy metabolism complex'
      ]
    },
    usageGuide: {
      ar: 'اخلط سكوب واحد مع 180-240 مل ماء بارد قبل التمرين بـ 20-30 دقيقة. لا تتجاوز سكوب واحد في اليوم.',
      en: 'Take one serving (1 scoop) mixed with 6 fl oz of water 20-30 minutes before workout. Do not exceed 1 scoop in 24 hours.'
    },
    timing: {
      ar: 'قبل بدء التمرين بـ 25 دقيقة فقط على معدة غير ممتلئة.',
      en: '20-30 minutes prior to training session.'
    },
    nutritionFacts: [
      { labelAr: 'كافيين', labelEn: 'Caffeine', value: '150 mg' },
      { labelAr: 'بيتا ألانين', labelEn: 'Beta-Alanine', value: '1,600 mg' },
      { labelAr: 'كرياتين نترات', labelEn: 'Creatine Nitrate', value: '1,000 mg' },
      { labelAr: 'أرجينين AKG', labelEn: 'Arginine AKG', value: '1,000 mg' },
      { labelAr: 'فيتامين C', labelEn: 'Vitamin C', value: '250 mg', dailyValue: '278%' },
      { labelAr: 'فيتامين B12', labelEn: 'Vitamin B12', value: '35 mcg', dailyValue: '1,458%' }
    ],
    specs: {
      servings: '60 حصة (390 جم)',
      servingSize: '1 Scoop (6.5g)',
      caffeinePerServing: '150mg',
      caloriesPerServing: '5 kcal',
      weight: '390g / 60 Servings',
      flavorOptions: ['Icy Blue Razz', 'Fruit Punch', 'Watermelon', 'Cherry Limeade', 'Orange Burst']
    },
    goal: 'energy_endurance',
    inStock: true
  },
  {
    id: 'on-serious-mass',
    name: {
      ar: 'Optimum Nutrition Serious Mass Gainer',
      en: 'Optimum Nutrition Serious Mass Gainer'
    },
    brand: 'Optimum Nutrition (ON)',
    origin: 'USA',
    category: 'mass-gainer',
    categoryName: {
      ar: 'ماس جينر للضخامة',
      en: 'Mass Gainer'
    },
    image: '/images/products/serious-mass.png',
    badge: {
      ar: 'ضخامة وزيادة وزن',
      en: 'Ultimate Bulking'
    },
    description: {
      ar: 'التركيبة الأقوى لزيادة الوزن والكتلة العضلية لأصحاب الحرق العالي، تحتوي على 1,250 سعرة حرارية و50 جم بروتين مركب لكل حصة كاملة.',
      en: 'High calorie weight gainer formula engineered for hardgainers and athletes needing serious calories and muscle building mass.'
    },
    features: {
      ar: [
        '1,250 سعرة حرارية لكل حصة لكسر ثبات الوزن وبناء الحجم',
        '50 جم بروتين مركب (Whey + Casein + Egg) لتغذية عضلية مستمرة',
        '252 جم كربوهيدرات معقدة لإعادة تعبئة مخازن الجليكوجين',
        'مدعم بـ 25 فيتامين ومعدن أساسي مع 3 جم كرياتين وجلوتامين'
      ],
      en: [
        '1,250 Calories per serving to support serious muscle hypertrophy',
        '50g High quality protein blend (Whey, Casein, Egg)',
        '252g Complex carbohydrates without added sugar overload',
        'Fortified with 25 essential vitamins & minerals, 3g Creatine & Glutamine'
      ]
    },
    usageGuide: {
      ar: 'امزج سكوبين (حصة كاملة) أو سكوب واحد (نصف حصة) مع 700 مل ماء بارد أو حليب في الخلاط. يمكن تقسيمه على مرتين يومياً.',
      en: 'Blend 2 scoops with 24 fl oz of cold water or milk in a blender for 45-60 seconds. Can be split into half servings twice daily.'
    },
    timing: {
      ar: 'بين الوجبات الرئيسية ومباشرة بعد التمرين، وقبل النوم.',
      en: 'Between meals, post-workout, and/or before bed.'
    },
    nutritionFacts: [
      { labelAr: 'السعرات الحرارية', labelEn: 'Calories', value: '1,250 kcal' },
      { labelAr: 'البروتين', labelEn: 'Protein', value: '50g', dailyValue: '100%' },
      { labelAr: 'الكربوهيدرات', labelEn: 'Carbohydrates', value: '252g', dailyValue: '92%' },
      { labelAr: 'الدهون الكلية', labelEn: 'Total Fat', value: '4.5g', dailyValue: '6%' },
      { labelAr: 'الكرياتين المضاف', labelEn: 'Creatine Monohydrate', value: '3,000 mg' },
      { labelAr: 'الجلوتامين', labelEn: 'Glutamine', value: '500 mg' }
    ],
    specs: {
      servings: '16 حصة ضخمة (6 باوند / 2.72 كجم)',
      servingSize: '2 Scoops (334g)',
      proteinPerServing: '50g',
      caloriesPerServing: '1,250 kcal',
      carbsPerServing: '252g',
      weight: '6 lbs (2.72 kg) & 12 lbs available',
      flavorOptions: ['Chocolate', 'Vanilla', 'Banana', 'Chocolate Peanut Butter']
    },
    goal: 'bulking',
    inStock: true
  },
  {
    id: 'universal-animal-pak',
    name: {
      ar: 'Universal Nutrition Animal Pak Training Pack',
      en: 'Universal Nutrition Animal Pak Multi-Pack'
    },
    brand: 'Universal Nutrition',
    origin: 'USA',
    category: 'vitamins',
    categoryName: {
      ar: 'فيتامينات وصحة الرياضي',
      en: 'Athlete Multivitamins'
    },
    image: '/images/products/animal-pak.png',
    badge: {
      ar: 'الأساس الصلب منذ 1983',
      en: 'The True Original'
    },
    description: {
      ar: 'الباك الغذائي الأسطوري في عالم كمال الأجسام والرياضة، تركيبة شاملة تحتوي على أكثر من 85 عنصراً ومستخلصاً لدعم المناعة والمفاصل والأداء الحيوي.',
      en: 'The legendary all-in-one nutritional foundation built for intense lifters, hard-training athletes, and fitness enthusiasts since 1983.'
    },
    features: {
      ar: [
        'أكثر من 85 عنصراً غذائياً يشمل الفيتامينات، المعادن، ومضادات الأكسدة',
        'مجمع أحماض أمينية وإنزيمات هضمية لتحسين امتصاص البروتين والوجبات',
        'دعم صحة الكبد والمفاصل والأوتار للرياضيين الذين يرفعون أوزاناً ثقيلة',
        'باكيتات مريحة للاستخدام اليومي جاهزة لحقيبة الجيم'
      ],
      en: [
        '85+ highly absorbable active ingredients per convenient training pack',
        'Complete Amino Complex + Digestive Enzyme Blend for nutrient uptake',
        'Liver support, joint optimization, and cellular immune shield',
        'Individually sealed daily packets ready for your gym bag'
      ]
    },
    usageGuide: {
      ar: 'تناول باكيتاً واحداً يومياً مع وجبة الإفطار أو مع أي وجبة أساسية مع كمية وفيرة من الماء.',
      en: 'Take 1 pack daily with breakfast or any main whole-food meal with plenty of water.'
    },
    timing: {
      ar: 'صباحاً مع وجبة الإفطار أو مع وجبة ما قبل التمرين.',
      en: 'Daily with breakfast or your pre-workout meal.'
    },
    nutritionFacts: [
      { labelAr: 'فيتامين C', labelEn: 'Vitamin C', value: '1,000 mg', dailyValue: '1,111%' },
      { labelAr: 'فيتامين D', labelEn: 'Vitamin D', value: '100 mcg (4,000 IU)', dailyValue: '500%' },
      { labelAr: 'فيتامين B6', labelEn: 'Vitamin B6', value: '100 mg', dailyValue: '5,882%' },
      { labelAr: 'الزنك', labelEn: 'Zinc', value: '30 mg', dailyValue: '273%' },
      { labelAr: 'مجمع الأحماض الأمينية', labelEn: 'Amino Acid Complex', value: 'Full Spectrum' },
      { labelAr: 'إنزيمات هضمية', labelEn: 'Digestive Enzymes', value: 'Papain, Bromelain, Lipase' }
    ],
    specs: {
      servings: '44 باك يومي مغلف',
      servingSize: '1 Pack (Pills)',
      weight: '44 Packs Canister',
      flavorOptions: ['Original Packets / Unflavored']
    },
    goal: 'health_recovery',
    inStock: true
  }
];

export const PRODUCT_CATEGORIES = [
  {
    id: 'all',
    nameAr: 'كل المنتجات',
    nameEn: 'All Products',
    icon: 'Dumbbell',
    mascotActionAr: 'تشكيلة متكاملة لأبطال الجيم بالقاهرة',
    mascotActionEn: 'Complete stack for real lifters in Cairo'
  },
  {
    id: 'protein',
    nameAr: 'بروتين وواي (Protein)',
    nameEn: 'Protein Powder',
    icon: 'Flame',
    mascotActionAr: 'الغوريلا تعمل Bicep Curl مع البروتين!',
    mascotActionEn: 'Gorilla Bicep Curl for Protein Power!'
  },
  {
    id: 'creatine',
    nameAr: 'كرياتين (Creatine)',
    nameEn: 'Creatine Monohydrate',
    icon: 'Zap',
    mascotActionAr: 'الغوريلا تعمل Most Muscular Flex!',
    mascotActionEn: 'Gorilla Flex for Creatine Strength!'
  },
  {
    id: 'preworkout',
    nameAr: 'طاقة وبمب (Pre-Workout)',
    nameEn: 'Pre-Workout & Energy',
    icon: 'Activity',
    mascotActionAr: 'طاقة انفجارية وتركيز ناري للتمرين!',
    mascotActionEn: 'Explosive energy before heavy workout!'
  },
  {
    id: 'mass-gainer',
    nameAr: 'زيادة وزن وضخامة (Mass Gainer)',
    nameEn: 'Mass Gainers',
    icon: 'TrendingUp',
    mascotActionAr: 'وقت التضخيم العضلي والـ Bulk!',
    mascotActionEn: 'Time to Bulk Up!'
  },
  {
    id: 'vitamins',
    nameAr: 'فيتامينات وصحة (Vitamins & Health)',
    nameEn: 'Vitamins & Health',
    icon: 'Shield',
    mascotActionAr: 'استشفاء عضلي وحماية الجسم والمفاصل',
    mascotActionEn: 'Complete recovery, joints & immunity'
  }
];

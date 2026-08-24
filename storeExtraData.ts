import { DeliveryZone, FAQItem } from '../types';

export const CAIRO_DELIVERY_ZONES: DeliveryZone[] = [
  {
    id: 'zone-north',
    nameAr: 'منطقة شمال القاهرة وشبرا والساحل',
    nameEn: 'North Cairo, Shubra & Sahel',
    estimatedTimeAr: 'توصيل فوري بنفس اليوم (خلال 2-4 ساعات)',
    estimatedTimeEn: 'Instant Same-Day (Within 2-4 hours)',
    popularAreasAr: ['الساحل (مقر المحل)', 'شبرا مصر', 'الخلفاوي', 'روض الفرج', 'شريف', 'الشرابية', 'شبرا الخيمة'],
    popularAreasEn: ['Sahel (Store Base)', 'Shubra Masr', 'El-Khalafawy', 'Rod El-Farag', 'Sherif', 'El-Sharabiya'],
    status: 'instant'
  },
  {
    id: 'zone-east',
    nameAr: 'مصر الجديدة ومدينة نصر والنزهة',
    nameEn: 'Heliopolis & Nasr City',
    estimatedTimeAr: 'توصيل خلال نفس اليوم أو اليوم التالي صباحاً',
    estimatedTimeEn: 'Same-day or next-day morning delivery',
    popularAreasAr: ['مدينة نصر (الحي السابع، الثامن، عباس العقاد)', 'مصر الجديدة (الكوربة، تريومف)', 'النزهة', 'عين شمس', 'مصر والسودان'],
    popularAreasEn: ['Nasr City', 'Heliopolis (Korba, Triumph)', 'El-Nozha', 'Ain Shams'],
    status: 'same-day'
  },
  {
    id: 'zone-new-cairo',
    nameAr: 'القاهرة الجديدة والتجمع والشروق',
    nameEn: 'New Cairo, 5th Settlement & Shorouk',
    estimatedTimeAr: 'توصيل سريع خلال 24 ساعة',
    estimatedTimeEn: 'Fast delivery within 24 hours',
    popularAreasAr: ['التجمع الأول والخامس', 'الرحاب', 'مدينتي', 'الشروق', 'المستقبل'],
    popularAreasEn: ['1st & 5th Settlement', 'Rehab City', 'Madinaty', 'El-Shorouk'],
    status: 'same-day'
  },
  {
    id: 'zone-south',
    nameAr: 'المعادي والمقطم ووسط البلد',
    nameEn: 'Maadi, Mokattam & Downtown',
    estimatedTimeAr: 'توصيل خلال نفس اليوم أو 24 ساعة',
    estimatedTimeEn: 'Same-day or within 24 hours',
    popularAreasAr: ['المعادي (دجلة، اللاسلكي)', 'المقطم', 'وسط البلد', 'الزمالك', 'الدقي', 'المهندسين', 'المنيل'],
    popularAreasEn: ['Maadi (Degla)', 'Mokattam', 'Downtown', 'Zamalek', 'Dokki', 'Mohandessin'],
    status: 'same-day'
  },
  {
    id: 'zone-giza',
    nameAr: 'الجيزة والهرم وفيصل وأكتوبر',
    nameEn: 'Giza, Haram, Faisal & 6th of October',
    estimatedTimeAr: 'توصيل سريع منسق يومياً',
    estimatedTimeEn: 'Daily coordinated fast delivery',
    popularAreasAr: ['الهرم', 'فيصل', 'حدائق الأهرام', 'الشيخ زايد', '6 أكتوبر'],
    popularAreasEn: ['Haram', 'Faisal', 'Hadayek Al-Ahram', 'Sheikh Zayed', '6th of October'],
    status: 'next-day'
  }
];

export const STORE_FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'products',
    questionAr: 'هل جميع المكملات المتوفرة في Bulk Store أصلية ومضمونة 100%؟',
    questionEn: 'Are all supplements at Bulk Store 100% authentic and genuine?',
    answerAr: 'نعم، بكل تأكيد! نحن في Bulk Store نلتزم ببيع المكملات الغذائية الأصلية والمستوردة فقط من الوكلاء المعتمدين مع علامات الإغلاق الأصلية وتواريخ الصلاحية الواضحة والباركود. لا نبيع أي منتجات مجهولة المصدر نهائياً.',
    answerEn: 'Yes, 100%! At Bulk Store we strictly deal with verified authentic sports supplements imported directly from certified channels with intact factory seals, clear lot numbers, and verifiable barcodes.'
  },
  {
    id: 'faq-2',
    category: 'delivery',
    questionAr: 'كيف تتم عملية التوصيل داخل القاهرة وما هي طرق الدفع؟',
    questionEn: 'How does delivery work in Cairo and what payment methods are supported?',
    answerAr: 'التوصيل متاح إلى جميع مناطق القاهرة والجيزة. بمجرد اختيار مكملاتك والتواصل معنا على WhatsApp (+20 15 09907801)، نقوم بتأكيد الأوردر وموعد التسليم. الدفع متاح عند الاستلام نقداً (كاش) أو عبر InstaPay.',
    answerEn: 'Delivery covers all districts of Cairo and Giza. Once you choose your products and text us on WhatsApp, we dispatch the courier. You can pay on delivery via Cash or InstaPay.'
  },
  {
    id: 'faq-3',
    category: 'store',
    questionAr: 'أين يقع المحل وما هي مواعيد العمل لاستقبال العملاء؟',
    questionEn: 'Where is the store located and what are the working hours?',
    answerAr: 'مقر Bulk Store في 51 شارع محمد الخلفاوي، شريف، الساحل، محافظة القاهرة (قريب جداً من محطة مترو الخلفاوي). المحل مفتوح يومياً من الساعة 2:00 ظهراً حتى الساعة 12:00 منتصف الليل.',
    answerEn: 'Bulk Store is located at 51 Mohamed El-Khalafawy St, Sherif, Sahel, Cairo (close to El-Khalafawy Metro). We are open daily from 2:00 PM to 12:00 Midnight.'
  },
  {
    id: 'faq-4',
    category: 'usage',
    questionAr: 'أنا مبتدئ في الجيم، هل يمكنني استشارة المحل لاختيار الكورس المناسب؟',
    questionEn: 'I am a gym beginner, can I consult Bulk Store to choose the right stack?',
    answerAr: 'بكل تأكيد! فريق Bulk Store جاهز دائماً على WhatsApp أو عند زيارتك للمحل للإجابة عن كل استفساراتك، وفهم وزنك وهدفك (تضخيم أو تنشيف أو لياقة) وترشيح المنتجات التي تفيدك فعلياً بدون مصاريف غير ضرورية.',
    answerEn: 'Absolutely! Our team is available on WhatsApp or in-store to understand your fitness level, body weight, and training goals to recommend the exact stack tailored for you.'
  },
  {
    id: 'faq-5',
    category: 'usage',
    questionAr: 'ما الفرق بين الواي بروتين العادي والواي أيزوليت والماس جينر؟',
    questionEn: 'What is the difference between regular Whey, Whey Isolate, and Mass Gainer?',
    answerAr: 'الواي بروتين (مثل Gold Standard) ممتاز للبناء العضلي المتوازن؛ الواي أيزوليت (مثل ISO 100) فائق النقاء وسريع الامتصاص وخالٍ من الدهون واللاكتوز ومثالي للتنشيف؛ بينما الماس جينر (مثل Serious Mass) يحتوي على سعرات حرارية وكربوهيدرات عالية لزيادة الوزن لأصحاب الحرق السريع.',
    answerEn: 'Regular Whey is great for balanced muscle growth; Whey Isolate is ultra-pure with near-zero carbs/fat ideal for cutting; Mass Gainers pack high calories and carbs to help hardgainers gain weight.'
  }
];

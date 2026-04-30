// lib/site-data.ts
export const studioInfo = {
  name: 'The Ring',
  tagline: 'Old School. No Excuses.',
  subheadline: 'Philadelphia\'s original boxing gym since 1987. Raw training, real coaches, and the tradition of champions who trained in these same corners.',
  address: '2347 N Broad St, Philadelphia, PA 19132',
  phone: '(215) 555-0127',
  email: 'info@theringphilly.com',
  instagram: 'https://instagram.com/',
  facebook: 'https://facebook.com/',
  founded: '1987',
  hours: {
    'Mon–Fri': '6:00 AM – 9:00 PM',
    'Saturday': '7:00 AM – 2:00 PM',
    'Sunday': '10:00 AM – 12:00 PM',
  },
};

export const stats = [
  { value: '37+', label: 'Years Est. 1987' },
  { value: '180+', label: 'Active Boxers' },
  { value: '12', label: 'Golden Glove Champs' },
  { value: '3', label: 'Pro Titleholders' },
];

export const programs = [
  { name: 'Boxing Fundamentals', level: 'Beginner', description: 'Learn the sweet science from the ground up. Stance, footwork, jab, cross, hook, uppercut — built right from day one.' },
  { name: 'Intermediate Boxing', level: 'Intermediate', description: 'Combination work, defensive slipping, body work, and sparring introduction. Where boxers are made.' },
  { name: 'Advanced & Sparring', level: 'Advanced', description: 'For seasoned boxers looking to sharpen their craft. Daily sparring, strategic drills, and game-planning with head coaches.' },
  { name: 'Amateur Competition', level: 'Competition', description: 'USA Boxing licensed program with full tournament calendar. Golden Gloves, PAL, and regional circuit.' },
  { name: 'Fitness Boxing', level: 'All Levels', description: 'Non-contact boxing training for fitness. Get in the best shape of your life without ever sparring.' },
  { name: 'Youth Boxing', level: 'Ages 8–17', description: 'Our flagship youth program with over 30 years of producing disciplined, confident young athletes.' },
];

export const coaches = [
  {
    name: 'Head Trainer "Steady" Eddie Malone',
    title: 'Head Trainer · 40 years in the sport',
    bio: 'Philly boxing legend. Cornered 3 world title fights and built the careers of a generation of local champions. Protégé of the great Angelo tradition.',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80',
  },
  {
    name: 'Coach Maria "La Fiera" Santos',
    title: 'Women\'s Program Head · Amateur Record 28-4',
    bio: 'National amateur champion turned coach. Runs our women\'s boxing and fitness programs with a championship mindset.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80',
  },
  {
    name: 'Coach Devon "Quickhands" Brooks',
    title: 'Youth Director · USA Boxing Certified',
    bio: 'Born and raised in North Philly. 15+ years developing young athletes through boxing, mentorship, and community.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
  },
];

export const heritage = [
  { year: '1987', milestone: 'The Ring opens its doors on North Broad Street.' },
  { year: '1993', milestone: 'First Golden Gloves champion produced from our gym.' },
  { year: '2001', milestone: '3 boxers simultaneously hold regional amateur titles.' },
  { year: '2008', milestone: 'Youth program launched — 500+ youth served since.' },
  { year: '2015', milestone: 'First pro titleholder — WBC Continental Americas champion.' },
  { year: '2024', milestone: 'Celebrating 37 years of champions, community, and heart.' },
];

export const testimonials = [
  { name: 'Marcus W.', rating: 5, text: 'This is where real boxing happens. No fluff, no mirrors — just raw training with coaches who\'ve been in the trenches. Eddie Malone is a genius.' },
  { name: 'Janelle P.', rating: 5, text: 'Maria Santos changed my life. The women\'s program here is legit and the culture is welcoming. I\'m in the best shape of my life at 42.' },
  { name: 'Tommy R.', rating: 5, text: 'Three generations of my family have trained here. My grandfather, my dad, and now me. This gym is Philly boxing history.' },
  { name: 'Amir C.', rating: 5, text: 'From street kid to Golden Gloves finalist in 2 years. Devon Brooks saved my life and this gym gave me direction.' },
];

export const pricing = [
  {
    name: 'Corner',
    price: '$89',
    period: '/mo',
    features: ['Bag & pad classes', 'Fitness boxing sessions', 'Locker room access', 'Open gym hours'],
    cta: 'Start Free Trial',
    highlight: false,
  },
  {
    name: 'Main Event',
    price: '$129',
    period: '/mo',
    features: ['All Corner features', 'Sparring classes', 'Coach-supervised pad work', 'Competition prep option', 'Youth program access'],
    cta: 'Train Here',
    highlight: true,
  },
  {
    name: 'Champion',
    price: '$189',
    period: '/mo',
    features: ['Everything in Main Event', 'Amateur competition support', 'Corner at bouts', '1-on-1 with head coach', 'Video film study'],
    cta: 'Apply',
    highlight: false,
  },
];

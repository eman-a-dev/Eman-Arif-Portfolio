import { asset } from '../assets'

export type ProjectDetail = {
  title: string
  category: string
  year: string
  img: string
  video?: string
  description: string
  overviewHeadline?: string
  features: string[]
  stack: string[]
}

// To add a new project detail page: add a new key here (this key is the
// slug used in the URL, e.g. 'my-new-project' -> #/projects/my-new-project)
// and link to it from Projects.tsx with { type: 'internal', href: '#/projects/my-new-project' }.
// That's it — no new component or page needed.
export const PROJECT_DETAILS: Record<string, ProjectDetail> = {
  uniswap: {
    title: 'Uniswap',
    category: 'Full-Stack Web Application',
    year: '2025',
    img: asset('Uniswap.png'),
    video: '/Uniswap-Demo.mp4',
    description:
      'Uniswap is a university resource-sharing marketplace designed to make buying, selling and exchanging semester-specific academic materials simple and secure. Students can discover the resources they need, save favourites and publish their own listings from one streamlined platform.',
    overviewHeadline: 'Built for sharing knowledge, effortlessly.',
    features: [
      'Secure account creation and login',
      'Searchable, semester-specific resource listings',
      'Wishlist to save useful resources',
      'My Listings dashboard to manage posts',
      'Simple Post Item flow for sellers',
    ],
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'MySQL'],
  },
  zarkhaiz: {
  title: 'Zarkhaiz AI Based Smart Irrigation Dashboard',
  category: 'Full-Stack Web Application',
  year: '2025',
  img: asset('Zarkhaiz.png'),
  video: '/ZARKHAIZ-DASHBOARD.mp4',
  description:
    'Zarkhaiz is the web dashboard I built as part of our AI-based smart irrigation system. It gives farmers a simple way to monitor whats happening in their fields and understand when a zone may need irrigation. The dashboard brings sensor data such as soil moisture, temperature, humidity, precipitation, and irrigation levels into one place. Farmers can view the overall field condition, check individual zones, and track how the readings change over time through charts and visual indicators. The dashboard also connects with the AI side of Zarkhaiz, where our trained models are used to predict upcoming soil moisture conditions. These predictions can help farmers make better irrigation decisions instead of relying only on fixed watering schedules.',

  overviewHeadline: 'Smart irrigation insights, all in one place.',

  features: [
    'Field overview and irrigation status',
    'Zone-wise field monitoring',
    'Live soil and environmental sensor data',
    'Historical data charts and analytics',
    'AI-based soil moisture predictions',
    'Irrigation insights based on current and predicted conditions',
    'IoT sensor network monitoring',
    'Responsive farmer-friendly dashboard',
  ],

  stack: [
    'React',
    'TypeScript',
    'Supabase',
    'Node.js',
    'Express.js',
    'IoT',
    'Machine Learning',
    'Data Visualization',
    
  ],
},
}
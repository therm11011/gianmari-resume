import type { Project } from '~/types/resume'

export const projects: Project[] = [
  {
    id: 1,
    title: 'Visit CamSur Official Website',
    slug: 'visit-camsur',
    description:
      'The official tourism website of the Provincial Government of Camarines Sur.',
    problem:
      'The province required a responsive platform for presenting destinations, accommodations, activities, and tourism information.',
    solution:
      'Developed and refined frontend interfaces, navigation flows, responsive layouts, and content presentation components.',
    role: 'Frontend Developer',
    status: 'Live',
    contributions: [
      'Developed and refined responsive frontend interfaces.',
      'Improved navigation flows and tourism content presentation.',
      'Built reusable interface components with Vue 3 and Tailwind CSS.',
      'Supported the integration of frontend pages with Laravel and Inertia.js.',
    ],
    outcomes: [
      'Delivered a responsive public platform for presenting provincial tourism information.',
      'Created reusable components that support consistent content presentation.',
      'Improved access to destinations, accommodations, activities, and tourism information.',
    ],
    lessons:
      'This project strengthened my ability to translate operational requirements into responsive interfaces and collaborate on an established government platform.',
    technologies: ['Laravel', 'Vue 3', 'PHP', 'Inertia.js', 'Tailwind CSS', 'MySQL'],
    image: '/img/VisitCamsur/visitcamsur.com.png',
    website: 'https://visitcamsur.com',
  },
  {
    id: 2,
    title: 'Visit CamSur Booking System',
    slug: 'visit-camsur-booking',
    description:
      'A web-based booking platform supporting Camarines Sur tourism services.',
    problem:
      'Customers needed a clear and responsive way to browse and reserve tourism-related services.',
    solution:
      'Translated Figma designs into responsive pages and implemented reusable user-interface components.',
    role: 'Frontend Developer',
    status: 'Live',
    contributions: [
      'Translated Figma designs into responsive application pages.',
      'Implemented reusable Vue interface components.',
      'Developed clear browsing and reservation flows for tourism services.',
      'Tested interface behavior across different screen sizes.',
    ],
    outcomes: [
      'Delivered responsive interfaces for browsing and reserving tourism services.',
      'Improved interface consistency through reusable components.',
      'Supported a clearer customer booking experience across devices.',
    ],
    lessons:
      'This project improved my ability to turn design specifications into reusable interfaces while maintaining consistency across a transactional workflow.',
    technologies: ['Laravel', 'Vue 3', 'PHP', 'Inertia.js', 'Tailwind CSS'],
    image: '/img/BookVisitCamsur/book-visitcamsur.com.png',
    website: 'https://book.visitcamsur.com',
  },
  // {
  //   id: 3,
  //   title: 'CamSur Medical Services and Assistance Management System',
  //   slug: 'cmsap',
  //   description:
  //     'A healthcare information system supporting patient and facility workflows.',
  //   problem:
  //     'Different users and facilities required controlled access to healthcare records and operational features.',
  //   solution:
  //     'Collaborated on role-based access control, facility assignments, workflow improvements, testing, and requirements validation.',
  //   technologies: ['Laravel', 'Vue 3', 'MySQL', 'REST API', 'Postman'],
  //   image: '/images/projects/emr.webp',
  // },
  {
    id: 4,
    title: 'Goldy: An NLP-based Chatbot in English Learning for Primary Education',
    slug: 'goldy-nlp',
    description: 'Goldy is a Senior Thesis study focusing on the application of Natural Language Processing(NLP) to Primary Education.',
    problem: 'Elementary education during the pandemic was complicated due to the introduction of Online Learning',
    solution: 'Created a chatbot specializing in English for Grade School Students. Trained specifically from raw data provided by Ateneo de Naga University Grade School',
    role: 'Researcher and Developer',
    status: 'Completed',
    contributions: [
      'Designed and developed an English-learning chatbot for grade school students.',
      'Prepared and trained the NLP model using data provided by Ateneo de Naga University Grade School.',
      'Built the web application with Python, Flask, and Tailwind CSS.',
      'Containerized and deployed the application using Docker and DigitalOcean.',
    ],
    outcomes: [
      'Completed a working NLP-based chatbot as a senior thesis project.',
      'Applied natural language processing to an elementary education use case.',
      'Demonstrated an end-to-end workflow from data preparation to deployment.',
    ],
    lessons:
      'Goldy gave me practical experience connecting machine-learning experimentation with a usable web application and deploying the resulting system.',
    technologies: ['Python', 'Flask', 'Keras', 'Matplotlib', 'Docker', 'DigitalOcean', 'Tailwind CSS'],
    image: '/img/Goldy/goldy.png',
    link: 'https://www.linkedin.com/in/gianmari/overlay/Project/511800163/treasury/?profileId=ACoAAC5GKocBRUyaeNfJKH1D8VB8tzL6tzWf_Js'
  }
]

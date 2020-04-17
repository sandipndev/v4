module.exports = {
  siteTitle: 'Sandipan Dey | Software Engineer',
  siteDescription:
    'Sandipan Dey is a software engineer based in Kolkata, IN specializing in both frontend and backend, who occasionally uses Machine Learning to make experiences better.',
  siteKeywords:
    'Sandipan Dey, Sandipan, Dey, triethyl, software engineer, front-end engineer, back-end engineer, full-stack engineer, web developer, javascript, indian',
  siteUrl: 'https://sandipan.dev',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-152528939-2',
  googleVerification: '3Rm0UxFXTkQuJokApt_EKtNoObR4AwZ-7cnfqIiOwCw',
  name: 'Sandipan Dey',
  location: 'Kolkata, IN',
  email: 'hey@sandipan.dev',
  github: 'https://github.com/triethyl',
  twitterHandle: '@triethyl_01',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/triethyl',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/sandipandey',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/triethyl_',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/triethyl_01',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Work',
      url: '/#work',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
    {
      name: 'Blog',
      url: '/blog',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};

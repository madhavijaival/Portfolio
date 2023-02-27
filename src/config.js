module.exports = {
  siteTitle: 'Madhavi Jaival',
  siteDescription:
    'Madhavi Jaival is a Software Developer, who loves learning new things.',
  siteKeywords:
    ' Madhavi Jaival, software engineer, web developer, javascript, React,  USA',
  siteUrl: 'https://github.com/madhavijaival',
  siteLanguage: 'en_US',
  // googleAnalyticsID: 'UA-45666519-2',
  // googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Madhavi Jaival',
  location: 'California, USA',
  email: 'madhavi@myjobsemail.com ',
  github: 'https://github.com/madhavijaival',
  twitterHandle: '@',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/madhavijaival',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/madhavi-jaival/',
    },
    // {
    //   name: 'Instagram',
    //   url: 'https://www.instagram.com/_m_s_j_/',
    // },
    
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

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

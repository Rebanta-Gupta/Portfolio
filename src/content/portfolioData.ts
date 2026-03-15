import type { PortfolioData } from '../types';

const portfolioData: PortfolioData = {
  hero: {
    greeting: "Hello, I'm",
    name: 'Rebanta',
    highlight: 'Gupta',
    tagline: 'Nanotechnology Engineering Student at the University of Waterloo',
  },
  about: [
    'I\'m a Nanotechnology Engineering student at the University of Waterloo interested in building systems that connect hardware and software. I enjoy working on hands-on projects where ideas turn into real prototypes.',
    'My experience includes physical prototyping, PCB assembly, simulation and modelling, and building data-driven software tools. I\'m especially interested in projects that sit at the intersection of physical devices and digital systems.',
    'Most of my projects start with a simple idea and end with something tangible — whether that’s a nanomaterial-based electronic device or a full-stack data analysis tool.',
    'I like experimenting, learning quickly, and building things that actually work.',
  ],
  experience: [
    {
      title: 'Teaching Assistant',
      date: 'Jan 2024 – Jun 2024',
      location: 'University Hill Secondary, Vancouver, BC',
      description: 'Supported classroom operations by assisting with grading and preparing instructional materials, helping improve course organization and student engagement across multiple science courses.',
      skills: ['Communication', 'Problem-solving', 'Analytical Thinking', 'Time Management', 'Teamwork'],
    },
    {
      title: 'Peer Tutor',
      date: 'Sep 2024 – Jun 2025',
      location: 'University Hill Secondary',
      description: 'Worked one-on-one with students across physics, chemistry, and biology, adapting teaching style to match different learning needs. Supported peers in building foundational understanding and confidence in STEM subjects.',
      skills: ['Teaching & Mentoring', 'Interpersonal Skills', 'Adaptability', 'Knowledge Transfer'],
    },
    {
      title: 'Youth Program Intern',
      date: 'Sep 2024 – Jun 2025',
      location: 'University Neighbourhood Association',
      description: 'Supported the planning and execution of over 10 community events, working closely with diverse teams to ensure smooth coordination, stakeholder engagement, and successful program delivery.',
      skills: ['Leadership', 'Project Coordination', 'Event Planning', 'Stakeholder Engagement'],
    },
  ],
  projects: [
    {
      id: 'nanomaterials',
      icon: '🔬',
      title: 'Applied Nanomaterials for Electronic Systems',
      brief: 'Synthesized silver nanoparticles and fabricated a functional PCB using printed electronics techniques.',
      description: [
        'This project explored how nanomaterials can be used in real electronic systems. I synthesized silver nanoparticles using chemical methods and used them to formulate a conductive ink for printed electronics. The goal was to see how materials developed at the nanoscale could actually be integrated into functional hardware.',
        'Alongside the materials work, I designed a complete PCB in the KiCad PCB design suite, including schematic capture and board layout. The board was fabricated using a Voltera V-One PCB printer, which allowed me to rapidly prototype the design using conductive ink. After printing the board, I hand-soldered the components, powered up the circuit, and performed basic bring-up and validation to make sure everything functioned as expected.',
        'What I enjoyed most about this project was getting to work across the full hardware development pipeline. I moved from synthesizing nanomaterials, to designing the electronics in CAD, to physically fabricating and assembling the board. It was a great example of how materials science, electrical design, and hands-on prototyping can come together to turn an idea into a working system.',
      ],
      images: [
        {
          src: 'images/precision-weighing.jpeg',
          alt: 'Precision weighing of PVP polymer on a Sartorius analytical balance',
          caption: '1. Precision weighing of PVP capping agent',
          description: 'PVP (polyvinylpyrrolidone) was precisely weighed at 0.5014 g using a Sartorius analytical balance. PVP serves as a capping agent to control nanoparticle size and prevent agglomeration during synthesis.',
        },
        {
          src: 'images/magnetic-stirrer.jpeg',
          alt: 'Precursor solution being mixed on a magnetic hot plate stirrer at 300 RPM',
          caption: '2. Precursor solution mixing at 300 RPM',
          description: 'The precursor solution was mixed at 300 RPM using a Heidolph magnetic hot plate stirrer. Controlled stirring ensures uniform distribution of reagents and consistent nanoparticle nucleation throughout the solution.',
        },
        {
          src: 'images/fume-hood-synthesis.jpeg',
          alt: 'Nanoparticle synthesis setup inside a fume hood',
          caption: '3. Synthesis in progress inside a fume hood',
          description: 'The full synthesis setup inside a fume hood, showing the Erlenmeyer flask on a magnetic stirrer with a condenser attached. The fume hood provides ventilation for safe handling of chemical reagents during the reduction reaction.',
        },
        {
          src: 'images/nanoparticle-sample.jpeg',
          alt: 'Synthesized silver nanoparticle colloid in a labeled vial',
          caption: '4. Final silver nanoparticle colloid sample',
          description: 'The final synthesized silver nanoparticle colloid stored in a labeled Greiner tube. The characteristic dark yellow-brown colour indicates successful formation of silver nanoparticles in the colloidal suspension.',
        },
        {
          src: 'images/kicad-pcb-design.jpeg',
          alt: 'KiCAD PCB schematic and layout design',
          caption: '5. PCB schematic and layout in KiCAD',
          description: 'The complete PCB schematic and layout designed in KiCAD. This includes component placement, trace routing, and design rule checks, prepared for fabrication on the Voltera V-One conductive ink printer.',
        },
        {
          src: 'images/voltera-printing.jpeg',
          alt: 'Voltera V-One PCB printer depositing conductive traces',
          caption: '6. Voltera V-One printing conductive traces',
          description: 'The Voltera V-One PCB printer depositing conductive silver ink traces onto the substrate. This desktop printer uses precise dispensing to create circuit board traces from silver nanoparticle-based conductive ink, replacing traditional etching methods.',
        },
        {
          src: 'images/pcb-led-test.jpeg',
          alt: 'Fabricated PCB with a red LED lit up',
          caption: '7. Completed PCB with LED circuit validation',
          description: 'The final fabricated PCB with a soldered LED successfully lit up, confirming circuit functionality. This validated the end-to-end pipeline from nanoparticle synthesis to conductive ink formulation, PCB printing, component soldering, and circuit bring-up.',
        },
      ],
      tags: ['Nanomaterials Synthesis', 'Printed Electronics', 'PCB Design', 'KiCAD', 'Hardware Fabrication', 'Soldering', 'Circuit Bring-up'],
      link: null,
    },
    {
      id: 'teng',
      icon: '⚡',
      title: 'Triboelectric Nanogenerator (TENG)',
      brief: 'Designed mechanical energy harvesting device converting motion to electricity.',
      description: [
        'Designed and assembled a slider-crank–based triboelectric nanogenerator for mechanical-to-electrical energy conversion. This device harnesses the triboelectric effect to generate electrical power from mechanical motion, representing a sustainable approach to energy harvesting.',
        'Created custom 3D-printable parts using SolidWorks CAD software, ensuring precise mechanical tolerances and optimal functionality. The project involved iterative prototyping and testing to maximize energy conversion efficiency.',
      ],
      images: [],
      tags: ['Mechanical Design', 'Energy Systems', 'Prototyping', 'SolidWorks', '3D Printing'],
      link: null,
    },
    {
      id: 'statfit',
      icon: '📊',
      title: 'Statistical Distribution Fitting Tool',
      brief: 'Interactive web app for statistical analysis with support for multiple distributions.',
      description: [
        'Built a comprehensive Python-based Streamlit application that supports multiple statistical distributions including normal, exponential, gamma, and Weibull distributions. The tool provides interactive visualization and detailed error analysis for datasets containing up to 10,000+ samples.',
        'Features include real-time parameter fitting, goodness-of-fit tests, probability plots, and exportable reports. The application serves as a powerful tool for researchers and engineers performing statistical analysis on experimental data.',
      ],
      images: [],
      tags: ['Python', 'Streamlit', 'NumPy', 'SciPy', 'Data Analysis', 'Visualization'],
      link: 'https://github.com/Rebanta-Gupta/Statistical-Distribution-Fitting-Tool',
    },
  ],
  hackathons: [
    {
      id: 'hardhaq',
      icon: '🔮',
      title: 'HardHaQ – Quantum Hardware Hackathon',
      brief: 'Developed RF Paul trap models with automated simulations for quantum computing applications.',
      description: [
        'Developed comprehensive analytical models for RF Paul trap stability analysis in quantum computing systems. Automated complex electromagnetic simulations using Python, SciPy, and the COMSOL Multiphysics API to optimize trap performance parameters.',
        'Successfully achieved the second-highest trap depth-to-power ratio in the competition, demonstrating efficient design optimization. This project combined theoretical electromagnetics with practical computational modeling to advance quantum hardware development.',
      ],
      images: [],
      tags: ['Electromagnetics', 'Simulation', 'Scientific Computing', 'Python', 'COMSOL'],
      link: null,
    },
  ],
  skills: [
    {
      category: '💻 Languages',
      items: ['Python', 'Java', 'JavaScript', 'MATLAB', 'HTML & CSS', 'JSON'],
    },
    {
      category: '📦 Frameworks & Libraries',
      items: ['Streamlit', 'NumPy', 'SciPy', 'Pandas', 'Matplotlib'],
    },
    {
      category: '🛠️ Tools & Hardware',
      items: ['SolidWorks', 'KiCAD', 'PCB Fabrication', 'Voltera V-One', '3D Printing', 'Git & GitHub'],
    },
  ],
  contact: [
    {
      icon: '✉️',
      label: 'Email',
      value: 'guptarebanta816@gmail.com',
      url: 'mailto:guptarebanta816@gmail.com',
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'Rebanta-Gupta',
      url: 'https://www.linkedin.com/in/Rebanta-Gupta',
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: 'Rebanta-Gupta',
      url: 'https://github.com/Rebanta-Gupta',
    },
  ],
};

export default portfolioData;

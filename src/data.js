export const SERVICES = [
  ['Commercial and Residential Security', 'Security officers for commercial buildings and residential complexes.'],
  ['Embassy and VIP Residence Security', 'Security protection for embassies and VIP residential complexes.'],
  ['Surveillance and Investigations', 'Surveillance, and private and confidential investigations.'],
  ['Security Consultancy', 'Advisory services, consultancy and security surveys.'],
  ['Electronic Security Surveillance', 'Electronic surveillance services to support your security.'],
  ['Car Park Systems', 'Management of electronic car park systems.'],
  ['School Security', 'Specially trained guards for schools.'],
  ['Home Monitoring and Emergency Services', 'Home monitoring and emergency response services.'],
].map(([title, text]) => ({ title, text }))

export const CONTACT = {
  address: '382/3, Vidyaloka Mawatha, Hokandara South',
  phones: [['011 505 8463', '+94115058463'], ['077 777 1372', '+94777771372'], ['011 593 1933', '+94115931933']],
  emails: ['Info@firstguardsec.com', 'firstguard2022@gmail.com'],
  hours: 'Monday to Saturday, 9.00am to 4.00pm',
  mapLink: 'https://www.google.com/maps/search/?api=1&query=382%2F3+Vidyaloka+Mawatha+Hokandara+South',
  mapEmbed: 'https://maps.google.com/maps?q=382%2F3%20Vidyaloka%20Mawatha%20Hokandara%20South&output=embed',
}

export const GALLERY = ['Security personnel', 'Corporate security', 'Team training', 'Events and deployments', 'Residential security', 'Company activities', 'Access control', 'Site security', 'Monitoring room']

// Replace XX with verified figures. The "replace" notice disappears once no value contains "XX".
export const STATS = [
  { value: 'XX', suffix: '+', label: 'Years of experience' },
  { value: 'XX', suffix: '+', label: 'Trained security personnel' },
  { value: 'XX', suffix: '+', label: 'Clients served' },
  { value: 'XX', suffix: '+', label: 'Sites protected' },
]

export const SECTORS = ['Businesses', 'Financial institutions', 'Private residences', 'Residential complexes', 'Healthcare establishments', 'Development projects']

// Add real, permitted entries to show these sections. Empty arrays hide them.
// TESTIMONIALS: { quote: '...', name: '...', role: '...' }   CLIENTS: { name: '...', logo: '/clients/name.png' }
export const TESTIMONIALS = []
export const CLIENTS = []

export const FAQS = [
  ['What types of properties do you protect?', 'Our clients include businesses, financial institutions, private residences, residential complexes, healthcare establishments and development projects.'],
  ['Are you licensed?', 'Yes. First Guard Security Services (Pvt) Ltd is a licensed, government approved private security firm.'],
  ['Can security be tailored to my premises?', 'Yes. We start by understanding your requirements and then recommend a suitable arrangement.'],
  ['Which areas do you cover?', 'Please contact our team with your location and we will confirm availability.'],
  ['How do I request a quote?', 'Use the enquiry form on this page or call us during business hours, and we will discuss your requirements.'],
]

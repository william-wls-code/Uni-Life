import Category from '../models/category';
import Event from '../models/event';
import News from '../models/news';
import InfoDetails from '../models/infodetails';
import restaurant from '../assets/icons/restaurant.png';
import shuttle from '../assets/icons/shuttle_bus.png';
import printer from '../assets/icons/printer.png';
import machine from '../assets/icons/machine.png';
import bank from '../assets/icons/bank.png';
import supermarket from '../assets/icons/supermarket.png';
import clinic from '../assets/icons/clinic.png';
import salon from '../assets/icons/salon.png';
import bookstore from '../assets/icons/bookstore.png';
import souvenir from '../assets/icons/souvenir.png';

export const CATEGORIES = [
  new Category('i1', 'Restaurant', restaurant),
  new Category('i2', 'Shuttle Bus', shuttle),
  new Category('i3', 'Printers', printer),
  new Category('i4', 'SID Machine', machine),
  new Category('i5', 'Bank', bank),
  new Category('i6', 'Supermarket', supermarket),
  new Category('i7', 'Clinic', clinic),
  new Category('i8', 'Salon', salon),
  new Category('i9', 'Bookstore', bookstore),
  new Category('i10', 'Souvenir Shop', souvenir),
];

export const INFODETAIL = [
  new InfoDetails('1', 'i1', 'Asia Pacific Catering', [
    'LG7',
    'sat: 07:30 - 21:00',
    'sun: 09:00 - 21:00',
    'weekdays: 07:30 - 21:00',
    '+852 2243 1087',
    'unique@conferencelodge.hk',
  ]),
  new InfoDetails('2', 'i1', 'Seafront Snack Shop', [
    'G/F, UG Hall VI',
    'mon - sat: 17:30 - 23:30',
    'sun & Public Holiday: Closed',
  ]),
  new InfoDetails('3', 'i1', 'Diners@LSKBB', [
    'G/F, LSK',
    'sat: 07:30 - 18:00',
    'sun: closed',
    'weekdays: 07:30 - 18:00',
    '+852 2701 1821',
  ]),
  new InfoDetails('4', 'i1', 'McDonald', ['LG5', '07:00 - 24:00 (daily)']),
  new InfoDetails('5', 'i1', 'UniQue', [
    '2/F, Conference Lodge',
    '07:30 - 21:00 (daily)',
  ]),
  new InfoDetails('6', 'i1', 'Pacific Coffee', [
    'G/F, LSK Business Building',
    'weekdays: 08:00 - 18:00',
    'sat: 08:00 - 16:00',
    'sun & public holiday: Closed',
  ]),
  new InfoDetails('7', 'i1', 'Ebeneezers (Halal Food)', [
    'G/F, LSK Business Building',
    'mon - sat: 10:00 - 19:30',
    'sun & public holiday: Closed',
  ]),
  new InfoDetails('8', 'i1', 'Subway', [
    'G/F, Cheng Yu Tung Building',
    'mon - sat: 08:00 - 18:00',
    'sun & public holiday: Closed',
  ]),
  new InfoDetails('9', 'i1', 'Passion', [
    '1/F, Academic Concourse',
    'near Lifts 25 - 26',
    'mon - sat: 08:00 - 17:00',
    'sun & public holiday: Closed',
  ]),
  new InfoDetails('10', 'i1', 'Hungry Korean', [
    'LG7',
    '1/F, Academic Concourse',
    'near Lifts 25 - 26',
    'mon - sat: 10:30 - 18:00',
    'sun & public holiday: Closed',
  ]),
  new InfoDetails('11', 'i1', 'UniBistro', [
    'G/F, Lo Ka Chung University Center',
    '12:00 - 21:00 (daily)',
  ]),
  new InfoDetails('12', 'i1', 'Unibar', [
    'G/F, Lo Ka Chung University Center	',
    'sun - thu & Public Holiday: 16:00 - 23:00',
    'fri & sat: 16:00 - 24:00',
  ]),
  new InfoDetails('13', 'i1', 'China Garden Restaurant', [
    'G/F, Hong Kong Jockey Club Atrium',
    'mon - sat: 11:00 - 21:00',
    'sun & public holiday: 10:00 - 21:00',
  ]),
  new InfoDetails('14', 'i1', 'LG1 Restaurant', [
    'LG1/F, Academic Building',
    'via Lifts 10 - 12 or Lifts 13 - 15',
    '07:30 - 21:00 (daily)',
  ]),
  new InfoDetails('15', 'i1', 'Starbucks Coffee', [
    'G/F, Hong Kong Jockey Club Atrium',
    'mon - fri: 08:00 - 20:00',
    'sat, sun & Public Holiday: 08:30 - 20:00',
  ]),
  new InfoDetails('16', 'i1', '24-Hours Vending Shop', [
    'LG5/F, Academic Building',
    '00:00 - 24:00 (daily)',
  ]),
  new InfoDetails('17', 'i1', 'LG7 Kitchen #3 (TT Veggie)', [
    'LG7/F, Academic Building',
    'mon - sat: 11:00 - 20:00',
    'sun & Public Holiday: Closed',
  ]),
  new InfoDetails(
    '18',
    'i1',
    'LG7 Kitchen #2 (Gold Rice Bowl Delicious Food)',
    ['LG7/F, Academic Building', '11:00 - 21:00 (daily)'],
  ),

  new InfoDetails('20', 'i2', 'Diamond Hill (Sheung Yuen Street) > HKUST', [
    '08:30, 08:50, 09:15',
    '$6.2',
  ]),
  new InfoDetails('21', 'i2', 'HKUST > Diamond Hill (Sheung Yuen Street)', [
    '17:50, 18:10, 18:30',
    '$6.2',
  ]),
  new InfoDetails('22', 'i2', 'Tseung Kwan O (Po Yap Road) > HKUST', [
    '08:30, 08:50, 09:15',
    '$4.5',
  ]),
  new InfoDetails('23', 'i2', 'HKUST > Tseung Kwan O (Po Yap Road)', [
    '17:50, 18:10, 18:30',
    '$4.5',
  ]),
  new InfoDetails(
    '24',
    'i2',
    'Causeway Bay (Gloucester Road near Park Lane Hotel) > North Point (Java Road near Tin Chiu Street > HKUST',
    ['08:15', '17.00'],
  ),

  new InfoDetails('37', 'i3', 'Charges', [
    'Black Simplex	$0.3',
    'Black Duplex	$0.5',
    'Color Simplex	$2.0',
    'Color Duplex	$3.3',
  ]),
  new InfoDetails('38', 'i3', 'Satellite Printer', [
    '1/F Concourse, opposite to the coffee shop',
  ]),
  new InfoDetails('39', 'i3', 'Satellite Printer', ['Barn A']),
  new InfoDetails('40', 'i3', 'Satellite Printer', ['Barn B']),
  new InfoDetails('41', 'i3', 'Satellite Printer', ['Barn C']),
  new InfoDetails('42', 'i3', 'Satellite Printer', ['CYT 1/F Corridor']),
  new InfoDetails('43', 'i3', 'Satellite Printer', ['Engineering Common E2I']),
  new InfoDetails('44', 'i3', 'Satellite Printer', [
    'IPO PG/RA Office B',
    '(Outside Room 4347, Lift 15)',
  ]),
  new InfoDetails('45', 'i3', 'Satellite Printer', ['Jockey Club Hall at TKO']),
  new InfoDetails('46', 'i3', 'Satellite Printer', ['LG5 SU Corridor']),
  new InfoDetails('47', 'i3', 'Satellite Printer', [
    'LSK 1/F, outside classroom 1001',
  ]),
  new InfoDetails('48', 'i3', 'Satellite Printer', ['LSK G/F']),
  new InfoDetails('49', 'i3', 'Satellite Printer', [
    'Language Commons (Room 3018)',
  ]),
  new InfoDetails('50', 'i3', 'Satellite Printer', ['Outside Barn A']),
  new InfoDetails('51', 'i3', 'Satellite Printer', ['Outside Barn C']),
  new InfoDetails('52', 'i3', 'Satellite Printer', ['Outside LT-B']),
  new InfoDetails('53', 'i3', 'Satellite Printer', ['Outside LT-E']),
  new InfoDetails('54', 'i3', 'Satellite Printer', ['Outside LT-J']),
  new InfoDetails('55', 'i3', 'Satellite Printer', [
    'Outside Room 4033 (4/F Lift 1)',
  ]),
  new InfoDetails('56', 'i3', 'Satellite Printer', ['PG Hall 2 Open Area']),
  new InfoDetails('57', 'i3', 'Satellite Printer', ['SAO Student Lounge']),
  new InfoDetails('58', 'i3', 'Satellite Printer', ['Science Home']),
  new InfoDetails('59', 'i3', 'Satellite Printer', [
    'UG Hall 1 G/F Common Room',
  ]),
  new InfoDetails('60', 'i3', 'Satellite Printer', [
    'UG Hall 2 G/F Common Room',
  ]),
  new InfoDetails('61', 'i3', 'Satellite Printer', [
    'UG Hall 2 2/F Common Room',
  ]),
  new InfoDetails('62', 'i3', 'Satellite Printer', ['UG Hall 3 1/F Open Area']),
  new InfoDetails('63', 'i3', 'Satellite Printer', ['UG Hall 4 G/F Open Area']),
  new InfoDetails('64', 'i3', 'Satellite Printer', [
    'UG Hall 6 2/F Lift Lobby',
  ]),
  new InfoDetails('65', 'i3', 'Satellite Printer', ['UG Hall 7 1/F Room C103']),
  new InfoDetails('66', 'i3', 'Satellite Printer', ['UG Hall 8 G/F Lobby']),
  new InfoDetails('67', 'i3', 'Satellite Printer', ['UG Hall 9 G/F Lobby']),

  new InfoDetails('70', 'i4', 'add-value machines', [
    'In the Student Lounge near Starbucks & the Art Hall',
    'Academic Concourse, near the ARR office (Academic Records & Registration)',
    'LG5',
    'Outside Hall 2',
    'At the seafront cafeteria near Hall 6',
  ]),

  new InfoDetails('71', 'i5', 'Bank of China', [
    'G/F, near the Entrance Piazza',
    'and next to Lift 1',
    'Mon - Fri: 09:00 - 17:00',
  ]),
  new InfoDetails('72', 'i5', 'Bank of East Asia', [
    'G/F, near the Entrance Piazza',
    'and next to Lift 4',
    'Mon - Fri: 09:00 - 17:00',
  ]),
  new InfoDetails('73', 'i5', 'Hang Seng Bank', [
    'LG7/F, Academic Building',
    'via Lifts 10 - 12',
    'Sun - Fri: 08:30 - 24:00',
    '*08:30 - 21:00 during semester break',
    'Sat & Public Holiday: 08:30 - 21:00',
  ]),

  new InfoDetails('75', 'i6', 'PARKnSHOP', [
    'G/F, near the Entrance Piazza',
    'and next to Lift 1',
    'Mon - Fri: 09:00 - 17:00',
  ]),

  new InfoDetails('77', 'i7', 'Clinic', [
    'Room 2005-7, Lift 4, Main Academic Building',
    'Access via Lift 4',
    '(852) 2358 7229 (General)',
    'safety@ust.hk (General)',
  ]),

  new InfoDetails('78', 'i8', 'Hair Salon', [
    'LG1/F, via Lift 4',
    'Mon - Fri: 10:30 - 19:00',
    'Sat: 10:30 - 18:30',
    'Sun: 11:00 - 17:00',
    'Public Holiday: Closed',
  ]),

  new InfoDetails('79', 'i9', 'Bookstore', [
    'G/F, near Lift 3',
    'Mon - Sat: 09:00 - 18:00',
    'Sat & Public Holiday: Closed',
  ]),

  new InfoDetails('90', 'i10', 'Souvenir Shop', [
    'G/F, near Security Center',
    'Mon - Fri: 11:00 - 18:00',
    'Sat: 12:00 - 16:00',
    'Sat & Public Holiday: Closed',
  ]),
];

export const EVENTS = [
  new Event(
    'e1',
    'Fintech Research Project',
    'Online Recruitment Talk and Sharing by QuantDART',
    'https://calendar.ust.hk/sites/prod.ucal.ust.hk/files/styles/960x/public/events/posters/831d8f39-26e8-4016-8771-a9ea178f6938547df3eb-7506-4787-ac7e-85892fdda787_0.png?itok=a_tTiBZk',
    '4 May 2020',
    '4 May 2020',
    '18:00',
    '19:00',
    'Online Zoom',
    'English',
    'Free',
    [
      'Introduction of Money and Finance - a quick historical overview',
      'How AI and new technologies are shaping the economy from a fintech perspective',
      'Introduction of QuantDART',
      'Career opportunities at QuantDART',
      'Q&A',
    ],
    ['UG Students', 'PG Students', 'Alumni'],
    'https://ust.az1.qualtrics.com/jfe/form/SV_00OfFQRDxGneBMN',
  ),
  new Event(
    'e3',
    'HKUST DSTO',
    'On-Air Cafe - On-Air Cafe - Africa Session',
    'https://calendar.ust.hk/sites/prod.ucal.ust.hk/files/styles/960x/public/events/posters/00d8c6b9-e1f3-4d64-b46d-84f3af2a828bf28fecad-0922-4b25-8b0a-aabad7570a0c_0.png?itok=MI1eQtom',
    '5 May 2020',
    '5 May 2020',
    '14:30',
    '15:30',
    'Online Zoom',
    'English',
    'Free',
    [
      ' A PHD African student would like to take you a walk to his home country Kenya. He said his house in Kenya like a national park!? Join this session to explore Kenya’s culture, history and language.',
      'Student representative(s): Nambafu Gabriel Sikukuu',
    ],
    ['UG Students', 'PG Students'],
    'https://ust.az1.qualtrics.com/jfe/form/SV_cZsDnltP2mihjjD',
  ),
  new Event(
    'e4',
    'HKUST Entrepreneurship Center & TTC',
    'New Series of Intellectual Property Seminars (Part II)',
    'https://calendar.ust.hk/sites/prod.ucal.ust.hk/files/styles/960x/public/events/posters/781e3fea-085f-4b8f-9fc4-e361f37e5a5dac2cc2c9-5ede-4f9a-ba7b-2115d3c0a5a1_1.png?itok=IaORij6Y',
    '5 May 2020',
    '8 May 2020',
    '16:00',
    '17:30',
    'Online Zoom',
    'English',
    'Free',
    [
      'This New Series of Intellectual Property (IP) Seminars aims to equip you with the essential knowledge to Protect your Inventions and proprietary projects. You will become more resourceful and gain practical tips from IP Legal Experts to protect your IP rights while managing your business.',
      'IP Seminar #1 - “IP Valuation” on May 5th - Learn the process to evaluate the fair market value of your IP asset',
      'IP Seminar #2 - “IP Strategy” on May 6th - Review of IP rights / Design rights/patents',
      'IP Seminar #3 – “Data Privacy & Data Transfer Issues” on May 7th - Employee and user rights under IP law agreements',
      'IP Seminar #4 – “Communications with Patent Offices” on May 8th - Review of patentability, The mechanics of a response, Amendment communications, Rejection communications, Mock communications training',
    ],
    ['UG Students', 'PG Students'],
    'https://ust.az1.qualtrics.com/jfe/form/SV_eJ3XAyER1z7bmW9',
  ),
];

export const NEWS = [
  new News(
    'n1',
    'Research and Innovation',
    'https://www.ust.hk/sites/default/files/styles/910x510/public/2020-04/JER01503_Easy-Resize_v2_0.png?h=3d2ac6f1&itok=mLI0nhHI',
    '28 April 2020',
    'HKUST Researchers Unlock Genomic Secrets of Scaly-foot Snail',
    'Laying Foundation for Potential Solutions Provided by Deep-Sea Creatures',
    [
      'Researchers from the Hong Kong University of Science and Technology (HKUST) have decoded for the first time the genome of Scaly-foot Snail, a rare snail inhabited in what scientists called ‘the origin of life’- deep-sea hydrothermal vents characterized with impossible living condition. Unraveling the genome of this unique creature will not only shed light on how life evolved billions of years ago, but will also lay foundation for the discovery of potential remedies offered by these ancient creatures.',
      'Despite an extreme environment characterized by high pressure, high temperature, strong acidity and low oxygen level which resembles living condition in pre-historic time, hydrothermal vents harbor a diverse amount of creatures - most of which have huge potential for biomedical and other applications. Among inhabitants of such difficult environment, the Scaly-foot Snail, also known as “Sea Pangolin”, is of particular interest to marine scientists.',
      'Scaly-foot Snail is the only extant gastropod (a major invertebrate animal, commonly known as snails and slugs,) alive that possesses armor-like scales – an otherwise very common feature for gastropod during the Cambrian time over 540 million years ago.  This snail is also the only organism in the world known to incorporate iron into its exoskeleton, and is also one of the top ten astounding marine species of the last decade (2007-2017).  Little is known, however, about its genome and unusual morphology, as the creature is extremely difficult to locate and collect.',
      'Contrary to many scientists’ expectation that the creature contains some new special genes that gives rise to its bizarre morphology, the team actually discovered that all of the snail’s genes already existed in other mollusks such as squid and pearl oyster, and the snail’s gene sequence has remained almost unchanged throughout its evolution. The 25 transcription factors (a key protein that regulates many downstream gene expression levels) which contribute to the snail’s scale and shell formation, as the team identified, have also contributed to the formation of many other unique hard-parts in Mollusca - such as operculum in gastropods, beak in squid, spicule in chiton, or chaetae in polychaetes.',
      '“Although no new gene was identified, our research offers valuable insight to the biomineralization - a process where the clustering, positioning and on and off switching of a combination of genes which defines the morphology of a species,” said Prof. Qian, also David von Hansemann Professor of Science.  “Uncovering Scaly-foot Snail’s genome advances our knowledge in the genetic mechanism of mollusks, laying the genetic groundwork which paves the way for application. One possible direction is how their iron-coated shells withstand heavy blows, which can provide us insights on ways to make a more protective armor.”',
      'The findings were recently published in the scientific journal Nature Communications.',
      'The study of genome sequencing often results in breakthroughs in biomedical and other sectors.  An enzyme of a microbe that lives in hydrothermal vents – for example, was recently used for the detection of COVID-19 as well as other viruses such as AIDS and SARS.',
    ],
  ),
  new News(
    'n2',
    'Research and Innovation',
    'https://www.ust.hk/sites/default/files/styles/910x510/public/2020-05/1_0.jpg?itok=cU1FcD8B',
    '18 May 2020',
    'HKUST Co-led Study Suggests Universal Face Mask Wearing is Urgent',
    'Against Second Wave of COVID-19 Outbreak as Social Distancing Lifts',
    [
      'As governments worldwide are planning to gradually ease lockdown or social distancing measures after months of life disruptions due to COVID-19, an interdisciplinary study co-convened by a Hong Kong University of Science and Technology (HKUST) computer scientist has recently found that universal face mask wearing is an urgent non-pharmaceutical intervention to suppress the spread or second waves of the disease before effective vaccines or treatments are available.',
      'The team, co-convened by De Kai, Professor of Computer Science and Engineering, presented two new theoretical models to predict the impact of face mask wearing over time.  The first extends the standard epidemiological SEIR model to predict the effects of mass face mask wearing. The second introduces an AI inspired agent-based model, which explicitly simulates infections occurring as a result of contact between individuals moving in physical space.  The team also took into account the varying degrees of mask effectiveness and found that the effects hold even with inexpensive, widely available non-medical face masks or homemade masks with only 70% effectiveness – an important factor in regions where medical-grade masks must be reserved for health workers.',
      'The team’s simulation results show that if the vast majority (80%-90%) of the general public adopt masking on about day 50 after an outbreak, before lockdown measures are lifted, the number of new COVID-19 infections could be slowed significantly and help avoid a second wave of outbreak.  However, if face masking is not adopted nearly universally by the general public (for example if only half the population adopt masks) or if universal masking is delayed (for example to day 75), then significant slowing of the virus spread becomes unlikely.',
      'The modeling results were validated and compared against empirical data from regions that have so far best managed their COVID-19 outbreaks such as Hong Kong, and Taiwan, where putting on face mask in public is culturally acceptable or government policies advise people to do so.  The data comparison shows a near perfect correlation between early universal masking and successful suppression of daily COVID-19 case growth rates and/or the rates of reduction from peak daily case growth.  In contrast, regions that did not implement early adoption of universal masking have instead needed to maintain a strict societal lockdown, with the attendant huge economic and social costs.',
      'The study – a collaborative effort among an artificial intelligence professor, economist, computational molecular biologist, medical doctor / PhD, and behavioural scientist from Hong Kong, France, Estonia, the UK, and Finland – provides fresh insights into the urgency of putting on face masks in addition to continued physical distancing, increased testing, and contact tracing.',
      '“Locking down our noses and mouths is far preferable to locking down our full bodies inside our homes,” said De Kai. “The cost of masks, including educating populations how to properly make and wear masks, is negligible in comparison to the large economic and human costs of increased infection rates.',
    ],
  ),
  new News(
    'n3',
    'Research and Innovation',
    'https://www.ust.hk/sites/default/files/styles/910x510/public/2020-03/crop_0.jpg?itok=A-ktMNKl',
    '24 March 2020',
    'HKUST Researchers Develop a Smart Fever Screening System',
    'Offering a More Efficient Solution to Safeguarding Public Health',
    [
      'Researchers from The Hong Kong University of Science and Technology (HKUST) have developed a novel Smart Fever Screening System (SFSS), which could help officials at the border points to easily identify and distinguish passengers with fever.  The system has been implemented at various control points, government facilities and the University in the fight against Covid-19.',
      'Since the SARS (Severe Acute Respiratory Syndrome) outbreak in 2003, thermal imaging detectors have been widely deployed at border points for screening of inbound travelers with fever – an important symptom for patients of SARS, Covid-19 and other infectious diseases.  However, officers would have to monitor two screens on both thermal and color (CCTV) images in order to track the unwell person within a matter of seconds.',
      'Now, using artificial intelligence, real-time tracking and big data analysis, a multi-disciplinary research team led by Prof. Richard SO from the Department of Industrial Engineering and Decision Analytics at HKUST, has devised a new system which is not only more accurate in detecting fevered suspects even with their faces partially occluded, but can also enhance operation efficiency by combining thermal and color images onto the same screen.  Officers can immediately recognize the unwell person who would be bracketed in red and an alert signal will be sounded upon such detection.',
      'Different from regular fever monitoring systems which use mainly infrared cameras, the new AI and deep learning-based system is more accurate in terms of facial and heat detection.  Using deep learning and the science of anthropometry, the system can perform “visual closure”* and track a human face even if it is covered by a mask and partially occluded at the same time. The system is designed to detect and pick up a fever suspect walking in a crowd.  Detection of temperature also tends to be more accurate as it relies on computer algorithms instead of human judgement according to the tones of thermal images.  The system also compensates the effects of detection distances and environmental factors such as heat source at the background.  Moreover, as the tracking focuses distinctively on the face, the detection result is unlikely to be affected by hot objects carried by that person unless the objects are directly over the person’s face.  ',
      'The research team represents a unique combination of expertise in machine learning, bio-engineering, and parallel networking.  Team members include Prof. Bertram SHI, Head of Department of Electronic and Computer Engineering; Prof. Albert WONG, Senior Lecturer from the same Department and Prof. Qifeng CHEN, Assistant Professor from Department of Computer Science and Engineering. ',
      'Without keeping any personal data, the system is built on a cross-platform database program for big data analytics, allowing devices from different areas to join into a bigger network, which makes tracking of the fevered suspects much easier.  With big data, deep learning and human sciences, the system can also learn over time to become smarter and even more accurate. ',
      'During the early stage of the Covid-19 outbreak in late January, the team has developed and delivered 16 SFSS systems for deployment at major border points such as the Hong Kong International Airport, and other major six boundary control points, and at later dates various government offices upon gradual resumption of public services.  The system can also be useful for venues like hospitals, libraries, elderly homes and schools.  ',
      '“Fever screening has always been the first and an important gatekeeper in maintaining public health. Thanks to the Electrical and Mechanical Services Department (EMSD), our system can be applied at major control points during this critical period. We are glad that our home-grown technology can contribute to safeguarding public health by providing the authorities with a more efficient solution,” said Prof. So.',
      'This system is an extension of a completed project on big data platform for smart transportation sponsored by Innovation and Technology Fund (ITF) and Thales Group in late 2017. The HKUST team successfully provided a match I&T solution on the E&M InnoPortal and the solution has won the Grand Prize in “Category I — An Invention” of the Hong Kong Institution of Engineers Innovation Awards for Young Members 2019. ',
      '*Visual closure is the ability to correctly perceive an object, even when it is partly hidden',
    ],
  ),
  new News(
    'n4',
    'Research and Innovation',
    'https://www.ust.hk/sites/default/files/inline-images/Peter%20Tam.jpg',
    '21 May 2020',
    'Silver Linings Amid Tough Job Market \nSharing by Alumni',
    '',
    [
      'In the midst of the COVID-19 pandemic that has turned the world economy upside-down, many graduating students are worried about their prospects in the job market this year and next. Some say this is worse than the financial crisis in 2008; and some believe Hong Kong’s economy today is worse than that in 2003, when the city was hit hard by SARS. Some even compare the current situation to the Great Depression in the 1930s.',
      'But our fellow graduates of the class of 2003, who faced similar tough job market, not only survived the hiring drought after SARS, but also thrived in their career paths, proving that there is always an opportunity that lies in every crisis.',
      'Peter TAM, our 2003 Accounting graduate, remembers vividly the disappointment he had of not being accepted by “Big 4” like some of his classmates upon graduation. “Seeing others getting employed, you couldn’t help but lose faith in yourself or blamed yourself for not doing well during the interview and so on,” he recalls.',
      'Working briefly in a local firm for HK$7,000 a month before moving to a second-tier international accounting company for a year or so, he finally got the opportunity to move on to a Big 4 accounting firm for about two years. He then continued to work for another audit firm for two years before becoming assistant Financial Controller (FC) at a Singapore-based listed corporation and later being promoted to FC.',
      '“Ultimately, I got tired of all the traveling and long hours that come with an accountant, but I was fortunate enough to have established many connections, which led to other positions that I enjoyed in the later part of my corporate career,” recalls Peter. “Getting to know people at different stages of your life will play a big role in where you go next.”',
      'Despite having a promising career at a young age, Peter jumped out of his comfort zone to co-found an online business in 2015 in order to have more free time with his family.',
      'As an employer himself, Peter would especially look for candidates who demonstrate the potential of adding value to the company, as well as self-motivation to catch up with the world and continue learning new knowledge. “You never know what life is going to bring to you next, and you just have to keep yourself ready.”',
      'Peter’s classmate Max WONG was considered a bit more fortunate as he managed to get accepted by one of the Big 4 accounting firms before he graduated. “But even then, big firms would only offer a monthly salary of HK$9,800 to a fresh hire,” says Max, who quit the job after just one year for an NGO.',
      'For many who were dreaming of a flying career in whatever occupation, 2003 was definitely not the best time to graduate. But Max soon saw the silver lining in the humble beginning—despite having to live on meager income for years. “As I navigated along my career path, I moved onto other jobs, and eventually, the salary took care of itself,” recalls Max, who is now in senior management of a statutory body. ',
      'Instead of being let down by the tough job market, taking from his experience, Max encourages job seekers to turn the prolonged summer vacation into a learning opportunity for their future professional growth. “I always kept my spirit high, and I made sure that I kept up with the latest trends in the market, and took every opportunity to equip myself with more skills and knowledge, and remain competitive,” comments Max. “For example, while many mainstream retail businesses are suffering now, there are also countless opportunities arising in fields such as distant commerce and online learning. Graduates of today can certainly take advantage of these opportunities,” he adds.',
      'The University has recently launched “HKUST United”, a new initiative that brings together our global alumni who have gone through SARS, the dot-com bubble burst and numerous financial crises to offer career advice, start-up support and job/internship opportunities to our students and fresh graduates. For more details, please visit https://alum.ust.hk/hkust-united. ',
    ],
  ),
];

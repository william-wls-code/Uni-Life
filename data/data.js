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
  new InfoDetails('4', 'i1', 'McDonald', [
    'LG5',
    '07:00 - 24:00 (daily)',
  ]),
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
  new InfoDetails('18', 'i1', 'LG7 Kitchen #2 (Gold Rice Bowl Delicious Food)', [
    'LG7/F, Academic Building',
    '11:00 - 21:00 (daily)',
  ]),

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
    ['08:15','17.00',],
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
];
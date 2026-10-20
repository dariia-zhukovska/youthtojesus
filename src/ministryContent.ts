import type { Lang } from './i18n'

export type MinistrySection = {
  title: string
  paragraphs: string[]
  items?: string[]
  highlights?: string[]
  statistic?: { value: string; label: string }
  galleryTitle?: string
  galleryKey?: string
  tone?: 'cream' | 'yellow' | 'blue' | 'green'
}

export type Ministry = {
  slug: string
  title: string
  cardDescription: string
  eyebrow: string
  heroTitle: string
  subtitle: string
  intro: string[]
  when?: string
  where?: string
  mapUrl?: string
  sections: MinistrySection[]
}

const uk: Ministry[] = [
  {
    slug: 'bible-study',
    title: 'Вивчення Біблії',
    cardDescription: 'Щочетверга о 19:00 збираємося для спільного читання Біблії, відкритих запитань і розмов про віру та життя.',
    eyebrow: 'Пілігрими',
    heroTitle: 'Вивчення Біблії',
    subtitle: 'Місце для чесних запитань, відкритих розмов і спільного пошуку Бога.',
    intro: [
      'Щочетверга о 19:00 ми збираємо молодь різних християнських конфесій для спільного читання та обговорення Біблії.',
      'Це простір, де можна ставити складні питання, говорити про віру та життя, слухати інших і разом шукати, як практикувати християнську віру у щоденному житті.',
      'Для багатьох саме ці зустрічі стають місцем, де вони знаходять спільноту, глибше пізнають Біблію і поступово формують власне усвідомлене розуміння віри.',
    ],
    when: 'Щочетверга о 19:00',
    where: 'м. Львів, пл. Григоренка, 5, кв. 17',
    mapUrl: 'https://maps.app.goo.gl/AzNQ3gmcB4fzPWc78',
    sections: [
      { title: 'Наші зустрічі', paragraphs: [], galleryTitle: 'Наші зустрічі', galleryKey: 'bible-study' },
    ],
  },
  {
    slug: 'prayer',
    title: 'Спільна молитва',
    cardDescription: 'Щосереди о 19:00 молимося одне за одного, за нашу церкву, військових, Україну та потреби людей навколо нас.',
    eyebrow: 'Разом у молитві',
    heroTitle: 'Спільна молитва',
    subtitle: 'Молимося разом. Підтримуємо одне одного. Довіряємо Богові.',
    intro: [
      'Щосереди о 19:00 ми зустрічаємося для молитви.',
      'Молимося один за одного, за служіння, нашу церкву, військових, Україну та потреби людей навколо нас.',
      'Ці зустрічі допомагають нам не лише говорити про віру, але й практикувати її разом — підтримувати одне одного, ділитися потребами та вчитися довіряти Богові.',
    ],
    when: 'Щосереди о 19:00',
    sections: [
      { title: 'Молитва спільноти', paragraphs: [], galleryTitle: 'Молитва спільноти', galleryKey: 'prayer' },
    ],
  },
  {
    slug: 'leadership',
    title: 'Молодіжне лідерство',
    cardDescription: 'Допомагаємо молодим людям зростати в лідерстві через навчання, командну відповідальність та практичне служіння.',
    eyebrow: 'Молодіжне лідерство',
    heroTitle: 'Від учасників до лідерів',
    subtitle: 'Допомагаємо молодим людям брати відповідальність, розвиватися та служити іншим.',
    intro: [],
    sections: [
      {
        title: 'Молодіжна лідерська команда',
        paragraphs: [
          'Ми хочемо, щоб молоді люди не просто приходили на готові зустрічі, але й поступово самі вчилися брати відповідальність за спільноту та служити іншим.',
          'Для цього ми створили молодіжну лідерську команду.',
          'Раз на місяць команда самостійно готує одну з четвергових зустрічей.',
          'Ще двічі на місяць молоді лідери збираються окремо для навчання, розвитку, планування та роботи над практичними лідерськими навичками.',
          'Так молодь отримує реальну відповідальність: вчиться працювати в команді, приймати рішення, готувати програми, вести зустрічі та піклуватися про інших людей.',
        ],
        highlights: [
          '1 зустріч на місяць — організована молодими лідерами',
          '2 лідерські зустрічі на місяць',
        ],
        tone: 'yellow',
      },
      {
        title: 'Інвестуємо в лідерів',
        paragraphs: [
          'Ми підтримуємо молодих людей, які хочуть навчатися, розвиватися та ставати зрілими лідерами.',
          'Одним із таких напрямів є навчання в Українській баптистській теологічній семінарії — УБТС.',
          'Це можуть бути як богословські програми, так і програми розвитку лідерів та інші освітні можливості.',
          'Ми частково фінансово підтримуємо таке навчання, щоб молоді люди могли отримувати нові знання, практичні навички та інструменти для подальшого розвитку і служіння.',
          'Для нас це інвестиція не просто в освіту, а в людей, які згодом самі можуть вести за собою інших.',
        ],
        galleryTitle: 'Лідерські зустрічі, навчання та ретрити',
        galleryKey: 'leadership',
        tone: 'cream',
      },
    ],
  },
  {
    slug: 'communa',
    title: 'COMMUNA',
    cardDescription: 'Створюємо простір для дружби, нових знайомств і спільних активностей — від English Club до волонтерських ініціатив.',
    eyebrow: 'COMMUNA',
    heroTitle: 'COMMUNA',
    subtitle: 'Простір, де починається дружба.',
    intro: [
      'Фокус COMMUNA — соціалізація і побудова особистих стосунків з невіруючою молоддю.',
      'Ми створюємо простори, де люди можуть знайомитися, дружити, разом проводити час і поступово ставати частиною спільноти.',
    ],
    sections: [
      {
        title: 'Наше бачення',
        paragraphs: ['Розвинуте та цілісне суспільство, яке формують свідомі молоді лідери.'],
        tone: 'yellow',
      },
      {
        title: 'Що ми робимо',
        paragraphs: [],
        items: [
          'Походи в гори',
          'Speaking clubs',
          'Екскурсійні виїзди за Львів',
          'Настільні ігри',
          'Спільні cooking-вечори',
          'Перегляд і обговорення фільмів',
          'Волонтерські виїзди',
        ],
        tone: 'cream',
      },
      {
        title: 'English Club — більше ніж англійська',
        paragraphs: [
          '10-тижнева програма зустрічей з носієм англійської мови, де молодь може практикувати живу англійську в неформальній атмосфері.',
          'Але для нас це не лише про мову. Через регулярні зустрічі, спільні розмови та час разом ми будуємо стосунки й дружбу з молодими людьми, які не є частиною церкви.',
          'Так English Club стає природним місцем для знайомства, довіри та глибших розмов про життя, цінності й віру.',
        ],
        tone: 'blue',
      },
      {
        title: 'Дружба, яка перетворюється на добрі справи',
        paragraphs: [
          'COMMUNA допомагає молодим людям не лише знаходити друзів, а й вчитися бачити потреби інших.',
          'Серед наших волонтерських активностей були вигул собак та допомога у створенні футбольного й волейбольного поля для дітей у селі Нова Скварява.',
        ],
        tone: 'cream',
      },
      // {
      //   title: 'Нова Скварява',
      //   paragraphs: [
      //     'Разом із молоддю ми власними силами й коштом облаштували в селі Нова Скварява перший волейбольний майданчик і футбольне поле.',
      //     'Так з’явився простір, де діти й підлітки можуть грати, знаходити друзів і проводити час разом.',
      //     'Для нас це служіння — можливість поділитися турботою та показати молоді, що навіть невелика спільнота здатна змінювати життя навколо себе.',
      //   ],
      //   galleryTitle: 'Проєкт у Новій Скваряві',
      //   galleryKey: 'communa-nova-skvariava',
      //   tone: 'green',
      // },
      {
        title: 'Говорити про віру мовою молоді',
        paragraphs: [
          'Разом з організацією Steiger ми працюємо над євангелізаційними проєктами та шукаємо сучасні й зрозумілі для молоді способи говорити про Ісуса.',
          'Для нас євангелізація — це не лише окремі події.',
          'Насамперед це стосунки, довіра, готовність слухати та чесно говорити з людьми, які не мають церковного досвіду або лише починають цікавитися християнською вірою.',
          'Ми хочемо створювати середовище, де людина може поставити свої питання, почути про Ісуса і зробити власний крок у пізнанні Бога.',
          'Ці проєкти є частиною ширшого служіння «Молоді до Ісуса» і не обмежуються лише COMMUNA.',
        ],
        galleryTitle: 'Моменти COMMUNA',
        galleryKey: 'communa',
        tone: 'green',
      },
    ],
  },
  {
    slug: 'trips-retreats',
    title: 'Поїздки та ретрити',
    cardDescription: 'Подорожуємо, відкриваємо нові місця, будуємо дружбу та знаходимо час для духовного відновлення.',
    eyebrow: 'Поїздки та ретрити',
    heroTitle: 'Поїздки та ретрити',
    subtitle: 'Час для дружби, відновлення та справжніх розмов.',
    intro: [],
    sections: [
      {
        title: 'Гірські поїздки',
        paragraphs: [
          'Кілька разів на рік ми організовуємо літні та осінні виїзди в гори для віруючої і невіруючої молоді.',
          'У горах легше зупинитися, вийти зі звичного ритму, побути разом і справді поговорити.',
          'Саме під час таких поїздок часто народжуються дружба, довіра, відверті розмови про життя і віру.',
        ],
        galleryTitle: 'Гірські поїздки',
        galleryKey: 'mountain-trips',
        tone: 'green',
      },
      {
        title: 'Лідерські ретрити',
        paragraphs: [
          'Окремо ми проводимо або приєднуємося до лідерських ретритів для команди служіння.',
          'Це час для духовного відновлення, молитви, навчання, планування та зміцнення команди.',
        ],
        galleryTitle: 'Лідерські ретрити',
        galleryKey: 'leadership-retreats',
        tone: 'cream',
      },
      {
        title: 'Разом із молоддю ОМЦ України',
        paragraphs: [
          'Ми підтримуємо зв’язок з молоддю інших громад Об’єднаної Методистської Церкви в Україні та беремо участь у спільних зустрічах і служіннях.',
          'Для молоді це можливість побачити, що вони є частиною значно більшої спільноти, знайомитися з християнами з інших міст, обмінюватися досвідом та разом служити людям.',
          'Так поступово формується мережа молодих людей і лідерів, які підтримують одне одного та розвивають служіння у своїх громадах.',
        ],
        galleryTitle: 'Спільні молодіжні події',
        galleryKey: 'umc-youth',
        tone: 'blue',
      },
    ],
  },
  {
    slug: 'hospitality',
    title: 'Служіння гостинності',
    cardDescription: 'Відкриваємо двері для людей, які потребують тимчасового прихистку, підтримки та відчуття дому.',
    eyebrow: 'Служіння гостинності',
    heroTitle: 'Дім у момент, коли його найбільше потребують',
    subtitle: 'Відкриваємо двері для тих, хто потребує підтримки, безпеки та відчуття дому.',
    intro: [
      'Одним із напрямів нашого служіння є служіння гостинності.',
      'Приміщення церкви стало місцем, де можуть тимчасово жити молоді люди та інші люди, які опинилися у складних життєвих обставинах або були змушені залишити свої домівки через війну.',
      'З початку повномасштабного вторгнення тут отримали прихисток понад 200 людей.',
      'Для когось це було безпечне місце лише на декілька ночей дорогою через Львів. Інші залишалися значно довше, тому що просто не мали іншого місця, куди могли піти.',
    ],
    sections: [
      {
        title: 'Відкриті двері з 2022 року',
        paragraphs: [],
        statistic: { value: '200+', label: 'Людей отримали прихисток з 2022 року' },
        galleryTitle: 'Відкриті двері з 2022 року',
        galleryKey: 'hospitality-2022',
        tone: 'yellow',
      },
      {
        title: 'Гостинність сьогодні',
        paragraphs: [
          'Сьогодні у приміщенні церкви продовжують жити дві молоді дівчини: одна опинилася у складних життєвих обставинах, інша — переселенка з Херсона.',
          'Для нас гостинність — це не лише надати людині кімнату чи ліжко.',
          'Це прийняти її, бути поруч у складний період, підтримати та допомогти відчути, що вона не залишилася сама.',
          'З багатьма людьми, які жили у нас після початку повномасштабного вторгнення, ми продовжуємо підтримувати близькі стосунки й сьогодні.',
        ],
        galleryTitle: 'Гостинність сьогодні',
        galleryKey: 'hospitality-today',
        tone: 'cream',
      },
    ],
  },
]

const en: Ministry[] = [
  {
    slug: 'bible-study',
    title: 'Bible Study',
    cardDescription: 'Every Thursday at 19:00, we gather to read the Bible together, ask open questions, and talk about faith and life.',
    eyebrow: 'Pilgrims',
    heroTitle: 'Bible Study',
    subtitle: 'A place for honest questions, open conversations, and seeking God together.',
    intro: [
      'Every Thursday at 19:00, we bring together young people from different Christian denominations to read and discuss the Bible.',
      'It is a space to ask difficult questions, talk about faith and life, listen to others, and explore together how to practice Christian faith in everyday life.',
      'For many, these gatherings become a place to find community, understand the Bible more deeply, and gradually form a thoughtful personal understanding of faith.',
    ],
    when: 'Every Thursday at 19:00',
    where: '5 Hryhorenka Square, apartment 17, Lviv',
    mapUrl: 'https://maps.app.goo.gl/AzNQ3gmcB4fzPWc78',
    sections: [
      { title: 'Our gatherings', paragraphs: [], galleryTitle: 'Our gatherings', galleryKey: 'bible-study' },
    ],
  },
  {
    slug: 'prayer',
    title: 'Shared Prayer',
    cardDescription: 'Every Wednesday at 19:00, we pray for one another, our church, service members, Ukraine, and the needs around us.',
    eyebrow: 'Together in prayer',
    heroTitle: 'Shared Prayer',
    subtitle: 'We pray together. We support one another. We trust God.',
    intro: [
      'Every Wednesday at 19:00, we meet to pray.',
      'We pray for one another, our ministries, our church, service members, Ukraine, and the needs of people around us.',
      'These gatherings help us not only talk about faith but practice it together — supporting one another, sharing our needs, and learning to trust God.',
    ],
    when: 'Every Wednesday at 19:00',
    sections: [
      { title: 'Community prayer', paragraphs: [], galleryTitle: 'Community prayer', galleryKey: 'prayer' },
    ],
  },
  {
    slug: 'leadership',
    title: 'Youth Leadership',
    cardDescription: 'We help young people grow as leaders through training, shared responsibility, and practical service.',
    eyebrow: 'Youth leadership',
    heroTitle: 'From participants to leaders',
    subtitle: 'Helping young people take responsibility, develop, and serve others.',
    intro: [],
    sections: [
      {
        title: 'Youth leadership team',
        paragraphs: [
          'We want young people not only to attend ready-made gatherings, but gradually to learn to take responsibility for the community and serve others themselves.',
          'That is why we created a youth leadership team.',
          'Once a month, the team independently prepares one of the Thursday gatherings.',
          'Twice more each month, the young leaders meet separately for training, development, planning, and work on practical leadership skills.',
          'This gives young people real responsibility: they learn to work as a team, make decisions, prepare programs, lead gatherings, and care for others.',
        ],
        highlights: [
          '1 gathering each month — organized by young leaders',
          '2 leadership meetings each month',
        ],
        tone: 'yellow',
      },
      {
        title: 'Investing in leaders',
        paragraphs: [
          'We support young people who want to learn, develop, and become mature leaders.',
          'One such opportunity is studying at the Ukrainian Baptist Theological Seminary — UBTS.',
          'This may include theological programs, leadership development programs, and other educational opportunities.',
          'We provide partial financial support for this education so young people can gain new knowledge, practical skills, and tools for further growth and service.',
          'For us, this is an investment not only in education, but in people who will later be able to lead others.',
        ],
        galleryTitle: 'Leadership meetings, training, and retreats',
        galleryKey: 'leadership',
        tone: 'cream',
      },
    ],
  },
  {
    slug: 'communa',
    title: 'COMMUNA',
    cardDescription: 'We create room for friendship, new connections, and shared activities — from English Club to volunteer initiatives.',
    eyebrow: 'COMMUNA',
    heroTitle: 'COMMUNA',
    subtitle: 'A place where friendship begins.',
    intro: [
      'COMMUNA focuses on social connection and building personal relationships with young people who do not identify as believers.',
      'We create spaces where people can meet, build friendships, spend time together, and gradually become part of a community.',
    ],
    sections: [
      {
        title: 'Our vision',
        paragraphs: ['A developed and flourishing society shaped by thoughtful young leaders.'],
        tone: 'yellow',
      },
      {
        title: 'What we do',
        paragraphs: [],
        items: [
          'Mountain hikes',
          'Speaking clubs',
          'Trips beyond Lviv',
          'Board games',
          'Cooking evenings',
          'Film screenings and discussions',
          'Volunteer trips',
        ],
        tone: 'cream',
      },
      {
        title: 'English Club — more than English',
        paragraphs: [
          'A ten-week program with a native English speaker where young people can practice conversational English in an informal setting.',
          'For us, however, it is not only about language. Through regular meetings, shared conversations, and time together, we build relationships and friendships with young people who are not part of a church.',
          'English Club becomes a natural place for connection, trust, and deeper conversations about life, values, and faith.',
        ],
        tone: 'blue',
      },
      {
        title: 'Friendship that becomes practical good',
        paragraphs: [
          'COMMUNA helps young people not only find friends, but also learn to notice the needs of others.',
          'Our volunteer activities have included walking dogs and helping create football and volleyball fields for children in the village of Nova Skvariava.',
        ],
        tone: 'cream',
      },
      // {
      //   title: 'Nova Skvariava',
      //   paragraphs: [
      //     'Together with young people, using our own work and resources, we created the first volleyball court and football field in the village of Nova Skvariava.',
      //     'It became a place where children and teenagers can play, make friends, and spend time together.',
      //     'For us, this service is an opportunity to share care and show young people that even a small community can change life around it.',
      //   ],
      //   galleryTitle: 'The Nova Skvariava project',
      //   galleryKey: 'communa-nova-skvariava',
      //   tone: 'green',
      // },
      {
        title: 'Speaking about faith in the language of young people',
        paragraphs: [
          'Together with Steiger, we work on evangelism projects and seek contemporary, understandable ways to talk with young people about Jesus.',
          'For us, evangelism is not limited to individual events.',
          'It begins with relationships, trust, a willingness to listen, and honest conversation with people who have no church experience or are only beginning to explore Christian faith.',
          'We want to create an environment where a person can ask questions, hear about Jesus, and take their own step toward knowing God.',
          'These projects are part of the wider Youth to Jesus ministry and are not organized exclusively through COMMUNA.',
        ],
        galleryTitle: 'COMMUNA moments',
        galleryKey: 'communa',
        tone: 'green',
      },
    ],
  },
  {
    slug: 'trips-retreats',
    title: 'Trips and Retreats',
    cardDescription: 'We travel, discover new places, build friendships, and make time for spiritual renewal.',
    eyebrow: 'Trips and retreats',
    heroTitle: 'Trips and Retreats',
    subtitle: 'Time for friendship, renewal, and honest conversations.',
    intro: [],
    sections: [
      {
        title: 'Mountain trips',
        paragraphs: [
          'Several times a year, we organize summer and autumn mountain trips for both believing and non-believing young people.',
          'In the mountains, it is easier to pause, step outside the usual rhythm, spend time together, and truly talk.',
          'These trips often become the setting where friendship, trust, and open conversations about life and faith begin.',
        ],
        galleryTitle: 'Mountain trips',
        galleryKey: 'mountain-trips',
        tone: 'green',
      },
      {
        title: 'Leadership retreats',
        paragraphs: [
          'We also organize or join leadership retreats for the ministry team.',
          'This is time for spiritual renewal, prayer, learning, planning, and strengthening the team.',
        ],
        galleryTitle: 'Leadership retreats',
        galleryKey: 'leadership-retreats',
        tone: 'cream',
      },
      {
        title: 'Together with UMC youth in Ukraine',
        paragraphs: [
          'We stay connected with young people from other United Methodist communities in Ukraine and take part in shared gatherings and ministries.',
          'For young people, this is an opportunity to see that they are part of a much larger community, meet Christians from other cities, exchange experience, and serve people together.',
          'In this way, a network of young people and leaders gradually grows — people who support one another and develop ministry in their own communities.',
        ],
        galleryTitle: 'Shared youth events',
        galleryKey: 'umc-youth',
        tone: 'blue',
      },
    ],
  },
  {
    slug: 'hospitality',
    title: 'Hospitality Ministry',
    cardDescription: 'We open our doors to people who need temporary shelter, support, and a sense of home.',
    eyebrow: 'Hospitality ministry',
    heroTitle: 'A home when it is needed most',
    subtitle: 'Opening our doors to those who need support, safety, and a sense of home.',
    intro: [
      'One of our areas of ministry is hospitality.',
      'The church premises have become a place where young people and others facing difficult life circumstances, or forced to leave their homes because of the war, can live temporarily.',
      'Since the beginning of the full-scale invasion, more than 200 people have found shelter here.',
      'For some, it was a safe place for only a few nights while passing through Lviv. Others stayed much longer because they simply had nowhere else to go.',
    ],
    sections: [
      {
        title: 'Open doors since 2022',
        paragraphs: [],
        statistic: { value: '200+', label: 'people have received shelter since 2022' },
        galleryTitle: 'Open doors since 2022',
        galleryKey: 'hospitality-2022',
        tone: 'yellow',
      },
      {
        title: 'Hospitality today',
        paragraphs: [
          'Today, two young women continue to live on the church premises: one is facing difficult life circumstances, and the other was displaced from Kherson.',
          'For us, hospitality is more than giving someone a room or a bed.',
          'It means welcoming a person, staying close during a difficult season, offering support, and helping them feel that they are not alone.',
          'We remain in close contact today with many people who lived with us after the beginning of the full-scale invasion.',
        ],
        galleryTitle: 'Hospitality today',
        galleryKey: 'hospitality-today',
        tone: 'cream',
      },
    ],
  },
]

export const ministryContent: Record<Lang, Ministry[]> = { uk, en }

export const communityIntro: Record<Lang, { eyebrow: string; title: string; description: string }> = {
  uk: {
    eyebrow: 'Життя спільноти',
    title: 'Живемо вірою разом.',
    description: 'Від щотижневих зустрічей і спільної молитви до гірських пригод, волонтерства та розвитку молодих лідерів — ми створюємо простір, де молодь може пізнавати Бога, знаходити друзів, зростати та служити іншим.',
  },
  en: {
    eyebrow: 'Community life',
    title: 'Living faith together.',
    description: 'From weekly gatherings and shared prayer to mountain adventures, volunteering, and developing young leaders, we create room for young people to know God, find friends, grow, and serve others.',
  },
}

export const legacyMinistrySlugs: Record<string, string> = {
  'mountain-hikes': 'trips-retreats',
  'leadership-training': 'leadership',
  'spiritual-growth': 'prayer',
}

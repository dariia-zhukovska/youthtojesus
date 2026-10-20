import type { Lang } from './i18n'

export type InitiativeSection = {
  title: string
  paragraphs: string[]
  galleryTitle?: string
  galleryKey?: string
  tone?: 'cream' | 'yellow' | 'blue' | 'green'
}

export type Initiative = {
  slug: string
  title: string
  cardDescription: string
  heroTitle: string
  subtitle: string
  paragraphs: string[]
  sections: InitiativeSection[]
}

const uk: Initiative[] = [
  {
    slug: 'english-club',
    title: 'English Club',
    cardDescription: 'Практикуємо англійську з носієм мови, знайомимося та будуємо дружбу в невимушеній атмосфері.',
    heroTitle: 'English Club — більше ніж англійська',
    subtitle: 'Місце для живого спілкування, нових знайомств і справжньої дружби.',
    paragraphs: [
      'English Club — це 10-тижнева програма зустрічей із носієм англійської мови, де молодь може практикувати живу англійську в неформальній атмосфері.',
      'Але для нас це не лише про мову. Через регулярні зустрічі, спільні розмови та час разом ми будуємо стосунки й дружбу з молодими людьми, які не є частиною церкви.',
      'Так English Club стає природним місцем для знайомства, довіри та глибших розмов про життя, цінності й віру.',
    ],
    sections: [
      {
        title: 'Моменти English Club',
        paragraphs: [],
        galleryTitle: 'Моменти English Club',
        galleryKey: 'english-club',
      },
    ],
  },
  {
    slug: 'volunteering',
    title: 'Волонтерство',
    cardDescription: 'Допомагаємо іншим через спільні добрі справи, соціальні ініціативи та практичне служіння.',
    heroTitle: 'Маленькі дії. Великі зміни.',
    subtitle: 'Вчимося бачити потреби інших і разом робити щось добре.',
    paragraphs: [
      'Волонтерство — важлива частина життя нашої спільноти.',
      'Ми хочемо, щоб молоді люди не лише знаходили друзів і розвивалися, але й вчилися помічати потреби інших та брати відповідальність за світ навколо себе.',
      'Серед наших ініціатив були волонтерські виїзди, допомога з вигулом собак та облаштування спортивних майданчиків для дітей.',
    ],
    sections: [
      {
        title: 'Волонтерство в дії',
        paragraphs: [],
        galleryTitle: 'Волонтерство в дії',
        galleryKey: 'volunteering',
      },
      {
        title: 'Простір для дитячих мрій',
        paragraphs: [
          'Разом із молоддю ми власними силами й коштом облаштували в селі Нова Скварява перший волейбольний майданчик і футбольне поле.',
          'Так з’явився простір, де діти й підлітки можуть грати, знаходити друзів і проводити час разом.',
          'Для нас це служіння — можливість поділитися турботою та показати молоді, що навіть невелика спільнота здатна змінювати життя навколо себе.',
        ],
        galleryTitle: 'Проєкт у Новій Скваряві',
        galleryKey: 'nova-skvariava',
        tone: 'yellow',
      },
    ],
  },
  {
    slug: 'evangelism',
    title: 'Євангелізація',
    cardDescription: 'Разом зі Steiger шукаємо сучасні способи говорити з молоддю про Ісуса через творчість, спілкування та особисті стосунки.',
    heroTitle: 'Говорити про віру мовою молоді',
    subtitle: 'Створюємо простір для чесних запитань, відкритих розмов і знайомства з Ісусом.',
    paragraphs: [
      'Разом з організацією Steiger ми працюємо над євангелізаційними проєктами та шукаємо сучасні й зрозумілі для молоді способи говорити про Ісуса.',
      'Для нас євангелізація — це не лише окремі події.',
      'Насамперед це стосунки, довіра, готовність слухати та чесно говорити з людьми, які не мають церковного досвіду або лише починають цікавитися християнською вірою.',
      'Ми хочемо створювати середовище, де людина може поставити свої питання, почути про Ісуса і зробити власний крок у пізнанні Бога.',
    ],
    sections: [
      {
        title: 'Євангелізаційні події',
        paragraphs: [],
        galleryTitle: 'Євангелізаційні події',
        galleryKey: 'evangelism',
      },
    ],
  },
  {
    slug: 'interchurch-events',
    title: 'Спільні міжцерковні події',
    cardDescription: 'Зустрічаємося з молоддю інших громад, будуємо дружбу, ділимося досвідом і разом служимо.',
    heroTitle: 'Разом ми — більша спільнота',
    subtitle: 'Будуємо зв’язки з молоддю інших церков і громад.',
    paragraphs: [
      'Ми підтримуємо зв’язок з молоддю інших громад Об’єднаної Методистської Церкви в Україні та беремо участь у спільних зустрічах і служіннях.',
      'Для молоді це можливість побачити, що вони є частиною значно більшої спільноти, знайомитися з християнами з інших міст, обмінюватися досвідом та разом служити людям.',
      'Так поступово формується мережа молодих людей і лідерів, які підтримують одне одного та розвивають служіння у своїх громадах.',
    ],
    sections: [
      {
        title: 'Спільні молодіжні події',
        paragraphs: [],
        galleryTitle: 'Спільні молодіжні події',
        galleryKey: 'interchurch-events',
      },
    ],
  },
]

const en: Initiative[] = [
  {
    slug: 'english-club',
    title: 'English Club',
    cardDescription: 'We practice English with a native speaker, meet new people, and build friendships in a relaxed atmosphere.',
    heroTitle: 'English Club — more than English',
    subtitle: 'A place for real conversation, new connections, and genuine friendship.',
    paragraphs: [
      'English Club is a ten-week program with a native English speaker where young people can practice conversational English in an informal atmosphere.',
      'For us, however, it is not only about language. Through regular gatherings, shared conversations, and time together, we build relationships and friendships with young people who are not part of a church.',
      'English Club becomes a natural place for connection, trust, and deeper conversations about life, values, and faith.',
    ],
    sections: [
      {
        title: 'English Club moments',
        paragraphs: [],
        galleryTitle: 'English Club moments',
        galleryKey: 'english-club',
      },
    ],
  },
  {
    slug: 'volunteering',
    title: 'Volunteering',
    cardDescription: 'We help others through shared acts of kindness, social initiatives, and practical service.',
    heroTitle: 'Small actions. Meaningful change.',
    subtitle: 'Learning to notice the needs of others and do something good together.',
    paragraphs: [
      'Volunteering is an important part of our community life.',
      'We want young people not only to find friends and grow, but also to notice the needs of others and take responsibility for the world around them.',
      'Our initiatives have included volunteer trips, helping walk dogs, and creating sports grounds for children.',
    ],
    sections: [
      {
        title: 'Volunteering in action',
        paragraphs: [],
        galleryTitle: 'Volunteering in action',
        galleryKey: 'volunteering',
      },
      {
        title: 'A place for children’s dreams',
        paragraphs: [
          'Together with young people, using our own work and resources, we created the first volleyball court and football field in the village of Nova Skvariava.',
          'It became a place where children and teenagers can play, make friends, and spend time together.',
          'For us, this service is an opportunity to share care and show young people that even a small community can change life around it.',
        ],
        galleryTitle: 'The Nova Skvariava project',
        galleryKey: 'nova-skvariava',
        tone: 'yellow',
      },
    ],
  },
  {
    slug: 'evangelism',
    title: 'Evangelism',
    cardDescription: 'Together with Steiger, we seek contemporary ways to talk with young people about Jesus through creativity, conversation, and personal relationships.',
    heroTitle: 'Speaking about faith in the language of young people',
    subtitle: 'Creating room for honest questions, open conversations, and discovering Jesus.',
    paragraphs: [
      'Together with Steiger, we work on evangelism projects and seek contemporary, understandable ways to talk with young people about Jesus.',
      'For us, evangelism is not limited to individual events.',
      'It begins with relationships, trust, a willingness to listen, and honest conversation with people who have no church experience or are only beginning to explore Christian faith.',
      'We want to create an environment where a person can ask questions, hear about Jesus, and take their own step toward knowing God.',
    ],
    sections: [
      {
        title: 'Evangelism events',
        paragraphs: [],
        galleryTitle: 'Evangelism events',
        galleryKey: 'evangelism',
      },
    ],
  },
  {
    slug: 'interchurch-events',
    title: 'Interchurch Youth Events',
    cardDescription: 'We meet with young people from other communities, build friendships, share experience, and serve together.',
    heroTitle: 'Together, we are a larger community',
    subtitle: 'Building connections with young people from other churches and communities.',
    paragraphs: [
      'We stay connected with young people from other United Methodist communities in Ukraine and take part in shared gatherings and ministries.',
      'For young people, this is an opportunity to see that they are part of a much larger community, meet Christians from other cities, exchange experience, and serve people together.',
      'In this way, a network of young people and leaders gradually grows — people who support one another and develop ministry in their own communities.',
    ],
    sections: [
      {
        title: 'Shared youth events',
        paragraphs: [],
        galleryTitle: 'Shared youth events',
        galleryKey: 'interchurch-events',
      },
    ],
  },
]

export const initiativeContent: Record<Lang, Initiative[]> = { uk, en }

export const additionalInitiativesIntro: Record<Lang, { eyebrow: string; title: string; description: string }> = {
  uk: {
    eyebrow: 'Більше про нас',
    title: 'Більше, ніж зустрічі.',
    description: 'Життя нашої спільноти не обмежується регулярними зустрічами. Ми разом навчаємося, волонтеримо, знайомимося з новими людьми та долучаємося до проєктів, які змінюють життя навколо нас.',
  },
  en: {
    eyebrow: 'Beyond our gatherings',
    title: 'More than gatherings.',
    description: 'Our community life goes beyond regular meetings. We learn, volunteer, build new relationships, and take part in projects that make a difference in the lives of people around us.',
  },
}

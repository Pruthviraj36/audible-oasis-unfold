export interface Audiobook {
  id: string;
  title: string;
  author: string;
  narrator: string;
  cover: string;
  duration: string;
  rating: number;
  price?: number;
  isSubscriptionIncluded?: boolean;
  genre: string;
  description: string;
  releaseDate: string;
  isBestseller?: boolean;
  isNew?: boolean;
}

export const sampleAudiobooks: Audiobook[] = [
  {
    id: "1",
    title: "The Midnight Library",
    author: "Matt Haig",
    narrator: "Carey Mulligan",
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop&crop=center",
    duration: "8h 32m",
    rating: 4.8,
    price: 14.99,
    isSubscriptionIncluded: true,
    genre: "Fiction",
    description: "Between life and death there is a library, and within that library, the shelves go on forever...",
    releaseDate: "2020-08-13",
    isBestseller: true
  },
  {
    id: "2",
    title: "Atomic Habits",
    author: "James Clear",
    narrator: "James Clear",
    cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop&crop=center",
    duration: "5h 35m",
    rating: 4.9,
    price: 16.99,
    isSubscriptionIncluded: true,
    genre: "Self-Help",
    description: "A practical guide to building good habits and breaking bad ones.",
    releaseDate: "2018-10-16",
    isBestseller: true
  },
  {
    id: "3",
    title: "Project Hail Mary",
    author: "Andy Weir",
    narrator: "Ray Porter",
    cover: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=600&fit=crop&crop=center",
    duration: "16h 10m",
    rating: 4.7,
    price: 19.99,
    isSubscriptionIncluded: false,
    genre: "Sci-Fi",
    description: "A lone astronaut must save humanity in this science fiction thriller.",
    releaseDate: "2021-05-04",
    isNew: true
  },
  {
    id: "4",
    title: "Educated",
    author: "Tara Westover",
    narrator: "Julia Whelan",
    cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=center",
    duration: "12h 10m",
    rating: 4.6,
    price: 17.99,
    isSubscriptionIncluded: true,
    genre: "Memoir",
    description: "A powerful memoir about education, identity, and family.",
    releaseDate: "2018-02-20",
    isBestseller: true
  },
  {
    id: "5",
    title: "The Seven Husbands of Evelyn Hugo",
    author: "Taylor Jenkins Reid",
    narrator: "Alma Cuervo, Julia Whelan",
    cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop&crop=center",
    duration: "12h 10m",
    rating: 4.9,
    price: 15.99,
    isSubscriptionIncluded: true,
    genre: "Romance",
    description: "The captivating story of a Hollywood icon's life and loves.",
    releaseDate: "2017-06-13",
    isBestseller: true
  },
  {
    id: "6",
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    narrator: "Cassandra Campbell",
    cover: "https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?w=400&h=600&fit=crop&crop=center",
    duration: "12h 12m",
    rating: 4.5,
    price: 18.99,
    isSubscriptionIncluded: false,
    genre: "Mystery",
    description: "A coming-of-age murder mystery set in the marshlands of North Carolina.",
    releaseDate: "2018-08-14",
    isBestseller: true
  },
  {
    id: "7",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    narrator: "Chris Hill",
    cover: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=600&fit=crop&crop=center",
    duration: "5h 39m",
    rating: 4.7,
    price: 14.99,
    isSubscriptionIncluded: true,
    genre: "Business",
    description: "Timeless lessons on wealth, greed, and happiness.",
    releaseDate: "2020-09-08",
    isNew: true
  },
  {
    id: "8",
    title: "The Silent Patient",
    author: "Alex Michaelides",
    narrator: "Louise Brealey, Jack Hawkins",
    cover: "https://images.unsplash.com/photo-1526243741027-444d633d7365?w=400&h=600&fit=crop&crop=center",
    duration: "8h 43m",
    rating: 4.4,
    price: 16.99,
    isSubscriptionIncluded: true,
    genre: "Thriller",
    description: "A psychological thriller about a woman who refuses to speak.",
    releaseDate: "2019-02-05",
    isBestseller: true
  }
];

export const genres = [
  "Fiction",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Fantasy",
  "Thriller",
  "Self-Help",
  "Business",
  "Memoir",
  "History",
  "Science",
  "Biography"
];

export const subscriptionPlans = [
  {
    name: "Basic",
    price: 9.99,
    credits: 1,
    features: [
      "1 audiobook credit per month",
      "Access to basic library",
      "Standard audio quality"
    ]
  },
  {
    name: "Premium",
    price: 14.99,
    credits: 2,
    features: [
      "2 audiobook credits per month",
      "Access to full library",
      "High-quality audio",
      "Offline downloads",
      "Exclusive content"
    ],
    popular: true
  },
  {
    name: "Family",
    price: 19.99,
    credits: 4,
    features: [
      "4 audiobook credits per month",
      "Share with up to 6 family members",
      "All Premium features",
      "Parental controls"
    ]
  }
];
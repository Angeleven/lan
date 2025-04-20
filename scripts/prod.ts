import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);
// @ts-ignore
const db = drizzle(sql, { schema });

// Define a type for language keys
type Language = keyof typeof languageData;

// Language-specific translations and resources
const languageData = {
  Spanish: {
    code: "es",
    translations: {
      man: "el hombre",
      woman: "la mujer",
      boy: "el chico",
      girl: "la niña",
      zombie: "el zombie",
      robot: "el robot",
      cat: "el gato",
      dog: "el perro",
      house: "la casa",
      car: "el coche",
      book: "el libro",
      apple: "la manzana",
      water: "el agua",
      bread: "el pan",
      fish: "el pez",
      bird: "el pájaro",
      run: "correr",
      eat: "comer",
      sleep: "dormir",
      walk: "caminar",
      read: "leer",
      write: "escribir",
      big: "grande",
      small: "pequeño",
      good: "bueno",
      bad: "malo",
      hot: "caliente",
      cold: "frío"
    },
    unitDescriptions: [
      "Learn the basics of Spanish",
      "Learn intermediate Spanish",
      "Learn advanced Spanish"
    ]
  },
  Japanese: {
    code: "jp",
    translations: {
      man: "男性 (dansei)",
      woman: "女性 (josei)",
      boy: "少年 (shōnen)",
      girl: "少女 (shōjo)",
      zombie: "ゾンビ (zonbi)",
      robot: "ロボット (robotto)",
      cat: "猫 (neko)",
      dog: "犬 (inu)",
      house: "家 (ie)",
      car: "車 (kuruma)",
      book: "本 (hon)",
      apple: "リンゴ (ringo)",
      water: "水 (mizu)",
      bread: "パン (pan)",
      fish: "魚 (sakana)",
      bird: "鳥 (tori)",
      run: "走る (hashiru)",
      eat: "食べる (taberu)",
      sleep: "寝る (neru)",
      walk: "歩く (aruku)",
      read: "読む (yomu)",
      write: "書く (kaku)",
      big: "大きい (ōkii)",
      small: "小さい (chiisai)",
      good: "良い (yoi)",
      bad: "悪い (warui)",
      hot: "熱い (atsui)",
      cold: "寒い (samui)"
    },
    unitDescriptions: [
      "Learn the basics of Japanese",
      "Learn intermediate Japanese",
      "Learn advanced Japanese"
    ]
  },
  Italian: {
    code: "it",
    translations: {
      man: "l'uomo",
      woman: "la donna",
      boy: "il ragazzo",
      girl: "la ragazza",
      zombie: "lo zombie",
      robot: "il robot",
      cat: "il gatto",
      dog: "il cane",
      house: "la casa",
      car: "la macchina",
      book: "il libro",
      apple: "la mela",
      water: "l'acqua",
      bread: "il pane",
      fish: "il pesce",
      bird: "l'uccello",
      run: "correre",
      eat: "mangiare",
      sleep: "dormire",
      walk: "camminare",
      read: "leggere",
      write: "scrivere",
      big: "grande",
      small: "piccolo",
      good: "buono",
      bad: "cattivo",
      hot: "caldo",
      cold: "freddo"
    },
    unitDescriptions: [
      "Learn the basics of Italian",
      "Learn intermediate Italian",
      "Learn advanced Italian"
    ]
  },
  French: {
    code: "fr",
    translations: {
      man: "l'homme",
      woman: "la femme",
      boy: "le garçon",
      girl: "la fille",
      zombie: "le zombie",
      robot: "le robot",
      cat: "le chat",
      dog: "le chien",
      house: "la maison",
      car: "la voiture",
      book: "le livre",
      apple: "la pomme",
      water: "l'eau",
      bread: "le pain",
      fish: "le poisson",
      bird: "l'oiseau",
      run: "courir",
      eat: "manger",
      sleep: "dormir",
      walk: "marcher",
      read: "lire",
      write: "écrire",
      big: "grand",
      small: "petit",
      good: "bon",
      bad: "mauvais",
      hot: "chaud",
      cold: "froid"
    },
    unitDescriptions: [
      "Learn the basics of French",
      "Learn intermediate French",
      "Learn advanced French"
    ]
  }
};

// Export types if needed elsewhere
export type { Language };


// Challenge templates to generate more diverse exercises
const challengeTemplates = [
  // Nouns challenges
  {
    lessonType: "Nouns",
    challenges: [
      { type: "SELECT", question: 'Which one of these is "the man"?', correctWord: "man", wrongWords: ["woman", "boy"] },
      { type: "SELECT", question: 'Which one of these is "the woman"?', correctWord: "woman", wrongWords: ["boy", "man"] },
      { type: "SELECT", question: 'Which one of these is "the boy"?', correctWord: "boy", wrongWords: ["woman", "man"] },
      { type: "ASSIST", question: '"the man"', correctWord: "man", wrongWords: ["woman", "boy"] },
      { type: "SELECT", question: 'Which one of these is "the girl"?', correctWord: "girl", wrongWords: ["zombie", "man"] },
      { type: "SELECT", question: 'Which one of these is "the zombie"?', correctWord: "zombie", wrongWords: ["man", "woman"] },
      { type: "SELECT", question: 'Which one of these is "the robot"?', correctWord: "robot", wrongWords: ["zombie", "boy"] },
      { type: "ASSIST", question: '"the zombie"', correctWord: "zombie", wrongWords: ["woman", "boy"] },
      { type: "SELECT", question: 'Which one of these is "the cat"?', correctWord: "cat", wrongWords: ["dog", "bird"] },
      { type: "SELECT", question: 'Which one of these is "the dog"?', correctWord: "dog", wrongWords: ["cat", "fish"] },
      { type: "ASSIST", question: '"the cat"', correctWord: "cat", wrongWords: ["dog", "bird"] },
      { type: "SELECT", question: 'Which one of these is "the house"?', correctWord: "house", wrongWords: ["car", "book"] },
      { type: "SELECT", question: 'Which one of these is "the car"?', correctWord: "car", wrongWords: ["house", "book"] },
      { type: "ASSIST", question: '"the house"', correctWord: "house", wrongWords: ["car", "book"] },
      { type: "SELECT", question: 'Which one of these is "the book"?', correctWord: "book", wrongWords: ["apple", "water"] }
    ]
  },
  // Verbs challenges
  {
    lessonType: "Verbs",
    challenges: [
      { type: "SELECT", question: 'Which one of these is "to run"?', correctWord: "run", wrongWords: ["eat", "sleep"] },
      { type: "SELECT", question: 'Which one of these is "to eat"?', correctWord: "eat", wrongWords: ["run", "walk"] },
      { type: "SELECT", question: 'Which one of these is "to sleep"?', correctWord: "sleep", wrongWords: ["eat", "run"] },
      { type: "ASSIST", question: '"to run"', correctWord: "run", wrongWords: ["eat", "sleep"] },
      { type: "SELECT", question: 'Which one of these is "to walk"?', correctWord: "walk", wrongWords: ["read", "write"] },
      { type: "SELECT", question: 'Which one of these is "to read"?', correctWord: "read", wrongWords: ["write", "walk"] },
      { type: "SELECT", question: 'Which one of these is "to write"?', correctWord: "write", wrongWords: ["read", "walk"] },
      { type: "ASSIST", question: '"to read"', correctWord: "read", wrongWords: ["write", "walk"] }
    ]
  },
  // Adjectives challenges
  {
    lessonType: "Adjectives",
    challenges: [
      { type: "SELECT", question: 'Which one of these is "big"?', correctWord: "big", wrongWords: ["small", "good"] },
      { type: "SELECT", question: 'Which one of these is "small"?', correctWord: "small", wrongWords: ["big", "bad"] },
      { type: "SELECT", question: 'Which one of these is "good"?', correctWord: "good", wrongWords: ["bad", "hot"] },
      { type: "ASSIST", question: '"big"', correctWord: "big", wrongWords: ["small", "good"] },
      { type: "SELECT", question: 'Which one of these is "bad"?', correctWord: "bad", wrongWords: ["good", "cold"] },
      { type: "SELECT", question: 'Which one of these is "hot"?', correctWord: "hot", wrongWords: ["cold", "big"] },
      { type: "SELECT", question: 'Which one of these is "cold"?', correctWord: "cold", wrongWords: ["hot", "small"] },
      { type: "ASSIST", question: '"good"', correctWord: "good", wrongWords: ["bad", "hot"] }
    ]
  },
  // Phrases challenges - simplified for this example
  {
    lessonType: "Phrases",
    challenges: [
      { type: "SELECT", question: 'Which one means "the big house"?', correctWord: "house", wrongWords: ["car", "book"], adjective: "big" },
      { type: "SELECT", question: 'Which one means "the small car"?', correctWord: "car", wrongWords: ["house", "book"], adjective: "small" },
      { type: "SELECT", question: 'Which one means "the good book"?', correctWord: "book", wrongWords: ["apple", "water"], adjective: "good" },
      { type: "ASSIST", question: '"the big house"', correctWord: "house", adjective: "big", wrongWords: ["car", "book"] },
      { type: "SELECT", question: 'Which one means "the bad robot"?', correctWord: "robot", wrongWords: ["zombie", "boy"], adjective: "bad" },
      { type: "SELECT", question: 'Which one means "the hot water"?', correctWord: "water", wrongWords: ["bread", "apple"], adjective: "hot" },
      { type: "SELECT", question: 'Which one means "the cold water"?', correctWord: "water", wrongWords: ["bread", "apple"], adjective: "cold" },
      { type: "ASSIST", question: '"the small car"', correctWord: "car", adjective: "small", wrongWords: ["house", "book"] }
    ]
  },
  // Sentences challenges - simplified for this example
  {
    lessonType: "Sentences",
    challenges: [
      { type: "SELECT", question: 'Which one means "The man reads the book"?', subject: "man", verb: "read", object: "book", wrongSubject1: "woman", wrongSubject2: "boy" },
      { type: "SELECT", question: 'Which one means "The woman eats the apple"?', subject: "woman", verb: "eat", object: "apple", wrongSubject1: "man", wrongSubject2: "girl" },
      { type: "SELECT", question: 'Which one means "The boy runs"?', subject: "boy", verb: "run", wrongSubject1: "man", wrongSubject2: "girl" },
      { type: "ASSIST", question: '"The man reads the book"', subject: "man", verb: "read", object: "book" },
      { type: "SELECT", question: 'Which one means "The girl walks"?', subject: "girl", verb: "walk", wrongSubject1: "boy", wrongSubject2: "woman" },
      { type: "SELECT", question: 'Which one means "The dog eats"?', subject: "dog", verb: "eat", wrongSubject1: "cat", wrongSubject2: "fish" },
      { type: "SELECT", question: 'Which one means "The cat sleeps"?', subject: "cat", verb: "sleep", wrongSubject1: "dog", wrongSubject2: "bird" },
      { type: "ASSIST", question: '"The woman eats the apple"', subject: "woman", verb: "eat", object: "apple" }
    ]
  }
]as const;

// Function to create challenge options based on templates
const createChallengeOptions = (challenge: any,
  translations: { [key: string]: string },
  langCode: string,
  challengeId: string
): any[] => {
  const options = [];
  
  // For sentences
  if (challenge.subject && challenge.verb) {
    const correctText = challenge.object 
      ? `${translations[challenge.subject]} ${translations[challenge.verb]} ${translations[challenge.object]}`
      : `${translations[challenge.subject]} ${translations[challenge.verb]}`;
      
    const wrongText1 = challenge.object
      ? `${translations[challenge.wrongSubject1]} ${translations[challenge.verb]} ${translations[challenge.object]}`
      : `${translations[challenge.wrongSubject1]} ${translations[challenge.verb]}`;
      
    const wrongText2 = challenge.object
      ? `${translations[challenge.wrongSubject2]} ${translations[challenge.verb]} ${translations[challenge.object]}`
      : `${translations[challenge.wrongSubject2]} ${translations[challenge.verb]}`;
    
    options.push(
      {
        challengeId,
        correct: true,
        text: correctText,
        audioSrc: `/${langCode}_sentence1.mp3`,
      },
      {
        challengeId,
        correct: false,
        text: wrongText1,
        audioSrc: `/${langCode}_sentence2.mp3`,
      },
      {
        challengeId,
        correct: false,
        text: wrongText2,
        audioSrc: `/${langCode}_sentence3.mp3`,
      }
    );
    return options;
  }
  
  // For phrases
  if (challenge.adjective) {
    const correctWord = challenge.correctWord;
    const wrongWord1 = challenge.wrongWords[0];
    const wrongWord2 = challenge.wrongWords[1];
    
    options.push(
      {
        challengeId,
        correct: true,
        text: `${translations[challenge.adjective]} ${translations[correctWord]}`,
        imageSrc: `/${correctWord}.svg`,
        audioSrc: `/${langCode}_${challenge.adjective}_${correctWord}.mp3`,
      },
      {
        challengeId,
        correct: false,
        text: `${translations[challenge.adjective]} ${translations[wrongWord1]}`,
        imageSrc: `/${wrongWord1}.svg`,
        audioSrc: `/${langCode}_${challenge.adjective}_${wrongWord1}.mp3`,
      },
      {
        challengeId,
        correct: false,
        text: `${translations[challenge.adjective]} ${translations[wrongWord2]}`,
        imageSrc: `/${wrongWord2}.svg`,
        audioSrc: `/${langCode}_${challenge.adjective}_${wrongWord2}.mp3`,
      }
    );
    return options;
  }
  
  // For regular vocabulary
  const correctWord = challenge.correctWord;
  const wrongWord1 = challenge.wrongWords[0];
  const wrongWord2 = challenge.wrongWords[1];
  
  // For ASSIST type challenges (no images)
  if (challenge.type === "ASSIST") {
    options.push(
      {
        challengeId,
        correct: true,
        text: translations[correctWord],
        audioSrc: `/${langCode}_${correctWord}.mp3`,
      },
      {
        challengeId,
        correct: false,
        text: translations[wrongWord1],
        audioSrc: `/${langCode}_${wrongWord1}.mp3`,
      },
      {
        challengeId,
        correct: false,
        text: translations[wrongWord2],
        audioSrc: `/${langCode}_${wrongWord2}.mp3`,
      }
    );
  } else {
    // For SELECT type challenges (with images)
    options.push(
      {
        challengeId,
        correct: true,
        text: translations[correctWord],
        imageSrc: `/${correctWord}.svg`,
        audioSrc: `/${langCode}_${correctWord}.mp3`,
      },
      {
        challengeId,
        correct: false,
        text: translations[wrongWord1],
        imageSrc: `/${wrongWord1}.svg`,
        audioSrc: `/${langCode}_${wrongWord1}.mp3`,
      },
      {
        challengeId,
        correct: false,
        text: translations[wrongWord2],
        imageSrc: `/${wrongWord2}.svg`,
        audioSrc: `/${langCode}_${wrongWord2}.mp3`,
      }
    );
  }
  
  return options;
};

const main = async () => {
  try {
    console.log("Seeding database");

    // Delete all existing data
    await Promise.all([
      db.delete(schema.userProgress),
      db.delete(schema.challenges),
      db.delete(schema.units),
      db.delete(schema.lessons),
      db.delete(schema.courses),
      db.delete(schema.challengeOptions),
      db.delete(schema.userSubscription),
    ]);

    // Insert courses
    const courses = await db
      .insert(schema.courses)
      .values([
        {
          id: 1,
          title: "Spanish",
          imageSrc: "/es.svg"
        },
        {
          id: 2,
          title: "Japanese",
          imageSrc: "/jp.svg"
        },
        {
          id: 3,
          title: "Italian",
          imageSrc: "/it.svg"
        },
        {
          id: 4,
          title: "French",
          imageSrc: "/fr.svg"
        },
      ])
      .returning();

    // For each course, insert units
    for (const course of courses) {
      const languageInfo = languageData[course.title as Language];
      const langCode = languageInfo.code;
      const translations = languageInfo.translations;

      const units = await db
        .insert(schema.units)
        .values([
          {
            courseId: course.id,
            title: "Unit 1",
            description: languageInfo.unitDescriptions[0],
            order: 1,
          },
          {
            courseId: course.id,
            title: "Unit 2",
            description: languageInfo.unitDescriptions[1],
            order: 2,
          },
          {
            courseId: course.id,
            title: "Unit 3",
            description: languageInfo.unitDescriptions[1],
            order: 2,
          },
        ])
        .returning();

      // For each unit, insert lessons
      for (const unit of units) {
        const lessons = await db
          .insert(schema.lessons)
          .values([
            { unitId: unit.id, title: "Nouns", order: 1 },
            { unitId: unit.id, title: "Verbs", order: 2 },
            { unitId: unit.id, title: "Adjectives", order: 3 },
            { unitId: unit.id, title: "Phrases", order: 4 },
            { unitId: unit.id, title: "Sentences", order: 5 },
          ])
          .returning();

        // For each lesson, insert challenges based on templates
        for (const lesson of lessons) {
          // Find the template for this lesson type
          const template = challengeTemplates.find(t => t.lessonType === lesson.title);
          
          if (!template) continue;
          
          // Create challenge entries
          const challengeValues = template.challenges.map((challenge, index) => ({
            lessonId: lesson.id,
            type: challenge.type,
            question: challenge.question,
            order: index + 1,
          }));
          
          const challenges = await db
            .insert(schema.challenges)
            .values(challengeValues)
            .returning();
          
          // Create challenge options for each challenge
          for (let i = 0; i < challenges.length; i++) {
            const challenge = challenges[i];
            const templateChallenge = template.challenges[i];
            
            const options = createChallengeOptions(
              templateChallenge, 
              translations, 
              langCode, 
              challenge.id.toString() 
            );
            
            await db.insert(schema.challengeOptions).values(options);
          }
        }
      }
    }
    console.log("Database seeded successfully");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed database");
  }
};

void main();
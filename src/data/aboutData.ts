export interface AboutData {
  title: string;
  statusText: string;
  bioParagraphs: string[];
  shortBio: string;
  location: string;
  hobbies: string[];
  quote: {
    text: string;
    author?: string;
  };
}

export const aboutData: AboutData = {
  title: "About me",
  statusText: "Available online",
  bioParagraphs: [
    "Based in the vibrant temple city of 🏛️ Bhubaneswar, Odisha, I find inspiration in the perfect blend of ancient heritage and modern innovation that defines this place. The rich cultural tapestry and growing tech ecosystem here fuel my creativity both personally and professionally.",
    "When I'm not building systems or writing code, you'll find me on the open road 🛣️. ✈️ Traveling and 🏍️ riding are more than just hobbies—they're my way of exploring new perspectives, meeting diverse people, and finding inspiration in unexpected places. Every journey teaches me something new about the world and myself.",
    "I believe that the best ideas come when you step away from the screen and experience life. Whether it's discovering a hidden gem in a new city 🌆 or feeling the wind on a long ride 🏍️, these moments recharge my creativity and bring fresh energy to everything I do.",
    "Let's create something amazing together! ✨",
  ],
  shortBio: "I'm Chinmaya, a passionate Full Stack & Cloud Engineer with a love for crafting scalable backend systems, cloud-native applications, and production-grade infrastructure.",
  location: "Bhubaneswar, Odisha, India",
  hobbies: ["Traveling", "Riding"],
  quote: {
    text: "Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.",
    author: "Dr. A. P. J. Abdul Kalam"
  },
};


/**
 * ═══════════════════════════════════════════════════════════════════════
 *  YOUR PROFILE — this is the main file you edit. (The other one is
 *  src/theme.ts, where you pick your look.)
 * ═══════════════════════════════════════════════════════════════════════
 *
 * Everything here flows automatically to:
 *   - /api/whoami and /api/profile  (what the course platform reads)
 *   - your home page and /about     (what humans read)
 *
 * Because both pages and APIs read from THIS one object, they can never
 * disagree, and "pages match the API" is one of the graded checks.
 *
 * Fill in every field, replace the placeholder photo, and you're done.
 */

export const profile = {
  /** Your name as you want it to appear everywhere. */
  displayName: "Sebonti Mahnaz",

  /** Your UD email — must match the one you signed into the course with. */
  email: "sebonti@udel.edu",

  /** Where you're from. Shows on your roster card and /about. */
  hometown: "Newark, Delaware",

  /**
   * 2 to 4 fun facts (the grader checks the count!). Real ones: they're
   * how classmates find something to say hello about.
   */
  funFacts: [
    "I have a cat, which means I'm technically living in someone else's house.",
    "I love adventures and building things, whether it's LEGO sets, miniature houses, furniture, or something completely new.",
  ],

  /** One decision you're proud of, in a sentence. */
  decisionImProudOf:
    "I'm genuinely terrified of heights, but I decided not to let that fear hold me back, whether it's going ziplining, parasailing, or taking chances on things I've never tried before.",

  /**
   * Your photo. Replace public/photo.svg with a real photo of you
   * (e.g. put photo.jpg in the public/ folder and change this to "/photo.jpg").
   * It must be a real image file: the grader fetches it and checks.
   */
  photoPath: "/photo.jpg",

  /**
   * Who can see your roster card:
   *   "class"          — your classmates and the professor (recommended)
   *   "professor-only" — just the professor
   */
  rosterVisibility: "class" as "class" | "professor-only",

  /** A one-line tagline for your home page. Make it yours. */
  tagline: "Part analyst, part problem-solver, always curious.",

  /**
   * A short bio for your home page: two or three sentences, written like
   * a person, not a resume. What are you studying? What do you care about?
   */
  bio: "I'm a Business Analytics and Information Management student at the University of Delaware who enjoys solving problems and finding the stories hidden in data. I work with Python, SQL, Power BI, Tableau, and other technologies to turn complex information into meaningful insights. This portfolio is a collection of my projects, skills, and everything I've learned along the way.",

  /**
   * Your GitHub repo URL. The course platform reads this from /api/health to
   * verify you have ≥ 5 commits spread over days (not one bulk dump).
   * Example: "https://github.com/your-username/your-repo"
   */
  repoUrl: "https://github.com/Sebonti-Mahnaz/my-site",
};

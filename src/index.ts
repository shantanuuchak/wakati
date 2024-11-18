import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();

// Add middleware to handle CORS
app.use(cors());

// Default reading speed (words per minute)
const defaultWpm = 250;

// Helper function to calculate reading time
const calculateReadingTime = (text: string, wpm: number) => {
  const wordCount = text.split(/\s+/).length;
  const seconds = (wordCount / wpm) * 60;
  const minutes = seconds / 60;
  return {
    wordCount,
    estimatedReadingTimeSeconds: Number(seconds.toFixed(2)),
    estimatedReadingTimeMinutes: minutes,
  };
};

// Endpoint for calculating reading time (GET)
app.get("/", (c) => {
  const text = c.req.query("text");
  const wpm = Number(c.req.query("wpm") || defaultWpm);

  if (!text) {
    return c.json({ error: "Text parameter is required." }, 400);
  }

  const result = calculateReadingTime(text, wpm);
  return c.json({
    text,
    wordCount: result.wordCount,
    wpm,
    estimatedReadingTimeSeconds: result.estimatedReadingTimeSeconds,
    estimatedReadingTimeMinutes: result.estimatedReadingTimeMinutes,
  });
});

// Endpoint for calculating reading time (POST)
app.post("/", async (c) => {
  const body = await c.req.json();
  const text = body.text;
  const wpm = body.wpm || defaultWpm;

  if (!text) {
    return c.json({ error: "Text parameter is required." }, 400);
  }

  const result = calculateReadingTime(text, wpm);
  return c.json({
    text,
    wordCount: result.wordCount,
    wpm,
    estimatedReadingTimeSeconds: result.estimatedReadingTimeSeconds,
    estimatedReadingTimeMinutes: result.estimatedReadingTimeMinutes,
  });
});

export default app;

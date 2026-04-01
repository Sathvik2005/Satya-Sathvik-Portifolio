import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";
import { randomUUID } from "crypto";
import { z } from "zod";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(import.meta.url);

const app = express();
const contactMessages = [];

const insertContactMessageSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// API routes
app.post("/api/contact", async (req, res) => {
  try {
    const validatedData = insertContactMessageSchema.parse(req.body);
    const entry = {
      ...validatedData,
      id: randomUUID(),
      timestamp: new Date().toISOString(),
    };
    contactMessages.unshift(entry);

    res.status(201).json({
      success: true,
      message: "Message sent successfully. We'll get back to you soon!",
      data: entry,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      const details = error.issues.map((issue) => issue.message).join("; ");
      return res.status(400).json({
        success: false,
        error: details,
      });
    }

    res.status(500).json({
      success: false,
      error: "Failed to send message. Please try again later.",
    });
  }
});

app.get("/api/contact", (_req, res) => {
  res.json({
    success: true,
    data: contactMessages,
  });
});

// Serve static files from dist/public
const publicPath = path.join(__dirname, "../dist/public");
app.use(express.static(publicPath));

// Catch-all route to serve index.html for client-side routing
app.get("*", (_req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

export default app;

import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";
import { getEmailConfig, sendContactEmail } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      await sendContactEmail(validatedData);
      
      res.status(201).json({
        success: true,
        message: "Message sent successfully",
        data: message,
      });
    } catch (error: any) {
      if (error.name === "ZodError") {
        const validationError = fromZodError(error);
        return res.status(400).json({
          success: false,
          error: validationError.message,
        });
      }

      if (error instanceof Error && error.message.includes("Missing email env vars")) {
        const config = getEmailConfig();
        return res.status(500).json({
          success: false,
          error: "Contact email is not configured on the server.",
          details: config.enabled ? undefined : config.reason,
        });
      }
      
      console.error("Error creating contact message:", error);
      res.status(500).json({
        success: false,
        error: "Failed to send message. Please try again later.",
      });
    }
  });

  // Get all contact messages (for potential admin dashboard in future)
  app.get("/api/contact", async (_req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json({
        success: true,
        data: messages,
      });
    } catch (error) {
      console.error("Error fetching contact messages:", error);
      res.status(500).json({
        success: false,
        error: "Failed to fetch messages",
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

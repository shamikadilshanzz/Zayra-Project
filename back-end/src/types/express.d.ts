import "@clerk/express";
import type { AuthObject } from "@clerk/express";

declare global {
  namespace Express {
    interface Request {
      auth?: AuthObject | null;
    }
  }
}

export {};

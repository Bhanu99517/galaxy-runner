import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { spawn } from "child_process";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Helper to call Python logic
  const callPython = (args: string[]): Promise<any> => {
    return new Promise((resolve, reject) => {
      const pythonProcess = spawn('python3', [path.join(process.cwd(), 'logic.py'), ...args]);
      let data = '';
      let error = '';

      pythonProcess.stdout.on('data', (chunk) => {
        data += chunk.toString();
      });

      pythonProcess.stderr.on('data', (chunk) => {
        error += chunk.toString();
      });

      pythonProcess.on('close', (code) => {
        if (code !== 0) {
          reject(new Error(`Python process exited with code ${code}: ${error}`));
          return;
        }
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(new Error(`Failed to parse Python output: ${data}`));
        }
      });
    });
  };

  // API Route: Get AI-Generated Level
  app.get("/api/level", async (req, res) => {
    try {
      const difficulty = req.query.difficulty as string || "1";
      const levelData = await callPython(["level", difficulty]);
      res.json(levelData);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  // API Route: Process Stats
  app.post("/api/stats", async (req, res) => {
    try {
      const { score, distance } = req.body;
      const stats = await callPython(["stats", score.toString(), distance.toString()]);
      res.json(stats);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

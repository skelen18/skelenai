app.post("/chat", async (req, res) => {
    const { message } = req.body;
    try {
      const response = await axios.post("https://api.openai.com/v1/chat/completions", {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: message }]
      }, {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
        }
      });
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.post("/generate-image", async (req, res) => {
    const { prompt } = req.body;
    try {
      const response = await axios.post("https://api.openai.com/v1/images/generations", {
        prompt,
        n: 1,
        size: "1024x1024"
      }, {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
        }
      });
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
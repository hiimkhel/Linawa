const express = require("express");
const router = express.Router();

router.post("/summarize", async (req, res) => {
    try {
      const response = await axios.post(
        "https://hf.space/gradio/Ydrhan/Linawa-ai-summarizer/api/predict/",
        {
          data: [req.body.text], // Pass text from the frontend
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      res.json(response.data);
    } catch (error) {
      console.error("Error from Hugging Face API:", error);
      res.status(500).send("Error summarizing text");
    }
  });

module.exports = router;
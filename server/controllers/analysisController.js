// server/controllers/analysisController.js
import fs                     from "fs";
import pdfParse from "pdf-parse/lib/pdf-parse.js";

import ModelClient, { isUnexpected } from "@azure-rest/ai-inference";
import { AzureKeyCredential }        from "@azure/core-auth";

// read from your .env
const token    = process.env.GITHUB_TOKEN;
const endpoint = "https://models.github.ai/inference";
const MODEL    = "openai/gpt-4.1";

export const runAnalysis = async (req, res) => {
  try {
    // 1) Build your prompt from the form fields:
    const { linkedIn, github, experienceYears, careerField } = req.body;

    // 2) Pull in the uploaded PDF (multer put it at req.files.resume[0].path)
   if (!req.file?.path) {
  return res.status(400).json({ error: "You must upload your resume PDF." });
}
const pdfFile = req.file.path;


    // 3) Read + parse the PDF to plain text
    const buf = fs.readFileSync(pdfFile);
    const { text: fullText = "" } = await pdfParse(buf);

    // 4) Truncate if too long
    const snippet = fullText.length > 3000
      ? fullText.slice(0, 3000) + "\n\n[...truncated]"
      : fullText;

    // 5) Craft your chat prompt
    const prompt = `
You are a career coach.  Use the details below and the resume excerpt to give personalized guidance.

LinkedIn:       ${linkedIn}
GitHub:         ${github}
Experience:     ${experienceYears} years in ${careerField}

Resume excerpt:
${snippet}

Please suggest:
1) Top 3 roles for this background.
2) Key skill gaps & how to fill them.
3) Recommended resources or certifications.
4) Mini-projects or portfolio ideas.
`;

    // 6) Call the GitHub-Models chat/completions endpoint
    const client   = ModelClient(endpoint, new AzureKeyCredential(token));
    const response = await client
      .path("/chat/completions")
      .post({
        body: {
          model: MODEL,
          messages: [
            { role: "system", content: "You are a helpful career advisor." },
            { role: "user",   content: prompt }
          ],
          temperature: 0.7
        }
      });

    if (isUnexpected(response)) {
      console.error("AI error:", response.body.error);
      return res.status(500).json({ error: response.body.error });
    }

    const advice = response.body.choices[0].message.content;
    return res.json({ advice });

  } catch (err) {
    console.error("analysisController error:", err);
    return res.status(500).json({ error: "Analysis failed" });
  }
};

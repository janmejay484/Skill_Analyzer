import axios from 'axios';

export async function generateAdvice(prompt) {
  // use a public model to verify functionality
  const MODEL = 'openai-community/gpt2';

  const res = await axios.post(
    `https://api-inference.huggingface.co/models/${MODEL}`,
    { inputs: prompt, options: { wait_for_model: true }, parameters: { max_new_tokens: 200 } },
    { headers: { Authorization: `Bearer ${process.env.HF_API_TOKEN}` } }
  );

  if (Array.isArray(res.data)) {
    return res.data[0].generated_text;
  }

  // some inference APIs return { generated_text: ... }
  return res.data.generated_text || 'No response';
}

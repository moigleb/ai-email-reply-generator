import { OpenAI } from 'openai';
import { Request, Response } from 'express';

export default async function handler(req: Request, res: Response) {
  try {
    console.log('⏳ process.env.OPENAI_API_KEY:', process.env.OPENAI_API_KEY);

    if (req.method === 'POST') {
      const { prompt } = req.body;

      if (!prompt) {
        return res.status(400).json({ error: 'Prompt is required' });
      }

      console.log('Received prompt:', prompt);

      const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
      });

      const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
      });

      console.log('OpenAI response:', completion);

      res.status(200).json({ text: completion.choices[0]?.message?.content });
    } else {
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  } catch (error) {
    console.error('💥 Server error:', error);
    res.status(500).json({ error: 'A server error has occurred' });
  }
}

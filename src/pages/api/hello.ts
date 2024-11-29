// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const getAiResponse = async (input: string) => {
  const response = await openai.embeddings.create({
    model: 'text-embedding-ada-002',
    input,
  });
  return response.data[0].embedding;
};

type Data = {
  message: number[] | string;
};

type Error = {
  error: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data | Error>) {
  try {
    if (req.method !== 'POST') {
      res.status(405).json({ error: 'Method not allowed' });
    } else {
      const input = req.body.input;
      console.log('req', req.body, req.method, req.query, req.url);

      if (!input) {
        res.status(400).send({ error: 'Input is required' });
      } else if (input.length > 20) {
        res.status(500).send({ error: 'No response' });
      } else {
        const message = await getAiResponse(input);
        res.status(200).send({ message });
      }
    }
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' });
  }
}

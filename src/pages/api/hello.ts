// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const getAiResponse = async (input: string) => {
  const response = await openai.createEmbedding({
    model: 'text-embedding-ada-002',
    input,
  });
  return response.data.data[0].embedding;
};

type Data = {
  message: number[] | string;
};

type Error = {
  error: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data | Error>) {
  try {
    const input = 'The food was delicious and the waiter...';
    console.log('req', req.body, req.method, req.query, req.url);

    if (input.length > 20) {
      res.status(500).send({ error: 'No response' });
    } else {
      const message = await getAiResponse(input);
      res.status(200).send({ message });
    }
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' });
  }
}

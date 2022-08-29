// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'
import { promises as fs } from 'fs'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
    //Find the absolute path of the json directory
    const { offset = 0 as Number, limit = 50 as Number } = req.query;
    const jsonDirectory = path.join(process.cwd(), '/jsons');
    //Read the json data file data.json
    const fileContents = await fs.readFile(jsonDirectory + '/hotels.json', 'utf8');
    //Return the content of the data file in json format
    const data = JSON.parse(fileContents).slice(offset, limit);
    res.status(200).json(data);
  }
}

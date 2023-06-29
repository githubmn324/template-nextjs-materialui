import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms))

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    await delay(1500)
    const kittens = JSON.parse(fs.readFileSync('kittens.json', 'utf8'))
    // kittens.kittens.sort((a: any, b: any) => {
    //   return new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf()
    // })
    res.status(200).json(kittens)
  }
}

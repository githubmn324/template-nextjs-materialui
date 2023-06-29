import type { NextApiRequest, NextApiResponse } from 'next'

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms))

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    console.log('members api called')
    await delay(1500)
    const res = await fetch('https://jsonplaceholder.typicode.com/users', {
      cache: 'no-store',
    })
    console.log({ res: res })
    res.status(200).json(res)
  }
}

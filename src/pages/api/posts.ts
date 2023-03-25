import { NextApiRequest, NextApiResponse } from 'next'
import { PostId } from '../../../interfaces/index'

export default async function getPostId(
  _: NextApiRequest,
  res: NextApiResponse<PostId>
) {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/')
  const data = await response.json()
  res.status(200).json(data)
}

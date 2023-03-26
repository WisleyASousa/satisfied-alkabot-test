import { NextApiRequest, NextApiResponse } from 'next'
import { PostId } from '../../../interfaces/index'
import posts from '../../../dataPosts.json'

export default function getUsers(
  req: NextApiRequest,
  res: NextApiResponse<PostId[]>
) {
  res.status(200).json(posts)
}

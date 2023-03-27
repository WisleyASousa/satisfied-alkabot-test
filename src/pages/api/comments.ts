import { NextApiRequest, NextApiResponse } from 'next'
import { Comments } from '../../../interfaces/index'
import comments from '../../../dataComments.json'

export default function getComments(
  req: NextApiRequest,
  res: NextApiResponse<Comments[]>
) {
  res.status(200).json(comments)
}

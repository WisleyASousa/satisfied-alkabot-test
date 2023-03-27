import { NextApiRequest, NextApiResponse } from 'next'
import { PostId } from '../../../../interfaces/index'
import posts from '../../../../dataPosts.json'

export default function getPosts(
  req: NextApiRequest,
  res: NextApiResponse<PostId | {message: string}>

) {
  const post = posts.find((post) => post.id === Number(req.query.id))
  if (!post) {
    return res.status(404).json({ message: `Post with id ${req.query.id} not found` })
  }

  res.status(200).json(post)
}


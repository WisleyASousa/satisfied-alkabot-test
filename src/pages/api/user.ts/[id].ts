import { NextApiRequest, NextApiResponse } from 'next'
import { User } from '../../../../interfaces/index'
import users from '../../../../dataUsers.json'

export default function getUsers(
  req: NextApiRequest,
  res: NextApiResponse<User | {message: string}>

) {
  const user = users.find((user) => user.id === Number(req.query.id))
  if (!user) {
    return res.status(404).json({ message: `User with id ${req.query.id} not found` })
  }

  res.status(200).json(user)
}
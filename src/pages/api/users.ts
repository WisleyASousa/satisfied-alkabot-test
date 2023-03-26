import { NextApiRequest, NextApiResponse } from 'next'
import { User } from '../../../interfaces/index'
import users from '../../../dataUsers.json'

export default function getUsers(
  req: NextApiRequest,
  res: NextApiResponse<User[]>
) {
  res.status(200).json(users)
}

import { NextApiRequest, NextApiResponse } from 'next'
import { User } from '../../../interfaces/index'

export default async function getUser(
  _: NextApiRequest,
  res: NextApiResponse<User>
) {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  res.status(200).json(data)
}

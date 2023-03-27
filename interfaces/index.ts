export type User = {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
  }
  phone: string
}

export type PostId = {
  userId: number
  id: number
  title: string
  body: string
}

export type Comments = {
  postId: number
  name: string
  email: string
  body: string
}

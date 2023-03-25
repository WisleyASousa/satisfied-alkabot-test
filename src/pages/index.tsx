import type { NextPage } from 'next'
import MainLayout from '../layout/MainLayout'
import styles from '../styles/Home.module.css'
import { Separator } from '../components/Separator'
import { FormEvent, KeyboardEvent, useEffect, useState } from 'react'
import { Post } from '../components/Post'
import Image from 'next/image'
import perfil from '../../public/img/perfil.jpeg'
import Navbar from '../components/Navbar'
import type { User, PostId } from '../../interfaces/index'
import Loading from '../components/Loading'

const Home: NextPage = () => {
  const [users, setUsers] = useState<User[]>([])
  const [postIds, setPostIds] = useState<PostId[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      try {
        const responsePosts = await fetch('http://localhost:3000/api/posts')
        if (!responsePosts.ok) {
          throw new Error('Erro ao obter os posts')
        }
        const dataPosts: PostId[] = await responsePosts.json()
        setPostIds(dataPosts.map((post) => post))

        const responseUsers = await fetch('http://localhost:3000/api/users')
        if (!responseUsers.ok) {
          throw new Error('Erro ao obter os users')
        }
        const dataUsers: User[] = await responseUsers.json()
        setUsers(dataUsers.map((user) => user))
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
    setLoading(false)
  }, [])

  const [newPost, setNewPost] = useState('')
  const [posts, setPosts] = useState([
    'Meu primeiro post',
    'Meu segundo post',
    'Meu terceiro postMeu primeiro postMeuMeu primeiro postMeuMeu primeiro postMeuMeu primeiro postMeuMeu primeiro postMeu Meu primeiro postMeuMeu primeiro postMeuMeu primeiro postMeuMeu primeiro postMeuMeu ',
  ])

  function handleNewPost(event: FormEvent) {
    event.preventDefault()

    setPosts([newPost, ...posts])
    setNewPost('')
  }
  function handleHotKeySubmit(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setPosts([newPost, ...posts])
      setNewPost('')
    }
  }

  return (
    <MainLayout title="Satisfied">
      <div className="col">
        <Navbar title={'Home'} />
      </div>
      <form
        onSubmit={handleNewPost}
        className={`${styles.newPostForm} border-bottom`}
      >
        <label htmlFor="post" className="">
          <div className="w-auto">
            <Image
              src={perfil}
              className="rounded-circle"
              width={40}
              height={40}
              alt="Wisley A. Sousa"
            />
          </div>
          <textarea
            id="post"
            placeholder="What's happening?"
            value={newPost}
            onKeyDown={handleHotKeySubmit}
            onChange={(event) => {
              setNewPost(event.target.value)
            }}
          />
        </label>

        <button type="submit" className="shadow-sm">
          Post
        </button>
      </form>
      <Separator />
      <div>
        {loading ? (
          <Loading />
        ) : (
          users.map((user, i) => (
            <Post
              key={user.id}
              content={postIds[i].title}
              user={user.name}
              userName={user.username}
            />
          ))
        )}
      </div>
    </MainLayout>
  )
}

export default Home

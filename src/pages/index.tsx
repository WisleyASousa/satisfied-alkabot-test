import type { NextPage } from 'next'
import MainLayout from '../layout/MainLayout'
import styles from '../styles/Home.module.css'
import { Separator } from '../components/Separator'
import { FormEvent, KeyboardEvent, useState } from 'react'
import { Post } from '../components/Post'
import Image from 'next/image'
import perfil from '../../public/img/perfil.jpeg'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
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
      <div className="col ">
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

        <button type="submit">Post</button>
      </form>
      <Separator />
      <div>
        {posts.map((post) => (
          <Post key={post} content={post} />
        ))}
      </div>
    </MainLayout>
  )
}

export default Home

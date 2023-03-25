import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import MainLayout from '../layout/MainLayout'
import { Separator } from '../components/Separator'
import { FormEvent, KeyboardEvent, useState } from 'react'
import perfil from '../../public/img/perfil.jpeg'
import Image from 'next/image'
import { Post } from '../components/Post'

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
      <form onSubmit={handleNewPost} className={`${styles.newPostForm}`}>
        <label htmlFor="post" className="">
          <div>
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
      <>
        {posts.map((post, i) => (
          <Post key={i} content={post} />
        ))}
      </>
    </MainLayout>
  )
}

export default Home

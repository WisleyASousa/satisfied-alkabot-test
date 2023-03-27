import { useState, FormEvent, KeyboardEvent, useEffect } from 'react'
import type { NextPage } from 'next'
import MainLayout from '../../layout/MainLayout'
import styles from '../../styles/Status.module.css'
import { Separator } from '../../components/Separator'
import { Post } from '../../components/Post'
import Image from 'next/image'
import perfil from '../../../public/img/perfil.jpeg'
import Navbar from '../../components/Navbar'
import { useRouter } from 'next/router'
import { PostId, User, Comments } from '../../../interfaces'
import UserRender from '../../components/UserRender'

const Status: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  const [post, setPost] = useState<PostId | null>(null)
  const [user, setUser] = useState<User | null>(null)
  const [comments, setComments] = useState<Comments[] | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responsePost = await fetch(`/api/post/${id}`)
        if (!responsePost.ok) {
          throw new Error('Erro ao obter o post')
        }
        const dataPost: PostId = await responsePost.json()
        setPost(dataPost)

        const responseUser = await fetch(`/api/users`)
        if (!responseUser.ok) {
          throw new Error('Erro ao obter o user')
        }
        const dataUser: User = await responseUser.json()
        setUser(dataUser)
        
        const responseComments = await fetch(`/api/posts/${id}/comments`)
        if (!responseComments.ok) {
          throw new Error('Erro ao obter os comentários')
        }
        const dataComments: Comments[] = await responseComments.json()
        setComments(dataComments)

      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [id])

  

  const [newAnswers, setNewAnswers] = useState('')
  const [answers, setAnswers] = useState([
    'Concordo...',
    'Olha, faz sentido!',
    'Parabéns pelo progressoParabéns pelo pro!',
  ])

  function handleNewAnswers(event: FormEvent) {
    event.preventDefault()

    setAnswers([newAnswers, ...answers, ...comments.map(comment => comment.body)])
    setNewAnswers('')
  }
  function handleHotKeySubmit(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswers, ...answers])
      setNewAnswers('')
    }
  }
  console.log(comments)

  return (
    <MainLayout title="Satisfied">
      <div className="col ms-sm-4">
        <Navbar title={'Post'} />
      </div>
      <div className="ms-sm-4 my-2">
        <div className="">
          {post && user && (
            <>
              <UserRender user={user.name} userName={user.username} />
              <Post title={post.title} content={post.body} />
            </>
          )}
        </div>
      </div>

      <Separator />

      <form
        onSubmit={handleNewAnswers}
        className={`${styles.answerPostForm} my-3 ms-sm-4 rounded-4 border-bottom shadow-sm`}
      >
        <label htmlFor="post">
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
            className={`${styles.textareaAnswers}`}
            placeholder="Post your answer"
            value={newAnswers}
            onKeyDown={handleHotKeySubmit}
            onChange={(event) => {
              setNewAnswers(event.target.value)
            }}
          />
        </label>
        <button type="submit" className={`${styles.btnAnswers}`}>
          <span className="text-white">Answer</span>
        </button>
      </form>

      <div className="ms-sm-4 d-flex flex-column gap-2">
        {answers.map((answer, i) => (
          <Post key={i} content={answer} />
        ))}
      </div>
    </MainLayout>
  )
}

export default Status

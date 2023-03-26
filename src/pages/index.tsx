import type { NextPage } from 'next'
import MainLayout from '../layout/MainLayout'
import styles from '../styles/Home.module.css'
import { Separator } from '../components/Separator'
import { useEffect, useState } from 'react'
import { Post } from '../components/Post'

import Navbar from '../components/Navbar'
import type { User, PostId } from '../../interfaces/index'
import Loading from '../components/Loading'

const Home: NextPage = () => {
  const [users, setUsers] = useState<User[]>([])
  const [postIds, setPostIds] = useState<PostId[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null)

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

  const filteredPostIds = postIds.filter((postId) => {
    if (selectedUserId) {
      return postId.userId === selectedUserId
    } else {
      return true
    }
  })

  return (
    <MainLayout title="Satisfied">
      <div className="col">
        <Navbar title={'Home'} />
      </div>
      <Separator />
      <div>
        {loading ? (
          <Loading />
        ) : (
          <>
            <div>
              <select
                className={`${styles.btnSelect}  form-select shadow`}
                value={selectedUserId || ''}
                onChange={(e) =>
                  setSelectedUserId(Number(e.target.value) || null)
                }
              >
                <option className={`${styles.btnOption} `} value="">
                  Todos os Usuários
                </option>
                {users.map((user) => (
                  <option key={user.id} value={user.id}>
                    {user.name}
                  </option>
                ))}
              </select>
              <Separator />
            </div>
            {filteredPostIds.length > 0 ? (
              filteredPostIds.map((postId) => {
                const user = users.find((user) => user.id === postId.userId)
                if (user) {
                  return (
                    <Post
                      key={postId.id}
                      title={postId.title}
                      content={postId.body}
                      user={user.name}
                      userName={user.username}
                    />
                  )
                } else {
                  return null
                }
              })
            ) : (
              <p>Nenhuma postagem encontrada para o usuário selecionado.</p>
            )}
          </>
        )}
      </div>
    </MainLayout>
  )
}

export default Home

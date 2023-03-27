import type { NextPage } from 'next'
import MainLayout from '../layout/MainLayout'
import styles from '../styles/Home.module.css'
import { Separator } from '../components/Separator'
import { useEffect, useState } from 'react'
import { Post } from '../components/Post'
import type { User, PostId } from '../../interfaces/index'
import Navbar from '../components/Navbar'
import Loading from '../components/Loading'
import UserRender from '../components/UserRender'

const Home: NextPage = () => {
  const [users, setUsers] = useState<User[]>([])
  const [postIds, setPostIds] = useState<PostId[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null)

  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      try {
        const responsePosts = await fetch('/api/posts')
        if (!responsePosts.ok) {
          throw new Error('Erro ao obter os posts')
        }
        const dataPosts: PostId[] = await responsePosts.json()
        setPostIds(dataPosts.map((post) => post))

        const responseUsers = await fetch('/api/users')
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
      <div className="col ms-sm-4">
        <Navbar title={'Home'} />
      </div>
      <Separator />
      <div className="ms-sm-4">
        {loading ? (
          <Loading />
        ) : (
          <>
            <div className="d-flex flex-column justify-content-between pb-3">
              <span className="fs-5 fw-bolder py-1">Selecione Usuário: </span>
              <div className="">
                <select
                  className={`${styles.btnSelect} fw-semibold form-select shadow-sm`}
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
              </div>
              {/* <Separator /> */}
            </div>
            {filteredPostIds.length > 0 ? (
              filteredPostIds.map((postId) => {
                const user = users.find((user) => user.id === postId.userId)
                if (user) {
                  return (
                    <div key={postId.id}>
                      <UserRender user={user.name} userName={user.username} />
                      <Post
                        title={postId.title}
                        content={postId.body}
                        id={postId.id}
                      />
                    </div>
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

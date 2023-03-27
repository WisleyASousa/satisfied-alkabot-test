import type { NextPage } from 'next'
import MainLayout from '../layout/MainLayout'
import Navbar from '../components/Navbar'
import styles from '../styles/Profile.module.css'
import { useEffect, useState } from 'react'
import { User } from '../../interfaces'
import { useSpring, animated } from 'react-spring'



const Profile: NextPage = () => {

  const [users, setUsers] = useState<User[]>([])

  const propsAnim = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(50px)' },
    delay: 400,
  })

  useEffect(() => {
    const fetchData = async () => {
      try {

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
  }, [])
  
  return (
    <MainLayout title="Satisfied">
      <div className="col ms-sm-4 mb-4 shadow">
        <Navbar title={'Profiles'} />
      </div>
      <>
        <div className='d-flex flex-wrap justify-content-center gap-5 pb-5'>
          {
            users.map((user) => {
              return (
                <animated.div key={user.id} style={propsAnim}>
                  <div className="ms-sm-4 d-flex">
                    <div className={`${styles.card} card shadow d-flex`} >
                      <div className="card-body">
                        <h4 className='text-nowrap'>
                          {user.name}
                        </h4>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">{user.email}</li>
                          <li className="list-group-item">{user.phone}</li>
                          <li className="list-group-item">{user.address.street}</li>
                          <li className="list-group-item">{user.address.suite}</li>
                          <li className="list-group-item">{user.address.city}</li>
                          <li className="list-group-item">{user.address.zipcode}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </animated.div>
              )
            })
          }
        </div>
      </>
    </MainLayout>
  )
}

export default Profile

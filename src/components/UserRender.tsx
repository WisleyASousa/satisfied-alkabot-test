import Image from 'next/image'
import perfil from '../../public/img/perfil.jpeg'
import styles from '../styles/Post.module.css'
import Link from 'next/link'

interface UserProps {
  user?: string
  userName?: string
  id?: number
}
export default function UserRender(props: UserProps) {
  return (
    <Link href="/profile">
      <div
        className={`${styles.BGContainerUser} rounded-4 shadow-sm mt-4 d-flex gap-2  align-items-center p-2`}
      >
        <div className="d-flex">
          <Image
            src={perfil}
            className="rounded-circle "
            width={40}
            height={40}
            alt="Wisley A. Sousa"
          />
        </div>
        <div className={`${styles.postContent} `}>
          <div className={`${styles.postContentHeader} `}>
            <strong>{props.user}</strong>
            <span>{`@${props.userName}`}</span>
            
          </div>
          
        </div>
      </div>
    </Link>
  )
}

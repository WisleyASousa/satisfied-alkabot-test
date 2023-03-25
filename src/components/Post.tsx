import perfil from '../../public/img/perfil.jpeg'
import Image from 'next/image'
import styles from '../styles/Post.module.css'
import Link from 'next/link'

interface PostProps {
  content: string
}

export function Post(props: PostProps): JSX.Element {
  return (
    <Link href="/status" className={`${styles.post} text-black`}>
      <div>
        <div className="d-flex gap-2">
          <div className="w-auto">
            <Image
              src={perfil}
              className="rounded-circle"
              width={40}
              height={40}
              alt="Wisley A. Sousa"
            />
          </div>
          <div className={`${styles.postContent}`}>
            <div className={`${styles.postContentHeader}`}>
              <strong>Wisley A. Sousa</strong>
              <span>@wisleyasousa</span>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column align-items-start p-2 gap-3">
          <div className={`commentBox text-wrap text-start`}>
            <span>{props.content}</span>
          </div>

          <div className={`${styles.postContentFooter}`}>
            <button type="button">
              <i className="bi bi-chat-fill"></i>
              25
            </button>
            <button type="button">
              <i className="bi bi-shuffle"></i>
              25
            </button>
            <button type="button">
              <i className="bi bi-balloon-heart-fill"></i>
              25
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}

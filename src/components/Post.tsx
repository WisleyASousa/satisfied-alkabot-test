import perfil from '../../public/img/perfil.jpeg'
import Image from 'next/image'
import styles from '../styles/Post.module.css'
import Link from 'next/link'

interface PostProps {
  content?: string
  title?: string
  user?: string
  userName?: string
}

export function Post(props: PostProps): JSX.Element {
  return (
    <Link href="/status" className={`${styles.post} text-black `}>
      <div className={`${styles.containerPost} shadow-sm border-bottom `}>
        <div className="d-flex gap-2  align-items-center p-2">
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
        <div className="d-flex flex-column align-items-start p-2 gap-3">
          <div
            className={`text-wrap text-break text-start ps-2 d-flex flex-column`}
          >
            <strong className="text-uppercase">{props.title}</strong>
            <br />
            <span className="">{props.content}</span>
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
              <i className="bi bi-balloon-heart-fill "></i>
              25
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}

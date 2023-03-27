import styles from '../styles/Post.module.css'
import Link from 'next/link'
import { useSpring, animated } from 'react-spring'

interface PostProps {
  content?: string
  title?: string
  id?: number
}

export function Post(props: PostProps): JSX.Element {
  const { id } = props

  const propsAnim = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(50px)' },
    delay: 200,
  })

  return (
    <animated.div style={propsAnim}>
      <Link href={`/status/${id}`} className={`${styles.post} text-black `}>
        <div className={`${styles.containerPost}  shadow-sm rounded-4`}>
          <div className={`d-flex flex-column align-items-start p-2 gap-3 `}>
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
    </animated.div>
  )
}

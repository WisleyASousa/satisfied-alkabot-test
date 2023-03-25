import { useState, FormEvent, KeyboardEvent } from 'react'
import type { NextPage } from 'next'
import MainLayout from '../layout/MainLayout'
import styles from '../styles/Status.module.css'
import { Separator } from '../components/Separator'
import { Post } from '../components/Post'
import Image from 'next/image'
import perfil from '../../public/img/perfil.jpeg'
import Navbar from '../components/Navbar'

const Status: NextPage = () => {
  const [newAnswers, setNewAnswers] = useState('')
  const [answers, setAnswers] = useState([
    'Concordo...',
    'Olha, faz sentido!',
    'Parabéns pelo progressoParabéns pelo progressoParabéns pelo progressoParabéns pelo progressoParabéns pelo progressoParabéns pelo progressoParabéns pelo progressoParabéns pelo progressoParabéns pelo progressoParabéns pelo progressoParabéns pelo progressoParabéns pelo progressoParabéns pelo progressoParabéns pelo progressoParabéns pelo progressoParabéns pelo progressoParabéns pelo progressoParabéns pelo progressoParabéns pelo progressoParabéns pelo progressoParabéns pelo progressoParabéns pelo progressoParabéns pelo progressoParabéns pelo progressoParabéns pelo progresso!',
  ])

  function handleNewAnswers(event: FormEvent) {
    event.preventDefault()

    setAnswers([newAnswers, ...answers])
    setNewAnswers('')
  }
  function handleHotKeySubmit(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswers, ...answers])
      setNewAnswers('')
    }
  }

  return (
    <MainLayout title="Satisfied">
      <div className="col">
        <Navbar title={'Post'} />
      </div>
      <Post
        content={
          'Parabéns pelo progressoParabéns pelo progressoParabéns pelo progressoParabéns pelo progresso'
        }
      />
      <Separator />
      <form
        onSubmit={handleNewAnswers}
        className={`${styles.answerPostForm} border-bottom`}
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

      <div className="border-bottom">
        {answers.map((answer, i) => {
          return <Post key={i} content={answer} />
        })}
      </div>
    </MainLayout>
  )
}

export default Status

// import { Separator } from "../components/Separator"
// import { Post } from "../components/Post";
// import Navbar from "../components/Navbar";
// import Image from "next/image";
// import perfil from '../../public/img/perfil.jpeg'
// import styles from '../styles/Status.module.css'

// export default function Status() {

//   return (
//     <main className={`${styles.status}`}>
//       <Navbar title='Post' />

//       <Post content="" />

//       <Separator />
//       <form onSubmit={handleNewAnswers} className={`${styles.answerPostForm}`}>
//         <label htmlFor="post">
//           <div className="w-auto">
//             <Image
//               src={perfil}
//               className="rounded-circle"
//               width={40}
//               height={40}
//               alt="Wisley A. Sousa"
//             />
//           </div>
//           <textarea
//             id="post"
//             placeholder="Post your answer"
//             value={newAnswers}
//             onKeyDown={handleHotKeySubmit}
//             onChange={(event) => {
//               setNewAnswers(event.target.value);
//             }}
//             />
//         </label>
//         <button type="submit">

//           <span>Answer</span>
//         </button>
//       </form>

//       <div className="">
//         {answers.map((answer, i) => {
//           return <Post key={i} content={answer} />
//         })}
//       </div>

//     </main>
//   )
// }

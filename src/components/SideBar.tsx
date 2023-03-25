import 'bootstrap/dist/css/bootstrap.min.css'
import Image from 'next/image'
import logo from '../../public/img/17431929_job204-wan-19.jpg'
import Link from 'next/link'
import styles from '../styles/Sidebar.module.css'

export default function Sidebar() {
  return (
    <div>
      <nav className="d-flex flex-column align-content-center justify-content-start gap-3 pt-2 border-end vh-100 ">
        <div>
          <Image
            src={logo}
            alt="logo"
            width={44}
            height={44}
            className=" rounded-circle "
          />
        </div>
        <ul className="list-group list-group-flush d-flex">
          <Link href="./" className="list-group-item ">
            <i className="bi bi-house-door-fill fs-3 border-bottom py-3"></i>
          </Link>
          <Link href="#" className="list-group-item">
            <i className="bi bi-hash fs-3 border-bottom py-3"></i>
          </Link>
          <Link href="#" className="list-group-item">
            <i className="bi bi-bell-fill fs-3 border-bottom py-3"></i>
          </Link>
          <Link href="#" className="list-group-item">
            <i className="bi bi-envelope-fill fs-3 border-bottom py-3"></i>
          </Link>
          <Link href="#" className="list-group-item">
            <i className="bi bi-bookmark-fill fs-3 border-bottom py-3"></i>
          </Link>
          <Link href="#" className="list-group-item">
            <i className="bi bi-person-fill fs-3 border-bottom py-3"></i>
          </Link>
        </ul>
        <button className={`${styles.newPost} mt-2`} type="button">
          <i className={`${styles.svgBtn} text-white bi bi-pen-fill`}></i>
          <span className={`${styles.spanBtn} text-white`}>Post</span>
        </button>
      </nav>
    </div>
  )
}

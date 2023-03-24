import 'bootstrap/dist/css/bootstrap.min.css'
import Image from 'next/image'
import logo from '../../public/img/17431929_job204-wan-19.jpg'

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
        <ul className="list-group list-group-flush d-flex gap-3">
          <a href="#" className="list-group-item">
            <i className="bi bi-house-door-fill fs-3"></i>
          </a>
          <a href="#" className="list-group-item">
            <i className="bi bi-hash fs-3"></i>
          </a>
          <a href="#" className="list-group-item">
            <i className="bi bi-bell-fill fs-3"></i>
          </a>
          <a href="#" className="list-group-item">
            <i className="bi bi-envelope-fill fs-3"></i>
          </a>
          <a href="#" className="list-group-item">
            <i className="bi bi-bookmark-fill fs-3"></i>
          </a>
          <a href="#" className="list-group-item">
            <i className="bi bi-person-fill fs-3"></i>
          </a>
        </ul>
      </nav>
    </div>
  )
}

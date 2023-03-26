interface NavbarProps {
  title: string
}

export default function Navbar(props: NavbarProps) {
  return (
    <div className="shadow-sm">
      <nav className="navbar bg-body-tertiary border-bottom ">
        <div className="container-fluid d-flex align-content-center">
          <a className="navbar-brand fs-2 fw-bold" href="#">
            {props.title}
          </a>
          <i className="bi bi-stars fs-2"></i>
        </div>
      </nav>
    </div>
  )
}

export default function Loading() {
  return (
    <div className="container text-center ">
      <div className="row align-items-center vh-100 justify-content-center">
        <div className="col-auto ">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  )
}

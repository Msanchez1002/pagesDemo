
export default function Footer() {
  return (
    <footer className="text-center text-lg-start" style={{backgroundColor: "#db6930", opacity:".8"}}>
    <div className="container d-flex justify-content-center py-5">
      <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={{backgroundColor: "#54456b"}}>
        <i className="fab fa-facebook-f"></i>
      </button>
      <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={{backgroundColor: "#54456b"}}>
        <i className="fab fa-youtube"></i>
      </button>
      <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={{backgroundColor: "#54456b"}}>
        <i className="fab fa-instagram"></i>
      </button>
      <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={{backgroundColor: "#54456b"}}>
        <i className="fab fa-twitter"></i>
      </button>
    </div>

    {/* <!-- Copyright --> */}
    <div className="text-center text-white p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
      © 2020 Copyright:
      <a className="text-white" href="https://www.xm.com.co/">Portal XM.com</a>
    </div>
    {/* <!-- Copyright --> */}
  </footer>
  )
}
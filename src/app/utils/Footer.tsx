export default function Footer(){
    return(
    <footer className="text-center text-lg-start text-white" style={{backgroundColor: "#1c2331"}}>

        <section className="d-flex justify-content-between p-4" style={{backgroundColor:'rgb(6, 14, 35)'}}>

            <div className="me-5">
                <h3>Pour me contacter</h3>
            </div>
        </section>

        <section className="">
            <div className="container text-center text-md-start mt-5">

                <div className="row mt-3">

                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                        <h6 className="text-uppercase fw-bold">Xavier Moyon</h6>
                        <hr className="mb-4 mt-0 d-inline-block mx-auto"
                            style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}} />
                        <p>
                            Je vous remercie pour l'attention que vous avez portée a l'égard de mon CV</p>
                    </div>

                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                        <h6 className="text-uppercase fw-bold">Contact</h6>
                        <hr className="mb-4 mt-0 d-inline-block mx-auto"
                            style={{width: '60px', backgroundColor: "#7c4dff", height: "2px"}}  />

                        <p><i className="fas fa-envelope mr-3"></i> moyonxavier@gmail.com</p>
                        <p><i className="fas fa-phone mr-3"></i> 06 95 24 47 24</p>
                        <p><i className="fas fa-home mr-3"></i> Lille 59800</p>
                    </div>

                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <h6 className="text-uppercase fw-bold">Mes réseaux</h6>
                        <hr className="mb-4 mt-0 d-inline-block mx-auto"
                            style={{width: '60px', backgroundColor: "#7c4dff", height: "2px"}} />
                        <p><i className="fas fa-home mr-3"></i><a
                                href="https://www.linkedin.com/in/xavier-moyon-153360254/">Linkedin</a></p>
                        <p><i className="fas fa-phone mr-3"><a href="https://github.com/Moyon-Xavier">GitHub</a></i></p>
                    </div>


     
                </div>
  
            </div>
        </section>

        <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>

            <a className="text-white" href="https://moyon-xavier.github.io/siteWeb/">moyon-xavier.github.io/siteWeb</a>
        </div>
        
    </footer>
);
}
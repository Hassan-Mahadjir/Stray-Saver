import React from "react";

const CommentSection = () => {
  return (
      <section style={{backgroundColor: 'rgb(118, 165, 14)'}}>
          <h4 style={{textAlign: 'center', padding: '30px'}}>What Our Happy Users
              Say</h4>
          <div className="container my-2 py-1">
              <div className="row d-flex justify-content-center mb-5">
                  <div className="col-md-12 col-lg-10">
                      <div className="card text-dark">
                          <div className="card-body p-4">

                              <div className="d-flex flex-start">
                                  <img className="rounded-circle shadow-1-strong me-3"
                                       src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(23).webp"
                                       alt="avatar" width="60"
                                       height="60"/>
                                  <div>
                                      <h6 className="fw-bold mb-1">Maggie Marsh</h6>
                                      <div className="d-flex align-items-center mb-3">
                                          <p className="mb-0">
                                              March 07, 2021
                                              <span
                                                  className="badge bg-primary">Pending</span>
                                          </p>
                                          <a href="#" className="link-muted"><i
                                              className="fas fa-pencil-alt ms-2"></i></a>
                                          <a href="#" className="link-muted"><i
                                              className="fas fa-redo-alt ms-2"></i></a>
                                          <a href="#" className="link-muted"><i
                                              className="fas fa-heart ms-2"></i></a>
                                      </div>
                                      <p className="mb-0">
                                          Lorem Ipsum is simply dummy text of the
                                          printing and typesetting
                                          industry. Lorem Ipsum has been the
                                          industry's standard dummy text ever
                                          since the 1500s, when an unknown printer
                                          took a galley of type and
                                          scrambled it.
                                      </p>
                                  </div>
                              </div>
                          </div>

                          <hr className="my-0"/>

                          <div className="card-body p-4">
                              <div className="d-flex flex-start">
                                  <img className="rounded-circle shadow-1-strong me-3"
                                       src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(26).webp"
                                       alt="avatar" width="60"
                                       height="60"/>
                                  <div>
                                      <h6 className="fw-bold mb-1">Lara Stewart</h6>
                                      <div className="d-flex align-items-center mb-3">
                                          <p className="mb-0">
                                              March 15, 2021
                                              <span
                                                  className="badge bg-success">Approved</span>
                                          </p>
                                          <a href="#" className="link-muted"><i
                                              className="fas fa-pencil-alt ms-2"></i></a>
                                          <a href="#" className="text-success"><i
                                              className="fas fa-redo-alt ms-2"></i></a>
                                          <a href="#" className="link-danger"><i
                                              className="fas fa-heart ms-2"></i></a>
                                      </div>
                                      <p className="mb-0">
                                          Contrary to popular belief, Lorem Ipsum is
                                          not simply random text. It
                                          has roots in a piece of classical Latin
                                          literature from 45 BC, making it
                                          over 2000 years old. Richard McClintock, a
                                          Latin professor at
                                          Hampden-Sydney College in Virginia, looked
                                          up one of the more obscure
                                          Latin words, consectetur, from a Lorem Ipsum
                                          passage, and going through
                                          the cites.
                                      </p>
                                  </div>
                              </div>
                          </div>

                          <hr className="my-0" style={{height: '1px'}}/>

                          <div className="card-body p-4">
                              <div className="d-flex flex-start">
                                  <img className="rounded-circle shadow-1-strong me-3"
                                       src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(33).webp"
                                       alt="avatar" width="60"
                                       height="60"/>
                                  <div>
                                      <h6 className="fw-bold mb-1">Alexa Bennett</h6>
                                      <div className="d-flex align-items-center mb-3">
                                          <p className="mb-0">
                                              March 24, 2021
                                              <span
                                                  className="badge bg-danger">Rejected</span>
                                          </p>
                                          <a href="#" className="link-muted"><i
                                              className="fas fa-pencil-alt ms-2"></i></a>
                                          <a href="#" className="link-muted"><i
                                              className="fas fa-redo-alt ms-2"></i></a>
                                          <a href="#" className="link-muted"><i
                                              className="fas fa-heart ms-2"></i></a>
                                      </div>
                                      <p className="mb-0">
                                          There are many variations of passages of
                                          Lorem Ipsum available, but the
                                          majority have suffered alteration in some
                                          form, by injected humour, or
                                          randomised words which don't look even
                                          slightly believable. If you are
                                          going to use a passage of Lorem Ipsum, you
                                          need to be sure.
                                      </p>
                                  </div>
                              </div>
                          </div>

                          <hr className="my-0"/>

                          <div className="card-body p-4">
                              <div className="d-flex flex-start">
                                  <img className="rounded-circle shadow-1-strong me-3"
                                       src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(24).webp"
                                       alt="avatar" width="60"
                                       height="60"/>
                                  <div>
                                      <h6 className="fw-bold mb-1">Betty Walker</h6>
                                      <div className="d-flex align-items-center mb-3">
                                          <p className="mb-0">
                                              March 30, 2021
                                              <span
                                                  className="badge bg-primary">Pending</span>
                                          </p>
                                          <a href="#" className="link-muted"><i
                                              className="fas fa-pencil-alt ms-2"></i></a>
                                          <a href="#" className="link-muted"><i
                                              className="fas fa-redo-alt ms-2"></i></a>
                                          <a href="#" className="link-muted"><i
                                              className="fas fa-heart ms-2"></i></a>
                                      </div>
                                      <p className="mb-0">
                                          It uses a dictionary of over 200 Latin
                                          words, combined with a handful of
                                          model sentence structures, to generate Lorem
                                          Ipsum which looks
                                          reasonable. The generated Lorem Ipsum is
                                          therefore always free from
                                          repetition, injected humour, or
                                          non-characteristic words etc.
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  );
}

export default CommentSection;
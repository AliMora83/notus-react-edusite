import React from "react";
import { Link } from "react-router-dom";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Landing() {
  return (
    <>
      <Navbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1500731250117-4b0cbb8b276a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1968&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-8/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-3xl">
                    OUR PROGRAM PRICES
                  </h1>
                  <p className="mt-4 text-base text-blueGray-200">
                    The Institute for
                    <strong>
                      {" "}
                      Digital Business Strategy
                      (IDBS)
                    </strong>{" "}
                    is a future driven
                    organisation which facilitates
                    strategically channeled
                    digital approaches to business
                    challenges. It is our belief
                    that digital technology can be
                    used to improve the way
                    business operates and
                    interacts with its economy.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className=" bg-blueGray-200 -mt-24 pb-36">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              {/* Basic Package */}
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="p-4 flex-auto">
                    <div className="text-center p-8 inline-flex items-center justify-center">
                      <img
                        alt="..."
                        src="idbs_badge_03.png"
                        className="align-middle mb-2"
                      />
                    </div>
                    <div className="m-4 justify-center">
                      <p className="text-sm text-blueGray-500">
                        BASIC PACKAGE
                      </p>
                      <h6 className="text-xl font-semibold">
                        Foundation Certification
                      </h6>
                      <hr className="pb-2 mt-2" />
                    </div>
                    <p className="mt-2 mb-4 text-blueGray-500 text-sm">
                      Digital Business Strategy:
                      Leveraging Emerging
                      Technologies (IOT, AI and
                      AR)
                      <br /> Foundation CDTF
                      Certificate
                    </p>
                    <div className="flex justify-center mt-6 mb-12">
                      <div className="text-center">
                        <a
                          href="/Profile"
                          className="bg-blueGray-800 border text-white active:bg-blueGray-600 text-xs font-semibold uppercase px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-5 ease-linear transition-all duration-150 cursor-pointer"
                        >
                          Read more
                        </a>
                      </div>
                      <div>
                        <a
                          href="/Profile"
                          className=" border-black border text-blueGray-800 active:bg-blueGray-600 text-xs font-bold px-6 py-3 hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        >
                          $10 pm
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Standard package */}
              <div className="lg:pt-8 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="p-4 flex-auto">
                    <div className="text-center p-8 inline-flex items-center justify-center">
                      <img
                        alt="..."
                        src="idbs_badge_03.png"
                        className="align-middle mb-2"
                      />
                    </div>
                    <div className="m-4 justify-center">
                      <p className="text-sm text-blueGray-500">
                        STANDARD PACKAGE
                      </p>
                      <h6 className="text-xl font-semibold">
                        Foundation Certification +
                        Executive Certification
                        Courses
                      </h6>
                      <hr className="pb-2 mt-2" />
                    </div>
                    <p className="mt-2 mb-4 text-blueGray-500 text-sm">
                      Digital Business Strategy
                      Course: Beat the competition
                      with the best strategy{" "}
                      <br />
                      Executive (CDTE) course
                    </p>
                    <div className="flex justify-center mt-6 mb-12">
                      <div className="text-center">
                        <a
                          href="/Profile"
                          className="bg-blueGray-800 border text-white active:bg-blueGray-600 text-xs font-semibold uppercase px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-5 ease-linear transition-all duration-150 cursor-pointer"
                        >
                          Read more
                        </a>
                      </div>
                      <div>
                        <a
                          href="/Profile"
                          className=" border-black border text-blueGray-800 active:bg-blueGray-600 text-xs font-bold px-6 py-3 hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        >
                          $40 pm
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Premium Package */}
              <div className="lg:pt-8 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="p-4 flex-auto">
                    <div className="text-center p-8 inline-flex items-center justify-center">
                      <img
                        alt="..."
                        src="idbs_badge_05.png"
                        className="align-middle mb-2"
                      />
                    </div>
                    <div className="m-4 justify-center">
                      <p className="text-sm text-blueGray-500">
                        PREMIUM PACKAGE
                      </p>
                      <h6 className="text-xl font-semibold">
                        Foundation Certification +
                        Executive Certification
                        Courses + Certified
                        Digital Transformation
                      </h6>
                      <hr className="pb-2 mt-2" />
                    </div>
                    <p className="mt-2 mb-4 text-blueGray-500 text-sm">
                      PM Part 1 — Project
                      Challenges, Organizing,
                      <br />
                      Staffing and Learning
                      Executive (CDTE) course
                    </p>
                    <div className="flex justify-center mt-6 mb-12">
                      <div className="text-center">
                        <a
                          href="/Profile"
                          className="bg-blueGray-800 border text-white active:bg-blueGray-600 text-xs font-semibold uppercase px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-5 ease-linear transition-all duration-150 cursor-pointer"
                        >
                          Read more
                        </a>
                      </div>
                      <div>
                        <a
                          href="/Profile"
                          className=" border-black border text-blueGray-800 active:bg-blueGray-600 text-xs font-bold px-6 py-3 hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        >
                          $100 pm
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <img
                  alt="..."
                  src="idbs_logo_full.png"
                  className="align-middle h-20"
                />

                <h3 className="text-xl mb-2 font-semibold leading-normal">
                  Working with us is a pleasure
                </h3>
                <p className="text-md font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                  Join thought leaders, innovation
                  coaches, disruption specialists,
                  and startup founders transform
                  industries with the IDBS
                  integrated portfolio of services
                  innovation consulting, research
                  and execution.
                </p>
                <Link
                  to="/About"
                  className="font-bold text-blueGray-700 mt-8 text-sm"
                >
                  Read more
                </Link>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-black">
                  <img
                    alt="..."
                    src="idbs_building.png"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-black fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-lg font-bold text-white">
                      FACILITIES
                    </h4>
                    <p className="text-sm font-light mt-2 text-white">
                      Our programmes are offered
                      on a online and virtual
                      blended learning platform,
                      providing community and
                      support from your
                      instructors.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20 pt-10 pb-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1593642532781-03e79bf5bec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHRlY2hub2xvZ3l8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-black">
                    <i className="fas fa-globe-africa text-3xl"></i>
                  </div>
                  <p className="mt-4 text-base leading-relaxed text-blueGray-500">
                    As 100 % online community , we
                    are the Go-To Platform For
                    competitive cloud and digital
                    skills preparation in Africa
                    and abroad.
                  </p>
                  <h3 className="text-xl font-semibold mt-4">
                    Learn Online Courses in 3
                    categories
                  </h3>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-black mr-3">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Short Courses or
                            Executive Education
                            programs
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-black mr-3">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Masters Program -
                            Zigurat Global
                            Institute for
                            Technology (Spain)
                            online
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-black mr-3">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Customized digital
                            business training
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 relative block bg-blueGray-800">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-800 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                  Build something
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
                  Put the potentially record low
                  maximum sea ice extent tihs year
                  down to low ice. According to
                  the National Oceanic and
                  Atmospheric Administration, Ted,
                  Scambos.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-medal text-xl"></i>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                  Excelent Services
                </h6>
                <p className="mt-2 mb-4 text-blueGray-400">
                  Some quick example text to build
                  on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-poll text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Grow your market
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                  Some quick example text to build
                  on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-lightbulb text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Launch time
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                  Some quick example text to build
                  on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="relative block py-24 lg:pt-0 bg-blueGray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                      Want to work with us?
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
                      Complete this form and we
                      will get back to you in 24
                      hours.
                    </p>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Full Name"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Email"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Type a message..."
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import React from "react";
import Link from "next/link";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import CheckoutForm from "components/Payments/CheckoutForm.js";


export default function donate() {
  return (
    <>
      <Navbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundColor:"#1e293b",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    We can't do it without your support.
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                    COVID-19 has overwhelmed India's health system. The country is in a state of humanitarian crisis.

                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
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

        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-award"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Curb the Contagion</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Going by the official numbers, over hundreds of thousands of new infections and countless deaths are being reported each day and the numbers keep on increasing with every minute.
                    </p>
                    <p><a href="https://covid19.who.int/region/searo/country/in"
                    style={{color:'#097fff'}}>
                      WHO Data
                    </a></p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                      <i className="fas fa-retweet"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Join the team.</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Thousands of COVID-19 patients require intensive care, gasping for breath and medical oxygen. Old and young alike are losing their lives against the virus.
                    </p>
                                        <p><a target="_blank" href="https://learn.muellners.org"
                    style={{color:'#097fff'}}>
                      Join our team to save lives.
                    </a></p>
                  </div>
                </div>
              </div>
              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <i className="fas fa-fingerprint"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Verified Non-Profit</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      <a target="_blank" style={{color:'#097fff'}} href="https://www.muellners.org/">Muellners Foundation</a> is a voluntary association, registered in Denmark in Dec 2019, with several initiatives including promoting open source technologies such as <a target="_blank" style={{color:'#097fff'}} href="https://finscale.org"> Finscale </a> to solve global issues with key digital practices. The Foundation is supported by generous grants from Google for Non Profits, AWS, Atlassian, Slack, Muellners LLC and many more.
                    </p>

                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-user-friends text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Each lost life is a deadly reminder of the vulnerability of humankind.
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">

                  India is an important country in terms of our global fight against the pandemic. It is also a country where a huge scale of vaccine manufacturing facilities exist.
                  There are several mutations being identified and these will show up in other parts of the world.
                  As the largest democracy in the world and with its diversified young population, India has a promising future. To enable India is to enable the future of the world.

                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">



                While millions are projected to die due to this catastrophe, several millions face a plight.
                This plight is in contrast to the basis of the human society - a basic human right to get food.
                </p>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      Food Security
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                    As we noticed last year during the challenging times of the first COVID-19 wave, the most vulnerable in India were left without food security.
                    This wave or future pandemic waves are not going to change this dismal reality a lot.

                    And this divide is becoming increasingly visible as the world navigates through this crisis.

                    Our solution is to reinforce this system positively with refined ideas of social and transparent aid.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
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

        </section>

        <div className="container mt-5 mx-auto px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
            <div className="px-6">
              <div className="mt-10 py-10 text-left">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4">
                    <p className="mb-4 text-lg leading-relaxed text-blueGray-700 text-left">


                    During this state of health crisis, where communities are unable to cope, philanthropic funding is often quickly available. However, it is essential to reach the most affected and most vulnerable populations.</p>

                    <p className="mb-4 text-lg leading-relaxed text-blueGray-700 text-left"> Our impact group: In semi urban and semi rural regions, with its millions of citizens, the pandemic has led to daily wage and unorganised workforce losing their livelihood and sustenance.

                    India’s growth story and market opportunities depended strongly on its middle class households. And they are also impacted either with the disease or the after-effects of an unorganised pandemic response.
                    A huge group of lower middle class households have either lost their breadwinners to COVID-19 or the families have lost their livelihoods due to the pandemic.




                    Statistically, this vulnerable group of daily wage workers and their families have zero to little savings.
                    Most of them are non banked and underbanked. With loss of livelihood, imagine the harsh circumstances that these families are going through right now.
                    They need help and aid in a way that can bring them out of the crisis. Providing food is critical to prevent an exacerbating hunger crisis alongside this health crisis. </p>
                    <p className="mb-4 text-lg leading-relaxed text-blueGray-700">




                    </p>

                    <p className="mb-4 text-lg leading-relaxed text-blueGray-700">

                    With our Food Aid, Muellners Foundation will set up kitchens and provide meals or food ration packets to people in need.
                    The food aid will be distributed to on ground civic authorities and front line workers such as Municipality Departments, Police Departments and other local NGO partners, including representatives of people.
</p>
                  <br/> Where the proceeds go to: 100 % of all donations will be allocated to the<br/>
                   <p className="mb-4 text-lg leading-relaxed text-blueGray-700"><strong>a. Procuring of Food packets.</strong> </p>
                    <p className="mb-4 text-lg leading-relaxed text-blueGray-700"><strong>b. Provisions for personal protective equipment for the distributors and social workers, engaged in this initiative.</strong></p>
                  <p className="mb-4 text-lg leading-relaxed text-blueGray-700"><strong>c. Technology Development & Maintenance by Foundation to digitize the initiative.</strong></p>
                   <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                    We understand that these measures are only short-term solutions to the crisis.
                    However, India must overcome this state of emergency, get the pandemic under control before people can get back to work and the economy is moving again.
                    Until then, we must help India and especially its most vulnerable with a first response.
                    </p>
                    <p className="mb-4 text-lg text-center leading-relaxed text-blueGray-700">
                    <strong>Please donate!</strong>
                    </p>
                    <div className="flex flex-wrap mt-5 text-center">
                      <div className="w-full px-4 pt-4 mr-auto ml-auto">
                          <CheckoutForm />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Our contributors</h2>
                <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                  Our volunteers are working day and night on this COVID-19 relief through social, financial and technical means.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="/img/lara-muellner.jpeg"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Lara Muellner</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Board Member
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="/img/saransh-sharma.jpeg"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Saransh Sharma</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Board Member
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="/img/devendra-yadav.jpeg"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Devendra Yadav</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Software Developer
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="/img/kevin-madhu.jpeg"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Kevin Madhu</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Software Developer
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5 w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="/img/nasser-kaze.jpg"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Nasser Yemdjih Kaze</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Software Engineer
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5 w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="/img/anurag-garg.jpeg"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Anurag Garg</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Solidity Developer
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5 w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="/img/denis-chernenko.jpeg"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Dennis Chernenko</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Social Connector
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5 w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="/img/harsha-medireddy.jpg"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Harsha Medireddy</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      People Connector
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5 w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="/img/atharva-dhekne.jpg"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Atharva Dhekne</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Research Fellow
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5 w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="/img/advait-madhekar.png"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Advait Madhekar</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Research Fellow
                    </p>
                  </div>
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
        </section>
      </main>
      <Footer />
    </>
  );
}

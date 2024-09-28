import React, { useEffect } from "react";
import Navbar from "../Navbar";
import img from "../../assets/Quality.jpg";
import img2 from "../../assets/people3.png";
import chart from "../../assets/orgChart.png";
import Footer from "../Footer";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      {/* About  */}
      <div className="mx-[4rem] my-[4rem] ">
        <div className="absolute inset-0 -z-10">
          <img
            src={img2}
            alt="Background"
            className="w-full h-full object-cover rounded"
          />
        </div>
        <div className="relative border border-gray-100 bg-gray-700/80 shadow-md rounded drop-shadow-sm p-[1rem]">
          <p className="text-[4rem] text-orange-800">ABOUT US.</p>
          <p className="text-[1.2rem] text-white">
            AURA PROJECTS was established in 2013. The company is professionally
            managed by the Professionals Team with a work experience of 12
            Years. The company has got hardcore professionals and experts in all
            fields and has been undertaking projects for over a decade.The
            company is involved in the work of Interiors. The Company considers
            it is moral responsibility to adhere to specification & standards
            set by the Professional and clients & create & maintain good working
            atmosphere at worksite during the time execution.
          </p>
          <br />
          <p className="text-[1.2rem] text-white">
            We take up complete job execution as following:
            <ol>
              <li>Civil works</li>
              <li>Electrical</li>
              <li>Plumbing</li>
              <li>HVAC/ Ducting</li>
              <li>Wood works</li>
              <li>Landscaping</li>
              <li>Furniture manufacturing</li>
              <li>Fire Protection & and Detection.</li>
              <li>Steel Fabrication and other metal works.</li>
            </ol>
          </p>
        </div>
      </div>

      {/* Quality policy */}
      <div className="flex flex-row relative justify-evenly items-center mx-[4rem] my-[4rem] bg-orange-700 font-serif border shadow-md rounded drop-shadow-sm p-[2rem] ">
        <div className="mx-[2rem]">
          <p className="text-[4.5rem]  text-white font-serif">Quality policy</p>
          <div className="border-y-2 border-double rounded-md p-2">
            <img className="rounded-md" src={img} />
          </div>
        </div>
        <div className="mx-[2rem] ">
          <p className="text-[1.2rem] text-white">
            AURA PROJECTS believes that its market expects a continually
            improving service. We aim to continually improve the service we
            provide to meet our clients requirements and to produce finished
            work that we can justifiably be proud of. The company aims to
            achieve the above by implementing a management system that complies
            with the international standard of good practice. It also includes a
            commitment to meet the requirements of our clients, learn from
            customer's feedback, as well as legal and regulatory requirements.
            Also to continual development of the system and helping to ensure
            remains effective. Only by providing an outstanding service and
            product quality will we achieve our aims of long term success and
            sustained improvements. All personnel with in the company are
            responsible for the quality of their work. The company provides
            training and has established systems to assist all personnel to
            achieve the standards required. While we endeavor to produce work
            and offer a service that we can be proud of, we have to recognize
            that we don't always achieve our own standards. When a customer
            complaints, we are committed to investigating the complaint and will
            do our best to put right all justified complaints. The policy,
            organization and procedures necessary to achieve the required
            standards are described in our Quality Management System. The
            Quality Manager is responsible for monitoring the quality system and
            reports regularly to the Managing Director on the system's
            implementation, status and effectiveness. The objectives of this
            company are set out in the Business Plan. Objectives for individual
            jobs are to carry out the works to the satisfaction of the client
            and in accordance with the contract as agreed with the client.
          </p>
          <div className="overflow-hidden w-[20%] absolute right-0 top-0 -z-10">
            <div className="border-[2rem] rounded-full h-[40rem] w-[40rem] border-orange-500"></div>
          </div>
          <div className="overflow-hidden w-[20%] absolute right-0 top-40 -z-10">
            <div className="border-[2rem] rounded-full h-[40rem] w-[40rem] border-orange-600"></div>
          </div>
        </div>
      </div>

      {/* Org chart */}
      <div className="flex flex-col items-center ">
        <p className="text-[3rem] font-serif text-gray-700">
          ORGANIZATION CHART AURA PROJECTS
        </p>
        <img src={chart} className="h-[45rem] items-center" />
      </div>
      <Footer />
    </>
  );
};

export default About;

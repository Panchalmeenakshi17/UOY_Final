// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { volunteerRegistration } from "../../actions/user";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { volunteerRegistration } from "../../actions/user";
import Footer from "../Footer/Footer";

const VolunteerRegistration = () => {
  const [VolunteerName, setVolunteerName] = useState("");
  const [VolunteerEmail, setVolunteerEmail] = useState("");
  const [VolunteerPhone, setVolunteerPhone] = useState("");
  const [VolunteerBloodGroup, setVolunteerBloodGroup] = useState("");
  const [VolunteerAddress, setVolunteerAddress] = useState("");
  // const [DonationAmount, setDonationAmount] = useState("");
  const dispatch = useDispatch();

  const submitVolunteerRegistration = async (e) => {
    e.preventDefault();

    //  Email validation using a regular expression
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(VolunteerEmail)) {
      toast.warn("Please enter a valid email address.", {
        position: "top-center",
      });
      return;
    }

    // Phone number validation
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(VolunteerPhone)) {
      toast.warn("Please enter a valid 10-digit phone number.", {
        position: "top-center",
      });
      return;
    }
    if (
      VolunteerName.trim() === "" ||
      VolunteerEmail.trim() === "" ||
      VolunteerPhone.trim() === "" ||
      VolunteerBloodGroup.trim() === "" ||
      VolunteerAddress.trim() === ""
    ) {
      toast.warn("Please fill out all required fields.", {
        position: "top-center",
      });
    } else {
      const volunteerRegistrationrSubmit = {
        VolunteerName,
        VolunteerEmail,
        VolunteerPhone,
        VolunteerBloodGroup,
        VolunteerAddress,
      };
      dispatch(volunteerRegistration(volunteerRegistrationrSubmit));
      setVolunteerName("");
      setVolunteerEmail("");
      setVolunteerBloodGroup("");
      setVolunteerPhone("");
      setVolunteerAddress("");
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="relative ">
        {/* <img
          src="https://images.unsplash.com/photo-1561414927-6d86591d0c4f?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-full md:h-[300px]"
          alt="not found"
        /> */}
        <video
          src="videos/ww.mp4"
          autoPlay={true}
          loop
          muted
          className="  h-[500px] w-full object-cover opacity-100 transition-opacity duration-500 ease-in-out "
        />

        <div className="   w-full md:p-0 p-5   absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className=" font-main   text-xl text-center text-[#f48d5e] ">
            | Volunteer Registration
          </h1>
          <h2 className="text-[#eeecf2] text-center mt-7 text-3xl mb-1 md:p-0 px-6 translate-x-[0px] font-semibold md:text-8xl font-main title-font">
            Get Connected
          </h2>
          <h1 className="leading-relaxed text-center md:text-3xl md:mb-5   md:mt-10 w-full p-6 md:p-0 text-[#f48d5e]">
            Please share all your necessary details to become the part of{" "}
            <span className="text-[#f26522] font-bold underline ">
              Unity of Youth Family.
            </span>
          </h1>
        </div>
      </div>
      <div className="p-2  bg-[#fed5c2] md:w-full">
        <div className=" mb-20 md:w-full flex justify-center mt-20 w-full h-full ">
          <div className=" w-full flex justify-center md:">
            <div className=" w-full  md:w-[1000px] rounded-xl md:translate-x-[10px] md:rounded-2xl bg-[#f26522] shadow-[#393939] shadow-2xl  rounded-lgdark:border  dark:border-[#f45c43]">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <form className="  space-y-4 md:space-y-6">
                  <div className="w-full md:w-full p-3">
                    <label className="block">
                      <input
                        className="p-4 w-full text-[#ffffff] tracking-tight bg-[#f6f6f640]  placeholder:text-cyan-50 outline-none border border-gray-300 rounded-lg focus:border-[#f45c43] transition duration-200"
                        id="signUpInput1-1"
                        type="text"
                        value={VolunteerName}
                        onChange={(e) => setVolunteerName(e.target.value)}
                        required
                        placeholder="Volunteer Name*"
                      />
                    </label>
                  </div>
                  <div className="w-full md:w-full p-3">
                    <label className="block">
                      <input
                        className="p-4 w-full text-[#ffffff] tracking-tight bg-[#f6f6f640]  placeholder:text-cyan-50 outline-none border border-gray-300 rounded-lg focus:border-[#f45c43]  transition duration-200"
                        id="signUpInput1-1"
                        type="email"
                        value={VolunteerEmail}
                        onChange={(e) => setVolunteerEmail(e.target.value)}
                        required
                        placeholder="Volunteer Email*"
                      />
                    </label>
                  </div>
                  <div className="w-full md:w-full p-3">
                    <label className="block">
                      <input
                        className="p-4 w-full text-[#ffffff] tracking-tight bg-[#f6f6f640]  placeholder:text-cyan-50 outline-none border border-gray-300 rounded-lg focus:border-[#f45c43] transition duration-200"
                        id="signUpInput1-1"
                        type="text"
                        value={VolunteerBloodGroup}
                        onChange={(e) => setVolunteerBloodGroup(e.target.value.toUpperCase())}
                        required
                        placeholder="Volunteer Blood Group*"
                      />
                    </label>
                  </div>
                  <div className="w-full md:w-full p-3">
                    <label className="block">
                      <input
                        className="p-4 w-full text-[#ffffff] tracking-tight bg-[#f6f6f640]  placeholder:text-cyan-50 outline-none border border-gray-300 rounded-lg focus:border-[#f45c43] transition duration-200"
                        id="signUpInput1-1"
                        type="number"
                        value={VolunteerPhone}
                        onChange={(e) => setVolunteerPhone(e.target.value)}
                        required
                        placeholder="Volunteer Phone Number*"
                      />
                    </label>
                  </div>

                  <div className="w-full md:w-full p-3">
                    <label className="block">
                      <input
                        className="p-4 w-full text-[#f0f7ff] tracking-tight bg-[#f6f6f640]  placeholder:text-cyan-50 outline-none border border-gray-300 rounded-lg focus:border-[#f45c43] transition duration-200"
                        id="signUpInput1-2"
                        type="text"
                        value={VolunteerAddress}
                        required
                        onChange={(e) => setVolunteerAddress(e.target.value)}
                        placeholder="Volunteer Address*"
                      />
                    </label>
                  </div>

                  <div className="w-full flex justify-center p-3">
                    <button
                      type="button"
                      onClick={submitVolunteerRegistration}
                      className="translate-x-[10px] transform delay-50 bg-[#328cc141] ease-in inline-block rounded bg-primary border-2 md:hover:bg-[#73a9c8fe] px-7 pb-2.5 pt-3 text-sm font-bold uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      Register as Volunteer
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}

    </>
  );
};

export default VolunteerRegistration;

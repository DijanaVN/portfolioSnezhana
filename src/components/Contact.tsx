import React, { useEffect, useRef, useState } from "react";
import { TypingAnimation } from "./TypingMotion";
import { PiPhoneCallFill } from "react-icons/pi";
import { FaAddressCard } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { BsFillPersonFill } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import ThankYouModal from "./ThankYouModal";

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    to_name: "",
    from_name: "",
    message: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_7gpa648",
          "template_hjrw21f",
          form.current,
          "lzr2W_keMpvMg2MBE"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
    setIsModalOpen(true);
    setFormData({ to_name: "", from_name: "", message: "" });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container  contact text-white  ">
      <div className="container contact-start  ">
        <h2 data-aos="fade-up">Contact Me</h2>
        <TypingAnimation text="Feel free to reach out. I'm always open to new opportunities and collaborations."></TypingAnimation>
      </div>
      <div className="row mt-4 ">
        <div className="col-md-6 pe-5">
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-3">
              <label data-aos="zoom-in" htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control bg-light "
                id="name"
                name="to_name"
                value={formData.to_name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-3">
              <label data-aos="zoom-in" htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control bg-light"
                id="email"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-3">
              <label
                data-aos="zoom-in"
                htmlFor="message"
                className="form-label "
              >
                Message
              </label>
              <textarea
                className="form-control bg-light"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              value={"Send"}
              className="btn btn-primary rounded-pill  mt-3"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="col-md-6 text-white ps-5 ">
          <h4 className="mb-4 mt-4">Contact Information</h4>
          <div className="d-flex align-items-center mb-3 contact-item">
            <BsFillPersonFill
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1200"
              color="yellow"
              className="me-2"
            />
            <div className="contact-text">Snezhana Kachaniklik</div>
          </div>
          <div className="d-flex align-items-center mb-3 contact-item">
            <PiPhoneCallFill
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              color="lightblue"
              className="me-2"
            />
            <div className="contact-text">+389 71 621 388</div>
          </div>{" "}
          <div className="d-flex align-items-center mb-3 contact-item">
            <div className="contact-text">
              <IoMdMail
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="2000"
                color="pink"
                className="me-2"
              />
              <a target="_blank" href="mailto: snezana_kacaniklik@yahoo.com">
                snezana_kacaniklik@yahoo.com
              </a>
            </div>
          </div>
          <div className="d-flex align-items-center contact-item">
            <FaAddressCard
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="2500"
              color="lightgreen"
              className="me-2"
            />
            <div className="contact-text"> Skopje, Macedonia</div>
          </div>
        </div>
      </div>
      <ThankYouModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Contact;

import Title from "../components/title";
import React, { useState } from "react";
import styled from "styled-components";
import { MainLayout, InnerLayout } from "../styles/layouts";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AddressLocationIcon from "@mui/icons-material/AddLocation";
import Contactitem from "../components/contactitem";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Contactpage() {
  const form = useRef(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const validateForm = () => {
    const newErrors = {};

    if (!formState.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formState.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formState.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formState.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const sendEmail = async e => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        console.error("EmailJS credentials not configured. Please check your .env file.");
        setSubmitStatus("error");
        return;
      }

      await emailjs.sendForm(serviceId, templateId, form.current, publicKey);

      setSubmitStatus("success");
      resetForm();
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const resetForm = () => {
    form.current.reset();
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setErrors({});
  };
  const Phone = <PhoneIcon />;
  const Email = <EmailIcon />;
  const Address = <AddressLocationIcon />;
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <MainLayout>
      <Title title={"Contact"} span={"Contact"} />
      <ContactpageStyled>
        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <InnerLayout className="Contact-section">
            <motion.div className="left-content" variants={itemVariants}>
              <div className="contact-title">
                <h4>Get in Touch</h4>
                <p>Feel free to reach out for collaborations or just a friendly hello!</p>
              </div>

              {submitStatus === "success" && (
                <div className="success-message">✓ Message sent successfully! I'll get back to you soon.</div>
              )}

              {submitStatus === "error" && (
                <div className="error-message">✗ Failed to send message. Please try again or email me directly.</div>
              )}

              <form className="form" ref={form} onSubmit={sendEmail}>
                <div className="form-feild">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={formState.name}
                    onChange={handleChange}
                    className={errors.name ? "error" : ""}
                    autoComplete="off"
                  />
                  {errors.name && <span className="error-text">{errors.name}</span>}
                </div>

                <div className="form-feild">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formState.email}
                    onChange={handleChange}
                    className={errors.email ? "error" : ""}
                    autoComplete="off"
                  />
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </div>

                <div className="form-feild">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Enter subject"
                    value={formState.subject}
                    onChange={handleChange}
                    className={errors.subject ? "error" : ""}
                    autoComplete="off"
                  />
                  {errors.subject && <span className="error-text">{errors.subject}</span>}
                </div>

                <div className="form-feild">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    placeholder="Enter your message"
                    value={formState.message}
                    onChange={handleChange}
                    className={errors.message ? "error" : ""}
                    autoComplete="off"
                  ></textarea>
                  {errors.message && <span className="error-text">{errors.message}</span>}
                </div>

                <div className="form-feild">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="submit-btn"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </motion.button>
                </div>
              </form>
            </motion.div>
            <motion.div className="right-content" variants={itemVariants}>
              <Contactitem icon={Phone} title={"phone"} contact1={"+1 (647) 466-2114"} contact2={""} />
              <Contactitem icon={Email} title={"Email"} contact1={"thakuryash@live.com"} contact2={""} />
              <Contactitem icon={Address} title={"Address"} contact1={"Guelph, ON"} contact2={"Canada"} />
            </motion.div>
          </InnerLayout>
        </motion.div>
      </ContactpageStyled>
    </MainLayout>
  );
}
const ContactpageStyled = styled.section`
  .Contact-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    .right-content {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
    }
    .contact-title {
      margin-bottom: 2rem;

      h4 {
        color: var(--white-color);
        padding: 0.5rem 0;
        font-size: 2rem;
        background: var(--primary-gradient);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        font-weight: 700;
      }

      p {
        color: var(--font-light-color);
        font-size: 1rem;
        line-height: 1.6;
      }
    }

    .success-message,
    .error-message {
      padding: 1rem;
      border-radius: 8px;
      margin-bottom: 1.5rem;
      font-weight: 500;
      animation: slideDown 0.3s ease-out;
    }

    .success-message {
      background: rgba(76, 175, 80, 0.1);
      color: #4caf50;
      border: 1px solid rgba(76, 175, 80, 0.3);
    }

    .error-message {
      background: rgba(244, 67, 54, 0.1);
      color: #f44336;
      border: 1px solid rgba(244, 67, 54, 0.3);
    }

    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .form {
      width: 100%;
      padding-top: 0.5rem;

      .form-feild {
        margin-top: 2rem;
        position: relative;
        width: 100%;

        &:first-child {
          margin-top: 1rem;
        }

        label {
          position: absolute;
          left: 20px;
          top: -12px;
          display: inline-block;
          background-color: var(--background-dark-color);
          padding: 0 0.5rem;
          color: var(--font-light-color);
          font-size: 0.9rem;
          font-weight: 500;
          z-index: 1;
        }

        input,
        textarea {
          border: 2px solid var(--border-color);
          outline: none;
          background: var(--glass-bg);
          backdrop-filter: blur(10px);
          padding: 0 15px;
          width: 100%;
          color: var(--white-color);
          border-radius: 8px;
          transition: var(--transition-smooth);
          font-family: inherit;

          &:focus {
            border-color: var(--primary-color);
            box-shadow: 0 0 0 3px var(--background-light-color-2);
          }

          &.error {
            border-color: #f44336;
          }
        }

        input {
          height: 50px;
        }

        textarea {
          padding: 0.8rem 1rem;
          resize: vertical;
          min-height: 150px;
        }

        .error-text {
          color: #f44336;
          font-size: 0.85rem;
          margin-top: 0.5rem;
          display: block;
        }

        .submit-btn {
          background: var(--primary-gradient);
          color: var(--white-color);
          border: none;
          padding: 0.9rem 3rem;
          font-size: 1.1rem;
          font-weight: 600;
          border-radius: 50px;
          cursor: pointer;
          transition: var(--transition-smooth);
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
          width: 100%;

          &:hover:not(:disabled) {
            box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
            transform: translateY(-2px);
          }

          &:disabled {
            opacity: 0.6;
            cursor: not-allowed;
          }
        }
      }
    }
  }
  @media screen and (max-width: 900px) {
    .Contact-section {
      grid-template-columns: repeat(1, 1fr);

      .form {
        padding-top: 1rem;

        .form-feild {
          margin-top: 2.5rem;

          &:first-child {
            margin-top: 1.5rem;
          }

          label {
            font-size: 0.85rem;
            top: -11px;
            left: 15px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 480px) {
    .Contact-section {
      .contact-title {
        h4 {
          font-size: 1.5rem;
        }

        p {
          font-size: 0.9rem;
        }
      }

      .form {
        .form-feild {
          input {
            height: 48px;
            font-size: 1rem;
          }

          textarea {
            min-height: 120px;
            font-size: 1rem;
          }

          .submit-btn {
            padding: 0.8rem 2rem;
            font-size: 1rem;
          }
        }
      }
    }
  }
`;
export default Contactpage;

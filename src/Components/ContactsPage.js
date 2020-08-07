import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import Header from "./Header";
import Footer from "./Footer";
import emailjs from "emailjs-com";
import Form from "./Form";

const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 305px);
`;

const ContactsPage = () => {
  const [formState, setFormState] = useState({});
  const [isSendingForm, setIsSendingForm] = useState(false);
  const { register } = useForm();

  function sendEmail(e) {
    e.preventDefault();
    setIsSendingForm(true);

    emailjs
      .sendForm(
        "gmail",
        "template_hGxmtURS",
        e.target,
        "user_PjBk4AsJJeWCAU4tO0TDM"
      )
      .then(
        (result) => {
          console.log(result.text);
          window.location.reload();
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <>
      <Header />
      <Contacts>
        <Form
          isSendingForm={isSendingForm}
          sendEmail={sendEmail}
          title="Контактна форма"
          withLogo
        />
      </Contacts>

      <Footer />
    </>
  );
};

export default ContactsPage;

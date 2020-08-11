import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import Header from "./Header";
import Footer from "./Footer";
import emailjs from "emailjs-com";
import Form from "./Form";
import Media from "react-media";

const ContactsPageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ContactsPage = () => {
  const [formState, setFormState] = useState({});
  const [isSendingForm, setIsSendingForm] = useState(false);
  const { register } = useForm();

  document.body.style.overflow = "auto";

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
    <Media
      queries={{
        small: "(max-width: 729px)",
        large: "(min-width: 730px)",
      }}
    >
      {(size) => (
        <ContactsPageBox style={{ height: size.large && "100vh" }}>
          <Header />
          <Contacts>
            <Form
              isSendingForm={isSendingForm}
              sendEmail={sendEmail}
              title="Контактна форма"
            />
          </Contacts>

          <Footer />
        </ContactsPageBox>
      )}
    </Media>
  );
};

export default ContactsPage;

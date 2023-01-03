import React, { useState } from "react";
import Form from "../Form";
import { Container, H3, H4 } from "./styles";

const ModalInner = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const handleSuccess = () => {
    setShowSuccess(true);
  };

  return (
    <Container>
      {showSuccess ? (
        <>
          <div>
            <H4>Thanks for signing up!</H4>
            <p>
              We will notify you via email when the tickets are available, so
              keep an eye on it.
            </p>
          </div>
        </>
      ) : (
        <>
          <H3>Sign up</H3>
          <p>
            Join our newsletter to be notified when pre-release tickets for our
            world tour go on sale.
          </p>
          <Form handleSuccess={handleSuccess} />
        </>
      )}
    </Container>
  );
};

export default ModalInner;

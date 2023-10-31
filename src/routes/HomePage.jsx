import React from "react";

import ShopBanner from "../components/ShopBanner";
import ContactForm from "../components/ContactForm";

export default function HomePage() {
  return (
    <>
      <ShopBanner></ShopBanner>
      <div className="container">
        <ContactForm></ContactForm>
      </div>
    </>
  );
}

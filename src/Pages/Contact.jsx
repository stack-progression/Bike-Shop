import React from "react";
import "./CSS/Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Adresa Noastră:</h2>
      <p>Strada Exemplului, Nr. 12, Oraș, Județ</p>
      <p>
        <span>Telefon</span>: 07xx xxx xxx – Luni - Vineri: 09:00 - 18:00
      </p>
      <p>
        <span>Email</span>: contact@cvelaro.ro – Răspundem în maximum 24 de ore.
      </p>
      <p>
        <span>Social Media</span>: Ne găsești pe Facebook și Instagram sub
        numele @cvelaro.
      </p>
      <h2>Formular de Contact:</h2>
      <form action="">
        <label htmlFor="name">Nume:</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="message">Mesaj:</label>
        <textarea  id="message" name="message"></textarea>
        <button type="">Trimite</button>
      </form>
    </div>
  );
};

export default Contact;

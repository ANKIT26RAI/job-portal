import React, { useState } from 'react';
import { app } from "../../firebase"; // Adjust the path accordingly
import { getDatabase, ref, push } from 'firebase/database';
import "./index.css";
import Navbar from '../Navbar';

const YourComponent = () => {
  const [filteredJobs, setFilteredJobs] = useState([]);

  const database = getDatabase(app);
  const contactFormDB = ref(database, 'contactForm');

  const submitForm = async (e) => {
    e.preventDefault();

    const name = getElementVal("name");
    const emailid = getElementVal("emailid");
    const phoneNumber = getElementVal("phoneNumber");
    const age = getElementVal("age");
    const address = getElementVal("address");
    const msgContent = getElementVal("msgContent");
    const skills = getElementVal("skills");

    saveMessages(name, emailid, phoneNumber, age, address, msgContent, skills);

    // Enable alert
    const alertElement = document.querySelector(".alert");
    alertElement.style.display = "block";

    // Remove the alert after 3 seconds
    setTimeout(() => {
      alertElement.style.display = "none";

      // Redirect to another page after 2 seconds
      setTimeout(() => {
        // Use React Router for navigation or window.location.href
        window.location.href = "jobs1.html"; // Replace with the URL you want to redirect to
      }, 2000);
    }, 1000);

    // Reset the form
    document.getElementById("contactForm").reset();
  };

  const saveMessages = (name, emailid, phoneNumber, age, address, msgContent, skills) => {
    const newContactForm = push(contactFormDB);

    newContactForm.set({
      name,
      emailid,
      phoneNumber,
      age,
      address,
      msgContent,
      skills,
    });
  };

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };

  return (
    <div>
      <Navbar />
      <div className="job-background">
        <div className="title">
          <h2>Apply for job</h2>
        </div>
      </div>
      <div className="container">
        <header className="header">
          <h1 className="post-job">Fill the form </h1>
        </header>
        <form action="" id="contactForm" onSubmit={submitForm}>
          <div className="form-group">
            <input className="form-control" type="text" id="name" placeholder="Your name...." required />
          </div>

          <div className="form-group">
            <input className="form-control" type="email" id="emailid" placeholder="Your Email....." required />
          </div>

          <div className="form-group">
            <input className="form-control" type="tel" id="phoneNumber" placeholder="Your Phone Number...." required />
          </div>

          <div className="form-group">
            <input className="form-control" type="text" id="age" placeholder="Your Age...." required />
          </div>

          <div className="form-group">
            <input className="form-control" type="text" id="address" placeholder="Your Address...." required />
          </div>

          <div className="form-group">
            <textarea className="form-control" id="msgContent" cols="5" rows="10" placeholder="Other things about yourself....." required></textarea>
          </div>

          <div className="form-group">
            <input className="form-control" type="text" id="skills" placeholder="Your Skills...." required />
          </div>
          <div className="form-group">
            <button type="submit" className="submit-button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default YourComponent;

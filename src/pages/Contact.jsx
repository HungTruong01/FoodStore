import React from "react";
import Title from "../components/Title";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <section className="max-padd-container mt-24">
      <div className="flex flex-col xl:flex-row gap-20 py-6">
        <div>
          <Title title1={"Get"} title2={"in Touch"} title1Styles={"h3"} />
          <p className="mb-5 max-w-xl">
            Have questions or need help? Send us a message, and we'll get back
            to you as soon as possible
          </p>

          <form action="">
            <div className="flex gap-x-5">
              <div className="w-1/2 mb-4">
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full mt-1 py-1.5 px-3 border-none outline-none ring-1 ring-slate-900/5 regular-14 rounded"
                />
              </div>
              <div className="w-1/2 mb-4">
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full mt-1 py-1.5 px-3 border-none outline-none ring-1 ring-slate-900/5 regular-14 rounded"
                />
              </div>
            </div>

            <div>
              <textarea
                name=""
                id="message"
                rows="4"
                placeholder="Write your message here"
                className="w-full mt-1 px-3 border-none outline-none ring-1 ring-slate-900/5 regular-14 rounded resize-none"
              ></textarea>
            </div>
            <button className="btn-dark !rounded shadow-sm mt-4" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Contact;

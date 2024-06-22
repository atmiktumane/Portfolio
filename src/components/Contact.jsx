import React, { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending....");

    // store form data in "formData"
    const formData = new FormData(e.target);

    formData.append("access_key", "24f7b493-9f86-448e-ac5f-742962bebce2");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      e.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="h-[100%] px-4 md:px-9 pt-20 pb-[25px]">
      {/* Heading */}
      <h2 className="text-2xl font-medium text-purple-300">Contact Us</h2>

      {/* Border line */}
      <div className="mt-3 w-8 h-[3px] bg-purple-500 rounded-2xl"></div>

      {/* Contact Form */}
      <form
        onSubmit={onSubmit}
        className="mt-12  bg-zinc-900 rounded-lg p-5 py-9 flex flex-col gap-7"
      >
        {/* Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
            className="bg-zinc-800 p-2 rounded"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email Address"
            required
            className="bg-zinc-800 p-2 rounded"
          />
        </div>

        {/* Email Subject */}
        <input
          type="text"
          name="subject"
          placeholder="Enter the Email Subject"
          required
          className="bg-zinc-800 p-2 rounded"
        />

        {/* Message */}
        <textarea
          name="message"
          placeholder="Enter Your Question or Message"
          rows="6"
          required
          className="bg-zinc-800 p-2 rounded"
        ></textarea>

        {/* Submit button */}

        <button
          type="submit"
          className="w-1/2 md:w-1/3 place-self-center bg-purple-600 hover:bg-purple-800 py-1 rounded"
        >
          Submit Form
        </button>

        {/* Data Sending Loader */}
        <span className="text-center text-zinc-700">{result}</span>
      </form>

      {/* Note */}
      <p className="text-center pt-2 text-zinc-500">
        Note: The above form will be submitted to Email: atmiktumane72@gmail.com
      </p>
    </div>
  );
};

export default Contact;

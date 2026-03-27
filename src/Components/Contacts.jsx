import { useState } from "react";
import emailjs from "@emailjs/browser";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { FaInstagram, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  try {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState(""); 

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
      setErrors({ ...errors, [e.target.name]: "" }); 
    };

    const validate = () => {
      const newErrors = {};
      if (!formData.name.trim()) newErrors.name = "Name is required";
      if (!formData.email.trim()) newErrors.email = "Email is required";
      if (!formData.phone.trim()) newErrors.phone = "Contact number is required";
      if (!formData.message.trim()) newErrors.message = "Message is required";
      return newErrors;
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      const validationErrors = validate();
      setErrors(validationErrors);
      if (Object.keys(validationErrors).length > 0) return;

      setStatus("sending");

      try {
        await emailjs.send(
          "service_vrc1898",   
          "template_faxcum8", 
          {
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            message: formData.message,
          },
          "7nNpu7FbwyvfR_5s0"    
        );

        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } catch (err) {
        console.error("EmailJS error:", err);
        setStatus("error");
      }
    };

    return (
      <section
        id="contact"
        className="relative px-6 py-30 mb-32 bg-black overflow-hidden"
      >
        {/* STAR BACKGROUND */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.06)_1px,_transparent_1px)] bg-[size:20px_20px] opacity-20" />

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT — INFO */}
          <div className="space-y-6">
            <h2 className="text-4xl font-semibold text-white">
              Get in Touch
            </h2>

            <h3 className="text-2xl font-semibold text-purple-400">
              Contact me
            </h3>

            <p className="text-gray-400 max-w-md leading-relaxed">
              I'm always open to discussing new projects, creative ideas,
              or opportunities to be part of your vision.
            </p>

            {/* CONTACT DETAILS */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4 text-gray-300">
                <span className="p-3 rounded-full bg-purple-500/10 text-purple-400">
                  <MdEmail size={20} />
                </span>
                <span>pwnkumar0471@email.com</span>
              </div>

              <div className="flex items-center gap-4 text-gray-300">
                <span className="p-3 rounded-full bg-purple-500/10 text-purple-400">
                  <MdPhone size={20} />
                </span>
                <span>+917564875379</span>
              </div>

              <div className="flex items-center gap-4 text-gray-300">
                <span className="p-3 rounded-full bg-purple-500/10 text-purple-400">
                  <MdLocationOn size={20} />
                </span>
                <span>Kolkata, India</span>
              </div>
            </div>

            {/* SOCIAL LINKS */}
            <div className="pt-2">
              <h6 className="text-l font-semibold text-purple-400">
                More links
              </h6>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://www.instagram.com/pwnkumar87"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-purple-500/10 text-purple-400 hover:bg-purple-500 hover:text-white transition"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="https://x.com/pawankumar0471"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-purple-500/10 text-purple-400 hover:bg-purple-500 hover:text-white transition"
                aria-label="Twitter"
              >
                <FaTwitter size={18} />
              </a>

              <a
                href="https://github.com/pwn0471"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-purple-500/10 text-purple-400 hover:bg-purple-500 hover:text-white transition"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/pawan-kumar-5ba309297/"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-purple-500/10 text-purple-400 hover:bg-purple-500 hover:text-white transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>

          {/* RIGHT — FORM */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">

              <div>
                <input
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-gray-200 outline-none focus:border-purple-500"
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-gray-200 outline-none focus:border-purple-500"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <input
                  name="phone"
                  placeholder="Contact number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-gray-200 outline-none focus:border-purple-500"
                />
                {errors.phone && (
                  <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <textarea
                  rows="5"
                  name="message"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-gray-200 outline-none focus:border-purple-500 resize-none"
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              {/* STATUS MESSAGES */}
              {status === "success" && (
                <p className="text-green-400 text-sm text-center">
                  ✅ Message sent successfully! I'll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-sm text-center">
                  ❌ Something went wrong. Please try again.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-purple-600 hover:bg-purple-700 transition text-white font-medium py-3 rounded-lg disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

            </form>
          </div>

        </div>
      </section>
    );
  } catch (error) {
    console.error("Contact section render error:", error);
    return null;
  }
};

export default Contact;

//service_rnbn7ob
//7nNpu7FbwyvfR_5s0    template_faxcum8
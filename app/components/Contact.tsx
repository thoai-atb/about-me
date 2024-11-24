import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="flex flex-col text-lg items-start space-y-4">
      {/* GitHub */}
      <a
        href="https://github.com/thoai-atb/"
        className="flex items-center space-x-4 text-gray-600 hover:text-primary-600 hover:translate-x-1 transition-transform duration-300"
      >
        <FaGithub size={20} />
        <span>github.com/thoai-atb/</span>
      </a>

      {/* Email */}
      <a
        href="mailto:lybaothoai@gmail.com"
        className="flex items-center space-x-4 text-gray-600 hover:text-primary-600 hover:translate-x-1 transition-transform duration-300"
      >
        <FaEnvelope size={20} />
        <span>lybaothoai@gmail.com</span>
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/lybaothoai/"
        className="flex items-center space-x-4 text-gray-600 hover:text-primary-600 hover:translate-x-1 transition-transform duration-300"
      >
        <FaLinkedin size={20} />
        <span>linkedin.com/in/lybaothoai/</span>
      </a>

      {/* Phone */}
      <a
        href="tel:+84796940495"
        className="flex items-center space-x-4 text-gray-600 hover:text-primary-600 hover:translate-x-1 transition-transform duration-300"
      >
        <FaPhone size={20} />
        <span>+84 796940495</span>
      </a>
    </div>
  );
};

export default Contact;

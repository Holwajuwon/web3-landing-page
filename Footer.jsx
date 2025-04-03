import { motion } from 'framer-motion'
import { FaTwitter, FaDiscord, FaGithub, FaMedium } from 'react-icons/fa'

const Footer = () => {
  const links = [
    {
      title: 'Product',
      items: ['Features', 'Pricing', 'API', 'Integrations']
    },
    {
      title: 'Company',
      items: ['About', 'Blog', 'Careers', 'Press']
    },
    {
      title: 'Legal',
      items: ['Privacy', 'Terms', 'Cookie Policy', 'GDPR']
    }
  ]

  const socialLinks = [
    { icon: <FaTwitter />, name: 'Twitter', url: '#' },
    { icon: <FaDiscord />, name: 'Discord', url: '#' },
    { icon: <FaGithub />, name: 'GitHub', url: '#' },
    { icon: <FaMedium />, name: 'Medium', url: '#' }
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold text-white">WealthChain</span>
            </div>
            <p className="mb-6">
              Next-generation Web3 asset management platform for decentralized finance.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  whileHover={{ y: -2 }}
                  className="text-xl text-gray-400 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          {links.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-white mb-4">{link.title}</h3>
              <ul className="space-y-2">
                {link.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8 text-center md:text-left"
        >
          <p>© {new Date().getFullYear()} WealthChain. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
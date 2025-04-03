import { motion } from 'framer-motion'

const Testimonials = () => {
  const testimonials = [
    {
      quote: "WealthChain has completely transformed how I manage my crypto portfolio. The multi-chain support is a game-changer!",
      name: "Alex Johnson",
      role: "Crypto Investor",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      quote: "As a DeFi enthusiast, I appreciate the seamless integration with various protocols. It saves me hours every week.",
      name: "Sarah Williams",
      role: "DeFi Trader",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      quote: "The security features give me peace of mind when managing my substantial crypto holdings. Highly recommended!",
      name: "Michael Chen",
      role: "Crypto Whale",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg"
    }
  ]

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Our <span className="text-indigo-500">Users Say</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our community has to say about WealthChain.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl"
            >
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
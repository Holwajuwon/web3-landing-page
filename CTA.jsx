import { motion } from 'framer-motion'

const CTA = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Take Control of Your Web3 Assets?</h2>
            <p className="text-xl opacity-90 mb-8">
              Join thousands of users managing their crypto portfolios with WealthChain. Get started in minutes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-indigo-600 hover:bg-gray-100 font-medium rounded-lg transition-colors"
              >
                Sign Up Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium rounded-lg transition-colors"
              >
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CTA
import { motion } from 'framer-motion'
import { FaEthereum, FaBitcoin, FaWallet } from 'react-icons/fa'
import { SiBinance } from 'react-icons/si'

const Hero = () => {
  const cryptoIcons = [
    { icon: <FaEthereum className="text-4xl text-indigo-500" />, name: 'Ethereum' },
    { icon: <FaBitcoin className="text-4xl text-yellow-500" />, name: 'Bitcoin' },
    { icon: <SiBinance className="text-4xl text-yellow-400" />, name: 'BNB' },
    { icon: <FaWallet className="text-4xl text-purple-500" />, name: 'Wallet' },
  ]

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Hero Content */}
          <div className="md:w-1/2 mb-12 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
                  Web3 Asset
                </span>{' '}
                Management Made Simple
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
                Take control of your decentralized wealth with our intuitive platform. Track, manage, and grow your crypto assets across multiple chains.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-indigo-500 hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
                >
                  Get Started
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-transparent border-2 border-indigo-500 text-indigo-500 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-700 font-medium rounded-lg transition-colors"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Hero Image/Animation */}
          <div className="md:w-1/2 relative">
            <div className="relative max-w-md mx-auto">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
              >
                <div className="grid grid-cols-2 gap-6">
                  {cryptoIcons.map((crypto, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -5 }}
                      className="flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                    >
                      {crypto.icon}
                      <span className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                        {crypto.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-6 bg-indigo-50 dark:bg-gray-700 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600 dark:text-gray-300">Total Balance</span>
                    <span className="text-sm font-medium text-indigo-500 dark:text-indigo-400">$42,689.42</span>
                  </div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-indigo-400 to-purple-500 w-3/4"></div>
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-xs text-gray-500 dark:text-gray-400">+12.5% this month</span>
                    <span className="text-xs text-green-500">↑ $4,763</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
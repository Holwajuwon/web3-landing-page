import { motion } from 'framer-motion'
import { FiShield, FiPieChart, FiGlobe, FiCode } from 'react-icons/fi'

const Features = () => {
  const features = [
    {
      icon: <FiShield className="w-8 h-8 text-indigo-500" />,
      title: 'Secure Storage',
      description: 'Your assets are protected with enterprise-grade security and multi-signature wallets.',
    },
    {
      icon: <FiPieChart className="w-8 h-8 text-indigo-500" />,
      title: 'Portfolio Tracking',
      description: 'Real-time tracking of all your assets across multiple blockchains in one dashboard.',
    },
    {
      icon: <FiGlobe className="w-8 h-8 text-indigo-500" />,
      title: 'Multi-Chain Support',
      description: 'Manage assets on Ethereum, Polygon, Solana, and other major blockchains.',
    },
    {
      icon: <FiCode className="w-8 h-8 text-indigo-500" />,
      title: 'DeFi Integration',
      description: 'Easily connect to DeFi protocols for staking, lending, and yield farming.',
    },
  ]

  return (
    <section id="features" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Powerful Features for Your <span className="text-indigo-500">Web3 Assets</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our platform provides everything you need to effectively manage your decentralized assets.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-indigo-50 dark:bg-gray-600 rounded-lg flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
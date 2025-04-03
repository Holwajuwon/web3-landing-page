import { motion } from 'framer-motion'
import CountUp from 'react-countup'

const Stats = () => {
  const stats = [
    { value: 12500, label: 'Active Users', suffix: '+' },
    { value: 3.2, label: 'Assets Managed', suffix: 'B+' },
    { value: 12, label: 'Blockchains', suffix: '+' },
    { value: 98, label: 'Uptime', suffix: '%' },
  ]

  return (
    <section id="stats" className="py-16 md:py-24 bg-indigo-500 dark:bg-indigo-600 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <CountUp end={stat.value} duration={3} decimals={stat.value % 1 !== 0 ? 1 : 0} />
                {stat.suffix}
              </div>
              <div className="text-lg md:text-xl opacity-90">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
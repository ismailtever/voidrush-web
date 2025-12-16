import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Zap, 
  Shield, 
  Star, 
  Crown, 
  Coins, 
  Play,
  Apple,
  Smartphone,
  Check,
  Twitter,
  Instagram,
  Facebook,
  Mail
} from 'lucide-react';

function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const skins = [
    { name: 'Pilot Blue', rarity: 'Common', color: '#0A84FF' },
    { name: 'Solar Flare', rarity: 'Rare', color: '#FFD60A' },
    { name: 'Nebula Purple', rarity: 'Epic', color: '#A855F7' },
    { name: 'Matrix', rarity: 'Legendary', color: '#30D158' },
    { name: 'Cyber Void', rarity: 'Legendary', color: '#FF453A' },
    { name: 'Gold Elite', rarity: 'Exclusive', color: '#FFD60A' },
  ];

  const drones = [
    { name: 'Scout', type: 'Speed Boost', icon: '⚡' },
    { name: 'Guardian', type: 'Shield', icon: '🛡️' },
    { name: 'Collector', type: 'Magnet', icon: '🧲' },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-dark-gray to-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(10,132,255,0.1),transparent_50%)]"></div>
        </div>
        
        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-neon-blue rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0.3
              }}
              animate={{
                y: [null, -100, window.innerHeight + 100],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>

        <motion.div
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 tracking-wider"
            variants={itemVariants}
          >
            <span className="text-glow text-neon-blue">VOID</span>
            <span className="text-white"> RUSH</span>
          </motion.h1>
          
          <motion.p
            className="text-3xl md:text-5xl font-bold mb-4 text-white"
            variants={itemVariants}
          >
            Escape the Void.
          </motion.p>
          
          <motion.p
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            The ultimate test of reflexes. Survive 100 levels or face the endless abyss.
          </motion.p>

          {/* Animated Ship */}
          <motion.div
            className="mb-12 flex justify-center"
            variants={itemVariants}
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="relative">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-neon-blue to-neon-green rounded-full border-4 border-neon-blue animate-glow"></div>
              <div className="absolute inset-0 w-24 h-24 md:w-32 md:h-32 bg-neon-blue rounded-full opacity-20 blur-2xl"></div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={itemVariants}
          >
            <motion.a
              href="#"
              className="group relative px-8 py-4 bg-neon-blue text-white font-bold rounded-2xl text-lg flex items-center gap-3 border-glow overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-green opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Apple className="relative z-10 w-6 h-6" />
              <span className="relative z-10">Download on App Store</span>
            </motion.a>
            
            <motion.a
              href="#"
              className="group relative px-8 py-4 bg-dark-gray text-white font-bold rounded-2xl text-lg flex items-center gap-3 border-2 border-neon-green hover:border-glow overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-neon-green to-neon-blue opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Smartphone className="relative z-10 w-6 h-6" />
              <span className="relative z-10">Get it on Google Play</span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-neon-blue rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-neon-blue rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Features Grid - Bento Box Style */}
      <section className="py-20 px-4 bg-dark-gray">
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-glow text-neon-blue"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Built for Champions
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 100 Levels */}
            <motion.div
              className="bg-black rounded-3xl p-8 border-2 border-neon-blue hover:border-glow transition-all group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-16 h-16 bg-neon-blue/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-neon-blue/30 transition-colors">
                <Star className="w-8 h-8 text-neon-blue" />
              </div>
              <h3 className="text-2xl font-bold mb-3">100 Challenging Levels</h3>
              <p className="text-gray-400">Master each level and prove your skills in the ultimate campaign mode.</p>
            </motion.div>

            {/* Endless Mode */}
            <motion.div
              className="bg-black rounded-3xl p-8 border-2 border-neon-green hover:border-glow transition-all group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-16 h-16 bg-neon-green/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-neon-green/30 transition-colors">
                <Zap className="w-8 h-8 text-neon-green" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Endless Void Zones</h3>
              <p className="text-gray-400">Face escalating challenges: Liftoff, Velocity, Plasma Storm, Red Alert, The Void.</p>
            </motion.div>

            {/* Customization */}
            <motion.div
              className="bg-black rounded-3xl p-8 border-2 border-neon-yellow hover:border-glow transition-all group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-16 h-16 bg-neon-yellow/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-neon-yellow/30 transition-colors">
                <Sparkles className="w-8 h-8 text-neon-yellow" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Full Customization</h3>
              <p className="text-gray-400">Unlock unique hulls, drones, and power-ups to match your playstyle.</p>
            </motion.div>

            {/* 120Hz Smooth */}
            <motion.div
              className="md:col-span-3 bg-gradient-to-r from-neon-blue/20 to-neon-green/20 rounded-3xl p-8 border-2 border-neon-blue"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-20 h-20 bg-neon-blue rounded-2xl flex items-center justify-center">
                  <Play className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl font-bold mb-2">120Hz Smooth Gameplay</h3>
                  <p className="text-gray-300 text-lg">Experience buttery-smooth animations and responsive controls optimized for high-refresh displays.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* The Armory - Showcase */}
      <section className="py-20 px-4 bg-black">
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-4 text-glow text-neon-blue"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            The Armory
          </motion.h2>
          <motion.p
            className="text-center text-gray-400 mb-12 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Customize your ship and unlock powerful companions
          </motion.p>

          {/* Skins Grid */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-neon-green">Hulls</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {skins.map((skin, index) => (
                <motion.div
                  key={skin.name}
                  className="bg-dark-gray rounded-2xl p-4 border-2 border-gray-800 hover:border-glow transition-all cursor-pointer group"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div 
                    className="w-full h-24 rounded-xl mb-3 flex items-center justify-center group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: skin.color }}
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-full"></div>
                  </div>
                  <h4 className="font-bold text-sm mb-1">{skin.name}</h4>
                  <p className="text-xs text-gray-500">{skin.rarity}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Drones Grid */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-neon-yellow">Drones</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {drones.map((drone, index) => (
                <motion.div
                  key={drone.name}
                  className="bg-dark-gray rounded-2xl p-6 border-2 border-gray-800 hover:border-glow transition-all group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-4xl mb-4">{drone.icon}</div>
                  <h4 className="text-xl font-bold mb-2">{drone.name}</h4>
                  <p className="text-gray-400">{drone.type}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* VOID ELITE - Monetization */}
      <section className="py-20 px-4 bg-gradient-to-br from-dark-gray via-black to-dark-gray relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,214,10,0.1),transparent_70%)]"></div>
        
        <motion.div
          className="max-w-4xl mx-auto relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-gradient-to-br from-yellow-900/30 to-yellow-600/20 rounded-3xl p-8 md:p-12 border-2 border-neon-yellow relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-neon-yellow/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <Crown className="w-10 h-10 text-neon-yellow" />
                <h2 className="text-4xl md:text-5xl font-bold text-glow text-neon-yellow">VOID ELITE</h2>
              </div>
              
              <p className="text-xl text-gray-300 mb-8">
                Unlock the ultimate gaming experience with exclusive benefits and premium features.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  '2x Coins from all sources',
                  'Start at Zone 2',
                  'Exclusive Gold Elite Skin',
                  'No Ads - Ever',
                  'Priority Support',
                  'Early Access to Updates'
                ].map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-6 h-6 bg-neon-yellow rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-black" />
                    </div>
                    <span className="text-gray-200">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                className="w-full md:w-auto px-12 py-4 bg-gradient-to-r from-neon-yellow to-yellow-500 text-black font-bold rounded-2xl text-lg flex items-center justify-center gap-3 mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Crown className="w-6 h-6" />
                <span>Join VOID ELITE</span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-black">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-glow text-neon-blue"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            What Players Say
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                quote: "Impossible to put down. The perfect balance of challenge and reward.",
                author: "Alex M.",
                rating: 5
              },
              {
                quote: "The most satisfying reflex game I've ever played. Pure adrenaline.",
                author: "Sarah K.",
                rating: 5
              },
              {
                quote: "120Hz gameplay is incredible. Every movement feels buttery smooth.",
                author: "Mike T.",
                rating: 5
              },
              {
                quote: "VOID ELITE is worth every penny. The exclusive content is amazing.",
                author: "Jordan L.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-dark-gray rounded-2xl p-6 border-2 border-gray-800"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-neon-yellow text-neon-yellow" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                <p className="text-gray-500">— {testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-gray py-12 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-glow text-neon-blue">VOID RUSH</h3>
              <p className="text-gray-400 text-sm">
                The ultimate test of reflexes. Survive the void.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-neon-blue transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-neon-blue transition-colors">Terms of Use</a></li>
                <li><a href="#" className="hover:text-neon-blue transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-neon-blue transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-neon-blue transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-neon-blue transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-neon-blue transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-neon-blue transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-neon-blue transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-neon-blue transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
            <p>© 2024 VOID RUSH. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Sticky Download Buttons */}
      <motion.div
        className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 flex gap-3 px-4"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <motion.a
          href="#"
          className="px-6 py-3 bg-neon-blue text-white font-bold rounded-xl text-sm flex items-center gap-2 border-glow shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Apple className="w-4 h-4" />
          <span className="hidden sm:inline">App Store</span>
        </motion.a>
        <motion.a
          href="#"
          className="px-6 py-3 bg-dark-gray text-white font-bold rounded-xl text-sm flex items-center gap-2 border-2 border-neon-green hover:border-glow shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Smartphone className="w-4 h-4" />
          <span className="hidden sm:inline">Google Play</span>
        </motion.a>
      </motion.div>
    </div>
  );
}

export default App;

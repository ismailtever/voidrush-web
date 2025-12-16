import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

function Privacy() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-neon-blue hover:text-neon-green transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Home</span>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-glow text-neon-blue">
            Privacy Policy
          </h1>
          <p className="text-gray-400 mb-8">Last updated: January 2025</p>

          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
              <p className="mb-4">
                VOID RUSH collects certain information to provide and improve our services. This includes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Game progress and achievements</li>
                <li>Device information and identifiers</li>
                <li>Usage analytics and crash reports</li>
                <li>In-app purchase information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">
                We use the collected information to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide and maintain our game services</li>
                <li>Improve user experience and game performance</li>
                <li>Process in-app purchases</li>
                <li>Send important updates and notifications</li>
                <li>Analyze usage patterns to enhance gameplay</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Data Sharing</h2>
              <p>
                We do not sell your personal information. We may share data with:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Service providers who assist in game operations</li>
                <li>Analytics platforms for performance monitoring</li>
                <li>Legal authorities when required by law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Your Rights</h2>
              <p className="mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access your personal data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of data collection (may affect game functionality)</li>
                <li>Request data portability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Children's Privacy</h2>
              <p>
                VOID RUSH is not intended for children under 13. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <p className="mt-2 text-neon-blue">
                support@voidrush.fun
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Privacy;


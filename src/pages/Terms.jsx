import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

function Terms() {
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
            Terms of Use
          </h1>
          <p className="text-gray-400 mb-8">Last updated: January 2025</p>

          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p>
                By downloading, installing, or using VOID RUSH, you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our game.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. License to Use</h2>
              <p className="mb-4">
                We grant you a limited, non-exclusive, non-transferable license to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Download and install VOID RUSH on your personal device</li>
                <li>Use the game for personal, non-commercial purposes</li>
                <li>Access game features and content as provided</li>
              </ul>
              <p className="mt-4">
                You may not copy, modify, distribute, sell, or lease any part of the game without our written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. In-App Purchases</h2>
              <p className="mb-4">
                VOID RUSH may offer in-app purchases, including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>VOID ELITE subscription (auto-renewing unless cancelled)</li>
                <li>Virtual currency and items</li>
                <li>Premium content and features</li>
              </ul>
              <p className="mt-4">
                All purchases are final. Refunds are subject to the policies of the App Store or Google Play Store. You can manage subscriptions through your device's settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. User Conduct</h2>
              <p className="mb-4">You agree not to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Use cheats, hacks, or unauthorized third-party software</li>
                <li>Attempt to reverse engineer or modify the game</li>
                <li>Share your account with others</li>
                <li>Engage in any activity that disrupts the game experience for others</li>
                <li>Use the game for any illegal purpose</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Account Termination</h2>
              <p>
                We reserve the right to suspend or terminate your account if you violate these Terms of Use. We may also discontinue the game or any part of it at any time with reasonable notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Intellectual Property</h2>
              <p>
                All content, including graphics, music, code, and game mechanics, is owned by VOID RUSH and protected by copyright and other intellectual property laws. You may not use our content without permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Disclaimer of Warranties</h2>
              <p>
                VOID RUSH is provided "as is" without warranties of any kind. We do not guarantee that the game will be error-free, uninterrupted, or meet your requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of VOID RUSH.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Changes to Terms</h2>
              <p>
                We may update these Terms of Use from time to time. Continued use of the game after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Contact Information</h2>
              <p>
                For questions about these Terms of Use, please contact us at:
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

export default Terms;


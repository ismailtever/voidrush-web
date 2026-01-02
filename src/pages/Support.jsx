import { motion } from 'framer-motion';
import { ArrowLeft, Mail, MessageCircle, HelpCircle, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

function Support() {
  const faqs = [
    {
      question: "How do I download VOID RUSH?",
      answer: "VOID RUSH is available on the App Store for iOS devices and Google Play Store for Android devices. Simply search for 'VOID RUSH' in your device's app store."
    },
    {
      question: "Is VOID RUSH free to play?",
      answer: "Yes! VOID RUSH is free to download and play. There are optional in-app purchases available, including VOID ELITE subscription for enhanced gameplay."
    },
    {
      question: "What is VOID ELITE?",
      answer: "VOID ELITE is our premium subscription that offers 2x coins, exclusive skins, ad-free experience, and early access to new content."
    },
    {
      question: "How do I restore my game progress?",
      answer: "Game progress is automatically saved to your device and cloud account. If you're switching devices, make sure you're signed in with the same account (Game Center on iOS or Google Play Games on Android)."
    },
    {
      question: "The game is running slowly. What can I do?",
      answer: "Try closing other apps, restarting your device, or lowering graphics settings in the game options. VOID RUSH is optimized for 120Hz displays for the best experience."
    },
    {
      question: "How do I report a bug?",
      answer: "Please contact us at support@voidrush.fun with details about the issue, your device model, and game version. Screenshots or videos are helpful!"
    }
  ];

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
            Support Center
          </h1>
          <p className="text-gray-400 mb-12">
            We're here to help! Find answers to common questions or contact our support team.
          </p>

          {/* Contact Options */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <motion.a
              href="mailto:support@voidrush.fun"
              className="bg-dark-gray rounded-2xl p-6 border-2 border-gray-800 hover:border-neon-blue transition-all group"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Mail className="w-10 h-10 text-neon-blue mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Email Support</h3>
              <p className="text-gray-400 text-sm">Get help via email</p>
              <p className="text-neon-blue mt-2">support@voidrush.fun</p>
            </motion.a>

            <motion.div
              className="bg-dark-gray rounded-2xl p-6 border-2 border-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <MessageCircle className="w-10 h-10 text-neon-green mb-4" />
              <h3 className="text-xl font-bold mb-2">In-Game Support</h3>
              <p className="text-gray-400 text-sm">Access support directly from the game settings menu</p>
            </motion.div>
          </div>

          {/* FAQ Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <HelpCircle className="w-8 h-8 text-neon-yellow" />
              <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-dark-gray rounded-2xl p-6 border-2 border-gray-800"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <h3 className="text-xl font-bold mb-3 text-neon-blue">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Additional Resources */}
          <div className="mt-16 pt-8 border-t border-gray-800">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-6 h-6 text-neon-green" />
              <h2 className="text-2xl font-bold">Additional Resources</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <Link 
                to="/privacy"
                className="text-neon-blue hover:text-neon-green transition-colors"
              >
                Privacy Policy →
              </Link>
              <Link 
                to="/terms"
                className="text-neon-blue hover:text-neon-green transition-colors"
              >
                Terms of Use →
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Support;


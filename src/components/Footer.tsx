import { Volume2, Clock, Users, Mail, Headphones } from "lucide-react";
import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 relative overflow-hidden">
      {/* 動態背景裝飾 */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Volume2 className="h-4 w-4 text-white" />
              </motion.div>
              <span className="text-xl font-semibold text-white">樊登聽書</span>
            </motion.div>
            <motion.p 
              className="text-gray-400 leading-relaxed"
              whileHover={{ color: "#9CA3AF" }}
              transition={{ duration: 0.3 }}
            >
              樊登老師親自導讀《主角模式》，
              用聲音的力量改變你的人生。
            </motion.p>
          </motion.div>

          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-white">快速連結</h3>
            <ul className="space-y-2">
              {[
                { href: "#about", label: "關於書籍" },
                { href: "#features", label: "聽書優勢" },
                { href: "#claim", label: "免費領取" }
              ].map((link, index) => (
                <motion.li key={index}>
                  <motion.a 
                    href={link.href} 
                    className="hover:text-yellow-400 transition-colors duration-300"
                    whileHover={{ scale: 1.05, x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {link.label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-white">聽書資訊</h3>
            <ul className="space-y-3">
              {[
                { icon: Clock, text: "總時長 8 小時", color: "text-yellow-400" },
                { icon: Users, text: "150,000+ 人已領取", color: "text-green-400" },
                { icon: Headphones, text: "樊登親自導讀", color: "text-orange-400" }
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  className="flex items-center space-x-2"
                  whileHover={{ scale: 1.05, x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  >
                    <item.icon className={`h-4 w-4 ${item.color}`} />
                  </motion.div>
                  <span>{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold text-white">聯絡我們</h3>
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05, x: 5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Mail className="h-4 w-4 text-yellow-400" />
              </motion.div>
              <span>service@fandeng-audio.com</span>
            </motion.div>
            <motion.p 
              className="text-gray-400 text-sm"
              whileHover={{ color: "#9CA3AF" }}
              transition={{ duration: 0.3 }}
            >
              有任何問題或建議，歡迎隨時聯絡我們。
            </motion.p>
          </motion.div>
        </div>

        <motion.div 
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.p
            whileHover={{ color: "#9CA3AF" }}
            transition={{ duration: 0.3 }}
          >
            &copy; 2025 樊登聽書. 保留所有權利。
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}
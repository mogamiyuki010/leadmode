import { Card, CardContent } from "./ui/card";
import { Quote, Target, Lightbulb, Heart, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import fandengPhoto from "figma:asset/d96afcdfbeacd90b28f4c1004215906b6f7955bb.png";

export function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const cardHoverVariants = {
    hover: {
      scale: 1.05,
      y: -10,
      rotateX: 5,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 via-white to-yellow-50 relative overflow-hidden">
      {/* 動態背景裝飾 */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full opacity-30"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full mb-8 shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-5 w-5 mr-2" />
            </motion.div>
            關於這本改變人生的書
          </motion.div>
          
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            關於《主角模式》
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            樊登老師最新力作，教你如何從被動的人生觀眾，轉變為主動的人生主角
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={fandengPhoto}
                alt="樊登老師"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl border-2 border-orange-200"
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"
                whileHover={{ opacity: 0.8 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute bottom-6 left-6 text-white">
                <motion.p 
                  className="text-sm opacity-90"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 0.9, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  樊登讀書創始人
                </motion.p>
                <motion.h3 
                  className="text-2xl font-bold"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  樊登老師
                </motion.h3>
              </div>
              
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl opacity-0 blur-sm"
                whileHover={{ opacity: 20 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                <Quote className="h-16 w-16 text-yellow-600 mb-6" />
              </motion.div>
              
              <motion.blockquote 
                className="text-2xl text-gray-700 leading-relaxed italic font-medium"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                "每個人都應該成為自己人生的主角，而不是別人故事中的配角。
                這本書將告訴你如何掌控自己的人生劇本。"
              </motion.blockquote>
              
              <motion.cite 
                className="text-gray-500 not-italic text-lg"
                whileHover={{ scale: 1.05, color: "#f97316" }}
                transition={{ duration: 0.3 }}
              >
                — 樊登
              </motion.cite>
            </div>
            
            <motion.div 
              className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl border-2 border-yellow-200 shadow-lg"
              whileHover={{ scale: 1.02, y: -3 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl opacity-0 blur-sm"
                whileHover={{ opacity: 15 }}
                transition={{ duration: 0.3 }}
              />
              
              <div className="flex items-center mb-3 relative z-10">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="h-5 w-5 text-yellow-600 mr-2" />
                </motion.div>
                <span className="text-sm font-medium text-yellow-600">核心理念</span>
              </div>
              <p className="text-gray-700 leading-relaxed relative z-10">
                透過系統性的思維框架和實踐方法，幫助讀者建立主角意識，
                從被動接受轉向主動創造，實現真正的人生自主。
              </p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              icon: Target,
              title: "明確目標",
              description: "學會設定清晰的人生目標，不再迷茫於他人的期望中，建立屬於自己的人生導航系統",
              color: "yellow",
              gradient: "from-yellow-500 to-yellow-600"
            },
            {
              icon: Lightbulb,
              title: "主動思考",
              description: "培養獨立思考能力，做出符合自己價值觀的決定，擺脫他人的思維束縛",
              color: "orange",
              gradient: "from-orange-500 to-orange-600"
            },
            {
              icon: Heart,
              title: "內在動力",
              description: "發現內在的驅動力，持續成長並實現自我價值，成為真正的人生主角",
              color: "red",
              gradient: "from-red-500 to-red-600"
            }
          ].map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <motion.div
                variants={cardHoverVariants}
                whileHover="hover"
                className="relative"
              >
                <Card className={`border-2 border-${item.color}-200 hover:border-${item.color}-400 hover:shadow-2xl transition-all duration-300 bg-white shadow-lg h-full`}>
                  <motion.div
                    className={`absolute -inset-1 bg-gradient-to-r ${item.gradient} rounded-lg opacity-0 blur-sm`}
                    whileHover={{ opacity: 15 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <CardContent className="p-8 text-center space-y-6 relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <item.icon className={`h-16 w-16 text-${item.color}-600 mx-auto`} />
                    </motion.div>
                    
                    <motion.h3 
                      className="text-2xl font-bold text-gray-800"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.title}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-gray-600 leading-relaxed"
                      whileHover={{ color: "#374151" }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.description}
                    </motion.p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
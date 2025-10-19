import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Volume2, Clock, Smartphone, Headphones, Download, Star, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export function FeaturesSection() {
  const features = [
    {
      icon: Volume2,
      title: "樊登親自導讀",
      description: "樊登老師親自錄製導讀，用他獨特的解讀方式，讓你更深刻理解書中精髓",
      color: "text-yellow-600",
      bgColor: "bg-gradient-to-br from-yellow-50 to-yellow-100",
      borderColor: "border-yellow-200",
      hoverBorderColor: "hover:border-yellow-400"
    },
    {
      icon: Clock,
      title: "8小時精華濃縮",
      description: "將厚重書籍濃縮為8小時精華內容，節省你的寶貴時間，高效吸收知識",
      color: "text-orange-600",
      bgColor: "bg-gradient-to-br from-orange-50 to-orange-100",
      borderColor: "border-orange-200",
      hoverBorderColor: "hover:border-orange-400"
    },
    {
      icon: Smartphone,
      title: "隨時隨地收聽",
      description: "支援手機、平板、電腦多平台播放，通勤、運動、休息時都能輕鬆學習",
      color: "text-amber-600",
      bgColor: "bg-gradient-to-br from-amber-50 to-amber-100",
      borderColor: "border-amber-200",
      hoverBorderColor: "hover:border-amber-400"
    },
    {
      icon: Headphones,
      title: "專業音質",
      description: "錄音室級別音質，配合舒適的語調節奏，讓你享受最佳的聽書體驗",
      color: "text-yellow-700",
      bgColor: "bg-gradient-to-br from-yellow-50 to-yellow-100",
      borderColor: "border-yellow-200",
      hoverBorderColor: "hover:border-yellow-400"
    },
    {
      icon: Download,
      title: "離線下載",
      description: "支援離線下載功能，無網路也能收聽，不受環境限制持續學習",
      color: "text-orange-700",
      bgColor: "bg-gradient-to-br from-orange-50 to-orange-100",
      borderColor: "border-orange-200",
      hoverBorderColor: "hover:border-orange-400"
    },
    {
      icon: Star,
      title: "終身有效",
      description: "一次領取終身有效，可以反覆收聽，讓知識在你心中深深扎根",
      color: "text-amber-700",
      bgColor: "bg-gradient-to-br from-amber-50 to-amber-100",
      borderColor: "border-amber-200",
      hoverBorderColor: "hover:border-amber-400"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
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

  return (
    <section id="features" className="py-24 bg-white relative overflow-hidden">
      {/* 動態背景裝飾 */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full opacity-40"
            style={{
              left: `${5 + i * 10}%`,
              top: `${10 + (i % 4) * 20}%`,
            }}
            animate={{
              y: [-15, 15, -15],
              x: [-5, 5, -5],
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
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
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mb-8 text-white shadow-xl"
            whileHover={{ scale: 1.05, y: -3 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-5 w-5 mr-2" />
            </motion.div>
            聽書六大優勢
            
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-0 blur-sm"
              whileHover={{ opacity: 30 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            為什麼選擇聽書？
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            解放雙眼，用聲音學習。樊登親自導讀，讓你在任何場景都能高效吸收知識
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  rotateX: 5
                }}
                transition={{ duration: 0.3 }}
                className="relative h-full"
              >
                <Card className={`${feature.borderColor} ${feature.hoverBorderColor} border-2 hover:shadow-2xl transition-all duration-500 bg-white h-full relative overflow-hidden`}>
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg opacity-0 blur-sm"
                    whileHover={{ opacity: 15 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* 卡片內部動態背景 */}
                  <motion.div
                    className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-l from-yellow-100 to-transparent rounded-bl-full opacity-50"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.7, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  />
                  
                  <CardHeader className="pb-4 relative z-10">
                    <motion.div 
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${feature.bgColor} mb-6 shadow-lg`}
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 360
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <feature.icon className={`h-8 w-8 ${feature.color}`} />
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CardTitle className="text-2xl text-gray-800 font-bold">
                        {feature.title}
                      </CardTitle>
                    </motion.div>
                  </CardHeader>
                  
                  <CardContent className="relative z-10">
                    <motion.p 
                      className="text-gray-600 leading-relaxed"
                      whileHover={{ color: "#374151" }}
                      transition={{ duration: 0.3 }}
                    >
                      {feature.description}
                    </motion.p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div 
            className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 border-2 border-orange-200 shadow-xl relative overflow-hidden"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl opacity-0 blur-sm"
              whileHover={{ opacity: 15 }}
              transition={{ duration: 0.3 }}
            />
            
            <motion.h3 
              className="text-2xl font-bold mb-4 text-gray-800 relative z-10"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              超值內容，完全免費
            </motion.h3>
            
            <motion.p 
              className="text-gray-600 mb-6 leading-relaxed relative z-10"
              whileHover={{ color: "#374151" }}
              transition={{ duration: 0.3 }}
            >
              原價 NT$299 的專業聽書內容，現在完全免費領取
            </motion.p>
            
            <motion.div 
              className="flex justify-center space-x-8 text-sm text-gray-500 relative z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              {[
                "樊登親自導讀",
                "8小時完整內容", 
                "支援離線收聽",
                "終身有效使用"
              ].map((item, index) => (
                <motion.span 
                  key={index}
                  whileHover={{ scale: 1.1, color: "#f97316" }}
                  transition={{ duration: 0.3 }}
                >
                  • {item}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
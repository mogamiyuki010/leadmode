import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Volume2, Users, Clock, CheckCircle, Sparkles, Star, Gift } from "lucide-react";
import { motion } from "motion/react";

export function CTASection() {
  const benefits = [
    "樊登親自導讀，專業解析",
    "8小時精華內容，價值NT$299",
    "支援多平台收聽", 
    "離線下載，隨時學習",
    "終身有效，反覆收聽"
  ];

  const stats = [
    { icon: Users, value: "150,000+", label: "已領取人數", color: "text-blue-600" },
    { icon: Clock, value: "8小時", label: "精華內容", color: "text-green-600" },
    { icon: Star, value: "4.9/5", label: "用戶評分", color: "text-yellow-600" }
  ];

  return (
    <section id="claim" className="py-24 bg-gradient-to-br from-gray-50 via-white to-yellow-50 relative overflow-hidden">
      {/* 動態背景裝飾 */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-gradient-to-r from-yellow-300/30 to-orange-300/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full mb-6 shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Gift className="h-5 w-5 mr-2" />
              </motion.div>
              限時免費領取
            </motion.div>

            <motion.h2 
              className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              立即免費領取
              <br />
              <motion.span 
                className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                《主角模式》聽書版
              </motion.span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-600 leading-relaxed"
              whileHover={{ color: "#374151" }}
              transition={{ duration: 0.3 }}
            >
              樊登老師親自導讀，8小時精華內容，
              價值NT$299，現在完全免費！只需要填寫基本資訊即可領取。
            </motion.p>

            <motion.ul 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  </motion.div>
                  <span className="text-gray-700 text-lg font-medium">{benefit}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div 
              className="grid grid-cols-3 gap-6 pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  >
                    <stat.icon className={`h-8 w-8 ${stat.color} mx-auto mb-2`} />
                  </motion.div>
                  <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                  <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <Card className="bg-white/90 backdrop-blur-lg border-2 border-orange-200 shadow-2xl relative overflow-hidden">
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg opacity-0 blur-sm"
                  whileHover={{ opacity: 20 }}
                  transition={{ duration: 0.3 }}
                />
                
                <CardContent className="p-10 space-y-8 relative z-10">
                  <motion.div 
                    className="text-center space-y-4"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="relative"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                        <Volume2 className="h-8 w-8 text-white" />
                      </div>
                      <motion.div
                        className="absolute -inset-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl opacity-0 blur-sm"
                        whileHover={{ opacity: 30 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                    
                    <h3 className="text-3xl font-bold text-gray-800">免費領取聽書</h3>
                    <p className="text-orange-600 text-lg font-medium">填寫資訊，立即獲取下載連結</p>
                    
                    <motion.div 
                      className="bg-gradient-to-r from-yellow-100 to-orange-100 p-4 rounded-lg border-2 border-yellow-300"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-orange-700 font-medium">
                        ⭐ 原價 NT$299，現在完全免費
                      </p>
                    </motion.div>
                  </motion.div>

                  <div className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <label className="block text-lg font-medium mb-3 text-gray-700">
                        姓名 *
                      </label>
                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Input 
                          type="text" 
                          placeholder="請輸入您的真實姓名"
                          className="bg-gray-50 border-2 border-gray-200 text-gray-800 placeholder:text-gray-400 h-12 text-lg focus:border-orange-400 focus:bg-white transition-all duration-300"
                          required
                        />
                      </motion.div>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <label className="block text-lg font-medium mb-3 text-gray-700">
                        電子郵件 *
                      </label>
                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Input 
                          type="email" 
                          placeholder="請輸入您的電子郵件"
                          className="bg-gray-50 border-2 border-gray-200 text-gray-800 placeholder:text-gray-400 h-12 text-lg focus:border-orange-400 focus:bg-white transition-all duration-300"
                          required
                        />
                      </motion.div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="relative"
                    >
                      <Button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold py-4 text-lg shadow-xl relative overflow-hidden">
                        <motion.div
                          className="absolute inset-0 bg-white/20"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.6 }}
                        />
                        <Volume2 className="h-5 w-5 mr-2 relative z-10" />
                        <span className="relative z-10">立即免費領取聽書</span>
                      </Button>
                    </motion.div>
                  </div>

                  <motion.div 
                    className="text-center space-y-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <p className="text-sm text-gray-500 leading-relaxed">
                      提交後將立即發送下載連結至您的郵箱
                    </p>
                    <p className="text-xs text-gray-400">
                      我們承諾保護您的個人資料，絕不濫用或外洩
                    </p>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Users, Volume2, BookOpen, Star, Award, Quote, Headphones, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import bookCover from "figma:asset/d1cb4d8c09bfab94126499471f23a2970dfaa0ca.png";
import fandengPhoto from "figma:asset/d96afcdfbeacd90b28f4c1004215906b6f7955bb.png";

export function HeroSection() {
  const floatingElements = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    size: Math.random() * 20 + 10,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
  }));

  return (
    <section className="py-20 bg-gradient-to-br from-white via-yellow-50 to-orange-50 text-gray-900 relative overflow-hidden">
      {/* 動態背景元素 */}
      <div className="absolute inset-0">
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute bg-gradient-to-r from-yellow-300/20 to-orange-300/20 rounded-full"
            style={{
              width: element.size,
              height: element.size,
              left: `${element.x}%`,
              top: `${element.y}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4 + element.delay,
              repeat: Infinity,
              ease: "easeInOut",
              delay: element.delay,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Badge className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-medium shadow-lg">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <Award className="h-5 w-5 mr-2" />
                  </motion.div>
                  限時免費領取
                </Badge>
              </motion.div>
              
              <motion.h1 
                className="text-5xl lg:text-6xl font-bold leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                樊登《主角模式》
                <br />
                <motion.span 
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  免費聽書領取
                  <motion.div
                    className="absolute -inset-2 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-lg blur-xl"
                    animate={{ opacity: [0, 0.5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.span>
              </motion.h1>
            </motion.div>
            
            <motion.p 
              className="text-xl text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              用聲音的力量改變人生！樊登老師親自導讀《主角模式》，
              教你如何從人生配角轉變為主角。無需閱讀，隨時隨地用聽的就能成長。
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <Button size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 shadow-xl text-white relative overflow-hidden group">
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <Headphones className="h-5 w-5 mr-2 relative z-10" />
                  <span className="relative z-10">立即免費領取</span>
                </Button>
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg opacity-0 blur-sm"
                  whileHover={{ opacity: 30 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-2 border-orange-300 text-orange-600 hover:bg-orange-50 shadow-lg">
                  <Volume2 className="h-5 w-5 mr-2" />
                  試聽片段
                </Button>
              </motion.div>
            </motion.div>

            <motion.div 
              className="flex items-center space-x-8 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {[
                { icon: Users, text: "已有 150,000+ 人領取", color: "text-blue-600" },
                { icon: Headphones, text: "總時長 8 小時", color: "text-green-600" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center space-x-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  >
                    <item.icon className={`h-5 w-5 ${item.color}`} />
                  </motion.div>
                  <span className="text-gray-600 font-medium">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            className="lg:justify-self-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="grid gap-6">
              {/* 書籍封面卡片 */}
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="p-8 bg-white/80 backdrop-blur-sm border-2 border-orange-200 shadow-2xl hover:shadow-3xl transition-all duration-300">
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg opacity-0 blur-sm"
                    whileHover={{ opacity: 20 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <div className="flex items-center justify-center mb-6 relative z-10">
                    <motion.div
                      className="relative"
                      whileHover={{ rotateY: 15, scale: 1.05 }}
                      style={{ transformStyle: "preserve-3d" }}
                      transition={{ duration: 0.5 }}
                    >
                      <img
                        src={bookCover}
                        alt="樊登《主角模式》書籍封面"
                        className="w-64 h-80 object-cover rounded-lg shadow-2xl border-2 border-orange-200"
                      />
                      <motion.div 
                        className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg"
                        animate={{ 
                          rotate: 360,
                          scale: [1, 1.1, 1] 
                        }}
                        transition={{ 
                          rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                          scale: { duration: 2, repeat: Infinity }
                        }}
                      >
                        <Volume2 className="h-6 w-6 text-white" />
                      </motion.div>
                    </motion.div>
                  </div>
                  
                  <div className="text-center space-y-3 relative z-10">
                    <motion.h3 
                      className="text-2xl font-bold text-gray-800"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      《主角模式》聽書版
                    </motion.h3>
                    <p className="text-orange-600 font-medium">樊登親自導讀｜總時長8小時</p>
                    <div className="flex justify-center items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 1 + i * 0.1 }}
                          whileHover={{ scale: 1.2, rotate: 180 }}
                        >
                          <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        </motion.div>
                      ))}
                      <span className="ml-2 text-gray-600 font-medium">(4.9/5 評分)</span>
                    </div>
                    <motion.div 
                      className="pt-4 border-t border-orange-200"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Quote className="h-6 w-6 text-orange-500 mx-auto mb-2" />
                      <p className="text-sm text-gray-600 italic leading-relaxed">
                        "用聲音的力量，成為自己人生的主角"
                      </p>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>

              {/* 樊登老師照片卡片 */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.02, y: -3 }}
              >
                <Card className="p-6 bg-white/80 backdrop-blur-sm border-2 border-yellow-200 shadow-lg hover:shadow-xl transition-all duration-300">
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg opacity-0 blur-sm"
                    whileHover={{ opacity: 15 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <div className="flex items-center space-x-4 relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={fandengPhoto}
                        alt="樊登老師"
                        className="w-16 h-16 rounded-full border-2 border-orange-300 shadow-lg object-cover"
                      />
                    </motion.div>
                    <div className="flex-1 space-y-1">
                      <motion.h4 
                        className="text-lg font-semibold text-gray-800"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        樊登
                      </motion.h4>
                      <p className="text-sm text-orange-600 font-medium">樊登讀書創始人</p>
                      <p className="text-xs text-gray-500">親自導讀｜專業講師</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
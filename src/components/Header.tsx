import { Button } from "./ui/button";
import { BookOpen, Volume2 } from "lucide-react";
import { motion } from "motion/react";

export function Header() {
  return (
    <motion.header 
      className="border-b border-gray-200 bg-white/90 backdrop-blur-lg sticky top-0 z-50 shadow-sm"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div 
          className="flex items-center space-x-3"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="relative"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
              <Volume2 className="h-5 w-5 text-white" />
            </div>
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl opacity-0 blur-sm"
              whileHover={{ opacity: 30 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          <div>
            <span className="text-xl font-bold text-gray-900">樊登聽書</span>
            <div className="text-xs text-orange-600">《主角模式》免費領取</div>
          </div>
        </motion.div>
        
        <nav className="hidden md:flex items-center space-x-8">
          {[
            { href: "#about", label: "關於書籍" },
            { href: "#features", label: "聽書優勢" },
            { href: "#claim", label: "免費領取" }
          ].map((item, index) => (
            <motion.a 
              key={item.href}
              href={item.href} 
              className="text-gray-600 hover:text-orange-600 transition-colors duration-300 relative group font-medium"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              {item.label}
              <motion.span 
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-300 group-hover:w-full"
                layoutId="underline"
              />
            </motion.a>
          ))}
        </nav>

        <motion.div 
          className="flex items-center space-x-3"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <Button size="sm" className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 shadow-lg text-white relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <BookOpen className="h-4 w-4 mr-2 relative z-10" />
              <span className="relative z-10">立即領取</span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.header>
  );
}
import { Card, CardContent, CardHeader } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { MessageCircle, Heart, Share2 } from "lucide-react";

export function CommunitySection() {
  const discussions = [
    {
      id: 1,
      user: "李明華",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      title: "第三章「主角思維」的實踐心得",
      content: "讀完第三章後，我開始嘗試用主角思維來看待工作中的挑戰。發現當我把自己當作故事的主角時，遇到困難反而變成了成長的機會...",
      time: "2小時前",
      likes: 24,
      comments: 8,
      category: "實踐分享"
    },
    {
      id: 2,
      user: "王小美",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
      title: "書中提到的「內在驅動力」如何培養？",
      content: "樊登老師在書中多次提到內在驅動力的重要性，但具體該如何培養呢？有沒有實際的方法和步驟？歡迎大家分享經驗...",
      time: "4小時前",
      likes: 15,
      comments: 12,
      category: "疑問討論"
    },
    {
      id: 3,
      user: "張德勝",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      title: "主角模式與傳統教育觀念的衝突",
      content: "在閱讀過程中，我發現主角模式的理念與我們從小接受的一些傳統觀念有衝突。比如謙遜、順從等，大家怎麼看？",
      time: "6小時前",
      likes: 31,
      comments: 18,
      category: "深度思考"
    }
  ];

  return (
    <section id="community" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            社群互動預覽
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            看看其他讀者都在討論什麼，加入這個充滿智慧的讀書社群
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {discussions.map((discussion) => (
            <Card key={discussion.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={discussion.avatar} />
                    <AvatarFallback>{discussion.user[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-sm">{discussion.user}</p>
                      <Badge variant="secondary" className="text-xs">
                        {discussion.category}
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-500">{discussion.time}</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <h3 className="font-semibold text-gray-900 leading-tight">
                  {discussion.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {discussion.content}
                </p>
                
                <div className="flex items-center justify-between pt-2 border-t">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-red-500 transition-colors">
                      <Heart className="h-4 w-4" />
                      <span className="text-sm">{discussion.likes}</span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500 transition-colors">
                      <MessageCircle className="h-4 w-4" />
                      <span className="text-sm">{discussion.comments}</span>
                    </button>
                  </div>
                  <button className="text-gray-500 hover:text-gray-700 transition-colors">
                    <Share2 className="h-4 w-4" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
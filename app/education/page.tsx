"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, PlayCircle } from "lucide-react"

export default function EducationPage() {
  const [currentPage, setCurrentPage] = useState(0)

  const educationContent = [
    {
      title: "碳足迹科普视频",
      content: `以下是一段关于碳足迹的科普视频，通过观看视频可以更直观地了解碳足迹的概念和影响。`,
      hasVideo: true,
    },
    {
      title: "一、碳足迹是什么？",
      content: `简单来说，碳足迹就是我们每个人、每个家庭、每个公司，甚至整个国家，在一段时间里（比如一天、一个月、一年），因为各种活动产生的温室气体总量。这里面最主要的就是二氧化碳，所以通常用二氧化碳的量来表示，就好像给这些温室气体的排放量称个"体重"。

想象一下，你早上起床打开灯，用电就产生了碳足迹；开车去上班，汽油燃烧又增加了碳足迹；中午点份外卖，从食材生产到包装运输，每一步都在留下"碳脚印"。这些加起来，就是你一天的碳足迹。就像我们走路会留下脚印一样，我们的生活每消耗一份能源、每产生一点垃圾，都会在环境中留下"碳排放"的痕迹。`,
      hasVideo: false,
    },
    {
      title: "二、碳足迹从哪里来？",
      content: `（一）家里的"碳排放大户"
1. 用电：家里的各种电器，像冰箱、电视、洗衣机，只要插着电、开着机，就在消耗电力。如果当地发电主要靠烧煤，那每度电都会产生不少二氧化碳。比如，一台普通空调开一整天，可能就会产生好几千克的二氧化碳。
2. 用气：用天然气煮饭、烧水，虽然没有明显的黑烟，但燃烧过程同样会产生二氧化碳。要是冬天用燃气供暖，那碳排放量还会更高。
3. 取暖和制冷：夏天空调开得温度过低，冬天暖气开得太足，不仅浪费能源，还会大大增加碳足迹。

（二）出行路上的碳排放
1. 私家车：自己开车虽然方便，但汽车烧油排放的尾气里，有大量二氧化碳。特别是在堵车的时候，发动机空转，每一分钟都在"吐"二氧化碳。开一辆普通的汽油车，每跑100公里，可能就会产生20多千克的二氧化碳。
2. 飞机：飞机飞得又快又远，可它的碳排放量也相当惊人。一次长途飞行产生的碳足迹，可能比普通人一个月日常出行的总和还多。因为飞机在高空飞行，需要消耗大量的航空燃油。
3. 公共交通：相比之下，公交车、地铁就"环保"多了。一辆公交车能载几十人，大家分摊下来，每个人产生的碳足迹就少很多。地铁靠电力驱动，如果是清洁电力，那碳排放量就更低了。
4. 绿色出行：骑自行车、走路，这两种方式最环保！完全不产生碳排放，还能锻炼身体，简直一举两得。

（三）买买买背后的碳足迹
1. 商品生产：我们买的每一件衣服、每一部手机、每一个玩具，在生产过程中都要消耗大量的能源和资源。比如，生产一件普通的T恤，从棉花种植、纺织、染色到裁剪加工，每个环节都有碳排放。
2. 包装和运输：商品的包装也是个"隐形杀手"。过度包装的塑料袋、纸盒，不仅浪费资源，生产这些包装材料也会产生碳足迹。而且商品从工厂运到仓库，再到商店，最后送到我们手里，运输过程中的油耗同样不可忽视。
3. 进口商品：购买进口商品的碳足迹通常会更高，因为它们要经过长途运输，可能会通过轮船、飞机跨越海洋和大陆，这一路上的碳排放可不少。

（四）餐桌上的碳排放
1. 肉类生产：我们常吃的牛肉、羊肉，它们的碳足迹可不低。牛在消化过程中会产生大量的甲烷，这是一种比二氧化碳更强的温室气体。而且养殖牛羊需要消耗大量的饲料和水资源，这些背后也都有碳排放。
2. 粮食浪费：每次倒掉吃不完的饭菜，其实就是在浪费粮食生产过程中消耗的能源和资源，这也间接产生了碳足迹。据统计，全球每年浪费的粮食产生的碳排放量非常巨大。`,
      hasVideo: false,
    },
    {
      title: "三、碳足迹的“家族成员”",
      content: `（一）第一碳足迹
直接产生于我们日常使用化石能源的活动。例如，自家汽车加油后行驶，汽油在发动机中燃烧，会直接释放二氧化碳；家庭使用煤气灶做饭，煤气燃烧同样会产生二氧化碳，这些都属于第一碳足迹。

（二）第二碳足迹
这部分更为"隐蔽"，与我们购买和使用的商品、服务相关。就拿一件普通的棉质T恤来说，从棉花种植开始，需要使用化肥、农药，这涉及能源消耗和碳排放；棉花采摘后运送到纺织厂，运输过程会产生碳排放；纺织厂将棉花纺成纱线、织成布料，染色、加工成T恤，每个环节都离不开能源，都会产生二氧化碳；最后，T恤经过长途运输，摆上商店货架，我们购买回家，整个过程产生的碳排放都算在第二碳足迹里。

（三）隐含碳足迹
除了上述两种，还有一种容易被忽视的隐含碳足迹。比如，我们住的房子，建造过程中需要消耗大量的水泥、钢材、砖块等建筑材料，这些材料在生产过程中会产生大量的碳排放；我们使用的手机、电脑等电子产品，从芯片制造、组装到包装运输，背后也隐藏着巨大的碳排放量，这些都属于隐含碳足迹。`,
      hasVideo: false,
    },
    {
      title: "四、怎么知道自己的碳足迹有多少？",
      content: `现在有很多方便的工具可以帮我们计算碳足迹。手机上可以下载专门的碳足迹计算APP，打开后，只要输入一些生活信息，比如每天用电多少度、开车多少公里、买了什么东西，APP就能自动算出你的碳足迹。也可以在网页上搜索"碳足迹计算器"，按照提示填写数据，同样能得到结果。

不过，这些计算结果只能是个大概，因为不同地区的能源结构、生产方式都不一样，碳排放的情况也有差别。但通过计算，我们能知道自己生活中哪些方面产生的碳足迹比较多，从而有针对性地做出改变。`,
      hasVideo: false,
    },
    {
      title: "五、为啥要关注碳足迹？",
      content: `可能有人会问，我一个人产生的碳足迹能有多少？何必这么麻烦？其实，全球有70多亿人，如果每个人都不注意减少碳足迹，那加起来的总量就非常可怕了。温室气体排放过多，会导致全球气候变暖，带来一系列严重的问题。

比如，冰川融化，海平面上升，一些沿海城市和岛屿可能会被淹没；气候变得更极端，夏天更热，冬天更冷，暴雨、干旱、台风等自然灾害也会越来越频繁。这些问题不仅会影响我们这一代人的生活，还会给子孙后代留下巨大的难题。所以，关注碳足迹、减少碳排放，是为了保护我们共同的地球家园。`,
      hasVideo: false,
    },
    {
      title: "六、普通人能为减少碳足迹做些啥？",
      content: `（一）生活节能小妙招
1. 电器使用：不用的电器及时拔掉插头，因为电器在待机状态下也会耗电；电视、电脑屏幕亮度调适中，既能保护眼睛，又能省电；使用节能灯泡，虽然价格高一点，但长期下来能省不少电和钱。
2. 用水：淘米水可以用来洗菜、洗碗筷，洗完菜的水还能用来拖地；安装节水型水龙头和马桶，减少水资源浪费。
3. 取暖制冷：夏天空调温度设置在26℃左右，冬天暖气温度别开太高，适当增减衣物更环保。

（二）绿色出行行动起来
1. 短距离出行：如果路程不远，尽量选择步行或骑自行车，既锻炼身体，又零排放。现在很多城市都有共享单车，扫码就能骑，非常方便。
2. 公共交通优先：出门上班、购物，优先选择地铁、公交车、有轨电车等公共交通工具。如果和同事、邻居顺路，还可以拼车，分摊碳排放。
3. 减少不必要的出行：现在线上办公、网购很发达，一些事情能在网上解决就别出门，既节省时间，又能减少碳排放。

（三）理性消费新观念
1. 少买多利用：买东西前先问问自己是不是真的需要，不盲目跟风购物。衣服、鞋子能穿的就继续穿，旧家具、旧电器可以翻新再用，减少不必要的消费。
2. 选择环保产品：购买商品时，优先选择可回收、可降解材料包装的产品；尽量选择本地生产的商品，减少运输过程中的碳排放；购买节能家电，虽然价格贵一点，但长期使用更节能、更省钱。
3. 自带用品：出门购物自带环保袋，减少塑料袋使用；自带水杯、餐具，少用一次性用品。现在很多咖啡店、奶茶店，自带杯子还能享受优惠呢。

（四）饮食也能很低碳
1. 多吃素菜：每周可以安排几天"素食日"，多吃蔬菜、水果、豆类、谷物，减少肉类消费。这样不仅对身体好，还能大大降低碳足迹。
2. 避免浪费：做饭时根据家人食量准备食材，吃饭时吃多少盛多少，餐厅就餐吃不完就打包带走，珍惜每一粒粮食。`,
      hasVideo: false,
    },
    {
      title: "七、总结",
      content: `碳足迹和我们的生活紧密相连，减少碳足迹不是一件遥不可及的大事，而是可以从生活中的每一件小事做起。只要我们每个人都行动起来，养成低碳生活的好习惯，就能为保护地球贡献自己的一份力量！`,
      hasVideo: false,
    },
  ]

  const totalPages = educationContent.length

  const goToNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-green-800 dark:text-green-300 mb-8">碳足迹知识科普</h1>

        <Card className="max-w-3xl mx-auto">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-green-700 dark:text-green-400 mb-4">
              {educationContent[currentPage].title}
            </h2>

            {educationContent[currentPage].hasVideo ? (
              <div className="mb-6">
                <div className="relative w-full pt-[56.25%] bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden mb-4">
                  <iframe
                    src="//player.bilibili.com/player.html?isOutside=true&aid=551825834&bvid=BV17i4y1y7ZH&cid=515214539&p=1"
                    scrolling="no"
                    border="0"
                    frameBorder="no"
                    framespacing="0"
                    allowFullScreen={true}
                    className="absolute top-0 left-0 w-full h-full"
                  ></iframe>
                </div>
                <div className="flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
                  <PlayCircle className="h-4 w-4 mr-2" />
                  <span>视频来源: Bilibili</span>
                </div>
              </div>
            ) : null}

            <div className="prose prose-green max-w-none">
              {educationContent[currentPage].content.split("\n\n").map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-700 dark:text-gray-300">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="flex justify-between items-center mt-8">
              <Button
                variant="outline"
                onClick={goToPreviousPage}
                disabled={currentPage === 0}
                className="flex items-center"
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                上一页
              </Button>

              <div className="text-sm text-gray-500">
                {currentPage + 1} / {totalPages}
              </div>

              <Button
                onClick={goToNextPage}
                disabled={currentPage === totalPages - 1}
                className="flex items-center bg-green-600 hover:bg-green-700"
              >
                下一页
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

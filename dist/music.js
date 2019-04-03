const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "Way Back Home",
        artist: 'Shaun',
        url: 'http://www.ytmp3.cn/down/52679.mp3',
        cover: 'http://img.ytmp3.cn/image/62.jpg',

      },
      {
        name: '绝代风华',
        artist: '许嵩',
        url: 'http://www.ytmp3.cn/down/55214.mp3',
        cover: 'http://img.ytmp3.cn/image/100.jpg',
      },
      {
        name: '化身孤岛的鲸',
        artist: '周深',
        url: 'http://www.ytmp3.cn/down/51024.mp3',
        cover: 'http://q1.qlogo.cn/g?b=qq&nk=751518364&s=100&t=1553067449',
      },
      {
        name: '天龙八部之宿敌',
        artist: '许嵩',
        url: 'http://other.web.ra01.sycdn.kuwo.cn/resource/n3/128/38/40/2115920621.mp3',
        cover: 'http://star.kuwo.cn/star/starheads/180/38/68/1728322477.jpg',
      },
      {
        name: 'Never Be Alone',
        artist: 'Shawn Mendes',
        url: 'http://other.web.rl01.sycdn.kuwo.cn/resource/n2/86/11/819161600.mp3',
        cover: 'http://star.kuwo.cn/star/starheads/180/66/87/4162243566.jpg',
      },
      {
        name: '奇跡',
        artist: 'Che Nelle',
        url: 'http://ni01.sycdn.kuwo.cn/resource/n3/71/88/610263361.mp3',
        cover: 'https://pic.xiami.net/images/album/img5/35105/21028891651512560595.jpg?x-oss-process=image/resize,limit_0,s_410,m_fill',
      },
      {
        name: '有可能的夜晚',
        artist: '曾轶可',
        url: 'http://m10.music.126.net/20190403175002/839b2dd7d6c25978853f1ffdfde136e7/ymusic/5652/050b/0f09/a86af43e662ac12f772c8cf96cf72861.mp3',
        cover: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1619558654,2155524714&fm=58&bpow=600&bpoh=900',
      },
      {
        name: '一个人的巴黎',
        artist: '董又霖',
        url: 'http://m10.music.126.net/20190403175645/ac7f149745b8c19155aa2f518bbe2eb2/ymusic/d510/cd8b/b3c6/27b8c15ded152a8b47e4a345a9745936.mp3',
        cover: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=148119190,3865574119&fm=58&bpow=4712&bpoh=7060',
      },
      {
        name: '生僻字',
        artist: '陈柯宇',
        url: 'http://m10.music.126.net/20190403175739/484e34a457f296f16041789bda416842/ymusic/5b06/2890/55c0/b4201bcf1f6135427ad0cf1b667c6451.mp3',
        cover: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2859602115,3346906762&fm=58&bpow=480&bpoh=480',
      },
    ]
});
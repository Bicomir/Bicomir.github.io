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
      }
    ]
});
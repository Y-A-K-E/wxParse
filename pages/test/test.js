Page({
  data: {
    blogid:0,
    htmlText: '',
    nextshow:false,
    prevshow:false,
  },



onLoad(options){
  let _this =this;

  let html = '';
  let id = 0;
  //分类id
  if (typeof options.id === "undefined" || options.id == 73 ) {
    id = 73;
    html = '<p clss="bug-info">A链接跳转到下一篇博文 --&gt; [<a href=\"https:\/\/www.yge.me\/show\/45.html\" target=\"_blank\" rel=\"noopener\">AS:RD 16人同时游戏补丁【客户端\/服务端】<\/a>]<\/p><br><br><h3>启动器<\/h3>\r\n<p>这个不是必须.主要是用于启动切换\/自动切换<\/p>\r\n<p>&nbsp;<\/p>\r\n<p><img src=\"https:\/\/r.photo.store.qq.com\/psc?\/V13iVwZo2obvUj\/l8V*4kN5EKtnl2fKnrChMJ7iLsTXumkVF79pWC*hwJWUc6sTQw8nYohkg2pDPzOHNBkjBSwRTChqtZ3O62GyYQ!!\/mnull&amp;bo=HAHhARwB4QERCT4!&amp;rf=photolist&amp;t=5\/r\/_yake_qzoneimgout.png\" alt=\"\" width=\"284\" height=\"481\" \/><\/p>\r\n<p>&nbsp;<\/p>\r\n<h2>安装<\/h2>\r\n<p>&nbsp;<\/p>\r\n<p>打包的文件,里面文件,目录我都一一对应了,实际上直接,解压到游戏目录即可.<\/p>\r\n<p>非常简单.<\/p>\r\n<p>按16人补丁举例<\/p>\r\n<p>&nbsp;<\/p>\r\n<p><img src=\"https:\/\/r.photo.store.qq.com\/psb?\/V13iVwZo2obvUj\/Rq.G4NVZN.UlFSzjvVNMFFEaVUmcdbkyPGbCre9j5Uw!\/r\/dLYAAAAAAAAAnull\/_yake_qzoneimgout.png\" alt=\"\" width=\"554\" height=\"409\" \/><\/p>\r\n<p>&nbsp;<\/p>\r\n<p>如果补丁包都安装了,.大概是这样.<\/p>\r\n<p><img src=\"\/\/r.photo.store.qq.com\/psc?\/V13iVwZo2obvUj\/l8V*4kN5EKtnl2fKnrChMEzukKH1Oi48CyTWNDY5ua5XM9oujYE5d6Cbb7gPiNzt4I8WhUFv6q7JyFwbev8HKQ!!\/mnull&amp;bo=ygI6AsoCOgIRCT4!&amp;rf=photolist&amp;t=5\/r\/_yake_qzoneimgout.png\" alt=\"\" width=\"714\" height=\"570\" \/><\/p>\r\n<p>&nbsp;<\/p>\r\n<p>&nbsp;<\/p>\r\n<h2>使用<\/h2>\r\n<p>&nbsp;<\/p>\r\n<h3>客户端用户<\/h3>\r\n<p>&nbsp;<\/p>\r\n<p>客户端推荐用启动器.可以切换版本.<\/p>\r\n<p>1,方式一, 将start.exe启动器进程创建一个桌面快捷方式. 通过这个启动选择运行游戏版本. (<span style=\"color: #843fa1;\">不推荐<\/span>)<\/p>\r\n<p><img src=\"\/\/r.photo.store.qq.com\/psc?\/V13iVwZo2obvUj\/l8V*4kN5EKtnl2fKnrChMJ7iLsTXumkVF79pWC*hwJWUc6sTQw8nYohkg2pDPzOHNBkjBSwRTChqtZ3O62GyYQ!!\/mnull&amp;bo=HAHhARwB4QERCT4!&amp;rf=photolist&amp;t=5\/r\/_yake_qzoneimgout.png\" alt=\"\" width=\"284\" height=\"481\" \/><\/p>\r\n<p>&nbsp;<\/p>\r\n<p>2,方式二,将不同补丁的客户端进程,放桌面快捷方式,需要玩啥版本就运行啥版本客户端.(<span style=\"color: #b96ad9;\">不推荐<\/span>)<\/p>\r\n<p>asrd_Y.A.K.E_rda.exe&nbsp; --&gt;&nbsp; RDA版 客户端程序<\/p>\r\n<p>asrd_yake_16.exe&nbsp;&nbsp; --&gt;&nbsp; 16人版客户端.<\/p>\r\n<p>reactivedrop.exe&nbsp; --&gt; AS:RD官方客户端.<\/p>\r\n<p>&nbsp;<\/p>\r\n<p>&nbsp;<\/p>\r\n<p>&nbsp;<\/p>\r\n<p>3,方式三,启动器切换(<span style=\"color: #ba372a;\">推荐<\/span>)<\/p>\r\n<p>&nbsp;<\/p>\r\n<p>装了启动器的用户,在steam游戏库--Alien Swarm Reactive Drop(右键)--属性--常规--设置启动选项<\/p>\r\n<p><img src=\"\/\/r.photo.store.qq.com\/psc?\/V13iVwZo2obvUj\/l8V*4kN5EKtnl2fKnrChMGRLRaBozM9Ay9XLRawPfyUQ1fj16m*eI5ts3wXz.DXPLBRdpV0lD45FjXMYCm6Kmg!!\/mnull&amp;bo=NwNDAjcDQwIRCT4!&amp;rf=photolist&amp;t=5\/r\/_yake_qzoneimgout.png\" alt=\"\" width=\"823\" height=\"579\" \/><\/p>\r\n<p>可以有下面三个选项,<strong>三选一<\/strong>.<\/p>\r\n<p><strong>-gui<\/strong><\/p>\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 设置并保存后,&nbsp; 运行游戏--&gt;自动切换成启动器(参考前面方法1的图片),让你手动选一个版本.<\/p>\r\n<p><strong>-b16<\/strong><\/p>\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 设置并保存后,&nbsp; 运行游戏--&gt;自动切换成16人版本客户端.(如果有安装16人补丁)<\/p>\r\n<p><strong>-rda<br \/><\/strong><\/p>\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 设置并保存后,&nbsp; 运行游戏--&gt;自动切换成RDA客户端.(如果有安装RDA补丁), 适合长玩RDA用户.<\/p>\r\n<p>&nbsp;<\/p>\r\n<p><strong>不加任何参数,就是直接运行官方AS:RD客户端程序.<\/strong><\/p>\r\n<p>&nbsp;<\/p>\r\n<p>&nbsp;<\/p>\r\n<p>&nbsp;<\/p>\r\n<p>&nbsp;<\/p>\r\n<h3>开服务器用户<\/h3>\r\n<p>服务器进程不支持启动器切换.<\/p>\r\n<p>开服方法都是和官方一样.就是进程名字不一样.其他无需解释,你懂的.<\/p>\r\n<p>srcds_rda.exe&nbsp; -&gt; RDA开服进程<\/p>\r\n<p>srcds_16.exe&nbsp; -&gt; 16人开服进程<\/p>\r\n<p>srcds.exe&nbsp; -&gt; AS:RD官方开服进程<\/p>\r\n<p>&nbsp;<\/p>\r\n<p>&nbsp;<\/p>\r\n<h2>补丁更新说明<\/h2>\r\n<h3>官方更新<\/h3>\r\n<p>如何官方版本更新都不会覆盖补丁包自由升级更新,无需处理.<\/p>\r\n<p>&nbsp;<\/p>\r\n<h3>RDA更新<\/h3>\r\n<p>那么下载3个DLL后,直接覆盖<\/p>\r\n<p>&nbsp; <span style=\"color: #e67e23;\">游戏目录\\reactivedrop\\<strong>rda<\/strong>\\<\/span><\/p>\r\n<p>这个文件夹.<\/p>\r\n<p>注意,目录是rda目录<\/p>\r\n<p>&nbsp;<\/p>\r\n<p>&nbsp;<\/p>\r\n<h3>16人补丁更新<\/h3>\r\n<p>如果更新是放入<\/p>\r\n<p><span style=\"color: #e67e23;\">&nbsp;&nbsp;&nbsp;&nbsp; 游戏目录\\reactivedrop\\<strong>b16<\/strong>\\<\/span><\/p>\r\n<p>不过暂时不会更新了.<\/p>\r\n<p>&nbsp;<\/p>\r\n<p>&nbsp;<\/p>\r\n<h2>工作原理图<\/h2>\r\n<p>&nbsp;<\/p>\r\n<p><img src=\"\/\/r.photo.store.qq.com\/psc?\/V13iVwZo2obvUj\/r5r.jW0JZFmFKdRYe5qoxgDMGq1ShuNdkVO9PJexIK00Z4thMLGf6yLIVfNcgPNSveIOGSjNVLF*tE*Nyq68LbrBdV2hGjUdxmsQ9dqDMn4!\/mnull&amp;bo=OwOqAjsDqgIBCS4!&amp;rf=photolist&amp;t=5\/r\/_yake_qzoneimgout.png\" alt=\"\" width=\"827\" height=\"682\" \/><\/p>\r\n<p>&nbsp;<\/p>\r\n<p>&nbsp;<\/p>';


  } else {



     id = options.id;
     html = '<p class="bug-info">本页小程序图片放大有bug,会显示上一个博文的图片.如果按后退键再回到上一个博文,上一个博文图片都无法放大(控制台抛出错误).<\/p><br><br><br><h2>运行测试图<\/h2>\r\n<p><img src=\"\/\/r.photo.store.qq.com\/psb?\/V13iVwZo2obvUj\/*7P*Ubd2.8OqGze07k80S51H0TLtyl6Tg27l817xzJg!\/r\/dFQBAAAAAAAAnull\/_yake_qzoneimgout.png\" alt=\"\" width=\"936\" height=\"667\" \/><\/p>\r\n<p>&nbsp;<\/p>\r\n<p>&nbsp;<\/p>\r\n<h2>补丁使用方法<\/h2>\r\n<p>下载解压到游戏目录，注意对应文件和目录位置（不会覆盖任何游戏文件）<\/p>\r\n<p>&nbsp;<\/p>\r\n<p><img src=\"\/\/r.photo.store.qq.com\/psb?\/V13iVwZo2obvUj\/Rq.G4NVZN.UlFSzjvVNMFFEaVUmcdbkyPGbCre9j5Uw!\/r\/dLYAAAAAAAAAnull\/_yake_qzoneimgout.png\" alt=\"\" width=\"554\" height=\"409\" \/><\/p>\r\n<p>&nbsp;<\/p>\r\n<p><span style=\"color: #ff0000;\">运行 【asrd_yake_16.exe】 就是 运行16人客户端，可以将这个程序发送桌面快捷方式。<\/span><\/p>\r\n<p>&nbsp;<\/p>\r\n<p><span style=\"color: #00ff00;\">如果通过steam启动as：rd 那么运行是原版客户端。<\/span><\/p>\r\n<p>&nbsp;<\/p>\r\n<h2>文件说明<\/h2>\r\n<p>asrd_yake_16.exe 为16人客户端<\/p>\r\n<p>srcds_16.exe&nbsp; 为16人专用服务端 （开服务器玩家才需要）<\/p>\r\n<p>&nbsp;<\/p>\r\n<h2>特别说明<\/h2>\r\n<p><span style=\"color: #ff0000;\">1， 16人客户端只能进16人服务器\/主机 。 原版客户端只能进原版客户端\/主机。 不会自动识别。<\/span><\/p>\r\n<p>2， 本版本为先行测试版，bug慢慢修复。<\/p>\r\n<p>&nbsp;<\/p>\r\n<h2>已知bug<\/h2>\r\n<p>1，只有前8个角色的装备会保留,后8个角色每次回到大厅会恢复默认装备(调试4天,暂时没找到哪里问题)<\/p>\r\n<p>2， 如果选了超过8个角色的情况，按F9投票有一定概率会客户端奔溃。(谁按谁奔溃,不影响其他人)<\/p>\r\n<p>&nbsp;<\/p>\r\n<p><span style=\"color: #ff9900;\">建议换地图 使用控制台命令 换地图.<\/span><\/p>\r\n<pre>asw_vote_chooser map<\/pre>\r\n<p>可以将这个命令绑定快捷键,比如F10<\/p>\r\n<p>bind F10 \"asw_vote_chooser map;\"<\/p>\r\n<p>&nbsp;<\/p>\r\n<p>&nbsp;<\/p>\r\n<p>这些bug可能都是数组越界引起的，源代码太复杂,而且我又太懂擅长vc++。。我还在慢慢修复<\/p>\r\n<p>&nbsp;<\/p>\r\n<h2>开服务器说明<\/h2>\r\n<p>&nbsp;<\/p>\r\n<p>只需要将原来bat文件里面内容 srcds.exe 替换 --&gt; srcds_16.exe 即可。<\/p>\r\n<p>服务器带的动的话， 你可以一个bat运行原版\/一个bat运行16人版。<\/p>\r\n<p>&nbsp;<\/p>\r\n<h2>下载<\/h2>\r\n<p>&nbsp;<\/p>\r\n<p><span style=\"color: #ff0000;\">[最新]<\/span> 更新时间_2019\/10\/02<\/p>\r\n<p>链接: <a href=\"https:\/\/pan.baidu.com\/s\/1bhtGMCC2Km_9602KKfFuuA\" target=\"_blank\" rel=\"noopener\">https:\/\/pan.baidu.com\/s\/1bhtGMCC2Km_9602KKfFuuA <\/a><\/p>\r\n<p>提取码: wujd<\/p>\r\n<p>&nbsp;<\/p>\r\n<p>&nbsp;<\/p>\r\n<p><span style=\"text-decoration: line-through;\">更新时间_2019\/10\/02<\/span><\/p>\r\n<p><span style=\"text-decoration: line-through;\">链接: <a href=\"https:\/\/pan.baidu.com\/s\/1DVuRN9aQitxQ_R_8GRVMpA\" target=\"_blank\" rel=\"noopener\">https:\/\/pan.baidu.com\/s\/1DVuRN9aQitxQ_R_8GRVMpA <\/a><\/span><\/p>\r\n<p><span style=\"text-decoration: line-through;\">提取码: kddc<\/span><\/p>\r\n<p>&nbsp;<\/p>\r\n<p><span style=\"text-decoration: line-through;\">更新时间_2019\/10\/01<\/span><\/p>\r\n<p><span style=\"text-decoration: line-through;\">链接: <a href=\"https:\/\/pan.baidu.com\/s\/1XCVkHMG6O1lNRns9ecda5A\" target=\"_blank\" rel=\"noopener\">https:\/\/pan.baidu.com\/s\/1XCVkHMG6O1lNRns9ecda5A <\/a><\/span><\/p>\r\n<p><span style=\"text-decoration: line-through;\">提取码: jrxh<\/span><\/p>\r\n<p>&nbsp;<\/p>\r\n<p>&nbsp;<\/p>\r\n<p>&nbsp;<\/p>\r\n<p>&nbsp;<\/p>\r\n<p>&nbsp;<\/p>';


  }

  console.log(id);

  //解析html中的内链,仅我个人适用.
  //将  
  //    ./show/73.html
  //    ././show/73.html
  //    https://www.yge.me/show/73.html
  //web形式的内链转成小程序内链
  let reg = /href\s?=\s?"((\.|\.\.\/\.\.|https:\/\/www\.yge\.me)\/show\/(\d+)\.html)"/g;
  html=html.replace(reg,function($,$1,$2,$3){  
    return 'href="../test/test?id='+ $3 + '"';
  });



  //根据ID显示上一页或者下一页链接
  if(id == 73){
    _this.setData({ prevshow: false,nextshow:true });
  }else{
    _this.setData({ prevshow: true,nextshow:false });
  }


  //console.log(html);

 _this.setData({ htmlText: html,blogid:id });




},
onUnload:function(){
  //监听返回
},
bindViewjump:function(){
  let _this =this;
  //如果是73就跳转45
  if (_this.data.blogid == 73){
      wx.navigateTo({
        url: '../test/test?id=45'
      });    
  }else{
    wx.navigateTo({
      url: '../test/test?id=73'
    });
  }
},
bindViewjump2:function(){
  let _this =this;
  //如果是73就跳转45
  if (_this.data.blogid == 73){
      wx.redirectTo({
        url: '../test/test?id=45'
      });    
  }else{
    wx.redirectTo({
      url: '../test/test?id=73'
    });
  }
}
})
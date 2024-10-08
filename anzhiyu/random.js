var posts=["2024/10/08/mathformula/","2024/09/15/LearnGit/","2024/10/07/beautyofcontrol/","2024/09/15/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
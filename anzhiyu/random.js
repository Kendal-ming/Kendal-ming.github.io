var posts=["2024/09/15/LearnGit/","2024/10/07/beautyofcontrol/","2024/09/15/hello-world/","2024/10/08/mathformula/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
var posts=["2024/09/15/hello-world/","2024/09/15/LearnGit/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
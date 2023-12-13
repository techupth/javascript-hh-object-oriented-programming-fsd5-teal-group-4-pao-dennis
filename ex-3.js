//  Start coding here
class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

class PostList {
  constructor(posts) {
    this.posts = posts;
  }

  addPost(post) {
    this.posts = post;
  }
  sharePost() {
    console.log(`You've shared post “<post-title>” to your friend`);
  }
}

class Post {
  constructor(id, title, content, comment) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.comment = comment;
  }

  addComment() {}
}
class Comment {
  constructor(id, content, createdBy, like) {
    this.id = id;
    this.content = content;
    this.createdBy = createdBy;
    this.like = like;
  }
}

class Notification {
  constructor(notificationId, createdTime, content, receiver) {}

  send() {
    console.log("Notification has been sent to <receiver>");
  }
}

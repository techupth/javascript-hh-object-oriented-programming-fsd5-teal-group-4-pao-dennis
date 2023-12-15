//  Start coding here
class User{
    constructor(id,name,email){
        this.id=id;
        this.name=name;
        this.email=email;
    }
}
class postList{
    constructor(){
        this.posts=[];
    }
    addPost(post){
        this.posts.push(post);
    }
    sharePost(postTitle){
        console.log(`You've shared post ${postTitle} to your friend`)
    }
}
class Post{
    constructor(id,title,content){
        this.id=id;
        this.title=title;
        this.content=content;
        this.comment=[];
    }
    addComment(comment){
        this.comment.push(comment);
    }
}
class Comment{
    constructor(id,content,createdBy){
        this.id=id;
        this.content=content;
        this.createdBy=createdBy;
        this.like=0;
    }
    addLike(){
        this.like+=1;
    }
}
class Facebook{
    constructor(){
        this.groupList=[];
        this.pageList=[];
    }
    addGroup(group){
        this.groupList.push(group);
    }
    addPage(list){
        this.pageList.push(list);
    }
}
class FacebookPage{
    constructor(name){
        this.name=name;
    }
}
class FacebookGroup{
    constructor(name){
        this.name=name;
    }
}
class Notification{
    constructor(id){
        this.id=id;
    }
    send(createdBy,postTitle){
        console.log(`Notification: ${createdBy} has just commented on this post—"${postTitle}"`)
    }
}

//test
const like = new Comment("01","push", "Mark Zuck");
like.addLike();
like.addLike();
console.log(like.like)
const fb = new Facebook();
fb.addGroup("18+");
fb.addGroup("25+");
console.log(fb.groupList)
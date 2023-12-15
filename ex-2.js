class Notification { 
    constructor(notificationId, createdTime, content, receiver){
        this.notificationId = notificationId;
        this.createdTime = createdTime;
        this.content = content;
        this.receiver = receiver;
    }
    send(receiver){
        console.log(`Notification has been sent to ${receiver}`)
    }
}

class EmailNotification extends Notification{ 
    constructor(notificationId, createdTime, content, receiver){
        super(notificationId, createdTime, content, receiver);
    }
}

class SMSNotification extends Notification{ 
    constructor(notificationId, createdTime, content, receiver){
        super(notificationId, createdTime, content, receiver);
    }
}

const emailNotice = new EmailNotification("0001","12.00", "push", "Mark");
const smsNotice = new SMSNotification("0007","13.00", "push now", "Mark Zuck");

emailNotice.send("mail@mail.com");
smsNotice.send("mail2@mail.com");
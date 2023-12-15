class EmailNotification { 
    constructor(notificationId, createdTime, content, receiver){
        this.notificationId = notificationId;
        this.createdTime = createdTime;
        this.content = content;
        this.receiver = receiver;
    }
    send(email){
        console.log(`Notification has been sent to ${email}`)
    }
}

class SMSNotification {
    constructor(notificationId,createdTime,content,phoneNumber){
        this.notificationId = notificationId;
        this.createdTime = createdTime;
        this.content = content;
        this.phoneNumber = phoneNumber;
    }
    send(phoneNumber){
        console.log(`Notification has been sent to ${phoneNumber}`)
    }
 }

 const emailNotice = new EmailNotification("0001","12.00", "push", "Mark");
 const smsNotice = new SMSNotification("0007","13.00", "push now", "Mark Zuck");

 emailNotice.send("mail@mail.com");
 smsNotice.send("mail2@mail.com");
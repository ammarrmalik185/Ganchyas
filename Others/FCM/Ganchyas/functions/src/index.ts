import * as functions from 'firebase-functions';
import * as admin from "firebase-admin";
// import * as serviceAccount from "E:\\Cloud Function Projects\\ganchyas-firebase-adminsdk-hrset-7cc70f9e2b.json";

admin.initializeApp();

export const sendForumNotification = functions.database.ref("forumData/forum/{forumIf}").onCreate(
    ((snapshot, context) => {
     const newForum = snapshot.val();
     const payload = {
       data:{
        "title":"New Forum",
        "text" : newForum.subject
       }
     };
     return admin.messaging().sendToDevice("fk-x9Sa1cgI:APA91bG7bKxRiZQnnA7rk5v28K1Mn1NyqMHFMJ4pqfIYWt_jt6wtQ8JOI13rLSdWE6y7QCOgA9icIzHiQEq4H-b0F2huQA6nZG70Vm94IResKw-mbH581W7dsTs_xLAE4nVX_T8QTmk6"
         , payload)
    })
);
import { postRef } from "../firebase";

export default (uid, content) => {
  console.log("into the fucntion");
  try {
    postRef.push({
      createdBy: uid,
      content,
      createdAt: new Date().toLocaleString()
    });
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

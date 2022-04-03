import { fireAuth } from "~/utils/fire.server";
import { createCookieSessionStorage } from "remix";
interface User {
  email: string;
  password: string;
  displayName: string;
}

const createUser = async ({ email, password, displayName }: User) => {
  return await fireAuth.createUser({
    email: email,
    password: password,
    displayName: displayName,
  });
};

const updateUser = ({ email, password, displayName, uid }: any) => {
  fireAuth
    .updateUser(uid, {
      email,
      password,
      displayName,
    })
    .then((userRecord) => {
      // See the UserRecord reference doc for the contents of userRecord.
      console.log("Successfully updated user", userRecord.toJSON());
      return { status: "done", userRecord };
    })
    .catch((error) => {
      console.log("Error updating user:", error);
      return { status: "fail", error };
    });

    
};


const deleteUser = async (uid: string) => {
  fireAuth
    .deleteUser(uid)
    .then(() => {
      console.log("Successfully deleted user");
      return { status: "Successfully deleted user" };
    })
    .catch((error) => {
      console.log("Error deleting user:", error);
      return { status: "Error deleting user:", error };
    });
};

const createCustormToken = async (uid: string) => {
  return await fireAuth.createCustomToken(uid);
};

const verifyToken = (idToken: string) => {
  fireAuth
    .verifyIdToken(idToken)
    .then((decodedToken) => {
      // Apply Logic
    })
    .catch((err) => {
      return { status: "Got error verifying token", err };
    });
};
// const createSessionCookie = () => {

// }

export const createSessionCookieAuth = async (userId: string) => {
  // Set session expiration to 5 days.
  const expiresIn = 60 * 60 * 24 * 5 * 1000;
  return await fireAuth.createSessionCookie(userId, { expiresIn });
};

export { createUser, updateUser, deleteUser, createCustormToken, verifyToken };

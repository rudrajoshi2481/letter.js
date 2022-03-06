import { initializeApp, applicationDefault, cert } from "firebase-admin/app";
let admin = require("firebase-admin")
import { getFirestore } from "firebase-admin/firestore";
import { getAuth } from "firebase-admin/auth";


const a:any = {
  "type": "service_account",
  "project_id": "rudhrajoshicom",
  "private_key_id": "9fef36b279a41948e6643434df9732081a5bd295",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDBaPbSII3Tivs+\nD9iEiOem7eQc3nDruBUD0LM1QQ2bmMC3UQYgWyMiH/unphNsI27cT8MpUv17nu3R\n4Jbt2s53ZeEDsDErKZUHnLzxb+e8zb7lAYOsMzKatqSNPuOHhwB8aSSJAqwFC1up\nWn+nU77OVvlHbbhCQo+wGszK9Sis0McjMYXqwvty25R6l3wrksR9dePmfKJJJV09\n9hN7nasvu0Hmg3g9SUyHwVVaDW0g/3UVA9sy2BdoSd5i8se1L+yNQnc+YhVrYYLS\npTdLKvZNh+gLvF+Duqyciy2KqbEMvS6SRT2ArmYeG+qQhl+WVRwLSBsQAF4wQAgI\nnu73Z8JtAgMBAAECggEAGCJy+lGZoRYst9feWtuCnK/+0SNoz+FOrgUy96hAfHQZ\nSEbSDuOQhMec7ZSpw8rAILnLTrLOcsioQJJYAyJUtU1/QKiR2iL8N9D1OuON9V9v\nPMBtn+VboTa9XerFFbpg8yVjq70rng2GyKFEYKrwmmr7/E/SuGH58C3H9GOXSckk\nHuK6jSoYlaCuzTzzrTXpZqA0CLtKq7+0AYzNWsuVj3NoRPMKuStX3f5NjVjlmakf\nOxdO4Uy9Sdk3UK1c8M23W2rJ6PxiGUtORDAa23wmrvX/v1H6fpIgI5nCgUncL6V5\n74r3mYb0eFJMOxZY9eBXa23/xghGSYMujRkxQunMAQKBgQDmghPxyH7z8haQevHJ\n38FtcTRX9uOCrebyGHWuIjMU/qEz7HcATQPSRRo/NJG5nrPjES673lg30Lo3M6EU\nrZzh1DWLj8lREEgpMCj2qEK0Z0LCoPqMozCcwRZmLb5ZLkPEubQd+27bIcG+B9tb\nxtyWXhiqJEW0QM6lhbNW5w6YgQKBgQDWzJnO/N59FmxZxc5cxRmxz6o0cdd/rPMs\nL+5+R4tBo9SBydzlvp85O4KZ0eOJW2TF6NT/gbay30r/1vWdzPQj6wGcHZb65Yqu\nu8RX0FQPt2swZQGAN/tbvtkSZVwdaNim2xsCtK/cJaYZVS/djPEABIpPDKivg5Zy\nN4yrqBMT7QKBgQCJfBJLRuu5sq4UtM/cOZJUJY4z3TTrr6+svDwMhad0IT+jCaoc\nytK5qq+x/Tfhv6/JgmkecsqpV9yJqkisXbTR2VGqkTNhH1X7AxebrtZCZcii74Mh\nOQB4ro4embAL3xVak+zDaUFAgEzffC4w+lZ9dVg+uu28Sl82yJ0j+yJwgQKBgFvb\nHyNPK+4eOrOhTYCKoVRS1BydWmS1F0CcNsc13S1y3BussZRmEj0tX8pb4YwJ02x3\nBy9Ez1Zq+u2xhVO4I+eARi320Wv14XqbvXk4E9qsu1/0sdGdHxa65KVjRyMkhRHF\nvSVJE7N3PjKzJUb/UMiLKIJpjXGROjMZ4kQ+Gfp5AoGAR8xt++MozVOb9vtF1uTL\n23FlqHBuSqnRMqsgiWtRIA+9M+03xRDPJ8zO0mImmP+tpyS6jDGgGZE2Mcqx/pE/\nICaMVPGjsXYdbp270c0k2fH2Z/tVXAgrHhzGgMBgziccWH67Rn8mgjx3T2aqlXdt\ngNMAORiCIO+LS+cexYRYFLk=\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-xud18@rudhrajoshicom.iam.gserviceaccount.com",
  "client_id": "111097323745740515989",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-xud18%40rudhrajoshicom.iam.gserviceaccount.com"
}
initializeApp({credential:cert(a)});
export const firestore = getFirestore();
export const fireAuth = getAuth();

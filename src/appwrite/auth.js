import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";
  export class AuthServices{
    client = new Client()
    account;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectid)
        this.account =new Account(this.client)
    }
     async CreateAccount ({email,password,name}){
        try {
         const userAccount=   await this.account.create(ID.unique(),email,password,name)
     if (userAccount){
        alert(`user singed up successfully`)
        return this.login({email,password});
        
     } else{
        return userAccount
     }
      } catch (error) {
            throw error;
        }
     }
      async login ({email,password}){
        try {
            return this.account.createEmailPasswordSession(email,password);
        } catch (error) {
            throw error;
        }
      }
       async getCurrent (){
        try {
             return  await this.account.get()
            
        } catch (error) {
            throw error;
        }
         return null;
       }
        async logout (){
            try {
                await this.account.deleteSessions()
            } catch (error) {
                throw error;
            }
        }
  }
  const authservices = new AuthServices()
   export default authservices
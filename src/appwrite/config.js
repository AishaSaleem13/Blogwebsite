import { Client, ID,Databases, Storage ,Query } from "appwrite";
import conf from "../conf/conf";

export class Service{
     client = new Client()
     Databases;
     bucket;
      constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectid)
       this.databases = new Databases(this.client)
         this.bucket= new Storage(this.client)
      }

      async createpost ({slug,title,featuredimage,status,userid,content}){
try {
     return await this.databases.createDocument(
        conf.appwriteDatabaseid,
        conf.appwriteCollectionid,
        slug,{
            title,
            featuredimage,
            status,
             userid,
             content
        }
     )
} catch (error) {
    console.log('error in createpost',error)
}
      }
async updatepost (slug,{title,featuredimage,status,content}){
    try {
        return await this.databases.updateDocument(
            conf.appwriteDatabaseid,
            conf.appwriteCollectionid,
            slug,{
                title,
                status,
                featuredimage,
                content,
            }
        )
    } catch (error) {
        console.log(`error`,error)
    }
}
async deletepost (slug){
    try {

       await this.databases.deleteDocument(
        conf.appwriteDatabaseid,
        conf.appwriteCollectionid,
        slug
       )
       true
       alert (`document deleted`)
    } catch (error) {
        console.log(error)
        return false 
    }
}
 async getpost (slug){
    try {
        return await this.databases.getDocument(
            conf.appwriteDatabaseid,
            conf.appwriteCollectionid,
            slug
        )
    } catch (error) {
        throw error;
        return false
    }
 }
  async getposts(quries= [Query.equal("status","active")]){
    try {
        return await this.databases.listDocuments(
            conf.appwriteDatabaseid,
            conf.appwriteCollectionid,
            quries,
            100,
            0
        )
    } catch (error) {
        throw error;
        return false
    }

  }
//  file upload services 
async  uploadfile  (File){
    try {
        return await this.bucket.createFile(
            conf.appwriteBucketid,
            ID.unique,
            File
        )
    } catch (error) {
        throw error;
    }
}
 async deletefile (fileId){
    try {
        return await this.databases.deletefile(
            conf.appwriteBucketid,
            fileId
        ) 
        return true 
    } catch (error) {
        throw error;
        return false 
    }
 }
//    getting previwe 
getFilePrview(fileId){
return this.bucket.getFilePreview(
    conf.appwriteBucketid,
    fileId
)
}

}
const service = new Service()
export default service
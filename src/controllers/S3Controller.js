const s3Service = require("../services/S3Service");

module.exports = {
    async getUrl(req, res, next){
        try{
            return s3Service.getPresignedUrl(req, res);
        }
        catch(e){
            return res.status(500).json({message:"Internal Server Error", error:true});            
        }
    },
}
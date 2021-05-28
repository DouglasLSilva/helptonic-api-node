const AWS = require("aws-sdk");
const uuid = require("uuid");

AWS.config.update({ region: 'sa-east-1' });

const S3_BUCKET = 'helptonic';
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: 'sa-east-1',
  signatureVersion: "v4"
});

module.exports = {
  getPresignedUrl (req, res) {
  let fileType = req.body.fileType;
  if (fileType != ".jpg" && fileType != ".png" && fileType != ".jpeg") {
    return res
      .status(403)
      .json({ success: false, message: "Image format invalid" });
  }

  fileType = fileType.substring(1, fileType.length);

  const fileName = uuid.v4();
  const s3Params = {
    Bucket: S3_BUCKET,
    Key: fileName + "." + fileType,
    Expires: 60 * 60,
    ContentType: "image/" + fileType,
    ACL: "public-read",
  };

  s3.getSignedUrl("putObject", s3Params, (err, data) => {
    if (err) {
      console.log(err);
      return res.end();
    }
    const returnData = {
      success: true,
      message: "Url generated",
      uploadUrl: data,
      downloadUrl:
        `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}` + "." + fileType,
    };
    return res.status(201).json(returnData);
  });
}
}

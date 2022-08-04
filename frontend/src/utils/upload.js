const minio = require('minio')
const minioClient = new minio.Client({
  endPoint: 'https://cooper_web.kooldns.cn/minio',
  port: 443,
  useSSL: true,
  accessKey: 'tt1aS9ySmBNEb5DX',
  secretKey: 'AOpdBCbrUulftJOMMXLyAFe7CLQe3ffJ'
});

minioClient.presignedUrl('GET', 'cooper', '设置.zip', 1000, {'prefix': 'data', 'max-keys': 1000}, function(err, presignedUrl) {
  if (err) return console.log(err)
  console.log(presignedUrl)
})


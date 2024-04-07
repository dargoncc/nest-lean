# 5 种 http 的传输方式
- url param
- query
- form urlencoded
- json
- form data

# nest 对应解析 http 传输方式

## URL 中的获取方式
### 
url 中的参数，
Nest 使用 @Param 来获取

### query
url 中 ？后的参数， 
Nest 使用 @Query 来获取

## Body 种的获取方式
### form URL encoded
类型 query 字符串，只不过放在了 body 中， 
Nest 使用 @Body 来取，
axios 中需要指定 contentType 为 application/x-www-form-urlencoded，并且对数据用 qs 或者 query-string 库做 url encode

### json
json 数据的格式
Nest 使用 @Body 来获取
axios 不用单独指定 contentType，axios 默认会做处理

### form data
通过 ----- 作为 boundary 分隔的数据。 主要用于传输文件
Nest 中使用 FilesInterceptor 来处理 binary 字段， 用@UseInterceptors 来启用，其余字段用 @Body 来取
axios 中需要指定 content type 为 multipart/form-data，并且用 FormData 对象来封装传输的内容。

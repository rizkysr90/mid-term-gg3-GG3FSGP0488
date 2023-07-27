## Struktur Basis Data

![ERD](https://ik.imagekit.io/rizkysr90/Schema%20DB%20MidTerm_em5-M-hz2.jpg)Dalam tugas ini, basis data yang digunakan adalah MongoDB dan akan mempunyai 2 collections yaitu Videos dan Comments

Didalam collections Videos terdapat subdocuments yang menggunakan konsep embedding documents yaitu seller dengan tipe data objek, artinya satu seller memiliki banyak video tetapi 1 video hanya dimiliki oleh 1 seller, kemudian products juga merupakn embedding document dengan tipe data array, artinya satu video dapat memiliki banyak products

Didalam collections Comments terdapat subdocuments yang menggunakan konsep referencing documents yaitu Video yang merefrensikan nilainya kepada collections Videos, jadi 1 video dapat memiliki banyak comments tetapi 1 comments hanya dimiliki oleh 1 video.

## API Spesifikasi

#Videos

- Video object

```
{
  id: ObjectId(),
  title: string
  thumbnail_url: string
  seller : object
  video_url: string
  products : array of objects
}
```

### GET /api/v1/videos/:videoId/products

---

(Product List)
Returns all users in the system.

- **URL Params**  
  _Required:_ `videoId=[string]`
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:**

```
{
	"metadata" : {
		"status" : 200,
		"msg": "berhasil mendapatkan data"
	},
	"data" : [
			{VideosObject.products}
	]
}
```

#Comments

- Comment object

```
{
  id: ObjectId(),
  comment: string
  video: objectId
  username : string
  created_at: Date
}
```

### GET /api/v1/comments/:videoId

---

(Comment List)
Returns all users in the system.

- **URL Params**  
  _Required:_ `videoId=[string]`
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:**

```
{
	"metadata" : {
		"status" : 200,
		"msg": "berhasil mendapatkan data"
	},
	"data" : [
			{CommentsObject}
	]
}
```

### POST /api/v1/comments

---

(Comment List)
Returns all users in the system.

- **URL Params**  
  \*none`
- **Data Params**

  ```
  {
    username: string,
    comment: string,
    videoId: string
  }

  ```

- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 201  
  **Content:**

```
{
	"metadata" : {
		"status" : 201,
		"msg": "berhasil menambahkan data"
	},
	"data" : {
	_id : ObjectId()
}
```

## Cara Menjalankan Projek

1.  npm install
2.  npm run seeder (menjalankan seeder data video)
3.  npm run dev / npm run start

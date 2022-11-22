# Musive backend 2.0

### Steps to deploy

- Create postgreSQL db on any cloud services and update the .env file.
- <code>.env</code>

```
PORT=4444
TOKENKEY=<any random string>
DB_URL=<postgresql connect url>
```

- deploy to any cloud hosting provider with this env config.
- copy `backup.sql` file from the root of the musive Api directory and paste it into your "C" drive.
- open up a psql command tool and enter your credentials.
- run `\i 'C:/backup.sql'` and your DB will be created.
- Test your backend with your URL.

# Documention

# Project: Musive api 2.0

## End-point: register

### Method: POST

> ```
> {{URL}}/api/auth/register
> ```

### Body (**raw**)

```json
{
  "username": "anshrathod2",
  "password": "hehe2342"
}
```

### Response: 200

```json
{
  "message": "user created",
  "username": "anshrathod2",
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFuc2hyYXRob2QyIiwiaWF0IjoxNjY3MDIxOTQ4LCJleHAiOjE2NjcxMDgzNDh9.PU6bDFh7SgCeC1Ej8qEi_0yb8zcHp6tiX1ql3stL-Sc"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: login

### Method: POST

> ```
> {{URL}}/api/auth/login
> ```

### Body (**raw**)

```json
{
  "username": "anshrathod12",
  "password": "ansh00"
}
```

### Response: 200

```json
{
  "success": true,
  "username": "ansshshsemsd",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFuc3Noc2hzZW1zZCIsImlhdCI6MTY2NzAyMTk1OCwiZXhwIjoxNjY3MTA4MzU4fQ.AHB32AA16HnoQ5tdq7PSs-dPCjZELGuppk2fwWUHYVw"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# 📁 Collection: artists

## End-point: artist info by id

/artists/:id

:id is the required parameter for the request.

### Method: GET

> ```
> {{URL}}/api/artists/28841948
> ```

### Response: 200

```json
{
  "success": true,
  "data": [
    {
      "id": 28841948,
      "username": "adriennedibbert",
      "display_name": "Adrienne Dibbert",
      "avatar": {
        "url": "https://images.unsplash.com/photo-1512849934327-1cf5bf8a5ccc?ixid=MnwyNjQwNTF8MHwxfHNlYXJjaHwxOTd8fGZhY2UlMjBmZW1hbGV8ZW58MHx8fHwxNjY2MDg5Njc1&ixlib=rb-1.2.1",
        "color": "#c0c0c0"
      }
    }
  ]
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: random artists by count

/artists/random/:num

:num at end of the url is required parameter to this request.

note: you can only get 50 or less than 50 artists with one request.

### Method: GET

> ```
> {{URL}}/api/artists/random/6
> ```

### Response: 200

```json
{
  "success": true,
  "data": [
    {
      "id": 20256978,
      "username": "tarahaley",
      "display_name": "Tara Haley",
      "avatar": {
        "url": "https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixid=MnwyNjQwNTF8MHwxfHNlYXJjaHwxM3x8ZmFjZSUyMGZlbWFsZXxlbnwwfHx8fDE2NjYwODk2NzA&ixlib=rb-1.2.1",
        "color": "#f3c0c0"
      }
    },
    {
      "id": 23693005,
      "username": "delbertkoss",
      "display_name": "Delbert Koss",
      "avatar": {
        "url": "https://images.unsplash.com/photo-1517352778431-f8068bd39389?ixid=MnwyNjQwNTF8MHwxfHNlYXJjaHwyMDN8fGZhY2UlMjBtYWxlfGVufDB8fHx8MTY2NjA4OTYzMg&ixlib=rb-1.2.1",
        "color": "#735940"
      }
    },
    {
      "id": 28181812,
      "username": "sadiecole",
      "display_name": "Sadie Cole",
      "avatar": {
        "url": "https://images.unsplash.com/photo-1514326005837-fb4791d25e03?ixid=MnwyNjQwNTF8MHwxfHNlYXJjaHwyMzJ8fGZhY2UlMjBmZW1hbGV8ZW58MHx8fHwxNjY2MDg5Njc2&ixlib=rb-1.2.1",
        "color": "#a6a68c"
      }
    },
    {
      "id": 22988038,
      "username": "jennysimonis",
      "display_name": "Jenny Simonis",
      "avatar": {
        "url": "https://images.unsplash.com/photo-1485290334039-a3c69043e517?ixid=MnwyNjQwNTF8MHwxfHNlYXJjaHwyMDN8fGZhY2UlMjBmZW1hbGV8ZW58MHx8fHwxNjY2MDg5Njc2&ixlib=rb-1.2.1",
        "color": "#a67373"
      }
    },
    {
      "id": 25326719,
      "username": "theresarippin",
      "display_name": "Theresa Rippin",
      "avatar": {
        "url": "https://images.unsplash.com/photo-1592463037907-f9232183fc22?ixid=MnwyNjQwNTF8MHwxfHNlYXJjaHw2M3x8ZmFjZSUyMGZlbWFsZXxlbnwwfHx8fDE2NjYwODk2NzI&ixlib=rb-1.2.1",
        "color": "#d9d9d9"
      }
    },
    {
      "id": 18667904,
      "username": "emmettkunde",
      "display_name": "Emmett Kunde",
      "avatar": {
        "url": "https://images.unsplash.com/photo-1440133197387-5a6020d5ace2?ixid=MnwyNjQwNTF8MHwxfHNlYXJjaHwyOHx8ZmFjZSUyMG1hbGV8ZW58MHx8fHwxNjY2MDg5NjI4&ixlib=rb-1.2.1",
        "color": "#404040"
      }
    }
  ]
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: get artist of tag

/artists/random/:num

:num at end of the url is required parameter to this request.

note: you can only get 50 or less than 50 artists with one request.

### Method: GET

> ```
> {{URL}}/api/artists/tag/ambient
> ```

### Response: 200

```json
{
    "success": true,
    "data": [
        {
            "display_name": "Julie Kiehn",
            "avatar": {
                "url": "https://images.unsplash.com/photo-1480631798479-b2343c556630?ixid=MnwyNjQwNTF8MHwxfHNlYXJjaHwxOTF8fGZhY2UlMjBmZW1hbGV8ZW58MHx8fHwxNjY2MDg5Njc1&ixlib=rb-1.2.1",
                "color": "#26260c"
            },
            "id": 26196457
        },
        {
            "display_name": "Sophia Gibson",
            "avatar": {
                "url": "https://images.unsplash.com/photo-1531908012224-8f8865e79a96?ixid=MnwyNjQwNTF8MHwxfHNlYXJjaHwxNXx8ZmFjZSUyMGZlbWFsZXxlbnwwfHx8fDE2NjYwODk2NzA&ixlib=rb-1.2.1",
                "color": "#262626"
            },
            "id": 7000074
        }
      ......
    ]
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# 📁 Collection: songs

## End-point: get random songs

### Method: GET

> ```
> {{URL}}/api/songs/random/20
> ```

### Response: 200

```json
{
    "success": true,
    "data": [
        {
            "id": 99123,
            "duration": 197.877531,
            "track_name": "Marching Music -The Crusader By John Philip Sousa",
            "src": "https://cdn.pixabay.com/audio/2022/03/21/audio_1a944368a1.mp3",
            "cover_image": {
                "url": "https://images.unsplash.com/photo-1482954363933-4bed6bbea570?ixid=MnwzODAxMTZ8MHwxfHNlYXJjaHwxMjd8fGx1eHVyeXxlbnwwfHx8fDE2NjgyNjIzOTI&ixlib=rb-4.0.3",
                "color": "#0c2640"
            },
            "artist_name": "Jane Howe",
            "artist_id": 25232863
        },
      .....
    ]
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: get songs of artist

### Method: GET

> ```
> {{URL}}/api/songs/artist/17741007?page=0
> ```

### Query Params

| Param | value |
| ----- | ----- |
| page  | 0     |

### Response: 200

```json
{
    "success": true,
    "data": [
        {
            "id": 11898,
            "duration": 148.506094,
            "track_name": "Trygve Larsen -The Gypsy King -Instrumental Jazz",
            "src": "https://cdn.pixabay.com/audio/2021/12/09/audio_a814fab861.mp3",
            "cover_image": {
                "url": "https://images.unsplash.com/photo-1615559669109-ed7d95e9ba6d?ixid=MnwyNjQwNTF8MHwxfHNlYXJjaHw0ODZ8fGhhcHB5fGVufDB8fHx8MTY2NjMyOTc0MQ&ixlib=rb-4.0.3",
                "color": "#8c8c8c"
            },
            "artist_name": "Laurence Nolan",
            "artist_id": 17741007
        },
       ....
    ]
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: get songs of tag

### Method: GET

> ```
> {{URL}}/api/songs/tag/ambient?page=0
> ```

### Query Params

| Param | value |
| ----- | ----- |
| page  | 0     |

### Response: 200

```json
{
    "success": true,
    "data": [
        {
            "id": 121005,
            "duration": 128.026094,
            "track_name": "Minimal Inspiring Ambient",
            "src": "https://cdn.pixabay.com/audio/2022/09/26/audio_78a37afb1c.mp3",
            "cover_image": {
                "url": "https://images.unsplash.com/photo-1603539007295-1f5ae46150ef?ixid=MnwyNjQwNTF8MHwxfHNlYXJjaHwxNXx8bWluZGZ1bG5lc3N8ZW58MHx8fHwxNjY2MTczNTE4&ixlib=rb-1.2.1",
                "color": "#d9d9d9"
            },
            "artist_name": "Emmett Reynolds",
            "artist_id": 24549671
        },
      ...
    ]
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# 📁 Collection: Like

## End-point: get ids of liked tracks

### Method: GET

> ```
> {{URL}}/api/liked
> ```

### 🔑 Authentication bearer

| Param | value                                                                                                                                                               | Type   |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFuc2hyYXRob2QxMiIsImlhdCI6MTY2OTEwNjYyNywiZXhwIjoxNjcxNjk4NjI3fQ.Si8RpWhUJD_LDhVp-v2-Li2cCKA52n1Er6ONAtScHBc | string |

### Response: 200

```json
{
  "success": true,
  "data": [
    116201, 8408, 24886, 8770, 121351, 111946, 115479, 113777, 108599, 115672,
    115327, 109448
  ]
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: get liked tracks

### Method: GET

> ```
> {{URL}}/api/liked/tracks
> ```

### 🔑 Authentication bearer

| Param | value                                                                                                                                                               | Type   |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFuc2hyYXRob2QxMiIsImlhdCI6MTY2OTEwNjYyNywiZXhwIjoxNjcxNjk4NjI3fQ.Si8RpWhUJD_LDhVp-v2-Li2cCKA52n1Er6ONAtScHBc | string |

### Response: 200

```json
{
    "success": true,
    "data": [
        {
            "id": 111946,
            "duration": 209.448,
            "track_name": "Gat a Dream (PRD BY BulimoI Remix) by AAP Featuring Grafezzy",
            "src": "https://cdn.pixabay.com/audio/2022/05/24/audio_f28e0f1821.mp3",
            "cover_image": {
                "url": "https://images.unsplash.com/photo-1516091877740-fde016699f2c?ixid=MnwzODAxMTV8MHwxfHNlYXJjaHw0Mjl8fHNlYXxlbnwwfHx8fDE2NjgyNjIyNzI&ixlib=rb-4.0.3",
                "color": "#0c2640"
            },
            "artist_name": "Elizabeth Greenholt",
            "artist_id": 26794968
        },
    ....
    ]
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: like a track

### Method: POST

> ```
> {{URL}}/api/like/7947
> ```

### 🔑 Authentication bearer

| Param | value                                                                                                                                                               | Type   |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFuc2hyYXRob2QxMiIsImlhdCI6MTY2OTEwNjYyNywiZXhwIjoxNjcxNjk4NjI3fQ.Si8RpWhUJD_LDhVp-v2-Li2cCKA52n1Er6ONAtScHBc | string |

### Response: 200

```json
{
  "success": true,
  "data": []
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: unlike a track

### Method: POST

> ```
> {{URL}}/api/unlike/7947
> ```

### 🔑 Authentication bearer

| Param | value                                                                                                                                                               | Type   |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFuc2hyYXRob2QxMiIsImlhdCI6MTY2OTEwNjYyNywiZXhwIjoxNjcxNjk4NjI3fQ.Si8RpWhUJD_LDhVp-v2-Li2cCKA52n1Er6ONAtScHBc | string |

### Response: 200

```json
{
  "success": true,
  "data": []
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# 📁 Collection: collections

## End-point: get collections

### Method: GET

> ```
> {{URL}}/api/collections/mylists
> ```

### 🔑 Authentication bearer

| Param | value                                                                                                                                                               | Type   |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFuc2hyYXRob2QxMiIsImlhdCI6MTY2OTEwNjYyNywiZXhwIjoxNjcxNjk4NjI3fQ.Si8RpWhUJD_LDhVp-v2-Li2cCKA52n1Er6ONAtScHBc | string |

### Response: 200

```json
{
    "success": true,
    "data": [
        {
            "id": "ba03919d-9a65-4b61-b1f5-4716a616f00a",
            "name": "Peaceful Tracks 2",
            "total_tracks": 4,
            "cover_image": "https://images.unsplash.com/photo-1505128315951-c0851f1b00c9?ixid=MnwzNzM5Nzh8MHwxfHNlYXJjaHw2NjB8fGZsb3dlcnN8ZW58MHx8fHwxNjY2MzI5Mzg1&ixlib=rb-4.0.3",
            "color": "#402626"
        },
        {
            "id": "4a017363-5a40-491c-bd84-92cf3ad5f16b",
            "name": "Collection #24760",
            "total_tracks": 1,
            "cover_image": "https://images.unsplash.com/photo-1557180295-76eee20ae8aa?ixid=MnwyNjQwNTF8MHwxfHNlYXJjaHw3MzN8fGJhY2tncm91bmR8ZW58MHx8fHwxNjY2MzI5ODU0&ixlib=rb-4.0.3",
            "color": "#f3d940"
        },
      ...
    ]
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: create new collection

### Method: POST

> ```
> {{URL}}/api/collections/new
> ```

### Body (**raw**)

```json
{
  "name": "Spech;essds",
  "track_id": 112269
}
```

### 🔑 Authentication bearer

| Param | value                                                                                                                                                               | Type   |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFuc2hyYXRob2QxMiIsImlhdCI6MTY2OTEwNjYyNywiZXhwIjoxNjcxNjk4NjI3fQ.Si8RpWhUJD_LDhVp-v2-Li2cCKA52n1Er6ONAtScHBc | string |

### Response: 200

```json
{
  "success": true,
  "data": [
    {
      "id": "b7da9e0b-73af-43b0-ab2c-516a0603058d",
      "name": "Spech;essds",
      "total_tracks": 0,
      "cover_image": "https://images.unsplash.com/photo-1593285772408-ae48fb4d7de1?ixid=MnwyNjQwNTF8MHwxfHNlYXJjaHwzMzB8fHN0YWRpdW18ZW58MHx8fHwxNjY4MjYxNDM4&ixlib=rb-4.0.3",
      "color": null
    }
  ]
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: get tracks from collection

### Method: GET

> ```
> {{URL}}/api/collections/tracks/b7da9e0b-73af-43b0-ab2c-516a0603058d
> ```

### Body (**raw**)

```json
{
  "name": "Spech;essds",
  "track_id": 112269
}
```

### 🔑 Authentication bearer

| Param | value                                                                                                                                                               | Type   |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFuc2hyYXRob2QxMiIsImlhdCI6MTY2OTEwNjYyNywiZXhwIjoxNjcxNjk4NjI3fQ.Si8RpWhUJD_LDhVp-v2-Li2cCKA52n1Er6ONAtScHBc | string |

### Response: 200

```json
{
  "success": true,
  "data": [
    {
      "id": 112269,
      "duration": 239.647344,
      "track_name": "Worshipful (Vocal Ambient Soundscape)",
      "src": "https://cdn.pixabay.com/audio/2022/05/29/audio_1e50f20bc1.mp3",
      "cover_image": {
        "url": "https://images.unsplash.com/photo-1593285772408-ae48fb4d7de1?ixid=MnwyNjQwNTF8MHwxfHNlYXJjaHwzMzB8fHN0YWRpdW18ZW58MHx8fHwxNjY4MjYxNDM4&ixlib=rb-4.0.3",
        "color": "#d9d9d9"
      },
      "artist_name": "Jean Cronin",
      "artist_id": 20364457
    }
  ]
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: get information about the collection

### Method: GET

> ```
> {{URL}}/api/collections/info/b7da9e0b-73af-43b0-ab2c-516a0603058d
> ```

### Body (**raw**)

```json
{
  "name": "Spech;essds",
  "track_id": 112269
}
```

### 🔑 Authentication bearer

| Param | value                                                                                                                                                               | Type   |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFuc2hyYXRob2QxMiIsImlhdCI6MTY2OTEwNjYyNywiZXhwIjoxNjcxNjk4NjI3fQ.Si8RpWhUJD_LDhVp-v2-Li2cCKA52n1Er6ONAtScHBc | string |

### Response: 200

```json
{
  "success": true,
  "data": [
    {
      "id": "b7da9e0b-73af-43b0-ab2c-516a0603058d",
      "name": "Spech;essds",
      "total_tracks": 1,
      "cover_image": "https://images.unsplash.com/photo-1593285772408-ae48fb4d7de1?ixid=MnwyNjQwNTF8MHwxfHNlYXJjaHwzMzB8fHN0YWRpdW18ZW58MHx8fHwxNjY4MjYxNDM4&ixlib=rb-4.0.3",
      "color": "#d9d9d9"
    }
  ]
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: add track to collection

### Method: PUT

> ```
> {{URL}}/api/collections/add/track
> ```

### Body (**raw**)

```json
{
  "collection_id": "b7da9e0b-73af-43b0-ab2c-516a0603058d",
  "track_id": 112269
}
```

### 🔑 Authentication bearer

| Param | value                                                                                                                                                               | Type   |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFuc2hyYXRob2QxMiIsImlhdCI6MTY2OTEwNjYyNywiZXhwIjoxNjcxNjk4NjI3fQ.Si8RpWhUJD_LDhVp-v2-Li2cCKA52n1Er6ONAtScHBc | string |

### Response: 200

```json
{
  "success": true
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Rename collection name

### Method: PUT

> ```
> {{URL}}/api/collections/rename/65cacfa0-849c-4031-b563-b202c3571d94?name=app
> ```

### Body (**raw**)

```json
{
  "collection_id": "08edcf08-2211-4998-892b-df134a6ac8fa",
  "track_id": 112269
}
```

### Query Params

| Param | value |
| ----- | ----- |
| name  | app   |

### 🔑 Authentication bearer

| Param | value                                                                                                                                                               | Type   |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFuc2hyYXRob2QxMiIsImlhdCI6MTY2OTEwNjYyNywiZXhwIjoxNjcxNjk4NjI3fQ.Si8RpWhUJD_LDhVp-v2-Li2cCKA52n1Er6ONAtScHBc | string |

### Response: 200

```json
{
  "success": true
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: remove track from collection

### Method: PUT

> ```
> {{URL}}/api/collections/remove/track
> ```

### Body (**raw**)

```json
{
  "collection_id": "08edcf08-2211-4998-892b-df134a6ac8fa",
  "track_id": 112269
}
```

### 🔑 Authentication bearer

| Param | value                                                                                                                                                               | Type   |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFuc2hyYXRob2QxMiIsImlhdCI6MTY2OTEwNjYyNywiZXhwIjoxNjcxNjk4NjI3fQ.Si8RpWhUJD_LDhVp-v2-Li2cCKA52n1Er6ONAtScHBc | string |

### Response: 200

```json
{
  "success": true
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: delete collection

### Method: DELETE

> ```
> {{URL}}/api/collections/e6693489-b2b4-4edb-92fc-573e4497d270
> ```

### Body (**raw**)

```json
{
  "name": "Spech;essds",
  "track_id": 112269
}
```

### 🔑 Authentication bearer

| Param | value                                                                                                                                                               | Type   |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFuc2hyYXRob2QxMiIsImlhdCI6MTY2OTEwNjYyNywiZXhwIjoxNjcxNjk4NjI3fQ.Si8RpWhUJD_LDhVp-v2-Li2cCKA52n1Er6ONAtScHBc | string |

### Response: 200

```json
{
  "success": true
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

---

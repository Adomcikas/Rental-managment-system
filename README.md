## Sistemos paskirtis

### Projekto tikslas
Palengvinti klientui susirasti nuomojamą butą bei pagerinti nuomojamų butų skelbimo galimybę.

Nuomoninkas norėdamas paskelbti nuomojamą butą pirmiausia užsiregistruos internetiniame puslapyje. Paskelbiant naują skelbimą turės parašyti adresą ir pateikti skelbimą patvirtinimui. Administratorius gali patvirtinti skelbimą. Registruotas naudotojas taip pat gali palikti komentarą prie skelbimo bei įvertinti komentarą. Norint administratorius gali pašalinti netinkantį skelbimą ar šalinti naudotoją. Gali valdyti komentarus ir jų įvertinimus. Svečias gali peržiūrėti nuomojamų butų skelbimus, komentarus ir jų įvertinimus.
### Funkciniai reikalavimai

Neregistruotas naudotojas galės:
- Prisijungti prie internetinės aplikacijos.
- Peržiūrėti nuomojamus butus.
- Prisiregistruoti prie puslapio.

Registruotas naudotojas galės:
- Palikti prie skelbimo komentarą.
- Įvertinti komentarą.
- Atsijungti nuo internetinės aplikacijos.
- Sukūrti naują nuomojamo buto skelbimą.
- Redaguoti skelbimą.
- Šalinti skelbimą.
- Redaguoti komentaro įvertinimą.
- Redaguoti komentarą.

Administratorius galės:
- Patvirtinti naujo nuomojamo buto skelbimo sukūrimą.
- Šalinti naudotojus.
- Šalinti netinkamus butų skelbimus.
- Pašalinti komentarą.
- Pašalinti įvertinimą.
- Peržiūrėti komentarus.
- Peržiūrėti įvertinimus.

### Sistemos architektūra

Sistemos sudedamos dalys:
- Kliento pusė(angl. Front-End) - naudojant React.js;
- Serverio pusė(angl. Back-End) - naudojant Node.js . Duomenų bazė - MySQL.

![alt text](https://github.com/Adomcikas/Rental-managment-system/blob/main/DeploymentDiagrama.jpg?raw=true)

## Naudotojo sąsajos projektas
### Login langas
> Wireframe
![alt text](https://github.com/Adomcikas/Rental-managment-system/blob/main/wireframes/2-Login-.png?raw=true)
> Realizacija
![alt text](https://github.com/Adomcikas/Rental-managment-system/blob/main/wireframes/Realization/Login.png?raw=true)
### Register langas
> Wireframe
![alt text](https://github.com/Adomcikas/Rental-managment-system/blob/main/wireframes/3-Register.png?raw=true)
> Realizacija
![alt text](https://github.com/Adomcikas/Rental-managment-system/blob/main/wireframes/Realization/register.png?raw=true)
### visu posts langas
> Wireframe
![alt text](https://github.com/Adomcikas/Rental-managment-system/blob/main/wireframes/4-Posts.png?raw=true)
> Realizacija
![alt text](https://github.com/Adomcikas/Rental-managment-system/blob/main/wireframes/Realization/Posts_User.png?raw=true)
### vieno post langas
> Wireframe
![alt text](https://github.com/Adomcikas/Rental-managment-system/blob/main/wireframes/5-Single-post.png?raw=true)
> Realizacija
![alt text](https://github.com/Adomcikas/Rental-managment-system/blob/main/wireframes/Realization/singlePost.png?raw=true)
### vieno post visu komentaru langas
> Wireframe
![alt text](https://github.com/Adomcikas/Rental-managment-system/blob/main/wireframes/8-Comments.png?raw=true)
> Realizacija
![alt text](https://github.com/Adomcikas/Rental-managment-system/blob/main/wireframes/Realization/Comments.png?raw=true)
### vieno komentaro langas
> Wireframe
![alt text](https://github.com/Adomcikas/Rental-managment-system/blob/main/wireframes/9-Single-comment.png?raw=true)
> Realizacija
![alt text](https://github.com/Adomcikas/Rental-managment-system/blob/main/wireframes/Realization/SingleComment.png?raw=true)
### visu reviews langas
> Wireframe
![alt text](https://github.com/Adomcikas/Rental-managment-system/blob/main/wireframes/6-reviews.png?raw=true)
> Realizacija
![alt text](https://github.com/Adomcikas/Rental-managment-system/blob/main/wireframes/Realization/Reviews.png?raw=true)
### vieno review langas
> Wireframe
![alt text](https://github.com/Adomcikas/Rental-managment-system/blob/main/wireframes/7-Single-review.png?raw=true)
> Realizacija
![alt text](https://github.com/Adomcikas/Rental-managment-system/blob/main/wireframes/Realization/SingleReview.png?raw=true)
### Home langas
> Wireframe
![alt text](https://github.com/Adomcikas/Rental-managment-system/blob/main/wireframes/1-Homepage.png?raw=true)
> Realizacija
![alt text](https://github.com/Adomcikas/Rental-managment-system/blob/main/wireframes/Realization/home.png?raw=true)

## API specifikacija
### Post /api/posts
#### Sukuria nauja skelbima, gali pasiekti tik autentifikuoti žmonės
#### Resource URL
##### `https://rental-management-sytem.herokuapp.com/api/posts`
#### Resource Information

| response formats  | JSON |
| :-------------: | :-------------: |
| **requires authentication** | **Yes** |
| **possible error codes** | **403,201,400** |

#### Parameters
|     Name      |    Required   |  Description  | Default value |    Example    |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| title  | yes  | post title  |   | Butas Kaune  |
| price  | yes  | post price  |   | 150  |
| address  | yes  | post address  |   | Kestucio g.8  |
| description  | yes  | post description  |   | Naujos statybos  |
#### Example Request
##### `POST https://rental-management-sytem.herokuapp.com/api/posts`
`title='Butas Kaune'
 price=150
 address='Kestucio g.8'
 description='Naujos statybos'
 authorization: Bearer Token`
#### Example Response
```json
{
    "approved": false,
    "id": 1,
    "title": "Butas Kaune",
    "price": "150",
    "address": "Kestucio g.8",
    "description": "Naujos statybos",
    "userId": 20,
    "updatedAt": "2022-12-22T09:14:01.605Z",
    "createdAt": "2022-12-22T09:14:01.605Z"
    }
```
### Get /api/posts
#### Gauna visus skelbimus iš duomenų bazės, gali pasiekti neautentifikuoti žmonės
#### Resource URL
`https://rental-management-sytem.herokuapp.com/api/posts`
#### Resource Information
| response formats  | JSON |
| :-------------: | :-------------: |
| **requires authentication** | **No** |
| **possible error codes** | **200,500** |

#### Parameters
|     None    |
| ------------- |

#### Example Request
##### `GET https://rental-management-sytem.herokuapp.com/api/posts`
#### Example Response
```json
[
    {
        "id": 17,
        "title": "Lorem ipsum accumsan",
        "price": 150,
        "address": "Lorem ipsum accumsan",
        "description": "Lorem ipsum accumsan",
        "approved": false,
        "createdAt": "2022-12-11T19:42:51.000Z",
        "updatedAt": "2022-12-12T07:16:42.000Z",
        "userId": 18
    },
    ...
]
```
### Get /api/posts/:id
#### Gaunamas konkretus skelbimas pagal id, gali pasiekti neautentifikuoti žmonės
#### Resource URL
`https://rental-management-sytem.herokuapp.com/api/posts/:id`
#### Resource Information

| response formats  | JSON |
| :-------------: | :-------------: |
| **requires authentication** | **No** |
| **possible error codes** | **200,404,500** |

#### Parameters
|     Name      |    Required   |  Description  | Default value |    Example    |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| id  | yes  | id of the post  |   | 17  |
#### Example Request
##### `GET POST https://rental-management-sytem.herokuapp.com/api/posts/17`
#### Example Response
```json
    {
        "id": 17,
        "title": "Lorem ipsum accumsan",
        "price": 150,
        "address": "Lorem ipsum accumsan",
        "description": "Lorem ipsum accumsan",
        "approved": false,
        "createdAt": "2022-12-11T19:42:51.000Z",
        "updatedAt": "2022-12-12T07:16:42.000Z",
        "userId": 18
    }
```
### Put /api/posts/:id
#### Koreguojamas skelbimas, galima tik autentifikuotiems žmonėms
#### Resource URL
`https://rental-management-sytem.herokuapp.com/api/posts/:id`
#### Resource Information

| response formats  | JSON |
| :-------------: | :-------------: |
| **requires authentication** | **Yes** |
| **possible error codes** | **201,404,400,403** |

#### Parameters
|     Name      |    Required   |  Description  | Default value |    Example    |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| title  | yes  | post title  |   | Keiciamas title  |
| price  | yes  | post price  |   | 200  |
| address  | yes  | post address  |   | Kestucio g.8  |
| description  | yes  | post description  |   | Naujos statybos  |
| id  | yes  | id of the post  |   | 17  |
#### Example Request
 `Put POST https://rental-management-sytem.herokuapp.com/api/posts/17
  title='Keiciamas title
  price=200
  address='Kestucio g.8'
  description='Naujos statybos'
  authorization: Bearer Token`
#### Example Response
```json
    {
        "id": 17,
        "title": "Keiciamas title",
        "price": 200,
        "address": "Kestucio g.8",
        "description": "Naujos statybos",
        "approved": false,
        "createdAt": "2022-12-11T19:42:51.000Z",
        "updatedAt": "2022-12-12T07:16:42.000Z",
        "userId": 18
    }
```
### Delete /api/posts/:id
#### Ištrinamas skelbimas, galima tik autentifikuotiems žmonėms
#### Resource URL
`https://rental-management-sytem.herokuapp.com/api/posts/:id`
#### Resource Information

| response formats  | JSON |
| :-------------: | :-------------: |
| **requires authentication** | **Yes** |
| **possible error codes** | **204,500,403** |

#### Parameters
|     Name      |    Required   |  Description  | Default value |    Example    |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| id  | yes  | id of the post  |   | 17  |
#### Example Request
 `Put DELETE https://rental-management-sytem.herokuapp.com/api/posts/17
    authorization: Bearer Token`
#### Example Response
```json
    null
```
### Post /api/posts/:id1/api/comments
#### Resource URL
`https://rental-management-sytem.herokuapp.com/api/posts/:id1/api/comments`
#### Resource Information

| response formats  | JSON |
| :-------------: | :-------------: |
| **requires authentication** | **Yes** |
| **possible error codes** | **403,404,201,400** |

#### Parameters
|     Name      |    Required   |  Description  | Default value |    Example    |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| description  | yes  | edited post description  |   | Naujos statybos naujas  |
| id1  | yes  | id of the post comment belongs to  |   | 24  |
#### Example Request
##### `POST https://rental-management-sytem.herokuapp.com/api/posts/24/api/comments`
`description='Naujos statybos naujas'
 authorization: Bearer Token`
#### Example Response
```json
{
    "id": 18,
    "description": "Naujos statybos naujas",
    "postId": "24",
    "userId": 20,
    "updatedAt": "2022-12-22T09:59:45.181Z",
    "createdAt": "2022-12-22T09:59:45.181Z"
}
```

### Get /api/posts/:id1/api/comments
#### Gaunami visi komentarai konkretaus skelbimo
#### Resource URL
`https://rental-management-sytem.herokuapp.com/api/posts/:id1/api/comments`
#### Resource Information
| response formats  | JSON |
| :-------------: | :-------------: |
| **requires authentication** | **No** |
| **possible error codes** | **200,404,500** |
#### Parameters
|     Name      |    Required   |  Description  | Default value |    Example    |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| id1  | yes  | id of the post  |   | 24  |
#### Example Request
`GET https://rental-management-sytem.herokuapp.com/api/posts/24/api/comments`
#### Example Response
```json
[
    {
        "id": 18,
        "description": "Tikrai grazus vaizdas pro langa ir tikrai nebrangus butas",
        "createdAt": "2022-12-22T09:59:45.000Z",
        "updatedAt": "2022-12-22T09:59:45.000Z",
        "postId": 24,
        "userId": 20
    },
    ...
]
```
### Get /api/posts/:id1/api/comments/:id2
#### Gaunamas konkretus komentaras tam tikro skelbimo
#### Resource URL
`https://rental-management-sytem.herokuapp.com/api/posts/:id1/api/comments/:id2`
#### Resource Information
| response formats  | JSON |
| :-------------: | :-------------: |
| **requires authentication** | **No** |
| **possible error codes** | **200,404,500** |
#### Parameters
|     Name      |    Required   |  Description  | Default value |    Example    |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| id1  | yes  | id of the post  |   | 24  |
| id2  | yes  | id of the comment  |   | 18  |
#### Example Request
`GET https://rental-management-sytem.herokuapp.com/api/posts/24/api/comments/18`
#### Example Response
```json
{
    "id": 18,
    "description": "Tikrai grazus vaizdas pro langa ir tikrai nebrangus butas",
    "createdAt": "2022-12-22T09:59:45.000Z",
    "updatedAt": "2022-12-22T09:59:45.000Z",
    "postId": 24,
    "userId": 20
}
```
### Put /api/posts/:id1/api/comments/:id2
#### keičiamas komentaras pagal id2, tik autentifikuoti žmonės gali pasiekti
#### Resource URL
`https://rental-management-sytem.herokuapp.com/api/posts/:id1/api/comments/:id2`
#### Resource Information
| response formats  | JSON |
| :-------------: | :-------------: |
| **requires authentication** | **Yes** |
| **possible error codes** | **403,404,200,400** |
#### Parameters
|     Name      |    Required   |  Description  | Default value |    Example    |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| id1  | yes  | id of the post  |   | 24  |
| id2  | yes  | id of the comment  |   | 18  |
| description  | yes  | post description  |   | Naujos komentaras  |
#### Example Request
`PUT https://rental-management-sytem.herokuapp.com/api/posts/24/api/comments/18`
`description='Naujas description'
 authorization: Bearer Token`
#### Example Response
```json
{
    "message": "Updated"
}
```
### Delete /api/posts/:id1/api/comments/:id2
#### ištrinamas komentaras pagal id2, tik autentifikuoti žmonės gali pasiekti
#### Resource URL
`https://rental-management-sytem.herokuapp.com/api/posts/:id1/api/comments/:id2`
#### Resource Information
| response formats  | JSON |
| :-------------: | :-------------: |
| **requires authentication** | **Yes** |
| **possible error codes** | **403,404,204,500** |
#### Parameters
|     Name      |    Required   |  Description  | Default value |    Example    |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| id1  | yes  | id of the post  |   | 24  |
| id2  | yes  | id of the comment  |   | 19  |
#### Example Request
`DELETE https://rental-management-sytem.herokuapp.com/api/posts/24/api/comments/19`
`authorization: Bearer Token`
#### Example Response
```json
null
```
### Post /api/posts/:id1/api/comments/:id2/api/reviews
#### sukuriamas  naujas ivertinimas konkrečiam komentarui, gali irašyti įvertinimą tik autentifikuoti žmonės
#### Resource URL
`https://rental-management-sytem.herokuapp.com/api/posts/:id1/api/comments/:id2/api/reviews/`
#### Resource Information
| response formats  | JSON |
| :-------------: | :-------------: |
| **requires authentication** | **Yes** |
| **possible error codes** | **403,404,201,400** |
#### Parameters
|     Name      |    Required   |  Description  | Default value |    Example    |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| id1  | yes  | id of the post  |   | 24  |
| id2  | yes  | id of the comment  |   | 18  |
| rating  | yes  | rating of the comment  |   | 3  |
#### Example Request
`POST https://rental-management-sytem.herokuapp.com/api/posts/24/api/comments/18/api/reviews`
`rating=3
 authorization: Bearer Token`
#### Example Response
```json
{
    "id": 18,
    "rating": "3",
    "commentId": "18",
    "userId": 20,
    "updatedAt": "2022-12-22T10:28:23.569Z",
    "createdAt": "2022-12-22T10:28:23.569Z"
}
```
### Get /api/posts/:id1/api/comments/:id2/api/reviews
#### gaunami visi ivertinimai konkretaus komentaro
#### Resource URL
`https://rental-management-sytem.herokuapp.com/api/posts/:id1/api/comments/:id2/api/reviews/`
#### Resource Information
| response formats  | JSON |
| :-------------: | :-------------: |
| **requires authentication** | **No** |
| **possible error codes** | **404,200,500** |
#### Parameters
|     Name      |    Required   |  Description  | Default value |    Example    |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| id1  | yes  | id of the post  |   | 24  |
| id2  | yes  | id of the comment  |   | 18  |
#### Example Request
`GET https://rental-management-sytem.herokuapp.com/api/posts/24/api/comments/18/api/reviews`
#### Example Response
```json
[
    {
        "id": 18,
        "rating": 3,
        "createdAt": "2022-12-22T10:28:23.000Z",
        "updatedAt": "2022-12-22T10:28:23.000Z",
        "commentId": 18,
        "userId": 20
    },
    ...
]
```
### Get /api/posts/:id1/api/comments/:id2/api/reviews/:id3
#### gaunamas konkretus įvertinimas pasirinkto komentaro(id2)
#### Resource URL
`https://rental-management-sytem.herokuapp.com/api/posts/:id1/api/comments/:id2/api/reviews/:id3`
#### Resource Information
| response formats  | JSON |
| :-------------: | :-------------: |
| **requires authentication** | **No** |
| **possible error codes** | **404,200,500** |
#### Parameters
|     Name      |    Required   |  Description  | Default value |    Example    |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| id1  | yes  | id of the post  |   | 24  |
| id2  | yes  | id of the comment  |   | 18  |
| id3  | yes  | id of the review  |   | 18  |
#### Example Request
`GET https://rental-management-sytem.herokuapp.com/api/posts/24/api/comments/18/api/reviews/18`
#### Example Response
```json
{
    "id": 18,
    "rating": 3,
    "createdAt": "2022-12-22T10:28:23.000Z",
    "updatedAt": "2022-12-22T10:28:23.000Z",
    "commentId": 18,
    "userId": 20
}
```
### Put /api/posts/:id1/api/comments/id2/api/reviews/:id3
#### redaguojamas įvertinimas pagal įvertinimo id3, pasiekiama tik autentifikuotiems žmonės
#### Resource URL
`https://rental-management-sytem.herokuapp.com/api/posts/:id1/api/comments/:id2/api/reviews/:id3`
#### Resource Information
| response formats  | JSON |
| :-------------: | :-------------: |
| **requires authentication** | **Yes** |
| **possible error codes** | **403,404,200,400** |
#### Parameters
|     Name      |    Required   |  Description  | Default value |    Example    |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| id1  | yes  | id of the post  |   | 24  |
| id2  | yes  | id of the comment  |   | 18  |
| id3  | yes  | id of the review  |   | 18  |
| rating  | yes  | rating of the comment  |   | 4  |
#### Example Request
`PUT https://rental-management-sytem.herokuapp.com/api/posts/24/api/comments/18/api/reviews/18`
`rating=4
 authorization: Bearer Token`
#### Example Response
```json
{
    "message": "updated"
}
```
### Delete /api/posts/:id1/api/comments/id2/api/reviews/:id3
#### ištrinamas įvertinimas pagal įvertinimo id3, pasiekiama tik autentifikuotiems žmonės
#### Resource URL
`https://rental-management-sytem.herokuapp.com/api/posts/:id1/api/comments/:id2/api/reviews/:id3`
#### Resource Information
| response formats  | JSON |
| :-------------: | :-------------: |
| **requires authentication** | **Yes** |
| **possible error codes** | **403,404,204,400** |
#### Parameters
|     Name      |    Required   |  Description  | Default value |    Example    |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| id1  | yes  | id of the post  |   | 24  |
| id2  | yes  | id of the comment  |   | 18  |
| id3  | yes  | id of the review  |   | 18  |
#### Example Request
`DELETE https://rental-management-sytem.herokuapp.com/api/posts/24/api/comments/18/api/reviews/18`
`authorization: Bearer Token`
#### Example Response
```json
null
```
### Post /register
#### užregistruoja naudotoja
#### Resource URL
`https://rental-management-sytem.herokuapp.com/register`
#### Resource Information
| response formats  | JSON |
| :-------------: | :-------------: |
| **requires authentication** | **No** |
| **possible error codes** | **201,400** |
#### Parameters
|     Name      |    Required   |  Description  | Default value |    Example    |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| username  | yes  | username of a person  |   | John  |
| password  | yes  | password to login to the website  |   | Johnson  |
| email  | yes  | user email  |   | johnJohnson@gmail.com  |
#### Example Request
`POST https://rental-management-sytem.herokuapp.com/register
 username='John'
 password='Johnson'
 email='johnJohnson@gmail.com'`
#### Example Response
```json
{
    "user": {
        "role": "User",
        "id": 25,
        "name": "John",
        "email": "johnJohnson@gmail.com",
        "updatedAt": "2022-12-22T10:53:23.722Z",
        "createdAt": "2022-12-22T10:53:23.722Z"
    },
    "token": {token}
}
```
### Post /login
#### prijungia konkretu naudotoja
#### Resource URL
`https://rental-management-sytem.herokuapp.com/login`
#### Resource Information
| response formats  | JSON |
| :-------------: | :-------------: |
| **requires authentication** | **No** |
| **possible error codes** | **200,500** |
#### Parameters
|     Name      |    Required   |  Description  | Default value |    Example    |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| username  | yes  | username of a person  |   | John  |
| password  | yes  | password of that username  |   | Johnson  |
#### Example Request
`POST https://rental-management-sytem.herokuapp.com/login`
`username='John'
 password='Johnson'`
#### Example Response
```json
{
    "user": {
        "id": 25,
        "name": "John",
        "password": "johnson",
        "email": "johnJohnson@gmail.com",
        "role": "User",
        "iat": {integer},
        "createdAt": "2022-12-22T10:53:23.000Z",
        "updatedAt": "2022-12-22T10:53:24.000Z"
    },
    "access_token": {token}
}
```
### Get /logout
#### atjungia naudotoja nuo svetaines
#### Resource URL
`https://rental-management-sytem.herokuapp.com/logout`
#### Resource Information
| response formats  | JSON |
| :-------------: | :-------------: |
| **requires authentication** | **Yes** |
| **possible error codes** | **200,401** |
#### Parameters
|     none      |
| ------------- |
#### Example Request
`GET https://rental-management-sytem.herokuapp.com/logout`
`authorization: Bearer Token`
#### Example Response
```json
{
    "message": "User logged out successfully."
}
```
## Išvados

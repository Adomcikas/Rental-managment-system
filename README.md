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
| requires authentication | Yes |
| possible error codes | 403,201,400 |
#### Parameters
|     Name      |    Required   |  Description  | Default value |    Example    |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| title  | yes  | post title  |   | Butas Kaune  |
| price  | yes  | post price  |   | 150  |
| address  | yes  | post address  |   | Kestucio g.8  |
| description  | yes  | post description  |   | Naujos statybos  |
#### Example Request
##### `https://rental-management-sytem.herokuapp.com/api/posts`
`title='Butas Kaune'
 price=150
 address='Kestucio g.8'
 description='Naujos statybos'
 authorization: Bearer Token`
#### Example Response
   `{
    "approved": false,
    "id": 23,
    "title": "Butas kauno miesto centre",
    "price": "10",
    "address": "Kauno miesto centras Kestucio g. 8",
    "description": "Naujos statybos butas netoli kauno pilies",
    "userId": 20,
    "updatedAt": "2022-12-22T09:14:01.605Z",
    "createdAt": "2022-12-22T09:14:01.605Z"
    }`
### Get /api/posts
#### Gauna visus skelbimus iš duomenų bazės, gali pasiekti neautentifikuoti žmonės
#### Resource URL
`https://rental-management-sytem.herokuapp.com/api/posts`
#### Resource Information
#### Parameters
#### Example Request
#### Example Response
### Get /api/posts/:id
#### Gaunamas konkretus skelbimas pagal id, gali pasiekti neautentifikuoti žmonės
#### Resource URL
`https://rental-management-sytem.herokuapp.com/api/posts/:id`
#### Resource Information
#### Parameters
#### Example Request
#### Example Response
### Put /api/posts/:id
#### Koreguojamas skelbimas, galima tik autentifikuotiems žmonėms
#### Resource URL
`https://rental-management-sytem.herokuapp.com/api/posts/:id`
#### Resource Information
#### Parameters
#### Example Request
#### Example Response
### Delete /api/posts/:id
#### Ištrinamas skelbimas, galima tik autentifikuotiems žmonėms
#### Resource URL
`https://rental-management-sytem.herokuapp.com/api/posts/:id`
#### Resource Information
#### Parameters
#### Example Request
#### Example Response
### Post /api/posts/:id1/api/comments
#### Resource URL
#### Resource Information
#### Parameters
#### Example Request
#### Example Response
### Get /api/posts/:id1/api/comments
#### Resource URL
#### Resource Information
#### Parameters
#### Example Request
#### Example Response
### Get /api/posts/:id1/api/comments/id2
#### Resource URL
#### Resource Information
#### Parameters
#### Example Request
#### Example Response
### Put /api/posts/:id1/api/comments/id2
#### Resource URL
#### Resource Information
#### Parameters
#### Example Request
#### Example Response
### Delete /api/posts/:id1/api/comments/id2
#### Resource URL
#### Resource Information
#### Parameters
#### Example Request
#### Example Response
### Post /api/posts/:id1/api/comments/id2/api/reviews
#### Resource URL
#### Resource Information
#### Parameters
#### Example Request
#### Example Response
### Get /api/posts/:id1/api/comments/id2/api/reviews
#### Resource URL
#### Resource Information
#### Parameters
#### Example Request
#### Example Response
### Get /api/posts/:id1/api/comments/id2/api/reviews/:id3
#### Resource URL
#### Resource Information
#### Parameters
#### Example Request
#### Example Response
### Put /api/posts/:id1/api/comments/id2/api/reviews/:id3
#### Resource URL
#### Resource Information
#### Parameters
#### Example Request
#### Example Response
### Delete /api/posts/:id1/api/comments/id2/api/reviews/:id3
#### Resource URL
#### Resource Information
#### Parameters
#### Example Request
#### Example Response
### Post /register
#### Resource URL
#### Resource Information
#### Parameters
#### Example Request
#### Example Response
### Post /login
#### Resource URL
#### Resource Information
#### Parameters
#### Example Request
#### Example Response
### Get /logout
#### Resource URL
#### Resource Information
#### Parameters
#### Example Request
#### Example Response
## Išvados

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

![alt text](https://github.com/Adomcikas/Rental-managment-system/blob/main/DeploymentDiagram.jpg?raw=true)

## Sistemos paskirtis

### Projekto tikslas
Palengvinti klientui susirasti nuomojamą butą bei pagerinti nuomojamų butų skelbimo galimybę.
Nuomoninkas norėdamas paskelbti nuomojamą butą pirmiausia užsiregistruos internetiniame puslapyje. Paskelbiant naują skelbimą turės pasirinkti arba parašyti adresą(miestas, gatvė, namas, butas) ir pateikti skelbimą patvirtinimui. Administratorius gali patvirtinti skelbimą, taip pat galivaldyti pasirenkamų miestų, gatvių, namų ir butų sąrašus. Norint administratorius gali pašalinti netinkantį skelbimą ar šalinti naudotoją. Svečiasgali peržiūrėti nuomojamų butų skelbimus.
### Funkciniai reikalavimai

Neregistruotas naudotojas galės:
- Prisijungti prie internetinės aplikacijos.
- Peržiūrėti nuomojamus butus.

Registruotas naudotojas galės:
- Atsijungti nuo internetinės aplikacijos
- Sukūrti naują nuomojamo buto skelbimą.
- Redaguoti skelbimą.
- šalinti skelbimą.

Administratorius galės:
- Patvirtinti naujo nuomojamo buto skelbimo sukūrimą.
- Šalinti naudotojus.
- Šalinti netinkamus butų skelbimus.
- Valdyti miestų sąrašą.
- valdyti Miesto namų sąrašą.
- valdyti namo butų sąrašą.

### Sistemos architektūra

Sistemos sudedamos dalys:
- Kliento pusė(angl. Front-End) - naudojant React.js;
- Serverio pusė(angl. Back-End) - naudojant Node.js . Duomenų bazė - MySQL.

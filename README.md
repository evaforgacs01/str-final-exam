
Feladatok
1. A megjelenő táblázatban készítsd el a törlés funkcionalitást! A törlés gombra 
kattintva a példa adatbázisból törlődjön az adott rekord. Törlés előtt jelenjen 
meg egy megerősítő kérdés. A törléshez a UserService osztályban is hozd 
létre a szükséges metódust. 

2. Tedd szűrhetővé a táblázatban megjelenő adatokat! A táblázat felett hozz létre 
egy beviteli mezőt. A beviteli mező értékének módosítása esetén a táblázat 
azon rekordjai maradjanak láthatóak, amelyek `name` mezője részben vagy 
egészben tartalmazza a beviteli mezőbe gépelt szöveget. 

3. Tedd rendezhetővé a táblázatban megjelenő adatokat! Ha a felhasználó a 
táblázat fejléceire kattint, akkor a megjelenő rekordok rendeződjenek az adott 
oszlop szerint növekvő sorrendbe. Ha egy másik oszlop fejlécére kattint, akkor 
pedig a szerint az oszlop szerint, amelyre utoljára kattintottak. Csak növekvő 
sorrendbe kell rendezni. 

4. Tedd módosíthatóvá a táblázatban megjelenő rekordokat! A táblázat sorainak 
utolsó cellájában lévő szerkesztés gombra kattintva jelenleg megjelenik a 
szerkesztő oldal. Az oldalon már létre vannak hozva a beviteli mezők. Ha a 
mentés gombra kattint a felhasználó, akkor az adatbázisban kerüljenek 
frissítésre az adott rekord adatai. A módosításhoz a UserService osztályban is 
hozd létre a szükséges metódust. 

5. Validáld az adatokat a szerkesztő űrlapon! Minden input elem előtt 
kommentben feltüntettük a validálás szabályait. Attribútumok és reguláris 
kifejezések használatával validáld a mezőkbe írt adatokat. Ha nem megfelelő 
az adat, akkor jelenjen meg releváns hibaüzenet közvetlenül a hibás adatot 
tartalmazó mező alatt. Ha az űrlap bármely mezője hibás adatot tartalmaz, a 
mentés gomb legyen letiltva és ne legyen az űrlap elküldhető. Sikeres 
módosítás után navigáljon vissza az alkalmazás a táblázathoz.

6. Tedd lehetővé új rekord rögzítését. Hozz létre egy teljes szélességű gombot a 
lista oldalon a táblázat felett, amelyre kattintva szintén a szerkesztő űrlap 
jelenik meg, de üres állapotban. Az adatbevitel során ugyanazok a validációs 
szabályok legyenek érvényesek, mint a szerkesztés esetén. Megfelelő kitöltés 
után a mentés gombra kattintva történjen meg az új rekord beszúrása az 
adatbázisba és navigáljon vissza az oldal a táblázathoz. A beszúráshoz a 
UserService osztályban is hozd létre a szükséges metódusokat.

# StrFinalExam

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

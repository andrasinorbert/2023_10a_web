# CSS bevezető

## Hosszmértékek

### Abszolút

- in: inch
- cm: centiméter
- mm: milliméter
- pt: pont (1/72 inch)
- pc: pica (12 pont)

### Relatív

- em:
  - az em elé írt szám az a szorzót ahány szorosára kívánjuk változtatni az aktuális értéket.
- ex:
  - az adott betűtípus kis x betűjének magasságához képest.
- px (pixel):
  - képpixel
- %:
  - százalékos érték

## URL megadása

- használat: pl kép behivatkozásakor
- pl1: background-image: url('kepek/hatter.jpg');
- pl2: background-image: url('http://www.vala.hol/kep.png');

## Színek - color

- névvel való megadás
  - red, black, white stb...
- hexadecimális kóddal:
  - #ff0000, #ffffff, #000000 stb...
  - 1-2 char: red
  - 3-4 char: green
  - 5-6 char: blue
  - értékek: hexadecimálisan 0-9,a,b,c,d,e,f
- rgb kóddal:
  - rgb(255,0,0), rgb(255, 255, 255), rgb(0,0,0) stb...
    - rgb 3 paramétere: 0-255 egész szám
    - rgb= red-green-blue
- pl: color:red;

### Átlátszóság megadása

- 0 és 1 közti érték
- rgba(255, 255, 255, 0.5)

## CSS szelektorok

### Univerzális szelektor (*)

### Típus szelektor (E)

### Szelektor leszármazott elemre (E F)

### Szelektor közvetlen testvérre (E+F)

### Szelektor általános (azaz tetszőleges) testvérre (E ~ F)

### Osztályok (class)

### Egyedi azonosítók (ID)

## CSS elemek

- font-size
  - abszolut:
    - xx-small
    - x-small
    - small
    - medium (ez az alapértelmezett)
    - large
    - x-large
    - xx-large.
  - relativ:
    - smaller
    - larger
  - hosszúságérték:
    - pl: 12px
  - százalékos:
    - pl: 120%
  - pl:  \{font-size:200%\}
- font-style:
  - italic
    - dőlt betű
  - normal
- font-weight:
  - betű vastagság
  - bold
  - bolder
  - normal
- letter-spacing
  - betűköz
  - pozitív vagy negatív távolságérték
  - pl: letter-spacing: 5px;
- word-spacing
  - szavak közti távolság
  - pozitív vagy negatív távolságérték
  - pl: word-spacing: 0.5em;
- line-height:
  - sorok közötti távolság
  - pozitív számérték
  - pozitív hosszúságérték
  - százalékos érték
  - normal
- text-align:
  - vízszintes igazítás
  - left
  - right
  - center
  - justify (=sorkizárt)
- text-indent:
  - bekezdés első sorának behúzása
  - hosszúságérték
  - százalékos és relatív értékek
- text-decoration:
  - underline - aláhúzott
  - overline - felülvonás
  - line-through - áthúzott szöveg
  - none - dekorációmentes

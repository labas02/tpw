# CoffeeHub - Moderní webová stránka

## Přehled projektu

CoffeeHub je moderní webová stránka pro e-commerce prodej prémiové kávy. Projekt byl vytvořen s použitím sémantického HTML5, moderního CSS3 a responzivního designu.

## Struktura projektu

```
CoffeeHub/
├── index.html           # Domovská stránka
├── products.html        # Stránka s produkty
├── css/
│   ├── reset.css        # CSS reset pro konzistenci
│   ├── base.css         # Design tokeny a základní styly
│   ├── components.css   # Komponenty a jejich modifikátory
│   └── utilities.css    # Utility třídy
└── files/
    ├── logo.png         # Logo CoffeeHub
    ├── coffee1.jpg      # Fotografie kávy 1
    ├── coffee2.jpg      # Fotografie kávy 2
    ├── coffee3.jpg      # Fotografie kávy 3
    ├── coffee4.jpg      # Fotografie kávy 4
    └── coffee5.jpg      # Fotografie kávy 5
```

## Klíčové vlastnosti

### 1. Sémantické HTML5
- Správné použití `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Správné atributy `lang`, `charset`, `viewport`
- Přístupné formuláře s `<label>` prvky

### 2. Design tokeny
- **Barvy**: Primární (hnědá #6B4423), sekundární (krémová #F5F1E8), akcentní (žlutá #FFD700)
- **Typografie**: Playfair Display (nadpisy), Inter (text)
- **Spacing**: Konzistentní systém s jednotkami rem

### 3. Komponenty CSS
- **Button** - s modifikátory `--primary`, `--secondary`, `--small`
- **Card** - flip karty s CSS3 transformacemi
- **Header** - responzivní s hamburger menu
- **Navigation** - s aktivním stavem
- **Footer** - s vícesloupcovým layoutem

### 4. Responzivní design
- Mobile-first přístup
- Breakpointy: 768px (tablet), 1024px (desktop)
- Hamburger menu pro mobilní zařízení
- Flexbox a CSS Grid pro layouty

### 5. Interaktivní prvky
- **Flip karty** - CSS3 transformace bez JavaScriptu (checkbox hack)
- **Hover efekty** - na tlačítka a karty
- **Formulář** - s validací a stylováním

### 6. Disclaimer
- Viditelný disclaimer na konci stránky
- Upozornění na studentský projekt
- Žlutý background pro zvýraznění

## Validace

✓ HTML5 je validní  
✓ CSS3 syntaxe je správná  
✓ Všechny obrázky jsou správně propojeny  
✓ Všechny CSS soubory jsou správně importovány  

## Barvy

| Název | Hex | RGB | Použití |
|-------|-----|-----|---------|
| Primární hnědá | #6B4423 | rgb(107, 68, 35) | Tlačítka, header |
| Krémová | #F5F1E8 | rgb(245, 241, 232) | Background |
| Žlutá | #FFD700 | rgb(255, 215, 0) | Disclaimer, akcentní prvky |
| Tmavá hnědá | #3D2817 | rgb(61, 40, 23) | Text, footer |
| Světlá šedá | #E8E4DC | rgb(232, 228, 220) | Hrany, separátory |

## Typografie

- **Nadpisy**: Playfair Display, váha 600-700
- **Text**: Inter, váha 400-500
- **Velikosti**: 
  - h1: 3.5rem
  - h2: 2.5rem
  - h3: 1.5rem
  - p: 1rem

## Responsive Breakpointy

- **Mobil**: < 768px
- **Tablet**: 768px - 1023px
- **Desktop**: ≥ 1024px

## Komponenty

### Button
```html
<button class="button button--primary">Koupit</button>
<button class="button button--secondary">Více info</button>
<button class="button button--small">Malé tlačítko</button>
```

### Card (Flip karta)
```html
<div class="card">
    <input type="checkbox" id="flip-1" class="card__toggle" hidden>
    <div class="card__front card__content">
        <!-- Přední strana -->
    </div>
    <div class="card__back card__content">
        <!-- Zadní strana -->
    </div>
</div>
```

### Navigation
```html
<nav class="nav">
    <ul class="nav__list">
        <li class="nav__item">
            <a href="#" class="nav__link nav__link--active">Aktivní</a>
        </li>
    </ul>
</nav>
```

## Poznámky

- Projekt je určen pro vzdělávací účely
- Všechny produkty a informace jsou smyšlené
- Formulář kontaktu není funkční (bez backendu)
- Tlačítka "Koupit" nejsou funkční (bez e-commerce systému)

## Autor

Vytvořeno jako studentský projekt v rámci kurzu Tvorba Webových Aplikací.

## Licence

Tento projekt je určen pouze pro vzdělávací účely.

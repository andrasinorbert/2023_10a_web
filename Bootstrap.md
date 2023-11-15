# Bootstrap 5

## Használat

Head-en belül:

```html
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
```

## Container-ek

### Container

- van margó
- ablakszélességgel változik

```html
<div class="container" style="background-color:aqua">
    <p>Ez egy container</p>
</div>
```

### Container-fluid

```html
    <div class="container-fluid" style="background-color:rosybrown">
        <p>Ez egy container-fluid</p>
    </div>
```

## Padding

| class | _ |
| --- | --- |
| p | minden oldal |
| pt | padding-top |
| pb | padding-bottom |
| border | szegély |
| bg-dark | háttérszín |
| bg-primary | háttérszín |
| text-white | betűszín |

## Grid rendszer

1. Sorokat hozunk létre (row)
1. Ezen belül oszlopokat (col)
1. Egy soron belül max 12 col fér el

Képernyő méretek:
sm|md|lg|xl|xxl


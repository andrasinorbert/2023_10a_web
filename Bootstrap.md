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

```html
<div class="container-fluid">
    <div class="row">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 bg-primary">Col1</div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 bg-secondary">Col2</div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 bg-success">Col3</div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 bg-danger">Col4</div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 bg-warning">Col5</div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 bg-info">Col6</div>
    </div>
</div>
```

## Tipográfia

[link](https://www.w3schools.com/bootstrap5/bootstrap_typography.php)

```html
<p class="h1">h1 Bootstrap heading</p>
<p class="h2">h2 Bootstrap heading</p>
<p class="h3">h3 Bootstrap heading</p>
<p class="h4">h4 Bootstrap heading</p>
<p class="h5">h5 Bootstrap heading</p>
<p class="h6">h6 Bootstrap heading</p>

<h1 class="display-1">Display 1</h1>
<h1 class="display-2">Display 2</h1>
<h1 class="display-3">Display 3</h1>
<h1 class="display-4">Display 4</h1>
<h1 class="display-5">Display 5</h1>
<h1 class="display-6">Display 6</h1>

<p class="lead">This paragraph stands out.</p>
<p class="text-start">Left-aligned text.</p>
<p class="text-end">Right-aligned text.</p>      
<p class="text-center">Center-aligned text.</p>
<p class="text-nowrap">No wrap text. No wrap text. No wrap text. No wrap text.</p>
<p class="text-lowercase">Lowercased text.</p>
<p class="text-uppercase">Uppercased text.</p>      
<p class="text-capitalize">Capitalized text.</p>
```

## Colors

### Text colors

```html
<p class="text-muted">This text is muted.</p>
<p class="text-primary">This text is important.</p>
<p class="text-success">This text indicates success.</p>
<p class="text-info">This text represents some information.</p>
<p class="text-warning">This text represents a warning.</p>
<p class="text-danger">This text represents danger.</p>
<p class="text-secondary">Secondary text.</p>
<p class="text-dark">This text is dark grey.</p>
<p class="text-body">Default body color (often black).</p>
<p class="text-light">This text is light grey (on white background).</p>
<p class="text-white">This text is white (on white background).</p>
```

#### opacity állitás (átlátszóság, halványítás)

```html
<p class="text-black-50">Black text with 50% opacity on white background</p>
<p class="text-white-50 bg-dark">White text with 50% opacity on black background</p>
```

### Background colors

```html
<div class="bg-primary p-3"></div>
<div class="bg-success p-3"></div>
<div class="bg-info p-3"></div>
<div class="bg-warning p-3"></div>
<div class="bg-danger p-3"></div>
<div class="bg-secondary p-3"></div>
<div class="bg-dark p-3"></div>
<div class="bg-light p-3"></div>

<p class="text-bg-primary">This text is important.</p>
<p class="text-bg-success">This text indicates success.</p>
<p class="text-bg-info">This text represents some information.</p>
<p class="text-bg-warning">This text represents a warning.</p>
<p class="text-bg-danger">This text represents danger.</p>
<p class="text-bg-secondary">Secondary background color.</p>
<p class="text-bg-dark">Dark grey background color.</p>
<p class="text-bg-light">Light grey background color.</p>
```

## Tables

```html
<table class="table">
<table class="table table-striped">
<table class="table table-bordered">
<table class="table table-hover">
<table class="table table-dark">
<table class="table table-dark table-striped">
<table class="table table-dark table-hover">
<table class="table table-borderless">
```

### sorok formázása

```html
<table class="table">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Default</td>
        <td>Defaultson</td>
        <td>def@somemail.com</td>
      </tr>      
      <tr class="table-primary">
        <td>Primary</td>
        <td>Joe</td>
        <td>joe@example.com</td>
      </tr>
      <tr class="table-success">
        <td>Success</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>
      <tr class="table-danger">
        <td>Danger</td>
        <td>Moe</td>
        <td>mary@example.com</td>
      </tr>
      <tr class="table-info">
        <td>Info</td>
        <td>Dooley</td>
        <td>july@example.com</td>
      </tr>
      <tr class="table-warning">
        <td>Warning</td>
        <td>Refs</td>
        <td>bo@example.com</td>
      </tr>
      <tr class="table-active">
        <td>Active</td>
        <td>Activeson</td>
        <td>act@example.com</td>
      </tr>
      <tr class="table-secondary">
        <td>Secondary</td>
        <td>Secondson</td>
        <td>sec@example.com</td>
      </tr>
      <tr class="table-light">
        <td>Light</td>
        <td>Angie</td>
        <td>angie@example.com</td>
      </tr>
      <tr class="table-dark">
        <td>Dark</td>
        <td>Bo</td>
        <td>bo@example.com</td>
      </tr>
    </tbody>
  </table>
  ```

  Class 	Description
.table-primary 	Blue: Indicates an important action
.table-success 	Green: Indicates a successful or positive action
.table-danger 	Red: Indicates a dangerous or potentially negative action
.table-info 	Light blue: Indicates a neutral informative change or action
.table-warning 	Orange: Indicates a warning that might need attention
.table-active 	Grey: Applies the hover color to the table row or table cell
.table-secondary 	Grey: Indicates a slightly less important action
.table-light 	Light grey table or table row background
.table-dark 	Dark grey table or table row background

### table head

```html
<table class="table">
    <thead class="table-dark">
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>
      <tr>
        <td>Mary</td>
        <td>Moe</td>
        <td>mary@example.com</td>
      </tr>
      <tr>
        <td>July</td>
        <td>Dooley</td>
        <td>july@example.com</td>
      </tr>
    </tbody>
  </table>
  <table class="table">
    <thead class="table-success">
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>
      <tr>
        <td>Mary</td>
        <td>Moe</td>
        <td>mary@example.com</td>
      </tr>
      <tr>
        <td>July</td>
        <td>Dooley</td>
        <td>july@example.com</td>
      </tr>
    </tbody>
  </table>
  ```

### Oldalra görgethető táblázat

```html
 <div class="table-responsive">
  <table class="table">
    ...
  </table>
</div> 
```


.table-responsive-sm 	< 576px
.table-responsive-md 	< 768px
.table-responsive-lg 	< 992px
.table-responsive-xl 	< 1200px
.table-responsive-xxl 	< 1400px

## images

## alerts

## buttons

## list-groups

## dropdown
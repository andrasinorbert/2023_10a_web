function osszegzes_osszeadassal(lista){
    let s=0;
    for(let i =0; i<lista.length; i++){
        s=s+lista[i];
    }
    return s;
}
function osszegzes_szorzassal(lista){
    let s=1;
    for(let i =0; i<lista.length; i++){
        s=s*lista[i];
    }
    return s;
}
console.log(osszegzes_osszeadassal([3,4,5]));
console.log(osszegzes_szorzassal([3,4,5]));


function osszegzes(lista,f){
    let s=lista[0];
    for(let i =1; i<lista.length; i++){
        s=f(s,lista[i]);
    }
    return s;
}
function osszead(num1, num2){
    return num1+num2;
}
function osszeszoroz(num1, num2){
    return num1*num2;
}
console.log(osszegzes([3,4,5], osszead));
console.log(osszegzes([3,4,5], osszeszoroz));
console.log(osszegzes([3,4,5], function(num1, num2){return num1*num2;}));

function megszamlalas(lista, t){
    let c=0;
    for(let i=0;i<lista.length; i++){
        if(t(lista[i])){
            c++;
        }
    }
    return c;
}
function oszthato_e_kettovel(num){
    return num%2==0;
}
console.log(megszamlalas([1,2,3,4,5,6], oszthato_e_kettovel));
console.log(megszamlalas([1,2,3,4,5,6], function(n){return n%2==0;}));

function maxkiv(lista){
    let max_ertek=lista[0];
    let max_index=0;
    for(let i=1; i<lista.length;i++){
        if(max_ertek<lista[i]){
            max_ertek=lista[i];
            max_index=i;
        }
    }
    return [max_index, max_ertek];
}
console.log(maxkiv([1,2,3,4,5,6]));

function szelsoertek_kereses(lista, t){
    let ertek=lista[0];
    let index=0;
    for(let i=1; i<lista.length;i++){
        if( t(lista[i], ertek) ){
            ertek=lista[i];
            index=i;
        }
    }
    return [index, ertek];
}
function kisebb(num1, num2){
    return num1<num2;
}
console.log(szelsoertek_kereses([1,2,3,4,5,6], kisebb));
console.log(szelsoertek_kereses([1,2,3,4,5,6], function(x1, x2){return x1<x2;}));

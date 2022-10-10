import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';
@Injectable({
providedIn: 'root'
})
export class ProduitService {
produits : Produit[]; //un tableau de Produit
constructor() {
this.produits = [
{ idProduit : 1, nomProduit : "PC Asus", prixProduit : 3000.600, dateCreation: new Date("01/14/2011")},
{ idProduit : 2, nomProduit : "Imprimante Epson", prixProduit : 450, dateCreation : new Date("12/17/2010")},
{ idProduit : 3, nomProduit :"iphone", prixProduit : 2500, dateCreation : new Date("02/20/2017")},
{ idProduit : 5, nomProduit :"tv", prixProduit : 1500, dateCreation : new Date("02/20/2018")},
];
}
listeProduits():Produit[] {
  return this.produits;
}
ajouterProduit( prod: Produit){
this.produits.push(prod);
}
}
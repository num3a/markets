import {IonicApp, Page, NavController, NavParams} from 'ionic-framework/ionic';


@Page({
  template: `
  <ion-content padding>
    <h2>I'm a modal!</h2>
    <button (click)="close()">Close</button>
    <p>{{this.publicationRaw}}</p>
  </ion-content>`
})
export class PublicationViewModal {
  constructor(app: IonicApp, nav: NavController, navParams: NavParams) {
    this.nav = nav;
    this.publicationRaw = "";
}

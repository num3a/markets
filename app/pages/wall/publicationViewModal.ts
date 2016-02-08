import {IonicApp, Page, NavController,ViewController, NavParams} from 'ionic-framework/ionic';


@Page({
  template: `
  
  <ion-toolbar class="android-attr">
  <ion-title>
    Publication title
  </ion-title>
  <ion-buttons start>
    <button (click)="dismiss()">
      <span primary showWhen="ios">Close</span>
      <ion-icon name='close' showWhen="android"></ion-icon>
    </button>
  </ion-buttons>
</ion-toolbar>
  
  <ion-content padding>
    <p>
    In this report we use a big data approach to look at the evolution of the link between oil and oil-linked currencies and then examine what impact our outlook for oil prices has on that link.
    <
Among the commodities we follow in this report, oil appears to offer the best risk/reward ratio
Driven by steady and visible declines in shale oil output, US crude production should contract this year and lead to a decrease in overall non-OPEC supply. While the significant global oversupply situation will persist through H1 16, assuming macroeconomic and oil demand growth remains healthy, both global and OECD crude/product stockbuilds should get smaller in H2 16 vs H1 16, with OECD crude/product stocks roughly balanced in H2 16. When this happens, the oil markets should finally see evidence of light at the end of the tunnel, which in turn should enable them to begin rebalancing in 2017..
<br /><br />
<b>Applying big data to oil currencies</b>
<br /><br />
Currencies are undervalued according to our model based on a big data approach. Indeed, we use here a newsflow indicator combining news on oil and oil-linked currencies. A stabilisation of oil prices (and eventually higher oil price) as well as three identified game-changers (see p.19) should allow the correlation between oil and its related currencies to break down from current levels.
Our favourite oil-linked currencies are the Canadian dollar and the Mexican peso
<br /><br />
We see these currencies as undervalued and more exposed to a short squeeze in the scenario of a stabilisation of oil prices as their net positions are particularly short. A bullish outlook on oil price should naturally lend support to oil-linked currencies. The Russian ruble is also very attractive under a realistic scenario of a gradual easing of sanctions and the necessary inclusion of President Putin in the circle of European politicians to solve the Syrian and migrant issues. On the other hand, we expect the Australian and New Zealand dollars to remain under pressure.
We also dig into the various investment strategies shown in the table below
<br /><br />

  <img src="http://placeholdit.imgix.net/~text?txtsize=33&txt=img&w=150&h=150"> <br /><br />

In particular, we like to position for a mean-reverting vol ratio between oil and the Canadian dollar (against US dollar). In a combination of oil and inflation themes, we like to be long on the Norwegian krone as the central bank could be forced to adopt a more hawkish stance.</p>
  </ion-content>`
})
export class PublicationViewModal {
  constructor(app: IonicApp, nav: NavController, navParams: NavParams, viewCtrl : ViewController) {
    this.nav = nav;
    this.viewCtrl = viewCtrl;
  }
  
  dismiss(){
    console.log('close modal');
   
    this.nav.pop();
  }
}

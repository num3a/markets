import {IonicApp, Page, Modal, NavController, NavParams} from 'ionic-framework/ionic';

import {ForwardPage} from '../forward/forward';
import {PublicationViewModal} from '../wall/publicationViewModal';

@Page({
  templateUrl: 'build/pages/wall/wall.html'
})
export class WallPage {
  constructor(app: IonicApp, nav: NavController, navParams: NavParams) {
    this.nav = nav;
    this.items =[];
    
    for(let i =0; i < 30; i++) {
      this.items.push({
        title : "Hello world!",
        likeCount : 0,
        liked : false      });
    }
  }
  doRefresh(refresher) {
  console.log('Refreshing!', refresher);

  setTimeout(() => {
    console.log('Pull to refresh complete!', refresher);
    refresher.complete();
  })
}

   
doStarting() {
  console.log('Pull started!');
}

doPulling(amt) {
  console.log('You have pulled', amt);
}

openForward(event){
  this.nav.push(ForwardPage,{  });
}

showModal(event, item){
  let text = item.publicationRaw;
  let modal = Modal.create(PublicationViewModal);
  this.nav.present(modal);
}

likePublication(event, item){
  if(item.liked === false){
    item.likeCount++;
    item.liked = true;
  }
  else{
    item.likeCount--;
    item.liked = false;
  }
}


}

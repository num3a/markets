var Parse = require('parse');

export class WallItem extends Parse.Object {
    title : string;
    
  constructor() {
    // Pass the ClassName to the Parse.Object constructor
    super('WallItem');
    // All other initialization
    this.title = "okay";
    this.set('title', this.title);
  }
}

Parse.Object.registerSubclass('WallItem', WallItem);

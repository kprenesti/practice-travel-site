import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";

class RevealOnScroll {
  constructor(selector, offset){
    this.itemsToReveal = $(selector);
    this.hideInitially();
    this.createWaypoints(offset);
  }
  hideInitially(){
    this.itemsToReveal.addClass('revealedItem');
  }

  createWaypoints(offset){
    this.itemsToReveal.each(function(){
      var currentItem = this;
      new Waypoint({
        element: currentItem,
        handler: function(){
          $(currentItem).addClass('revealedItem--isRevealed');
        },
        offset: offset
      });
    })
  }
}

export default RevealOnScroll;

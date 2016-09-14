import $ from 'jquery';

class Modal {
  constructor(){
    this.openModalButton = $('.open-modal');
    this.modal = $('.modal');
    this.closeModalBtn = $('.modal__close');
    this.events();
  }

  openModal(){
    this.modal.addClass('modal--is-visible');
    return false;
  }

  closeModal(){
    this.modal.removeClass('modal--is-visible');
  }

  events(){
    //click open modal button
    this.openModalButton.click(this.openModal.bind(this));
    //click the x close modal button
    this.closeModalBtn.click(this.closeModal.bind(this));
    //press any keyboard key
    $(document).keyup(this.keyPressHandler.bind(this));
  }
  keyPressHandler(e){
    if(e.keyCode == 27) {
      this.closeModal();
    }
  }
}

export default Modal

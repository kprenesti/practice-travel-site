import $ from 'jquery';

import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/stickyHeader'
import Modal from './modules/Modal';

var mobileMenu = new MobileMenu(),
    stickyHeader = new StickyHeader(),
    modal = new Modal();


new RevealOnScroll('.feature-item',  "85%");
new RevealOnScroll('.testimonial', "90%");

import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/stickyHeader'


var mobileMenu = new MobileMenu(),
    stickyHeader = new StickyHeader();


new RevealOnScroll('.feature-item',  "85%");
new RevealOnScroll('.testimonial', "60%");

import fb from 'assets/icons/fb-icon.svg';
import ig from 'assets/icons/ig-icon.svg';
import whatsapp from 'assets/icons/whats-app-icon.svg';
import twitter from 'assets/icons/twitter-icon.svg';

export const footer = {
  categories: [
    {
      title: 'Women',
      links: [
        { title: 'All Women', link: '/women/all' },
        { title: 'Skirts', link: '/women/skirts' },
        { title: 'T-Shirts', link: '/women/t-shirts' },
        { title: 'Tops', link: '/women/tops' },
        { title: 'Jackets', link: '/women/jackets' },
      ],
    },
    {
      title: 'Men',
      links: [
        { title: 'All Men', link: '/men/all' },
        { title: 'Skirts', link: '/men/skirts' },
        { title: 'T-Shirts', link: '/men/t-shirts' },
        { title: 'Tops', link: '/men/tops' },
        { title: 'Jackets', link: '/men/jackets' },
      ],
    },
    {
      title: 'Kids',
      links: [
        { title: 'All Kids', link: '/kids/all' },
        { title: 'Skirts', link: '/kids/skirts' },
        { title: 'T-Shirts', link: '/kids/t-shirts' },
        { title: 'Tops', link: '/kids/tops' },
        { title: 'Jackets', link: '/kids/jackets' },
      ],
    },
    {
      title: 'Shopping',
      links: [
        { title: 'Your cart', link: '/cart' },
        { title: 'Your orders', link: '/profile/orders' },
        { title: 'Compared items', link: '/compared-items' },
        { title: 'Wishlist', link: '/profile/wishlist' },
        { title: 'Shipping Details', link: '/shipping-details' },
      ],
    },
    {
      title: 'More links',
      links: [
        { title: 'Blogs', link: '/blogs' },
        { title: 'Gift center', link: '/gifts' },
        { title: 'Buying guides', link: '/guides' },
        { title: 'New arrivals', link: '/new-arrivals' },
        { title: 'Clearance', link: '/clearance' },
      ],
    },
  ],
  social: [
    {
      link: '/',
      icon: fb,
      alt: 'facebook',
    },
    {
      link: '/',
      icon: ig,
      alt: 'instagram',
    },
    {
      link: '/',
      icon: whatsapp,
      alt: 'whatsapp',
    },
    {
      link: '/',
      icon: twitter,
      alt: 'twitter',
    },
  ],
};

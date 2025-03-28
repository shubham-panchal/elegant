import { productImages } from "../assets/imageKeyMapping";
import { valuesImages } from "../assets/imageKeyMapping";

export const FORM_FIELDS = [
    {
        fieldname: 'fullname',
        fielderror: '',
        placeholder: 'Your name',
        type: 'text',
        required: true,
    },
    {
        fieldname: 'username',
        fielderror: '',
        placeholder: 'Username',
        type: 'text',
        required: true
    },
    {
        fieldname: 'email',
        fielderror: '',
        placeholder: 'Email address',
        type: 'email',
        required: true
    },
    {
        fieldname: 'password',
        fielderror: '',
        placeholder: 'Password',
        type: 'password',
        required: true
    },
]

export const HOME_CAROUSEL_SETTINGS = {
    centeredSlides: false,
    spaceBetween: 20,
    slidesPerView: "auto",
    speed: 700,
    loop: true,
    navigation: true,
    pagination: {
        dynamicBullets: true,
        clickable: true,
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    pagination: { clickable: true },
    scrollbar: { draggable: true },
};

export const PRODUCT_CAROUSEL_SETTINGS = {
    centeredSlides: false,
    spaceBetween: 24,
    slidesPerView: 'auto',
    speed: 700,
    loop: false,
    navigation: true,

    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    scrollbar: { draggable: true },
    // pagination: {
    // //     type: 'progressbar',
    // //     clickable: true
    // // },
};

export const VALUES = [
    {
        _id: 1,
        value: 'Free Shipping',
        desc: 'Order above $200',
        imgURL: valuesImages?.deliveryIcon,
    },
    {
        _id: 2,
        value: 'Money-back',
        desc: '30 days guarantee',
        imgURL: valuesImages?.moneyIcon,
    },
    {
        _id: 3,
        value: 'Secure Payments',
        desc: 'Secured by Stripe',
        imgURL: valuesImages?.lockIcon,
    },
    {
        _id: 4,
        value: '24/7 Support',
        desc: 'Phone and Email support',
        imgURL: valuesImages?.callIcon,
    },
]

export const PRODUCTS = [
    {
        _id: 1,
        product_name: 'Loveseat Sofa',
        imgURL: productImages?.productImage1,
        new: true,
        discount: true,
        discountPercentage: 50,
        ratings: 5,
        price: 50,
        wishlisted: true,
        quantity: 1,
        color: 'grey',
    },
    {
        _id: 2,
        product_name: 'Table Lamp',
        imgURL: productImages?.productImage2,
        new: true,
        discount: true,
        discountPercentage: 50,
        ratings: 5,
        price: 100,
        wishlisted: false,
        quantity: 1,
        color: 'golden',
    },
    {
        _id: 3,
        product_name: 'Beige Table Lamp',
        imgURL: productImages?.productImage3,
        new: true,
        discount: true,
        discountPercentage: 50,
        ratings: 5,
        price: 200,
        wishlisted: false,
        quantity: 1,
        color: 'beige',
    },
    {
        _id: 4,
        product_name: 'Bamboo basket',
        imgURL: productImages?.productImage4,
        new: true,
        discount: true,
        discountPercentage: 50,
        ratings: 5,
        price: 250,
        wishlisted: false,
        quantity: 1,
        color: 'beige',
    },
    {
        _id: 5,
        product_name: 'Loveseat Sofa',
        imgURL: productImages?.productImage1,
        new: true,
        discount: true,
        discountPercentage: 50,
        ratings: 5,
        price: 300,
        wishlisted: true,
        quantity: 1,
        color: 'grey',
    },
    {
        _id: 6,
        product_name: 'Table Lamp',
        imgURL: productImages?.productImage2,
        new: true,
        discount: true,
        discountPercentage: 50,
        ratings: 5,
        price: 350,
        wishlisted: false,
        quantity: 1,
        color: 'golden',
    },
    {
        _id: 7,
        product_name: 'Beige Table Lamp',
        imgURL: productImages?.productImage3,
        new: true,
        discount: true,
        discountPercentage: 50,
        ratings: 5,
        price: 700,
        wishlisted: false,
        quantity: 1,
        color: 'beige',
    },
    {
        _id: 8,
        product_name: 'Bamboo basket',
        imgURL: productImages?.productImage4,
        new: true,
        discount: true,
        discountPercentage: 50,
        ratings: 5,
        price: 800,
        wishlisted: false,
        quantity: 1,
        color: 'beige',
    },
]

export const FILTER = [
    {
        _id: 1,
        type: 'price',
        options: [
            // {
            //     _id: 11,
            //     text: 'All Price',
            //     value: 'all'
            // },
            {
                _id: 12,
                text: '$0.00 - 99.99',
                min: 0,
                max: 99.99,
            },
            {
                _id: 13,
                text: '$100.00 - 199.99',
                min: 100,
                max: 199.99,
            },
            {
                _id: 14,
                text: '$200.00 - 299.99',
                min: 200,
                max: 299.99,
            },
            {
                _id: 15,
                text: '$300.00 - 399.99',
                min: 300,
                max: 399.99,
            },
            {
                _id: 16,
                text: '$400.00+',
                min: 400,
                max: 999.99,
            },
        ]
    }
]

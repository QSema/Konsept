import chair1 from '../assets/img/chair1.jpg'
import chair2 from '../assets/img/chair2.jpg'
import chair3 from '../assets/img/chair3.jpg'
import plant1 from '../assets/img/plant1.jpg'
import plant2 from '../assets/img/plant2.jpg'
import plant3 from '../assets/img/plant3.jpg'

let products = [
    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/03/shoplist1.jpg',
        title: 'WALL ART',
        caterogy: 'Art',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 46,
        stock: true,
        id: 1,
    },
    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/03/shoplist02.jpg',
        title: 'TEA KETTLE',
        caterogy: 'Home',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 26,
        stock: true,
        id: 2,
    },
    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/shoplist3.jpg',
        title: 'BED TABLE',
        caterogy: 'Style',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 36,
        stock: true,
        id: 3,
    },
    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/shoplist4b.jpg',
        title: 'COLOR LAMP',
        caterogy: 'Style',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 30,
        stock: true,
        id: 4,
    },
    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/shoplist5.jpg',
        title: 'DESK DECOR',
        caterogy: 'Home',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 45,
        stock: true,
        id: 5,
    },
    // {
    //     img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/shoplist6.jpg',
    //     title: 'FICUS',
    //     caterogy: 'Seed Plant',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    //     price: 15,
    //     stock: true,
    //     id: 6,
    // },'Seed Plant'
    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/shoplist7.jpg',
        title: 'COMFY CHAIR',
        caterogy: 'Handmade',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 40,
        stock: true,
        id: 7,
    },



    
    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/shoplist8.jpg',
        title: 'BOOK HOLDER',
        caterogy: 'Handmade',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 16,
        stock: true,
        id: 8,
    },




    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/standard_img_1.jpg',
        title: 'CACTUS',
        caterogy: 'Succulents',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 28,
        stock: true,
        id: 9,
    },


    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/shoplist10.jpg',
        title: 'SOFT GLOW',
        caterogy: 'Style',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 20,
        stock: true,
        id: 10,
    },



    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/shoplist4_home2-1-600x812.jpg',
        title: 'WOOD CHAIR',
        caterogy: 'Chair',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 55,
        stock: true,
        id: 11,
    },



    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/shoplist1_home11-600x812.jpg',
        title: 'CHAIR',
        caterogy: 'Art',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 30,
        stock: true,
        id: 12,
    },


    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/big_img01-1.jpg',
        title: 'LACY TREE',
        caterogy: 'Seed Plant',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 30,
        stock: true,
        id: 13,
    },



    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/shoplist2_home1-1.jpg',
        title: 'ARMCHAIR',
        caterogy: 'Handmade',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 40,
        stock: true,
        id: 14,
    },




    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/home5_6-1.jpg',
        title: 'WICKER BASKET',
        caterogy: 'Decorative',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 20,
        stock: true,
        id: 15,
    },



    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/shoplist15_.jpg',
        title: 'ORANGE SOFA',
        caterogy: 'Handmade',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 85,
        stock: true,
        id: 16,
    },



    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/shoplist4_home1.jpg',
        title: 'VASE',
        caterogy: 'Inside',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 19,
        stock: true,
        id: 17,
    },




    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/shoplist3_home1.jpg',
        title: 'BASKET',
        caterogy: 'Home',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 16,
        stock: true,
        id: 18,
    },


    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/home1_1-1-600x812.jpg',
        title: 'FOOD BOARD',
        caterogy: 'Kitchen',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 16,
        stock: true,
        id: 19,
    },


    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/home1_1-1-600x812.jpg',
        title: 'PLATE',
        caterogy: 'Kitchen',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 18,
        stock: true,
        id: 20,
    },


    
    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/06/slider_featured_30-4-600x812.jpg',
        title: 'ALOE',
        caterogy: 'Decorative',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 15,
        stock: true,
        id: 21,
    },



    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/home5_22-600x812.jpg',
        title: 'SAGUARO',
        caterogy: 'Herbs',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 15,
        stock: true,
        id: 22,
    },



    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/shopslider_40-600x812.jpg',
        title: 'BLUE VASE',
        caterogy: 'Kitchen',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 16,
        stock: true,
        id: 23,
    },


    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/home5_27.jpg',
        title: 'CABINET',
        caterogy: 'Decorative',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 175,
        stock: true,
        id: 24,
    },


    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/home2_featured09-600x812.jpg',
        title: 'ROOM PLANT',
        caterogy: 'Creative',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 28,
        stock: true,
        id: 25,
    },


    
    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/home2_featured05-600x812.jpg',
        title: 'WOOD LAMP',
        caterogy: 'Creative',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 25,
        stock: true,
        id: 26,
    },


    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/s_list_2.jpg',
        title: 'WALL PAINT',
        caterogy: 'Style',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 25,
        stock: true,
        id: 27,
    },


    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/s_list_1.jpg',
        title: 'RUBBER PLANT',
        caterogy: 'Seed Plant',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 20,
        stock: true,
        id: 28,
    },


    
    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/home3_1-600x812.jpg',
        title: 'WALL CLOCK',
        caterogy: 'Interior',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 15,
        stock: true,
        id: 29,
    },



    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/home3_9-600x812.jpg',
        title: 'BOHO LAMP',
        caterogy: 'Creative',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 20,
        stock: true,
        id: 30,
    },



    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/home3_15-600x812.jpg',
        title: 'WOOD PLATE',
        caterogy: 'Creative',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 23,
        stock: true,
        id: 31,
    },



    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/03/shoplist02.jpg',
        title: 'TEA POT',
        caterogy: 'Creative',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 20,
        stock: true,
        id: 32,
    },



    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/v_img_3-600x811.jpg',
        title: 'INTERIOR LAMP',
        caterogy: 'Creative',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 35,
        stock: true,
        id: 33,
    },

    
    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/home3_20.jpg',
        title: 'ORANGE LIGHT',
        caterogy: 'Decorative',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 35,
        stock: true,
        id: 34,
    },



    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/masonry_single-600x812.jpg',
        title: 'WOOD BASKET',
        caterogy: 'Creative',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 20,
        stock: true,
        id: 35,
    },


    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/home4_1-1.jpg',
        title: 'LOCKER',
        caterogy: '',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 36,
        stock: true,
        id: 36,
    },

    
    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/home4_27-600x812.jpg',
        title: 'KITCHEN BOARD',
        caterogy: 'Decorative',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 16,
        stock: true,
        id: 37,
    },


    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/home5_11-600x812.jpg',
        title: 'VINTAGE CHAIR',
        caterogy: 'Decorative',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 55,
        stock: true,
        id: 38,
    },


    
    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/home5_17.jpg',
        title: 'HOME LIGHT',
        caterogy: 'Light',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 20,
        stock: true,
        id: 39,
    },



    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/home4_6-1-600x812.jpg',
        title: 'YELLOW PLATE',
        caterogy: 'Decorative',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 18,
        stock: true,
        id: 40,
    },



    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/home5_22-600x812.jpg',
        title: 'ECHINOCACTUS',
        caterogy: 'Decorative',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 20,
        stock: true,
        id: 41,
    },



    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/home4_16-600x812.jpg',
        title: 'ORANGE VASSE',
        caterogy: 'Decorative',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 16,
        stock: true,
        id: 42,
    },


    
    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/home5_1-1-600x812.jpg',
        title: 'EVERGREEN',
        caterogy: 'Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 20,
        stock: true,
        id: 43,
    },



    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/home4_11-600x812.jpg',
        title: 'GREEN CHAIR',
        caterogy: 'Decorative',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 40,
        stock: true,
        id: 44,
    },



    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/home5_27-1-600x812.jpg',
        title: 'SIDEBOARD',
        caterogy: 'Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 80,
        stock: true,
        id: 45,
    },



    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/home5_32.jpg',
        title: 'CREAM CHAIR',
        caterogy: 'Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 30,
        stock: true,
        id: 46,
    },


    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/home5_47-600x812.jpg',
        title: 'CLOCK',
        caterogy: 'Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 15,
        stock: true,
        id: 47,
    },


    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/home5_6-600x812.jpg',
        title: 'PHILODENDRON',
        caterogy: 'Decorative',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 30,
        stock: true,
        id: 48,
    },



    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/home5_37-600x812.jpg',
        title: 'RED LIGHT',
        caterogy: 'Light',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 35,
        stock: true,
        id: 49,
    },


    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/home5_42.jpg',
        title: 'DECO PLATE',
        caterogy: 'Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 25,
        stock: true,
        id: 50,
    },

    
    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/07/slider_featured_70.jpg',
        title: 'ALDORA',
        caterogy: 'Living Room',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 35,
        stock: true,
        id: 51,
    },


    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/home5_6-1.jpg',
        title: 'DECO BASKET',
        caterogy: 'Bedroom',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 20,
        stock: true,
        id: 52,
    },


    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/grouped_01.jpg',
        title: 'SAGO',
        caterogy: 'Office Plants',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 50,
        stock: true,
        id: 53,
    },


    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/virtual_01.jpg',
        title: 'NATUR',
        caterogy: 'Plants',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 16,
        stock: true,
        id: 54,
    },


    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/downloadable_1.jpg',
        title: 'DECOR',
        caterogy: 'Art',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 40,
        stock: true,
        id: 55,
    },

    
    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/downloadable_1.jpg',
        title: 'BOOK SLING',
        caterogy: 'Decorative',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 60,
        stock: true,
        id: 56,
    },

    
    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/standard_img_1.jpg',
        title: 'CACTI',
        caterogy: 'Decorative',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 20,
        stock: true,
        id: 57,
    },


    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/home4_21-600x812.jpg',
        title: 'CORN TREE',
        caterogy: 'Herbs',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 60,
        stock: true,
        id: 58,
    },


    
    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/home5_27.jpg',
        title: 'COMMODE',
        caterogy: 'Decorative',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 95,
        stock: true,
        id: 59,
    },

    
    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/shoplist6.jpg',
        title: 'ARECA',
        caterogy: 'Office Plants',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 15,
        stock: true,
        id: 60,
    },


    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/shoplist8.jpg',
        title: 'HOLDER',
        caterogy: 'Furniture',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 16,
        stock: true,
        id: 61,
    },


    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/shoplist10.jpg',
        title: 'DECO GLOW',
        caterogy: 'Furniture',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 20,
        stock: true,
        id: 62,
    },

    
    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/03/shoplist1.jpg',
        title: 'COLOR ART',
        caterogy: 'Art',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 50,
        stock: true,
        id: 63,
    },


    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/home5_32.jpg',
        title: 'LOUNGE CHAIR',
        caterogy: 'Garden',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 30,
        stock: true,
        id: 64,
    },


    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/shoplist7.jpg',
        title: 'SOFT CHAIR',
        caterogy: 'Home',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 40,
        stock: true,
        id: 65,
    },



    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/home5_42.jpg',
        title: 'YARD DETAIL',
        caterogy: 'Garden',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 25,
        stock: true,
        id: 66,
    },

    
    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/05/slider_featured_4.jpg',
        title: 'BOWL',
        caterogy: 'Decorative',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 45,
        stock: true,
        id: 67,
    },


    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/03/shoplist02.jpg',
        title: 'KETTLE',
        caterogy: 'Home',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 26,
        stock: true,
        id: 68,
    },


    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/home5_17.jpg',
        title: 'YARD LIGHT',
        caterogy: 'Garden',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 20,
        stock: true,
        id: 69,
    },



    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/home4_1-1.jpg',
        title: 'CUPBOARD',
        caterogy: 'Small Spaces',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 36,
        stock: true,
        id: 70,
    },


    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/home5_27.jpg',
        title: 'DRESSER',
        caterogy: 'Bedroom',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 95,
        stock: true,
        id: 71,
    },


    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/shoplist6.jpg',
        title: 'FLORA',
        caterogy: 'Home',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 15,
        stock: true,
        id: 72,
    },


    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/home3_20.jpg',
        title: 'TWO LIGHT',
        caterogy: 'Small Spaces',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 35,
        stock: true,
        id: 73,
    },


    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/05/slider_featured_4.jpg',
        title: 'PATEN',
        caterogy: 'Living Room',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 45,
        stock: true,
        id: 74,
    },


    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/s_list_2.jpg',
        title: 'COLOR PAINT',
        caterogy: 'Art',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 25,
        stock: true,
        id: 75,
    },


    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/s_list_1.jpg',
        title: 'SENTRY',
        caterogy: 'Palms',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 20,
        stock: true,
        id: 76,
    },


    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/big_img01-1.jpg',
        title: 'CALATHEA',
        caterogy: 'Foliage Plants',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 30,
        stock: true,
        id: 77,
    },

    
    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/virtual_01.jpg',
        title: 'POTHOS',
        caterogy: 'Foliage Plants',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 16,
        stock: true,
        id: 78,
    },

    
    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/standard_img_1.jpg',
        title: 'PRICKLY',
        caterogy: 'Houseplant',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 28,
        stock: true,
        id: 79,
    },
    {
        img: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/05/grouped_1.jpg',
        title: 'LADY PALM',
        caterogy: 'Palms',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        price: 53,
        stock: true,
        id: 80,
    },
]

export default products
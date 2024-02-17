// Pizza
import pizzaImg from '../images/pizza.jpg';
import pizza2Img from '../images/pizzaTikka.jpg';
import pizza3 from '../images/pizza (2).jpg'
import pizza4 from '../images/pizza (3).jpg'
import pizza5 from '../images/pizza (4).jpg'
import pizza6 from '../images/pizza (5).jpg'
import pizza7 from '../images/pizza54.jpg'
// Burger
import burger1 from '../images/burger.jpg';
import burger2 from '../images/zingerburger.jpg';
import burger3 from '../images/Egg-Burger.jpg'
import burger4 from '../images/Herby-Chicken-Burger.jpg'
import burger5 from '../images/burger11.jpg'
import burger6 from '../images/burger2.jpg'
import burger7 from '../images/Crispy-fried-chicken.webp'
import burger8 from '../images/burgerP.jpg'
import burger9 from '../images/bb.jpg'
import burger10 from '../images/burger10.jpg'
// SandwichAndWraps
import sandwich1 from '../images/sandwich.jpg';
import sandwich2 from '../images/sandwich2.jpg';
import sandwich3 from '../images/sandwich10.jpg';
import sandwich4 from '../images/sandwichh.jpg';
import sandwich5 from '../images/sanddwich.jpg';
import wrap1 from '../images/wrap.jpg'
import wrap2 from '../images/wraps.jpg'
import wrap3 from '../images/wwrap.jpg'
// shawarma
import shawarma1 from '../images/shawarma.jpg';
import shawarma2 from '../images/regShawarma.jpeg';
import shawarma3 from '../images/Shawarma-848x477.webp';
import shawarma4 from '../images/shawarmaa.jpg';
// pizza deals
import deal1 from '../images/deal.jpg';
// paratha
import paratha1 from '../images/Chicken-Paratha-Roll.jpg';
import paratha2 from '../images/Chicken-Paratha-Roll.jpg';
import paratha3 from '../images/Chicken-Paratha-Roll.jpg';
import paratha4 from '../images/Chicken-Paratha-Roll.jpg';
import grill1 from '../images/Chicken-Paratha-Roll.jpg';
import grill2 from '../images/Chicken-Paratha-Roll.jpg';
import grill3 from '../images/Chicken-Paratha-Roll.jpg';
import grill4 from '../images/Chicken-Paratha-Roll.jpg';

const pizzaData = [
    {
        id: "1",
        name: "Chicken Fajita",
        description: "Classic pepperoni pizza with tangy tomato sauce, mozzarella cheese, and spicy pepperoni slices.",
        priceOptions: [{ Small: 350 }, { Medium: 650 }, { Large: 950 }, { Family: 1350 }],
        image: pizzaImg
    },
    {
        id: "2",
        name: "Chicken Tikka",
        description: "Classic pepperoni pizza with tangy tomato sauce, mozzarella cheese, and spicy pepperoni slices.",
        priceOptions: [{ Small: 350 }, { Medium: 650 }, { Large: 950 }, { Family: 1350 }],
        image: pizza2Img
    },
    {
        id: "3",
        name: "Cheese Lover",
        description: "Classic pepperoni pizza with tangy tomato sauce, mozzarella cheese, and spicy pepperoni slices.",
        priceOptions: [{ Small: 450 }, { Medium: 750 }, { Large: 1250 }, { Family: 1700 }],
        image: pizza3
    },
    {
        id: "4",
        name: "Hot and Spicy",
        description: "Classic pepperoni pizza with tangy tomato sauce, mozzarella cheese, and spicy pepperoni slices.",
        priceOptions: [{ Small: 350 }, { Medium: 650 }, { Large: 950 }, { Family: 1350 }],
        image: pizza7
    },
    {
        id: "5",
        name: "Chicken Achari",
        description: "Classic pepperoni pizza with tangy tomato sauce, mozzarella cheese, and spicy pepperoni slices.",
        priceOptions: [{ Small: 350 }, { Medium: 650 }, { Large: 950 }, { Family: 1350 }],
        image: pizza4
    },
    {
        id: "6",
        name: "Mali Botti",
        description: "Classic pepperoni pizza with tangy tomato sauce, mozzarella cheese, and spicy pepperoni slices.",
        priceOptions: [{ Small: 450 }, { Medium: 750 }, { Large: 1250 }, { Family: 1700 }],
        image: pizza5
    },
    {
        id: "7",
        name: "Chicken Supreme",
        description: "Classic pepperoni pizza with tangy tomato sauce, mozzarella cheese, and spicy pepperoni slices.",
        priceOptions: [{ Small: 400 }, { Medium: 700 }, { Large: 990 }, { Family: 1400 }],
        image: pizza6
    },
]

const burgerData = [
    {
        id: "1",
        name: "Shaami Burger",
        description: "Classic pepperoni pizza with tangy tomato sauce, mozzarella cheese, and spicy pepperoni slices.",
        priceOptions: [{ Rs: 140 }],
        image: burger1
    },
    {
        id: "2",
        name: "Double Egg Burger",
        description: "Classic pepperoni pizza with tangy tomato sauce, mozzarella cheese, and spicy pepperoni slices.",
        priceOptions: [{ Rs: 180 }],
        image: burger2
    },
    {
        id: "3",
        name: "SB Special Burger",
        description: "Classic pepperoni pizza with tangy tomato sauce, mozzarella cheese, and spicy pepperoni slices.",
        priceOptions: [{ Rs: 240 }],
        image: burger3
    },
    {
        id: "4",
        name: "Chicken Petty Burger",
        description: "Classic pepperoni pizza with tangy tomato sauce, mozzarella cheese, and spicy pepperoni slices.",
        priceOptions: [{ Rs: 250 }],
        image: burger4
    },
    {
        id: "5",
        name: "Chicken Botti Burger",
        description: "Classic pepperoni pizza with tangy tomato sauce, mozzarella cheese, and spicy pepperoni slices.",
        priceOptions: [{ Rs: 270 }],
        image: burger6
    },
    {
        id: "6",
        name: "Crispy Burger",
        description: "Classic pepperoni pizza with tangy tomato sauce, mozzarella cheese, and spicy pepperoni slices.",
        priceOptions: [{ Rs: 300 }],
        image: burger7
    },
    {
        id: "7",
        name: "Pizza Burger",
        description: "Classic pepperoni pizza with tangy tomato sauce, mozzarella cheese, and spicy pepperoni slices.",
        priceOptions: [{ Rs: 300 }],
        image: burger8
    },
    {
        id: "8",
        name: "Zinger Burger + Fries",
        description: "Classic pepperoni pizza with tangy tomato sauce, mozzarella cheese, and spicy pepperoni slices.",
        priceOptions: [{ Rs: 280 }],
        image: burger9
    },
    {
        id: "9",
        name: "Mighty Zinger",
        description: "Classic pepperoni pizza with tangy tomato sauce, mozzarella cheese, and spicy pepperoni slices.",
        priceOptions: [{ Rs: 360 }],
        image: burger10
    },
    {
        id: "10",
        name: "Tower Burger",
        description: "Classic pepperoni pizza with tangy tomato sauce, mozzarella cheese, and spicy pepperoni slices.",
        priceOptions: [{ Rs: 420 }],
        image: burger5
    },
]

const sandwichWraps = [
    {
        id: "1",
        name: "Club Sandwich",
        description: "Classic pepperoni pizza with tangy tomato sauce, mozzarella cheese, and spicy pepperoni slices.",
        priceOptions: [{ Rs: 340 }],
        image: sandwich5
    },
    {
        id: "2",
        name: "Grill Sandwich",
        description: "Classic pepperoni pizza with tangy tomato sauce, mozzarella cheese, and spicy pepperoni slices.",
        priceOptions: [{ Rs: 360 }],
        image: sandwich1
    },
    {
        id: "3",
        name: "Jumbo Sandwich",
        description: "Classic pepperoni pizza with tangy tomato sauce, mozzarella cheese, and spicy pepperoni slices.",
        priceOptions: [{ Rs: 420 }],
        image: sandwich2
    },
    {
        id: "4",
        name: "Peri Peri Sandwich",
        description: "Classic pepperoni pizza with tangy tomato sauce, mozzarella cheese, and spicy pepperoni slices.",
        priceOptions: [{ Rs: 340 }],
        image: sandwich3
    },
    {
        id: "5",
        name: "Classic Sandwich",
        description: "Classic pepperoni pizza with tangy tomato sauce, mozzarella cheese, and spicy pepperoni slices.",
        priceOptions: [{ Rs: 240 }],
        image: sandwich4
    },
    {
        id: "6",
        name: "Chicken Wrap",
        description: "Classic pepperoni pizza with tangy tomato sauce, mozzarella cheese, and spicy pepperoni slices.",
        priceOptions: [{ Rs: 320 }],
        image: wrap3
    },
    {
        id: "7",
        name: "Zinger Wrap",
        description: "Classic pepperoni pizza with tangy tomato sauce, mozzarella cheese, and spicy pepperoni slices.",
        priceOptions: [{ Rs: 350 }],
        image: wrap1
    },
    {
        id: "8",
        name: "Grill Wrap",
        description: "Classic pepperoni pizza with tangy tomato sauce, mozzarella cheese, and spicy pepperoni slices.",
        priceOptions: [{ Rs: 380 }],
        image: wrap2
    },
]

const shawarmaData = [
    {
        id: "1",
        name: "Regular Shawarma",
        description: "Classic pepperoni pizza with tangy tomato sauce, mozzarella cheese, and spicy pepperoni slices.",
        priceOptions: [{ Rs: 180 }],
        image: shawarma1
    },
    {
        id: "2",
        name: "Special  Shawarma",
        description: "Classic pepperoni pizza with tangy tomato sauce, mozzarella cheese, and spicy pepperoni slices.",
        priceOptions: [{ Rs: 260 }],
        image: shawarma2
    },
    {
        id: "3",
        name: "Plater Shawarma With 2 Breads",
        description: "Classic pepperoni pizza with tangy tomato sauce, mozzarella cheese, and spicy pepperoni slices.",
        priceOptions: [{ Rs: 450 }],
        image: shawarma3
    },
    {
        id: "4",
        name: "Zinger Shawarma",
        description: "Classic pepperoni pizza with tangy tomato sauce, mozzarella cheese, and spicy pepperoni slices.",
        priceOptions: [{ Rs: 260 }],
        image: shawarma4
    }
]

const pizzaDeals = [
    {
        id: "1",
        name: "Deal 1",
        description: "Small pizza, Zinger burger with Fries Half litre bottle",
        priceOptions: [{ Rs: 700 }],
        image: deal1
    },
    {
        id: "2",
        name: "Deal 2",
        description: "Petty Burger, Loaded Fries Chicken wrap Half litre bottle",
        priceOptions: [{ Rs: 990 }],
        image: deal1
    },
    {
        id: "3",
        name: "Deal 3",
        description: "Grill Burger, Twister Five Nuggets Zinger Shawarma 1.5 litre bottle",
        priceOptions: [{ Rs: 1200 }],
        image: deal1
    },
    {
        id: "4",
        name: "Deal 4",
        description: "Pizza burger, Club Sandwich Grill Shawarma, Medium Pizza",
        priceOptions: [{ Rs: 1500 }],
        image: deal1
    },
    {
        id: "5",
        name: "Deal 5",
        description: "Large Pizza, Kabab Paratha, Cheezy Fries Hot wings 5 pcs 1.5 litre bottle",
        priceOptions: [{ Rs: 1700 }],
        image: deal1
    },
    {
        id: "6",
        name: "Deal 6",
        description: "Zinger Wrap, Botti Burger, 2 Chicken Shawarma, Classic Sandwich, Crispy Burger, 1.5 litre bottle",
        priceOptions: [{ Rs: 1700 }],
        image: deal1
    },
    {
        id: "7",
        name: "Deal 7",
        description: "5 Shaami Burger, 5 Chicken Shawarma, Jumbo bottle",
        priceOptions: [{ Rs: 1800 }],
        image: deal1
    },
    {
        id: "8",
        name: "Deal 8",
        description: "5 Zinger Burger, 3 Zinger Shawarma, Loaded Fries, Jumbo bottle",
        priceOptions: [{ Rs: 2550 }],
        image: deal1
    },
]

const parathaGrill = [
    {
        id: "1",
        name: "Chiken Paratha Roll",
        description: "Small pizza, Zinger burger with Fries Half litre bottle",
        priceOptions: [{ Rs: 300 }],
        image: paratha1
    },
    {
        id: "2",
        name: "Zinger Paratha Roll",
        description: "Petty Burger, Loaded Fries Chicken wrap Half litre bottle",
        priceOptions: [{ Rs: 320 }],
        image: paratha2
    },
    {
        id: "3",
        name: "Kebab Paratha Roll",
        description: "Grill Burger, Twister Five Nuggets Zinger Shawarma 1.5 litre bottle",
        priceOptions: [{ Rs: 320 }],
        image: paratha3
    },
    {
        id: "4",
        name: "Twister",
        description: "Pizza burger, Club Sandwich Grill Shawarma, Medium Pizza",
        priceOptions: [{ Rs: 340 }],
        image: paratha4
    },
    {
        id: "5",
        name: "Grill Paratha",
        description: "Large Pizza, Kabab Paratha, Cheezy Fries Hot wings 5 pcs 1.5 litre bottle",
        priceOptions: [{ Rs: 280 }],
        image: grill1
    },
    {
        id: "6",
        name: "Grill Burger",
        description: "Zinger Wrap, Botti Burger, 2 Chicken Shawarma, Classic Sandwich, Crispy Burger, 1.5 litre bottle",
        priceOptions: [{ Rs: 280 }],
        image: grill2
    },
    {
        id: "7",
        name: "Grill Shawarma",
        description: "5 Shaami Burger, 5 Chicken Shawarma, Jumbo bottle",
        priceOptions: [{ Rs: 680 }],
        image: grill3
    },
    {
        id: "8",
        name: "Grill Plater with 3 Platers",
        description: "5 Zinger Burger, 3 Zinger Shawarma, Loaded Fries, Jumbo bottle",
        priceOptions: [{ Rs: 350 }],
        image: grill4
    },
]



export { pizzaData, burgerData, sandwichWraps, shawarmaData, pizzaDeals, parathaGrill };
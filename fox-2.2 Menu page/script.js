const cardsForMenu = [
	{
		typeOf: 'breakfast',
		country: 'England',
		title: 'Classic English breakfast',
		description: 'With eggs, bacon, sausages, roasted mushrooms, beans in tomato sauce and toast.',
		price: '12.45$',
		image: '/source/breakfast/england.jpg'
	},
	{
		typeOf: 'breakfast',
		country: 'Mexico',
		title: 'Chiliquilles',
		description: 'With eggs, tomato sauce, tortilla, beans and cheese.',
		price: '10.45$',
		image: '/source/breakfast/mexico.jpg'
	},
	{
		typeOf: 'breakfast',
		country: 'Japan',
		title: 'Tamago Karakuri',
		description: 'With scrambled eggs cooked with soy sauce and honey served with rice and marinated ginger.',
		price: '15,50$',
		image: '/source/breakfast/japan.jpg'
	},
	{
		typeOf: 'breakfast',
		country: 'France',
		title: 'Croissants',
		description: 'Ham and cheese croissants are traditional French pastries filled with tender smoked ham and cheese.',
		price: '12.00$',
		image: '/source/breakfast/francejpg.jpg'
	},
	{
		typeOf: 'breakfast',
		country: 'India',
		title: 'Masala dosa',
		description: 'With thin rice pancakes filled with potatoes, onions, nuts and spices served with coconut chutney and cheese sauce.',
		price: '8.25$',
		image: '/source/breakfast/indian.jpg'
	},
	{
		typeOf: 'hotDish',
		country: 'USA',
		title: 'Steak with Potato Gratin',
		description: 'Classic American dish consisting of juicy steak baked with cheese and potatoes in a creamy sauce.',
		price: '$22.99',
		image: '/source/hot-delishes/usa.jpg'
	},
	{
		typeOf: 'hotDish',
		country: 'India',
		title: 'Tandoori Chicken Kebab',
		description: 'Indian dish made of marinated chicken (usually) in spices, baked in a tandoor, served with mint sauce and chopped onions.',
		price: '$15.50',
		image: '/source/hot-delishes/india.jpg'
	},
	{
		typeOf: 'hotDish',
		country: 'Spain',
		title: 'Paella',
		description: 'Traditional Spanish dish made of rice, seafood (shrimp, mussels, squid), chicken, vegetables, and aromatic spices.',
		price: '$18.75',
		image: '/source/hot-delishes/spain.jpg'
	},
	{
		typeOf: 'hotDish',
		country: 'Thailand',
		title: 'Shrimp in Coconut Milk',
		description: 'Thai dish made of juicy shrimp, stewed in an aromatic coconut milk with herbs and spices.',
		price: '$16.99',
		image: '/source/hot-delishes/tailand.jpg'
	},
	{
		typeOf: 'hotDish',
		country: 'France',
		title: 'Beef Bourguignon',
		description: 'Classic French dish made of beef, braised in red wine with onions, carrots, mushrooms, and herbs, served with mashed potatoes or pasta.',
		price: '$21.25',
		image: '/source/hot-delishes/france.jpg'
	},
	{
		typeOf: 'pasta',
		country: 'Italy',
		title: 'Spaghetti carbonara',
		description: 'Classic Italian pasta with a sauce made from bacon, eggs, cheese, and black pepper.',
		price: '$12.99',
		image: '/source/pasta/carbonara.jpg'
	},
	{
		typeOf: 'pasta',
		country: 'Japan',
		title: 'Chicken and spinach udon',
		description: 'Japanese wheat flour noodles with juicy pieces of chicken, fresh spinach, and a savory soy-based sauce.',
		price: '$10.50',
		image: '/source/pasta/japan.jpg'
	},
	{
		typeOf: 'pasta',
		country: 'Thailand',
		title: 'Pad Thai',
		description: 'Thai noodles with shrimp, sautéed vegetables, peanuts, and tamarind sauce, seasoned with lemongrass and pepper.',
		price: '$9.75',
		image: '/source/pasta/tailand.jpg'
	},
	{
		typeOf: 'pasta',
		country: 'Mexico',
		title: 'Fideuà',
		description: 'Mexican version of paella with chicken, squid, mussels, peppers, and flavorful spices.',
		price: '$14.99',
		image: '/source/pasta/mexico.jpg'
	},
	{
		typeOf: 'pasta',
		country: 'Greece',
		title: 'Pastitsio',
		description: 'Greek pasta with macaroni, a meat sauce based on tomatoes and shrimp, baked with cheese and béchamel sauce.',
		price: '$11.25',
		image: '/source/pasta/grecia.jpg'
	},
	{
		typeOf: 'salad',
		country: 'Greece',
		title: 'Greek Salad',
		description: 'Traditional Greek salad with fresh vegetables (tomatoes, cucumbers, peppers, onions), cubes of feta cheese, olives, olive oil, and oregano.',
		price: '$10.99',
		image: '/source/salad/grecia.jpg'
	},
	{
		typeOf: 'salad',
		country: 'Thailand',
		title: 'Som Tam',
		description: 'Thai salad made of fresh papaya, carrots, nuts, tomatoes, and a sauce based on fish sauce, lemon juice, and chili pepper.',
		price: '$12.50',
		image: '/source/salad/tailand.jpg'
	},
	{
		typeOf: 'salad',
		country: 'Italy',
		title: 'Caprese',
		description: 'Italian salad with tomatoes, mozzarella, fresh basil, olive oil, and balsamic vinegar.',
		price: '$13.75',
		image: '/source/salad/italian.jpg'
	},
	{
		typeOf: 'salad',
		country: 'Morocco',
		title: 'Tabbouleh',
		description: 'Moroccan salad made of bulgur wheat, tomatoes, cucumbers, mint, lemon juice, and olive oil, seasoned with Arabic spices such as cumin and coriander.',
		price: '$11.99',
		image: '/source/salad/maroko.jpg'
	},
	{
		typeOf: 'salad',
		country: 'Japan',
		title: 'Seaweed Salad',
		description: 'Japanese dish consisting of seaweed, seafood cocktail, avocado, and nuts, dressed with a sauce based on soy sauce and rice vinegar.',
		price: '$14.25',
		image: '/source/salad/japan.jpg'
	},
	{
		typeOf: 'burger',
		country: 'USA',
		title: 'Classic Cheeseburger',
		description: 'Popular American burger with beef patty, cheese, onions, pickles, and sauce on a bun.',
		price: '$12.99',
		image: '/source/burger/usa.jpg'
	},
	{
		typeOf: 'burger',
		country: 'Australia',
		title: 'Australian Burger',
		description: 'Burger popular in Australia with beef patty, beetroot, egg, bacon, fresh vegetables, and sauce on a sesame seed bun.',
		price: '$14.50',
		image: '/source/burger/australia.jpg'
	},
	{
		typeOf: 'burger',
		country: 'Japan',
		title: 'Wagyu Burger',
		description: 'Burger made with Japanese Wagyu beef, teriyaki sauce, caramelized onions, and daikon on a bun.',
		price: '$23.75',
		image: '/source/burger/japan.jpg'
	},
	{
		typeOf: 'burger',
		country: 'Spain',
		title: 'Chorizo Burger',
		description: 'Burger with Spanish chorizo sausage, manchego cheese, mushrooms, chopped red peppers, and aioli sauce on a tomato bun.',
		price: '$16.99',
		image: '/source/burger/spain.jpg'
	},
	{
		typeOf: 'burger',
		country: 'Korea',
		title: 'Kimchi Burger',
		description: 'Burger with Korean kimchi, beef patty, caramelized onions, pickled cucumbers, and gochujang sauce on a bun.',
		price: '$17.25',
		image: '/source/burger/korea.jpg'
	},
	{
		typeOf: 'dessert',
		country: 'Italy',
		title: 'Tiramisu',
		description: 'Popular Italian dessert made of layers of coffee-soaked sponge fingers, mascarpone cheese, and cocoa.',
		price: '$8.99',
		image: '/source/desert/italian.jpg'
	},
	{
		typeOf: 'dessert',
		country: 'France',
		title: 'Crème brûlée',
		description: 'Exquisite French dessert made of a creamy vanilla custard with a caramelized top layer.',
		price: '$10.50',
		image: '/source/desert/france.jpg'
	},
	{
		typeOf: 'dessert',
		country: 'Japan',
		title: 'Matcha Ice Cream',
		description: 'Japanese dessert made of green tea matcha mixed with milk and served on ice.',
		price: '$6.25',
		image: '/source/desert/japan.jpg'
	},
	{
		typeOf: 'dessert',
		country: 'Turkey',
		title: 'Baklava',
		description: 'Traditional Turkish dessert made of layers of thin pastry soaked in syrup and filled with either pistachios or walnuts.',
		price: '$9.50',
		image: '/source/desert/turkish.jpg'
	},
	{
		typeOf: 'dessert',
		country: 'Mexico',
		title: 'Frutas con chile y limón',
		description: 'Mexican fruit dessert made with sliced fruits (pineapple, mango, pear) with lime, honey, and spicy seasoning.',
		price: '$7.99',
		image: '/source/desert/mexico.jpg'
	},
	{
		typeOf: 'softDrink',
		country: 'Mexico',
		title: 'Agua Fresca',
		description: 'Refreshing Mexican drink made with water, fruit (such as watermelon, pineapple, or pear), sugar, and ice.',
		price: '$4.99',
		image: '/source/drinks/soft/mexico.jpg'
	},
	{
		typeOf: 'softDrink',
		country: 'India',
		title: 'Mango Lassi',
		description: 'Traditional Indian drink made with yogurt, mango, milk, and sugar, with a delicate mango flavor.',
		price: '$5.50',
		image: '/source/drinks/soft/india.jpg'
	},
	{
		typeOf: 'softDrink',
		country: 'Italy',
		title: 'Spritzer',
		description: 'Refreshing Italian drink made with mineral water, lemon juice, sugar, and ice.',
		price: '$6.99',
		image: '/source/drinks/soft/italia.jpg'
	},
	{
		typeOf: 'softDrink',
		country: 'Japan',
		title: 'Matcha Green Tea Latte',
		description: 'Drink made with matcha green tea, milk, and sugar, with a rich green color and aroma.',
		price: '$7.25',
		image: '/source/drinks/soft/japan.jpg'
	},
	{
		typeOf: 'softDrink',
		country: 'Thailand',
		title: 'Thai Iced Tea',
		description: 'Thai black tea with sugar, ice, and milk, with a rich aroma and refreshing taste.',
		price: '$6.50',
		image: '/source/drinks/soft/tailand.jpg'
	},
	{
		typeOf: 'alcoholicDrink',
		country: 'Ireland',
		title: 'Irish Coffee',
		description: 'Classic alcoholic cocktail made with Irish whiskey, strong coffee, sugar, and whipped cream.',
		price: '$10.99',
		image: '/source/drinks/alco/irland.jpg'
	},
	{
		typeOf: 'alcoholicDrink',
		country: 'Italy',
		title: 'Aperol Spritz',
		description: 'Popular Italian aperitif cocktail made with Aperol (bitter aperitif), Prosecco (Italian sparkling wine), and soda water.',
		price: '$12.50',
		image: '/source/drinks/alco/italian.jpg'
	},
	{
		typeOf: 'alcoholicDrink',
		country: 'Cuba',
		title: 'Cuban Mojito',
		description: 'Traditional Cuban cocktail made with rum, fresh mint, lime, sugar syrup, and soda water.',
		price: '$11.75',
		image: '/source/drinks/alco/kuba.jpg',
	},
	{
		typeOf: 'alcoholicDrink',
		country: 'Mexico',
		title: 'Margarita',
		description: 'Classic Mexican cocktail made with tequila, triple sec, lime juice, and salt rim on a margarita glass.',
		price: '$13.50',
		image: '/source/drinks/alco/mexico.jpg'
	},
	{
		typeOf: 'alcoholicDrink',
		country: 'Japan',
		title: 'Sake',
		description: 'Traditional Japanese rice wine with a complex and rich flavor, served in special ceramic cups or glass sake cups.',
		price: '$15.99',
		image: '/source/drinks/alco/japan.jpg'
	}
] //Тут лежат объекты с описанием каждого блюда

class MenuCard {
	typeOf;
	country;
	title;
	description;
	price;
	image;
	constructor(params) {
		this.typeOf = params.typeOf;
		this.country = params.country;
		this.title = params.title;
		this.description = params.description;
		this.price = params.price;
		this.image = params.image;
	}
	render() {
		const menuCard = document.createElement('div');
		menuCard.classList.add('menu__container-item');
		menuCard.innerHTML = `
		<div class="menu__container-item-img">
			<img src="${this.image}" alt="${this.title}">
		</div>
		<div class="menu__container-info">
		<h2 class="menu__container-item-title">${this.title}</h2>
		<h3 class="menu__container-item-country">${this.country}</h3>
		<p class="menu__container-item-description">${this.description}</p>
		<span class="menu__container-item-price">${this.price}</span>
		</div>`;
		return menuCard;
	}
}
class Menu {
	cardsForMenu;
	constructor(params) {
		this.cardsForMenu = params.cardsForMenu;
	};
	filterByType(type) {
		const items = this.cardsForMenu;
		let filteredItems = [];
		if (type === 'all') {
			filteredItems = items;
		} else {
			filteredItems = items.filter((item) => item.typeOf === type);
		}
		return filteredItems;
	};
	listenerForEvent() {
		const nav = document.getElementById('menu-navigation');
		nav.addEventListener('click', (event) => {
			if (event.target.tagName === "BUTTON") {
				let type = event.target.id;
				if (type === 'allMenu') {
					type = 'all';
				}
				this.render(this.filterByType(type));
				window.scrollTo(0, 0);
			}
		});
	};
	render(filterItems = this.cardsForMenu) {
		const container = document.getElementById('menu-container');
		container.innerHTML = '';
		filterItems.forEach((item) => {
			container.appendChild(new MenuCard(item).render());
		});
	};
}

const menu = new Menu({ cardsForMenu });
menu.listenerForEvent();
menu.render();

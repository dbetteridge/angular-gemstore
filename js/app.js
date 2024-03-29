(function() {
	var app = angular.module('gemStore', []);

app.controller('StoreController', function(){
	this.products = [
{
	name: 'Dodecahedron',
	price: 2.95,
	description: '...',
	images: [{
		full: 'images/gem-01.gif',		
	}	
	],

	reviews: [
	{
		stars: 5,
		body: "I love this product",
		author: "joe@thomas.com"
	}
	],
	canPurchase: true,
	
},
{
	name: "Pentagonal Gem",
	price: 5.95,
	description: "...",
	images: [{
		full: 'images/gem-02.gif',		
	}	
	],
	reviews: [
	{
		stars: 5,
		body: "I love this product",
		author: "joe@thomas.com"
	}
	],
	canPurchase: true,
	
}
];
});

app.controller("PanelController", function(){
	this.tab = 1;

	this.selectTab = function(setTab){
		this.tab = setTab;

	};

	this.isSelected = function(checkTab){
		return this.tab === checkTab;
	};
});

app.controller("ReviewController", function(){
	this.review={};

	this.addReview = function(product){
		product.reviews.push(this.review);
		this.review={};
	};

});

})();
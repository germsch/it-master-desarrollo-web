var linksContainer =  document.querySelector('.second-nav-links')

var links = [
    {
        href : '#home',
        name : 'Home',
    },
    {
        href : '#productos',
        name : 'Productos',
    },
    {
        href : '#nosotros',
        name : 'Nosotros',
    },
    {
        href : '#contacto',
        name : 'Contacto',
    },
]

for (var i = 0; i < links.length; i++) {
   linksContainer.innerHTML += '<a href="' + links[i].href + '">' + links[i].name + '</a>'
}




var itemsContainer = document.querySelector('#items')

var items = [
    {
        href : 'https://placeimg.com/400/400/arch',
        name : 'Product category one',
    },
    {
        href : 'https://placeimg.com/400/400/archs',
        name : 'Product category two',
    },
    {
        href : 'https://placeimg.com/400/400/arch',
        name : 'Product category three',
    },
    {
        href : 'https://placeimg.com/400/400/arch',
        name : 'Product category four',
    },
    {
        href : 'https://placeimg.com/400/400/arch',
        name : 'Product category five',
    },
    {
        href : 'https://placeimg.com/400/400/arch',
        name : 'Product category six',
    },
    {
        href : 'https://placeimg.com/400/400/arch',
        name : 'Product category seven',
    },
    {
        href : 'https://placeimg.com/400/400/arch',
        name : 'Product category eight',
    },
    {
        href : 'https://placeimg.com/400/400/arch',
        name : 'Product category nine',
    },
    {
        href : 'https://placeimg.com/400/400/arch',
        name : 'Product category ten',
    },
    {
        href : 'https://placeimg.com/400/400/arch',
        name : 'Product category eleven',
    },
   ]

    // for (var i = 0; i < items.length; i++) {
    //     itemsContainer.innerHTML += '<div class="item-product"><img src="${items[i].href} alt="tarjeta"\> <p><span class="negrita">' + items[i].name + '</span></p></div>'
    // }


    for (var i = 0; i < items.length; i++) {
     itemsContainer.innerHTML += generateLink(items[i])
    }

    function generateLink(item) {
        return '<div class="item-product"><img src="' + item.href + '" alt="tarjeta"\><p><span class="negrita">' + item.name + '</span></p></div>'
    }



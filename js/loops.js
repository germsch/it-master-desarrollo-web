var linksContainer =  document.querySelector('.second-nav-links')

var contacts = [
    {
        "photo_url" : "...",
        "name" : "Cosme Fulanito",
        "last_connection" : "2021-04-19 18:59:34",
        "last_message" : {
            "text" : "ahgjdahgsdj",
            "date" : "2021-04-19 18:59:34",
            "read" : true
        }
    },
    {
        "photo_url" : "...",
        "name" : "Cosme Fulanito",
        "last_connection" : "2021-04-19 18:59:34",
        "last_message" : null
    },
    {
        "photo_url" : "...",
        "name" : "Cosme Fulanito",
        "last_connection" : "2021-04-19 18:59:34",
        "last_message" : null
    },
]

var links = [
    {
        href : '#home',
        name : 'Home',
        children : []
    },
    {
        href : '#productos',
        name : 'Productos',
        children : [
            {
                href : "#sublink uno",
                name : "sublink uno"
            },
            {
                href : "#sublink dos",
                name : "sublink dos"
            },
        ]
    },
    {
        href : '#nosotros',
        name : 'Nosotros',
        children : []
    },
    {
        href : '#contacto',
        name : 'Contacto',
        children : []
    },
]

for (var i = 0; i < links.length; i++) {
   linksContainer.innerHTML += generateLink(links[i])
}

function generateLink(link) {
    return '<a href="' + link.href + '">' + link.name + '</a>'
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

    var paginacion = document.querySelector('.paginacion')

    var cantidadDeResultados = 4

    function mostrarItems(q) {
        for (var i = 0; i < q; i++) {
            itemsContainer.innerHTML += `
                <div class="item-product">
                    <img src="${items[i].href}" alt="tarjeta"/>
                    <p><span class="negrita">${items[i].name}</span></p>
                </div>
            `
        }
    }

    paginacion.addEventListener('click', function () {
        cantidadDeResultados = 8
        mostrarItems(cantidadDeResultados)
    }
    )

    mostrarItems(cantidadDeResultados)
    

    // for (var i = 0; i < items.length; i++) {
    //  itemsContainer.innerHTML += generateLink(items[i])
    // }

    // function generateLink(item) {
    //     return '<div class="item-product"><img src="' + item.href + '" alt="tarjeta"\><p><span class="negrita">' + item.name + '</span></p></div>'
    // }



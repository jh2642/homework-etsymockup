fetch('http://thinksaydo.com/tiyproxy.php?url=' + encodeURIComponent('https://openapi.etsy.com/v2/listings/active?api_key=h9oq2yf3twf4ziejn10b717i&keywords=' + encodeURIComponent('board games') + '&includes=Images,Shop'))
.then(function(response) {
    return response.json()
})
.then(function(etsyData) {
    etsyData.results.forEach(function(boardGame) {
        var div = document.createElement('div')
        div.classList.add('board-game', 'col-md-3', 'titleOverflow')
        //   div.setAttribute('href', boardGame.url)

        var div2 = document.createElement('div')
        div2.classList.add('boardgamePic')
        div2.setAttribute('href', boardGame.url)
        div.appendChild(div2)

        var img = document.createElement('img')
        img.setAttribute('src', boardGame.Images[0].url_570xN)
        div2.appendChild(img)

        var title = document.createElement('h5')
        title.innerHTML = boardGame.title
        title.classList.add('titleOverflow')
        div.appendChild(title)

        var seller = document.createElement('p')
        seller.innerHTML = boardGame.Shop.shop_name
        seller.classList.add('sellerInfo')
        div.appendChild(seller)

        var price = document.createElement('p')
        price.innerHTML = '$' + boardGame.price
        price.classList.add('priceInfo')
        div.appendChild(price)

        document.getElementById('etsyData').appendChild(div)
    })
})
.catch(function(ex) {
    console.log('parsing failed', ex)
})

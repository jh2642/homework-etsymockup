fetch('http://thinksaydo.com/tiyproxy.php?url=' + encodeURIComponent('https://openapi.etsy.com/v2/listings/active?api_key=h9oq2yf3twf4ziejn10b717i&keywords=' + encodeURIComponent('board games') + '&includes=Images,Shop'))
  .then(function(response) {
    return response.json()
  })
  .then(function(etsyData) {
    etsyData.results.forEach(function(boardGame) {
      var div = document.createElement('a')
      div.classList.add('board-game')
      div.setAttribute('href', boardGame.url)

      var img = document.createElement('img')
      img.setAttribute('src', boardGame.Images[0].url_570xN)
      console.log(boardGame)
      div.appendChild(img)

      var title = document.createElement('p')
      title.innerHTML = boardGame.title
      div.appendChild(title)

      var seller = document.createElement('p')
      seller.innerHTML = boardGame.Shop.shop_name
      div.appendChild(seller)

      var price = document.createElement('p')
      price.innerHTML = boardGame.price
      div.appendChild(price)

      document.getElementById('etsyData').appendChild(div)

    })
  })
  .catch(function(ex) {
    console.log('parsing failed', ex)
  })

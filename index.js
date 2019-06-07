document.addEventListener('DOMContentLoaded', () => {
    console.log('hello')
    let form = document.querySelector('#beer-form')
    let appendHere = document.querySelector('#card-append')
    let card
    let data
    let shell

    axios.get('http://beer-me-python-backend.herokuapp.com/beers').then(function (result){ data = result.data

    
    for (let i = 0; i < data.length; i++) {

        shell = document.createElement('div')
        shell.classList.add('card')

        shell.innerHTML = data[i].beer_name
        console.log(data[i].description)
        appendHere.appendChild(shell)
        }


    })


    
})
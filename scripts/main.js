fetch('https://randomfox.ca/floof/')
    .then(response => response.json())
    .then(
        (convertedData) => {
            const foxImage = document.querySelector('#fox')
            foxImage.src = convertedData.image
        }
    )

    const getTheCat = async () => {
        const response = await fetch('http://shibe.online/api/cats?count=1&urls=true&httpsUrls=false')
        const convertedData = await response.json()
        
        const catImage = document.querySelector('#cat')
        catImage.src = convertedData[0]
    }

    getTheCat()
const fetchUrl = async (url) => {
    const response = await fetch(url)
    return response.json()
}

const init = async () => {

}

init()
import axios from 'axios'
import  { useEffect, useState } from 'react'
import Content from '../components/Content'

const Sticker = () => {

    const key = 'BDdP8rxUbdAJtEQnioASzkIEl4P8oHBi'
    const urlSticker = `https://api.giphy.com/v1/stickers/random?api_key=${key}&limit=1`
    const [gif, setGif] = useState({
        url: null,
        data: null,
        loading: true
    })
    useEffect(() => {
        async function run() {
            try {
                const response = await axios.get(urlSticker)
                const result = await response.data.data
                console.log(result)
                setGif({ url: result.images.fixed_height.url, loading: false, data: result })
                console.log(gif.url)
            } catch (err) {
                setGif({ url: err.message, loading: false, data: undefined })
            }
        }
        run()
    }, [])
    return (
        <>
            <Content data={gif.data} title={gif.data ? gif.data.title : gif.url} url={gif.url} />
        </>
    )
}

export default Sticker
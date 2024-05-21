import axios from 'axios'
import { useEffect, useState } from 'react'
import Content from '../components/Content'

const Gif = () => {
    const key = 'jOgUeILR5gfz6w6LVeDFBPChWzg7QuJJ'
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${key}&limit=1`
    const [gif, setGif] = useState({
        url: null,
        data: null,
        loading: true
    })



    useEffect(() => {
        async function run() {
            try {
                const response = await axios.get(url)
                const result = await response.data.data
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

export default Gif
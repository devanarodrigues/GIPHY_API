import { Button } from "@mui/joy"
import { Fade } from "react-awesome-reveal"

const Content = ({ data, url, title }) => {
    return (
        <>
            {
                data?
                    (
                        <Fade cascade delay={500}>
                            {
                                data ? <img width="400px" src={url} alt={url} /> : ''
                            }
                            <p>{data ? title : url}</p>
                        </Fade>
                    )
                    :
                    < Fade >
                        {
                            data === undefined
                                ?
                                <p>{url}</p>
                                :
                                <Button size="10rem" fullWidth={true} loading variant="plain" />
                        }
                    </ Fade>
            }
        </>
    )
}

export default Content

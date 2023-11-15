import type { NextPage } from 'next'

const video: NextPage = () => {
    return (
        <div style={{flex: '1', display: 'flex', marginTop: "6rem", flexDirection: "column", justifyContent: "center", padding: '0 2rem'}}>
            <h1 style={{textAlign: 'center'}}>Video</h1>
            <div style={{margin: 'auto'}}>
                <iframe width="850" height="515" src="https://www.youtube.com/embed/INheGzdanD8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <h5>Link del video: </h5>
                <a href='https://youtu.be/INheGzdanD8'>Video PASEC</a>
            </div>
        </div>
    )
}

export default video;
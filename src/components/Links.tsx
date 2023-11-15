import Image from "next/image"
import image from "../images/image.svg"
import press from "../images/press.svg"
import pdf from "../images/pdf.svg"
const Links = ({type, text, lref}: any) => {
    return (
        <div>
            {
               type == "press" ?
                <div style={{display: 'flex', alignItems: 'center', margin: '10px 0'}} className="links">
                    <Image src={press} height={28} width={28}></Image>
                    <a style={{margin: '0 10px'}} href={lref}>{text}</a>
                </div> 
                :
                type == "img"?
                <div style={{display: 'flex', alignItems: 'center', margin: '10px 0'}} className="links">
                    <Image src={image} height={28} width={28}></Image>
                    <a style={{margin: '0 10px', }} href={lref}>{text}</a>
                </div> 
                :
                <div style={{display: 'flex', alignItems: 'center', margin: '10px 0'}} className="links">
                    <Image src={pdf} height={28} width={28}></Image>
                    <a style={{margin: '0 10px', }} href={lref}>{text}</a>
                </div> 
            }
        </div>
    )
}

export default Links
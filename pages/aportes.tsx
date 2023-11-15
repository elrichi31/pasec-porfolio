import type { NextPage } from 'next'
import Image from 'next/image'
import Links from '../src/components/Links'
import img1 from '../src/images/img1.png'
import img2 from '../src/images/img2.png'
const aportes: NextPage = () => {
    return(
        <div style={{flex: '1', display: 'flex', marginTop: "6rem", flexDirection: "column", justifyContent: "center", padding: '0 2rem'}}>

            <h1 style={{textAlign: 'center'}}>Aportes</h1>

            <div style={{margin: '2% 23%'}}>
                <h3>Pagina web</h3>
                <p>se decidió realizar una página web ya que en la matriz PASEC la cual
                fue aprobada se menciona que el hospital de los valles necesita de una página web y varias
                publicaciones en redes sociales a partir de esta petición se comenzó a realizar la página. Se
                intentó contactar con la organización para que nos brinde su asesoría en cuanto a la
                personalización de la página web,</p>
                <div style={{justifyContent: 'space-evenly', display: 'flex'}}>
                    <Image src={img1} height={320} width={460}></Image>
                    <Image src={img2} height={320} width={460}></Image>
                </div>
                <h5>Link de la pagina</h5>
                <a href='https://fundacionhospitaldelosvalles.herokuapp.com'>Fundacion Hospital de los Valles</a>
            </div>

            <div style={{margin: '2% 23%'}}>
                <h3>Presentaciones e infografias</h3>
                <p>Las diferentes presentación e infografías que se presentaran a continuación tratan sobre diferentes problemáticas sociales como lo son la violencia intrafamiliar hasta el uso adecuado del agua. Esta presentaciones se hicieron con el objetivo de concientizar al público que las observa por lo que estan dirigidas tanto a adultos mayores como a jóvenes y niños.</p>
                <h5>Links a recursos</h5>
                <Links type={"press"} text={"Violencia de genero"} lref={""}></Links>
                <Links type={"img"} text={"Imagen de ayuda"} lref={"https://estudusfqedu-my.sharepoint.com/:i:/g/personal/nmoinai_estud_usfq_edu_ec/EaSK3ZYnCeVDv3eN5qfHbOcBAcLXJBK_xXKzmwmbcr0L8Q?e=cBZoE9"}></Links>
                <Links type={"press"} text={"Violencia intrafamiliar"} lref={"https://estudusfqedu-my.sharepoint.com/:b:/g/personal/nmoinai_estud_usfq_edu_ec/EaoCQn1szs5PkUNk-4s_r3QBN6vUqJcnNYpEwvxAHZEcXA?e=bFZso4"}></Links>
                <Links type={"img"} text={"Inforgrafia sobre la prevencion del COVID-19"} lref={"https://estudusfqedu-my.sharepoint.com/:i:/g/personal/nmoinai_estud_usfq_edu_ec/EaQUYnkw7w5Are6iJCB8yOEBQj6XD-0H5lxP0t9vg-3txQ?e=DRLWu2"}></Links>
                <Links type={"press"} text={"Nutricion"} lref={"https://estudusfqedu-my.sharepoint.com/:b:/g/personal/nmoinai_estud_usfq_edu_ec/EVOqwAQNZ-5KkS7fJDzhykQB7gaDTLpl88d6iuV9rBzstQ?e=pT5KZ6"}></Links>
                <Links type={"press"} text={"Educacion sexual"} lref={"https://estudusfqedu-my.sharepoint.com/:b:/g/personal/nmoinai_estud_usfq_edu_ec/EeAzkDtVrNhHuc1gbmIhXKMBYNJrHeCCAcYODjKpaN7qBQ?e=fSZDqe"}></Links>
                <Links type={"press"} text={"Reciclaje"} lref={"https://estudusfqedu-my.sharepoint.com/:b:/g/personal/nmoinai_estud_usfq_edu_ec/EcJOVNr2CHZAplbzlqEfPzEBT86V3Tpv8JGwNYtKZgxp7w?e=y1NBJY"}></Links>
                <Links type={"press"} text={"Cuidado del agua"} lref={"https://estudusfqedu-my.sharepoint.com/:b:/g/personal/nmoinai_estud_usfq_edu_ec/EXpEvuMJwp5AppBxl8Z4mQABoixB0QyAyeb-EYIclyUewQ?e=1kRWgy"}></Links>
                <Links type={"press"} text={"Virus informático VS Virus biológico"} lref={"https://estudusfqedu-my.sharepoint.com/:p:/g/personal/nmoinai_estud_usfq_edu_ec/EYBkz9KU6DpJnnvqhwcvUyMBkvz7l_GM8TOD1OEOFAVoZA?e=ME8Jk2"}></Links>
                <Links type={"img"} text={"Prevención del cáncer de piel"} lref={"https://estudusfqedu-my.sharepoint.com/:b:/g/personal/nmoinai_estud_usfq_edu_ec/EU0P0JKc0CdCoE7_44QSQl4BxN0geztwCwVDA49XAVjwHQ?e=KShfXo"}></Links>
                <Links type={"pdf"} text={"Proyecto final"} lref={"https://estudusfqedu-my.sharepoint.com/:b:/g/personal/nmoinai_estud_usfq_edu_ec/EVef847rBl5HkH3AkQiElOABspPKLNRpZXO_o7eJXMN9lw?e=y9UPe0"}></Links>
            </div>
        </div> 
    )
}

export default aportes;
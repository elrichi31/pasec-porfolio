import { NextPage } from "next";
import Image from "next/image";
const objetivo: NextPage = () => {
    return (
        <div style={{flex: '1', display: 'flex', marginTop: "6rem", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: '0 2rem'}}>
            <div style={{margin: '2% 20%'}}>
                <h1 style={{textAlign: 'center'}}>Objetivo de vida a futuro</h1>
                <p>Actualmente estoy estudiando la carrera de ingeniería en Ciencias de la computación ya que la
                programación es una de las cosas que más me apasiona en mi objetivo de vida a futuro tengo planeado
                ayudar a cualquier tipo de persona a adentrarse en el mundo de la programación no importa la edad
                sólo la predisposición de esta persona aprender y cometer errores. La razón por la que realizó esto es
                que yo a corta edad me comencé a interesar mucho por las computadoras y para ese entonces comencé
                a buscar varios tutoriales en internet sobre programación y demás cosas relacionadas a este campo y al
                cabo de pocos meses logré aprender un montón de cosas que a día de hoy en la carrera me están siendo
                de gran ayuda por lo que siempre estaré eternamente agradecido a todas esas personas en internet que
                comparten información educativa sobre programación de forma gratuita. En si mi objetivo es crear un
                blog en donde pueda enseñar a la gente a programar además de tutoriales donde explicó ejercicios de
                programación de forma gratuita ya que siento que esta información puede ser de gran valor y puede
                ayudar a muchas personas adentrarse de una carrera con un gran futuro y buenas ofertas salariales.</p>
                <div>
                    <h5>Actividades</h5>
                    <ul>
                        <li>
                            En primer lugar debemos crear una plataforma en donde podamos compartir todos nuestros conocimientos, de igual forma esta la debemos programar y subir a una plataforma de hosting, ademas se debe crear una marca personal ya que de esta manera el sitio se vera mucho más profesional.
                        </li>
                        <li>
                            Posteriormente debemos crear una cuenta de YouTube en donde podamos subir los diferentes tutoriales sobre diferentes temas de programación, estos estarán divididos en diferentes tipos ya que están los que son para principiantes, gente con conocimiento intermedio y avanzado.
                        </li>
                        <li>
                            Por último una vez creados los diferentes recursos que nos ayudaran a transmitir nuestro conocimiento debemos medir el alcance de nuestro aporte, en este caso YouTube tiene su propia plataforma de estadísticas así que en esta plataforma podríamos de que países nos están viendo hasta incluso el tiempo que están en cada video, de esta forma nos daremos cuenta si la información que estamos brindando es la más apropiada, y también la podremos corregir gracias a los comentarios que nos brinda la plataforma.
                        </li>
                    </ul>
                    <p>A continuación se presentaran dos ejemplo de lo que se quiere realizar, cabe mencionar que ambos blogs junto con sus canales de YouTube me ayudaron a aprender programación de una manera autodidacta y bastante recreativa</p>
                </div>
                <div>
                    <h5>Ejemplos</h5>
                    <div style={{display: 'flex', justifyContent: 'space-around'}}>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <Image src={"https://midu.dev/favicon/apple-touch-icon.png"} width={100} height={100}></Image>
                            <a style={{margin: '0 20px'}} href={'https://midu.dev/'}>Midudev</a>
                        </div>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <Image src={"https://yt3.ggpht.com/ytc/AKedOLSggvA4usmC3lIDdqORkmsje78sxwaSPsQ3gefNYw=s900-c-k-c0x00ffffff-no-rj"} width={70} height={70}></Image>
                            <a style={{margin: '0 20px'}} href={"https://faztweb.com/"}>Fazt web</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default objetivo
import type { NextPage } from 'next'
import Image from 'next/image'

const fortalezas: NextPage = () => {
    return(
        <div style={{flex: '1', display: 'flex', marginTop: "6rem", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: '0 2rem'}}>
            <h1 style={{textAlign: "center"}}>Fortalezas</h1>
            <div style={{display: 'flex', maxWidth: '800px', margin: '1.5rem 0', boxShadow: "2px 2px 18px #cecece", borderRadius: "10px", padding: '10px'}}>
                <p>Trabajo duro: Por lo general al momento en el que realizó algún trabajo siempre trato de hacerlo en el
                menor tiempo y de la mejor forma esto no significa que por realizar rápido un trabajo lo voy a hacer de
                una manera mediocre en mi opinión se debe tener un buen equilibrio entre la cantidad y la calidad del
                trabajo por esta razón yo prefiero equilibrar ambas y terminar lo más rápido posible sin comprometer la
                calidad del trabajo.</p>
                <div style={{minWidth: '200px', margin: '0 10px'}}><Image src={"https://thumbs.dreamstime.com/b/hombre-de-negocios-hard-working-57295930.jpg"} height={200} width={200} style={{borderRadius: '10px'}}></Image></div>
            </div>

            <div style={{display: 'flex', maxWidth: '800px', margin: '1.5rem 0', boxShadow: "2px 2px 18px #cecece", borderRadius: "10px", padding: '10px'}}>
                <div style={{minWidth: '200px', margin: '0 10px', objectFit: 'cover', overflow: 'hidden'}}><Image src={"https://static.wixstatic.com/media/a27d24_6beeffada82d4f998894881570125856~mv2.jpg/v1/fill/w_601,h_401,al_c,q_90/a27d24_6beeffada82d4f998894881570125856~mv2.jpg"} height={200} width={200} style={{borderRadius: '10px', objectFit: 'cover', overflow: 'hidden', position: 'absolute'}}></Image></div>
                <p>Trabajo en equipo: En mi opinión el trabajo en equipo es una de las habilidades qué más se necesita ya
                que a nivel profesional se utiliza en una gran parte de empresas, por lo que al momento en el que
                realizó algún trabajo en equipo siempre trato de escuchar la opinión del resto de los integrantes del
                grupo tomando en cuenta sus ideas y las trató de implementar al trabajo que se está realizando además
                de que siempre intento tener una buena relación con los miembros del grupo ya que de esta forma
                trabajar será mucho más entretenido y rápido.</p>
            </div>

            <div style={{display: 'flex', maxWidth: '800px', margin: '1.5rem 0', boxShadow: "2px 2px 18px #cecece", borderRadius: "10px", padding: '10px'}}>
                <p>Creatividad: La creatividad es una de mis fortalezas más indispensables ya que por lo general al
                momento en el que tengo que realizar algún trabajo que requiere creatividad lo realizó sin mucho
                esfuerzo, en algunas ocasiones me ha pasado que las ideas y mi forma de pensar creativa no fluye esto
                se debe a que estoy estresado o tengo otras cosas en mente por lo que sí me siento de esta forma
                siempre trato de relajarme o buscar alguna actividad que me desestrese.</p>
                <div style={{minWidth: '200px', margin: '0 10px'}}><Image src={"https://www.jovenesfuertes.org/media/creatividad.jpg"} height={200} width={250} style={{borderRadius: '10px'}}></Image></div>
            </div>
        </div> 
    )
}

export default fortalezas;
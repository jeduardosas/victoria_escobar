
import {useState } from "react";
import { useLocation, Navigate} from "react-router-dom";
import Modal from "react-modal";
import getData from "../../data.js";
import Reproductor from "../components/Reproductor.jsx";
import CountDown from "/@/components/ContDown";
import TimeLine from "../components/TimeLine";
import Slider from "../components/Slider.jsx";
import textConfirmacion from "../functions/textConfirmacion.js";
import Footer from "../components/Footer";
import '/@/styles/invitacion.css'
import '/@/styles/modal.css'

//estilos para el modal 
const customStyles = {
  content:{
    width:'80%',
    top:'50%',
    left:'50%',
    right:'auto',
    bottom:'auto',
    transform:'translate(-50%, -50%)',
    textAlign:'center',
    border:'none',
    boxShadow:'10px 10px 10px #bdbdbd',
    backgroundColor:'var(--color_principal)',

  },
};

const Invitacion = () => {

  const data = getData('XV')

  const song = './music/song.mp3'

  
  const [play,setPlay] = useState(false); //estado para manejar la reproduccion del audio
  const [modalIsOpen, setModalIsopen] = useState(true);//estado para manejar el modal


  //VALIDACION DE LOS PARAMS DE LA URL
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const pases = params.get("pases") || "";
  let txt1 = 'lugar';
  let txt2 = 'reservado';

  if (pases === "") {
    return <Navigate to="/notfound" />;
  }
  if(pases<1 || pases >10){
    return <Navigate to="/notfound" />
  }

  if(pases >1){
    txt1='lugares';
    txt2='reservados'
  }

  const handlePlay = ()=>{
    setPlay(true);
    setModalIsopen(false)
  }

  return (

    <>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={()=>setModalIsopen(false)}
        style={customStyles}
        contentLabel="Confirmacion de Reproducción"
        ariaHideApp={false} //necesario para evitar adverterncias en pruebas yu desarrollo
        shouldCloseOnOverlayClick={false}
      >
        
        {/* <h5 className="modal-tittle-1">{data.event_type === 'boda' ? 'Nuestra Boda' : 'MIS XV AÑOS'}</h5> */}
        <h2 className="modal-tittle-2">
            <p>{data.nombre}</p>
        </h2>
        <p className="modal-content">Para una mejor experiencia, por favor acepta la reproducción automática.</p>  
        <button className="modal-button" onClick={handlePlay}>Aceptar</button>
        
      </Modal>

      {
        play && (
          <>
            <section className="header">
              <img src={`./img/${data.imagenes.imgHeader}.webp`} alt="header" />
            </section>

            <section className="contador centrar">
              <h2 className="datos-tittle">Mis Xv años</h2>
              <p>Ya casi llega la fecha...</p>
              <CountDown 
                data={data}/>
              <div className="contador_frase">
                <p>{data.frase}</p>
              </div>
            </section>

            
      
            <section className="datos">
            <section className="datos-padres">
                <h2 className="datos-padres-tittle">En compañia de mis Padres</h2>
                <div className="datos-padres-papas">
                  <div className="datos-padres-papas-novia">
                    <p>{data.padres.mama}</p>
                    <p>{data.padres.papa}</p>
                  </div>
                  
                </div>
                <div className="datos-padres-padrinos">
                  <h3 className="datos-padres-padrinos-tittle">Y de mis Padrinos</h3>
                  <div className="datos-padres-padrinos-nombres">
                    <p>{data.padrinos.madrina}</p>
                    <p>{data.padrinos.padrino}</p>
                  </div>
                </div>
              </section>
              
              

              <section className='fecha'>
                <div className="fecha-tittle">
                  <p>Celebremos juntos el día</p>
                </div>
                <div className="fecha-container">
                  <div className="fecha-dia">
                    <p>{data.fechaDia}</p>
                  </div>
                  <div className="fecha-mes">
                    <p>{data.fechaMes}</p>
                  </div>
                  <div className="fecha-year">
                    <p>{data.fechaYear}</p>
                  </div>
                </div>
              </section>

              <div style={{width:'100%'}} className="banner">
                <img src={`./img/${data.imagenes.imgBanner1}.webp`} alt="img-banner" />
              </div>

              <div className="datos-item">
                <div className="datos-item_tittle">
                  <div className="datos-item_tittle-icon">
                    <img src="./icons/CHURCH.svg" alt="" />
                  </div>
                  <div className="datos-item_tittle-tittle">
                    <p>Ceremonia Religiosa</p>
                  </div>
                </div>

                <div className="datos-item_body">
                  <div className="datos-item_body-hn">
                    <p className="datos-item_body-hn-h">{data.religiosa.hora} : {data.religiosa.minutos} hrs.</p>
                    <p className="datos-item_body-hn-n">{data.religiosa.lugar}</p>
                  </div>
                  <div className="datos-item_body-direc">
                    <p>{data.religiosa.direccion}</p>
                    <p>{data.religiosa.direccionCol}</p>
                    <p>{data.religiosa.direccionCd}</p>
                  </div>
                </div>

                <div className="datos-item-fotter">
                  <button className='datos-item-fotter-button'>
                    <a href={data.religiosa.ubicacion}>Ver ubicación</a>
                  </button>
                </div>
                
              </div> {/*::::::::::F I N   D E   I T E M  :::::::::: */}

              <div className="datos-item">
                <div style={{width:'90%'}} className="datos-item_tittle">
                  <div className="datos-item_tittle-icon">
                    <img src="./icons/recepcion.svg" alt="" />
                  </div>
                  <div className="datos-item_tittle-tittle">
                    <p>Recepción</p>
                  </div>
                </div>

                <div style={{width:'90%'}} className="datos-item_body">
                  <div className="datos-item_body-hn">
                    <p className="datos-item_body-hn-h">{data.recepcion.hora} : {data.recepcion.minutos} hrs.</p>
                    <p className="datos-item_body-hn-n">{data.recepcion.lugar}</p>
                  </div>
                  <div className="datos-item_body-direc">
                    <p>{data.recepcion.direccion}</p>
                    <p>{data.recepcion.direccionCol}</p>
                    <p>{data.recepcion.direccionCd}</p>
                  </div>
                </div>

                <div className="datos-item-fotter">
                  <button className='datos-item-fotter-button'>
                    <a href={data.recepcion.ubicacion}>Ver ubicación</a>
                  </button>
                </div>
                
              </div> {/*::::::::::F I N   D E   I T E M  :::::::::: */}
              

            </section>

            {/*::::::::::T I M E L I N E:::::::::: */}
            <TimeLine 
              data={data}/>

            <div className="banner">
              <img src={`./img/${data.imagenes.img}.webp`} alt="" />
            </div>

            {/*::::::::::R E G A L O S :::::::::: */}

            <div className="banner-img">
              <img src={`./img/${data.imagenes.imgFondo1}.webp`} alt="imagen_2" />
            </div>

            <section className="regalos">

              {/* <div className="regalos-vestimenta">
                <div className="regalos-vestimenta-tittle">
                  <img src="./icons/vestimenta.svg" alt="" />
                  <h3>Código de Vestimenta</h3>
                </div>
                <div className="regalos-vestimenta-body">
                  <p style={{textTransform:'uppercase',fontSize:'25px',textAlign:'start'}}>Formal</p>
                  <p>El color Rosa es Exclusivo de la Quinceañera.</p>
                  
                </div>
              </div> */}


              <div className="regalos-sobres">
                <div className="regalos-sobres-tittle">
                  <img src="./icons/sobres.svg" alt="" />
                  <h3>Lluvia de Sobres</h3>
                </div>
                <div className="regalos-sobres-body">
                  <p>{data.regalos.frase}</p>
                </div>
              </div>

            <div className="banner">
              <img src={`./img/${data.imagenes.imgBanner2}.webp`} alt="" />
            </div>
            </section>

            

            <div className="banner">
              <img src={`./img/${data.imagenes.imgFondo2}.webp`} alt="" />
            </div>

            <Slider />

             <section className="lugares">
                <div className="lugares-number">
                  <p>{pases}</p>
                </div>
                <div className="lugares-text">
                  <p>{txt1} {txt2}</p>
                  <span>en su honor.</span>
                </div>

                
              </section>

              <section className="confirmacion-no">
                <div className="confirmacion-item-no">
                  <div className="confirmacion-item-tittle-no">
                    <h3>Gracias</h3>
                  </div>
                  <div className="confirmacion-item-body-no">
                    <p>Por acompañarnos en este día tan especial para nosotros.</p>
                    <p className="confirmacion-item-body-no-2"></p>
                  </div>
                </div>
              </section>

            <section className="confirmacion">
              <div className="confirmacion-item">
                <div className="confirmacion-item-tittle">
                  <img src="./icons/confirmacion.svg" alt="" />
                  <h3>Confirmación</h3>
                </div>
                <div className="confirmacion-item-body">
                  <p>Clic aquí para confirmar tu asistencia</p>
                  <div className="confirmacion-item-body-items">
                    <div className="confirmacion-item-body-items-novia">
                      <button>
                        <a href={`https://api.whatsapp.com/send?phone=52${data.confirmacion}&text=¡Hola!👋%20Quiero%20confirmar%20mi%20asistencia%20${textConfirmacion(data.type,data.nombre)}%20`}>Confirmar</a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            

            

            <Reproductor song={song} />
      
            <Footer />
          
          </>
        )
      }
      
        
    </>
    
    
  );
};

export default Invitacion;

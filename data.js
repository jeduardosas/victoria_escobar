const datosComunes = {
  frase:'Hay momentos en la vida que son muy especiales por si solos, pero al compartirlo con personas tan especiales como tú, se convierten en momentos imposibles de olvidar.',
  imagenes:{
    imgHeader:'header',
    imgBanner1:'banner1',
    imgBanner2:'banner2',
    imgBanner3:'banner3',
    imgFondo1:'flor1',
    imgFondo2:'flor2'
  },
  fechaDia:'28',
  fechaMes:'Diciembre',
  fechaYear:'2024',
  religiosa:{
    hora:'19',
    minutos:'00',
    lugar:'Capilla de San Martin de Porres',
    direccion:'Emiliano Zapata, 21',
    direccionCol:'24 de Febrero',
    direccionCd:'Iguala de la Independencia',
    ubicacion:'https://maps.app.goo.gl/hPi8qJLxJbGf9geg8',

  },
  recepcion:{
    hora:'20',
    minutos:'00',
    lugar:'Salón Oasis',
    direccion:'Blv. H. Colegio Militar',
    direccionCol:'Las Americas II',
    direccionCd:'Iguala de la Independencia.',
    ubicacion:'https://maps.app.goo.gl/niWWt2xe97jsGsfZ6'
  },
  regalos:{
    frase:'El mejor regalo es tu presencia, pero si gustas darme un Obsequio puede ser en efectivo.', //PENDIENTE
    url:''
  },
  timeLine:{
    settings:{ 
      bgColor:'var(--color_card)',
      color:'var(--color_principal)',
      lineColor:'var(--color_card)'
    },
    protocol:[
      {
        id:1,
        time:'19:00 Hrs', 
        name:'Ceremonia Religiosa',
        icon:'CHURCH',
        color:'var(--color_tex)',
        textColor:'rgb(218 167 88)'
      },

      {
        id:2,
        time:'20:00 Hrs',
        name:'Recepción y Cocteleria',
        icon:'recepcion',
        color:'var(--color_timeline)',
        textColor:'rgb(218 167 88)'
      },

      {
        id:3,
        time:'21:00 Hrs',
        name:'Protocolo',
        icon:'brindis',
        color:'var(--color_timeline)',
        textColor:'rgb(218 167 88)'
      },
      {
        id:4,
        time:'22:00 Hrs',
        name:'Banquete',
        icon:'comida',
        color:'var(--color_timeline)',
        textColor:'rgb(218 167 88)'
      },
      {
        id:5,
        time:'23:00 Hrs',
        name:'¡A Bailar!',
        icon:'musica',
        color:'var(--color_timeline)',
        textColor:'rgb(218 167 88)'
      },
    ]
  },
  hoteles:[ //PENDIENTE
    {
      nombre:'Hotel Gran Plaza',
      direccion:'Miguel Hidalgo, 7',
      direccion_colonia:'centro, Iguala de la Independencia, Gro',
      telefono:'7333326990',
      ubicacion:'https://maps.app.goo.gl/GK7ARLS9ESHJT2pa8'
    },
    {
      nombre:'Hotel Reforma #14',
      direccion:'Refroma, 14',
      direccion_colonia:'centro, Iguala de la Independencia, Gro',
      telefono:'7331517327',
      ubicacion:'https://maps.app.goo.gl/m4UMcsUnELYm3NaH8'
    },
    {
      nombre:'Hotel Real 1900',
      direccion:'Miguel Hidalgo,6',
      direccion_colonia:'Centro, Iguala de la Independencia, Gro.',
      telefono:'7331101106',
      ubicacion:'https://maps.app.goo.gl/bcRQiHRzWotJcCNe9'
    },

  ]

}

const tipoevento={
  boda:{
    type:'boda',
    nombreNovia:'',
    nombreNovio:'',
    padresNovia:{
      papa:'',
      mama:''
    },
    padresNovio:{
      papa:'',
      mama:'',
    },
    padrinos:{
      padrino:'',
      madrina:'',
    },
    confirmacion:{
      novio:'',
      novia:''
    },
  },
  
  bautizo:{
    type:'bautizo',
    nombre:'',
    padres:{
      papa:'',
      mama:''
    },
    padrinos:{
      padrino:'',
      madrina:''
    }
  },
  
  XV:{
    type:'xv',
    nombre:'Victoria',
    padres:{
      papa:'Oscar G. Escobar Aguillón',
      mama:'Anamely García Morales'
    },
    padrinos:{
      padrino:'Rubi Chapa Álvarez',
      madrina:'Alberto Román Jiménez'
    },
    confirmacion:'7331339402' 
  }
}

const getData = (type)=>{
  return {...datosComunes, ...tipoevento[type]}
}

export default getData


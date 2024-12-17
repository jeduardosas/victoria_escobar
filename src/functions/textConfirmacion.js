const textConfirmacion = (type,nombre1='',nombre2='')=>{
  if(type === 'xv'){
    return `a%20los%20XV%20de%20${nombre1}`
  }

  if(type=== 'boda'){
    return `a%20la%20boda%20de%20${nombre1} & ${nombre2}`
  }
  if(type === 'bautizo'){
    return `al%20bautizo%20de%20${nombre1}`
  }
}

export default textConfirmacion
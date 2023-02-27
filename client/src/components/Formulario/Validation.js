


const validation=(form)=>{
    const regexName=/^[a-zA-Z]+$/ 
    let errors={}

    if(!form.name||!regexName.test(form.name)){
        errors.name="Este campo no puede estar vacio y solo puede contener caracteres alfabeticos"
    }
   
    if(!form.summary){
        errors.summary="Este campo no puede estar vacio"
    }
    if(!form.healtScore || form.healtScore>999 ){
        errors.healtScore="Este campo no puede estar vacio y no puede ser mayor a 999"
    }
   
    if(!form.steps){
        errors.steps="Este campo no puede estar vacio"
    }
    if(!form.diets){
        errors.diets="Este campo no puede estar vacio"
    }

return errors
}


export default validation
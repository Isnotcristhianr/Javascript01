class est{

    constructor (edad){
        this.edad=edad;
    }

    ingresar(){
    
        if(this.edad>=18)
            resp="Puede ingresar";
        else
            resp="No puede ingresar";

        return resp;

    }

    evaCedula(){
        let cad=  document.getElementById("ced").value.trim();
        let total=0;
        let longitud= cad.length;
        let aux;
        let lonvalida= longitud-1;

        if(cad !=="" && longitud=== 10){
            for(let i=0; i<lonvalida; i++){
                if(i%2 ===0){
                    aux=cad.charAt(i)*2;

                    if(aux>9) aux-=9;
                    
                    total += aux;                       

                }else{
                    total += parseInt(cad.charAt(i));
                }
            }

            total = total%10 ?10 - total % 10 :0;
            
            if(cad.charAt(lonvalida)==total){
                console.log("ced valida");
                
                document.getElementById("demo2").innerHTML=("Cédula valida");
            }else{
                console.log("error de ced");
                document.getElementById("demo2").innerHTML=("Cédula incorrecta");
            }

        }

    }

    


}
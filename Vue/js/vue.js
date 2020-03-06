//Creamos una nueva instancia para utilizar el framework de Vue
const app = new Vue({
    //declaramos el id del contenedor donde queramos utilizar la logica de Vuejs
    el: '#app',
    //El contenedor de todos los datos
    data: {
        //Clave - valor
        titulo: "Primer titulo con Vuejs",
        //Array 
        alumnos: [
            'Carri',
            'Fernando',
            'Claudia',
            'Oscar',
            'Rafa',
            'Juani',
            'Laura',
            'Pablo',
            'Rodri',
            'Adri'
        ],
        colores: [
            'rojo',
            'azul',
            'verde',
            'amarillo',
            'naranja',
            'marron',
            'negro'
        ],
        Estilos: [{
            img: 'https://www.flaticon.com/premium-icon/icons/svg/2410/2410369.svg',
            nombre: 'Carri',
            estilo: 'Salsa',
            pro: false
        },
            {
                img: 'https://image.flaticon.com/icons/svg/599/599352.svg',
                nombre: 'Fernando',
                estilo: 'Flamenco',
                pro: true
            },
            {
                img: 'https://www.flaticon.com/premium-icon/icons/svg/2221/2221855.svg',
                nombre: 'Claudia',
                estilo: 'Rock',
                pro: true
            },
            {
                img: 'https://image.flaticon.com/icons/svg/122/122850.svg',
                nombre: 'Oscar',
                estilo: 'bachata',
                pro: true
            },
            {
                img: 'https://www.flaticon.com/premium-icon/icons/svg/2410/2410369.svg',
                nombre: 'Rafa',
                estilo: 'Salsa',
                pro: true
            },
            {
                img: 'https://image.flaticon.com/icons/svg/599/599352.svg',
                nombre: 'Juani',
                estilo: 'Flamenco',
                pro: true
            },
            {
                img: 'https://www.flaticon.com/premium-icon/icons/svg/2221/2221855.svg',
                nombre: 'Laura',
                estilo: 'Rock',
                pro: true
            },
            {
                img: 'https://image.flaticon.com/icons/svg/122/122850.svg',
                nombre: 'Pablo',
                estilo: 'bachata',
                pro: true
            },
            {
                img: 'https://www.flaticon.com/premium-icon/icons/svg/2221/2221855.svg',
                nombre: 'Rodri',
                estilo: 'Rock',
                pro: true
            },
            {
                img: 'https://image.flaticon.com/icons/svg/122/122850.svg',
                nombre: 'Adri',
                estilo: 'bachata',
                pro: true
            },
        ],
        //en nuevoAlumno recojemos los datos del input que se asocie con este
        //siempre va a iniciarse como  vacio
        nuevoAlumno: '',
        nuevoEstilo:'',
    },
    
    //aqui en el methods vamos a tener los metodos que son funciones asociadas a la instancia de vue
    methods:{

        agregarAlumno(){
            console.log("hemos dado un click")
            //el this  llama el objedcto del dado
            console.log(this.nuevoAlumno)

            this.Estilos.push({
                nombre:this.nuevoAlumno,
                estilo:this.nuevoEstilo,
                pro: false,
                img: this.nuevaImagen
                
    
            })
            this.nuevoAlumno = '',
            this.nuevoEstilo = '',
            this.nuevaImagen = ''
        },
        eliminarAlumno: function (index) {
            console.log(this.Estilos[0])
            this.Estilos.splice(index,1)

        }
    }
})

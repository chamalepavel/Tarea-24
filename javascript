tarea 24

/* Paso 1:
Usamos desestructuración para extraer una propiedad
desde un objeto llamado "maquina".

Creamos una constante llamada "comandos", que obtiene
el valor del atributo interno "controles".
*/

const maquina = {
  tipo: 'ZX-9000',
  cargaEnergetica: 85,
  controles: {
    sonido() {
      console.log('Beep Boop');
    },
    disparo() {
      console.log('Pew Pew');
    }
  }
};

const { controles: comandos } = maquina;


/* Paso 2:
Como ya tenemos acceso directo a "comandos",
podemos ejecutar sus métodos sin referirnos a "maquina".

Llamamos a comandos.sonido(), que equivale a
maquina.controles.sonido().
*/

comandos.sonido();  // Debería mostrar "Beep Boop"

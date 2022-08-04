# **Arquitectura cliente-servidor**
La arquitectura cliente-servidor persigue el objetivo de procesar la información de un modo distribuido. De esta forma, pueden estar dispersos en distintos lugares y acceder a recursos compartidos.

## ¿Que es un servidor?
Genéricamente un servidor es un *ordenador*, pero con prestaciones elevadas. Sin embargo, desde este enfoque, un servidor es un proceso que *ofrece recursos y servicios* a los clientes que lo solicitan (back end).

Según el tipo de servidor implantado, tendremos un tipo de arquitectura cliente-servidor diferente. A su vez, debido a que los programas y datos se encuentran centralizados, se facilita la integridad y el mantenimiento.
## ¿Que es un cliente?
De manera genérica, nos referimos a una *computadora*, normalmente con prestaciones ajustadas, sin embargo, en entornos cliente-servidor, se utiliza el término front end, ya que es un proceso que solicita los servicios del servidor a través de una petición del usuario.

Un proceso cliente se encarga de interactuar con el usuario, por lo que estará construido con alguna herramienta que permita implementar interfaces gráficas (GUI).

## ¿Que es el Middleware?
Es la parte del software del sistema que se encarga del transporte de los mensajes entre el cliente y el servidor y facilita la interconexión de sistemas heterogéneos sin utilizar tecnologías propietarias. Por lo cual, se ejecuta en ambos lados de la estructura.

El middleware permite independizar a los clientes y a los servidores. Además, ofrece más control sobre el negocio, debido a que permite obtener información desde diferentes orígenes —uniendo tecnologías y arquitecturas distintas— y ofrecer de manera conjunta.

Otra característica es que los sistemas están débilmente acoplados ya que interactúan mediante el envío de mensajes.

![Arquitectura cliente-servidor](/Infraestructura%20I/Img/Arquitectura%20cliente-servidor.png)

### PASOS
1. **Inicio del servidor** - durante el arranque del sistema operativo o con la intervencion posterior del administrador del sistema - *Una vez iniciado, espera las solicitudes de los clientes.*
2. **Uno de los clientes realiza una solicitud al servidor.**
3. **El servidor recibe la solicitud**, realiza cualquier verificación necesario y, si todo es correcto, la procesa.
4. **Cuando el servidor disponga del resultado solicitado, lo envía al cliente.**
5. **El cliente recibe el resultado que solicitó.** A continuación realiza las comprobaciones oportunas —*en caso de ser necesarias*— y, si ese es el objetivo final, se lo muestra al usuario.

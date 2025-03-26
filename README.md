# EFSITP1_BenDov_Eulmesekian

La interfaz fue sencilla de realizar. Hicimos el logo con una IA y pusimos la imagen. Luego para el formulario redondeamos los bordes de un div y le agregamos sombras para dar un efecto flotante. Los input los redondeamos y agregamos sombras internas. Además usamos focus para cambiar el color del borde cuando se selecciona. 

JS:
La primera complicación fue hacer la primera validación, ya que son métodos nuevos para nosotros. Sin embargo pudimos hacerla facilmente y con eso tuvimos el pie para hacer las demás validaciones. 
Todas las validaciones están hechas con 3 condicionales que verifican si los caracteres que se están ingresando cumplen o no con ciertas condiciones. En caso de cumplirlas el borde de los campos cambia a verde y la funcion devuelve un "true", y de lo contrario, cambia a rojo seguido aparece un mensaje de error y devuelve "false". 

Lo que más nos costó fue el campo de "confirmar contraseña". Para resolverlo, en lugar de devolver "true" o "false", hicimos que en el campo contraseña, si es que lo ingresado cumple los requisitos, se envían los caracteres ingresados, para luego ser enviado por parametro a la funion de confirmar contraseña. 

Por último, al enviar el formulario se ejecuta una función que verifica que todas las funciones anteriores sean iguales a true, o en el caso de la contraseña que sea distinto a "". 


Mejoras a agregar:
- a la hora de querer enviar el formulario con campos vacios, marcar los bordes de este mismo en rojo
- hacer mensajes de error mas especificos (campo incompleto, o para la contraseña especicar que es lo que le falta)



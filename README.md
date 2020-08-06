# Yalo Challenge

Como esta estructurado este repo:
- CHALLENGE.md: Las instrucciones del challenge tal y como fueron entregadas
- yalo-challenge-java: La solucion al challenge utilizando java como lenguaje de programacion, projecto maven.
- yalo-challenge-node: Si me da tiempo aqui pondre el equivalente en el lenguaje javascript del challenge en java. **No me dio tiempo de hacer todas las pruebas unitarias de la app de node (las de java estan al 100%) pero la applicacion node deberia de poder procesar los inputs indicados en el challenge**

# Preface

Debido a que el problema en cuestion es interpretar cierto tipo de lenguage imaginario. Decidi utilizar una herrmienta para generar parsers y lexers basados en un archivo de gramatica.

Antrl4 puede generar parsers y lexers en varios lenguajes. En esta ocasion estoy utilizando el generador de java. Ya que es con el que mas experiencia tengo.

Luego de buscar una gramatica basica para arithmetica encontre una que se adecuaba mucho a lo que necesitamos la cual extendi para poder procesar las expressiones que deseamos.

# Fuera de alcanze

Debido a que este codigo tiene como objetivo demostrar mis habilidades y no probar la tecnologia sobre las que estan hechas hay muchas cosas fuera del alcanze del proyecto.

Algunas de ellas son:
- 100% coverage de unit tests, se crearon solo las necesarias
- No hay validacion de input en los servicios
- Si se ingresan expressiones muy complejas puede darse un stackoverflow ya que este codigo no esta optimizado y es solo para propositos de demostracion.







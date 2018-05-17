# Hourly Rate
Para un desarrollador es muy importante saber como determinar el costo de su trabajo para estimar presupuestos acordes al grado de esfuerzo, calidad y eficiencia en tiempo del proyecto. Es por esto que tu trabajo es ayudar a los desarrolladores futuros a tener una mejor idea de este estimado a través del desarrollo de una webapp que haga la evaluación de manera automatizada basado en el cálculo de las variables y características descritas en los artículos a continuación:

- [¿Cómo cobrar el diseño?](http://nfgraphics.com/como-cobrar-el-diseno/)
- [Metodología para cobrar lo que te mereces como diseñador](https://www.lauralofer.com/metodologia-calcular-tarifas-disenador/)
- [¿Sabes cuánto cobrar por tu hora como freelance?](http://www.calculadorafreelance.com/)

## ¿Qué debes hacer?
1. Crea un formulario en HTML que reciba las variables necesarias para hacer el calculo por hora.
2. Completa el script de JS que evalue las variables recibidas por el formulario y nos muestre el resultado en un elemento de contenido dinámico.
3. Una vez completado el script, agregar estilos a la app a través de un archivo externo de CSS que mejore la interfaz y siga los lineamientos de responsive design.

## ¿Qué algoritmo debes desarrollar?
### Variables a considerar
| Campo                       | Tipo de dato  |
| --------------------------- |:-------------:|
| Cuantas horas al día        | Número        |
| Cuantos días a la semana    | Número        |
| Cuanto quiero ganar al mes  | Número        |
| Cuantos días libres quieres | Número        |
| Cuantos días de inactividad | Número        |
| Porcentaje de juntas        | Número(%)     |
| Gastos mensuales fijos(Renta, Internet, Celular, Luz, Comidas)                      | Número        |
| Jubilación                  | Número(%)     |

### Pasos a seguir
1) Salario bruto anual = Quieres ganar x 12
Horas posibles = Horas al día x días a trabajar x 52 semanas
2) Hora básico = Salario Bruto Anual / Horas posibles

3) Sumamos el precio de horas que no se van a trabajar
Horas que no trabajaras = días libres x horas al día + días de inactividad X horas al día

4) Calcular tiempo administrativo
Tiempo administrativo = Porcentaje de juntas x (horas posibles - horas que no trabajaras)

5) Calcular el total de gastos fijos 
Gastos fijos = Gastos mensuales fijos x 12

6) Calcular el precio extra del trabajo
Precio extra = Horas que no trabajaras + Tiempo administrativo + Gastos fijos

7) Horas efectivas
Horas efectivas = (Horas posibles - horas que no trabajaras - tiempo adminstrativo) x hora básica

8) Rentabilidad
Precio extra / Horas efectivas

9) Hora básica + (Hora básica * rentabilidad) + (Hora básica * jubilación) = Precio por hora de trabajo
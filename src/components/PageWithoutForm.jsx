import React from 'react';
import Header from './headerHome';
import Footer from './footer';
import './PageWithoutForm.css'; // Asegúrate de tener los estilos correspondientes

const PageWithoutForm = () => {
  return (
    <div className="container">
      <Header />
      <div className="hero">
        <h1>¡Gana con Ontario!</h1>
      </div>
      <div className="description">
        <h2>Descripción del Sorteo</h2>
        <p>Participa en nuestro sorteo por la compra de tu lote en cualquiera de nuestros proyectos inmobiliarios. ¡Puedes llevarte grandiosos premios!</p>
      </div>
      <div className="content">
        <div className="steps-container">
          <h2>¿Cómo puedes participar?</h2>
          <div className="steps">
            <div className="step">
              <h3>Paso 1</h3>
              <p>Compra un lote en cualquiera de nuestros proyectos inmobiliarios.</p>
            </div>
            <div className="step">
              <h3>Paso 2</h3>
              <p>Recibe un cupón con un código único para participar.</p>
            </div>
            <div className="step">
              <h3>Paso 3</h3>
              <p>Ingresa el código en nuestro sitio web o entrega el cupón en nuestras oficinas.</p>
            </div>
            <div className="step">
              <h3>Paso 4</h3>
              <p>Espera el anuncio de los ganadores en nuestra página y redes sociales.</p>
            </div>
          </div>
        </div>
        <div className="participants-table">
          <h2>Lista de Participantes</h2>
          <table>
            <thead>
              <tr>
                <th>Documento</th>
                <th>Nombres</th>
                <th>Correo</th>
                <th>Celular</th>
                <th>Código</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>12345678</td>
                <td>Juan Pérez</td>
                <td>juan.perez@example.com</td>
                <td>987654321</td>
                <td>ABCD-1234</td>
              </tr>
              <tr>
                <td>87654321</td>
                <td>María López</td>
                <td>maria.lopez@example.com</td>
                <td>912345678</td>
                <td>EFGH-5678</td>
              </tr>
              <tr>
                <td>11223344</td>
                <td>Carlos Ruiz</td>
                <td>carlos.ruiz@example.com</td>
                <td>923456789</td>
                <td>IJKL-9012</td>
              </tr>
              <tr>
                <td>22334455</td>
                <td>Ana Torres</td>
                <td>ana.torres@example.com</td>
                <td>934567890</td>
                <td>MNOP-3456</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="testimonials">
        <h2>Testimonios</h2>
        <div className="testimonial">
          <p>"Gracias a esta promoción, pude comprar el lote de mis sueños y ahora tengo la posibilidad de ganar un auto. ¡Increíble!" - Juan Pérez</p>
        </div>
        <div className="testimonial">
          <p>"La mejor decisión fue invertir en un lote de esta inmobiliaria. Estoy muy emocionada por el sorteo." - María López</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PageWithoutForm;

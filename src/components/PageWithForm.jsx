import React from 'react';
import Header from './headerHome';
import Footer from './footer';
import './PageWithForm.css'; // Asegúrate de tener los estilos correspondientes

const PageWithForm = () => {
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
      <div className="form-container">
        <h2>Participa en el Sorteo</h2>
        <form>
          <div className="form-group">
            <label htmlFor="documento">Documento:</label>
            <input type="text" id="documento" name="documento" required />
          </div>
          <div className="form-group">
            <label htmlFor="nombres">Nombres:</label>
            <input type="text" id="nombres" name="nombres" required />
          </div>
          <div className="form-group">
            <label htmlFor="correo">Correo:</label>
            <input type="email" id="correo" name="correo" required />
          </div>
          <div className="form-group">
            <label htmlFor="celular">Celular:</label>
            <input type="tel" id="celular" name="celular" required />
          </div>
          <div className="form-group">
            <label htmlFor="codigo">Código:</label>
            <input type="text" id="codigo" name="codigo" required />
          </div>
          <div className="form-group">
            <input type="checkbox" id="terminos" name="terminos" required />
            <label htmlFor="terminos">Estoy de acuerdo con los términos y condiciones</label>
          </div>
          <div className="form-group">
            <input type="checkbox" id="datos" name="datos" required />
            <label htmlFor="datos">Autorizo el uso de mis datos personales</label>
          </div>
          <div className="form-group">
            <button type="submit">Ingresar</button>
          </div>
        </form>
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

export default PageWithForm;

import './styles/About.css'
import {FooterLinks} from "../components/Footer/Footer.tsx";
export default function About() {
  return (
    <>
      <section className="about" id="about">
            <div className="row">
                <div className="image">
                    <img src="../../../public/_0e631b5e-a34a-4295-99c2-fcb7552bccde.jpeg" alt="" />
                </div>
                <div className="content">
                    <h3>Sobre<span> Nosotros</span></h3>
                    <p>En Café Granito Marrón, nos enorgullece presentar nuestra distinguida línea de productos de café, centrada en la excelencia, la sostenibilidad y la autenticidad. Nos especializamos en la comercialización y venta de Café Orgánico Diferenciado, con nuestro producto estrella: Café Origen Calima el Darien Orgánico.</p>
                    <p>En Café Granito Marrón, nos comprometemos a ofrecer a nuestros clientes productos de la más alta calidad, cultivados con cuidado y dedicación en nuestra parcela ubicada en la Vereda La Florida de Calima el Darien, a una altura de 1526 MSN. Nuestro café orgánico se cultiva de manera responsable, sin el uso de pesticidas ni químicos dañinos, garantizando así un producto puro y natural.</p>
                    <p>Nuestro Café Origen Calima el Darien es el resultado de un proceso meticuloso desde la siembra hasta la taza. Cada grano se cosecha a mano con amor y pasión, preservando su pureza y sabor distintivo. Libre de conservantes y aditivos en el proceso de transformación, nuestro café conserva su autenticidad y frescura, ofreciendo una experiencia única de sabor y aroma.</p>
                </div>
            </div>
      </section>
      <FooterLinks/>
    </>
  )
}

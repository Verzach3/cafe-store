import './style.css'
import {FooterLinks} from "../components/Footer/Footer.tsx";
export default function About() {
  return (
    <>
      <section className="about" id="about">
            <h1 className="heading"><span>about</span>us</h1>
            <div className="row">
                <div className="image">
                    <img src="../../../public/_0e631b5e-a34a-4295-99c2-fcb7552bccde.jpeg" alt="" />
                </div>
                <div className="content">
                    <h3>what is <span>our story</span></h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, omnis labore atque quibusdam aspernatur velit aperiam rem, amet adipisci enim possimus eius qui facilis ipsa distinctio vel placeat consequuntur dicta.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo non minima provident ut deserunt quibusdam ullam ea deleniti eveniet neque, dignissimos vero voluptatem iusto nemo labore debitis praesentium rerum quos.</p>
                <a href="#" className="btn">learn more</a>
                </div>
            </div>
      </section>
      <FooterLinks/>
    </>
  )
}

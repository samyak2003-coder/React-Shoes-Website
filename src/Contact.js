import Nav2 from "./Navigation/Nav2";
import "./Contact.css";

function Contact() {
    return (
        <>
            <Nav2 />
            <div className="contact-container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31094.13639607781!2d77.57568048102442!3d13.05049459291807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1925ed3bc12f%3A0x7b731ab2850d5f8b!2sPhoenix%20Mall%20Of%20Asia!5e0!3m2!1sen!2sin!4v1717311499357!5m2!1sen!2sin"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
                <div className="contact-details">
                    <p>Phone: +1234567890</p>
                    <p>Email: contact@example.com</p>
                </div>
            </div>
        </>
    );
}

export default Contact;

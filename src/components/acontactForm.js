import { useState } from "react";

const ContactForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const [errors, setErrors] = useState({});

    const [buttonText, setButtonText] = useState("Enviar");

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailureMessage, setShowFailureMessage] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        let isValidForm = handleValidation();
    
        if (isValidForm) {
            setButtonText("Enviando...");
            const res = await fetch("/api/sendgrid", {
                body: JSON.stringify({
                email: email,
                name: name,
                subject: subject,
                message: message,
                }),
                headers: {
                "Content-Type": "application/json",
                },
                method: "POST",
            });
        
            const { error } = await res.json();
            if (error) {
                console.log(error);
                setShowSuccessMessage(false);
                setShowFailureMessage(true);
                setButtonText("Enviar");
                return;
            }
            setShowSuccessMessage(true);
            setShowFailureMessage(false);
            setButtonText("Enviar");
            // Reset form fields
            setFullname("");
            setEmail("");
            setMessage("");
            setSubject("");
        }
        console.log(name, email, subject, message);
    };

    const handleValidation = () => {
        let tempErrors = {};
        let isValid = true;

        if (name.length <= 0) {
            tempErrors["name"] = true;
            isValid = false;
        }
        if (email.length <= 0) {
            tempErrors["email"] = true;
            isValid = false;
        }
        if (subject.length <= 0) {
            tempErrors["subject"] = true;
            isValid = false;
        }
        if (message.length <= 0) {
            tempErrors["message"] = true;
            isValid = false;
        }

        setErrors({ ...tempErrors });
        console.log("errors", errors);
        return isValid;
    };

    return (
        <form method="post" className="contact-form" id="contactUs-Form" onSubmit={handleSubmit}>
                            
            <input type="text" name="name" className="box" id="name" placeholder="Nombre completo" value={name} onChange={(e) => setName(e.target.value)} />
            {errors?.name && (
                <p className="error">El nombre es obligatorio</p>
            )}
            <input type="email" name="email" className="box" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            {errors?.email && (
                <p className="error">El email es obligatorio</p>
            )}
            <input type="text" name="subject" className="box" id="subject" placeholder="Asunto" value={subject} onChange={(e) => setSubject(e.target.value)} />
            {errors?.subject && (
                <p className="error">El asunto es obligatorio</p>
            )}
            <textarea cols="30" rows="10" name="message" id="message" className="box" placeholder="Mensaje"  value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            {errors?.message && (
                <p className="error">El mensaje es obligatorio</p>
            )}

            <button type="submit" className="btn" name="submit" id="submit">{buttonText}</button>

            <span className="alert" id="msg">
                {showSuccessMessage && "¡Mensaje enviado!"}
                {showFailureMessage && "¡Error! No se ha podido enviar el mensaje."}
            </span>

        </form>
    );
};

export default ContactForm;
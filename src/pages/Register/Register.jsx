import Input from "../../components/InputComponent";
import "./Register.css";
import { useState } from "react";
import InputComponent from "../../components/InputComponent";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const autorizedUsers = [
        {
            email: "commitzen@glide.com.br",
            password: "123456",
        },
    ];
    
    const onEmailChange = (e) => {
        setEmail(e.target.value);
    };


    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const user = autorizedUsers.find(
            (user) => user.email == email && user.password == password 
        );
        
        
        if (!user) {
            alert("Usuário não autorizado.");
            console.log(user);
        } else {
            alert("Usuário autorizado.");
            console.log(user);
            e.target.reset();
        }
        
        
    };

return (
        <>
            <div className="container">
                <div className="header">
                    <h2>Entrar</h2>
                </div>
                <form id="form" className="form" onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                    
                        <InputComponent type="text" id="email" placeholder="Digite seu email..." onChange={onEmailChange}  />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Senha</label>
                        

                        <InputComponent type="password" id="password" placeholder="Digite sua senha..." onChange={onPasswordChange}  />
                    </div>
                    <div className="form-control">
                        <input type="submit" value="Enviar"/>

                    </div>
                </form>
            </div>
        </>
    );
};

export default Register;

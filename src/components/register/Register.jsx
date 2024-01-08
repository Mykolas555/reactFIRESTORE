import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth"
import { auth, registerWithEmailAndPassword } from "../../services/AuthServices"
 
const Register = () => {

    const navigate = useNavigate();

    const [registerInfo, setRegisterInfo] = useState({
        name: '',
        email: '',
        password: ''
    })

    const registerData = (e) => {
        const value = e.target.value
        setRegisterInfo({
            ...registerInfo,
            [e.target.name]:value,
        });
    };


    const submitHandler = (e) => {
        e.preventDefault();
        registerWithEmailAndPassword(
            registerInfo.name, 
            registerInfo.email, 
            registerInfo.password
            )
        console.log(registerInfo)
        alert('registracija pavyko')
    }

    const [user, loading, error] = useAuthState(auth);

    useEffect(()=> {
        if (loading) return;
        if (user) navigate('/works')
    },[user, loading])

    return(
        <>
            <h2 className="mt-3 text-center">registruokis</h2>
            <form onSubmit={submitHandler}>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="irasykite varda"
                    value={registerInfo.name} name="name" id="name" onChange={registerData}/>
                </div>
                <div className="mb-3">
                    <input type="email" className="form-control" placeholder="irasykyte email" 
                    value={registerInfo.email} name="email" id="email" onChange={registerData}/>
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" placeholder="irasykite slaptazodi" 
                    value={registerInfo.password} name="password" id="password" onChange={registerData}/>
                </div>
                <div className="mb-3">
                    <button  variant="primary" type="submit">Registruotis</button>
                </div>
                <div className="mb-3">
                    <p>turite paskyra? <Link to='/'>galite prisijungti</Link> </p>
                </div>
            </form>
        </>
    )
}

export default Register
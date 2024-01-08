import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth, signInWithEmailAndPassword } from "../../services/AuthServices"



const Login = () => {

    const navigate = useNavigate();

    const [info, setInfo] = ({
        name:'',
        password:''
    })

    const registerData = (e) => {
        const value = e.target.value
        setInfo({
            ...info,
            [e.target.name]:value,
        });
    };

    const [user, loading, error] =useAuthState(auth)

    const submitHandler = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(info.name, info.password)
    }

    useEffect(()=>{
        if(loading) return
        if(user) navigate('/works')
    }, [user, loading])

    return(
        <>
        <h2 className="mt-3 text-center">registruokis</h2>
            <form onSubmit={submitHandler}>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="irasykite varda"
                    value={info.name} name="name" id="name" onChange={registerData}/>
                </div>
                <div>
                    <input type="password" className="form-control" placeholder="irasykite slaptazodi" 
                    value={info.password} name="password" id="password" onChange={registerData}/>
                </div>
                <div className="mb-3">
                    <button  variant="primary" type="submit">prisijungti</button>

                </div>
                <p>returit paskyros? <Link to='/register'>registruokites</Link></p>

            </form>
        </>
    )
}

export default Login
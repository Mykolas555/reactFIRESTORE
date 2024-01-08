import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
//importuojam viska is service
import * as service from "../../services/TimesCrudServices"; 

const AddWork = () =>{
    const navigate = useNavigate();
    const { id } = useParams();

    //susikuriam kur saugosim info
    const [items, setItems] = useState({
        date:'',
        company:'',
        service:'',
        description:'',
        timeFrom:'',
        timeTo:'',
    })

    //updatinam jei spaudziam atnaujinti
    useEffect(()=>{
        id && service.showById(item=>setItems(item),id)
        console.log('iraso id', id)
    },[id])

    //dedam duomenis is inputu i state
    const putDataToState = (e) =>{
        const value = e.target.value
        setItems({
            ...items,
            [e.target.name]:value,
          });
        };

    //perduodam paspaude click duomenis i servisa/duomenu baze
    const submitHandler = (e) => {
        e.preventDefault();
        
        // ar visi laukeliai uzpildyti ziuri
        if (
            !items.date &&
            !items.company &&
            !items.service &&
            !items.description &&
            !items.timeFrom &&
            !items.timeTo
        ) {
            alert('Uzpildykite visus pateiktus laukelius');
            return; 
        }
    
        if (id) {
            service.updateWork(id, items);
            navigate('/');
        } else {
            service.addWork(items);
            navigate('/');
        }
    }
    
    //reik irasyt i return value, name ir t.t.
    return(
    <>
        <div className="card">
            <div className="card-header">
                <h2>Prideti atlikta darba</h2>
            </div>
            <div className="card-body">
                <form className="form" onSubmit={submitHandler}>
                    <div className="mb-3">
                        <label htmlFor="date">Pasirinkite data:</label>
                        <input value={items.date} onChange={putDataToState} type="date" id="date" name="date" className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <select value={items.company} onChange={putDataToState} name="company" id="company" className="form-control">
                            <option value="kb">Kilobaitas</option>
                            <option value="it">It sfera</option>
                        </select>
                    </div>
                    <div className="mb-3">
                    <select value={items.service} onChange={putDataToState} name="service" id="service" className="form-control">
                            <option value="dev">Development</option>
                            <option value="ux">UX design</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <textarea onChange={putDataToState} value={items.description} name="description" id="description" className="form-control" placeholder="Darbo aprasymas">
                
                        </textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="timeFrom">Nuo:</label>
                        <input type="time" onChange={putDataToState} value={items.from} id="timeFrom" name="timeFrom"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="timeTo">Iki:</label>
                        <input type="time" onChange={putDataToState} value={items.to} id="timeTo" name="timeTo"/>
                    </div>
                    <div className="mb-3">
                        { (id) ?
                        <button variant="primary"type="submit" >Atnaujinti</button>:
                        <button variant="primary" type="submit">Saugoti</button>
                        }
                    </div>
                </form>
            </div>
        </div>
    </>
    )
}

export default AddWork;
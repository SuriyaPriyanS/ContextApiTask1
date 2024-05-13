import React, { useContext } from 'react';
import { mycontext } from '../../App';

const Card = () => {
    const [data, setData] = useContext(mycontext)
    const totalprices = data.reduce((total,data)=>total+data.price*(data.quantity || 1),0);
    const totalQuantity = data.reduce((total,data)=>total+(data.quantity || 1),0);
    const handleInc =(id,quantity)=>{
        setData((curry)=>{
            return curry.map((element)=>{
                if(element.id===id){
                    return{...element,Quantity:(element.quantity+1 || quantity+1)}
                }
                return element
            })
        })

    }
    const handleDec =(id,quantity)=>{
        setData((curry)=>{
            return curry.map((element)=>{
                if(element.id===id && quantity>0){
                    return{...element,Quantity:(element.quantity-1 || quantity-1)}
                }
                return element
            })
        })

    }
    const handleRemove = (id) => {
        setData((curry) => curry.filter((element) => element.id !== id));
    };
    
    return (
        <div className='cardContainer text-center '>
            <h1>Card Page</h1>
            
            {data.map((element,index)=>{
            return(
                <div className='cardItem ' key={index}>
                    <h1>{element.id}</h1>
                    <h1>{element.title}</h1>
                    <h1>{element.descripation}</h1>
                    <h5>{element.category}</h5>
                    {element.images.map((ele,i)=>{
                        return(
                            <div className='cardItem img text-lg-start'  key={i}>
                                <img  src={ele} />
                                <div id="list-example" className="list-group">
                                <a class="list-group-item list-group-item-action" href="#list-item-1">Deites& care</a>
                                </div>

                            </div>
                        )
                    })}
                    <div className='f1 text-end '>
                    <button className='buttonGroup' onClick={()=>handleInc(element.id,element.quantity || 1)}>+</button>
                    <button  onClick={()=>handleDec(element.id,element.quantity || 1)}>-</button>
                    <button className='button1 text-lg-end ' onClick={() => handleRemove(element.id)}>  Remove</button>
                    </div>
                    <div>
                    <h1>Card Page</h1>
            <h1>Total Quantity{totalQuantity}</h1>
            <h1 className='d1 text-lg-end '>FREE</h1>
            <h1 className='d2 text-lg-end '>Total Price:{totalprices}</h1>
            <h6 className='dm text-lg-end '>Get Daily Cash with Nespola Card</h6>
            </div>
                </div>
            )
            })}
        </div>
    );
};

export default Card;
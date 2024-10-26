import React, { useState } from "react";
import { Button } from 'react-bootstrap';

const Contador = () => {
    const [contagem, setContagem] = useState(0);

    const incrementar = () => {
        setContagem(contagem + 1);
    };

    const decrementar = () => {
        setContagem(contagem - 1);
    };

    return (
        <div>
            <Button onClick={decrementar}>Decrementar</Button>
            <span style={{ margin: '0 10px' }}>{contagem}</span>
            <Button onClick={incrementar}>Incrementar</Button>
        </div>
    )
}



export default Contador;
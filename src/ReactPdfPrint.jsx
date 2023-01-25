import React, { useRef } from 'react'
import {useReactToPrint} from 'react-to-print'

export const ReactPdfPrint = () => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'emp-data',
        onAfterPrint: () =>alert('Printed')
    }) 

    return (
        <>
            <div
                // style={{ width: '100%', height: window.innerHeight }}
                ref={componentRef}
            >   
                <h6>Employee data</h6>
                <p>-------------</p>
            </div>
            <button
                // style={{width: '300px', height: '50px', backgroundColor:'blue', color: 'white'}}
                onClick={handlePrint}
            > Print this out</button>
        </>
    )
}

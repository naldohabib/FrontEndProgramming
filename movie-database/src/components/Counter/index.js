import { useEffect, useState } from "react";

export default function Counter(){
    const [angka, setAngka] = useState(0);

    function addAngka(){
        setAngka(angka + 1);
    }

    function updateDOM(){
        console.log("Lifecycle: dimount");
        document.title = `Hasil: ${angka}`;
    }

    useEffect(updateDOM, [angka]);
    console.log("Lifecycle: dirender");


    return(
        <>
            <p>Hasil={angka}</p>
            <button onClick={addAngka}>Add</button>
        </>
    );
}
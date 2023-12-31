// Get own attacks
export async function attackPlayer(token, id){
    try {
        const res = await  fetch("https://balandrau.salle.url.edu/i3/players/" + id + "/attacks", {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Bearer": token,
            },
        })
        
        // En cas de que no sigui correcte, llança error
        if (!res.ok) {   
            const error = await res.json();
            throw new Error(`${error.error.message}`); // Envia codi d'error i missatge
        } 
        const data = await res.json();
        return data;
    } catch(error) {
        // Seteja missatge d'error a mostrar
        throw new Error(`${error.message}`);
    };  
}

export async function getBuyableAttacks(token) {
    try {
        const res = await  fetch("https://balandrau.salle.url.edu/i3/shop/attacks", {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Bearer": token,
            },
        })
        
        // En cas de que no sigui correcte, llança error
        if (!res.ok) {   
            const error = await res.json();
            throw new Error(`${error.error.message}`); // Envia codi d'error i missatge
        } 
        const data = await res.json();
        return data;
    } catch(error) {
        // Seteja missatge d'error a mostrar
        throw new Error(`${error.message}`);
    }; 
}
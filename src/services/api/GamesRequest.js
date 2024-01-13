export async function getFinishedGames(token, id){
    try {
        const res = await  fetch("https://balandrau.salle.url.edu/i3/players/" + id + "/games/finished", {
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

export async function getMatchLogRequest(token, id){ 
    try {
        const res = await  fetch("https://balandrau.salle.url.edu/i3/arenas/" + id + "/logs", {
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

export async function getAllMatchesRequest(token){
    try {
        const res = await  fetch("https://balandrau.salle.url.edu/i3/arenas", {
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


// Create Game Request
export async function createGameRequest(token, game_ID, size, HP_max){
    try {
        const res = await  fetch("https://balandrau.salle.url.edu/i3/arenas", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Bearer": token,
            },
            body: JSON.stringify({
                game_ID: game_ID,
                size: size,
                HP_max: HP_max,
            }),
        })
        
        // En cas de que no sigui correcte, llança error
        if (!res.ok) {   
            const error = await res.json();
            throw new Error(`${error.error.message}`); // Envia codi d'error i missatge
        } 
       
    } catch(error) {
        // Seteja missatge d'error a mostrar
        throw new Error(`${error.message}`);
    };  
}

// Get All Games Request
export async function getGames(token){
    try {
        const res = await  fetch("https://balandrau.salle.url.edu/i3/arenas", {
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


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

export async function enterGame(token, id){ 
    try {
        const res = await  fetch("https://balandrau.salle.url.edu/i3/arenas/" + id + "/play", {
            method: "POST",
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

// Get CURRENT Game Request
export async function getCurrentGameRequest(token){
    try {
        const res = await  fetch("https://balandrau.salle.url.edu/i3/players/arenas/current", {
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

// Change Actual direction Request
export async function changeDirectionRequest(token, direction){
    try {
        const res = await  fetch("https://balandrau.salle.url.edu/i3/arenas/direction", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Bearer": token,
            },
            body: JSON.stringify({
                direction: direction,
            }),
        })
        
        // En cas de que no sigui correcte, llança error
        if (!res.ok) {   
            const error = await res.json();
            throw new Error(`${error.error.message}`); // Envia codi d'error i missatge
        } 

        try {
            await res.json();
        } catch(error) {
            return;
        }
    } catch(error) {
        // Seteja missatge d'error a mostrar
        throw new Error(`${error.message}`);
    };  
}

// Change Actual position Request
export async function changeMovementRequest(token, movement){
    try {
        const res = await  fetch("https://balandrau.salle.url.edu/i3/arenas/move", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Bearer": token,
            },
            body: JSON.stringify({
                movement: movement,
            }),
        })
        
        // En cas de que no sigui correcte, llança error
        if (!res.ok) {   
            const error = await res.json();
            throw new Error(`${error.error.message}`); // Envia codi d'error i missatge
        } 

        try {
            await res.json();
        } catch(error) {
            return;
        }
    } catch(error) {
        // Seteja missatge d'error a mostrar
        throw new Error(`${error.message}`);
    };  
}

// Change Actual position Request
export async function leaveGame(token, id){
    try {
        const res = await  fetch("https://balandrau.salle.url.edu/i3/arenas/" + id + "/play", {
            method: "DELETE",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Bearer": token,
            },
            body: JSON.stringify({
                id: id,
            }),
        })
        
        // En cas de que no sigui correcte, llança error
        if (!res.ok) {   
            const error = await res.json();
            throw new Error(`${error.error.message}`); // Envia codi d'error i missatge
        } 

        try {
            await res.json();
        } catch(error) {
            return;
        }
    } catch(error) {
        // Seteja missatge d'error a mostrar
        throw new Error(`${error.message}`);
    };  
}

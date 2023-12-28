// Login Request
export async function loginRequest(player_ID, password){
    try {
        const res = await  fetch("https://balandrau.salle.url.edu/i3/players/join", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                player_ID: player_ID,
                password: password,
            }),
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

// Create Player Request
export async function createPlayerRequest(player_ID, password, img){
    try {
        const res = await  fetch("https://balandrau.salle.url.edu/i3/players", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                player_ID: player_ID,
                password: password,
                img: img,
            }),
        })
        
        // En cas de que no sigui correcte, llança error
        if (!res.ok) {   
            const error = await res.json();
            throw new Error(`${error.error.message}`); // Envia codi d'error i missatge
        } 
        const loginData = await loginRequest(player_ID, password); // Crida a loginRequest per a obtenir les dades del jugador
        return loginData;
    } catch(error) {
        // Seteja missatge d'error a mostrar
        throw new Error(`${error.message}`);
    };  
}

// Delete Player Request
export async function deletePlayerRequest(token){
    try {
        const res = await  fetch("https://balandrau.salle.url.edu/i3/players", {
            method: "DELETE",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Bearer": token,
            },
        })
            
        // En cas de que no sigui correcte, llança error
        if (!res.ok) {   
            console.log(res);
            const error = await res.json();
            throw new Error(`${error.error.message}`); // Envia codi d'error i missatge
        } 
        console.log(res);
    } catch(error) {
        // Seteja missatge d'error a mostrar
        throw new Error(`${error.message}`);
    };  
}
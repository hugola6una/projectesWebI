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

// Get buyable attacks
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

export async function buyAttack(token, id) {
    try {
        const res = await  fetch("https://balandrau.salle.url.edu/i3/shop/attacks/" + id + "/buy", {
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

export async function sellAttack(token, id, price) {
    try {
        const res = await  fetch("https://balandrau.salle.url.edu/i3/shop/attacks/" + id + "/sell", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Bearer": token,
            },
            body: JSON.stringify({
                price: price,
            }),
        })
        
        // En cas de que no sigui correcte, llança error
        if (!res.ok) {   
            const error = await res.json();
            throw new Error(`${error.error.message}`); // Envia codi d'error i missatge
        } 
        try {   
            await res.json();
        } catch (error) {
            return;
        }
    } catch(error) {
        // Seteja missatge d'error a mostrar
        throw new Error(`${error.message}`);
    }; 


}

export async function getOwnAttacks(token) {
    try {
        const res = await  fetch("https://balandrau.salle.url.edu/i3/players/attacks", {
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

// Create attack
export async function createAttackRequest(token, attack) { 
    try {
        const res = await  fetch("https://balandrau.salle.url.edu/i3/shop/attacks", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Bearer": token,
            },
            body: JSON.stringify({
                attack_ID: attack.attack_ID,
                positions: attack.positions,
                img: attack.img,
            }),
        })
        
        // En cas de que no sigui correcte, llança error
        if (!res.ok) {   
            const error = await res.json();
            throw new Error(`${error.error.message}`); // Envia codi d'error i missatge
        } 
        try {
            await res.json();
        } catch (error) {
            return;
        }
    } catch(error) {
        // Seteja missatge d'error a mostrar
        throw new Error(`${error.message}`);
    };  
}

// Equipe attack Request
export async function equipAttackRequest(token, attack_ID) { 
    try {
        const res = await  fetch("https://balandrau.salle.url.edu/i3/players/attacks/" + attack_ID, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Bearer": token,
            },
            body: JSON.stringify({
                attack_ID: attack_ID,
            }),
        })
        
        // En cas de que no sigui correcte, llança error
        if (!res.ok) {   
            const error = await res.json();
            throw new Error(`${error.error.message}`); // Envia codi d'error i missatge
        } 
        try {
            await res.json();
        } catch (error) {
            return;
        }
    } catch(error) {
        // Seteja missatge d'error a mostrar
        throw new Error(`${error.message}`);
    };  
}

// unEquipe attack Request
export async function unEquipAttackRequest(token, attack_ID) { 
    try {
        const res = await  fetch("https://balandrau.salle.url.edu/i3/players/attacks/" + attack_ID, {
            method: "DELETE",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Bearer": token,
            },
            body: JSON.stringify({
                attack_ID: attack_ID,
            }),
        })
        
        // En cas de que no sigui correcte, llança error
        if (!res.ok) {   
            const error = await res.json();
            throw new Error(`${error.error.message}`); // Envia codi d'error i missatge
        } 
        try {
            await res.json();
        } catch (error) {
            return;
        }
    } catch(error) {
        // Seteja missatge d'error a mostrar
        throw new Error(`${error.message}`);
    };  
}
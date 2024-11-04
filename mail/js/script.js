const authorizedEmails = [
    'user1@example.com',
    'user2@example.com',
    'user3@example.com',
    'user4@example.com'
  ]; // Lista di email autorizzate
  
  // Chiedi all'utente di inserire la sua email
  const userEmail = prompt("Inserisci la tua email:");
  
  // Variabile per tenere traccia se l'email è autorizzata
  let isAuthorized = false;
  
  // Controlla se l'email è nella lista autorizzata senza usare includes
  for (let i = 0; i < authorizedEmails.length; i++) {
    if (authorizedEmails[i] === userEmail) {
      isAuthorized = true;
      break; // Esci dal ciclo se l'email è trovata
    }
  }
  
  // Stampa un messaggio appropriato
  if (isAuthorized) {
    console.log("Accesso consentito!");
  } else {
    console.log("Accesso negato. Email non autorizzata.");
  }
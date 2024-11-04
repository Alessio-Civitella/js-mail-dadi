Questo progetto verifica se un'email inserita dall'utente è autorizzata ad accedere a un sistema, confrontandola con un elenco di email autorizzate.

FUNZIONAMENTO

Le email autorizzate sono memorizzate in un array.
L'utente inserisce la sua email tramite `prompt`.
Un ciclo `for` controlla se l'email è presente nella lista. Se trovata, l'accesso è consentito.
Viene stampato un messaggio che indica se l'accesso è consentito o negato.

ESEMPIO

Email autorizzata: `user1@example.com` → "Accesso consentito!"
Email non autorizzata: `unknown@example.com` → "Accesso negato."

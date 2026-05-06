function loadScript(file) {
    // remove script antigo se existir
    const oldScript = document.getElementById('dynamic-script');
    if (oldScript) {
        oldScript.remove();
    }

    // cria novo script
    const script = document.createElement('script');
    script.src = file;
    script.id = 'dynamic-script';

    document.body.appendChild(script);
}

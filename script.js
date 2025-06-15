document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');

    const translations = {
        'siang hari': 'daytime',
        'sore hari': 'afternoon',
        'malam hari': 'night time',
        'matahari terbit': 'sunrise',
        'matahari terbenam': 'sunset',
        'golden hour': 'golden hour',
        'blue hour': 'blue hour',
        'sinematik': 'cinematic',
        'dramatis': 'dramatic',
        'lembut': 'soft',
        'terang': 'bright',
        'gelap': 'dark',
        'neon': 'neon',
        'alami': 'natural',
        'realistis': 'realistic',
        'surealis': 'surreal',
        'animasi': 'animation',
        'hitam putih': 'black and white',
        'vintage': 'vintage',
        'fantasi': 'fantasy',
        'fiksi ilmiah': 'science fiction',
        'ceria': 'cheerful',
        'sedih': 'sad',
        'misterius': 'mysterious',
        'menegangkan': 'tense',
        'romantis': 'romantic',
        'epik': 'epic',
        'tenang': 'calm'
    };

    generateBtn.addEventListener('click', () => {
        // Get all values
        const subjek = document.getElementById('subjek').value.trim();
        const aksi = document.getElementById('aksi').value.trim();
        const ekspresi = document.getElementById('ekspresi').value.trim();
        const tempat = document.getElementById('tempat').value.trim();
        const waktu = document.getElementById('waktu').value;
        const gerakanKamera = document.getElementById('gerakan-kamera').value;
        const pencahayaan = document.getElementById('pencahayaan').value;
        const gayaVideo = document.getElementById('gaya-video').value;
        const suasanaVideo = document.getElementById('suasana-video').value;
        const suara = document.getElementById('suara').value.trim();
        const kalimat = document.getElementById('kalimat').value.trim();
        const detail = document.getElementById('detail').value.trim();

        // --- Generate Indonesian Prompt ---
        let promptID = `Sebuah video ${gayaVideo} dengan suasana ${suasanaVideo}.`;
        promptID += ` Tampilkan ${subjek} yang sedang ${aksi}`;
        if (ekspresi) promptID += ` ${ekspresi}`;
        if (tempat) promptID += ` ${tempat}`;
        promptID += `. Video diambil pada ${waktu} dengan pencahayaan ${pencahayaan}.`;
        if (gerakanKamera) promptID += ` Gunakan gerakan kamera ${gerakanKamera}.`;
        if (detail) promptID += ` Detail tambahan: ${detail}.`;
        if (suara) promptID += ` Terdengar suara ${suara}.`;
        if (kalimat) promptID += ` Sebuah suara mengucapkan: "${kalimat}".`;
        
        document.getElementById('output-id').value = promptID;

        // --- Generate English Prompt ---
        let promptEN = `A ${translations[gayaVideo]} video with a ${translations[suasanaVideo]} mood.`;
        promptEN += ` Show ${subjek} ${aksi}`;
        if (ekspresi) promptEN += ` ${ekspresi}`;
        if (tempat) promptEN += ` ${tempat}`;
        promptEN += `. The video is shot during ${translations[waktu]} with ${translations[pencahayaan]} lighting.`;
        if (gerakanKamera) promptEN += ` Use a ${gerakanKamera} camera movement.`;
        if (detail) promptEN += ` Additional details: ${detail}.`;
        if (suara) promptEN += ` The sound of ${suara} is heard.`;
        if (kalimat) promptEN += ` A voice says: "${kalimat}".`;

        document.getElementById('output-en').value = promptEN;
    });
}); 
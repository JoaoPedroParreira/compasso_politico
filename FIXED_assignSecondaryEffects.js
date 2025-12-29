// INSTRUÇÕES: Substitui a função assignSecondaryEffects() no script.js (linhas 323-368) com este código

function assignSecondaryEffects() {
    console.log("=== ASSIGNING SECONDARY EFFECTS (Religion Axes) ===");
    secondaryEffectsMap = {};
    const taggedQuestions = { rel_state: [], rel_pers: [] };

    // Explicit mapping of known religion questions
    const knownReligionQuestions = {
        'extra_263': [{ axis: 'rel_pers', weight: -1 }], // "Religião faz mal" = Secular
        'extra_264': [{ axis: 'rel_state', weight: -1 }], // "Símbolos banidos" = Laicism
        'pt_323': [{ axis: 'rel_state', weight: -1 }]     // "Estado gasta em eventos" = Laicism
    };

    // First, add explicitly known questions
    Object.keys(knownReligionQuestions).forEach(qid => {
        secondaryEffectsMap[qid] = knownReligionQuestions[qid];
        knownReligionQuestions[qid].forEach(eff => {
            if (eff.axis === 'rel_state') taggedQuestions.rel_state.push({ id: qid, explicit: true });
            if (eff.axis === 'rel_pers') taggedQuestions.rel_pers.push({ id: qid, explicit: true });
        });
    });

    // Then scan all questions for keywords
    questionsData.forEach(q => {
        if (!q.langs || knownReligionQuestions[q.id]) return; // Skip if already mapped

        const ptText = q.pt ? q.pt.toLowerCase() : "";
        const enText = q.en ? q.en.toLowerCase() : "";
        let effectsToAdd = [];

        // Enhanced Keywords for Religion Detection
        const religionKeywords = ["religi", "igreja", "sagrado", "deus", "divino", "fé", "clero",
            "padre", "pastor", "mesquita", "templo", "oração", "bíblia",
            "cristão", "islã", "budis", "ateu", "agnóstico", "church",
            "sacred", "god", "divine", "faith", "clergy", "priest",
            "mosque", "temple", "prayer", "bible", "christian", "islam",
            "buddh", "atheist", "agnostic"];

        const hasReligiousKeyword = religionKeywords.some(kw => ptText.includes(kw) || enText.includes(kw));

        if (hasReligiousKeyword) {
            // === AXIS 1: Laicismo (State Secularism) vs Teocracia (Theocracy) ===
            const stateKeywords = ["estado", "leis", "governo", "públic", "escola", "oficial",
                "constituição", "política", "state", "law", "gov", "public",
                "school", "official", "constitution", "politic"];

            const isStateIssue = stateKeywords.some(kw => ptText.includes(kw) || enText.includes(kw));

            if (isStateIssue) {
                let wS = 0;

                // Laicism indicators (negative weight)
                const laicismWords = ["separação", "separar", "banir", "proibir", "remover",
                    "neutral", "laic", "não deve", "sem religi", "gasta",
                    "financ", "imposto", "separation", "ban", "remove",
                    "secular", "spend"];
                // Theocracy indicators (positive weight)
                const theocracyWords = ["basear", "fundar", "apoiar", "defender", "oficial",
                    "promover", "valores cristãos", "valores religiosos",
                    "bíblia", "sagrado", "divino", "based on", "support",
                    "promote", "religious values"];

                if (laicismWords.some(w => ptText.includes(w) || enText.includes(w))) {
                    wS = -1;
                } else if (theocracyWords.some(w => ptText.includes(w) || enText.includes(w))) {
                    wS = 1;
                }

                if (wS !== 0) {
                    effectsToAdd.push({ axis: 'rel_state', weight: wS });
                    taggedQuestions.rel_state.push({ id: q.id, text: q.pt.substring(0, 50) + "...", weight: wS });
                }
            }

            // === AXIS 2: Secularismo (Personal Irreligion) vs Religiosidade (Personal Faith) ===
            let wP = 0;

            // Secularism indicators (negative weight)
            const secularismWords = ["mal", "prejudic", "obsoleto", "ultrapassad", "ilusão",
                "fantasia", "superstição", "ateu", "não exist", "falso",
                "mentira", "opiáceo", "manipul", "harm", "obsolete",
                "illusion", "superstition", "atheist", "false"];
            // Religiosity indicators (positive weight)  
            const religiosityWords = ["importante", "essencial", "fundamental", "guia", "verdade",
                "moral", "ética", "conforto", "esperança", "espiritual",
                "fé", "crença", "salvação", "important", "essential",
                "guide", "truth", "moral", "comfort", "hope", "spiritual",
                "faith", "belief", "salvation"];

            if (secularismWords.some(w => ptText.includes(w) || enText.includes(w))) {
                wP = -1;
            } else if (religiosityWords.some(w => ptText.includes(w) || enText.includes(w))) {
                wP = 1;
            }

            if (wP !== 0) {
                effectsToAdd.push({ axis: 'rel_pers', weight: wP });
                taggedQuestions.rel_pers.push({ id: q.id, text: q.pt.substring(0, 50) + "...", weight: wP });
            }
        }

        if (effectsToAdd.length > 0) {
            secondaryEffectsMap[q.id] = effectsToAdd;
        }
    });

    // Detailed logging
    console.log(`✓ Total questions scanned: ${questionsData.length}`);
    console.log(`✓ Questions tagged with secondary effects: ${Object.keys(secondaryEffectsMap).length}`);
    console.log(`\n--- AXIS: rel_state (Laicismo | Teocracia) ---`);
    console.log(`  Tagged questions: ${taggedQuestions.rel_state.length}`);
    if (taggedQuestions.rel_state.length > 0) {
        console.log(`  Sample:`, taggedQuestions.rel_state.slice(0, 5));
    }
    console.log(`\n--- AXIS: rel_pers (Secularismo | Religiosidade) ---`);
    console.log(`  Tagged questions: ${taggedQuestions.rel_pers.length}`);
    if (taggedQuestions.rel_pers.length > 0) {
        console.log(`  Sample:`, taggedQuestions.rel_pers.slice(0, 5));
    }
    console.log("=== END SECONDARY EFFECTS ===\n");
}

function assignSecondaryEffects() {
    console.log("=== ASSIGNING SECONDARY EFFECTS (Religion Axes) ===");
    secondaryEffectsMap = {};
    const taggedQuestions = { rel_state: [], rel_pers: [] };

    questionsData.forEach(q => {
        if (!q.langs) return;

        const ptText = q.pt ? q.pt.toLowerCase() : "";
        const enText = q.en ? q.en.toLowerCase() : "";
        let effectsToAdd = [];

        // Enhanced Keywords for Religion Detection
        const religionKeywords = {
            pt: ["religi", "igreja", "sagrado", "deus", "divino", "fé", "clero", "padre", "pastor",
                "mesquita", "templo", "oração", "bíblia", "cristão", "islã", "budis", "ateu", "agnóstico"],
            en: ["religi", "church", "sacred", "god", "divine", "faith", "clergy", "priest", "pastor",
                "mosque", "temple", "prayer", "bible", "christian", "islam", "buddh", "atheist", "agnostic"]
        };

        const hasReligiousKeyword = religionKeywords.pt.some(kw => ptText.includes(kw)) ||
            religionKeywords.en.some(kw => enText.includes(kw));

        if (hasReligiousKeyword) {
            // === AXIS 1: Laicismo (State Secularism) vs Teocracia (Theocracy) ===
            const stateKeywords = {
                pt: ["estado", "leis", "governo", "públic", "escola", "oficial", "constituição", "política"],
                en: ["state", "law", "gov", "public", "school", "official", "constitution", "politic"]
            };

            const isStateIssue = stateKeywords.pt.some(kw => ptText.includes(kw)) ||
                stateKeywords.en.some(kw => enText.includes(kw));

            if (isStateIssue) {
                let wS = 0;

                // Laicism indicators (negative weight)
                const laicismWords = ["separação", "separar", "banir", "proibir", "remover", "neutral",
                    "laic", "não deve", "sem religi", "gasta", "financ", "imposto"];
                // Theocracy indicators (positive weight)
                const theocracyWords = ["basear", "fundar", "apoiar", "defender", "oficial", "promover",
                    "valores cristãos", "valores religiosos", "bíblia", "sagrado", "divino"];

                if (laicismWords.some(w => ptText.includes(w))) {
                    wS = -1;
                } else if (theocracyWords.some(w => ptText.includes(w))) {
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
            const secularismWords = ["mal", "prejudic", "obsoleto", "ultrapassad", "ilusão", "fantasia",
                "superstição", "ate", "não exist", "falso", "mentira", "opiáceo", "manipul"];
            // Religiosity indicators (positive weight)  
            const religiosityWords = ["importante", "essencial", "fundamental", "guia", "verdade", "moral",
                "ética", "conforto", "esperança", "espiritual", "fé", "crença", "salvação"];

            if (secularismWords.some(w => ptText.includes(w))) {
                wP = -1;
            } else if (religiosityWords.some(w => ptText.includes(w))) {
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
        console.log(`  Sample:`, taggedQuestions.rel_state.slice(0, 3));
    }
    console.log(`\n--- AXIS: rel_pers (Secularismo | Religiosidade) ---`);
    console.log(`  Tagged questions: ${taggedQuestions.rel_pers.length}`);
    if (taggedQuestions.rel_pers.length > 0) {
        console.log(`  Sample:`, taggedQuestions.rel_pers.slice(0, 3));
    }
    console.log("=== END SECONDARY EFFECTS ===\n");
}

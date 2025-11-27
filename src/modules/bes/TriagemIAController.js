export class TriagemIAController {

    analisarSintomas(textoSintomas) {
        
        const respostaIA = "Sugestão: Clínico Geral";
        
        
        const aviso = "ATENÇÃO: Este resultado é uma triagem automática e não substitui um médico.";

        return {
            analise: respostaIA,
            avisoLegal: aviso
        };
    }
}

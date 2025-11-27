export class ProntuarioController {

    registrarAtendimento(idConsulta, diagnostico, prescricao) {
        const dataRegistro = new Date().toISOString();
        
        console.log(`Salvando diagnóstico: ${diagnostico}`);
        
        return {
            mensagem: "Prontuário salvo com sucesso.",
            receitaGerada: true,
            data: dataRegistro
        };
    }
}

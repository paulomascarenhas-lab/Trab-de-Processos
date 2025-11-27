import { Consulta } from '../../models/Consulta.js';

export class AgendamentoController {
    
    agendar(dadosConsulta) {
        const novaConsulta = new Consulta(dadosConsulta);
        
        if (novaConsulta.dataHora === 'ocupado') {
            return "Erro: Horário indisponível.";
        }

        return `Sucesso: Consulta agendada para ${novaConsulta.dataHora}`;
    }
}

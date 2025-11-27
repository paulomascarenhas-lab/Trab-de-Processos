export class HistoricoController {

    buscarHistorico(idPaciente) {
  
        const historico = [
            { data: "2025-10-10", medico: "Dr. Silva", status: "REALIZADA" },
            { data: "2025-09-05", medico: "Dra. Silva", status: "FINALIZADA" }
        ];

        return historico;
    }
}

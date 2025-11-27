export class NotificacaoController {

    enviar(idUsuario, tipoMensagem) {
        if (tipoMensagem === 'LEMBRETE') {
            return `Lembrete de consulta enviado para o usuário ${idUsuario}.`;
        } else if (tipoMensagem === 'CONFIRMACAO') {
            return `Confirmação de agendamento enviada.`;
        }
        return "Tipo de mensagem desconhecido.";
    }
}

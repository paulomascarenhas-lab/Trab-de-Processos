export class PagamentoController {

    processar(pagamento) {
        if (pagamento.valor <= 0) {
            return "Erro: Valor inválido.";
        }

        return `Pagamento de R$ ${pagamento.valor} aprovado via ${pagamento.metodo}.`;
    }
}

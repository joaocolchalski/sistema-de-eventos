import { format, parse } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface FunctionProps {
    data_inicio: string;
    data_fim: string;
}

export function intervalDateString({ data_inicio, data_fim }: FunctionProps) {
    const dataInicio = data_inicio;
    const dataFim = data_fim;

    const inicio = parse(dataInicio, 'dd/MM/yyyy', new Date());
    const fim = parse(dataFim, 'dd/MM/yyyy', new Date());

    const diaInicio = format(inicio, 'dd');
    const diaFim = format(fim, 'dd');
    const mesInicio = format(inicio, 'MMMM', { locale: ptBR });
    const mesFim = format(fim, 'MMMM', { locale: ptBR });

    if (mesInicio === mesFim) {
        const resultado = `${diaInicio} a ${diaFim} de ${mesFim}`;

        return resultado;
    } else {
        const resultado = `${diaInicio} de ${mesInicio} a ${diaFim} de ${mesFim}`;

        return resultado;
    }
}

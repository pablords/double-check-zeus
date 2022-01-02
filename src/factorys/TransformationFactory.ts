import XLSX from 'xlsx'
import path from 'path'
import knex from 'knex'
import { handleFormatDate, handleFormatDateFile } from '../utils/formatDate'
import { Atividade } from '../models/AtividadeModel'




export class TransformationFactory {
    async handleGetDataFromExcel() {
        const date = new Date()
        const dateFile = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
        const filePath = path.resolve(`./base/Atividades-Regional Sudeste_${handleFormatDateFile(dateFile)}.xlsx`);
        const workbook = XLSX.readFile(filePath);
        const sheet_name_list = workbook.SheetNames;
        return XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]])
    }



    async handleFormatData(resultReadData) {

        for (const row of resultReadData) {

            const status = row['Status']

            if (status != 'Cancelada' && status != 'Suspensa') {
                const dataFormat: Atividade = {
                    armario: row['ID de Armário'],
                    bairro: row['bairro'],
                    categoria_cliente: row['Categoria de Cliente'],
                    cidade: row['cidade'],
                    comeco_janela_portabilidade: row['Começo Janela de Portabilidade'],
                    completamento_1: row['Razão completamento 1'],
                    contador_repetido: row['Contador Defeito Repetido'],
                    contexto_pendencia: row['Contexto da Pendência'],
                    data_agendada_execucao: handleFormatDate(row['Data Agendada para Execução'], 'yyyy-MM-dd'),
                    data_venda: row['Data de Venda'],
                    designador: row['Designador'],
                    detalhe_atividade: row['Detalhe da Atividade'],
                    estado: row['Estado'],
                    fim_janela_portabilidade: row['Fim Janela de Portabilidade'],
                    flag_portabilidade: row['Flag de Portabilidade'],
                    flag_recente: row['Flag Defeito Recente'],
                    id_tecnico: row['ID do Técnico'],
                    latitude: row['Latitude'],
                    longitude: row['Longitude'],
                    motivo_cancelamento: row['Motivo de Cancelamento.'],
                    motivo_pendencia: row['Motivo da Pendência'],
                    nome_tecnico_repetido: row['Nome Técnico TT Repetido'],
                    pon: row['PON'],
                    recurso: row['Recurso'],
                    segmento: row['Segmento de Cliente'],
                    status: row['Status'],
                    tecnologia_acesso: row['Tecnologia do Acesso'],
                    tipo_atividade: row['Tipo de Atividade'],
                    tipo_prioridade: row['Tipo de Prioridade']
                }
                //const res = await knex('atividades').insert(dataFormat)
                return dataFormat

            }

        }




    }

}
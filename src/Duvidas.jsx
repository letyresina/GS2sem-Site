import {} from 'react'
import './App.scss'


function Duvidas(){
    return(
        <>
            <section className='conteudoDuvidas'>
                <main>
                    <h1>Algumas das nossas dúvidas mais frequentes!</h1>
                    <center>
                        <div className='duvidasFrequentes'>
                            <input type='checkbox' id='pergunta1'/>
                            <label for='pergunta1'>
                                <h2>Como posso marcar uma consulta usando a Julia para pacientes?</h2>
                            </label>
                            <div className='resposta'>
                                <p>
                                    Para marcar uma consulta, basta acessar a interface do paciente na Julia, 
                                    onde você encontrará a opção de agendamento. Selecione a especialidade 
                                    desejada, escolha o médico, a data e o horário conveniente para você. 
                                    A Julia irá confirmar a consulta e enviará lembretes para garantir que você 
                                    não perca o compromisso.
                                </p>
                            </div>
                        </div>
        
                        <div className='duvidasFrequentes'>
                            <input type='checkbox' id='pergunta2'/>
                            <label for='pergunta2'>
                                <h2>Como a Julia pode facilitar o diagnóstico para profissionais de saúde?</h2>
                            </label>
                            <div className='resposta'>
                                <p>
                                A Julia auxilia os profissionais de saúde analisando exames e fornecendo análises
                                a partir dos valores de referência. Caso haja alguma alteração significativa, a 
                                IA emitirá alertas, sugerindo ações apropriadas. Além disso, os profissionais 
                                podem usar a plataforma como pacientes e, se vinculados a convênios parceiros, a 
                                entrega eficiente de informações entre médico e paciente é facilitada.
                                Os usuários podem relatar sintomas, e a Julia alertará sobre possíveis riscos de 
                                infecções na região com base em sintomas repetidos.
                                </p>
                            </div>
                        </div>

                        <div className='duvidasFrequentes'>
                            <input type='checkbox' id='pergunta3'/>
                            <label for='pergunta3'>
                                <h2>Como a Julia incentiva a saúde mental para todos?</h2>
                            </label>
                            <div className='resposta'>
                                <p>
                                A Julia oferece recursos para saúde mental, conectando usuários a profissionais 
                                como psicólogos e psiquiatras. Informações sobre serviços sociais mais acessíveis
                                também estão disponíveis. Além disso, a plataforma fornece orientações sobre 
                                saúde, abordando a importância e tirando dúvidas.
                                </p>
                            </div>
                        </div>

                        <div className='duvidasFrequentes'>
                            <input type='checkbox' id='pergunta4'/>
                            <label for='pergunta4'>
                                <h2>Como o ESP32 monitora os pacientes nos hospitais parceiros?</h2>
                            </label>
                            <div className='resposta'>
                                <p>
                                O ESP32 monitora continuamente parâmetros vitais, como temperatura, frequência 
                                cardíaca e níveis de oxigênio. Em hospitais parceiros, os dados são centralizados,
                                e se houver alterações nos pacientes, os médicos recebem alertas em todo o 
                                hospital, facilitando um acompanhamento mais personalizado, reduzindo internações
                                e, futuramente, a ideia é estender o monitoramento para as casas dos pacientes.
                                </p>
                            </div>
                        </div>

                        <div className='duvidasFrequentes'>
                            <input type='checkbox' id='pergunta5'/>
                            <label for='pergunta5'>
                                <h2>Como o site contribui para o MyHealth?</h2>
                            </label>
                            <div className='resposta'>
                                <p>
                                O site fornece informações detalhadas sobre o projeto MyHealth, incluindo FAQs, 
                                solicitações de parcerias entre convênios e hospitais, além de permitir o login 
                                e cadastro dos usuários. Ele serve como uma plataforma informativa e interativa 
                                para facilitar a participação e compreensão abrangente do projeto.
                                </p>
                            </div>
                        </div>
                    </center>
                </main>

                <div className='botaoContato'>
                    <h1>Tem alguma dúvida que não foi respondida nessa seção?</h1>
                    <a href='./Contato'><img className='img-fluid' src='./src/assets/imagemBotaoContato.png' alt='Médica falando com paciente e botão clicável'/></a>
                </div>
            </section>
        </>
    )
}

export default Duvidas
import {} from 'react'
import './App.scss'


function Projeto(){
    return(
        <>
            <section className='conteudoProjeto'>
                <div className='inicioProjeto'>
                        <span className='texto'>
                            <h1 className='rosa'>A</h1> 
                            <h1 className='verde'>saúde</h1>
                            <h1 className='rosa'>é</h1>
                            <h1 className='rosa'>um</h1>
                            <h1 className='verde'>direito</h1>
                            <h1 className='rosa'>para</h1>
                            <h1 className='verde'>todos!</h1>
                        </span>
                    <img className='img-fluid' src='./src/assets/imagemProjeto.png' alt="Estetoscópio"/>
                    <span className='texto'>
                            <h1 className='rosa'>E</h1> 
                            <h1 className='rosa'>a</h1>
                            <h1 className='verde'>facilidade</h1>
                            <h1 className='rosa'>e</h1>
                            <h1 className='rosa'>o</h1>
                            <h1 className='verde'>acesso</h1>
                            <h1 className='rosa'>também!</h1>
                        </span>
                </div>

                <center><div className='textoInicialProjeto' >
                    <img className='img-fluid' src='./src/assets/imagemTextoInicialProjeto.png' alt='Médica segurando o estetoscópio'/>
                    <p>
                        A saúde é um elemento fundamental que permeia todas as dimensões de nossas vidas, 
                        influenciando não apenas nosso bem-estar físico, mas também nosso equilíbrio emocional e 
                        mental. Investir na nossa saúde não é apenas uma escolha individual, mas uma 
                        responsabilidade coletiva. E para isso que o MyHealth chegou!
                    </p>
                </div></center>

                <main>
                    <div className='personas'>
                        <h1>O MyHealth é para quem?</h1>
                        <center><div className='persona'>
                            <img className='img-fluid' src='./src/assets/persona1.png' alt="Médica" />
                            <div className='textoPersona'>
                                <h2>Profissionais da saúde</h2>
                                <p>
                                    A aplicação se destina a aprimorar o diagnóstico por meio da análise 
                                    automatizada de exames, alertando sobre eventuais desvios em relação aos 
                                    valores de referência e facilitando o agendamento de consultas com base em 
                                    agendas disponíveis. Os próprios profissionais da saúde podem fazer uso da 
                                    plataforma em sua condição de pacientes, simplificando a comunicação entre 
                                    médico e paciente, especialmente quando o médico está vinculado a um convênio
                                    parceiro.
                                </p>
                            </div>
                        </div></center>

                        <center><div className='persona'>
                            <div className='textoPersona'>
                                <h2>Pacientes</h2>
                                <p>
                                    A proposta visa otimizar a experiência ao possibilitar o agendamento de 
                                    consultas, a seleção de preferências personalizadas. Ademais, a plataforma proporcionará o acesso 
                                    simplificado a laudos médicos, resultados de exames, receitas prescritas e 
                                    lembretes de horários de medicação. Ao funcionar como uma agenda unificada, 
                                    ela contribuirá para a gestão eficiente de compromissos, recordando aos 
                                    pacientes as ações necessárias antes de realizar determinados exames.
                                </p>
                            </div>
                            <img className='img-fluid' src='./src/assets/persona2.png' alt="Mulher fazendo Yoga"/>
                        </div></center>

                        <center><div className='persona'>
                            <img className='img-fluid' src='./src/assets/persona3.png' alt="Médica" />
                            <div className='textoPersona'>
                                <h2>Convênios e hospitais públicos</h2>
                                <p>
                                    A aplicação visa trazer a facilidade entre médico-paciente, e essa facilidade
                                    pode ser feita através de parcerias conosco! Submissão de exames do mesmo
                                    convênio, agendas de demais médicos por parte da secretária, feedbacks por
                                    parte dos pacientes seja pelo serviço prestado ou pelo profissional que
                                    atendeu, facilitando melhor comunicação e melhor forma de trabalho, garantindo
                                    um ambiente saudável e melhor a todos! Gostou? Contate-nos e vamos fazer 
                                    uma parceria!  <a href='./Contato'><button className='botaoContato'>Contate-nos</button></a>
                                </p>
                            </div>
                        </div></center>
                    </div>

                    <div className='integracoes'>
                        <h1>O que integra nossa solução?</h1>

                        <center><div className='integracao'>
                            <img className='img-fluid' src='./src/assets/imagemIntegracao1.png' alt="Garota segurando a mão de uma inteligência artificial."/>
                            <div className='textoIntegracao'>
                                <h2>Julia, nossa I.A</h2>
                                <p>A Julia, uma inteligência artificial acessível, simplifica a vida dos pacientes, permitindo agendamentos, preferências personalizadas e gerenciamento de informações médicas. Para profissionais de saúde, auxilia no diagnóstico e na comunicação eficiente com pacientes de convênios. Para todos, foca na saúde mental, conectando com profissionais acessíveis, alertando sobre sintomas na região e fornecendo informações educativas e esclarecedoras sobre saúde.</p>
                            </div>
                        </div></center>

                        <center><div className='integracao'>
                        <div className='textoIntegracao'>
                                <h2>ESP32</h2>
                                <p>O ESP32 foca no monitoramento contínuo de pacientes em hospitais parceiros, acompanhando parâmetros vitais como temperatura, frequência cardíaca e níveis de oxigênio. A detecção de alterações gera alertas para médicos, possibilitando atendimento personalizado, reduzindo internações. A perspectiva é estender o acesso do monitoramento para domicílios, promovendo a saúde e facilitando a telemedicina, com a Julia enviando informações relevantes a familiares quando necessário.</p>
                            </div>
                            <img className='img-fluid' src='./src/assets/imagemIntegracao2.png' alt="Idosa sentada em uma maca."/>
                        </div></center>
                    </div>
                </main>

                <div className='diferencial'>
                    <img className='img-fluid' src='./src/assets/diferenciais.png' alt="Diferenciais MyHealth" />
                </div>

                <center><div className='empresaDesenvolvedora'>
                    <h1>Empresa desenvolvedora</h1>
                    <img className='img-fluid' src='./src/assets/logoPulsetech.png' alt="Logo PulseTech" />
                    <p>
                        A Pulsetech, uma empresa fictícia idealizada por Leticia Resina, destaca-se como uma 
                        inovadora no setor de tecnologia e desenvolvimento de software. Com uma missão centrada 
                        na empatia e inclusão, a empresa busca oferecer soluções tecnológicas que transcendem as 
                        barreiras e atendem às necessidades das mais diversas áreas. Seu compromisso com a 
                        inovação reflete-se em produtos e serviços que incorporam as últimas tendências 
                        tecnológicas, visando melhorar a eficiência e a experiência do usuário. 
                    </p>
                </div></center>
            </section>
        </>
    )
}

export default Projeto
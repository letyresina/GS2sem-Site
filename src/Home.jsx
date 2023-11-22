import {} from 'react'
import './App.scss'
import Carrossel from './Carousel'
import TestimonialsCarousel from './TestimonialsCarousel'

function Home(){
    return(
        <>
             <Carrossel/>

             <section className='conteudoHome'>
                <main>
                    <center><div className='textoInicialHome'>
                        <img className='img-fluid' src='./src/assets/imagemTextoInicialHome.png' alt="Médicos olhando a câmera de cima para baixo"/>
                        <div className='textoInicial'>
                            <p>
                            MyHealth, a plataforma de saúde completa, une a intuitiva IA Julia, monitoramento 
                            com ESP32 e um site informativo. Simplificando agendamentos, monitorando pacientes e
                            oferecendo recursos educativos, MyHealth redefine a experiência de cuidados. Clique 
                            agora para descobrir como estamos transformando a saúde de maneira acessível e 
                            personalizada.
                            </p>
                            <a href='./Projeto'><button className='botaoSaibaMais'>Saiba mais</button></a>
                        </div>
                    </div></center>

                    <div className='parcerias'>
                        <h1>Em parceria com</h1>
                        <div className='imagesParcerias'>
                            <img className='img-fluid' src='./src/assets/hapvida-logo.png' alt='Logo HapVida' />
                            <img className='img-fluid' src='./src/assets/fiap.png' alt='Logo FIAP' />
                        </div>
                        <p>Quer se tornar uma empresa parceira? Entre em <a href='./Duvidas'>contato</a> conosco!</p>
                    </div>

                    <div className='resenhas'>
                        <h1>Veja o que dizem nossos usuários!</h1>
                        <TestimonialsCarousel />
                    </div>
                </main>

                <div className='diferenciaisHome'>
                    <h1>Nossos diferenciais!</h1>
                    <div className='diferenciais'>
                        <div className='diferencial'>
                            <img className='img-fluid' src='./src/assets/interface-ux.png' alt='UX'/>
                            <h3>Interface amigável</h3>
                            <p>Garantindo melhor experiência ao usuário</p>
                        </div>
                        <div className='diferencial'>
                            <img className='img-fluid' src='./src/assets/facilitador.png' alt='Facilitador' />
                            <h3>Foco no usuário</h3>
                            <p>Aqui, nosso foco é você!</p>
                        </div>
                        <div className='diferencial'>
                            <img className='img-fluid' src='./src/assets/chuva-de-ideias.png' alt='Ideias' />
                            <h3>Inovação contínua</h3>
                            <p>Aqui, ouvimos você!</p>
                        </div>
                    </div>
                    <h4>Ficou com alguma dúvida? tire suas dúvidas com a gente!</h4>
                    <a href='./Duvidas'><button className='botaoDuvidas'>Dúvidas frequentes</button></a>
                </div>
             </section>
        </>
    )
}

export default Home
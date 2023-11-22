import {} from 'react'
import './App.scss'


function Contato(){
    return(
        <>
            <section className='conteudoContato'>
            <div className='imagemFundo'></div>
            <center><div className='formulario'>
                        <form className='form' name='formularioContato'>
                            <h3>FORMULÁRIO</h3>
                            <p>Os itens marcados com * indicam item obrigatório.</p>
                        
                            <label htmlFor='nome'>Nome*</label> <br />
                            <input type="text" className='inputInformacoes' placeholder='Insira seu nome' id='nomeUsuario' required /><br />

                            <label htmlFor='email'>Email*</label><br />
                            <input type="text" className='inputInformacoes' placeholder='Insira seu email' id='emailUsuario' required /><br />
                            
                            <label htmlFor='select'>Qual o motivo do seu contato?</label><br/>
                            <select name="motivoContato">
                                <option disabled selected hidden value="">Motivo do contato</option>
                                <option value="1">Tirar dúvida</option>
                                <option value="2">Orçamento</option>
                                <option value="3">Ambos os casos</option>
                            </select><br />

                            <label htmlFor='tel'>Telefone*</label><br />
                            <input type="text" className='inputInformacoes' placeholder='Insira seu telefone' id='telefoneUsuario' required /><br />

                            <label htmlFor='msg'>Escreva sua mensagem*</label><br />
                            <input type="text" className='inputMensagem' placeholder='escreva sua mensagem' id='mensagem' required /><br />

                            <input type="submit" value="Enviar" className='inputBotao' id='enviarMensagem' required/>

                        </form>
                    
                </div></center>
            </section>
        </>
    )
}

export default Contato
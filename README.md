<h1 align="center">Atividade DWU</h1>
Repositório criado para armazenar uma possível solução para a atividade proposta, referente a oportunidade de estágio na DWU
O projeto deve ser criado utilizando o AngularCli.

Abaixo alguns detalhes sobre o projeto:

Foi criada uma página de login, que contem dois campos para o usuário efetuar o login, campo E-mail e campo Senha, efetua a validação dos dados informados (Item 1)

Para a página de cadastro, foi criada uma página com os seguintes campos:
* 1 campo de data, incluindo máscara para formato dd/MM/yyyy
* 1 campo de hora, incluindo máscara para formato HH:mm
* 1 campo de texto alfanumérico
* 1 campo de número, somente número
* 1 campo de texto livre alfanumérico (textbox, texto grande)
* 1 botão para salvar o cadastro (Item 2)

Após clicar em salvar, os campos são resetados para valores em branco.


Item 1 - A validação é feita pelo e-mail e senha.
<br /> E-mail válido: dwu@dwu.com.br
<br /> Senha válida:  DWU@2020

Caso e-mail e senha sejam diferentes do informado, apresenta mensagem de erro de login.
Caso e-mail e senha sejam iguais ao informado, redireciona para a página de cadastro.

Item 2 - Ao clicar em salvar, o objeto é apresenteado com os dados informados no console do navegador, por exemplo:
<br />"objetoCadastro":{
<br />"Data": "",
<br />"Hora": "",
<br />...
<br />}

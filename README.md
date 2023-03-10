# Boas-vindas ao reposit贸rio do Projeto Playground Functions!

Para realizar o projeto, atente-se a cada passo descrito a seguir, e se tiver **qualquer d煤vida** nos envie no _Slack_ da turma! #vqv 馃殌

Aqui voc锚 vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir deste reposit贸rio, utilizando uma branch espec铆fica e um _Pull Request_ para colocar seus c贸digos.

# Termos e acordos

Ao iniciar este projeto, voc锚 concorda com as diretrizes do C贸digo de Conduta e do [C贸digo de Conduta e do Manual da Pessoa Estudante da Trybe](https://app.betrybe.com/manual-estudante/codigo-de-etica-e-conduta).

# Entreg谩veis

<details>
  <summary><strong>馃し馃徑鈥嶁檧锔? Como entregar</strong></summary><br />

  Para entregar o seu projeto voc锚 dever谩 criar um *Pull Request* neste reposit贸rio.

  :warning: **脡 importante que os arquivos n茫o tenham o nome alterado!** :warning:

  Lembre-se que voc锚 pode consultar nosso conte煤do sobre [Git & GitHub](https://app.betrybe.com/course/4d67f5b4-34a6-489f-a205-b6c7dc50fc16/) e nosso [Blog - Git & GitHub](https://blog.betrybe.com/tecnologia/git-e-github/) sempre que precisar!
</details>

<details>
  <summary><strong>馃懆鈥嶐煉? O que dever谩 ser desenvolvido</strong></summary><br />

No seu time de desenvolvimento, voc锚 ficou respons谩vel por implementar o c贸digo de fun莽玫es que resolvem problemas com respostas pr茅-determinadas. Voc锚 pode utilizar a l贸gica de programa莽茫o para te ajudar na an谩lise de cada problema e resposta esperada, facilitando a implementa莽茫o do c贸digo de cada uma das fun莽玫es.


</details>


<details>
  <summary><strong>馃棑 Data de Entrega</strong></summary><br />
  
  * Este projeto 茅 individual
  * Ser谩 `1` dia de projeto
  * Data para entrega final do projeto: `14/12/2022 14:00`

</details>

# Orienta莽玫es

<details>
  <summary><strong>鈥硷笍 Antes de come莽ar a desenvolver</strong></summary><br />

  1. Clone o reposit贸rio

  - Use o comando: `git clone git@github.com:tryber/sd-029-b-project-playground-functions.git`
  - Entre na pasta do reposit贸rio que voc锚 acabou de clonar:
    - `cd sd-029-b-project-playground-functions`

  2. Instale as depend锚ncias

  - `npm install`

  3. Crie uma branch a partir da branch `main`

  - Verifique que voc锚 est谩 na branch `main`
    - Exemplo: `git branch`
  - Se n茫o estiver, mude para a branch `main`
    - Exemplo: `git checkout main`
  - Crie uma branch 脿 qual voc锚 vai submeter os `commits` de seu projeto
    - Voc锚 deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
    - Exemplo: `git checkout -b joaozinho-sd-029-b-project-playground-functions`

  4. Adicione as mudan莽as ao _stage_ do Git e fa莽a um `commit`

  - Verifique que as mudan莽as ainda n茫o est茫o no _stage_
    - Exemplo: `git status` (deve aparecer listada a pasta _joaozinho_ em vermelho)
  - Adicione o novo arquivo ao _stage_ do Git
    - Exemplo:
      - `git add .` (adicionando todas as mudan莽as - _que estavam em vermelho_ - ao stage do Git)
      - `git status` (deve aparecer listado o arquivo _joaozinho/README.md_ em verde)
  - Fa莽a o `commit` inicial
    - Exemplo:
      - `git commit -m 'iniciando o projeto. VAMOS COM TUDO :rocket:'` (fazendo o primeiro commit)
      - `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

  5. Adicione a sua branch com o novo `commit` ao reposit贸rio remoto

  - Usando o exemplo anterior: `git push -u origin joaozinho-sd-029-b-project-playground-functions`

  6. Crie um novo `Pull Request` _(PR)_

  - V谩 at茅 a p谩gina de _Pull Requests_ do [reposit贸rio no GitHub](https://github.com/tryber/sd-029-b-project-playground-functions/pulls)
  - Clique no bot茫o verde _"New pull request"_
  - Clique na caixa de sele莽茫o _"Compare"_ e escolha a sua branch **com aten莽茫o**
  - Adicione uma descri莽茫o para o Pull Request, um t铆tulo que o identifique, e clique no bot茫o verde "Create pull request". Crie da seguinte forma: `[JOAOZINHO] Projeto Playground Functions`
  - Adicione uma descri莽茫o para o Pull Request, um t铆tulo claro que o identifique, e clique no bot茫o verde _"Create pull request"_
  - **N茫o se preocupe em preencher mais nada por enquanto!**
  - Volte at茅 a [p谩gina de _Pull Requests_ do reposit贸rio](https://github.com/tryber/sd-029-b-project-playground-functions/pulls) e confira que o seu _Pull Request_ est谩 criado

</details>

<details>
  <summary><strong>鈱笍 Durante o desenvolvimento</strong></summary><br />

  - Fa莽a `commits` das altera莽玫es que voc锚 fizer no c贸digo regularmente pois assim voc锚 treina essa pr谩tica para o mercado de trabalho 馃槃 ;

  - Lembre-se de sempre ap贸s um (ou alguns) `commits` atualizar o reposit贸rio remoto;

  - Os comandos que voc锚 utilizar谩 com mais frequ锚ncia s茫o:

    1. `git status` _(para verificar o que est谩 em vermelho - fora do stage - e o que est谩 em verde - no stage)_

    2. `git add` _(para adicionar arquivos ao stage do Git)_

    3. `git commit` _(para criar um commit com os arquivos que est茫o no stage do Git)_

    4. `git push -u origin nome-da-branch` _(para enviar o commit para o reposit贸rio remoto na primeira vez que fizer o `push` de uma nova branch)_

    5. `git push` _(para enviar o commit para o reposit贸rio remoto ap贸s o passo anterior)_

</details>

<details>
  <summary><strong>馃 Depois de terminar o desenvolvimento (opcional)</strong></summary><br />

  Para sinalizar que o seu projeto est谩 pronto para o _"Code Review"_, fa莽a o seguinte:

  - V谩 at茅 a p谩gina **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas:

    - No menu 脿 direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**;

    - No menu 脿 direita, clique no _link_ **"Assignees"** e escolha **o seu usu谩rio** ;

    - No menu 脿 direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-029-b`.

  Caso tenha alguma d煤vida, [aqui tem um video explicativo](https://vimeo.com/362189205).

</details>

<details>
  <summary><strong>馃暤馃徔 Revisando um pull request</strong></summary><br />

  Use o conte煤do sobre [Code Review](https://app.betrybe.com/course/real-life-engineer/code-review) para te ajudar a revisar os _Pull Requests_.

</details>

<details>
  <summary>
<strong>馃彈 Como estruturar seu projeto</strong>
  </summary> <br />

O seu Pull Request dever谩 conter os arquivos `challenges.js` e `challenges2.js` com suas fun莽玫es implementadas.

- Crie as fun莽玫es nos arquivos `challenges.js` e `challenges2.js`, que est茫o no diret贸rio `src`, usando os mesmos nomes especificados nos coment谩rios. Voc锚 pode criar outras fun莽玫es de aux铆lio, entretanto, **voc锚 deve criar e utilizar as fun莽玫es com os nomes que est茫o nos coment谩rios, pois estas que ser茫o avaliadas.**

  
**De olho na dica 馃憖:**
- Para verificar se a sua fun莽茫o foi criada corretamente voc锚 pode instalar a extens茫o `code runner` no _VSCode_;

- Utilize `console.log()` para testar as fun莽玫es localmente, mas remova antes de fazer o `push` 馃槈.

</details>

<details>
  <summary><strong>馃帥 Linter</strong></summary><br />

  Usaremos o [ESLint](https://eslint.org/) para fazer a an谩lise est谩tica do seu c贸digo.

  Este projeto j谩 vem com as depend锚ncias relacionadas ao _linter_ configuradas no arquivo `package.json`.

  Para poder rodar o `ESLint` lembre-se de executar o `npm install` dentro do projeto e depois rode o comando:
  
 ```bash 
 npm run lint 
 ```

Se a an谩lise do `ESLint` encontrar problemas no seu c贸digo, tais problemas ser茫o mostrados no seu terminal. Se n茫o houver problema no seu c贸digo, nada ser谩 impresso no seu terminal.

  Voc锚 pode tamb茅m instalar o plugin do `ESLint` no `VSCode`. Para isso, basta fazer o download do [plugin ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) e instal谩-lo.
  
 Em caso de d煤vidas, confira o material na plataforma sobre [ESLint](https://app.betrybe.com/course/real-life-engineer/eslint).
  
:warning: **NESTE PROJETO O ESLINT N脙O SER脕 AVALIADO. VOC脢 PODE RODAR O TESTE LOCALMENTE E FAZER AS CORRE脟脮ES SE DESEJAR!** :warning:
</details>

<details>
  <summary><strong>馃洜 Testes</strong></summary><br />
   Todos os requisitos do projeto ser茫o testados automaticamente por meio do Jest.

  Para rodar o avaliador autom谩tico localmente no seu projeto, execute um dos comandos abaixo:

  Para executar todos os testes utilize:
  ```bash
  npm test
  ```

  ***ou***

  Para executar um arquivo de teste espec铆fico, utilize `npm test nomeDoArquivoDeTeste`:

  ```bash
  npm test compareTrue
  ```
  
  * Os requisitos do seu projeto s茫o avaliados automaticamente

  Para verificar se a sua avalia莽茫o foi computada com sucesso, voc锚 pode verificar os **detalhes da execu莽茫o do avaliador**:

  * Na p谩gina do seu _Pull Request_, acima do "bot茫o de merge", procure por _**"Evaluator job"**_ e clique no link _**"Details"**_;

  * Na p谩gina que se abrir谩, procure pela linha _**"Evaluator step"**_ e clique nela;

  * Caso tenha d煤vidas, poste no _Slack_.

  :warning: **O avaliador autom谩tico n茫o necessariamente avalia seu projeto na ordem em que os requisitos aparecem no readme. Isso acontece para deixar o processo de avalia莽茫o mais r谩pido. Ent茫o, n茫o se assuste se isso acontecer, ok?**


  O n茫o cumprimento de um requisito, total ou parcialmente, impactar谩 em sua avalia莽茫o.

</details>

<details>
  <summary><strong>馃敆 Links auxiliares para o desenvolvimento
do projeto</strong></summary><br />

- Lembrem-se que como pessoas desenvolvedoras devemos fazer pesquisas e garimpar resultados para auxiliar no entendimento do assunto. Assim, para solucionar os requisitos do projeto 茅 inevit谩vel e estimulado que pesquisas sejam feitas nas mais variadas fontes (plataforma da trybe, google, youtube, etc) sempre tomando cuidado para utilizar fontes **confi谩veis** nas pesquisas da Internet, como por exemplo:
  
  - [JavaScript.com](http://javascript.com/)

  - [W3Schools](https://www.w3schools.com/js/default.asp)

  - [MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

  - [StackOverflow](https://pt.stackoverflow.com/questions/tagged/javascript)

</details>

<details>
  <summary><strong>馃棧 Nos d锚 feedbacks sobre o projeto!</strong></summary><br />

Ao finalizar e submeter o projeto, n茫o se esque莽a de avaliar sua experi锚ncia preenchendo o formul谩rio. 
**Leva menos de 3 minutos!**

Link: [Formul谩rio de avalia莽茫o do projeto](https://be-trybe.typeform.com/to/ZTeR4IbH)

</details>

<details>
  <summary><strong>馃梻 Compartilhe seu portf贸lio!</strong></summary><br />

  Voc锚 sabia que o LinkedIn 茅 a principal rede social profissional e compartilhar o seu aprendizado l谩 茅 muito importante para quem deseja construir uma carreira de sucesso? Compartilhe esse projeto no seu LinkedIn, marque o perfil da Trybe (@trybe) e mostre para a sua rede toda a sua evolu莽茫o.

</details>

# Requisitos Obrigat贸rios
:warning: **Leia todos os requisitos atentamente e siga 脿 risca o que for pedido. N茫o altere o nome de nenhuma fun莽茫o** :warning:

## 1 - Crie uma fun莽茫o usando o operador &&

<details>
  <summary>
    Implemente a fun莽茫o <code>compareTrue</code> utilizando somente o operador <code>&&</code>
  </summary> <br />

A fun莽茫o `compareTrue` ao receber dois par芒metros booleanos deve:

- Retornar `true` se ambos os valores forem verdadeiros;
- Retornar `false` se um ou ambos os par芒metros forem falsos.

  
Exemplo:

```javascript
const girafa = true;
const elefante = true;
const macaco = false;
```

Se a fun莽茫o for chamada com os valores `girafa` e `elefante` como par芒metro, retorna `true`, mas caso  seja chamada com os par芒metro `macaco` e `elefante` retorna `false`.

**O que ser谩 testado:**

- A fun莽茫o `compareTrue` deve retornar false quando receber um par芒metro de valor false e outro de valor true;

- A fun莽茫o `compareTrue` deve retornar false quando receber dois par芒metros de valor false;

- A fun莽茫o `compareTrue` deve retornar true quando receber dois par芒metros de valor true.

</details>

## 2 - Crie uma fun莽茫o que divida uma frase

<details>
  <summary>
Implemente a fun莽茫o <code>splitSentence</code> que divide uma frase de acordo com a quantidade de palavras

  </summary> <br />
A fun莽茫o `splitSentence` recebe uma string como par芒metro e deve retornar um array com as palavras separadas por v铆rgula.
  
  Exemplo: se a fun莽茫o receber a string `'go Trybe'`, o retorno dever谩 ser `['go', 'Trybe']`.

**O que ser谩 testado:**
  
- A fun莽茫o `splitSentence` deve retornar o valor `['go', 'Trybe']` quando receber como par芒metro a string `'go Trybe'`;

- A fun莽茫o `splitSentence` deve retornar o valor `['vamo', 'que', 'vamo']` quando receber como par芒metro a string `'vamo que vamo'`;

- A fun莽茫o `splitSentence` deve retornar o valor `['foguete']` quando receber como par芒metro a string `'foguete'`.


</details>


## 3 - Crie uma fun莽茫o que use concatena莽茫o de strings

<details>
  <summary>
Implemente a fun莽茫o <code>concatName</code> que recebe um array de strings e retorna uma string com o 煤ltimo e o primeiro item

  </summary> <br />
A fun莽茫o `concatName` recebe um array de strings e deve retornar uma string com o formato `'脷LTIMO ITEM, PRIMEIRO ITEM`, independente do tamanho do array.
  
  Exemplo:

- Caso o par芒metro passado para a fun莽茫o `concatName` seja o array `['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']`, a fun莽茫o dever谩 retornar `Paolillo, Lucas`.

**O que ser谩 testado:**
  
- A fun莽茫o `concatName` deve retornar o valor `'Paolillo, Lucas'` quando receber como par芒metro o array `['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']`;

- A fun莽茫o `concatName` deve retornar `'r茅, foguete'` quando receber como par芒metro o array `['foguete', 'n茫o', 'tem', 'r茅']`;

- A fun莽茫o `concatName` deve retornar `'captain, captain'` quando receber como par芒metro o array `['captain', 'my', 'captain']`.


</details>

## 4 - Crie uma fun莽茫o que calcula a quantidade de pontos em um campeonato de futebol

<details>
  <summary>
Implemente a fun莽茫o <code>footballPoints</code> que calcula a pontua莽茫o de um time de futebol em um campeonato a partir do n煤mero de vit贸rias e empates

  </summary> <br />

A fun莽茫o `footballPoints` recebe o n煤mero de vit贸rias (`wins`) e o n煤mero de empates (`ties`) e retorna a quantidade de pontos que o time marcou em um campeonato. Para isso, considere que:

- `wins`: 茅 o n煤mero de vit贸rias e vale 3 pontos;
- `ties`: 茅 o n煤mero de empates e vale 1 ponto.


**O que ser谩 testado:**

- A fun莽茫o `footballPoints` deve retornar o valor `50` pontos quando o time tenha 14 vit贸rias e 8 empates;

- A fun莽茫o `footballPoints` deve retornar o valor `5` pontos quando o time tenha 1 vit贸ria e 2 empates;

- A fun莽茫o `footballPoints` deve retornar o valor `0` pontos quando o time tenha 0 vit贸rias e 0 empates.


</details>


## 5 - Crie uma fun莽茫o que calcula o n煤mero de repeti莽玫es do maior n煤mero

<details>
  <summary>
Implemente a fun莽茫o <code>highestCount</code> que dever谩 retornar a quantidade de vezes que o maior n煤mero se repete ao receber um array de n煤meros. 

  </summary> <br />

A fun莽茫o `highestCount` deve retornar a quantidade de vezes que o **maior** n煤mero se repete dentro do array.
  
  Por exemplo:

- Caso o par芒metro seja um array com valores `[9, 1, 2, 3, 9, 5, 7]`, a fun莽茫o dever谩 retornar `2`, que 茅 a quantidade de vezes que o n煤mero `9` (maior n煤mero do array) se repete.

**O que ser谩 testado:**

- A fun莽茫o `highestCount` deve retornar `2` quando receber o par芒metro `[9, 1, 2, 3, 9, 5, 7]`;

- A fun莽茫o `highestCount` deve retornar `1` quando receber o par芒metro `[0, 4, 4, 4, 9, 2, 1]`;

- A fun莽茫o `highestCount` deve retornar `3` quando receber o par芒metro `[0, 0, 0]`.


</details>


## 6 - Crie 3 fun莽玫es para calcular as 谩reas de um tri芒ngulo e de um ret芒ngulo

<details>
  <summary>
  Implemente 3 fun莽玫es. Uma fun莽茫o que calcula a 谩rea de um tri芒ngulo, outra que calcula a 谩rea de um ret芒ngulo e uma fun莽茫o que exiba o resultado desses c谩lculos de acordo com o par芒metro passado para fun莽茫o. Leia atentamente todas as instru莽玫es abaixo:
  </summary> <br />

A fun莽茫o `calcTriangleArea` recebe dois par芒metros, sendo eles, o valor da base (`base`) e outro da altura (`height`) de um tri芒ngulo qualquer e retorna o c谩lculo da sua 谩rea.

- Realize o c谩lculo da 谩rea total do tri芒ngulo utilizando a f贸rmula `(base * altura) / 2`.

A fun莽茫o `calcRectangleArea` tamb茅m recebe 2 par芒metros, sendo eles, o valor da base (`base`) e outro da altura (`height`) de um ret芒ngulo qualquer e retorna o c谩lculo da sua 谩rea.

- Realize o c谩lculo da 谩rea total do ret芒ngulo utilizando a f贸rmula `(base * altura)`.

E, por 煤ltimo, a fun莽茫o `calcAllAreas` que recebe 3 par芒metros sendo eles, o valor da base (`base`), o valor da altura (`height`) e a forma geom茅trica (`form`) que eu quero obter o valor da 谩rea, podendo ser `tri芒ngulo` ou `ret芒ngulo`.

- Se o par芒metro passado em `form` for "tri芒ngulo" o retorno deve ser uma `string` com o seguinte formato: `O valor da 谩rea do tri芒ngulo 茅 de: valorDaArea`.
- Se o par芒metro passado em `form` for "ret芒ngulo" o retorno deve ser uma `string` com o seguinte formato: `O valor da 谩rea do ret芒ngulo 茅 de: valorDaArea`.
- E caso n茫o seja nenhuma das condi莽玫es acima, deve retornar uma `string` com o seguinte formato: `N茫o foi poss铆vel fazer o c谩lculo, insira uma forma geom茅trica v谩lida`.

**De olho nas dicas 馃憖:** 
- A ideia 茅 que a fun莽茫o `calcAllAreas` chame as fun莽玫es `calcTriangleArea` e `caclRectangleArea` para exibir o resultado esperado. 
- Leia a se莽茫o abaixo com bastante aten莽茫o!


**O que ser谩 testado:**
  
- A fun莽茫o `calcTriangleArea` deve retornar o valor `250` quando receber o par芒metro base com o valor 10 e o par芒metro height com o valor 50;

- A fun莽茫o `calcRectangleArea` deve retornar o valor `500` quando receber o par芒metro `base` com o valor 10 e o par芒metro `height` com o valor 50;

- A fun莽茫o `calcAllAreas` deve retornar a string: `'O valor da 谩rea do tri芒ngulo 茅 de: 250'` quando receber o par芒metro `base` com o valor 10, o par芒metro `height` com o valor 50 e a `form` 'tri芒ngulo'.

- A fun莽茫o `calcAllAreas` deve retornar a string: `'O valor da 谩rea do ret芒ngulo 茅 de: 500'` quando receber o par芒metro `base` com o valor 10, o par芒metro `height` com o valor 50 e a `form` 'ret芒ngulo'.

- A fun莽茫o `calcAllAreas` deve retornar a string: `'N茫o foi poss铆vel fazer o c谩lculo, insira uma forma geom茅trica v谩lida'`, quando receber o par芒metro `base` com o valor 10, o par芒metro `height` com o valor 50 e a `form` 'quadrado'.


</details>

## 7 - Crie uma fun莽茫o de Ca莽a ao Rato

<details>
  <summary>
Implemente a fun莽茫o <code>catAndMouse</code> que verifica qual gato est谩 mais perto do rato

  </summary> <br />
Imagine que dois gatos est茫o ca莽ando o mesmo rato. Voc锚 precisa verificar qual gato est谩 mais perto de sua presa. Para isso, implemente a fun莽茫o `catAndMouse` que recebe 3 par芒metros do tipo `number` na seguinte ordem:
    
    - `mouse`: representa a posi莽茫o do rato.

    - `cat1`: representa a posi莽茫o do gato 1;
    
    - `cat2`: representa a posi莽茫o do gato 2;
 
 
- Calcule as dist芒ncias entre o rato e cada um dos gatos e retorne qual dos felinos est谩 mais pr贸ximo do rato:

   - Retorne a string `'cat2'` se o gato `cat2` estiver mais pr贸ximo do rato;
   - Retorne a string `'cat1'` se o gato `cat1` estiver mais pr贸ximo do rato;
   - Retorne a string `'os gatos trombam e o rato foge'` caso os gatos estejam na mesma dist芒ncia do rato.
   
Exemplo:

- Caso o gato `cat2` esteja a 2 unidades de dist芒ncia do rato e o `cat1` esteja a 3 unidades, sua fun莽茫o dever谩 retornar `'cat2'`;

- Caso os gatos estejam na mesma dist芒ncia do rato, a fun莽茫o dever谩 retornar a string `'os gatos trombam e o rato foge'`. 

**O que ser谩 testado:**

- A fun莽茫o `catAndMouse` deve retornar a string `'cat2'` quando receber os par芒metros onde gato `cat2` esteja a 2 unidades de dist芒ncia do rato e `cat1` esteja a 3 unidades de dist芒ncia do rato;

- A fun莽茫o `catAndMouse` deve retornar a string `'cat1'` quando receber os par芒metros onde gato `cat1` esteja a 6 unidades de dist芒ncia do rato e `cat2` esteja a 12 unidades de dist芒ncia do rato;

- A fun莽茫o `catAndMouse` deve retornar a string `'os gatos trombam e o rato foge'` quando receber os par芒metros onde os gatos estejam na mesma dist芒ncia do rato.


</details>


## 8 - Crie uma fun莽茫o FizzBuzz

<details>
  <summary>
Implemente a fun莽茫o <code>fizzBuzz</code> que recebe um array de n煤meros e retorna um array de string de acordo com o resultado

  </summary> <br />

A fun莽茫o `fizzBuzz` recebe um array de n煤meros e para cada n煤mero do array 茅 realizada a divis茫o por 3 e por 5 e de acordo com o resultado, a fun莽茫o deve retornar um array de strings:

- Retorne a string `'fizz'` para cada n煤mero do array que seja divis铆vel apenas por 3;
- Retorne a string `'buzz'` para cada n煤mero do array que seja divis铆vel apenas por 5;
- Retorne a string `'fizzBuzz'` para cada n煤mero do array que seja divis铆vel por 3 **e** 5;
- Retorne a string `'bug!'` para cada n煤mero do array que n茫o seja dividido por 3 nem por 5.

Exemplo: caso o par芒metro seja [2, 15, 7, 9, 45], sua fun莽茫o dever谩 retornar `['bug!', 'fizzBuzz', 'bug!', 'fizz', 'fizzBuzz']`.

**O que ser谩 testado:**
  
- A fun莽茫o `fizzBuzz` deve retornar as strings `['bug!', 'fizzBuzz', 'bug!', 'fizz', 'fizzBuzz']` quando receber os par芒metros [2, 15, 7, 9, 45];

- A fun莽茫o `fizzBuzz` deve retornar as strings `['bug!', 'fizz']` quando receber os par芒metros [7, 9];

- A fun莽茫o `fizzBuzz` deve retornar as strings `['fizz', 'buzz']` quando receber os par芒metros [9, 25].


</details>


## 9 - Crie uma fun莽茫o que Codifique e Decodifique

<details>
  <summary>
Implemente uma fun莽茫o que codifica e decodifica uma frase, trocando vogais por n煤meros ou n煤meros por vogais.

  </summary> <br />

  Para codificar a frase utilize a fun莽茫o `encode` que recebe uma string como par芒metro e dever谩 trocar todas as **vogais min煤sculas por n煤meros**, de acordo com o formato:
  
a -> 1 \
e -> 2 \
i -> 3 \
o -> 4 \
u -> 5
  
  Ou seja, caso o par芒metro de `encode` seja `'hi there!'`, o retorno dever谩 ser `'h3 th2r2!'`.


  Para decodificar a frase utilize a fun莽茫o `decode` que recebe uma string contendo letras e n煤meros como par芒metro e dever谩 trocar todos os **n煤meros por vogais min煤sculas**, de acordo com o formato: 
  
1 -> a \
2 -> e \
3 -> i \
4 -> o \
5 -> u
  
  Por exemplo, caso o par芒metro de `decode` seja `'h3 th2r2!'`, o retorno dever谩 ser `'hi there!'`.

**O que ser谩 testado:**
  
- A fun莽茫o `encode` quando receber o par芒metro `hello`, deve retornar o valor `h2ll4`;
- A fun莽茫o `encode` quando receber o par芒metro `How are you today?` deve retornar o valor `H4w 1r2 y45 t4d1y?`;
- A fun莽茫o `encode` quando receber o par芒metro `This is an encoding test.` deve retornar o valor `Th3s 3s 1n 2nc4d3ng t2st.`;
- A fun莽茫o `encode` quando receber o par芒metro `go Trybe! ` deve retornar o valor `g4 Tryb2!`.



</details>


## 10 - Crie uma fun莽茫o de Lista de Tecnologias

<details>
  <summary>
Implemente a fun莽茫o <code>techList</code> que recebe um array e uma string e retorna um array de objetos.

  </summary> <br />

  A fun莽茫o `techList` recebe dois par芒metros:

  - Um array com nomes de tecnologias ;
  - Um nome referente ao nome de uma pessoa.
  
  A fun莽茫o dever谩 retornar:
  - Um array vazio caso n茫o receba nenhum par芒metro;
  - Um array de objetos, contendo um objeto para cada tecnologia do array, com a seguinte estrutura:

```javascript
{
  tech: 'NomeTech',
  name: 'nome da pessoa'
}
```

Por exemplo, se a fun莽茫o recebe os par芒metros `['React', 'Jest', 'HTML', 'CSS', 'JavaScript']` e `'Lucas'`, o retorno deve ser:

```javascript
[
  {
    tech: "CSS",
    name: "Lucas"
  },
  {
    tech: "HTML",
    name: "Lucas"
  },
  {
    tech: "JavaScript",
    name: "Lucas"
  },
  {
    tech: "Jest",
    name: "Lucas"
  },
  {
    tech: "React",
    name: "Lucas"
  }
]
```

**O que ser谩 testado:**

- A fun莽茫o `techList` deve retornar uma lista de objetos ordenados quando 茅 passada uma lista com 5 tecnologias;

- A fun莽茫o `techList` deve retornar um array vazio quando a lista de tecnologias estiver vazia.

</details>


# Requisitos B么nus

## 11 - Crie uma fun莽茫o de n煤mero de telefone

<details>
  <summary>
Implemente a fun莽茫o  <code>generatePhoneNumber</code> que recebe um array com 11 n煤meros e retorna um n煤mero de telefone, respeitando par锚nteses, tra莽os e espa莽os.

  </summary> <br />

Exemplo: caso o par芒metro da fun莽茫o seja `[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]`, a fun莽茫o `generatePhoneNumber` dever谩 retornar `(12) 34567-8901`.

- Retorne a string `'Array com tamanho incorreto.'` se a fun莽茫o receber um array com tamanho diferente de 11;

- Retorne a string `'n茫o 茅 poss铆vel gerar um n煤mero de telefone com esses valores'` caso algum dos n煤meros do array seja **menor** que 0, **maior** que 9 ou se repita 3 vezes ou mais.


**O que ser谩 testado:**
  
- A fun莽茫o `generatePhoneNumber` deve retornar a string `'Array com tamanho incorreto.'` caso o array tenha o tamanho diferente de 11;

- A fun莽茫o `generatePhoneNumber` deve retornar a string `'n茫o 茅 poss铆vel gerar um n煤mero de telefone com esses valores'` caso algum dos n煤meros do array seja menor que 0;

- A fun莽茫o `generatePhoneNumber` deve retornar a string `'n茫o 茅 poss铆vel gerar um n煤mero de telefone com esses valores'` caso algum n煤mero do array seja maior que 9;

- A fun莽茫o `generatePhoneNumber` deve retornar a string `'n茫o 茅 poss铆vel gerar um n煤mero de telefone com esses valores'` caso algum n煤mero do array se repetir 3 vezes ou mais;

- A fun莽茫o `generatePhoneNumber` deve retornar um n煤mero de telefone, respeitando par锚nteses, tra莽os e espa莽os, caso os n煤meros do array estejam de acordo com as especifica莽玫es. Lembre-se que esse retorno ser谩 uma string do n煤mero de telefone, por exemplo: `'(12) 34567-8901'`


</details>

## 12 - Crie uma fun莽茫o que teste a condi莽茫o de exist锚ncia de um tri芒ngulo

<details>
  <summary>
Implemente a fun莽茫o <code>triangleCheck</code> que verifica se 茅 poss铆vel formar um tri芒ngulo analisando o comprimento de tr锚s linhas.

  </summary> <br />

  A fun莽茫o `triangleCheck` dever谩 receber os par芒metros `lineA`, `lineB` e `lineC` com o valor do comprimento de tr锚s linhas distintas.

- Para que seja poss铆vel formar um tri芒ngulo, 茅 necess谩rio atender uma das seguintes condi莽玫es:
  
  1) **a medida de _um_ dos lados** 茅 **menor** que a soma das medidas dos outros dois lados e **maior** que o valor absoluto (m贸dulo) da diferen莽a entre os outros dois lados. Por exemplo: `lineA` 茅 menor que `lineB + lineC` e maior que `lineB - lineC`. Se o resultado de `lineB - lineC` for um valor negativo, 茅 preciso convert锚-lo em positivo e checar se `lineA` 茅 maior que esse resultado convertido para positivo;
  
  **_OU_**
  
  2) **a medida de _qualquer_ um dos lados** 茅 **menor** que a soma das medidas dos outros dois lados. Por exemplo: `lineA` 茅 menor que `lineB + lineC`, `lineB` 茅 menor que `lineA + lineC` e `lineC` 茅 menor que `lineA + lineB`.

**De olho na dica 馃憖:** Para obter o valor absoluto de um n煤mero em JavaScript, pesquise pela fun莽茫o `Math.abs`;
  
- O retorno da sua fun莽茫o dever谩 ser um booleano.

Exemplo: o retorno de `triangleCheck(10, 14, 8)` dever谩 ser `true`.

**O que ser谩 testado:**

- A fun莽茫o `triangleCheck` deve retornar o valor `false` quando a medida de um dos lados n茫o 茅 menor que a soma das medidas dos outros dois lados;
  
- A fun莽茫o `triangleCheck` deve retornar o valor `false` quando a medida de um dos lados n茫o 茅 maior que o valor absoluto da diferen莽a entre as medidas dos outros dois lados;

- A fun莽茫o `triangleCheck` deve retornar o valor `true` quando a medida de qualquer um dos lados seja menor que a soma das medidas dos outros dois lados, ou a medida de um dos lados 茅 menor que a soma das medidas dos outros dois lados e maior que o valor absoluto da diferen莽a entre os outros dois lados.

</details>

## 13 - Crie uma fun莽茫o de boas vindas ao Bar da Trybe!

<details>
  <summary>
Implemente a fun莽茫o <code>hydrate</code> que recebe uma string e retorna a sugest茫o de quantos copos de 谩gua voc锚 deve beber.

  </summary> <br />


```javascript
// String recebida:
  '1 cerveja'

// String retornada:
  '1 copo de 谩gua'
```

```
// String recebida:
  '1 cacha莽a, 5 cervejas e 1 copo de vinho'

// String retornada:
  '7 copos de 谩gua'
```

```
// String recebida:
  '1 cacha莽a, 5 cervejas e 1 copo de vinho'

// String retornada:
  '7 copos de 谩gua'
```

- Para simplificar, considere que a string **sempre** ter谩 o formato *quantidade (em n煤mero) + tipo da bebida*;

- O n煤mero na frente de cada bebida deve estar entre 1 e 9.

**De olho na dica 馃憖:** pesquise por algo similar a `get all integers inside a string js`.

**O que ser谩 testado:**
  
- A fun莽茫o `hydrate` deve retornar a sugest茫o de quantos copos de 谩gua deve-se beber ao receber uma string.


</details>

</details>

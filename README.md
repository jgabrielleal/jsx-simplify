# JSX Simplify
JSX Simplify é uma biblioteca JavaScript que facilita a criação de componentes JSX com uma sintaxe mais simples e intuitiva.

A ideia geral da biblioteca é tornar o JSX mais apresentável e menos poluído em comparação com a forma padrão do React de inserir lógica dentro do JSX usando `{}`. Com o JSX Simplify, você pode escrever componentes de maneira mais limpa e intuitiva, facilitando a manutenção e leitura dos componentes.

## Instalação

Você pode instalar a biblioteca via npm ou yarn:

```bash
npm install jsx-simplify
yarn add jsx-simplify
```

## Uso

Aqui está um exemplo básico de como usar o JSX Simplify em componentes React:

```javascript
import { Condition } from 'jsx-simplify';

const isLoggedIn = true;

return (
    <Condition condition={isLoggedIn}>
        <p>Bem-vindo, usuário!</p>
    </Condition>
);
```

## Componentes

<details>
<summary>Condition e ConditionError</summary>

`Componente Condition` é utilizado para renderizar elementos JSX com base em uma expressão. Ele aceita a seguinte propriedade:

- `condition` (obrigatório): Uma expressão booleana que determina se o conteúdo dentro de `Condition`  deve ser renderizado.

`Componente ConditionError` é utilizado para renderizar elementos JSX quando a expressão booleana do componente `Condition` falha. Ele é usado em conjunto com o `Condition` para fornecer uma alternativa de renderização.

#### Exemplo de uso:

```javascript
import { Condition, ConditionError } from 'jsx-simplify';

const isLoggedIn = false;

return (
    <>
        <Condition condition={isLoggedIn}>
            <p>Bem-vindo, usuário!</p>
        </Condition>
        <ConditionError>
            <p>Por favor, faça login para continuar.</p>
        </ConditionError>
    </>
);
```

No exemplo acima, o parágrafo "Por favor, faça login para continuar." será renderizado apenas se a variável `isLoggedIn` for `false`.

</details>

<details>
<summary>Loop</summary>

`Componente Loop` é utilizado para renderizar uma lista de elementos JSX com base em um array. Ele aceita as seguintes propriedades:

- `items` (obrigatório): Um array onde os items serão iterados e renderizados.

#### Exemplo de uso:

```javascript
import { Loop } from 'jsx-simplify';

const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];

return (
    <Loop items={users}>
        {(item, index)=>(
            <li key={index}>{item.name}</li>
        )}
    </Loop>
);
```

No exemplo acima, um parágrafo será renderizado para cada usuário na coleção `users`, exibindo o nome de cada um.

</details>

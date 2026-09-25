# API de Gestão da Livraria — Grupo 3

Projeto da UC de Programação Back-End — Curso Técnico em Desenvolvimento de Sistemas
Escola SENAI "Santo Paschoal Crepaldi" — Turma 1-2026-SESI_DEV_OC_1

## Integrantes

- Luis Miguel Pereira da Silva — @Luis Silva-del
- Ana Laura Aparecida Miranda Cardoso — @Ana
- Victor dos Santos Gonçalves da Silva — @Gonçalves918
- Maria Eduarda da Silva Mendes — @madumendes21

## Divisão de responsabilidades (Bloco 3 — Atividade 12)

| Integrante                           | Responsável por                                            |
| ------------------------------------ | ---------------------------------------------------------- |
| Luis Miguel Pereira da Silva         | POST (criar)                                               |
| Ana Laura Aparecida Miranda Cardoso  | PUT e PATCH (atualizar completo e parcial)                 |
| Victor dos Santos Gonçalves da Silva | DELETE (apagar)                                            |
| Maria Eduarda da Silva Mendes        | Testar tudo no Postman e preencher a tabela de verificação |

## Tecnologias

- Node.js
- Express
- npm

## Diagrama de Classes (UML)

```mermaid
classDiagram
    direction TB
    class Pessoa {
        +String nome
        +String email
        +apresentar()
    }
    class Cliente {
        +Number saldo
        +apresentar()
    }
    class Funcionario {
        +Number salario
        +apresentar()
    }
    class Categoria {
        +String nome
    }
    class Livro {
        +String titulo
        +Number preco
    }
    class LivroFisico {
        +Number peso
        +Number frete
    }
    class LivroDigital {
        +Number tamanhoMB
        +String formato
    }
    class Carrinho {
        +Array itens
        +adicionarItem()
        +removerItem()
    }
    class ItemPedido {
        +Number quantidade
        +Number precoUnitario
    }
    class Pedido {
        +Date data
        +String status
        +calcularTotal()
    }
    class Periodo {
        +Date dataInicio
        +Date dataFim
    }

    Pessoa <|-- Cliente
    Pessoa <|-- Funcionario
    Livro <|-- LivroFisico
    Livro <|-- LivroDigital
    Livro "1..*" o-- "1" Categoria
    Carrinho "1" o-- "*" ItemPedido
    Pedido "1" o-- "1..*" ItemPedido
    ItemPedido "*" --> "1" Livro
    Cliente "1" --> "*" Pedido
    Pedido "*" --> "1" Periodo
```

## Experimento do Cabeçalho (Atividade 12 — Parte 3)

- **Status retornado:** 500 Internal Server Error (ou dados salvos como `undefined`).
- **Explicação:** O status ocorreu porque, ao enviar a requisição sem o cabeçalho `Content-Type: application/json`, o Express não consegue identificar o formato dos dados enviados. Com isso, o `req.body` fica vazio ou indefinido, impedindo o servidor de ler e salvar as propriedades do livro corretamente.

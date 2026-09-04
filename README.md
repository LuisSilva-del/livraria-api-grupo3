# API de Gestão da Livraria — Grupo 3
Projeto da UC de Programação Back-End — Curso Técnico em Desenvolvimento de Sistemas
Escola SENAI "Santo Paschoal Crepaldi" — Turma 1-2026-SESI_DEV_OC_1
## Integrantes
- Luis Miguel Pereira da Silva — @Luis Silva-del
- Ana Laura Aparecida Miranda Cardoso — @Ana
- Victor dos Santos Gonçalves da Silva — @Gonçalves918
- Maria Eduarda da Silva Mendes  — @madumendes21
## Divisão de responsabilidades
| Bloco | Integrante | O que ficou sob responsabilidade dele(a) |
|---|---|---|
| Bloco 1 | *(a preencher)* | *(a preencher)* |
> Esta tabela é atualizada **a cada bloco**, com rodízio de responsabilidades entre os
## Tecnologias
- Node.js
- npm

## Diagrama de Classes (UML)

<div align="center">

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
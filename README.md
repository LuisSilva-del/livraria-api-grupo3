# API de Gestão da Livraria — Grupo 3
Projeto da UC de Programação Back-End — Curso Técnico em Desenvolvimento de Sistemas
Escola SENAI "Santo Paschoal Crepaldi" — Turma 1-2026-SESI_DEV_OC_1
## Integrantes
- Luis Miguel Pereira da Silva — @Luis Silva-del
- Ana Laura Aparecida Miranda Cardoso — @Ana
- Victor Gonçalves da Silva — @Gonçalves918
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

```mermaid
classDiagram
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

    Pessoa <|-- Cliente
    Pessoa <|-- Funcionario
    Livro "1..*" o-- "1" Categoria
# Projeto de Testes Automatizados com Cypress

Este projeto contém uma suíte de testes automatizados utilizando **Cypress** para verificar o comportamento de funcionalidades web. O foco está em garantir a qualidade das interações de interface do usuário (UI), resiliência dos testes e geração de relatórios automatizados de execução.

## Estrutura do Projeto

A estrutura de pastas do projeto é organizada da seguinte maneira:

├── cypress 
│ 
├── downloads # Arquivos baixados durante os testes 
│ 
├── e2e # Definições dos testes end-to-end (arquivos .spec.js) 
│ 
│ 
├── page_object # Objetos de página usados nos testes (Page Object Model) 
│ 
├── fixtures # Arquivos de dados de teste (JSON ou outros) 
│ 
├── support # Arquivos de suporte ao Cypress (custom commands e hooks) 
│ 
├── reports # Relatórios gerados após a execução dos testes 
│ └── screenshots # Capturas de tela automáticas feitas pelo Cypress 
├── node_modules # Dependências do projeto 
├── cypress.config.js # Arquivo de configuração do Cypress 
├── package.json # Dependências e scripts do projeto 
└── README.md # Documentação do projeto


## Pré-requisitos

Certifique-se de que você tenha o **Node.js** e o **npm** instalados no seu ambiente.

### Instalação das dependências

### Após clonar o repositório, instale as dependências do projeto utilizando o comando:


***npm install***

### Como rodar os testes
Existem duas maneiras principais de executar os testes:

### 1. Executar com a interface interativa do Cypress
Este comando abrirá a interface gráfica do Cypress para que você possa rodar e inspecionar os testes manualmente:

***npx cypress open***

### 2. Executar os testes em modo headless
Você pode rodar todos os testes em modo headless (sem interface gráfica) e gerar relatórios ao final da execução:

***npx cypress run***

### Relatórios de Execução
O projeto está configurado para gerar relatórios de execução com o Mochawesome. Após rodar os testes com o comando **npx cypress** run, os relatórios serão gerados automaticamente e salvos na pasta cypress/reports.

### Para acessar os relatórios, abra o arquivo HTML gerado:
cypress/reports/mochawesome-report.html

![Hackathon Final](https://user-images.githubusercontent.com/112454897/229313462-a1a5a73c-4cf7-4098-acab-28c0bdeb287d.png)

# Video Training - Plataforma de streaming de vídeos particulares para empresas

Este repositório contém o código para a plataforma de streaming de vídeos particulares para empresas da Video Training. A plataforma permite que empresas realizem treinamentos com seus funcionários através de vídeos e os funcionários possam acessá-los e realizar buscas.

## Tecnologias Utilizadas
O projeto foi desenvolvido utilizando as seguintes tecnologias:
- Frontend: ReactJS com Typescript
* Backend: Java com Spring Boot
+ Banco de dados: MySQL

## Desafios do Hackathon
O objetivo do hackathon é tornar a plataforma mais robusta e escalável, migrando-a para a nuvem cloud e utilizando serviços disponíveis na nuvem para criar uma esteira de CI/CD para os deploys.

Os desafios incluem:
- Criar a infraestrutura na nuvem utilizando Terraform
* Automatizar o processo de deploy com o uso do Github Actions semelhante ao Code Pipeline
+ Migrar a aplicação para a nuvem e utilizar serviços disponíveis na nuvem

## Descrição das etapas principais da arquitetura da aplicação e do processo de migração para a nuvem utilizando Terraform e Github Actions.

Arquitetura da aplicação:

1. [Frontend em ReactJS com Typescript para a interface com os usuários e apresentação dos vídeos.](https://github.com/wiliamks/hackaton-9aojo-frontend)
2. [Backend em Java com Spring Boot para o processamento dos dados e lógica de negócios.](https://github.com/wiliamks/hackaton-9aojo-backend)
3. Banco de dados MySQL para armazenamento das informações dos filmes.
4. Infraestrutura on premise para hospedagem da aplicação.

Processo de migração para a nuvem utilizando Terraform e Github Actions:

1. Criar os repositórios necessários para armazenar os arquivos do Terraform e do Github Actions.
2. Configurar as credenciais de acesso à nuvem na conta do Github.
3. Escrever os arquivos do Terraform para criar a infraestrutura na nuvem, incluindo instâncias EC2, VPCs, subnets, security groups e outros recursos necessários.
4. Configurar as variáveis do Terraform, como região, tamanho da instância, nome do bucket S3, etc.
5. Escrever o arquivo do Github Actions para automatizar o processo de deploy.
6. Configurar as variáveis do Github Actions, como chave de acesso à nuvem, região, nome do bucket S3, etc.
7. Testar a infraestrutura criada pelo Terraform e garantir que está funcionando corretamente.
8. Realizar o deploy da aplicação na nuvem utilizando o Github Actions.
9. Configurar as variáveis de ambiente da aplicação para apontar para o banco de dados MySQL na nuvem.
10. Testar a aplicação na nuvem para garantir que está funcionando corretamente.
11. Monitorar a aplicação na nuvem e fazer ajustes necessários para garantir a escalabilidade e segurança.


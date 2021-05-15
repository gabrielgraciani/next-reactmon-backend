# Reactmon API

### API do projeto Reactmon para fins educacionais.

## :notebook: Executando

### Para executar, primeiramente é necessário a instalação do docker desktop, encontrado neste link: https://www.docker.com/products/docker-desktop . Após a instalação, basta seguir os passos abaixo, caso ocorra um erro relacionado ao WSL durante a instalação, recomendo o este link de resolução: https://docs.microsoft.com/pt-br/windows/wsl/install-win10

```bash
# Clone este repositório
$ git clone https://github.com/gabrielgraciani/next-reactmon-backend

# Instale as dependências
$ yarn install or npm install

# Crie as imagens da aplicação com o docker-compose (apenas na primeira execução)
$ docker-compose up -d

# Execute as migrações
$ yarn typeorm migration:run or npm run typeorm migration:run

# Nas demais vezes que executar o projeto, não é necessário o docker-compose up nem as migrações, somente
$ docker-compose start

# Parar o projeto
$ docker-compose stop

# Excluir a imagem do docker
$ docker-compose down
```

* [Request & Response Examples](#request--response-examples)

## Request & Response Examples

### API Resources

- [Pokemons](#pokemons)
  - [GET /pokemons](#get-pokemons)
  - [GET /pokemons/[id]](#get-pokemonsid)
  - [GET /pokemons-featured](#get-pokemons-featured)
  - [POST /pokemons](#post-pokemons)
  - [PUT /pokemons/[id]](#put-pokemons)
  - [DELETE /pokemons/[id]](#delete-pokemons)

- [Cities](#cities)
  - [GET /cities](#get-cities)
  - [GET /cities/[id]](#get-citiesid)
  - [GET /cities-featured](#get-cities-featured)
  - [POST /cities](#post-cities)
  - [PUT /cities/[id]](#put-cities)
  - [DELETE /cities/[id]](#delete-cities)

- [Items](#items)
  - [GET /items](#get-items)
  - [GET /items/[id]](#get-itemsid)
  - [GET /items-featured](#get-items-featured)
  - [POST /items](#post-items)
  - [PUT /items/[id]](#put-items)
  - [DELETE /items/[id]](#delete-items)

- [Types](#types)
  - [GET /types](#get-types)

- [Users](#users)
  - [GET /users/[id]](#get-usersid)
  - [POST /users](#post-users)
  - [PUT /users/[id]](#put-users)

- [Sessions](#sessions)
  - [POST /sessions](#post-sessions)

- [Files](#files)
  - [GET /files/[filename]](#get-filesfilename)

# Pokemons
### GET /pokemons

Example: http://localhost:3333/pokemons?page=1&limit=12

Request query:

    {
      "page": "1",
      "limit: "12",
    }

Response body:

    {
      "data": [
        {
          "id": "7e8c4c61-bd8f-462d-a30b-754fe3c33052",
          "name": "Butterfree",
          "weight": "32.0",
          "height": "1.09",
          "main_type": "Bug",
          "types": [
            "Bug",
            "Flying"
          ],
          "weakness": [
            "Fire",
            "Electric",
            "Ice",
            "Flying",
            "Rock"
          ],
          "image": null,
          "created_at": "2021-04-08T19:47:02.983Z"
        },
        {
          "id": "b1f57f0d-5831-43ca-b73a-ccae4edd8458",
          "name": "Caterpie",
          "weight": "2.9",
          "height": "0.30",
          "main_type": "Bug",
          "types": [
            "Bug"
          ],
          "weakness": [
            "Fire",
            "Flying",
            "Rock"
          ],
          "image": null,
          "created_at": "2021-04-08T19:47:02.983Z"
        },
        {
          "id": "bdf82493-7cc4-46f4-a0fa-c973aef43068",
          "name": "Chansey",
          "weight": "34.6",
          "height": "1.09",
          "main_type": "Normal",
          "types": [
            "Normal"
          ],
          "weakness": [
            "Fighting"
          ],
          "image": null,
          "created_at": "2021-04-08T19:47:02.983Z"
        },
        {
          "id": "0f2224af-2915-4eab-8a1b-07f51e864a7b",
          "name": "Charizard",
          "weight": "90.5",
          "height": "1.70",
          "main_type": "Fire",
          "types": [
            "Fire",
            "Flying"
          ],
          "weakness": [
            "Water",
            "Electric",
            "Rock"
          ],
          "image": null,
          "created_at": "2021-04-08T19:47:02.983Z"
        },
      ],
      "meta": {
        "total_records": 154,
        "total_pages": 13,
        "has_next_page": true,
        "current_page": 1
      }
    }

### GET /pokemons/[id]

Example: http://localhost:3333/pokemons/1a915b26-ab88-429f-9570-7f9bffb5ec35

Request params:

    {
      "id": "1a915b26-ab88-429f-9570-7f9bffb5ec35",
    }

Response body:

    {
      "id": "1a915b26-ab88-429f-9570-7f9bffb5ec35",
      "name": "Aerodactyl",
      "weight": "59.0",
      "height": "1.80",
      "main_type": "Rock",
      "types": [
        "Rock",
        "Flying"
      ],
      "weakness": [
        "Water",
        "Electric",
        "Ice",
        "Rock",
        "Steel"
      ],
      "image": null,
      "created_at": "2021-04-08T19:47:02.983Z"
    },


### GET /pokemons-featured

Example: http://localhost:3333/pokemons-featured?limit=12

Request query:

    {
      "limit: "12",
    }

Response body:

    [
      {
        "id": "7e8c4c61-bd8f-462d-a30b-754fe3c33052",
        "name": "Butterfree",
        "weight": "32.0",
        "height": "1.09",
        "main_type": "Bug",
        "types": [
          "Bug",
          "Flying"
        ],
        "weakness": [
          "Fire",
          "Electric",
          "Ice",
          "Flying",
          "Rock"
        ],
        "image": null,
        "created_at": "2021-04-08T19:47:02.983Z"
      },
      {
        "id": "b1f57f0d-5831-43ca-b73a-ccae4edd8458",
        "name": "Caterpie",
        "weight": "2.9",
        "height": "0.30",
        "main_type": "Bug",
        "types": [
          "Bug"
        ],
        "weakness": [
          "Fire",
          "Flying",
          "Rock"
        ],
        "image": null,
        "created_at": "2021-04-08T19:47:02.983Z"
      },
      {
        "id": "bdf82493-7cc4-46f4-a0fa-c973aef43068",
        "name": "Chansey",
        "weight": "34.6",
        "height": "1.09",
        "main_type": "Normal",
        "types": [
          "Normal"
        ],
        "weakness": [
          "Fighting"
        ],
        "image": null,
        "created_at": "2021-04-08T19:47:02.983Z"
      },
      {
        "id": "0f2224af-2915-4eab-8a1b-07f51e864a7b",
        "name": "Charizard",
        "weight": "90.5",
        "height": "1.70",
        "main_type": "Fire",
        "types": [
          "Fire",
          "Flying"
        ],
        "weakness": [
          "Water",
          "Electric",
          "Rock"
        ],
        "image": null,
        "created_at": "2021-04-08T19:47:02.983Z"
      },
    ]


### POST /pokemons

Example: Create – POST  http://localhost:3333/pokemons/

Request headers:

    {
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTc5MTU3NTksImV4cCI6MTYxODAwMjE1OSwic3ViIjoiZjFjMzg3M2EtMjc3OS00YTM3LTg5NDctNTFiYWMxMjc0YmEwIn0._Y_mvYGTQKuceMaORQZUCZ-m5ud9mEwu5ESVrVabsWc"
    }

Request body:

    {
      "name": "Abra",
      "weight": "30",
      "height": "0.8",
      "types": "['Psychic']",
      "weakness": "['Bug', 'Ghost', 'Dark']",
      "image": FILE TYPE,
    }

Response body:

    {
      "name": "abra",
      "weight": "30",
      "height": "0.8",
      "main_type": "Psychic",
      "types": "['Psychic']",
      "weakness": "['Bug', 'Ghost', 'Dark']",
      "image": "0b9b558b3e2232124ee0-0.jpg",
      "id": "26c0b95e-9327-4fba-bff3-8aecd081050d",
      "created_at": "2021-04-09T14:36:44.075Z"
    }

### PUT /pokemons

Example: Update – PUT  http://localhost:3333/pokemons/26c0b95e-9327-4fba-bff3-8aecd081050d

Request headers:

    {
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTc5MTU3NTksImV4cCI6MTYxODAwMjE1OSwic3ViIjoiZjFjMzg3M2EtMjc3OS00YTM3LTg5NDctNTFiYWMxMjc0YmEwIn0._Y_mvYGTQKuceMaORQZUCZ-m5ud9mEwu5ESVrVabsWc"
    }

Request params:

    {
      "id": "26c0b95e-9327-4fba-bff3-8aecd081050d",
    }

Request body:

    {
      "name": "Abra update name",
      "weight": "50",
      "height": "1.8",
      "types": "['Electric']",
      "weakness": "['Ground']",
      "image": FILE TYPE,
    }

Response body:

    {
      "name": "Abra update name",
      "weight": "50",
      "height": "1.8",
      "types": "['Electric']",
      "weakness": "['Ground']",
      "image": "0b9b558b3e2232124ee0-0.jpg",
      "id": "26c0b95e-9327-4fba-bff3-8aecd081050d",
      "created_at": "2021-04-09T14:36:44.075Z"
    }

  
### DELETE /pokemons

Example: Delete – DELETE  http://localhost:3333/pokemons/26c0b95e-9327-4fba-bff3-8aecd081050d

Request headers:

    {
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTc5MTU3NTksImV4cCI6MTYxODAwMjE1OSwic3ViIjoiZjFjMzg3M2EtMjc3OS00YTM3LTg5NDctNTFiYWMxMjc0YmEwIn0._Y_mvYGTQKuceMaORQZUCZ-m5ud9mEwu5ESVrVabsWc"
    }

Request params:

    {
      "id": "26c0b95e-9327-4fba-bff3-8aecd081050d",
    }

Response body:

    empty body


# Cities
### GET /cities

Example: http://localhost:3333/cities?page=1&limit=12

Request query:

    {
      "page": "1",
      "limit: "12",
    }

Response body:

    {
      "data": [
        {
          "id": "d6d82183-91d3-4b40-a200-1e565a95f880",
          "name": "Celadon City",
          "description": "É a segunda maior cidade de Kanto nos games. Nestes, ela possui uma loja de departamento (o maior Pokémart em Kanto), um hotel, um Game Corner e uma mansão. O quarto ginásio também é encontrado lá, e abriga Erika, que usa principalmente Pokémon do tipo Grama.",
          "image": null,
          "created_at": "2021-04-09T15:01:30.284Z"
        },
        {
          "id": "f432110b-a5cd-48df-93cf-3b0a87ba1aab",
          "name": "Cerulean City",
          "description": "No anime, Cerulean City é uma cidade de tamanho médio. Ela apareceu em vários episódios, já que o ginásio é administrado pelas irmãs de Misty; esta, por sua vez, se torna o Líder do ginásio no final da aventura Johto.",
          "image": null,
          "created_at": "2021-04-09T15:01:30.284Z"
        },
        {
          "id": "f8324631-655c-458c-9c7f-2317723ff173",
          "name": "Cinnabar Island",
          "description": "É o local de um laboratório e uma antiga mansão abandonada. O Ginásio está inicialmente bloqueado, mas depois de recuperar a chave da Mansão Pokémon, o jogador pode desafiar o Líder do Ginásio, Blaine, um treinador de pokemons do tipo fogo.",
          "image": null,
          "created_at": "2021-04-09T15:01:30.284Z"
        },
      ],
      "meta": {
        "total_records": 25,
        "total_pages": 3,
        "has_next_page": true,
        "current_page": 1
      }
    }

### GET /cities/[id]

Example: http://localhost:3333/cities/f8324631-655c-458c-9c7f-2317723ff173

Request params:

    {
      "id": "f8324631-655c-458c-9c7f-2317723ff173",
    }

Response body:

    {
      "id": "f8324631-655c-458c-9c7f-2317723ff173",
      "name": "Cinnabar Island",
      "description": "É o local de um laboratório e uma antiga mansão abandonada. O Ginásio está inicialmente bloqueado, mas depois de recuperar a chave da Mansão Pokémon, o jogador pode desafiar o Líder do Ginásio, Blaine, um treinador de pokemons do tipo fogo.",
      "image": null,
      "created_at": "2021-04-09T15:01:30.284Z"
    },


### GET /cities-featured

Example: http://localhost:3333/cities-featured?limit=12

Request query:

    {
      "limit: "12",
    }

Response body:

    [
      {
        "id": "d6d82183-91d3-4b40-a200-1e565a95f880",
        "name": "Celadon City",
        "description": "É a segunda maior cidade de Kanto nos games. Nestes, ela possui uma loja de departamento (o maior Pokémart em Kanto), um hotel, um Game Corner e uma mansão. O quarto ginásio também é encontrado lá, e abriga Erika, que usa principalmente Pokémon do tipo Grama.",
        "image": null,
        "created_at": "2021-04-09T15:01:30.284Z"
      },
      {
        "id": "f432110b-a5cd-48df-93cf-3b0a87ba1aab",
        "name": "Cerulean City",
        "description": "No anime, Cerulean City é uma cidade de tamanho médio. Ela apareceu em vários episódios, já que o ginásio é administrado pelas irmãs de Misty; esta, por sua vez, se torna o Líder do ginásio no final da aventura Johto.",
        "image": null,
        "created_at": "2021-04-09T15:01:30.284Z"
      },
      {
        "id": "f8324631-655c-458c-9c7f-2317723ff173",
        "name": "Cinnabar Island",
        "description": "É o local de um laboratório e uma antiga mansão abandonada. O Ginásio está inicialmente bloqueado, mas depois de recuperar a chave da Mansão Pokémon, o jogador pode desafiar o Líder do Ginásio, Blaine, um treinador de pokemons do tipo fogo.",
        "image": null,
        "created_at": "2021-04-09T15:01:30.284Z"
      },
    ]


### POST /cities

Example: Create – POST  http://localhost:3333/cities/

Request headers:

    {
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTc5MTU3NTksImV4cCI6MTYxODAwMjE1OSwic3ViIjoiZjFjMzg3M2EtMjc3OS00YTM3LTg5NDctNTFiYWMxMjc0YmEwIn0._Y_mvYGTQKuceMaORQZUCZ-m5ud9mEwu5ESVrVabsWc"
    }

Request body:

    {
      "name": "Cinnabar Island",
      "description": "É o local de um laboratório e uma antiga mansão abandonada. O Ginásio está inicialmente bloqueado, mas depois de recuperar a chave da Mansão Pokémon, o jogador pode desafiar o Líder do Ginásio, Blaine, um treinador de pokemons do tipo fogo.",
      "image": FILE TYPE,
    }

Response body:

    {
      "name": "Cinnabar Island",
      "description": "É o local de um laboratório e uma antiga mansão abandonada. O Ginásio está inicialmente bloqueado, mas depois de recuperar a chave da Mansão Pokémon, o jogador pode desafiar o Líder do Ginásio, Blaine, um treinador de pokemons do tipo fogo.",
      "image": "0b9b558b3e2232124ee0-0.jpg",
      "id": "26c0b95e-9327-4fba-bff3-8aecd081050d",
      "created_at": "2021-04-09T14:36:44.075Z"
    }

### PUT /cities

Example: Update – PUT  http://localhost:3333/cities/f8324631-655c-458c-9c7f-2317723ff173

Request headers:

    {
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTc5MTU3NTksImV4cCI6MTYxODAwMjE1OSwic3ViIjoiZjFjMzg3M2EtMjc3OS00YTM3LTg5NDctNTFiYWMxMjc0YmEwIn0._Y_mvYGTQKuceMaORQZUCZ-m5ud9mEwu5ESVrVabsWc"
    }

Request params:

    {
      "id": "f8324631-655c-458c-9c7f-2317723ff173",
    }

Request body:

    {
      "name": "Cinnabar Island updated",
      "description": "updated description",
      "image": FILE TYPE",
    }

Response body:

    {
      "name": "Cinnabar Island updated",
      "description": "updated description",
      "image": "0b9b558b3e2232124ee0-0.jpg",
      "id": "f8324631-655c-458c-9c7f-2317723ff173",
      "created_at": "2021-04-09T14:36:44.075Z"
    }

  
### DELETE /cities

Example: Delete – DELETE  http://localhost:3333/cities/f8324631-655c-458c-9c7f-2317723ff173

Request headers:

    {
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTc5MTU3NTksImV4cCI6MTYxODAwMjE1OSwic3ViIjoiZjFjMzg3M2EtMjc3OS00YTM3LTg5NDctNTFiYWMxMjc0YmEwIn0._Y_mvYGTQKuceMaORQZUCZ-m5ud9mEwu5ESVrVabsWc"
    }

Request params:

    {
      "id": "f8324631-655c-458c-9c7f-2317723ff173",
    }

Response body:

    empty body





# Items
### GET /items

Example: http://localhost:3333/items?page=1&limit=12

Request query:

    {
      "page": "1",
      "limit: "12",
    }

Response body:

    {
      "data": [
        {
          "id": "d50e3a19-eb53-4271-b453-c3034b16e2f8",
          "name": "Antídoto",
          "description": " Item que pode ser utilizado tanto fora quanto dentro de batalhas.",
          "function": "Cura seu pokémon que estiver envenenado (status poison)",
          "image": null,
          "created_at": "2021-04-09T15:09:57.261Z"
        },
        {
          "id": "0c937dda-b523-4833-8181-67d085775157",
          "name": "Cura completa",
          "description": " Item que pode ser utilizado tanto fora quanto dentro de batalhas.",
          "function": "Cura qualquer um dos problemas de status",
          "image": null,
          "created_at": "2021-04-09T15:09:57.261Z"
        },
        {
          "id": "e8101d0e-cc46-4117-b42e-bfa32930c32b",
          "name": "Cura congelamento",
          "description": "Item que pode ser utilizado tanto fora quanto dentro de batalhas.",
          "function": "Descongela seu pokémon (status frozen)",
          "image": null,
          "created_at": "2021-04-09T15:09:57.261Z"
        },
      ],
      "meta": {
        "total_records": 18,
        "total_pages": 2,
        "has_next_page": true,
        "current_page": 1
      }
    }

### GET /items/[id]

Example: http://localhost:3333/items/d50e3a19-eb53-4271-b453-c3034b16e2f8

Request params:

    {
        "id": "d50e3a19-eb53-4271-b453-c3034b16e2f8",
    }

Response body:

    {
      "id": "d50e3a19-eb53-4271-b453-c3034b16e2f8",
      "name": "Antídoto",
      "description": " Item que pode ser utilizado tanto fora quanto dentro de batalhas.",
      "function": "Cura seu pokémon que estiver envenenado (status poison)",
      "image": null,
      "created_at": "2021-04-09T15:09:57.261Z"
    },


### GET /items-featured

Example: http://localhost:3333/items-featured?limit=12

Request query:

    {
      "limit: "12",
    }

Response body:

    [
      {
        "id": "d50e3a19-eb53-4271-b453-c3034b16e2f8",
        "name": "Antídoto",
        "description": " Item que pode ser utilizado tanto fora quanto dentro de batalhas.",
        "function": "Cura seu pokémon que estiver envenenado (status poison)",
        "image": null,
        "created_at": "2021-04-09T15:09:57.261Z"
      },
      {
        "id": "0c937dda-b523-4833-8181-67d085775157",
        "name": "Cura completa",
        "description": " Item que pode ser utilizado tanto fora quanto dentro de batalhas.",
        "function": "Cura qualquer um dos problemas de status",
        "image": null,
        "created_at": "2021-04-09T15:09:57.261Z"
      },
      {
        "id": "e8101d0e-cc46-4117-b42e-bfa32930c32b",
        "name": "Cura congelamento",
        "description": "Item que pode ser utilizado tanto fora quanto dentro de batalhas.",
        "function": "Descongela seu pokémon (status frozen)",
        "image": null,
        "created_at": "2021-04-09T15:09:57.261Z"
      },
    ]


### POST /items

Example: Create – POST  http://localhost:3333/items/

Request headers:

    {
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTc5MTU3NTksImV4cCI6MTYxODAwMjE1OSwic3ViIjoiZjFjMzg3M2EtMjc3OS00YTM3LTg5NDctNTFiYWMxMjc0YmEwIn0._Y_mvYGTQKuceMaORQZUCZ-m5ud9mEwu5ESVrVabsWc"
    }

Request body:

    {
      "name": "Cura congelamento",
      "description": "Item que pode ser utilizado tanto fora quanto dentro de batalhas.",
      "function": "Descongela seu pokémon (status frozen)",
      "image": FILE TYPE,
    }

Response body:

    {
      "name": "Cura congelamento",
      "description": "Item que pode ser utilizado tanto fora quanto dentro de batalhas.",
      "function": "Descongela seu pokémon (status frozen)",
      "image": "0b9b558b3e2232124ee0-0.jpg",
      "id": "26c0b95e-9327-4fba-bff3-8aecd081050d",
      "created_at": "2021-04-09T14:36:44.075Z"
    }

### PUT /items

Example: Update – PUT  http://localhost:3333/items/e8101d0e-cc46-4117-b42e-bfa32930c32b

Request headers:

    {
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTc5MTU3NTksImV4cCI6MTYxODAwMjE1OSwic3ViIjoiZjFjMzg3M2EtMjc3OS00YTM3LTg5NDctNTFiYWMxMjc0YmEwIn0._Y_mvYGTQKuceMaORQZUCZ-m5ud9mEwu5ESVrVabsWc"
    }

Request params:

    {
        "id": "e8101d0e-cc46-4117-b42e-bfa32930c32b",
    }

Request body:

    {
      "name": "Cura congelamento edited",
      "description": "Item que pode ser utilizado tanto fora quanto dentro de batalhas- edited",
      "function": "Descongela seu pokémon (status frozen)",
      "image": FILE TYPE,
    },

Response body:

    {
      "name": "Cura congelamento edited",
      "description": "Item que pode ser utilizado tanto fora quanto dentro de batalhas- edited",
      "function": "Descongela seu pokémon (status frozen)",
      "image": "0b9b558b3e2232124ee0-0.jpg",
      "id": "e8101d0e-cc46-4117-b42e-bfa32930c32b",
      "created_at": "2021-04-09T14:36:44.075Z"
    }

  
### DELETE /items

Example: Delete – DELETE  http://localhost:3333/items/e8101d0e-cc46-4117-b42e-bfa32930c32b

Request headers:

    {
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTc5MTU3NTksImV4cCI6MTYxODAwMjE1OSwic3ViIjoiZjFjMzg3M2EtMjc3OS00YTM3LTg5NDctNTFiYWMxMjc0YmEwIn0._Y_mvYGTQKuceMaORQZUCZ-m5ud9mEwu5ESVrVabsWc"
    }

Request params:

    {
      "id": "e8101d0e-cc46-4117-b42e-bfa32930c32b",
    }

Response body:

    empty body


# Types
### GET /types

Example: http://localhost:3333/types

Response body:

    [
      {
        "id": "6c483064-b05d-4f60-811c-b33f4414c006",
        "name": "Normal",
        "created_at": "2021-04-08T19:46:24.113Z"
      },
      {
        "id": "c0b034c1-bbbd-453f-aaa5-7b224e013ccc",
        "name": "Water",
        "created_at": "2021-04-08T19:46:24.113Z"
      },
      {
        "id": "40d3fdf6-c1d9-4616-8225-59f02cb8b6c5",
        "name": "Electric",
        "created_at": "2021-04-08T19:46:24.113Z"
      },
      {
        "id": "b17990dc-bf24-4b5c-802e-2af2bef13a45",
        "name": "Fire",
        "created_at": "2021-04-08T19:46:24.113Z"
      },
      {
        "id": "60a479fa-8091-4251-a463-a8733aedf262",
        "name": "Psychic",
        "created_at": "2021-04-08T19:46:24.113Z"
      },
      {
        "id": "115faa4e-633b-4175-9489-e39814c313ec",
        "name": "Grass",
        "created_at": "2021-04-08T19:46:24.113Z"
      },
      {
        "id": "115b8f6f-dd41-4fd1-a0b6-fa0a95328d1f",
        "name": "Ice",
        "created_at": "2021-04-08T19:46:24.113Z"
      },
      {
        "id": "de733e43-5934-4a6b-a73a-06411e6d309f",
        "name": "Fairy",
        "created_at": "2021-04-08T19:46:24.113Z"
      },
      {
        "id": "5009d764-0be6-4666-af18-8544bea1f64c",
        "name": "Poison",
        "created_at": "2021-04-08T19:46:24.113Z"
      },
      {
        "id": "1e1dac20-d289-42a7-a38b-6e67c9761b7f",
        "name": "Bug",
        "created_at": "2021-04-08T19:46:24.113Z"
      },
      {
        "id": "24f124d2-c727-4dd1-9ea5-fcdf91d23ddd",
        "name": "Fighting",
        "created_at": "2021-04-08T19:46:24.113Z"
      },
      {
        "id": "d9f6ed1b-cc2e-45c6-aba4-91a6c480dcd9",
        "name": "Rock",
        "created_at": "2021-04-08T19:46:24.113Z"
      },
      {
        "id": "16e60ecf-3c81-4a21-aaaa-83ff960581f1",
        "name": "Ghost",
        "created_at": "2021-04-08T19:46:24.113Z"
      },
      {
        "id": "8809efe0-f90f-43ff-9781-f721b6776903",
        "name": "Flying",
        "created_at": "2021-04-08T19:46:24.113Z"
      },
      {
        "id": "0c7369ea-69d8-451b-92e6-724eed37cf70",
        "name": "Ground",
        "created_at": "2021-04-08T19:46:24.113Z"
      },
      {
        "id": "cc42aaa9-b3a4-42be-bc3d-621757bbdc44",
        "name": "Dragon",
        "created_at": "2021-04-08T19:46:24.113Z"
      },
      {
        "id": "dc8983b0-fb3b-4702-9012-ed3d9f76362d",
        "name": "Dark",
        "created_at": "2021-04-08T19:46:24.113Z"
      },
      {
        "id": "da8a804f-1a6f-4d4e-b962-1e0d02819a1f",
        "name": "Steel",
        "created_at": "2021-04-08T19:46:24.113Z"
      }
    ]


# Users
### GET /users/[id]

Example: http://localhost:3333/users/f1c3873a-2779-4a37-8947-51bac1274ba0

Request params:

    {
        "id": "f1c3873a-2779-4a37-8947-51bac1274ba0",
    }

Response body:

    {
      "id": "f1c3873a-2779-4a37-8947-51bac1274ba0",
      "name": "user test",
      "email": "test@test.com",
      "created_at": "2021-04-08T21:02:38.449Z"
    }


### POST /users

Example: Create – POST  http://localhost:3333/users/

Request body:

    {
      "name": "User test",
      "email": "test@test.com",
      "password": "test123456",
    }

Response body:

    {
      "name": "User test",
      "email": "test@test.com",
      "id": "26c0b95e-9327-4fba-bff3-8aecd081050d",
      "created_at": "2021-04-09T14:36:44.075Z"
    }


### PUT /users

Example: Update – PUT  http://localhost:3333/users/26c0b95e-9327-4fba-bff3-8aecd081050d

Request headers:

    {
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTc5MTU3NTksImV4cCI6MTYxODAwMjE1OSwic3ViIjoiZjFjMzg3M2EtMjc3OS00YTM3LTg5NDctNTFiYWMxMjc0YmEwIn0._Y_mvYGTQKuceMaORQZUCZ-m5ud9mEwu5ESVrVabsWc"
    }

Request params:

    {
        "id": "26c0b95e-9327-4fba-bff3-8aecd081050d",
    }

Request body:

    {
      "name": "User test edited",
      "email": "test@testedited.com",
      "password": "passwordedited",
    },

Response body:

    {
      "name": "User test edited",
      "email": "test@testedited.com",
      "id": "26c0b95e-9327-4fba-bff3-8aecd081050d",
      "created_at": "2021-04-09T14:36:44.075Z"
    }


# Sessions
### POST /sessions

Example: http://localhost:3333/sessions

Response body:

Request body:

    {
      "email": "test@testedited.com",
      "password": "passwordedited",
    },

Response body:

    {
      "user": {
        "id": "f1c3873a-2779-4a37-8947-51bac1274ba0",
        "name": "User test",
        "email": "test@testedited.com",
        "created_at": "2021-04-08T21:02:38.449Z"
      },
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTc5MTU3NTksImV4cCI6MTYxODAwMjE1OSwic3ViIjoiZjFjMzg3M2EtMjc3OS00YTM3LTg5NDctNTFiYWMxMjc0YmEwIn0._Y_mvYGTQKuceMaORQZUCZ-m5ud9mEwu5ESVrVabsWc"
    }


# Files
### GET /files/[filename]

Example: http://localhost:3333/files/e3aa059cc520f04244e4-Zubat.png

Response body:

    image file
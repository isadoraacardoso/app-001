# Revitalize Clínica

> Aplicativo móvel para uma clínica de estética, desenvolvido com **React Native** e possivelmente **Expo**, com funcionalidades de busca, filtro por categorias, visualização de imagens e navegação intuitiva.

##  Visual do App
<img width="332" height="579" alt="Captura de tela 2025-08-24 122417" src="https://github.com/user-attachments/assets/269d1158-ea33-4cf0-aeec-72d0157b72d4" />

---

##  Tecnologias Utilizadas

- **React Native** – plataforma principal para desenvolvimento mobile
- **TypeScript** – tipagem estática (aproximadamente 100% do código usa TS) 
- **React Navigation** – navegação entre telas
- **react-icons** – ícones (como `IoSearch`, `GiHamburgerMenu`, etc.)
- **FlatList**, **Modal**, **Pressable** – componentes de interface do React Native

---

##  Como Rodar o Projeto Localmente

### Requisitos

- Node.js (versão LTS recomendada)
- Expo CLI 
- Yarn ou npm

### Passos

1. Clone o repositório:
   ```bash
   git clone https://github.com/isadoraacardoso/revitalizeclinica.git
   cd revitalizeclinica

2. Instale as dependências:
  ```bash
  npm install
  # ou
  yarn install
 ```

3. Inicie o servidor de desenvolvimento:
  ```bash
  npm start
  # ou
  yarn start
 ```

4. Abra o app no seu dispositivo ou emulador:

Escaneie o QR code com o app Expo Go

Ou utilize a (emulador Android) / i (simulador iOS) / w (web)

---

## Funcionalidades do App

- Menu lateral (hamburger menu) para filtrar serviços (Todos, Sobrancelhas, Maquiagens)

- Busca ativa por título dos serviços

- Exibição em grid de cards, com layout responsivo (2 por linha, via CSS ou estilos flexbox)

- Modal de visualização de imagem ao clicar em "Ver mais"

- Potencial para navegação entre telas com React Navigation

---

### Como Contribuir

1. Faça um fork do repositório

2. Crie uma branch com sua feature ou bug fix:
```bash
git checkout -b minha-feature
```

3. Faça suas alterações e commit:
```bash
git commit -m "Descrição da feature"
```

4. Envie para o repositório remoto:
```bash
git push origin minha-feature
```

Abra um Pull Request com descrição clara do que foi implementado.

---

Desenvolvido por Isadora Aparecida Cardoso Carvalho

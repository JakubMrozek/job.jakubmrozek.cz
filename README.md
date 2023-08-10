# Next.js App with OpenAI Chatbot

This is my #OpenToWork project – a straightforward Next.js application with an integrated OpenAI chatbot.

## Technologies and Libraries Utilized

- [Next.js](https://nextjs.org): The foundation of the project, enabling server-side rendering and efficient routing.
- [Prisma](https://prisma.io): Facilitating the interaction with PostgreSQL.
- [tRPC](https://trpc.io): A framework for type-safe APIs and efficient data fetching.
- [Chakra UI](https://chakra-ui.com): Providing a set of accessible and customizable UI components.
- [React Query](https://react-query.tanstack.com): Aiding in the management of data fetching and synchronization.
- [MDX](https://nextjs.org/docs/pages/building-your-application/configuring/mdx): Enabling the incorporation of Markdown content into the application.
- [react-intl](https://formatjs.io/docs/react-intl): Facilitating internationalization within the application.
- [OpenAI Node.js client](https://github.com/openai/openai-node): The bridge between the Next.js app and the OpenAI chatbot.

## Installation and Usage

### 1. Clone the repository and install dependencies

```bash
git clone git@github.com:JakubMrozek/job.jakubmrozek.cz.git my-app
cd my-app
npm install
```

### 2. Create .env file in the root directory and add the following variables

```bash
# database url connection string
DATABASE_URL="postgresql://user:password@localhost/dbname"

# OpenAI API key, look at https://help.openai.com/en/articles/4936850-where-do-i-find-my-secret-api-key
OPENAI_API_KEY="open ai api key"
```

### 3. Set up PostgreSQL database

```bash
npm run build
```

### 4. Run the application

```bash
npm run dev
```

##  License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for more information.

import Head from 'next/head';
import PixForm from '../components/PixForm';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Sistema de PIX Dinâmico - Mercado Pago</title>
        <meta name="description" content="Sistema de PIX Dinâmico usando Mercado Pago" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Sistema de PIX Dinâmico com Mercado Pago</h1>
        <p className="description">
          Preencha o formulário abaixo para gerar um PIX dinâmico.
        </p>
        <div className="form-container">
          <PixForm />
        </div>
      </main>

      <footer>
        <p>Desenvolvido com Next.js e Mercado Pago</p>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: #f0f0f0;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
          text-align: center;
        }

        .description {
          text-align: center;
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .form-container {
          background-color: white;
          border-radius: 8px;
          padding: 2rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          margin-top: 2rem;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}

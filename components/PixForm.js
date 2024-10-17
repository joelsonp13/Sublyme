import { useState } from 'react';
import Image from 'next/image';

export default function PixForm() {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [pixData, setPixData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/create-pix', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          transaction_amount: amount,
          description: description,
          payer_email: email,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setPixData(data);
      } else {
        throw new Error('Falha ao criar o PIX');
      }
    } catch (error) {
      console.error(error);
      alert('Erro ao criar o PIX. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="pix-form">
        <div className="form-group">
          <label htmlFor="amount">Valor:</label>
          <input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Digite o valor"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Descrição:</label>
          <input
            id="description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Digite a descrição"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail do pagador:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite o e-mail"
            required
          />
        </div>
        <button type="submit" disabled={loading} className="submit-button">
          {loading ? 'Gerando PIX...' : 'Gerar PIX'}
        </button>
      </form>

      {pixData && (
        <div className="pix-result">
          <h2>PIX gerado com sucesso!</h2>
          <p>ID do pagamento: {pixData.id}</p>
          {pixData.qr_code_base64 && (
            <div className="qr-code-container">
              <Image
                src={`data:image/png;base64,${pixData.qr_code_base64}`}
                alt="QR Code do PIX"
                width={200}
                height={200}
              />
            </div>
          )}
          <p>Código PIX copia e cola:</p>
          <textarea readOnly value={pixData.qr_code} className="pix-code" />
        </div>
      )}

      <style jsx>{`
        .pix-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        label {
          margin-bottom: 0.5rem;
          font-weight: bold;
        }

        input {
          padding: 0.5rem;
          font-size: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        .submit-button {
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 4px;
          padding: 0.75rem;
          font-size: 1rem;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .submit-button:hover {
          background-color: #0051bb;
        }

        .submit-button:disabled {
          background-color: #ccc;
          cursor: not-allowed;
        }

        .pix-result {
          margin-top: 2rem;
          text-align: center;
        }

        .qr-code-container {
          display: flex;
          justify-content: center;
          margin: 1rem 0;
        }

        .pix-code {
          width: 100%;
          height: 100px;
          resize: none;
          padding: 0.5rem;
          font-family: monospace;
          font-size: 0.9rem;
        }
      `}</style>
    </div>
  );
}

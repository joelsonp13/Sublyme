import mercadopago from '../../utils/mercadopago';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { transaction_amount, description, payer_email } = req.body;

      const payment_data = {
        transaction_amount: Number(transaction_amount),
        description: description,
        payment_method_id: 'pix',
        payer: {
          email: payer_email,
        },
      };

      const payment = await mercadopago.payment.create(payment_data);
      
      const qr_code = payment.body.point_of_interaction.transaction_data.qr_code;
      const qr_code_base64 = payment.body.point_of_interaction.transaction_data.qr_code_base64;

      res.status(200).json({
        id: payment.body.id,
        qr_code: qr_code,
        qr_code_base64: qr_code_base64,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao criar o pagamento PIX' });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Método não permitido');
  }
}

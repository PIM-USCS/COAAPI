import nodemailer from "nodemailer";

export async function RecuperarSenhaService(email: string, resetToken: string) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "coa.recuperar.senha@gmail.com",
      pass: "maotftnvvjoteegs",
    },
  });

  const mailOptions = {
    from: "coa.recuperar.senha@gmail.com",
    to: email,
    subject: "Recuperação de Senha",
    html: `<p>Segue seu token para redefinr a senha</p>
           <p>${resetToken}</p>`,
  };
  try {
    await transporter.sendMail(mailOptions);
    console.log("E-mail enviado com sucesso");
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
  }
}

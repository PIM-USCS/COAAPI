import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET || "suaChaveSecreta";

export function generateToken(userId: string): string {
  const payload = {
    sub: userId,
  };

  const options = {
    expiresIn: "1h",
  };

  return jwt.sign(payload, secret, options);
}

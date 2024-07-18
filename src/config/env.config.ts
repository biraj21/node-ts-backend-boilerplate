import dotenv from "dotenv";

dotenv.config();

const env = {
  PORT: Number(process.env.PORT),
};

for (const key in env) {
  const value = env[key as keyof typeof env];
  if (typeof value === "number" && isNaN(value)) {
    throw new Error(`'${key}' missing in env`);
  } else if (!value) {
    throw new Error(`'${key}' missing in env`);
  }
}

export default env;

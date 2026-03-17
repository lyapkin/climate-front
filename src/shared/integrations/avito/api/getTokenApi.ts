export const getAvitoTokenApi = async (): Promise<Response> => {
  const body = new URLSearchParams();
  body.append("grant_type", "client_credentials");
  body.append("client_id", process.env.AVITO_CLIENT_ID as string);
  body.append("client_secret", process.env.AVITO_CLIENT_SECRET as string);

  try {
    const res = await fetch("https://api.avito.ru/token", {
      method: "POST",
      body,
    });

    const data = await res.json();

    return {
      success: true,
      token: data.access_token,
      expiration: Date.now() + 86000 * 1000,
    };
  } catch (err) {
    console.log(err);
    const errorMessage = err instanceof Error ? err.message : String(err);
    return {
      success: false,
      error: errorMessage,
    };
  }
};

type Response =
  | {
      success: true;
      token: string;
      expiration: number;
    }
  | {
      success: false;
      error: string;
    };

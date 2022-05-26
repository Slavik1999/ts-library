let initalKey = "";

const getErrorMessege = (error: any) => {
  if (error.response.status > 500) {
    throw new Error("server error");
  }
  throw new Error(error.response.data.message);
};

export function initKey(key: string) {
  initalKey = key;
}

export async function getProductList() {
  const token = initalKey;

  try {
    const data = await fetch("https://3dmodels.nyblecraft.com/api/deepmodels", {
      headers: {
        'X-API-KEY': `${token}`,
      },
    });

    return data.json();
  } catch (error: any) {
    return getErrorMessege(error);
  }
}

export async function getProduct(productId: string) {
  const token = initalKey;

  try {
    const data = await fetch(
      `https://3dmodels.nyblecraft.com/api/deepmodels/${productId}`,
      {
        headers: {
          'X-API-KEY': `${token}`,
        },
      }
    );

    return data.json();
  } catch (error: any) {
    return getErrorMessege(error);
  }
}
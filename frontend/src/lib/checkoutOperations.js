export async function validateCart(cart) {
  try {
    const response = await fetch("http://localhost:3000/api/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cart }),
    });

    if (!response.ok) {
      throw new Error(`Error en el checkout: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al procesar el checkout:", error);
    return [];
  }
}

export async function checkoutCart(billing, cart) {
  try {
    const response = await fetch("http://localhost:3000/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...billing, cart }),
    });

    const result = await response.json();

    if (response.ok) {
      return result;
    } else {
      console.error("Checkout failed:", result.errors || result);
    }
  } catch (error) {
    console.error("Error sending data to the API:", error);
  }
}

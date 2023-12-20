window.addEventListener('DOMContentLoaded', () => {
  const protectionInStore = localStorage.getItem('cart_protection')
  if (protectionInStore != null && protectionInStore !== undefined) {
    const variantID = protectionInStore

    const removeRequest = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        id: String(variantID),
        quantity: 0
      })
    }
    fetch('/cart/change.js', removeRequest)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        localStorage.removeItem('nvd_opted_out')
        localStorage.removeItem('nvdVariant')
        localStorage.removeItem('cart_protection')
        localStorage.removeItem('nvdProtectionPrice')
        window.location.reload();
      })
  }
  ;(function storeCurrency() {
    const currency = Shopify.currency
    localStorage.setItem('nvdCurrency', JSON.stringify(currency))
  })()
})

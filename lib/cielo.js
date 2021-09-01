const fetch = require('node-fetch');

class Cielo {
    static compra(params) {

        const merch_key = 'Your_key';
        const merch_id = 'Your_id';
        
        return fetch('https://apisandbox.cieloecommerce.cielo.com.br/1/sales/', {
            method: 'post',
            body: JSON.stringify(params),
            headers: { 
                'Content-Type': 'application/json',
                'MerchantId': merch_id,
                'MerchantKey': merch_key
             },
        }).then(res => res.json());
    }

    static captura(paymentId) {

        return fetch(`https://apisandbox.cieloecommerce.cielo.com.br/1/sales/${paymentId}/capture`, {
            method: 'put',
            headers: { 
                'Content-Type': 'application/json',
                'MerchantId': merch_id,
                'MerchantKey': merch_key,
             },
        }).then(res => res.json());
    }

    static consulta(paymentId) {

        return fetch(`https://apiquerysandbox.cieloecommerce.cielo.com.br/1/sales/${paymentId}`, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'MerchantId': merch_id,
                'MerchantKey': merch_key,
            }
        }).then(res => res.json());
    }
}

module.exports = Cielo;
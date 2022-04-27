const production = "https://vps36066.publiccloud.com.br";
const dev = "http://localhost:4000";
const configs = {
  url: production,
  pixTax: 0.99,
  cardTax: 4.99,
  debitTax: 3.99,
  "100": "0.25",
  "1000": "0.20",
  "5000": "0.10",
  "10000": "0.07",
  whatsapp: "+5563991269505",
  tel: "(63) 99126-9505",
  taxes: {
    pix: 0.99,
    credit: 4.99,
    debit: 3.99,
    account_money: 4.99,
  },
};

export { configs };

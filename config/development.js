import path from 'path';

export default {
    app: {
        host: '0.0.0.0',
        port: 8000,
        jwtKey: 'dSDrrGX50oefsugOqBYmdq9pDk4KGlJGnhaoqRv5Y78=',
        defaultCurrency: 'GBP'
    },
    database: {
        servers: [
            {
                host: process.env.DB_PORT_28015_TCP_ADDR || 'localhost',
                port: process.env.DB_PORT_28015_TCP_PORT || 28015
            }
        ],
        name: 'atlas'
    },
    logs: {
        folder: path.join(__dirname, '../logs/'),
        streams: [
            {
                level: 'debug',
                stream: process.stdout // log INFO and above to stdout
            }
        ]
    },
    uploads: {
        provider: 'atlas',
        folder: path.join(process.cwd(), 'uploads'),
        baseUrl: 'localhost:8000/uploads'
    },
    emails: {
        from: {
            name: 'Nicistore.com',
            email: '247hammond@live.com'
        }
    },
    storefront: {
        label: 'http://localhost:3000',
        baseUrl: 'http://localhost:3000',
        defaultLocale: 'en'
    },
    switchPayments: {
        enabled: false,
        baseUrl: 'https://api-test.switchpayments.com/v2',
        accountId: process.env.SWITCH_ACCOUNT_ID,
        privateKey: process.env.SWITCH_PRIVATE_KEY
    },
    stripePayments: {
      enabled: true,
      privateKey: 'sk_test_mlIStAxfzT8EmHq4pXuSAqiW'// env var
    },
    mailgun: {
        domain: process.env.MAILGUN_DOMAIN,
        apiKey: process.env.MAILGUN_API_KEY
    }
}

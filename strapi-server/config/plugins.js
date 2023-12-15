module.exports = ({ env }) => ({
  'entity-notes': {
    enabled: true,
  },
  'duplicate-button': true,
  "entity-relationship-chart": {
    enabled: true,
  },
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST', 'smtp.gmail.com'),
        port: env('SMTP_PORT', 465),
        auth: {
          user: env('SMTP_USERNAME', 'Project19992@gmail.com'),
          pass: env('SMTP_PASSWORD', 'riovvidpfnlpqupi'),
        },
      },
      settings: {
        defaultFrom: 'email@gmail.com',
        defaultReplyTo: 'email@gmail.com',
      },
    },
  },
  upload: {
    config: {
      provider: "strapi-provider-upload-supabase",
      providerOptions: {
        apiUrl: env('SUPABASE_API_URL',),
        apiKey: env('SUPABASE_API_KEY',),
        bucket: env('SUPABASE_BUCKET',),
        options: {}
      }
    },
  },
});

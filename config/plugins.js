module.exports = ({ env }) => ({
    // ...
    upload: {
      config: {
        provider: 'aws-s3',
        providerOptions: {
            accessKeyId: "AKIAZL6E3XI6ZD65IR6I",
            secretAccessKey: "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",
            region: "ap-northeast-3",
            params: {
                Bucket: "e-commerce-strapi-games",
            },
        },
      },
    },
    // ...
  });
import Package from '../../package.json';

export const metadata = {
  author: Package.author,
  appName: Package.metadata.name,
  version: Package.version,
  license: Package.license,
  repository: Package.repository,
  websiteName: Package.website_name,
  tags: Package.keywords.join(' '),
  websiteUrl: Package.url,
  copyright: Package.metadata.copyright_notice,
};

export const reviews = [
  {
    quote:
      'Every time i visit barbercutts i get fresh cuts and clean shaves. Best barber services in town.',
    author: 'Jonathan smith',
    carrier: 'Fashion Blogger'
  },
  {
    quote:
      'Highly skilled and attentive hair stylist really suits my needs and really happy with.',
    author: 'Fonsy Campbell',
    carrier: 'Model and influencer.'
  },
  {
    quote:
      'Salon was excellent. The tone was inviting and relaxing, results are fantastic.',
    author: 'Scott Lancer',
    carrier: 'Speaker and influencer'
  }
];

export const footerAnchors: { name: string; url: string }[][] = [];


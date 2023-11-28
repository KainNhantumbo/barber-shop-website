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

export const footerAnchors: { name: string; url: string }[][] = [];
export default function convertUrlToRaw(url: string) {
  if (url) {
    const regex = /https:\/\/github\.com\/([^/]+\/[^/]+)\/tree\/([^/]+)\/(.+)/;
    const match = url.match(regex);

    if (match) {
      const reposlug = match[1];
      const branch = match[2];
      const path = match[3];

      const raw = `https://raw.githubusercontent.com/${reposlug}/${branch}/${path}/README.md`;

      return raw;
    } else {
      return null;
    }
  }
}
